# PureFusion USA EPG

This folder is the only lineup for the USA guide. It uses the existing iptv-org/epg scrapers and does not replace them. UK and Canadian channels are out of scope.

The guide is published as XMLTV for PureFusionIPTV and for IPTVEditor's External EPG Source.

## Channel list

Edit `custom/usa.channels.xml`. One `<channel>` is one guide entry.

```xml
<channel site="tvpassport.com" site_id="amc--eastern-feed-hd/6219" lang="en" xmltv_id="AMC.us@East">AMC - Eastern Feed HD</channel>
```

| Attribute | Meaning |
| --- | --- |
| `site` | Scraper to use. Prefer `tvpassport.com`. |
| `site_id` | That site's channel id. Copy it from the site file. |
| `lang` | Listing language, usually `en`. |
| `xmltv_id` | Stable iptv-org id. Players map on this value. |
| text | Display name copied from the site file. |

`xmltv_id` must stay stable. Use the id already published by iptv-org, including the feed when the database has one, such as `AMC.us@East` or `NewsmaxTV.us@SD`. Do not invent a PureFusion id.

A local station is usually a feed of its network. Tampa Bay Fox is `Fox.us@WTVT`, not `WTVT.us`, because `WTVT.us` is not an id in the current iptv-org database. Check a candidate with:

```sh
npm run channels:validate -- custom/usa.channels.xml
```

Warnings about `wrong_channel_id` or `wrong_feed_id` mean the id should be corrected before you rely on it.

Keep each `xmltv_id` unique. The same channel should not be scraped from TVPassport and TVGuide at the same time.

### Source to prefer

1. `tvpassport.com` for USA coverage. Its site config requests 3 days.
2. `tvguide.com` when TVPassport has no listing. Its site config requests 2 days.
3. `zap2it.com` only when the other two do not have the channel. Its site config requests 2 days, and many of its rows have an empty `xmltv_id`. Set an official id before copying one of those rows.

There is no automatic fallback from one site to another. If a scrape fails, that channel contributes no programmes and the run is kept only when validation still passes.

### Find a channel

```sh
npm run purefusion:find-channel -- AMC
npm run purefusion:find-channel -- "Newsmax" --site=tvpassport.com
```

Copy one printed line into `usa.channels.xml`. Prefer an eastern or national HD row, and skip any line whose `xmltv_id` is empty. `--limit` defaults to 25 and can be raised up to 200.

### Add a channel

1. Search with `purefusion:find-channel`.
2. Paste one `<channel>` line into `custom/usa.channels.xml`.
3. Confirm the `xmltv_id` is unique and ends in `.us` before any `@feed`.
4. Check the file:

```sh
npm run channels:lint -- custom/usa.channels.xml
npm run channels:validate -- custom/usa.channels.xml
```

### Remove a channel

Delete that `<channel>` line. The next successful build omits it. Leave the id unchanged on every channel you keep.

## Generate locally

From the repository root:

```sh
npm install
npm run purefusion:epg
```

Defaults are `DAYS=7` and `MAX_CONNECTIONS=5`. The TVPassport scraper config is set to 3 days, and TVGuide and Zap2it are set to 2. The build still requests the `DAYS` value and keeps only programmes the source actually returns. A check of the CNN page on TVPassport still returned listing markup six days ahead; other channels may not. Nothing is invented to fill a gap.

Concurrency is capped at 5. Scheduled runs use the same defaults.

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

`DAYS` must be 1-14. `MAX_CONNECTIONS` must be 1-5.

The command writes nothing into `public/` until the guide passes validation. A failed run leaves the previous `public/guide.xml`, `public/guide.xml.gz`, and `public/status.json` untouched.

Check an existing guide again with:

```sh
npm run purefusion:validate
```

Validation requires a non-empty well-formed XMLTV document, a `<tv>` root, at least one `<channel>`, at least one `<programme>`, a file of at least 8192 bytes, and a channel count that is at least half of `usa.channels.xml` and not larger than that list. It also requires at least as many programmes as channels.

## GitHub Action

Workflow: `.github/workflows/purefusion-usa-epg.yml`

Schedule: 06:00 UTC and 18:00 UTC.

Manual run: Actions → PureFusion USA EPG → Run workflow. Optional inputs are `days` (default 7) and `maxConnections` (default 5).

The workflow installs with `npm ci` on Node.js 22, builds only this USA guide, validates it, gzips it, writes `status.json`, and uploads `public/` with the official Pages actions. It does not commit the XML back to git.

If generation or validation fails, the job fails before deployment. The previous GitHub Pages deployment stays online.

## GitHub Pages

In the repository settings, open Pages → Build and deployment, and set Source to **GitHub Actions**.

For this fork the stable URLs are:

- https://eliminater74.github.io/PureFusionIPTV-EPG/guide.xml
- https://eliminater74.github.io/PureFusionIPTV-EPG/guide.xml.gz
- https://eliminater74.github.io/PureFusionIPTV-EPG/status.json
- https://eliminater74.github.io/PureFusionIPTV-EPG/

The pattern for another owner or repository name is:

`https://<github-user>.github.io/<repository>/guide.xml`

Use `guide.xml` for PureFusionIPTV's XMLTV source and for IPTVEditor's External EPG Source. Use `guide.xml.gz` only when the client accepts gzip-compressed XMLTV. `status.json` is a small health file with the generation time, channel count, programme count, requested days, and `status: "ok"`. It has no credentials.

The first successful workflow run creates the Pages site. Until that run finishes, the URLs do not exist yet.

## Update from upstream

This fork tracks `upstream` at `https://github.com/iptv-org/epg.git`.

```sh
git fetch upstream
git merge upstream/master
```

Custom files live outside the scraper tree:

- `custom/`
- `public/index.html` and `public/.gitignore`
- `.github/workflows/purefusion-usa-epg.yml`
- the `purefusion:*` scripts in `package.json`

Keep those on a conflict. Do not commit `public/guide.xml`, `public/guide.xml.gz`, or `public/status.json`.
