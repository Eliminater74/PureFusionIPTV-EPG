# PureFusion USA EPG

USA-only XMLTV guide for PureFusionIPTV and IPTVEditor. The lineup is `custom/usa.channels.xml`. The scrapers stay in the upstream iptv-org/epg tree.

## Raw guide links

Paste the gzip URL into PureFusionIPTV as an XMLTV source, and into IPTVEditor as an External EPG Source.

- Gzip guide: https://eliminater74.github.io/PureFusionIPTV-EPG/guide.xml.gz
- Plain XML guide: https://eliminater74.github.io/PureFusionIPTV-EPG/guide.xml
- Build status: https://eliminater74.github.io/PureFusionIPTV-EPG/status.json
- Site index: https://eliminater74.github.io/PureFusionIPTV-EPG/

`guide.xml.gz` is a real gzip XMLTV file. The `github-pages.zip` download on the Actions run is GitHub's internal deploy package. Do not use that file as the guide.

GitHub Pages for this repo is set to build from GitHub Actions. The workflow refreshes the guide at 06:00 UTC and 18:00 UTC.

## Configured channels

28 channels. Every row is one line in `custom/usa.channels.xml`. All of them use `tvpassport.com`. The XMLTV id is the value players map against, so leave it alone once an app is using it.

| Channel | XMLTV id | TVPassport site id |
| --- | --- | --- |
| ABC - Eastern | `ABC.us@East` | `abc--eastern/1224` |
| AMC - Eastern Feed HD | `AMC.us@East` | `amc--eastern-feed-hd/6219` |
| Bravo USA HD - Eastern Feed | `Bravo.us@East` | `bravo-usa-hd--eastern-feed/6120` |
| Cartoon Network USA - Eastern Feed | `CartoonNetwork.us@East` | `cartoon-network-usa--eastern-feed/661` |
| CBS - Eastern | `CBS.us@East` | `cbs--eastern/1225` |
| CNBC USA HD | `CNBC.us@SD` | `cnbc-usa-hd/6119` |
| CNN | `CNN.us@SD` | `cnn/70` |
| Comedy Central HD - Eastern Feed | `ComedyCentral.us@East` | `comedy-central-hd--eastern-feed/6957` |
| Discovery Channel (US) - Eastern Feed | `DiscoveryChannel.us@East` | `discovery-channel-us--eastern-feed/649` |
| Disney - Eastern Feed | `DisneyChannel.us@East` | `disney--eastern-feed/595` |
| ESPN HD | `ESPN.us@SD` | `espn-hd/3036` |
| Food Network USA HD - Eastern Feed | `FoodNetwork.us@East` | `food-network-usa-hd--eastern-feed/3438` |
| FOX - Eastern | `Fox.us@East` | `fox--eastern/1229` |
| Fox News HD | `FoxNewsChannel.us@SD` | `fox-news-hd/6207` |
| FOX (WTVT) Tampa Bay, FL HD | `Fox.us@WTVT` | `fox-wtvt-tampa-bay-fl-hd/6736` |
| FX Networks East Coast HD | `FX.us@East` | `fx-networks-east-coast-hd/6111` |
| HBO HD - Eastern Feed | `HBO.us@East` | `hbo-hd--eastern-feed/627` |
| HGTV USA HD - Eastern | `HGTV.us@East` | `hgtv-usa-hd--eastern/3690` |
| MS NOW HD | `MSNBC.us@HD` | `msnbc-usa-hd/6995` |
| NBC - Network Eastern | `NBC.us@East` | `nbc--network-eastern/1227` |
| NewsMax TV | `NewsmaxTV.us@SD` | `newsmax-tv/16818` |
| Nickelodeon USA - East Feed HD | `Nickelodeon.us@East` | `nickelodeon-usa--east-feed-hd/6342` |
| PBS (WETA) HD Washington, DC | `PBS.us@WETATV` | `pbs-weta-hd-washington-dc/8180` |
| Syfy HD - Eastern Feed | `SYFY.us@East` | `syfy-hd--eastern-feed/5643` |
| TBS - East HD | `TBS.us@East` | `tbs--east-hd/6090` |
| The Weather Channel HD | `TheWeatherChannel.us@SD` | `the-weather-channel-hd/5599` |
| TLC USA HD - Eastern | `TLC.us@East` | `tlc-usa-hd--eastern/5004` |
| TNT - Eastern Feed | `TNT.us@East` | `tnt--eastern-feed/347` |

Local stations use the network feed id from the iptv-org database. Tampa Bay Fox is `Fox.us@WTVT`. PBS Washington is `PBS.us@WETATV`. MS NOW stays `MSNBC.us@HD`. SYFY is `SYFY.us@East`.

## Channel file

One `<channel>` is one guide entry:

```xml
<channel site="tvpassport.com" site_id="amc--eastern-feed-hd/6219" lang="en" xmltv_id="AMC.us@East">AMC - Eastern Feed HD</channel>
```

| Attribute | Meaning |
| --- | --- |
| `site` | Scraper. Prefer `tvpassport.com`. |
| `site_id` | That site's channel id. Copy it from the site file. |
| `lang` | Listing language, usually `en`. |
| `xmltv_id` | Stable iptv-org id. |
| text | Display name copied from the site file. |

Keep each `xmltv_id` unique. Do not list the same id from two sites.

Source order when you add a channel:

1. `tvpassport.com` for USA coverage. Its scraper config requests 3 days.
2. `tvguide.com` when TVPassport has no listing. Its scraper config requests 2 days.
3. `zap2it.com` only when the other two do not have the channel. Many Zap2it rows have an empty `xmltv_id`. Set an official id before copying one.

There is no automatic fallback. A failed channel contributes no programmes. The published guide is replaced only when validation passes.

### Find a channel

```sh
npm run purefusion:find-channel -- AMC
npm run purefusion:find-channel -- "Newsmax" --site=tvpassport.com
```

Copy one printed line into `custom/usa.channels.xml`. Prefer an eastern or national HD row. Skip a line whose `xmltv_id` is empty. `--limit` defaults to 25 and can be raised up to 200.

### Add a channel

1. Search with `purefusion:find-channel`.
2. Paste one `<channel>` line into `custom/usa.channels.xml`.
3. Confirm the `xmltv_id` is unique and the country code is `.us`.
4. Add that channel to the table in this README.
5. Check the file:

```sh
npm run channels:lint -- custom/usa.channels.xml
npm run channels:validate -- custom/usa.channels.xml
```

`wrong_channel_id` or `wrong_feed_id` means the id does not match the current iptv-org database.

### Remove a channel

Delete the `<channel>` line and its row in the table above. The next successful build omits it.

## Generate locally

From the repository root:

```sh
npm install
npm run purefusion:epg
```

Defaults are `DAYS=7` and `MAX_CONNECTIONS=5`. The build requests that many days and keeps only programmes the source returns. TVPassport's own scraper config is 3 days, TVGuide and Zap2it are 2. A CNN page check still showed listing markup six days ahead. Other channels may not. Nothing is invented to fill a gap.

`DAYS` must be 1-14. `MAX_CONNECTIONS` must be 1-5.

PowerShell:

```powershell
$env:DAYS = "3"
$env:MAX_CONNECTIONS = "3"
npm run purefusion:epg
```

bash:

```sh
DAYS=3 MAX_CONNECTIONS=3 npm run purefusion:epg
```

A failed run leaves the previous `public/guide.xml`, `public/guide.xml.gz`, and `public/status.json` in place. Check a guide again with:

```sh
npm run purefusion:validate
```

Validation requires a non-empty well-formed XMLTV document, a `<tv>` root, at least one `<channel>`, at least one `<programme>`, at least 8192 bytes, a channel count no larger than the lineup and at least half of it, and at least as many programmes as channels.

## GitHub Action

Workflow: `.github/workflows/purefusion-usa-epg.yml`

- Schedule: 06:00 UTC and 18:00 UTC.
- Manual run: Actions → PureFusion USA EPG → Run workflow.
- Optional inputs: `days` (default 7) and `maxConnections` (default 5).

The workflow uses Node.js 22 and `npm ci`, builds only this USA guide, validates it, writes the gzip and `status.json`, and deploys `public/` with the official Pages actions. It does not commit the XML into git.

If generation or validation fails, the job stops before deployment. The previous Pages guide stays online.

## Update from upstream

This fork tracks `upstream` at https://github.com/iptv-org/epg.git.

```sh
git fetch upstream
git merge upstream/master
```

Keep these on a conflict:

- `custom/`
- `public/index.html` and `public/.gitignore`
- `.github/workflows/purefusion-usa-epg.yml`
- the `purefusion:*` scripts in `package.json`

Do not commit `public/guide.xml`, `public/guide.xml.gz`, or `public/status.json`.
