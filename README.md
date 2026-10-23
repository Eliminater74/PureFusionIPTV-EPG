# PureFusion USA EPG

USA-only XMLTV guide for PureFusionIPTV and IPTVEditor. The lineup is [`custom/usa.channels.xml`](custom/usa.channels.xml). Setup notes are in [`custom/README.md`](custom/README.md).

## Raw guide links

Paste the gzip URL into PureFusionIPTV as an XMLTV source, and into IPTVEditor as an External EPG Source.

- Gzip guide: https://eliminater74.github.io/PureFusionIPTV-EPG/guide.xml.gz
- Plain XML guide: https://eliminater74.github.io/PureFusionIPTV-EPG/guide.xml
- Build status: https://eliminater74.github.io/PureFusionIPTV-EPG/status.json
- Site index: https://eliminater74.github.io/PureFusionIPTV-EPG/

`guide.xml.gz` is the guide. The `github-pages.zip` file on the Actions run is GitHub's internal deploy package, not the guide.

The guide refreshes at 06:00 UTC and 18:00 UTC.

## Configured channels

3525 USA channels. One row is one unique XMLTV id in [`custom/usa.channels.xml`](custom/usa.channels.xml). TVPassport is used first. TVGuide, TVTV, OnTVTonight, Pluto TV, Plex, Xumo, DistroTV, Samsung TV Plus US, PBS, and MeTV fill ids TVPassport does not map. East or HD is used when the same id has more than one listing. The XMLTV id is what players map against.

Sources in this file: tvpassport.com 1399, tvguide.com 46, tvtv.us 1516, ontvtonight.com 48, pluto.tv 205, plex.tv 146, xumo.tv 31, distro.tv 11, i.mjh.nz 123.

| Channel | XMLTV id | Source | Site id |
| --- | --- | --- | --- |
| (KKPM-CD4) Sacramento, CA | `KKPMCD284.us@SD` | `tvtv.us` | `92483` |
| (KMTP) San Francisco, CA | `KMTPTV501.us@HD` | `tvtv.us` | `47121` |
| [adult swim]East | `AdultSwim.us@East` | `tvtv.us` | `83166` |
| [adult swim]West | `AdultSwim.us@West` | `tvtv.us` | `110135` |
| 24 Hour Free Movies | `24HourFreeMovies.us@SD` | `plex.tv` | `5fd115bab7ef8d002dcf181d` |
| 360 North (K05FW-D3) Girdwood, AK | `K05FWD73.us@SD` | `tvtv.us` | `12531` |
| 365BLK [FAST] | `365BLK.us@SD` | `plex.tv` | `6745dca72832b870acf53220` |
| 3ABN Dare to Dream (K17JI-D3) Fresno, CA | `K17JID123.us@SD` | `tvtv.us` | `84835` |
| 3ABN Latino (K17JI-DT4) Fresno, CA | `K17JID124.us@SD` | `tvtv.us` | `84836` |
| 3ABN Latino (K21DO-DT4) Palm Springs, CA | `K21DOD214.us@SD` | `tvtv.us` | `102715` |
| 3ABN Latino (K31NF-D2) Verde Valley, Etc., AZ | `K31NFD312.us@SD` | `tvtv.us` | `35565` |
| 3ABN Latino (KLFB-LD2) Salinas, CA | `KLFBLD222.us@SD` | `tvtv.us` | `78682` |
| 3ABN Latino (KQMM-CD) Santa Maria, CA | `KQMMCD291.us@SD` | `tvtv.us` | `68599` |
| 3ABN Proclaim (K17JI-D2) Fresno, CA | `K17JID122.us@SD` | `tvtv.us` | `84834` |
| 3ABN Proclaim (K21DO-D2) Palm Springs, CA | `K21DOD212.us@SD` | `tvtv.us` | `102714` |
| 3ABN Proclaim (K32LO-D3) Prescott, AZ | `K32LOD193.us@SD` | `tvtv.us` | `35587` |
| 3ABN Proclaim (KLFB-LD3) Salinas, CA | `KLFBLD223.us@SD` | `tvtv.us` | `78683` |
| 45tv (KSTC-DT2) St Paul, MN | `KSTCTV52.us@HD` | `tvtv.us` | `32822` |
| 48 Hours | `48Hours.us@SD` | `pluto.tv` | `6176f39e709f160007ec61c3` |
| 50 Cent Action | `50CentAction.us@SD` | `plex.tv` | `6827b9579beea89c38b6df55` |
| 5StarMax | `5StarMax.us@East` | `tvguide.com` | `9233011931` |
| 70s Cinema | `70sCinema.us@SD` | `pluto.tv` | `5f4d878d3d19b30007d2e782` |
| 80s Rewind | `80sRewind.us@SD` | `pluto.tv` | `5ca525b650be2571e3943c63` |
| 90s Throwback | `90sThrowback.us@SD` | `pluto.tv` | `5f4d86f519358a00072b978e` |
| A&E | `AE.us@East` | `tvguide.com` | `9200004889` |
| A&E Crime 360 | `Crime360.us@SD` | `plex.tv` | `5f74cf7effbe690040689f41` |
| A&E West | `AE.us@West` | `tvtv.us` | `21760` |
| AAN (KFMS-LD5) Sacramento, CA | `KFMSLD475.us@SD` | `tvtv.us` | `106415` |
| ABC - Central | `ABC.us@Central` | `tvpassport.com` | `abc--central/9910` |
| ABC - Eastern | `ABC.us@East` | `tvpassport.com` | `abc--eastern/1224` |
| ABC - Mountain | `ABC.us@Mountain` | `tvpassport.com` | `abc--mountain/9911` |
| ABC - Pacific | `ABC.us@West` | `tvpassport.com` | `abc--pacific/4407` |
| ABC (K20JL-D) Ellensburg, WA | `K20JLD351.us@HD` | `tvpassport.com` | `abc-k20jl-d-ellensburg-wa/15132` |
| ABC (K30FN) Mankato, MN | `K30FND1.us@SD` | `tvpassport.com` | `abc-k30fn-mankato-mn/4617` |
| ABC (K45FZ) Lewiston, ID | `K45FZD1.us@SD` | `tvpassport.com` | `abc-k45fz-lewiston-id/7253` |
| ABC (KAAL) Austin, MN HD | `KAAL61.us@HD` | `tvpassport.com` | `abc-kaal-austin-mn-hd/7869` |
| ABC (KABC) Los Angeles, CA HD | `KABCTV71.us@HD` | `tvpassport.com` | `abc-kabc-los-angeles-ca-hd/4552` |
| ABC (KABY) Aberdeen, SD HD | `KABYDT1.us@SD` | `tvpassport.com` | `abc-kaby-aberdeen-sd-hd/6650` |
| ABC (KAEF) Eureka, CA HD | `KAEFTV231.us@HD` | `tvpassport.com` | `abc-kaef-eureka-ca-hd/17104` |
| ABC (KAIT) Jonesboro, AR HD | `KAIT81.us@HD` | `tvpassport.com` | `abc-kait-jonesboro-ar-hd/7873` |
| ABC (KAKE) Wichita, KS HD | `KAKE101.us@HD` | `tvpassport.com` | `abc-kake-wichita-ks-hd/5753` |
| ABC (KAMC) Lubbock, TX HD | `KAMC281.us@HD` | `tvpassport.com` | `abc-kamc-lubbock-tx-hd/6146` |
| ABC (KAPP) Yakima, WA HD | `KAPP351.us@HD` | `tvpassport.com` | `abc-kapp-yakima-wa-hd/7984` |
| ABC (KATC) Lafayette, LA HD | `KATC31.us@HD` | `tvpassport.com` | `abc-katc-lafayette-la-hd/5779` |
| ABC (KATN) Fairbanks, AK HD | `KATN21.us@HD` | `tvpassport.com` | `abc-katn-fairbanks-ak-hd/6641` |
| ABC (KATU) Portland, OR HD | `KATU321.us@HD` | `tvpassport.com` | `abc-katu-portland-or-hd/3727` |
| ABC (KATV) Little Rock, AR HD | `KATV71.us@HD` | `tvpassport.com` | `abc-katv-little-rock-ar-hd/5745` |
| ABC (KAVU) Victoria, TX HD | `KAVUTV251.us@HD` | `tvpassport.com` | `abc-kavu-victoria-tx-hd/6642` |
| ABC (KBMT) Beaumont, TX HD | `KBMT121.us@HD` | `tvpassport.com` | `abc-kbmt-beaumont-tx-hd/6643` |
| ABC (KBMY) Bismarck, ND HD | `KBMY171.us@HD` | `tvpassport.com` | `abc-kbmy-bismarck-nd-hd/8335` |
| ABC (KCAU) Sioux City, IA HD | `KCAUTV91.us@HD` | `tvpassport.com` | `abc-kcau-sioux-city-ia-hd/4648` |
| ABC (KCRG) Cedar Rapids, IA HD | `KCRGTV91.us@HD` | `tvpassport.com` | `abc-kcrg-cedar-rapids-ia-hd/5761` |
| ABC (KDKF) Klamath Falls, OR HD | `KDKF311.us@HD` | `tvpassport.com` | `abc-kdkf-klamath-falls-or-hd/7964` |
| ABC (KDNL) St. Louis. MO HD | `KDNLTV301.us@HD` | `tvpassport.com` | `abc-kdnl-st-louis-mo-hd/5726` |
| ABC (KDRV) Medford - Klamath Falls, OR HD | `KDRV121.us@HD` | `tvpassport.com` | `abc-kdrv-medford--klamath-falls-or-hd/5806` |
| ABC (KECY-DT2) Yuma, AZ HD | `KECYTV92.us@HD` | `tvpassport.com` | `abc-kecy-dt2-yuma-az-hd/6646` |
| ABC (KERO) Bakersfield, CA HD | `KEROTV231.us@HD` | `tvpassport.com` | `abc-kero-bakersfield-ca-hd/5781` |
| ABC (KESQ) Palm Springs, CA HD | `KESQTV421.us@HD` | `tvpassport.com` | `abc-kesq-palm-springs-ca-hd/4933` |
| ABC (KETV) Omaha, NE HD | `KETV71.us@HD` | `tvpassport.com` | `abc-ketv-omaha-ne-hd/4739` |
| ABC (KEYT) Santa Barbara, CA HD | `KEYTTV31.us@HD` | `tvpassport.com` | `abc-keyt-santa-barbara-ca-hd/6647` |
| ABC (KEZI) Eugene, OR HD | `KEZI91.us@HD` | `tvpassport.com` | `abc-kezi-eugene-or-hd/5776` |
| ABC (KFBB) Great Falls, MT HD | `KFBBTV51.us@HD` | `tvpassport.com` | `abc-kfbb-great-falls-mt-hd/8927` |
| ABC (KFSN) Fresno, CA HD | `KFSNTV301.us@HD` | `tvpassport.com` | `abc-kfsn-fresno-ca-hd/5744` |
| ABC (KGBD-LD) Great Bend, KS | `KGBDLD301.us@HD` | `tvpassport.com` | `abc-kgbd-ld-great-bend-ks/29192` |
| ABC (KGO) San Francisco, CA HD | `KGODT1.us@SD` | `tvpassport.com` | `abc-kgo-san-francisco-ca-hd/5716` |
| ABC (KGTV) San Diego, CA HD | `KGTV101.us@HD` | `tvpassport.com` | `abc-kgtv-san-diego-ca-hd/5729` |
| ABC (KGUN) Tucson, AZ HD | `KGUNTV91.us@HD` | `tvpassport.com` | `abc-kgun-tucson-az-hd/5754` |
| ABC (KGWC-DT2) Casper, WY | `KGWCTV142.us@SD` | `tvpassport.com` | `abc-kgwc-dt2-casper-wy/18578` |
| ABC (KHBB) Helena, MT HD | `KHBBLD211.us@HD` | `tvpassport.com` | `abc-khbb-helena-mt-hd/8928` |
| ABC (KHBS) Ft. Smith, AR HD | `KHBS401.us@HD` | `tvpassport.com` | `abc-khbs-ft-smith-ar-hd/5766` |
| ABC (KHDS-LP) Salina, KS | `KHDSLD291.us@HD` | `tvpassport.com` | `abc-khds-lp-salina-ks/8149` |
| ABC (KHGI) Kearney, NE HD | `KHGITV131.us@HD` | `tvpassport.com` | `abc-khgi-kearney-ne-hd/7686` |
| ABC (KHOG) Fayetteville, AR HD | `KHOGTV291.us@HD` | `tvpassport.com` | `abc-khog-fayetteville-ar-hd/8093` |
| ABC (KHQA-DT2) Quincy, MO HD | `KHQATV72.us@HD` | `tvpassport.com` | `abc-khqa-dt2-quincy-mo-hd/8014` |
| ABC (KHSD) Lead, SD HD | `KHSDTV71.us@HD` | `tvpassport.com` | `abc-khsd-lead-sd-hd/8333` |
| ABC (KHVO) Hilo, HI | `KHVO41.us@HD` | `tvpassport.com` | `abc-khvo-hilo-hi/26236` |
| ABC (KIFI) Idaho Falls, ID HD | `KIFITV81.us@HD` | `tvpassport.com` | `abc-kifi-idaho-falls-id-hd/6648` |
| ABC (KIII) Corpus Christi, TX HD | `KIII31.us@HD` | `tvpassport.com` | `abc-kiii-corpus-christi-tx-hd/6649` |
| ABC (KITV) Honolulu, HI | `KITV41.us@HD` | `tvpassport.com` | `abc-kitv-honolulu-hi/2653` |
| ABC (KIVI) Boise, ID | `KIVITV61.us@HD` | `tvpassport.com` | `abc-kivi-boise-id/3397` |
| ABC (KJCT) Grand Junction, CO HD | `KJCTLP1.us@SD` | `tvpassport.com` | `abc-kjct-grand-junction-co-hd/9470` |
| ABC (KJUD) Juneau, AK HD | `KJUD81.us@HD` | `tvpassport.com` | `abc-kjud-juneau-ak-hd/9471` |
| ABC (KKTQ) Cheyenne, WY HD | `KKTQLD1.us@SD` | `tvpassport.com` | `abc-kktq-cheyenne-wy-hd/9472` |
| ABC (KLAX) Alexandria, LA HD | `KLAXTV311.us@HD` | `tvpassport.com` | `abc-klax-alexandria-la-hd/9473` |
| ABC (KLBY) Colby, KS | `KLBY41.us@HD` | `tvpassport.com` | `abc-klby-colby-ks/1584` |
| ABC (KLKN) Lincoln, NE HD | `KLKN81.us@HD` | `tvpassport.com` | `abc-klkn-lincoln-ne-hd/5489` |
| ABC (KLTV) Tyler, TX HD | `KLTV71.us@HD` | `tvpassport.com` | `abc-kltv-tyler-tx-hd/9474` |
| ABC (KMAU) Wailuku, HI | `KMAU41.us@HD` | `tvpassport.com` | `abc-kmau-wailuku-hi/30057` |
| ABC (KMBC) Kansas City, MO HD | `KMBCTV91.us@HD` | `tvpassport.com` | `abc-kmbc-kansas-city-mo-hd/8877` |
| ABC (KMCY) Minot, ND HD | `KMCY141.us@HD` | `tvpassport.com` | `abc-kmcy-minot-nd-hd/8318` |
| ABC (KMGH) Denver, CO HD | `KMGHTV71.us@HD` | `tvpassport.com` | `abc-kmgh-denver-co-hd/5723` |
| ABC (KMID) Midland, TX HD | `KMID21.us@HD` | `tvpassport.com` | `abc-kmid-midland-tx-hd/7999` |
| ABC (KMIZ) Columbia, MO HD | `KMIZ171.us@HD` | `tvpassport.com` | `abc-kmiz-columbia-mo-hd/5786` |
| ABC (KMNZ-LD) Coeur D'Alene, ID | `K31QKD41.us@HD` | `tvpassport.com` | `abc-kmnz-ld-coeur-dalene-id/25478` |
| ABC (KNEP) Scottsbluff, NE HD | `KNEPDT1.us@SD` | `tvpassport.com` | `abc-knep-scottsbluff-ne-hd/8608` |
| ABC (KNXV) Phoenix, AZ HD | `KNXVTV611.us@HD` | `tvpassport.com` | `abc-knxv-phoenix-az-hd/5721` |
| ABC (KOAT) Albuquerque, NM HD | `KOATTV71.us@HD` | `tvpassport.com` | `abc-koat-albuquerque-nm-hd/5739` |
| ABC (KOCO) Oklahoma City, OK HD | `KOCOTV51.us@HD` | `tvpassport.com` | `abc-koco-oklahoma-city-ok-hd/5738` |
| ABC (KODE) Joplin, MO HD | `KODETV121.us@HD` | `tvpassport.com` | `abc-kode-joplin-mo-hd/8139` |
| ABC (KOHD) Bend, OR HD | `KOHD181.us@HD` | `tvpassport.com` | `abc-kohd-bend-or-hd/8223` |
| ABC (KOLO) Reno, NV HD | `KOLOTV81.us@HD` | `tvpassport.com` | `abc-kolo-reno-nv-hd/5770` |
| ABC (KOMO) Seattle, WA DV | `KOMOTV511.us@HD` | `tvpassport.com` | `abc-komo-seattle-wa-dv/3947` |
| ABC (KOTA) Rapid City, SD HD | `KOTATV71.us@HD` | `tvpassport.com` | `abc-kota-rapid-city-sd-hd/5791` |
| ABC (KPOB) Poplar Bluff, MO | `KPOBTV151.us@HD` | `tvpassport.com` | `abc-kpob-poplar-bluff-mo/2718` |
| ABC (KPRY) Pierre, SD HD | `KPRYTV461.us@HD` | `tvpassport.com` | `abc-kpry-pierre-sd-hd/6651` |
| ABC (KQTV) St. Joseph, MO HD | `KQTV21.us@HD` | `tvpassport.com` | `abc-kqtv-st-joseph-mo-hd/17187` |
| ABC (KRCR) Redding, CA HD | `KRCRTV71.us@HD` | `tvpassport.com` | `abc-krcr-redding-ca-hd/5782` |
| ABC (KRDO) Colorado Springs, CO HD | `KRDOTV131.us@HD` | `tvpassport.com` | `abc-krdo-colorado-springs-co-hd/7996` |
| ABC (KRGV) Weslaco, TX HD | `KRGVTV51.us@HD` | `tvpassport.com` | `abc-krgv-weslaco-tx-hd/4688` |
| ABC (KRHD) Bryan, TX HD | `KRHDCD401.us@HD` | `tvpassport.com` | `abc-krhd-bryan-tx-hd/11421` |
| ABC (KRWF) Redwood Falls, MN HD | `KRWF431.us@HD` | `tvpassport.com` | `abc-krwf-redwood-falls-mn-hd/6709` |
| ABC (KSAT) San Antonio, TX HD | `KSATTV91.us@HD` | `tvpassport.com` | `abc-ksat-san-antonio-tx-hd/9764` |
| ABC (KSAW) Twin Falls, ID HD | `KSAWLD61.us@HD` | `tvpassport.com` | `abc-ksaw-twin-falls-id-hd/10137` |
| ABC (KSAX) Alexandria, MN HD | `KSAX421.us@HD` | `tvpassport.com` | `abc-ksax-alexandria-mn-hd/10031` |
| ABC (KSBW-DT2) Monterey, CA HD | `KSBW82.us@HD` | `tvpassport.com` | `abc-ksbw-dt2-monterey-ca-hd/13484` |
| ABC (KSFY) Sioux Falls, SD HD | `KSFYTV131.us@HD` | `tvpassport.com` | `abc-ksfy-sioux-falls-sd-hd/5771` |
| ABC (KSGW) Sheridan, WY HD | `KSGWTV121.us@HD` | `tvpassport.com` | `abc-ksgw-sheridan-wy-hd/7560` |
| ABC (KSPR) Springfield, MO HD | `KSPRDT1.us@SD` | `tvpassport.com` | `abc-kspr-springfield-mo-hd/8084` |
| ABC (KSTP) St. Paul, MN HD | `KSTPTV51.us@HD` | `tvpassport.com` | `abc-kstp-st-paul-mn-hd/4773` |
| ABC (KSVI) Billings, MT HD | `KSVI61.us@HD` | `tvpassport.com` | `abc-ksvi-billings-mt-hd/8922` |
| ABC (KSWO-TV) Lawton, OK HD | `KSWOTV71.us@HD` | `tvpassport.com` | `abc-kswo-tv-lawton-ok-hd/4727` |
| ABC (KSWX-LP) Duncan, OK | `KSWXLP1.us@SD` | `tvpassport.com` | `abc-kswx-lp-duncan-ok/29160` |
| ABC (KTBS) Shreveport, LA HD | `KTBSTV31.us@HD` | `tvpassport.com` | `abc-ktbs-shreveport-la-hd/5757` |
| ABC (KTEN-DT3) Ada, OK HD | `KTEN103.us@HD` | `tvpassport.com` | `abc-kten-dt3-ada-ok-hd/8986` |
| ABC (KTKA) Topeka, KS HD | `KTKATV491.us@HD` | `tvpassport.com` | `abc-ktka-topeka-ks-hd/8148` |
| ABC (KTMF-LD) Kalispell, MT | `KTMF231.us@HD` | `tvpassport.com` | `abc-ktmf-ld-kalispell-mt/26497` |
| ABC (KTNV) Las Vegas, NV HD | `KTNVTV331.us@HD` | `tvpassport.com` | `abc-ktnv-las-vegas-nv-hd/5740` |
| ABC (KTRE) Lufkin, TX HD | `KTRE91.us@HD` | `tvpassport.com` | `abc-ktre-lufkin-tx-hd/11005` |
| ABC (KTRK) Houston, TX HD | `KTRKTV131.us@HD` | `tvpassport.com` | `abc-ktrk-houston-tx-hd/5718` |
| ABC (KTUL) Tulsa, OK HD | `KTUL81.us@HD` | `tvpassport.com` | `abc-ktul-tulsa-ok-hd/5748` |
| ABC (KTVO) Kirskville, MO HD | `KTVO31.us@HD` | `tvpassport.com` | `abc-ktvo-kirskville-mo-hd/18817` |
| ABC (KTVX) Salt Lake City, UT HD | `KTVX41.us@HD` | `tvpassport.com` | `abc-ktvx-salt-lake-city-ut-hd/4461` |
| ABC (KTWO) Casper, WY HD | `KTWOTV21.us@HD` | `tvpassport.com` | `abc-ktwo-casper-wy-hd/7543` |
| ABC (KTXS) Abilene, TX HD | `KTXSTV121.us@HD` | `tvpassport.com` | `abc-ktxs-abilene-tx-hd/17142` |
| ABC (KUPK) Garden City, KS HD | `KUPK131.us@HD` | `tvpassport.com` | `abc-kupk-garden-city-ks-hd/8159` |
| ABC (KUWB-LD) Bloomington, UT | `K22PHD301.us@HD` | `tvpassport.com` | `abc-kuwb-ld-bloomington-ut/27286` |
| ABC (KVEW) Tri-Cities, WA HD | `KVEW421.us@HD` | `tvpassport.com` | `abc-kvew-tri-cities-wa-hd/7971` |
| ABC (KVHP-LD) Jasper, TX | `KVHPLD1.us@SD` | `tvpassport.com` | `abc-kvhp-ld-jasper-tx/29748` |
| ABC (KVIA) El Paso, TX HD | `KVIATV71.us@HD` | `tvpassport.com` | `abc-kvia-el-paso-tx-hd/13533` |
| ABC (KVIH) Clovis, NM | `KVIHTV121.us@HD` | `tvpassport.com` | `abc-kvih-clovis-nm/4401` |
| ABC (KVII) Amarillo, TX HD | `KVIITV71.us@HD` | `tvpassport.com` | `abc-kvii-amarillo-tx-hd/17132` |
| ABC (KVUE) Austin, TX HD | `KVUE241.us@HD` | `tvpassport.com` | `abc-kvue-austin-tx-hd/7914` |
| ABC (KWNB) Hayes Center, NE | `KWNBLD291.us@HD` | `tvpassport.com` | `abc-kwnb-hayes-center-ne/4955` |
| ABC (KWYB-LD) Bozeman, MT | `KWYBLD281.us@HD` | `tvpassport.com` | `abc-kwyb-ld-bozeman-mt/27662` |
| ABC (KWYB) Butte, MT HD | `KWYB181.us@HD` | `tvpassport.com` | `abc-kwyb-butte-mt-hd/8930` |
| ABC (KXLY) Spokane, WA DV | `KXLYTV41.us@HD` | `tvpassport.com` | `abc-kxly-spokane-wa-dv/3945` |
| ABC (KXMD-DT2) Williston , ND | `KXMDTV112.us@HD` | `tvpassport.com` | `abc-kxmd-dt2-williston--nd/18314` |
| ABC (KXTV) Sacramento, CA HD | `KXTV101.us@HD` | `tvpassport.com` | `abc-kxtv-sacramento-ca-hd/5724` |
| ABC (KXXV) Waco, TX HD | `KXXV251.us@HD` | `tvpassport.com` | `abc-kxxv-waco-tx-hd/5763` |
| ABC (KYUR) Anchorage, AK HD | `KYUR131.us@HD` | `tvpassport.com` | `abc-kyur-anchorage-ak-hd/9458` |
| ABC (KZCO) Denver, CO HD | `KZCOLD281.us@HD` | `tvpassport.com` | `abc-kzco-denver-co-hd/18142` |
| ABC (W07DC-D) Allentown, PA | `W07DCD441.us@HD` | `tvpassport.com` | `abc-w07dc-d-allentown-pa/15303` |
| ABC (W14CO) Clarks Summit, PA | `W14COD441.us@HD` | `tvpassport.com` | `abc-w14co-clarks-summit-pa/15734` |
| ABC (W15CO) Towanda, PA | `W15COD441.us@HD` | `tvpassport.com` | `abc-w15co-towanda-pa/15737` |
| ABC (W26CV) Mansfield, PA | `W26CVD441.us@HD` | `tvpassport.com` | `abc-w26cv-mansfield-pa/15736` |
| ABC (W28DP) Pottsville, PA | `W28DPD1.us@SD` | `tvpassport.com` | `abc-w28dp-pottsville-pa/15738` |
| ABC (WAAY) Huntsville, AL HD | `WAAYTV311.us@HD` | `tvpassport.com` | `abc-waay-huntsville-al-hd/5758` |
| ABC (WABC) New York, NY HD | `WABCTV71.us@HD` | `tvpassport.com` | `abc-wabc-new-york-ny-hd/4553` |
| ABC (WABG) Greenville, MS HD | `WABGTV61.us@HD` | `tvpassport.com` | `abc-wabg-greenville-ms-hd/8809` |
| ABC (WABM-DT2) Birmingham, AL HD | `WABM682.us@HD` | `tvpassport.com` | `abc-wabm-dt2-birmingham-al-hd/16258` |
| ABC (WALB-DT2) Albany, GA HD | `WALB102.us@HD` | `tvpassport.com` | `abc-walb-dt2-albany-ga-hd/9316` |
| ABC (WAOW) Wausau, WI HD | `WAOW91.us@HD` | `tvpassport.com` | `abc-waow-wausau-wi-hd/5784` |
| ABC (WAPT) Jackson, MS HD | `WAPT161.us@HD` | `tvpassport.com` | `abc-wapt-jackson-ms-hd/15053` |
| ABC (WATE) Knoxville, TN HD | `WATETV61.us@HD` | `tvpassport.com` | `abc-wate-knoxville-tn-hd/5746` |
| ABC (WATM) Johnstown, PA HD | `WATMTV231.us@HD` | `tvpassport.com` | `abc-watm-johnstown-pa-hd/7520` |
| ABC (WATN) Memphis, TN HD | `WATNTV241.us@HD` | `tvpassport.com` | `abc-watn-memphis-tn-hd/6382` |
| ABC (WAWV) Terre Haute, IN HD | `WAWVTV381.us@HD` | `tvpassport.com` | `abc-wawv-terre-haute-in-hd/2012` |
| ABC (WBAY) Green Bay, WI HD | `WBAYTV21.us@HD` | `tvpassport.com` | `abc-wbay-green-bay-wi-hd/4897` |
| ABC (WBBJ-DT2) DVS Jackson, TN | `WBBJDT2.us@SD` | `tvpassport.com` | `abc-wbbj-dt2-dvs-jackson-tn/17489` |
| ABC (WBBJ) Jackson, TN HD | `WBBJTV71.us@HD` | `tvpassport.com` | `abc-wbbj-jackson-tn-hd/5790` |
| ABC (WBKO) Bowling Green, KY HD | `WBKO131.us@HD` | `tvpassport.com` | `abc-wbko-bowling-green-ky-hd/5792` |
| ABC (WBKP-DT2) Marquette, MI | `WBKP52.us@HD` | `tvpassport.com` | `abc-wbkp-dt2-marquette-mi/18189` |
| ABC (WBOY-DT2) Clarksburg, WV HD | `WBOYTV122.us@HD` | `tvpassport.com` | `abc-wboy-dt2-clarksburg-wv-hd/7491` |
| ABC (WBRZ) Baton Rouge, LA HD | `WBRZTV21.us@HD` | `tvpassport.com` | `abc-wbrz-baton-rouge-la-hd/5764` |
| ABC (WBUP) Ishpeming, MI HD | `WBUP101.us@HD` | `tvpassport.com` | `abc-wbup-ishpeming-mi-hd/19899` |
| ABC (WCDC) Adams, MA | `WCDCDT1.us@SD` | `tvpassport.com` | `abc-wcdc-adams-ma/4945` |
| ABC (WCHS) Charleston, WV HD | `WCHSTV81.us@HD` | `tvpassport.com` | `abc-wchs-charleston-wv-hd/5751` |
| ABC (WCJB) Gainesville, FL HD | `WCJBTV201.us@HD` | `tvpassport.com` | `abc-wcjb-gainesville-fl-hd/5430` |
| ABC (WCPO) Cincinnati, OH HD | `WCPOTV91.us@HD` | `tvpassport.com` | `abc-wcpo-cincinnati-oh-hd/3674` |
| ABC (WCTI) New Bern, NC HD | `WCTITV121.us@HD` | `tvpassport.com` | `abc-wcti-new-bern-nc-hd/5647` |
| ABC (WCVB) Boston, MA HD | `WCVBTV501.us@SD` | `tvpassport.com` | `abc-wcvb-boston-ma-hd/3661` |
| ABC (WDAM-DT2) Laurel, MS HD | `WDAMTV72.us@HD` | `tvpassport.com` | `abc-wdam-dt2-laurel-ms-hd/19170` |
| ABC (WDAY) Fargo, ND HD | `WDAYTV61.us@HD` | `tvpassport.com` | `abc-wday-fargo-nd-hd/7515` |
| ABC (WDAZ) Devil's Lake, ND HD | `WDAZTV81.us@HD` | `tvpassport.com` | `abc-wdaz-devils-lake-nd-hd/7768` |
| ABC (WDBB-DT2) Bessemer, AL | `WDBB332.us@SD` | `tvpassport.com` | `abc-wdbb-dt2-bessemer-al/13397` |
| ABC (WDHN) Dothan, AL HD | `WDHN181.us@HD` | `tvpassport.com` | `abc-wdhn-dothan-al-hd/7165` |
| ABC (WDIO) Duluth, MN HD | `WDIODT101.us@HD` | `tvpassport.com` | `abc-wdio-duluth-mn-hd/5785` |
| ABC (WEAR) Pensacola, FL HD | `WEARTV31.us@HD` | `tvpassport.com` | `abc-wear-pensacola-fl-hd/5749` |
| ABC (WEEK-DT2) Peoria, IL HD | `WEEKTV252.us@HD` | `tvpassport.com` | `abc-week-dt2-peoria-il-hd/4596` |
| ABC (WEHT) Evansville, IN HD | `WEHT251.us@HD` | `tvpassport.com` | `abc-weht-evansville-in-hd/5765` |
| ABC (WENY) Elmira, NY HD | `WENYTV361.us@HD` | `tvpassport.com` | `abc-weny-elmira-ny-hd/7163` |
| ABC (WEWS) Cleveland, OH HD | `WEWSTV51.us@HD` | `tvpassport.com` | `abc-wews-cleveland-oh-hd/3678` |
| ABC (WFAA) Dallas, TX HD | `WFAA81.us@HD` | `tvpassport.com` | `abc-wfaa-dallas-tx-hd/5417` |
| ABC (WFTS) Tampa Bay, FL HD | `WFTSTV321.us@HD` | `tvpassport.com` | `abc-wfts-tampa-bay-fl-hd/5719` |
| ABC (WFTV) Orlando, FL HD | `WFTV91.us@HD` | `tvpassport.com` | `abc-wftv-orlando-fl-hd/5725` |
| ABC (WGGB) Springfield, MA HD | `WGGBTV401.us@HD` | `tvpassport.com` | `abc-wggb-springfield-ma-hd/5767` |
| ABC (WGNO) New Orleans, LA HD | `WGNO261.us@HD` | `tvpassport.com` | `abc-wgno-new-orleans-la-hd/5737` |
| ABC (WGTU) Traverse City, MI HD | `WGTU291.us@HD` | `tvpassport.com` | `abc-wgtu-traverse-city-mi-hd/11454` |
| ABC (WGWW-DT2) Birmingham, AL HD | `WGWW402.us@HD` | `tvpassport.com` | `abc-wgww-dt2-birmingham-al-hd/18792` |
| ABC (WGXA-DT2) Macon, GA HD | `WGXA242.us@HD` | `tvpassport.com` | `abc-wgxa-dt2-macon-ga-hd/8861` |
| ABC (WHAM) Rochester, NY HD | `WHAMTV131.us@HD` | `tvpassport.com` | `abc-wham-rochester-ny-hd/5261` |
| ABC (WHAS) Louisville, KY HD | `WHASTV111.us@HD` | `tvpassport.com` | `abc-whas-louisville-ky-hd/5741` |
| ABC (WHSV) Harrisonburg, VA HD | `WHSVTV31.us@HD` | `tvpassport.com` | `abc-whsv-harrisonburg-va-hd/3745` |
| ABC (WHTM) Harrisburg, PA HD | `WHTMTV491.us@HD` | `tvpassport.com` | `abc-whtm-harrisburg-pa-hd/5735` |
| ABC (WICD) Champaign, IL HD | `WICD271.us@HD` | `tvpassport.com` | `abc-wicd-champaign-il-hd/7528` |
| ABC (WICS) Springfield, IL HD | `WICS551.us@HD` | `tvpassport.com` | `abc-wics-springfield-il-hd/4586` |
| ABC (WIRT) Hibbing, MN | `WIRTDT131.us@HD` | `tvpassport.com` | `abc-wirt-hibbing-mn/4946` |
| ABC (WISN) Milwaukee, WI HD | `WISNTV121.us@HD` | `tvpassport.com` | `abc-wisn-milwaukee-wi-hd/6857` |
| ABC (WIVT) Binghamton, NY HD | `WIVT341.us@HD` | `tvpassport.com` | `abc-wivt-binghamton-ny-hd/4745` |
| ABC (WJBF) Augusta, GA HD | `WJBF61.us@HD` | `tvpassport.com` | `abc-wjbf-augusta-ga-hd/5772` |
| ABC (WJCL) Savannah, GA HD | `WJCL221.us@HD` | `tvpassport.com` | `abc-wjcl-savannah-ga-hd/7371` |
| ABC (WJET) Erie, PA HD | `WJETTV241.us@HD` | `tvpassport.com` | `abc-wjet-erie-pa-hd/7372` |
| ABC (WJLA) District of Columbia HD | `WJLATV71.us@HD` | `tvpassport.com` | `abc-wjla-district-of-columbia-hd/3741` |
| ABC (WJRT) Flint, MI HD | `WJRTTV121.us@HD` | `tvpassport.com` | `abc-wjrt-flint-mi-hd/5752` |
| ABC (WJXX) Jacksonville, FL HD | `WJXX251.us@HD` | `tvpassport.com` | `abc-wjxx-jacksonville-fl-hd/5713` |
| ABC (WKBW) Buffalo, NY HD | `WKBWTV71.us@HD` | `tvpassport.com` | `abc-wkbw-buffalo-ny-hd/3581` |
| ABC (WKEF) Dayton, OH HD | `WKEF451.us@SD` | `tvpassport.com` | `abc-wkef-dayton-oh-hd/8790` |
| ABC (WKOW) Madison, WI HD | `WKOW271.us@HD` | `tvpassport.com` | `abc-wkow-madison-wi-hd/5759` |
| ABC (WKRN) Nashville, TN HD | `WKRNTV301.us@HD` | `tvpassport.com` | `abc-wkrn-nashville-tn-hd/5731` |
| ABC (WLAJ) Lansing, MI HD | `WLAJ61.us@HD` | `tvpassport.com` | `abc-wlaj-lansing-mi-hd/5769` |
| ABC (WLNE) Providence, RI HD | `WLNETV61.us@HD` | `tvpassport.com` | `abc-wlne-providence-ri-hd/5742` |
| ABC (WLOS) Asheville, NC HD | `WLOS131.us@HD` | `tvpassport.com` | `abc-wlos-asheville-nc-hd/5732` |
| ABC (WLOX) Biloxi, MS HD | `WLOX131.us@HD` | `tvpassport.com` | `abc-wlox-biloxi-ms-hd/5788` |
| ABC (WLS) Chicago, IL HD | `WLSDT1.us@SD` | `tvpassport.com` | `abc-wls-chicago-il-hd/5714` |
| ABC (WMAR) Baltimore, MD HD | `WMARTV21.us@HD` | `tvpassport.com` | `abc-wmar-baltimore-md-hd/5727` |
| ABC (WMBB) Panama City, FL HD | `WMBB131.us@HD` | `tvpassport.com` | `abc-wmbb-panama-city-fl-hd/5787` |
| ABC (WMDT) Salisbury, MD HD | `WMDT471.us@HD` | `tvpassport.com` | `abc-wmdt-salisbury-md-hd/8659` |
| ABC (WMTW) Auburn, ME HD | `WMTW81.us@HD` | `tvpassport.com` | `abc-wmtw-auburn-me-hd/3598` |
| ABC (WMUR) Manchester, NH HD | `WMURTV91.us@HD` | `tvpassport.com` | `abc-wmur-manchester-nh-hd/3655` |
| ABC (WNCF) Montgomery, AL HD | `WNCF321.us@HD` | `tvpassport.com` | `abc-wncf-montgomery-al-hd/5773` |
| ABC (WNEP) Scranton, PA HD | `WNEPTV441.us@HD` | `tvpassport.com` | `abc-wnep-scranton-pa-hd/5743` |
| ABC (WOAY) Oak Hill, WV HD | `WOAYTV41.us@HD` | `tvpassport.com` | `abc-woay-oak-hill-wv-hd/8293` |
| ABC (WOI) Des Moines, IA HD | `WOIDT1.us@SD` | `tvpassport.com` | `abc-woi-des-moines-ia-hd/5755` |
| ABC (WOLO) Columbia, SC HD | `WOLOTV251.us@HD` | `tvpassport.com` | `abc-wolo-columbia-sc-hd/4765` |
| ABC (WOTV) Battle Creek, MI HD | `WOTV411.us@HD` | `tvpassport.com` | `abc-wotv-battle-creek-mi-hd/5734` |
| ABC (WPBF) West Palm Beach, FL HD | `WPBF251.us@HD` | `tvpassport.com` | `abc-wpbf-west-palm-beach-fl-hd/5733` |
| ABC (WPBN-DT2) Cadillac, MI | `WPBNTV72.us@HD` | `tvpassport.com` | `abc-wpbn-dt2-cadillac-mi/17670` |
| ABC (WPDE) Lumberton, NC HD | `WPDETV151.us@HD` | `tvpassport.com` | `abc-wpde-lumberton-nc-hd/6380` |
| ABC (WPLG) Miami, FL HD | `WPLG101.us@HD` | `tvpassport.com` | `abc-wplg-miami-fl-hd/5722` |
| ABC (WPTA) Fort Wayne, IN HD | `WPTA211.us@HD` | `tvpassport.com` | `abc-wpta-fort-wayne-in-hd/3688` |
| ABC (WPVI) Philadelphia, PA HD | `WPVITV61.us@HD` | `tvpassport.com` | `abc-wpvi-philadelphia-pa-hd/5715` |
| ABC (WQAD) Quad Cities, IA HD | `WQADTV81.us@HD` | `tvpassport.com` | `abc-wqad-quad-cities-ia-hd/4492` |
| ABC (WQOW) Eau Claire, WI HD | `WQOW181.us@HD` | `tvpassport.com` | `abc-wqow-eau-claire-wi-hd/5778` |
| ABC (WRIC) Richmond, VA HD | `WRICTV81.us@HD` | `tvpassport.com` | `abc-wric-richmond-va-hd/5747` |
| ABC (WRTV) Indianapolis, IN HD | `WRTV61.us@HD` | `tvpassport.com` | `abc-wrtv-indianapolis-in-hd/5728` |
| ABC (WSB) Atlanta, GA HD | `WSBDT1.us@SD` | `tvpassport.com` | `abc-wsb-atlanta-ga-hd/5717` |
| ABC (WSET) Lynchburg, VA HD | `WSETTV241.us@HD` | `tvpassport.com` | `abc-wset-lynchburg-va-hd/3734` |
| ABC (WSIL) Carterville, IL HD | `WSILTV31.us@HD` | `tvpassport.com` | `abc-wsil-carterville-il-hd/5756` |
| ABC (WSOC) Charlotte, NC HD | `WSOCTV91.us@HD` | `tvpassport.com` | `abc-wsoc-charlotte-nc-hd/4708` |
| ABC (WSWS) North Platte, NE | `WSWSDT1.us@SD` | `tvpassport.com` | `abc-wsws-north-platte-ne/4956` |
| ABC (WSYR) Syracuse, NY HD | `WSYRTV91.us@HD` | `tvpassport.com` | `abc-wsyr-syracuse-ny-hd/4789` |
| ABC (WSYX) Columbus, OH HD | `WSYX61.us@HD` | `tvpassport.com` | `abc-wsyx-columbus-oh-hd/4731` |
| ABC (WTAE) Pittsburgh, PA HD | `WTAETV41.us@HD` | `tvpassport.com` | `abc-wtae-pittsburgh-pa-hd/3713` |
| ABC (WTEN) Albany, NY HD | `WTEN451.us@HD` | `tvpassport.com` | `abc-wten-albany-ny-hd/3706` |
| ABC (WTNH-DT1) HD New Haven, CT | `WTNH81.us@HD` | `tvpassport.com` | `abc-wtnh-dt1-hd-new-haven-ct/2054` |
| ABC (WTOK) Meridian, MS HD | `WTOKTV111.us@HD` | `tvpassport.com` | `abc-wtok-meridian-ms-hd/5793` |
| ABC (WTVA-DT2) Tupelo, MS HD | `WTVA92.us@HD` | `tvpassport.com` | `abc-wtva-dt2-tupelo-ms-hd/19175` |
| ABC (WTVC) Chattanooga, TN HD | `WTVC91.us@HD` | `tvpassport.com` | `abc-wtvc-chattanooga-tn-hd/5760` |
| ABC (WTVD) Raleigh, NC HD | `WTVD111.us@HD` | `tvpassport.com` | `abc-wtvd-raleigh-nc-hd/4820` |
| ABC (WTVG) Toledo, OH HD | `WTVG131.us@HD` | `tvpassport.com` | `abc-wtvg-toledo-oh-hd/3684` |
| ABC (WTVM) Columbus, GA HD | `WTVM91.us@HD` | `tvpassport.com` | `abc-wtvm-columbus-ga-hd/5780` |
| ABC (WTVO) Rockford, IL HD | `WTVO171.us@HD` | `tvpassport.com` | `abc-wtvo-rockford-il-hd/5783` |
| ABC (WTVQ) Lexington, KY HD | `WTVQDT361.us@HD` | `tvpassport.com` | `abc-wtvq-lexington-ky-hd/5750` |
| ABC (WTXL) Tallahassee, FL HD | `WTXLTV271.us@HD` | `tvpassport.com` | `abc-wtxl-tallahassee-fl-hd/5768` |
| ABC (WUTR) Utica, NY HD | `WUTR201.us@HD` | `tvpassport.com` | `abc-wutr-utica-ny-hd/5789` |
| ABC (WVEC) Norfolk, VA HD | `WVEC131.us@HD` | `tvpassport.com` | `abc-wvec-norfolk-va-hd/5736` |
| ABC (WVII) Bangor, ME HD | `WVIITV71.us@HD` | `tvpassport.com` | `abc-wvii-bangor-me-hd/10396` |
| ABC (WVNY) Burlington, VT HD | `WVNY221.us@HD` | `tvpassport.com` | `abc-wvny-burlington-vt-hd/4526` |
| ABC (WWAY) Wilmington, NC HD | `WWAY31.us@HD` | `tvpassport.com` | `abc-wway-wilmington-nc-hd/4797` |
| ABC (WWCP-DT2) Johnstown, PA | `WWCPTV81.us@HD` | `tvpassport.com` | `abc-wwcp-dt2-johnstown-pa/17383` |
| ABC (WWSB) Sarsota, FL HD | `WWSB401.us@HD` | `tvpassport.com` | `abc-wwsb-sarsota-fl-hd/5720` |
| ABC (WWTI) Watertown, NY HD | `WWTI501.us@HD` | `tvpassport.com` | `abc-wwti-watertown-ny-hd/13764` |
| ABC (WXLV) Winston-Salem, NC HD | `WXLVTV481.us@HD` | `tvpassport.com` | `abc-wxlv-winston-salem-nc-hd/4719` |
| ABC (WXOW) La Crosse, WI HD | `WXOW191.us@HD` | `tvpassport.com` | `abc-wxow-la-crosse-wi-hd/5777` |
| ABC (WXYZ) Detroit, MI - Canada DV | `WXYZTV71.us@HD` | `tvpassport.com` | `abc-wxyz-detroit-mi--canada-dv/3944` |
| ABC (WYOW) Eagle River, WI | `WYOW341.us@HD` | `tvpassport.com` | `abc-wyow-eagle-river-wi/4958` |
| ABC (WYTV) Youngstown, OH HD | `WYTV331.us@HD` | `tvpassport.com` | `abc-wytv-youngstown-oh-hd/8523` |
| ABC (WZVN) Fort Myers, FL HD | `WZVNTV261.us@HD` | `tvpassport.com` | `abc-wzvn-fort-myers-fl-hd/7654` |
| ABC (WZZM) Grand Rapids, MI HD | `WZZM131.us@HD` | `tvpassport.com` | `abc-wzzm-grand-rapids-mi-hd/9335` |
| ABC News Live | `ABCNewsLive.us@SD` | `tvpassport.com` | `abc-news-live/36224` |
| Acapulco Shore | `AcapulcoShore.us@US` | `pluto.tv` | `64dab1f835425100080e1e7b` |
| ACC Network | `ACCNetwork.us@SD` | `tvpassport.com` | `acc-network/33964` |
| ACCDN | `ACCDigitalNetwork.us@SD` | `plex.tv` | `5f8ee3727c75fa002d9e47c1` |
| AccuWeather (KNVN5) Chico, CA | `KNVN245.us@SD` | `tvtv.us` | `80736` |
| Accuweather (WFAA-DT2) Dallas, TX | `WFAA82.us@SD` | `tvtv.us` | `35357` |
| AccuWeather HD | `AccuWeatherNOW.us@SD` | `tvpassport.com` | `accuweather-hd/7335` |
| Ace TV (K38IZ-D2) Phoenix, AZ | `K38IZD2.us@SD` | `tvtv.us` | `16729` |
| Ace TV (WACP-DT2) Atlantic City, NJ | `WACP42.us@SD` | `tvtv.us` | `90647` |
| ACL Cornhole TV | `ACLCornholeTV.us@SD` | `plex.tv` | `63504925a97bd70eaef54f01` |
| Action (WYBN-LD7) Albany, NY | `WYBNLD147.us@SD` | `tvtv.us` | `17339` |
| Action News Jax | `ActionNewsJaxNow.us@SD` | `xumo.tv` | `350#9995110` |
| Adrenalina Sports Network | `AdrenalinaSportsNetwork.us@SD` | `tvtv.us` | `83162` |
| AFN Spectrum | `AFNSpectrum.us@SD` | `tvtv.us` | `106653` |
| AFN Sports | `AFNSports.us@SD` | `tvtv.us` | `45901` |
| AFN Sports 2 | `AFNSports2.us@SD` | `tvtv.us` | `46634` |
| Al Jazeera (KBID-LP) Coalinga, CA | `KBIDLP1.us@SD` | `tvtv.us` | `89921` |
| Al Mayadeen (KBID-LP3) Fresno, CA | `KBIDLP3.us@SD` | `tvtv.us` | `111013` |
| ALF | `ALF.us@SD` | `plex.tv` | `62d1ecc8e44d39da220722aa` |
| Aliento Vision (WMBC-DT7) Newton, NJ | `WMBCTV637.us@SD` | `tvtv.us` | `78580` |
| All Arts (WLIW-DT4) New York, NY | `WLIWDT4.us@SD` | `tvtv.us` | `55296` |
| All Reality WE tv | `AllRealitybyWEtv.us@SD` | `pluto.tv` | `5e82530945600e0007ca076c` |
| All Weddings We TV | `AllWeddingsWEtv.us@SD` | `plex.tv` | `60de0520281b17002cd1d4c4` |
| ALLBLK Gems | `ALLBLKGems.us@SD` | `pluto.tv` | `6793ea255225b515b4ba91a7` |
| Almavision (KTAV-LD) Los Angeles, CA | `KTAVLD351.us@SD` | `tvtv.us` | `71396` |
| Altitude Sports | `AltitudeSports.us@SD` | `tvtv.us` | `44263` |
| Always Funny Videos | `AlwaysFunnyVideos.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA1600001XM` |
| Amasian TV | `Anime247.us@SD` | `plex.tv` | `6838eb6a38304666c89d4e3d` |
| Amazing Facts TV (K31NF-D4) Verde Valley, Etc., AZ | `K31NFD314.us@SD` | `tvtv.us` | `35567` |
| AMC - Eastern Feed HD | `AMC.us@East` | `tvpassport.com` | `amc--eastern-feed-hd/6219` |
| AMC - Pacific Feed HD | `AMC.us@West` | `tvpassport.com` | `amc--pacific-feed-hd/10757` |
| AMC en Español | `AMCenEspanol.us@SD` | `plex.tv` | `62d1efa6c33948ea4ceedbcf` |
| AMC Plus | `AMCPlus.us@SD` | `tvtv.us` | `114759` |
| AMC Thrillers | `AMCThrillers.us@SD` | `plex.tv` | `5fc705e2a2236e002d69f36d` |
| América TeVé (WPXO-LD1) East Orange, NJ | `WPXOLD1.us@SD` | `tvtv.us` | `64144` |
| America's Auction Channel | `AmericasAuctionChannel.us@SD` | `tvtv.us` | `50180` |
| America's Test Kitchen | `AmericasTestKitchen.us@SD` | `pluto.tv` | `5e84f54a82f05300080e6746` |
| America's Voice News | `AmericasVoiceNews.us@SD` | `pluto.tv` | `5e1f7da4bc7d740009831259` |
| American Heroes Channel | `AmericanHeroesChannel.us@SD` | `tvpassport.com` | `american-heroes-channel/2035` |
| AMG TV (WBON-LD) Richmond, KY | `WBONLD91.us@HD` | `tvtv.us` | `77242` |
| AMG-TV (K38IZ-D4) Phoenix, AZ | `K38IZD4.us@SD` | `tvtv.us` | `16730` |
| AMG-TV (KDDC-LD6) Dodge City, KS | `KDDCLD236.us@SD` | `tvpassport.com` | `amg-tv-kddc-ld6-dodge-city-ks/31082` |
| AMG-TV (KDGU-LD6) Ulysses, KS | `KDGULD236.us@SD` | `tvpassport.com` | `amg-tv-kdgu-ld6-ulysses-ks/31083` |
| AMG-TV (WKFK-LD3) Biloxi, MS | `WKFKLD3.us@SD` | `tvpassport.com` | `amg-tv-wkfk-ld3-biloxi-ms/12428` |
| amga TV (KBID-LP5) Fresno, CA | `KBIDLP5.us@SD` | `tvtv.us` | `97413` |
| amga TV (KXLA10) Los Angeles, CA | `KXLA5710.us@SD` | `tvtv.us` | `69858` |
| AMP2 | `AMP2.us@SD` | `tvpassport.com` | `amp2/13283` |
| Anger Management | `AngerManagementChannel.us@SD` | `plex.tv` | `6303ca568a01b5d4dae57d0e` |
| Animal Planet US - East | `AnimalPlanet.us@East` | `tvpassport.com` | `animal-planet-us--east/645` |
| Animal Planet US - West | `AnimalPlanet.us@West` | `tvpassport.com` | `animal-planet-us--west/3549` |
| Animal Planet US HD - East | `AnimalPlanet.us@EastHD` | `tvpassport.com` | `animal-planet-us-hd--east/4537` |
| Animal Planet US HD - West | `AnimalPlanet.us@WestHD` | `tvpassport.com` | `animal-planet-us-hd--west/11524` |
| ANIME x HIDIVE | `AnimexHIDIVE.us@SD` | `pluto.tv` | `6793eaa4bc03978b9bc63db1` |
| Antenna (K19KV-D2) Prescott, AZ | `K19KVD152.us@HD` | `tvtv.us` | `35560` |
| Antenna (KAAP-LD3) Santa Cruz, CA | `KAAPLD243.us@SD` | `tvtv.us` | `113390` |
| Antenna (KGMC5) Clovis, CA | `KGMC435.us@SD` | `tvtv.us` | `116666` |
| Antenna (KKRP-LD2) St. George, UT | `KKRPLD132.us@HD` | `tvpassport.com` | `antenna-kkrp-ld2-st-george-ut/31087` |
| Antenna (KMJF-LD2) Columbus, NE | `KMJFLD162.us@HD` | `tvpassport.com` | `antenna-kmjf-ld2-columbus-ne/31088` |
| Antenna (KRET-CD4) Palm Springs, CA | `KRETCD454.us@SD` | `tvtv.us` | `102791` |
| Antenna (KTLA2) Los Angeles, CA | `KTLA52.us@SD` | `tvtv.us` | `63335` |
| Antenna (KTVI-DT2) St. Louis, MO | `KTVI22.us@SD` | `tvpassport.com` | `antenna-ktvi-dt2-st-louis-mo/9438` |
| Antenna (KTXL2) Sacramento, CA | `KTXL402.us@SD` | `tvtv.us` | `35447` |
| Antenna (KWVC-LD2) Malaga, Ect, WA | `KWVCLD2.us@SD` | `tvpassport.com` | `antenna-kwvc-ld2-malaga-ect-wa/31089` |
| Antenna (KXTU-LD4) Colorado Springs, CO | `KXTULD574.us@SD` | `tvtv.us` | `34684` |
| Antenna (KXVU-LP) Chico, CA | `KXVULP1.us@SD` | `tvtv.us` | `114613` |
| Antenna (WLFL4) Raleigh, NC | `WLFLDT4.us@SD` | `tvpassport.com` | `antenna-wlfl4-raleigh-nc/35198` |
| Antenna (WPIX-DT2) New York, NY HD | `WPIX112.us@HD` | `tvpassport.com` | `antenna-wpix-dt2-new-york-ny-hd/8737` |
| Antenna TV | `AntennaTV.us@SD` | `tvtv.us` | `70248` |
| Antenna TV (KDAF-DT2) Dallas, TX | `KDAF332.us@SD` | `tvtv.us` | `50465` |
| Antenna TV (KIAH-DT2) Houston, TX | `KIAHDT2.us@SD` | `tvtv.us` | `42954` |
| Antenna TV (KSTC-DT4) St Paul, MN | `KSTCTV54.us@SD` | `tvtv.us` | `35583` |
| Antenna TV (WGN-DT2) Chicago, IL | `WGNDT2.us@SD` | `tvtv.us` | `31044` |
| Antenna TV (WGRZ2) Buffalo, NY | `WGRZ22.us@SD` | `tvtv.us` | `47796` |
| Antenna TV (WJW-DT2) Cleveland, OH | `WJWDT2.us@SD` | `tvtv.us` | `70518` |
| Antenna TV (WPGH-DT2) Pittsburgh, PA | `WPGHTV532.us@SD` | `tvtv.us` | `46027` |
| Antenna TV (WPHL-DT2) Philadelphia, PA | `WPHLTV652.us@SD` | `tvtv.us` | `50876` |
| Antenna TV (WSFL-DT3) Miami, FL | `WSFLTV393.us@SD` | `tvtv.us` | `68675` |
| Antenna TV (WTIC-DT2) Hartford, CT | `WTICTV612.us@SD` | `tvtv.us` | `70297` |
| Antenna TV (WTVR-DT2) Richmond, KY | `WTVRTV652.us@SD` | `tvtv.us` | `46787` |
| Antenna TV (WXMI-DT2) Grand Rapids, MI | `WXMI172.us@HD` | `tvtv.us` | `50772` |
| Antenna TV(KNXV-DT2) Arizona, PX | `KNXVTV152.us@HD` | `tvtv.us` | `31039` |
| Antiques Road Trip | `AntiquesRoadTrip.us@SD` | `pluto.tv` | `615b8ec39e878900073f419a` |
| Antiques Roadshow UK | `AntiquesRoadshowUK.us@SD` | `pluto.tv` | `5ce44810b421747ae467b7cd` |
| Are We There Yet? | `AreWeThereYet.us@SD` | `plex.tv` | `612919784f53e1002c9aa219` |
| AsianCrush | `AsianCrush.us@SD` | `plex.tv` | `5eea605474085f0040ddc767` |
| Aspire TV | `Aspire.us@SD` | `tvtv.us` | `76126` |
| At Home with Family Handyman | `AtHomewithFamilyHandyman.us@SD` | `plex.tv` | `632270e3e67cf9cd9011fce1` |
| AT&T SportsNet Pittsburgh | `ATTSportsNetPittsburgh.us@SD` | `tvtv.us` | `26028` |
| AT&T SportsNet Rocky Mountain | `ATTSportsNetRockyMountain.us@SD` | `tvtv.us` | `96959` |
| AT&T SportsNet Rocky Mountain Utah | `ATTSportsNetRockyMountainUtah.us@SD` | `tvtv.us` | `50236` |
| AT&T SportsNet Rocky Mountain West | `ATTSportsNetRockyMountainWest.us@SD` | `tvtv.us` | `11065` |
| AT&T SportsNet Southwest | `ATTSportsNetSouthwest.us@SD` | `tvtv.us` | `77744` |
| AT&T SportsNet Southwest Plus | `ATTSportsNetSouthwestPlus.us@SD` | `tvtv.us` | `81287` |
| AWE | `AWE.us@SD` | `tvtv.us` | `44895` |
| AXS TV | `AXSTV.us@SD` | `tvtv.us` | `92053` |
| Azteca (K46LG) Monterey, CA | `K46LGD1.us@SD` | `tvtv.us` | `98273` |
| Azteca (KAKZ-LD3) Palm Springs, CA | `KAKZLD43.us@SD` | `tvtv.us` | `83294` |
| Azteca (KJLA) Los Angeles, CA | `KJLA571.us@HD` | `tvtv.us` | `12476` |
| Azteca (KMSG-LD2) Visalia, CA | `KMSGLD2.us@SD` | `tvtv.us` | `117021` |
| Azteca (KSAO) Sacramento, CA | `KSAOLD491.us@HD` | `tvtv.us` | `73746` |
| Azteca (KSBO) Santa Maria, CA | `KSBOCD421.us@SD` | `tvtv.us` | `95900` |
| Azteca (KSTV) Sacramento, CA | `KSTVLP1.us@SD` | `tvtv.us` | `32977` |
| Azteca (KYAV) Palm Springs, CA | `KYAVLD1.us@SD` | `tvtv.us` | `80811` |
| Azteca (KZDF) Santa Barbra, CA | `KZDFLD81.us@SD` | `tvtv.us` | `50922` |
| Azteca (KZKC-LP) Bakersfield, CA | `KZKCLP1.us@SD` | `tvtv.us` | `68704` |
| Azteca (WKOB-LD1) New York, NY | `WKOBLD421.us@HD` | `tvtv.us` | `68621` |
| Azteca (WMBC) Newton, NJ | `WMBCTV636.us@SD` | `tvpassport.com` | `azteca-wmbc-newton-nj/11536` |
| Azteca (WYAM-LD2) Huntsville, AL | `WYAMLD512.us@SD` | `tvtv.us` | `17341` |
| Azteca America (KYAZ-DT3) Houston TX | `KYAZ513.us@SD` | `tvtv.us` | `72288` |
| Baby Shark TV | `BabySharkTV.us@SD` | `pluto.tv` | `60faffc3fbbc120007fc4376` |
| BabyFirst TV | `BabyFirst.us@US` | `tvtv.us` | `50338` |
| Bally Sports Arizona | `BallySportsArizona.us@SD` | `tvtv.us` | `75119` |
| Bally Sports Arizona Extra | `BallySportsArizonaExtra.us@SD` | `tvtv.us` | `31547` |
| Bally Sports New Orleans | `BallySportsNewOrleans.us@SD` | `tvtv.us` | `108162` |
| Bally Sports San Diego | `BallySportsSanDiego.us@SD` | `tvtv.us` | `102061` |
| Bar Rescue | `BarRescue.us@SD` | `pluto.tv` | `60a3d889a5b3690008dc7fe8` |
| Baywatch | `Baywatch.us@US` | `plex.tv` | `63e63f20abacad42ed3d1acf` |
| BBC America - East HD | `BBCAmerica.us@East` | `tvpassport.com` | `bbc-america--east-hd/11121` |
| BBC America - West HD | `BBCAmerica.us@West` | `tvpassport.com` | `bbc-america--west-hd/17061` |
| BBC Food | `BBCFood.us@SD` | `plex.tv` | `630905af0417b7074a4ad95e` |
| BBC Home & Garden | `BBCHomeGarden.us@SD` | `plex.tv` | `6308eda9ac9983739c8a29bb` |
| BBC Travel | `BBCTravel.us@Germany` | `plex.tv` | `65622eddb7d737841f30a4fd` |
| beIN Sport USA HD | `beINSportsUSA.us@SD` | `tvpassport.com` | `bein-sport-usa-hd/10854` |
| beIN Sports Xtra (KSKJ-CD) Los Angeles, CA | `KSKJCD451.us@SD` | `tvtv.us` | `97134` |
| beIN Sports Xtra En Espanol | `beINSPORTSXTRAenEspanol.us@SD` | `tvtv.us` | `122816` |
| beIN Sports Xtra USA | `beINSPORTSXTRA.us@SD` | `tvtv.us` | `113143` |
| Bellator MMA | `BellatorMMA.us@SD` | `pluto.tv` | `5ebc8688f3697d00072f7cf8` |
| BET Cinema | `BlackCinema.us@SD` | `pluto.tv` | `58af4c093a41ca9d4ecabe96` |
| BET Classics | `BETClassicsPlutoTV.us@France` | `pluto.tv` | `60f85644a9493e0007a1f035` |
| BET Gospel | `BETGospel.us@SD` | `tvpassport.com` | `bet-gospel/6191` |
| BET HD - Eastern Feed | `BET.us@East` | `tvpassport.com` | `bet-hd--eastern-feed/6205` |
| BET HD - Pacific Feed | `BET.us@West` | `tvpassport.com` | `bet-hd--pacific-feed/6561` |
| BET Her | `BETHer.us@East` | `tvguide.com` | `9200020665` |
| BET Jams | `BETJams.us@SD` | `tvpassport.com` | `bet-jams/2113` |
| BET Pluto TV | `BETPlutoTV.us@US` | `pluto.tv` | `5ca670f6593a5d78f0e85aed` |
| BET Soul | `BETSoul.us@SD` | `tvpassport.com` | `bet-soul/3229` |
| Beverly Hillbillies | `BeverlyHillbillies.us@US` | `pluto.tv` | `5f7796e470510900070d4e3d` |
| Beverly Hills 90210 | `BeverlyHills90210.us@Germany` | `pluto.tv` | `5f4d83e0a382c00007bc02e7` |
| Beyond Belief | `BeyondBeliefFactorFiction.us@UK` | `plex.tv` | `64f101b1c4b308f2fe3e7c0c` |
| Big Ten Network - Alternate | `BigTenNetworkAlternate.us@SD` | `tvpassport.com` | `big-ten-network--alternate/11580` |
| Big Ten Network HD | `BigTenNetwork.us@SD` | `tvpassport.com` | `big-ten-network-hd/4500` |
| Big Ten Network Overflow 1 | `BigTenNetworkOverflow1.us@SD` | `tvpassport.com` | `big-ten-network-overflow-1/8822` |
| Big Ten Network Overflow 2 | `BigTenNetworkOverflow2.us@SD` | `tvpassport.com` | `big-ten-network-overflow-2/8823` |
| Big Ten Network Overflow 3 | `BigTenNetworkOverflow3.us@SD` | `tvpassport.com` | `big-ten-network-overflow-3/8824` |
| Big Ten Network Overflow 4 | `BigTenNetworkOverflow4.us@SD` | `tvtv.us` | `71202` |
| Billiard TV | `BilliardTV.us@SD` | `plex.tv` | `6334a8e48a7b2a349d903b8c` |
| Biz-TV (KFLA-LD4) Los Angeles, CA | `KFLALD84.us@SD` | `tvtv.us` | `66978` |
| Biz-TV (KVHF-LD6) Fresno, CA | `KVHFLD46.us@SD` | `tvtv.us` | `73856` |
| Black Ink Crew | `BlackInkCrew.us@SD` | `pluto.tv` | `5d51e2bceca5b4b2c0e06c50` |
| BlackPix | `BlackPix.us@SD` | `plex.tv` | `62280644c9f485cc7afe8c48` |
| Blaze Live | `BlazeLive.us@SD` | `pluto.tv` | `5e46fba0c43b0d00096e5ac1` |
| Bloomberg Originals | `BloombergOriginals.us@SD` | `plex.tv` | `68fafe0dae4af1c7478fbeec` |
| Bloomberg Originals | `BloombergQuicktake.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ30000041W` |
| Bloomberg TV USA | `BloombergTV.us@US` | `tvpassport.com` | `bloomberg-tv-usa/1856` |
| Bloomberg TV+ | `BloombergTV.us@Plus` | `pluto.tv` | `54ff7ba69222cb1c2624c584` |
| Blue Bloods | `BlueBloods.us@SD` | `pluto.tv` | `61b3b8c645b45d0007a9bb8d` |
| Bold TV (KBTV-CD4) Sacramento, CA | `KBTVCD84.us@SD` | `tvtv.us` | `87904` |
| Boomerang HD | `Boomerang.us@SD` | `tvpassport.com` | `boomerang-hd/16413` |
| Boston 25 News | `Boston25Now.us@SD` | `plex.tv` | `61f9a37f43ec158c3a3eb292` |
| Bounce | `Bounce.us@SD` | `tvtv.us` | `73067` |
| Bounce (KEYT-TV3) Santa Barbara, CA | `KEYTTV33.us@SD` | `tvtv.us` | `108226` |
| Bounce (KFSF-DT3) Vallejo, CA | `KFSFDT663.us@SD` | `tvtv.us` | `82578` |
| Bounce (KGTV5) San Diego, CA | `KGTV105.us@SD` | `tvtv.us` | `118806` |
| Bounce (KILM) Los Angeles, CA | `KILM641.us@HD` | `tvtv.us` | `12421` |
| Bounce (KJEO-LP) Fresno, CA | `KJEOLD1.us@SD` | `tvtv.us` | `65779` |
| Bounce (KKPX-TV2) San Francisco, CA | `KKPXTV652.us@HD` | `tvtv.us` | `50640` |
| Bounce (KMEX-DT3) Los Angeles, CA | `KMEXDT343.us@SD` | `tvtv.us` | `92056` |
| Bounce (KMMD-CD2) Salinas, CA | `KMMDCD392.us@SD` | `tvtv.us` | `112700` |
| Bounce (KPPX-DT2) Arizona, PX | `KPPXTV512.us@HD` | `tvtv.us` | `50050` |
| Bounce (KPSE-LD3) Palm Springs, CA | `KPSELD503.us@SD` | `tvtv.us` | `108920` |
| Bounce (KSDY-LD2) San Diego, CA | `KSDYLD2.us@SD` | `tvtv.us` | `70475` |
| Bounce (KSEE2) Fresno, CA | `KSEE242.us@SD` | `tvtv.us` | `47887` |
| Bounce (KSPX-TV4) Sacramento-Modesto, CA | `KSPXTV294.us@SD` | `tvtv.us` | `46563` |
| Bounce (KUVS-DT3) Sacramento, CA | `KUVSDT3.us@SD` | `tvtv.us` | `80155` |
| Bounce (KXTU-LD2) Colorado Springs, CO | `KXTULD572.us@SD` | `tvtv.us` | `18310` |
| Bounce (KXTV3) Sacramento, CA | `KXTV103.us@SD` | `tvtv.us` | `99563` |
| Bounce (WHPX-DT2) Hartford, CT | `WHPXTV262.us@HD` | `tvtv.us` | `34605` |
| Bounce (WINP-DT2) Pittsburgh, PA | `WINPTV162.us@HD` | `tvtv.us` | `72113` |
| Bounce (WKBW2) Buffalo, NY | `WKBWTV72.us@SD` | `tvtv.us` | `56328` |
| Bounce (WMAR-DT3) Washington D.C. | `WMARTV23.us@SD` | `tvtv.us` | `43981` |
| Bounce (WPPX-DT2) Philadelphia, PA | `WPPXTV612.us@SD` | `tvtv.us` | `43973` |
| Bounce (WPXN-DT2) New York, NY | `WPXNTV312.us@HD` | `tvtv.us` | `54618` |
| Bounce (WSB-DT2) Atanta, GA | `WSBDT2.us@SD` | `tvtv.us` | `59472` |
| Bounce (WTXL2) Tallahassee, FL | `WTXLTV272.us@SD` | `tvtv.us` | `53061` |
| Bounce (WUAB-DT2) Cleveland, OH | `WUAB432.us@SD` | `tvtv.us` | `46950` |
| Bounce (WXMI-DT3) Grand Rapids, MI | `WXMI173.us@SD` | `tvtv.us` | `70381` |
| Bounce (WXTV-DT2) NY | `WXTVDT682.us@SD` | `tvtv.us` | `82183` |
| Bounce (WXYZ-DT2) Detroit, MI | `WXYZTV72.us@SD` | `tvtv.us` | `35140` |
| Bounce XL | `BounceXL.us@SD` | `pluto.tv` | `6176fd25e83a5f0007a464c9` |
| Brat TV | `BratTV.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBC240001823` |
| Bravo USA HD - Eastern Feed | `Bravo.us@East` | `tvpassport.com` | `bravo-usa-hd--eastern-feed/6120` |
| Bravo USA HD - Pacific Feed | `Bravo.us@West` | `tvpassport.com` | `bravo-usa-hd--pacific-feed/16226` |
| Brazzers TV | `BrazzersTVEurope.us@SD` | `tvtv.us` | `97431` |
| BritBox Mysteries | `BritBoxMysteries.us@SD` | `pluto.tv` | `60f5d389985a0c0007357304` |
| Burzzr (WTTG-DT2) Washington D.C. | `WTTG52.us@SD` | `tvtv.us` | `94963` |
| Business Rockstars | `BusinessRockstars.us@SD` | `distro.tv` | `42160` |
| Busted (WRPX-TV6) Raleigh, NC | `WRPXTV476.us@SD` | `tvpassport.com` | `defy-wrpx-tv6-raleigh-nc/11719` |
| Butaca TV | `ButacaTV.us@SD` | `plex.tv` | `67367a2d9564224797d5b59c` |
| Buzzr | `Buzzr.us@SD` | `tvtv.us` | `93430` |
| Buzzr (KTXH-DT3) Houston TX | `KTXHDT3.us@SD` | `tvtv.us` | `80620` |
| Buzzr (KUTP-DT3) Arizona, PX | `KUTP453.us@SD` | `tvtv.us` | `95625` |
| Buzzr (WAGA-DT3) Atanta, GA | `WAGATV53.us@SD` | `tvtv.us` | `94962` |
| Buzzr (WHVL-LD2) State Collage PA | `WHVLLD292.us@SD` | `tvtv.us` | `65495` |
| Buzzr (WLVI-DT2) Boston, MA | `WLVI72.us@SD` | `tvtv.us` | `50830` |
| Buzzr (WWOR-DT3) NY | `WWORTV93.us@SD` | `tvtv.us` | `75009` |
| Buzzr TV (K14HC-D3) Prescott, AZ | `K14HCD453.us@SD` | `tvtv.us` | `35569` |
| Buzzr TV (K28CW-D3) Flagsttaff, AZ | `K28CWD453.us@SD` | `tvtv.us` | `15562` |
| Buzzr TV (KCOP-TV2) Los Angeles, CA | `KCOPDT2.us@SD` | `tvtv.us` | `81337` |
| Buzzr TV (KSAO-LD3) Sacramento, CA | `KSAOLD493.us@SD` | `tvtv.us` | `73494` |
| Buzzr TV (KTVU4) Oakland, CA | `KTVU24.us@SD` | `tvtv.us` | `94801` |
| Buzzr TV (KVBC-LP7) Fresno, CA | `KVBCLP7.us@SD` | `tvtv.us` | `88402` |
| Buzzr TV (KYMB-LD4) Monterey, CA | `KYMBLD4.us@SD` | `tvtv.us` | `68645` |
| Buzzr TV (WBON-LD2) Richmond, KY | `WBONLD92.us@SD` | `tvtv.us` | `84234` |
| Buzzr TV (WGCE-CD5) Rochester, NY | `WGCECD65.us@SD` | `tvtv.us` | `35774` |
| C-SPAN | `CSPAN.us@SD` | `tvguide.com` | `9233007144` |
| C-SPAN2 | `CSPAN2.us@SD` | `tvtv.us` | `10162` |
| C-SPAN3 | `CSPAN3.us@SD` | `tvtv.us` | `17665` |
| Canal 22 (KWHY-TV) Los Angeles, CA | `KWHY631.us@HD` | `tvtv.us` | `24023` |
| Canal de La Fe (KTNC-TV2) San Francisco, CA | `KTNCTV502.us@HD` | `tvtv.us` | `65819` |
| Canal de La Fe (WRNN-DT3) New York, NY | `WRNNTV93.us@SD` | `tvtv.us` | `55567` |
| Cars.TV HD | `CarsTV.us@SD` | `tvpassport.com` | `carstv-hd/18803` |
| Cartoon Network USA HD - Eastern | `CartoonNetwork.us@East` | `tvpassport.com` | `cartoon-network-usa-hd--eastern/6917` |
| Cartoon Network USA HD - Pacific | `CartoonNetwork.us@West` | `tvpassport.com` | `cartoon-network-usa-hd--pacific/8880` |
| Catholic Faith Network | `CatholicFaithNetwork.us@SD` | `tvtv.us` | `62900` |
| CatholicTV (KUPU) Waimanalo, HI | `KUPU561.us@HD` | `tvtv.us` | `68601` |
| Caught in Providence | `CaughtinProvidence.us@SD` | `plex.tv` | `61ddcdc03c12aa1e5d320aaf` |
| CBN News (KHIZ-LD7) Los Angeles, CA | `KHIZLD397.us@SD` | `tvtv.us` | `101397` |
| CBN News Channel (KAHC-LD) Sacramento, CA | `KAHCLD431.us@SD` | `tvtv.us` | `115200` |
| CBN News Channel (KTAV-LD2) Los Angeles, CA | `KTAVLD352.us@SD` | `tvtv.us` | `71659` |
| CBS - Eastern | `CBS.us@East` | `tvpassport.com` | `cbs--eastern/1225` |
| CBS - Mountain | `CBS.us@Mountain` | `tvpassport.com` | `cbs--mountain/9906` |
| CBS - Pacific | `CBS.us@West` | `tvpassport.com` | `cbs--pacific/9907` |
| CBS (K04BJ) La Pine, OR | `K04BJD71.us@HD` | `tvpassport.com` | `cbs-k04bj-la-pine-or/11511` |
| CBS (K13XD) Fairbanks, AK | `KXDFCD131.us@HD` | `tvpassport.com` | `cbs-k13xd-fairbanks-ak/4960` |
| CBS (K21CC) Lewiston, ID | `K21CCD21.us@HD` | `tvpassport.com` | `cbs-k21cc-lewiston-id/7251` |
| CBS (K24DT) Aberdeen. SD | `K24KGD61.us@HD` | `tvpassport.com` | `cbs-k24dt-aberdeen-sd/4978` |
| CBS (K28MA-D) Argusville, ND | `K28MAD281.us@HD` | `tvpassport.com` | `cbs-k28ma-d-argusville-nd/25564` |
| CBS (K47LM) Prineville, OR | `K47LMD1.us@SD` | `tvpassport.com` | `cbs-k47lm-prineville-or/11514` |
| CBS (K50HU) Flagstaff, AZ | `K50HUD1.us@SD` | `tvpassport.com` | `cbs-k50hu-flagstaff-az/15556` |
| CBS (K50KK-D) Ellensburg, WA | `K50KKD1.us@SD` | `tvpassport.com` | `cbs-k50kk-d-ellensburg-wa/15128` |
| CBS (KAUU-DT1) Anchorage, AK | `KAUUDT1.us@SD` | `tvtv.us` | `34807` |
| CBS (KAUZ) Wichita Falls, TX HD | `KAUZTV61.us@HD` | `tvpassport.com` | `cbs-kauz-wichita-falls-tx-hd/4726` |
| CBS (KAVU-DT3) Victoria, TX | `KAVUTV253.us@SD` | `tvpassport.com` | `cbs-kavu-dt3-victoria-tx/17403` |
| CBS (KBAK) Bakersfield, CA HD | `KBAKTV291.us@HD` | `tvpassport.com` | `cbs-kbak-bakersfield-ca-hd/7565` |
| CBS (KBIM) Roswell, NM HD | `KBIMTV101.us@HD` | `tvpassport.com` | `cbs-kbim-roswell-nm-hd/6923` |
| CBS (KBJR-DT2) Duluth, MN HD | `KBJRTV62.us@HD` | `tvpassport.com` | `cbs-kbjr-dt2-duluth-mn-hd/6554` |
| CBS (KBNZ) Bend, OR HD | `KBNZLD71.us@HD` | `tvpassport.com` | `cbs-kbnz-bend-or-hd/8224` |
| CBS (KBOI) Boise, ID HD | `KBOITV21.us@HD` | `tvpassport.com` | `cbs-kboi-boise-id-hd/10383` |
| CBS (KBSD) Dodge City, KS HD | `KBSDDT61.us@HD` | `tvpassport.com` | `cbs-kbsd-dodge-city-ks-hd/8158` |
| CBS (KBSH) Hays, KS HD | `KBSHDT71.us@HD` | `tvpassport.com` | `cbs-kbsh-hays-ks-hd/8165` |
| CBS (KBSL) Goodland, KS | `KBSLDT101.us@HD` | `tvpassport.com` | `cbs-kbsl-goodland-ks/1587` |
| CBS (KBTX) Bryan, TX HD | `KBTXTV31.us@HD` | `tvpassport.com` | `cbs-kbtx-bryan-tx-hd/11424` |
| CBS (KBZK) Bozeman, MT HD | `KBZK71.us@HD` | `tvpassport.com` | `cbs-kbzk-bozeman-mt-hd/8919` |
| CBS (KCBS) Los Angeles, CA HD | `KCBSTV21.us@HD` | `tvpassport.com` | `cbs-kcbs-los-angeles-ca-hd/4554` |
| CBS (KCBY) Coos Bay, OR HD | `KCBYTV111.us@HD` | `tvpassport.com` | `cbs-kcby-coos-bay-or-hd/19942` |
| CBS (KCCI) Des Moines, IA HD | `KCCI81.us@HD` | `tvpassport.com` | `cbs-kcci-des-moines-ia-hd/6377` |
| CBS (KCCO) Alexandria, MN HD | `KCCODT1.us@SD` | `tvpassport.com` | `cbs-kcco-alexandria-mn-hd/8566` |
| CBS (KCCW) Walker, MN HD | `KCCWTV121.us@HD` | `tvpassport.com` | `cbs-kccw-walker-mn-hd/8565` |
| CBS (KCLO) Sioux Falls, SD HD | `KCLOTV151.us@HD` | `tvpassport.com` | `cbs-kclo-sioux-falls-sd-hd/6673` |
| CBS (KCNC) Denver, CO HD | `KCNCTV41.us@HD` | `tvpassport.com` | `cbs-kcnc-denver-co-hd/6674` |
| CBS (KCTV) Kansas City, MO HD | `KCTV621.us@HD` | `tvpassport.com` | `cbs-kctv-kansas-city-mo-hd/6676` |
| CBS (KDBC) El Paso, TX HD | `KDBCTV41.us@HD` | `tvpassport.com` | `cbs-kdbc-el-paso-tx-hd/5196` |
| CBS (KDKA) Pittsburgh, PA HD | `KDKATV21.us@HD` | `tvpassport.com` | `cbs-kdka-pittsburgh-pa-hd/3712` |
| CBS (KDLO) Florence, SD HD | `KDLOTV31.us@HD` | `tvpassport.com` | `cbs-kdlo-florence-sd-hd/7932` |
| CBS (KELO) Sioux Falls, SD HD | `KELOTV111.us@HD` | `tvpassport.com` | `cbs-kelo-sioux-falls-sd-hd/6707` |
| CBS (KENS) San Antonio, TX HD | `KENS51.us@HD` | `tvpassport.com` | `cbs-kens-san-antonio-tx-hd/4887` |
| CBS (KEPR) Tri-Cities, WA HD | `KEPRTV191.us@HD` | `tvpassport.com` | `cbs-kepr-tri-cities-wa-hd/6555` |
| CBS (KEYC) Mankato, MN HD | `KEYCTV121.us@HD` | `tvpassport.com` | `cbs-keyc-mankato-mn-hd/6556` |
| CBS (KEYE) Austin, TX HD | `KEYETV421.us@HD` | `tvpassport.com` | `cbs-keye-austin-tx-hd/4831` |
| CBS (KFDA) Amarillo, TX HD | `KFDATV101.us@HD` | `tvpassport.com` | `cbs-kfda-amarillo-tx-hd/6557` |
| CBS (KFDM) Beaumont, TX HD | `KFDM61.us@HD` | `tvpassport.com` | `cbs-kfdm-beaumont-tx-hd/4748` |
| CBS (KFMB) San Diego, CA HD | `KFMBTV81.us@HD` | `tvpassport.com` | `cbs-kfmb-san-diego-ca-hd/5836` |
| CBS (KFQX-DT2) Grand Junstion, CO | `KFQX42.us@HD` | `tvpassport.com` | `cbs-kfqx-dt2-grand-junstion-co/18077` |
| CBS (KFSM-TV) Ft. Smith, AR HD | `KFSMTV51.us@HD` | `tvpassport.com` | `cbs-kfsm-ft-smith-ar-hd/8079` |
| CBS (KFVS) Cape Girardeau, MO HD | `KFVSTV121.us@HD` | `tvpassport.com` | `cbs-kfvs-cape-girardeau-mo-hd/6152` |
| CBS (KGAN) Cedar Rapids, IA HD | `KGAN21.us@HD` | `tvpassport.com` | `cbs-kgan-cedar-rapids-ia-hd/19338` |
| CBS (KGIN) Grand Island, NE HD | `KGIN111.us@HD` | `tvpassport.com` | `cbs-kgin-grand-island-ne-hd/7685` |
| CBS (KGJT-DT2) Grand Junction, CO | `KGJTCD272.us@HD` | `tvpassport.com` | `cbs-kgjt-dt2-grand-junction-co/18554` |
| CBS (KGMB) Honolulu, HI HD | `KGMB91.us@HD` | `tvpassport.com` | `cbs-kgmb-honolulu-hi-hd/7673` |
| CBS (KGMD) Hilo, HI | `KGMDTV91.us@HD` | `tvpassport.com` | `cbs-kgmd-hilo-hi/4969` |
| CBS (KGMV) Wailuku, HI | `KGMV91.us@HD` | `tvpassport.com` | `cbs-kgmv-wailuku-hi/4968` |
| CBS (KGPE) Fresno, CA HD | `KGPE591.us@HD` | `tvpassport.com` | `cbs-kgpe-fresno-ca-hd/9361` |
| CBS (KGWC) Casper, WY | `KGWCTV141.us@HD` | `tvpassport.com` | `cbs-kgwc-casper-wy/4288` |
| CBS (KGWL) Lander, WY HD | `KGWLTV51.us@HD` | `tvpassport.com` | `cbs-kgwl-lander-wy-hd/7559` |
| CBS (KGWN) Cheyenne, WY HD | `KGWNTV51.us@HD` | `tvpassport.com` | `cbs-kgwn-cheyenne-wy-hd/7546` |
| CBS (KGWR) Rock Springs, WY HD | `KGWRTV131.us@HD` | `tvpassport.com` | `cbs-kgwr-rock-springs-wy-hd/8813` |
| CBS (KHOU) Houston, TX HD | `KHOU111.us@HD` | `tvpassport.com` | `cbs-khou-houston-tx-hd/7903` |
| CBS (KHQA) Quincy, MO HD | `KHQATV71.us@HD` | `tvpassport.com` | `cbs-khqa-quincy-mo-hd/8016` |
| CBS (KHSL) Chico, CA HD | `KHSLTV121.us@HD` | `tvpassport.com` | `cbs-khsl-chico-ca-hd/13462` |
| CBS (KIMA) Yakima, WA HD | `KIMATV291.us@HD` | `tvpassport.com` | `cbs-kima-yakima-wa-hd/7985` |
| CBS (KIMT) Mason City, IA HD | `KIMT31.us@HD` | `tvpassport.com` | `cbs-kimt-mason-city-ia-hd/7868` |
| CBS (KION) Salinas, CA HD | `KIONTV461.us@HD` | `tvpassport.com` | `cbs-kion-salinas-ca-hd/13482` |
| CBS (KIRO) Seattle, WA DV | `KIROTV71.us@HD` | `tvpassport.com` | `cbs-kiro-seattle-wa-dv/3949` |
| CBS (KJNB-DT2) Jonesboro, AR HD | `KJNBLD2.us@SD` | `tvpassport.com` | `cbs-kjnb-dt2-jonesboro-ar-hd/20007` |
| CBS (KKFX-DT2) Santa Barbara, CA | `KKFXCD242.us@HD` | `tvtv.us` | `92226` |
| CBS (KKTV) Colorado Springs, CO HD | `KKTV111.us@HD` | `tvpassport.com` | `cbs-kktv-colorado-springs-co-hd/7995` |
| CBS (KLAS) Las Vegas, NV HD | `KLASTV81.us@HD` | `tvpassport.com` | `cbs-klas-las-vegas-nv-hd/6968` |
| CBS (KLBK) Lubbock, TX HD | `KLBKTV131.us@HD` | `tvpassport.com` | `cbs-klbk-lubbock-tx-hd/6145` |
| CBS (KLEW) Lewiston, ID HD | `KLEWTV31.us@HD` | `tvpassport.com` | `cbs-klew-lewiston-id-hd/6966` |
| CBS (KLFY) Lafayette, LA HD | `KLFYTV101.us@HD` | `tvpassport.com` | `cbs-klfy-lafayette-la-hd/6967` |
| CBS (KLST) San Angelo, TX HD | `KLST81.us@HD` | `tvpassport.com` | `cbs-klst-san-angelo-tx-hd/17155` |
| CBS (KMOV) St. Louis, MO HD | `KMOV41.us@HD` | `tvpassport.com` | `cbs-kmov-st-louis-mo-hd/6619` |
| CBS (KMTV) Omaha, NE HD | `KMTVTV31.us@HD` | `tvpassport.com` | `cbs-kmtv-omaha-ne-hd/6620` |
| CBS (KMVT) Twin Falls, ID HD | `KMVT111.us@HD` | `tvpassport.com` | `cbs-kmvt-twin-falls-id-hd/10139` |
| CBS (KNOE) Monroe, LA HD | `KNOETV81.us@HD` | `tvpassport.com` | `cbs-knoe-monroe-la-hd/6621` |
| CBS (KNPL) North Platte, NE HD | `KNPLLD101.us@HD` | `tvpassport.com` | `cbs-knpl-north-platte-ne-hd/16135` |
| CBS (KOAM) Pittsburg, KS HD | `KOAMTV71.us@HD` | `tvpassport.com` | `cbs-koam-pittsburg-ks-hd/8143` |
| CBS (KOIN) Portland, OR HD | `KOIN61.us@HD` | `tvpassport.com` | `cbs-koin-portland-or-hd/3728` |
| CBS (KOLD) Tucson, AZ HD | `KOLDTV131.us@HD` | `tvpassport.com` | `cbs-kold-tucson-az-hd/7638` |
| CBS (KOLN) Lincoln, NE HD | `KOLN101.us@HD` | `tvpassport.com` | `cbs-koln-lincoln-ne-hd/4740` |
| CBS (KOLR) Springfield, MO HD | `KOLR101.us@HD` | `tvpassport.com` | `cbs-kolr-springfield-mo-hd/8085` |
| CBS (KOSA) Midland, TX HD | `KOSATV71.us@HD` | `tvpassport.com` | `cbs-kosa-midland-tx-hd/8000` |
| CBS (KOTV) Tulsa, OK HD | `KOTVDT61.us@HD` | `tvpassport.com` | `cbs-kotv-tulsa-ok-hd/8152` |
| CBS (KOVR) Sacramento, CA HD | `KOVR131.us@HD` | `tvpassport.com` | `cbs-kovr-sacramento-ca-hd/6298` |
| CBS (KPAX) Missoula, MT HD | `KPAXTV81.us@HD` | `tvpassport.com` | `cbs-kpax-missoula-mt-hd/6299` |
| CBS (KPHO) Phoenix, AZ HD | `KPHOTV51.us@HD` | `tvpassport.com` | `cbs-kpho-phoenix-az-hd/6300` |
| CBS (KPIC) Roseburg, OR | `KPIC41.us@HD` | `tvpassport.com` | `cbs-kpic-roseburg-or/4967` |
| CBS (KPIX) San Francisco, CA HD | `KPIXTV51.us@HD` | `tvpassport.com` | `cbs-kpix-san-francisco-ca-hd/6321` |
| CBS (KPLO) Reliance/ Pierre, SD | `KPLOTV61.us@HD` | `tvpassport.com` | `cbs-kplo-reliance-pierre-sd/4977` |
| CBS (KPSP-TV2) Palm Springs, CA | `KPSPDT2.us@SD` | `tvtv.us` | `107654` |
| CBS (KRCG) Jefferson, MO HD | `KRCG131.us@HD` | `tvpassport.com` | `cbs-krcg-jefferson-mo-hd/6301` |
| CBS (KREM) Spokane, WA HD | `KREM21.us@HD` | `tvpassport.com` | `cbs-krem-spokane-wa-hd/6302` |
| CBS (KREY) Montrose, CO | `KREYTV101.us@HD` | `tvpassport.com` | `cbs-krey-montrose-co/12388` |
| CBS (KREZ) Albuquerque, NM HD | `KREZTV61.us@HD` | `tvpassport.com` | `cbs-krez-albuquerque-nm-hd/19179` |
| CBS (KRQE) Albuquerque, NM HD | `KRQE131.us@HD` | `tvpassport.com` | `cbs-krqe-albuquerque-nm-hd/6102` |
| CBS (KRTV) Grand Falls, MT | `KRTV31.us@HD` | `tvpassport.com` | `cbs-krtv-grand-falls-mt/575` |
| CBS (KSBB-CD) Santa Barbara, CA | `KSBBCD171.us@HD` | `tvpassport.com` | `cbs-ksbb-cd-santa-barbara-ca/25518` |
| CBS (KSLA) Shreveport, LA HD | `KSLA121.us@HD` | `tvpassport.com` | `cbs-ksla-shreveport-la-hd/7883` |
| CBS (KSTF) Scottsbluff, NE HD | `KSTF101.us@HD` | `tvpassport.com` | `cbs-kstf-scottsbluff-ne-hd/18440` |
| CBS (KSWT) Yuma, AZ HD | `KYMADT131.us@HD` | `tvpassport.com` | `cbs-kswt-yuma-az-hd/6304` |
| CBS (KTAB) Abilene, TX HD | `KTABTV321.us@HD` | `tvpassport.com` | `cbs-ktab-abilene-tx-hd/17136` |
| CBS (KTHV) Little Rock, AR HD | `KTHV111.us@HD` | `tvpassport.com` | `cbs-kthv-little-rock-ar-hd/8077` |
| CBS (KTNL) Sitka, AK | `KTNLTV71.us@SD` | `tvpassport.com` | `cbs-ktnl-sitka-ak/4981` |
| CBS (KTVL) Medford, OR HD | `KTVL101.us@HD` | `tvpassport.com` | `cbs-ktvl-medford-or-hd/7963` |
| CBS (KTVN) Reno, NV HD | `KTVN21.us@HD` | `tvpassport.com` | `cbs-ktvn-reno-nv-hd/6229` |
| CBS (KTVO-DT2) Kirskville, MO HD | `KTVO32.us@HD` | `tvpassport.com` | `cbs-ktvo-dt2-kirskville-mo-hd/18818` |
| CBS (KTVQ) Billings, MT HD | `KTVQ21.us@HD` | `tvpassport.com` | `cbs-ktvq-billings-mt-hd/7549` |
| CBS (KTVT) Fort Worth, TX HD | `KTVT111.us@HD` | `tvpassport.com` | `cbs-ktvt-fort-worth-tx-hd/7465` |
| CBS (KUTV) Salt Lake City, UT HD | `KUTV21.us@HD` | `tvpassport.com` | `cbs-kutv-salt-lake-city-ut-hd/4460` |
| CBS (KVAL) Eugene, OR HD | `KVALTV131.us@HD` | `tvpassport.com` | `cbs-kval-eugene-or-hd/19104` |
| CBS (KVIQ) Eureka, CA HD | `KVIQLD171.us@HD` | `tvpassport.com` | `cbs-kviq-eureka-ca-hd/17102` |
| CBS (KWCH) Wichita, KS HD | `KWCHDT331.us@HD` | `tvpassport.com` | `cbs-kwch-wichita-ks-hd/8129` |
| CBS (KWTV) Oklahoma City, OK HD | `KWTVDT91.us@HD` | `tvpassport.com` | `cbs-kwtv-oklahoma-city-ok-hd/8198` |
| CBS (KWTX) Waco, TX HD | `KWTXTV101.us@HD` | `tvpassport.com` | `cbs-kwtx-waco-tx-hd/5848` |
| CBS (KXGN) Glendive, MT | `KXGNTV51.us@HD` | `tvpassport.com` | `cbs-kxgn-glendive-mt/4987` |
| CBS (KXII) Sherman, TX HD | `KXII121.us@HD` | `tvpassport.com` | `cbs-kxii-sherman-tx-hd/8043` |
| CBS (KXIP) Paris, TX | `KXIPLD1.us@SD` | `tvpassport.com` | `cbs-kxip-paris-tx/17159` |
| CBS (KXLF) Butte, MT HD | `KXLFTV41.us@HD` | `tvpassport.com` | `cbs-kxlf-butte-mt-hd/8920` |
| CBS (KXLH) Helena, MT HD | `KXLHLD91.us@HD` | `tvpassport.com` | `cbs-kxlh-helena-mt-hd/8921` |
| CBS (KXLJ-LD) Juneau, AK | `KXLJLD1.us@SD` | `tvpassport.com` | `cbs-kxlj-ld-juneau-ak/19499` |
| CBS (KXMB) Bismarck, ND HD | `KXMBTV121.us@HD` | `tvpassport.com` | `cbs-kxmb-bismarck-nd-hd/8331` |
| CBS (KXMC) Minot, ND HD | `KXMCTV131.us@HD` | `tvpassport.com` | `cbs-kxmc-minot-nd-hd/8321` |
| CBS (KXMD) Williston, ND HD | `KXMDTV111.us@HD` | `tvpassport.com` | `cbs-kxmd-williston-nd-hd/8555` |
| CBS (KYLX-LD) Laredo, TX HD | `KYLXLD1.us@SD` | `tvpassport.com` | `cbs-kylx-ld-laredo-tx-hd/10346` |
| CBS (KYTX) Tyler, TX HD | `KYTX191.us@HD` | `tvpassport.com` | `cbs-kytx-tyler-tx-hd/11007` |
| CBS (KYW) Philadelphia, PA HD | `KYWDT1.us@SD` | `tvpassport.com` | `cbs-kyw-philadelphia-pa-hd/8660` |
| CBS (KZTV) Corpus Christi, TX HD | `KZTV101.us@HD` | `tvpassport.com` | `cbs-kztv-corpus-christi-tx-hd/7064` |
| CBS (WABI) Bangor, ME HD | `WABITV51.us@HD` | `tvpassport.com` | `cbs-wabi-bangor-me-hd/7061` |
| CBS (WAFB) Baton Rouge, LA HD | `WAFB91.us@HD` | `tvpassport.com` | `cbs-wafb-baton-rouge-la-hd/7062` |
| CBS (WAGM) Presque Isle, ME HD | `WAGMTV81.us@HD` | `tvpassport.com` | `cbs-wagm-presque-isle-me-hd/4728` |
| CBS (WAKA) Montgomery, AL HD | `WAKA81.us@HD` | `tvpassport.com` | `cbs-waka-montgomery-al-hd/6564` |
| CBS (WANE) Fort Wayne, IN HD | `WANETV151.us@HD` | `tvpassport.com` | `cbs-wane-fort-wayne-in-hd/6565` |
| CBS (WBBM) Chicago, IL HD | `WBBMTV91.us@HD` | `tvpassport.com` | `cbs-wbbm-chicago-il-hd/6566` |
| CBS (WBKB) Alpena, MI HD | `WBKBTV111.us@HD` | `tvpassport.com` | `cbs-wbkb-alpena-mi-hd/6567` |
| CBS (WBNG) Binghamton, NY HD | `WBNGTV121.us@HD` | `tvpassport.com` | `cbs-wbng-binghamton-ny-hd/6568` |
| CBS (WBNS) Columbus, OH HD | `WBNSTV101.us@HD` | `tvpassport.com` | `cbs-wbns-columbus-oh-hd/3686` |
| CBS (WBOC) Salisbury, MD HD | `WBOCTV161.us@HD` | `tvpassport.com` | `cbs-wboc-salisbury-md-hd/7523` |
| CBS (WBTV) Charlotte, NC HD | `WBTV641.us@HD` | `tvpassport.com` | `cbs-wbtv-charlotte-nc-hd/3649` |
| CBS (WBTW) Myrtle Beach, SC HD | `WBTW211.us@HD` | `tvpassport.com` | `cbs-wbtw-myrtle-beach-sc-hd/5228` |
| CBS (WBZ) Boston, MA HD | `WBZDT1.us@SD` | `tvpassport.com` | `cbs-wbz-boston-ma-hd/3653` |
| CBS (WCAV) Charlottesville, VA HD | `WCAV271.us@HD` | `tvpassport.com` | `cbs-wcav-charlottesville-va-hd/3645` |
| CBS (WCAX) Burlington, VT HD | `WCAXTV31.us@HD` | `tvpassport.com` | `cbs-wcax-burlington-vt-hd/3660` |
| CBS (WCBI) Colombus, MS HD | `WCBITV41.us@HD` | `tvpassport.com` | `cbs-wcbi-colombus-ms-hd/18786` |
| CBS (WCBS) New York, NY HD | `WCBSTV21.us@HD` | `tvpassport.com` | `cbs-wcbs-new-york-ny-hd/4555` |
| CBS (WCCO) Minneapolis, MN HD | `WCCOTV41.us@HD` | `tvpassport.com` | `cbs-wcco-minneapolis-mn-hd/4775` |
| CBS (WCIA) Champaign, IL HD | `WCIA31.us@HD` | `tvpassport.com` | `cbs-wcia-champaign-il-hd/4588` |
| CBS (WCIX-DT2) Champaign, IL | `WCIX552.us@SD` | `tvpassport.com` | `cbs-wcix-dt2-champaign-il/18163` |
| CBS (WCSC) Charleston, SC HD | `WCSCTV51.us@HD` | `tvpassport.com` | `cbs-wcsc-charleston-sc-hd/7933` |
| CBS (WCTV) Tallahassee, FL HD | `WCTV61.us@HD` | `tvpassport.com` | `cbs-wctv-tallahassee-fl-hd/8550` |
| CBS (WCWN-DT3) Albany, NY | `WCWNDT3.us@SD` | `tvpassport.com` | `cbs-wcwn-dt3-albany-ny/10905` |
| CBS (WDBJ) Roanoke, VA HD | `WDBJ71.us@HD` | `tvpassport.com` | `cbs-wdbj-roanoke-va-hd/3733` |
| CBS (WDEF) Chattanooga, TN HD | `WDEFTV121.us@HD` | `tvpassport.com` | `cbs-wdef-chattanooga-tn-hd/9896` |
| CBS (WDTV) Bridgeport, WV HD | `WDTV51.us@HD` | `tvpassport.com` | `cbs-wdtv-bridgeport-wv-hd/7030` |
| CBS (WECP) Panama City, FL HD | `WECPLD211.us@HD` | `tvpassport.com` | `cbs-wecp-panama-city-fl-hd/10879` |
| CBS (WEVV) Evansville, IN HD | `WEVVTV441.us@HD` | `tvpassport.com` | `cbs-wevv-evansville-in-hd/7032` |
| CBS (WFMY) Greensboro, NC HD | `WFMYTV21.us@HD` | `tvpassport.com` | `cbs-wfmy-greensboro-nc-hd/4718` |
| CBS (WFOR) Miami, FL HD | `WFORTV41.us@HD` | `tvpassport.com` | `cbs-wfor-miami-fl-hd/7033` |
| CBS (WFRV) Green Bay, WI HD | `WFRVTV51.us@HD` | `tvpassport.com` | `cbs-wfrv-green-bay-wi-hd/4898` |
| CBS (WFSB) Hartford, CT HD | `WFSB31.us@HD` | `tvpassport.com` | `cbs-wfsb-hartford-ct-hd/7034` |
| CBS (WGCL) Atlanta, GA HD | `WGCLDT1.us@SD` | `tvpassport.com` | `cbs-wgcl-atlanta-ga-hd/7035` |
| CBS (WGFL) Gainesville, FL HD | `WGFL281.us@HD` | `tvpassport.com` | `cbs-wgfl-gainesville-fl-hd/7036` |
| CBS (WGME) Portland, ME HD | `WGMETV231.us@SD` | `tvpassport.com` | `cbs-wgme-portland-me-hd/7037` |
| CBS (WHBF) Rock Island, Il HD | `WHBFTV41.us@HD` | `tvpassport.com` | `cbs-whbf-rock-island-il-hd/4488` |
| CBS (WHIO) Dayton, OH HD | `WHIOTV71.us@HD` | `tvpassport.com` | `cbs-whio-dayton-oh-hd/8791` |
| CBS (WHLT) Laurel, MS HD | `WHLT221.us@HD` | `tvpassport.com` | `cbs-whlt-laurel-ms-hd/19171` |
| CBS (WHNT) Huntsville, AL HD | `WHNTTV191.us@HD` | `tvpassport.com` | `cbs-whnt-huntsville-al-hd/6719` |
| CBS (WHP) Harrisburg, PA HD | `WHPDT1.us@SD` | `tvpassport.com` | `cbs-whp-harrisburg-pa-hd/6720` |
| CBS (WIAT) Birmingham, AL HD | `WIAT421.us@HD` | `tvpassport.com` | `cbs-wiat-birmingham-al-hd/6722` |
| CBS (WIBW) Topeka, KS HD | `WIBWTV131.us@HD` | `tvpassport.com` | `cbs-wibw-topeka-ks-hd/6721` |
| CBS (WIFR) Rockford, IL HD | `WIFRDT1.us@SD` | `tvpassport.com` | `cbs-wifr-rockford-il-hd/6723` |
| CBS (WINK) Fort Myers, FL HD | `WINKTV111.us@HD` | `tvpassport.com` | `cbs-wink-fort-myers-fl-hd/7655` |
| CBS (WIVB) Buffalo, NY HD | `WIVBTV41.us@HD` | `tvpassport.com` | `cbs-wivb-buffalo-ny-hd/3583` |
| CBS (WIYE) Parkersburg, WV HD | `WIYELD261.us@HD` | `tvpassport.com` | `cbs-wiye-parkersburg-wv-hd/17109` |
| CBS (WJAX) Jacksonville, FL HD | `WJAXTV471.us@HD` | `tvpassport.com` | `cbs-wjax-jacksonville-fl-hd/6358` |
| CBS (WJHL) Tri-Cities, TN/VA HD | `WJHLTV111.us@HD` | `tvpassport.com` | `cbs-wjhl-tri-cities-tnva-hd/6897` |
| CBS (WJTV) Jackson, MS HD | `WJTV121.us@HD` | `tvpassport.com` | `cbs-wjtv-jackson-ms-hd/6898` |
| CBS (WJZ) Baltimore, MD HD | `WJZDT1.us@SD` | `tvpassport.com` | `cbs-wjz-baltimore-md-hd/6899` |
| CBS (WKBN) Youngstown, OH HD | `WKBNTV331.us@HD` | `tvpassport.com` | `cbs-wkbn-youngstown-oh-hd/8522` |
| CBS (WKBT) La Crosse, WI HD | `WKBTDT81.us@HD` | `tvpassport.com` | `cbs-wkbt-la-crosse-wi-hd/6900` |
| CBS (WKMG) Orlando, FL HD | `WKMGTV61.us@HD` | `tvpassport.com` | `cbs-wkmg-orlando-fl-hd/6901` |
| CBS (WKRC) Cincinnati, OH HD | `WKRCTV121.us@HD` | `tvpassport.com` | `cbs-wkrc-cincinnati-oh-hd/3675` |
| CBS (WKRG) Mobile, AL HD | `WKRGTV551.us@HD` | `tvpassport.com` | `cbs-wkrg-mobile-al-hd/7601` |
| CBS (WKYT) Lexington, KY HD | `WKYTTV271.us@HD` | `tvpassport.com` | `cbs-wkyt-lexington-ky-hd/6241` |
| CBS (WLFI) Lafayette, IN HD | `WLFITV181.us@HD` | `tvpassport.com` | `cbs-wlfi-lafayette-in-hd/11346` |
| CBS (WLKY) Louisville, KY HD | `WLKY321.us@HD` | `tvpassport.com` | `cbs-wlky-louisville-ky-hd/8269` |
| CBS (WLNS) Lansing, MI HD | `WLNSTV61.us@HD` | `tvpassport.com` | `cbs-wlns-lansing-mi-hd/19159` |
| CBS (WLOX-DT2) Biloxi, MS HD | `WLOX132.us@HD` | `tvpassport.com` | `cbs-wlox-dt2-biloxi-ms-hd/16338` |
| CBS (WLTX) Columbia, SC HD | `WLTX191.us@HD` | `tvpassport.com` | `cbs-wltx-columbia-sc-hd/4764` |
| CBS (WMAZ) Macon, GA HD | `WMAZTV131.us@HD` | `tvpassport.com` | `cbs-wmaz-macon-ga-hd/8125` |
| CBS (WMBD) Central Illinois, IL HD | `WMBDTV311.us@HD` | `tvpassport.com` | `cbs-wmbd-central-illinois-il-hd/4600` |
| CBS (WMDN) Meridian, MS HD | `WMDN241.us@HD` | `tvpassport.com` | `cbs-wmdn-meridian-ms-hd/19174` |
| CBS (WNCN) Raleigh-Durham, NC HD | `WNCN171.us@HD` | `tvpassport.com` | `cbs-wncn-raleigh-durham-nc-hd/4701` |
| CBS (WNCT) Greenville, NC HD | `WNCTTV91.us@HD` | `tvpassport.com` | `cbs-wnct-greenville-nc-hd/8339` |
| CBS (WNEM) Flint, MI HD | `WNEMTV51.us@HD` | `tvpassport.com` | `cbs-wnem-flint-mi-hd/9039` |
| CBS (WNKY-DT2) Bowling Green, KY HD | `WNKY402.us@HD` | `tvpassport.com` | `cbs-wnky-dt2-bowling-green-ky-hd/8283` |
| CBS (WOIO) Cleveland, OH HD | `WOIO431.us@HD` | `tvpassport.com` | `cbs-woio-cleveland-oh-hd/3677` |
| CBS (WOWK) Huntington, WV HD | `WOWKTV131.us@HD` | `tvpassport.com` | `cbs-wowk-huntington-wv-hd/7422` |
| CBS (WPEC) West Palm Beach, FL HD | `WPEC121.us@HD` | `tvpassport.com` | `cbs-wpec-west-palm-beach-fl-hd/8256` |
| CBS (WPRI) E. Providence, RI HD | `WPRITV121.us@HD` | `tvpassport.com` | `cbs-wpri-e-providence-ri-hd/7760` |
| CBS (WQTV-LP) Murray, KY | `WQTVLP1.us@SD` | `tvpassport.com` | `cbs-wqtv-lp-murray-ky/19436` |
| CBS (WRBL) Columbus, GA HD | `WRBL31.us@HD` | `tvpassport.com` | `cbs-wrbl-columbus-ga-hd/6486` |
| CBS (WRDW) Augusta, GA HD | `WRDWTV121.us@HD` | `tvpassport.com` | `cbs-wrdw-augusta-ga-hd/6682` |
| CBS (WREG) Memphis, TN HD | `WREGTV31.us@HD` | `tvpassport.com` | `cbs-wreg-memphis-tn-hd/5188` |
| CBS (WRGB) Albany, NY HD | `WRGB61.us@HD` | `tvpassport.com` | `cbs-wrgb-albany-ny-hd/3704` |
| CBS (WROC) Rochester, NY HD | `WROCTV81.us@HD` | `tvpassport.com` | `cbs-wroc-rochester-ny-hd/6487` |
| CBS (WSAW) Wausau, WI HD | `WSAWTV71.us@HD` | `tvpassport.com` | `cbs-wsaw-wausau-wi-hd/19903` |
| CBS (WSBT) South Bend, IN HD | `WSBTTV281.us@SD` | `tvpassport.com` | `cbs-wsbt-south-bend-in-hd/6488` |
| CBS (WSEE) Erie, PA HD | `WSEETV351.us@HD` | `tvpassport.com` | `cbs-wsee-erie-pa-hd/6489` |
| CBS (WSHM) Springfield, MA HD | `WSHMLD331.us@HD` | `tvpassport.com` | `cbs-wshm-springfield-ma-hd/6490` |
| CBS (WSPA) Spartanburg, SC HD | `WSPATV71.us@HD` | `tvpassport.com` | `cbs-wspa-spartanburg-sc-hd/7201` |
| CBS (WSWG) Valdosta, GA HD | `WSWG441.us@HD` | `tvpassport.com` | `cbs-wswg-valdosta-ga-hd/6356` |
| CBS (WTAJ) Altoona, PA HD | `WTAJTV101.us@HD` | `tvpassport.com` | `cbs-wtaj-altoona-pa-hd/6357` |
| CBS (WTHI) Terre Haute, IN HD | `WTHITV101.us@HD` | `tvpassport.com` | `cbs-wthi-terre-haute-in-hd/6359` |
| CBS (WTKR) Norfolk, VA HD | `WTKR31.us@HD` | `tvpassport.com` | `cbs-wtkr-norfolk-va-hd/6360` |
| CBS (WTOC) Savannah, GA HD | `WTOCTV111.us@HD` | `tvpassport.com` | `cbs-wtoc-savannah-ga-hd/3698` |
| CBS (WTOL) Toledo, OH HD | `WTOL111.us@HD` | `tvpassport.com` | `cbs-wtol-toledo-oh-hd/4753` |
| CBS (WTRF) Wheeling, WV HD | `WTRFTV71.us@HD` | `tvpassport.com` | `cbs-wtrf-wheeling-wv-hd/6361` |
| CBS (WTSP) Tampa Bay, FL HD | `WTSP101.us@HD` | `tvpassport.com` | `cbs-wtsp-tampa-bay-fl-hd/6362` |
| CBS (WTTK) Kokomo, IN HD | `WTTK61.us@HD` | `tvpassport.com` | `cbs-wttk-kokomo-in-hd/20215` |
| CBS (WTTV) Indianapolis, IN HD | `WTTV41.us@HD` | `tvpassport.com` | `cbs-wttv-indianapolis-in-hd/7677` |
| CBS (WTVF) Nashville, TN HD | `WTVF581.us@SD` | `tvpassport.com` | `cbs-wtvf-nashville-tn-hd/6363` |
| CBS (WTVH) Syracuse, NY HD | `WTVH51.us@SD` | `tvpassport.com` | `cbs-wtvh-syracuse-ny-hd/3664` |
| CBS (WTVR) Richmond, VA HD | `WTVRTV61.us@HD` | `tvpassport.com` | `cbs-wtvr-richmond-va-hd/8192` |
| CBS (WTVY) Dothan, AL HD | `WTVY41.us@HD` | `tvpassport.com` | `cbs-wtvy-dothan-al-hd/7934` |
| CBS (WUSA) District of Columbia HD | `WUSA91.us@HD` | `tvpassport.com` | `cbs-wusa-district-of-columbia-hd/3742` |
| CBS (WVLT) Knoxville, TN HD | `WVLTTV81.us@HD` | `tvpassport.com` | `cbs-wvlt-knoxville-tn-hd/6730` |
| CBS (WVNS) Beckley, WV HD | `WVNSTV591.us@HD` | `tvpassport.com` | `cbs-wvns-beckley-wv-hd/6731` |
| CBS (WWAY-DT2) Wilmington, NC | `WWAY32.us@HD` | `tvtv.us` | `43989` |
| CBS (WWJ) Detroit, MI HD | `WWJDT1.us@SD` | `tvpassport.com` | `cbs-wwj-detroit-mi-hd/2812` |
| CBS (WWL) New Orleans, LA HD | `WWLDT1.us@SD` | `tvpassport.com` | `cbs-wwl-new-orleans-la-hd/6732` |
| CBS (WWMT) Kalamazoo, MI HD | `WWMT31.us@HD` | `tvpassport.com` | `cbs-wwmt-kalamazoo-mi-hd/6733` |
| CBS (WWNY-CD2) Massena, NY | `WWNYCD282.us@HD` | `tvpassport.com` | `cbs-wwny-cd2-massena-ny/5325` |
| CBS (WWNY) Watertown, NY HD | `WWNYTV71.us@HD` | `tvpassport.com` | `cbs-wwny-watertown-ny-hd/30` |
| CBS (WWTV) Cadillac, MI HD | `WWTV91.us@HD` | `tvpassport.com` | `cbs-wwtv-cadillac-mi-hd/11452` |
| CBS (WYCW-DT2) Asheville, SC | `WYCW402.us@SD` | `tvpassport.com` | `cbs-wycw-dt2-asheville-sc/11550` |
| CBS (WYMT) Hazard, KY HD | `WYMTTV571.us@HD` | `tvpassport.com` | `cbs-wymt-hazard-ky-hd/6117` |
| CBS (WYOU) Scranton, PA HD | `WYOU221.us@HD` | `tvpassport.com` | `cbs-wyou-scranton-pa-hd/7535` |
| CBS (ZBM) Hamilton, Bermuda | `WZMQ192.us@HD` | `tvpassport.com` | `cbs-zbm-hamilton-bermuda/5002` |
| CBS News 24/7 | `CBSNews247.us@SD` | `pluto.tv` | `5a6b92f6e22a617379789618` |
| CBS News Baltimore | `CBSNewsBaltimore.us@SD` | `pluto.tv` | `60f75919718aed0007250d7a` |
| CBS News Bay Area | `CBSNewsBayArea.us@SD` | `pluto.tv` | `5eb1afb21486df0007abc57c` |
| CBS News Boston | `CBSNewsBoston.us@SD` | `pluto.tv` | `5eb1af2ad345340008fccd1e` |
| CBS News Chicago | `CBSNewsChicago.us@SD` | `pluto.tv` | `5eb1aeb2fd4b8a00076c2047` |
| CBS News Colorado | `CBSNewsColorado.us@SD` | `pluto.tv` | `5eb1b12146cba40007aa7e5d` |
| CBS News Detroit | `CBSNewsDetroit.us@SD` | `pluto.tv` | `634f2610d5023700078f7dee` |
| CBS News Los Angeles | `CBSNewsLosAngeles.us@SD` | `pluto.tv` | `5dc9b875e280c80009a8a44a` |
| CBS News Miami | `CBSNewsMiami.us@SD` | `pluto.tv` | `60fb299b79498900070b29e0` |
| CBS News Minnesota | `CBSNewsMinnesota.us@SD` | `pluto.tv` | `5eb1b0bf2240d8000732a09c` |
| CBS News New York | `CBSNewsNewYork.us@SD` | `pluto.tv` | `5dc48170e280c80009a861ab` |
| CBS News Pittsburgh | `CBSNewsPittsburgh.us@SD` | `pluto.tv` | `5eb1b17aa5277e00083f6521` |
| CBS News Sacramento | `CBSNewsSacramento.us@SD` | `pluto.tv` | `60cb6df2b2ad610008cd5bea` |
| CBS Sports HQ | `CBSSportsHQ.us@SD` | `pluto.tv` | `5e9f2c05172a0f0007db4786` |
| CBS Sports Network USA HD | `CBSSportsNetworkUSA.us@SD` | `tvpassport.com` | `cbs-sports-network-usa-hd/6985` |
| CCTV 4 America (WNXY-LD2) New York, NY | `WNXYLD2.us@SD` | `tvtv.us` | `16457` |
| CCTV 4 America (WXNY-LD2) New York, NY | `WXNYLD322.us@HD` | `tvtv.us` | `16443` |
| Celebrity Name Game | `CelebrityNameGame.us@SD` | `plex.tv` | `640205c40e1daf16b299567e` |
| CentroAmérica TV | `CentroamericaTV.us@SD` | `tvtv.us` | `44448` |
| CGTN (KICU-TV3) San Jose, CA | `KICUTV363.us@SD` | `tvtv.us` | `67818` |
| CGTN (KVMD9) Twentynine Palms, CA | `KVMDDT9.us@SD` | `tvtv.us` | `67225` |
| CGTN Español (WNXY-LD3) New York, NY | `WNXYLD3.us@SD` | `tvtv.us` | `16458` |
| Charge (KDNL-DT1) St Louis, MO | `KDNLTV303.us@SD` | `tvtv.us` | `69987` |
| Charge (KOMO-DT3) Seattle, WA | `KOMOTV43.us@SD` | `tvtv.us` | `91578` |
| Charge (WJW-DT4) Cleveland, OH | `WJWDT4.us@SD` | `tvtv.us` | `106510` |
| Charge (WPSG-DT2) Philadelphia, PA | `WPSGDT2.us@SD` | `tvtv.us` | `109469` |
| Charge (WUCW-DT3) St Paul, MN | `WUCWDT3.us@SD` | `tvtv.us` | `69640` |
| CHARGE! | `Charge.us@SD` | `tvpassport.com` | `charge/15228` |
| CHARGE! (K14JS-D4) Denver, CO | `K14JSD144.us@SD` | `tvtv.us` | `17832` |
| CHARGE! (K26GS-D2) Harrison, AR | `K26GSD262.us@SD` | `tvtv.us` | `15800` |
| CHARGE! (KAZT-CD4) Phoenix, AZ | `KAZTCD74.us@HD` | `tvtv.us` | `105263` |
| CHARGE! (KAZT-DT4) Prescott, AZ | `KAZTTV74.us@HD` | `tvtv.us` | `105262` |
| CHARGE! (KBVU3) Eureka, CA | `KBVU283.us@SD` | `tvtv.us` | `110230` |
| CHARGE! (KCVU3) Chico, CA | `KCVU203.us@SD` | `tvtv.us` | `110232` |
| Charge! (KDAF-DT4) Dallas, TX | `KDAF334.us@SD` | `tvtv.us` | `106888` |
| CHARGE! (KDOC-TV8) Anaheim, CA | `KDOCTV568.us@SD` | `tvtv.us` | `97556` |
| CHARGE! (KFRE-TV2) Fresno, CA | `KFREDT2.us@SD` | `tvtv.us` | `65540` |
| CHARGE! (KMAX-TV4) Sacramento, CA | `KMAXTV314.us@SD` | `tvtv.us` | `110234` |
| CHARGE! (KOFY-DT2) San Francisco, CA | `KOFYTV282.us@SD` | `tvtv.us` | `50612` |
| Charge! (WJAC-DT2) Johnstown, PA | `WJACTV62.us@SD` | `tvpassport.com` | `metv-wjac-dt2-johnstown-pa/9520` |
| Charge! (WPGH-DT3) Pittsburgh, PA | `WPGHTV533.us@SD` | `tvtv.us` | `91490` |
| CHARGE! (WRLH-DT4) Richmond, KY | `WRLHTV354.us@SD` | `tvtv.us` | `102233` |
| Charge! (WSBK-DT4) Boston, MA | `WSBKTV664.us@SD` | `tvtv.us` | `110531` |
| Charge! (WTVD3) Raleigh, NC | `WTVD283.us@SD` | `tvpassport.com` | `charge-wtvd3-raleigh-nc/5225` |
| Charge! (WUTV3) Buffalo, NY | `WUTV293.us@SD` | `tvtv.us` | `91397` |
| Cheddar (KFMS-LD3) Sacramento, CA | `KFMSLD473.us@SD` | `tvtv.us` | `106413` |
| Cheddar News | `CheddarNews.us@SD` | `tvtv.us` | `109333` |
| Cine adrenalina | `CineAdrenalina.us@SD` | `pluto.tv` | `5d8d164d92e97a5e107638d2` |
| Cine comedia | `PlutoTVCineComedia.us@US` | `pluto.tv` | `5f513564e4622a0007c578c0` |
| Cine Estelar | `CineEstelar.us@SD` | `tvtv.us` | `62125` |
| Cine Premiere | `CinePremiere.us@SD` | `pluto.tv` | `5cf968040ab7d8f181e6a68b` |
| Cine Romántico | `CineRomantico.us@SD` | `xumo.tv` | `250#99991142` |
| Cine Sony | `CineSony.us@SD` | `tvtv.us` | `102978` |
| Cine terror | `CineTerror.us@US` | `pluto.tv` | `5d8d180092e97a5e107638d3` |
| CineLife | `CineLife.us@SD` | `plex.tv` | `616df1e90dfa27ee465797fa` |
| Cinemax - Eastern Feed | `Cinemax.us@East` | `tvpassport.com` | `cinemax--eastern-feed/632` |
| Cinemax - Pacific Feed | `Cinemax.us@West` | `tvpassport.com` | `cinemax--pacific-feed/1215` |
| Cinemax Action - Eastern HD | `ActionMax.us@East` | `tvpassport.com` | `actionmax--eastern-hd/7094` |
| Cinemax Action - Pacific HD | `ActionMax.us@West` | `tvpassport.com` | `actionmax--pacific-hd/8473` |
| CINEPRIDE | `CinePride.us@SD` | `plex.tv` | `62167144ab2095ca85353ad6` |
| CINEVAULT | `Cinevault80s.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ30000148W` |
| CINEVAULT Westerns | `CinevaultWesterns.us@SD` | `xumo.tv` | `200#99951357` |
| Circle | `Circle.us@SD` | `tvtv.us` | `113430` |
| Circle (KARE-DT5) St Paul, MN | `KARE235.us@SD` | `tvtv.us` | `114071` |
| Circle (KBCW5) San Francisco, CA | `KBCWDT5.us@SD` | `tvtv.us` | `113482` |
| Circle (KHOU-DT5) Houston, TX | `KHOU115.us@SD` | `tvtv.us` | `114758` |
| Circle (KMAX-TV5) Sacramento, CA | `KMAXTV315.us@SD` | `tvtv.us` | `113520` |
| Circle (KMOV-DT4) St Louis MO | `KMOVDT5.us@SD` | `tvtv.us` | `113908` |
| Circle (KSTW-DT5) Seattle, WA | `KSTW115.us@SD` | `tvtv.us` | `113562` |
| Circle (WCTV3) Tallahassee, FL | `WCTV63.us@SD` | `tvtv.us` | `109194` |
| Circle (WLNY-DT5) New York, NY | `WLNYTV555.us@SD` | `tvtv.us` | `114225` |
| Circle (WPCW-DT4) Pittsburgh, PA | `WPCWDT4.us@SD` | `tvtv.us` | `109241` |
| Circle (WPSG-DT5) Philadelphia, PA | `WPSGDT5.us@SD` | `tvtv.us` | `113745` |
| Circle (WRNN-DT2) Kingston, NY | `WRNNTV482.us@SD` | `tvtv.us` | `55565` |
| Circle (WTHR-DT6) Indianapolis, IN | `WTHR136.us@SD` | `tvtv.us` | `114151` |
| Circle (WUAB-DT3) Cleveland, OH | `WUAB433.us@SD` | `tvtv.us` | `74183` |
| Circle (WWBT-DT3) Richmond, KY | `WWBT123.us@SD` | `tvtv.us` | `30675` |
| Clarity 4K | `Clarity4K.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA3800005NI` |
| Classic Arts Showcase | `ClassicArtsShowcase.us@SD` | `tvtv.us` | `16325` |
| Classic Doctor Who | `ClassicDoctorWho.us@SD` | `plex.tv` | `63068b870bbec3b06755a0ee` |
| Classic Doctor Who | `DoctorWho.us@US` | `tvtv.us` | `120086` |
| Classic Movies Channel | `ClassicMoviesChannel.us@SD` | `pluto.tv` | `561c5b0dada51f8004c4d855` |
| Classic TV Comedy | `ClassicTVComedy.us@SD` | `pluto.tv` | `5f15e32b297f96000768f928` |
| Classic TV Drama | `ClassicTVDrama.us@SD` | `pluto.tv` | `5f15e3cccf49290007053c67` |
| Classic TV: Families | `ClassicTVFamilies.us@US` | `pluto.tv` | `61325d18f5166c00081b84e0` |
| Classica | `Classica.us@SD` | `pluto.tv` | `5f779951372da90007fd45e8` |
| Cleo TV | `CleoTV.us@SD` | `tvtv.us` | `110288` |
| CMC-TV (KKPM-CD10) Chico, CA | `KKPMCD2810.us@SD` | `tvtv.us` | `99002` |
| CMC-TV (KQRO-LD3) Morgan Hill, CA | `KQROLD453.us@SD` | `tvtv.us` | `98239` |
| CMC-TV (KUKR-LD3) Santa Rosa, CA | `KUKRLD273.us@SD` | `tvtv.us` | `112122` |
| CMC-TV (KURK-LD) San Francisco, CA | `KURKLD31.us@SD` | `tvtv.us` | `109749` |
| CMT Equal Play | `CMTEqualPlay.us@SD` | `pluto.tv` | `5f68f53eb1e5800007390bf8` |
| CMT Music | `CMTMusic.us@SD` | `tvtv.us` | `18717` |
| CMT US - Eastern Feed HD | `CMT.us@East` | `tvpassport.com` | `cmt-us--eastern-feed-hd/6344` |
| CMT US - Pacific Feed HD | `CMT.us@West` | `tvpassport.com` | `cmt-us--pacific-feed-hd/6345` |
| CNBC USA HD | `CNBC.us@SD` | `tvpassport.com` | `cnbc-usa-hd/6119` |
| CNBC World | `CNBCWorld.us@SD` | `tvtv.us` | `26849` |
| CNN | `CNN.us@SD` | `tvpassport.com` | `cnn/70` |
| CNN en Español | `CNNenEspanol.us@SD` | `tvtv.us` | `58631` |
| CNN Headlines | `CNNHeadlines.us@SD` | `plex.tv` | `66b4fcc2530e39ea2ee79545` |
| CNN International Asia | `CNNInternational.us@AsiaPacific` | `tvtv.us` | `40821` |
| CNN International Latin America | `CNNInternational.us@LatinAmerica` | `tvtv.us` | `15192` |
| CNN International North America | `CNNInternational.us@NorthAmerica` | `tvpassport.com` | `cnn-international-north-america/3008` |
| CNN Originals | `CNNOriginals.us@SD` | `plex.tv` | `66ad6025cb5d3b7fb5011c2d` |
| Comedy Central en español | `ComedyCentralenEspanol.us@SD` | `pluto.tv` | `5cf96dad1652631e36d43320` |
| Comedy Central HD - Eastern Feed | `ComedyCentral.us@East` | `tvpassport.com` | `comedy-central-hd--eastern-feed/6957` |
| Comedy Central HD - Pacific Feed | `ComedyCentral.us@West` | `tvpassport.com` | `comedy-central-hd--pacific-feed/16224` |
| Comedy Central Pluto TV | `ComedyCentralPlutoTV.us@US` | `pluto.tv` | `5ca671f215a62078d2ec0abf` |
| Comedy Dynamics | `ComedyDynamics.us@SD` | `plex.tv` | `5efe1de5e0b3f5003f5d9f76` |
| Comedy.TV | `ComedyTV.us@SD` | `tvtv.us` | `80740` |
| Comet (KIAH-DT3) Houston, TX | `KIAHDT3.us@SD` | `tvtv.us` | `70504` |
| Comet (KOMO-DT2) Seattle, WA | `KOMOTV42.us@SD` | `tvtv.us` | `63537` |
| Comet (KPLR-DT3) St Louis MO | `KPLRDT3.us@SD` | `tvtv.us` | `97969` |
| Comet (WCCT-DT3) Hartford, CT | `WCCTDT3.us@SD` | `tvtv.us` | `97979` |
| Comet (WCTX-DT2) Hartford, CT | `WCTX82.us@SD` | `tvtv.us` | `59401` |
| Comet (WJAC3) Altoona, PA | `WJACTV63.us@SD` | `tvtv.us` | `91485` |
| Comet (WJW-DT3) Cleveland, OH | `WJWDT3.us@SD` | `tvtv.us` | `106509` |
| Comet (WLNY-DT2) New York, NY | `WLNYTV552.us@SD` | `tvtv.us` | `110142` |
| Comet (WPSG-DT3) Philadelphia, PA | `WPSGDT3.us@SD` | `tvtv.us` | `109470` |
| Comet (WSBK-DT3) Boston, MA | `WSBKTV383.us@SD` | `tvtv.us` | `109499` |
| Comet (WTLF2) Tallahassee, FL | `WTLF242.us@SD` | `tvtv.us` | `97223` |
| Comet (WTTV-DT3) Indianapolis, IN | `WTTV43.us@SD` | `tvtv.us` | `70497` |
| Comet (WUCW-DT2) St Paul, MN | `WUCWDT2.us@SD` | `tvtv.us` | `52331` |
| Comet (WUPA-DT3) Atanta, GA | `WUPA693.us@SD` | `tvtv.us` | `109126` |
| Comet TV | `Comet.us@SD` | `tvpassport.com` | `comet-tv/16811` |
| Comet TV (K11LC-D2) Prescott, AZ | `K11LCD32.us@SD` | `tvtv.us` | `34499` |
| Comet TV (KBCW2) San Francisco, CA | `KBCWDT2.us@SD` | `tvtv.us` | `109090` |
| Comet TV (KBFX-CD3) Bakersfield, CA | `KBFXCD583.us@SD` | `tvtv.us` | `97060` |
| Comet TV (KBNT4) San Diego, CA | `KBNTCD4.us@SD` | `tvtv.us` | `107577` |
| Comet TV (KBVU2) Eureka, CA | `KBVU282.us@SD` | `tvtv.us` | `62901` |
| Comet TV (KCVU2) Chico, CA | `KCVU202.us@SD` | `tvtv.us` | `53244` |
| Comet TV (KDOC-TV4) Los Angeles, CA | `KDOCTV564.us@SD` | `tvtv.us` | `72461` |
| Comet TV (KMAX-TV3) Sacramento, CA | `KMAXTV313.us@SD` | `tvtv.us` | `109080` |
| Comet TV (KMPH-CD3) Los Angeles, CA | `KMPHTV593.us@SD` | `tvtv.us` | `101739` |
| Comet TV (WRLH-DT3) Richmond, KY | `WRLHTV653.us@SD` | `tvtv.us` | `69969` |
| Complex TV | `Backstage.us@SD` | `plex.tv` | `608aec5fa09205002da4f28f` |
| Connecticut Public Television (WEDW) Bridgeport | `WEDW491.us@SD` | `tvpassport.com` | `connecticut-public-television-wedw-bridgeport/2065` |
| CONtv | `CONtv.us@SD` | `tvtv.us` | `110483` |
| Cooking Panda | `CookingPanda.us@SD` | `plex.tv` | `5f07e9fdf313eb0041bbecda` |
| COPS | `Cops.us@SD` | `pluto.tv` | `5e1f7e089f23700009d66303` |
| Corner Store (KDBK-LP2) Bakersfield, CA | `KDBKLP2.us@SD` | `tvtv.us` | `104928` |
| Corner Store (KEBK-LD2) Bakersfield, CA | `KEBKLD472.us@SD` | `tvtv.us` | `104925` |
| Corner Store (KFLA-LD3) Los Angeles, CA | `KFLALD83.us@SD` | `tvtv.us` | `66976` |
| Corner Store (WBXZ-LP7) Buffalo, NY | `WBXZLP7.us@SD` | `tvtv.us` | `34240` |
| Cornerstone (WVVC-LD2) Utica, NY | `WVVCLD402.us@SD` | `tvtv.us` | `17385` |
| Court TV (K19KV-D4) Prescott, AZ | `K19KVD4.us@SD` | `tvtv.us` | `35562` |
| Court TV (KARE-DT2) St Paul, MN | `KARE112.us@SD` | `tvtv.us` | `31041` |
| Court TV (KCPQ-DT2) Seattle, WA | `KCPQ132.us@SD` | `tvtv.us` | `30904` |
| Court TV (KDAF-DT3) Dallas, TX | `KDAF333.us@SD` | `tvtv.us` | `70321` |
| Court TV (KERO-TV2) Bakersfield, CA | `KEROTV232.us@HD` | `tvtv.us` | `76916` |
| Court TV (KHIZ) Victorville, CA | `KHIZLD391.us@SD` | `tvtv.us` | `99756` |
| Court TV (KIAH-DT5) Houston, TX | `KIAHDT5.us@SD` | `tvtv.us` | `112507` |
| Court TV (KKPX-TV3) San Francisco, CA | `KKPXTV653.us@SD` | `tvtv.us` | `50678` |
| Court TV (KMMD-CD) Salinas, CA | `KMMDCD391.us@HD` | `tvtv.us` | `69221` |
| Court TV (KPLR-DT2) St Louis MO | `KPLRDT2.us@SD` | `tvtv.us` | `50834` |
| Court TV (KPXN-TV2) Los Angeles, CA | `KPXNTV302.us@SD` | `tvtv.us` | `50512` |
| Court TV (KSBY4) San Luis Obispo, CA | `KSBY64.us@SD` | `tvtv.us` | `111962` |
| Court TV (KSPX-TV2) Sacramento-Modesto, CA | `KSPXTV332.us@HD` | `tvtv.us` | `46559` |
| Court TV (KTLA3) Los Angeles, CA | `KTLA53.us@SD` | `tvtv.us` | `70319` |
| Court TV (KTXL3) Sacramento, CA | `KTXL403.us@SD` | `tvtv.us` | `91360` |
| Court TV (KUVI-DT5) Bakersfield, CA | `KUVIDT455.us@SD` | `tvtv.us` | `111964` |
| Court TV (WCCT-DT2) Hartford, CT | `WCCTDT2.us@SD` | `tvtv.us` | `50903` |
| Court TV (WGN-DT3) Chicago, IL | `WGNDT3.us@SD` | `tvtv.us` | `83118` |
| Court TV (WHPX-DT3) Hartford, CT | `WHPXTV263.us@SD` | `tvtv.us` | `55329` |
| Court TV (WINP-DT3) Pittsburgh, PA | `WINPTV163.us@SD` | `tvtv.us` | `72115` |
| Court TV (WMAR-DT5) Washington D.C. | `WMARTV25.us@SD` | `tvtv.us` | `111220` |
| Court TV (WPHL-DT3) Philadelphia, PA | `WPHLTV653.us@SD` | `tvtv.us` | `70278` |
| Court TV (WPIX-DT3) NY | `WPIXDT3.us@SD` | `tvtv.us` | `65092` |
| Court TV (WRPX-TV2) Raleigh-Durham, NC | `WRPXTV472.us@SD` | `tvpassport.com` | `court-tv-wrpx-tv2-raleigh-durham-nc/12001` |
| Court TV (WSFL-DT2) Miami, FL | `WSFLTV392.us@SD` | `tvtv.us` | `51525` |
| Court TV (WTVR-DT4) Richmond, KY | `WTVRTV64.us@SD` | `tvtv.us` | `47679` |
| Court TV (WTXL5) Tallahassee, FL | `WTXLTV275.us@SD` | `tvtv.us` | `111254` |
| Court TV (WXYZ-DT4) Detroit, MI | `WXYZTV74.us@SD` | `tvtv.us` | `111146` |
| Court TV Mystery | `CourtTVMystery.us@SD` | `tvtv.us` | `15773` |
| Court TV Mystery (K26GS-D3) Harrison, AR | `K26GSD263.us@SD` | `tvtv.us` | `17260` |
| Court TV Mystery (KBTF-CD3) Bakersfield, CA | `KBTFCD313.us@SD` | `tvtv.us` | `90187` |
| Court TV Mystery (KCPQ-DT3) Seattle, WA | `KCPQ163.us@SD` | `tvtv.us` | `98013` |
| Court TV Mystery (KDTV-CD4) San Francisco, CA | `KDTVCD284.us@SD` | `tvtv.us` | `111736` |
| Court TV Mystery (KDTV-DT4) San Francisco, CA | `KDTVDT144.us@SD` | `tvtv.us` | `90121` |
| Court TV Mystery (KFPH-CD4) Phoenix, AZ | `KFPHCD4.us@SD` | `tvtv.us` | `16727` |
| Court TV Mystery (KFTR-DT3) Ontario, CA | `KFTRDT463.us@SD` | `tvtv.us` | `90181` |
| Court TV Mystery (KFTV-DT3) Hanford, CA | `KFTVDT213.us@SD` | `tvtv.us` | `90183` |
| Court TV Mystery (KGPE2) Fresno, CA | `KGPE472.us@SD` | `tvtv.us` | `54704` |
| Court TV Mystery (KGTV4) San Diego, CA | `KGTV104.us@SD` | `tvtv.us` | `106657` |
| Court TV Mystery (KMMD-CD5) Salinas, CA | `KMMDCD395.us@SD` | `tvtv.us` | `107335` |
| Court TV Mystery (KUVE-DT4) Tucson, AZ | `KUVEDT464.us@SD` | `tvtv.us` | `18082` |
| Court TV Mystery (WDPN-DT3) Philadelphia, PA | `WDPNTV23.us@SD` | `tvtv.us` | `90140` |
| Court TV Mystery (WFXT-DT2) Boston MI | `WFXT662.us@SD` | `tvtv.us` | `81295` |
| Court TV Mystery (WKBW3) Buffalo, NY | `WKBWTV73.us@SD` | `tvtv.us` | `59301` |
| Court TV Mystery (WMAR-DT4) Washington D.C. | `WMARTV24.us@SD` | `tvtv.us` | `106560` |
| Court TV Mystery (WTAJ2) Altoona, PA | `WTAJTV102.us@SD` | `tvtv.us` | `100645` |
| Court TV Mystery (WTXL4) Tallahassee, FL | `WTXLTV274.us@SD` | `tvtv.us` | `97554` |
| Court TV Mystery (WUOA-LD3) Birminghamg, AL | `WUOALD463.us@SD` | `tvtv.us` | `19913` |
| Court TV Network | `CourtTV.us@SD` | `tvpassport.com` | `court-tv-network/33650` |
| Court TV(KPPX-DT3) Arizona, PX | `KPPXTV513.us@SD` | `tvtv.us` | `50049` |
| Cozi (WCAU-DT2) Philadelphia, PA | `WCAU622.us@SD` | `tvtv.us` | `45807` |
| Cozi (WNBC-DT2) New York, NY | `WNBC472.us@SD` | `tvpassport.com` | `cozi-wnbc-dt2-new-york-ny/10919` |
| Cozi (WRAL-DT2) Raleigh-Durham, NC | `WRALTV52.us@SD` | `tvpassport.com` | `cozi-wral-dt2-raleigh-durham-nc/8340` |
| Cozi TV | `CoziTV.us@SD` | `tvtv.us` | `78851` |
| Cozi TV (KIRO-DT2) Seattle, WA | `KIROTV72.us@SD` | `tvtv.us` | `49928` |
| Cozi TV (KMOV-DT2) St Louis MO | `KMOV42.us@SD` | `tvtv.us` | `65617` |
| Cozi TV (KNBC2) Los Angeles, CA | `KNBC42.us@SD` | `tvtv.us` | `45764` |
| Cozi TV (KNSD2) San Diego, CA | `KNSD482.us@SD` | `tvtv.us` | `45740` |
| Cozi TV (KNTV2) San Francisco, CA | `KNTV42.us@SD` | `tvtv.us` | `36151` |
| Cozi TV (KPHO-DT2) Arizona, PX | `KPHOTV52.us@SD` | `tvtv.us` | `49881` |
| Cozi TV (KSTS4) San Jose, CA | `KSTS114.us@SD` | `tvtv.us` | `113567` |
| Cozi TV (KTMD-DT4) Houston, TX | `KTMD474.us@SD` | `tvtv.us` | `120369` |
| Cozi TV (KXAS-DT2) Dallas TX | `KXASTV52.us@SD` | `tvtv.us` | `45803` |
| Cozi TV (WATM3) Altoona, PA | `WATMTV233.us@SD` | `tvtv.us` | `58806` |
| Cozi TV (WBTS-CD2) Boston, MA | `WBTSCD442.us@SD` | `tvtv.us` | `91447` |
| Cozi TV (WKYC-DT3) Cleveland, OH | `WKYC33.us@SD` | `tvtv.us` | `42700` |
| Cozi TV (WMAQ-DT2) Chicago, IL | `WMAQTV52.us@SD` | `tvtv.us` | `45805` |
| Cozi TV (WRIC-DT3) Richmond, VA | `WRICTV83.us@SD` | `tvtv.us` | `98442` |
| Cozi TV (WTAE-DT2) Pittsburgh, PA | `WTAETV42.us@SD` | `tvtv.us` | `55776` |
| Cozi TV (WTVJ-DT2) Miami, FL | `WTVJDT2.us@SD` | `tvtv.us` | `45543` |
| Cozi TV (WVIT-DT2) Hartford, CT | `WVIT302.us@SD` | `tvtv.us` | `45761` |
| Cozi TV(WRC-DT2) Washington D.C. | `WRCDT2.us@SD` | `tvtv.us` | `45736` |
| CPTV Spilit (WEDH-DT3) Hartford, CT | `WEDHDT3.us@SD` | `tvtv.us` | `69134` |
| Create | `Create.us@SD` | `tvtv.us` | `48990` |
| Create (KCET2) Los Angeles, CA | `KCET582.us@SD` | `tvtv.us` | `35413` |
| Create (KERA-DT3) Dallas, TX | `KERATV133.us@SD` | `tvtv.us` | `98168` |
| Create (KETC-DT4) St Louis, MO | `KETC94.us@SD` | `tvtv.us` | `49623` |
| Create (KIXE-TV2) Redding, CA | `KIXETV92.us@SD` | `tvtv.us` | `46790` |
| Create (KJHP-LP4) Morongo Valley, CA | `KJHPLP4.us@SD` | `tvtv.us` | `82642` |
| Create (KLRU-DT2) Austin, TX | `KLRU182.us@SD` | `tvtv.us` | `35502` |
| Create (KPBS3) San Diego, CA | `KPBS153.us@SD` | `tvtv.us` | `49377` |
| Create (KRCB2) Cotati, CA | `KRCB222.us@SD` | `tvtv.us` | `35244` |
| Create (KUHT-DT2) Houston, TX | `KUHT82.us@SD` | `tvtv.us` | `45716` |
| Create (KVCR-DT4) San Bernardino, CA | `KVCRDT244.us@SD` | `tvtv.us` | `59974` |
| Create (KVPT3) Fresno, CA | `KVPT183.us@SD` | `tvtv.us` | `55439` |
| Create (WCVE-DT2) Richmond, VA | `WCVETV232.us@SD` | `tvtv.us` | `58837` |
| Create (WFSU3) Tallahassee, FL | `WFSUTV113.us@SD` | `tvtv.us` | `35391` |
| Create (WFYI-DT3) Indianapolis, IN | `WFYI203.us@SD` | `tvtv.us` | `44032` |
| Create (WLVT-DT2) Bethlehem, PA | `WLVTTV692.us@SD` | `tvtv.us` | `45790` |
| Create (WNED21) Buffalo, NY | `WNEDTV172.us@SD` | `tvtv.us` | `34918` |
| Create (WNPI-DT2) Watertown, NY | `WNPIDT182.us@SD` | `tvtv.us` | `11365` |
| Create (WPBT-DT2) Miami, FL | `WPBT22.us@SD` | `tvtv.us` | `32576` |
| Create (WPSU2) Altoona, PA | `WPSUTV32.us@SD` | `tvtv.us` | `49153` |
| Create (WQED-DT2) Pittsburgh, PA | `WQED132.us@SD` | `tvtv.us` | `46273` |
| Create (WRLK-DT2) Columbia, SC | `WRLKTV352.us@SD` | `tvtv.us` | `24095` |
| Create (WUPA-DT2) Atlanta, GA | `WGTV82.us@SD` | `tvtv.us` | `61543` |
| Create and World (WTTW-DT3) Chicago, IL | `WTTW113.us@SD` | `tvtv.us` | `49346` |
| Crime & Investigation Network | `CrimePlusInvestigation.us@SD` | `tvguide.com` | `9233003673` |
| Crímenes imperfectos | `CrimenesImperfectos.us@SD` | `pluto.tv` | `5e94cd036cc69d0007e8a1ba` |
| Crunchyroll | `Crunchyroll.us@SD` | `xumo.tv` | `100#99951332` |
| CSI | `CSI.us@SD` | `pluto.tv` | `5efbd29e4aa26700076c0d06` |
| CSI en Español | `CSIenespanol.us@SD` | `pluto.tv` | `604928d54a4f730007ff76bc` |
| CUNY TV (WNYE-DT3) New York, NY | `WNYETV253.us@HD` | `tvtv.us` | `28271` |
| CW (K21LC-DT5) Cortez, CO | `K21LCD45.us@SD` | `tvtv.us` | `18169` |
| CW (KASW) Phoenix, AZ | `KASW611.us@HD` | `tvpassport.com` | `cw-kasw-phoenix-az/1181` |
| CW (KBCW) San Francisco, CA | `KBCWDT1.us@SD` | `tvtv.us` | `19575` |
| CW (KBOI-DT2) Boise, ID | `KBOITV22.us@HD` | `tvtv.us` | `64515` |
| CW (KCWQ) Palm Springs, CA | `KCWQLD21.us@HD` | `tvtv.us` | `75317` |
| CW (KDAF-DT1) Dallas, TX | `KDAF331.us@HD` | `tvtv.us` | `26636` |
| CW (KFMB-TV2) San Diego, CA | `KFMBTV82.us@HD` | `tvtv.us` | `73496` |
| CW (KFRE) Fresno, CA | `KFRETV591.us@HD` | `tvtv.us` | `43050` |
| CW (KGET-TV2) Bakersfield, CA | `KGETTV172.us@HD` | `tvtv.us` | `52444` |
| CW (KHON-DT2) Honolulu, HI | `KHONTV22.us@HD` | `tvtv.us` | `54247` |
| CW (KHSL-DT2) Chico, CA | `KHSLTV122.us@HD` | `tvtv.us` | `52417` |
| CW (KIAH-DT1) Houston, TX | `KIAH81.us@HD` | `tvtv.us` | `21657` |
| CW (KION-TV2) Monterey, CA | `KIONTV462.us@HD` | `tvtv.us` | `52421` |
| CW (KMAX) Sacramento, CA | `KMAXTV311.us@HD` | `tvtv.us` | `43352` |
| CW (KPLR-DT1) St Louis MO | `KPLRTV51.us@HD` | `tvtv.us` | `34808` |
| CW (KSBY2) Santa Barbara, CA | `KSBY62.us@HD` | `tvtv.us` | `52685` |
| CW (KTVQ-DT2) Billings, MT | `KTVQ22.us@HD` | `tvtv.us` | `51965` |
| CW (KWGN-DT1) Denver, CO | `KWGNTV91.us@HD` | `tvtv.us` | `20370` |
| CW (WBKP) Calumet, MI | `WBKP51.us@SD` | `tvpassport.com` | `cw-wbkp-calumet-mi/4943` |
| CW (WBSF) Flint, MI | `WBSF661.us@HD` | `tvpassport.com` | `cw-wbsf-flint-mi/6958` |
| CW (WCCT) Hartford, CT | `WCCTTV81.us@HD` | `tvpassport.com` | `cw-wcct-hartford-ct/2057` |
| CW (WCIU-DT1) Chicago, IL | `WCIUTV261.us@HD` | `tvtv.us` | `36099` |
| CW (WCWJ) Jacksonville, FL | `WCWJ41.us@HD` | `tvpassport.com` | `cw-wcwj-jacksonville-fl/2046` |
| CW (WCWN-DT1) Albany, NY | `WCWN61.us@HD` | `tvtv.us` | `34986` |
| CW (WDCW-DT1) Washington D.C. | `WDCW501.us@HD` | `tvtv.us` | `32744` |
| CW (WFQX-DT2) Cadillac, MI | `WFQXTV322.us@HD` | `tvtv.us` | `63348` |
| CW (WISH-DT1) Indianapolis, IN | `WISHTV81.us@HD` | `tvtv.us` | `19592` |
| CW (WJAC4) Altoona, PA | `WJACTV64.us@HD` | `tvtv.us` | `98160` |
| CW (WKBD-TV) Detroit, MI | `WKBDTV501.us@HD` | `tvtv.us` | `25126` |
| CW (WKCF) Orlando, FL | `WKCF21.us@HD` | `tvpassport.com` | `cw-wkcf-orlando-fl/2515` |
| CW (WLFL) Raleigh, NC HD | `WLFL281.us@HD` | `tvpassport.com` | `cw-wlfl-raleigh-nc-hd/4821` |
| CW (WLVI-DT1) Boston, MA | `WLVI71.us@HD` | `tvtv.us` | `32633` |
| CW (WNLO1) Buffalo, NY | `WNLO41.us@HD` | `tvtv.us` | `43430` |
| CW (WPDE-DT2) Florence, SC | `WPDETV212.us@SD` | `tvtv.us` | `66446` |
| CW (WPSG-DT1) Philadelphia, PA | `WPSG651.us@HD` | `tvtv.us` | `34628` |
| CW (WPXT) Portland, ME | `WPXT511.us@HD` | `tvpassport.com` | `cw-wpxt-portland-me/2695` |
| CW (WSFL-DT1) Miami, FL | `WSFLTV391.us@HD` | `tvtv.us` | `30304` |
| CW (WSTM-DT2) Syracuse, NY | `WSTMDT2.us@SD` | `tvtv.us` | `46286` |
| CW (WTVG-DT2) Toledo, OH | `WTVG132.us@HD` | `tvtv.us` | `31711` |
| CW (WUAB-DT1) Cleveland, OH | `WUAB431.us@HD` | `tvtv.us` | `34516` |
| CW (WUCW-DT1) St Paul, MN | `WUCW91.us@HD` | `tvtv.us` | `34425` |
| CW (WUPA-DT1) Atanta, GA | `WUPA691.us@HD` | `tvtv.us` | `32793` |
| CW (WWAY-DT3) Wilmington, NC | `WWAY33.us@HD` | `tvtv.us` | `46992` |
| CW (WWMT-DT2) Kalamazoo, MI | `WWMT32.us@HD` | `tvtv.us` | `34910` |
| CW East | `CW.us@East` | `tvtv.us` | `51306` |
| CW Network National | `TheCW.us@SD` | `tvguide.com` | `9233011398` |
| CW Plus Central (National Feed) | `TheCWPlus.us@Central` | `tvtv.us` | `18749` |
| CW Plus East (National Feed) | `TheCWPlus.us@East` | `tvtv.us` | `18983` |
| CW Plus Mountain (National Feed) | `TheCWPlus.us@Mountain` | `tvtv.us` | `18984` |
| CW Plus Pacific (National Feed) | `TheCWPlus.us@Pacific` | `tvtv.us` | `18985` |
| CW+ (KECA) Eureka, CA | `KECALD291.us@HD` | `tvtv.us` | `65618` |
| Dabl | `Dabl.us@SD` | `tvtv.us` | `112157` |
| DABL (K30JD-D3) Prescott, AZ | `K30JDD53.us@SD` | `tvtv.us` | `34501` |
| DABL (KCBS-TV3) Los Angeles, CA | `KCBSTV23.us@SD` | `tvtv.us` | `112431` |
| DABL (KCVU5) Chico, CA | `KCVU205.us@SD` | `tvtv.us` | `113039` |
| Dabl (KDKA-DT3) Pittsburgh, PA | `KDKATV23.us@SD` | `tvtv.us` | `112326` |
| DABL (KMPH-TV2) Fresno, CA | `KMPHTV262.us@SD` | `tvtv.us` | `61505` |
| DABL (KOVR3) Stockton, CA | `KOVR133.us@SD` | `tvtv.us` | `112325` |
| Dabl (KPHO-DT3) Arizona, PX | `KPHOTV53.us@SD` | `tvtv.us` | `112336` |
| DABL (KPIX-TV3) San Francisco, CA | `KPIXTV53.us@SD` | `tvtv.us` | `112342` |
| Dabl (KTVI-DT4) St Louis, MO | `KTVI24.us@SD` | `tvtv.us` | `112482` |
| Dabl (KYW-DT3) Philadelphia, PA | `KYWDT3.us@SD` | `tvtv.us` | `112555` |
| Dabl (WBZ-DT3) Boston, MA | `WBZDT3.us@SD` | `tvtv.us` | `112382` |
| Dabl (WCBS-DT3) New York, NY | `WCBSTV23.us@SD` | `tvtv.us` | `112501` |
| Dabl (WCCO-DT3) St Paul, MN | `WCCOTV43.us@SD` | `tvtv.us` | `112335` |
| Dabl (WFAA-DT3) Dallas, TX | `KTVT113.us@SD` | `tvtv.us` | `112329` |
| Dabl (WFMZ-DT3) Chicago, IL | `WBBMDT3.us@SD` | `tvtv.us` | `112504` |
| Dabl (WFOR-DT3) Miami, FL | `WFORTV43.us@SD` | `tvtv.us` | `112327` |
| Dabl (WOIO-DT3) Cleveland, OH | `WOIO433.us@SD` | `tvtv.us` | `114149` |
| DABL (WRAZ3) Raleigh-Durham, NC | `WRAZ503.us@SD` | `tvpassport.com` | `dabl-wraz3-raleigh-durham-nc/35201` |
| Dabl (WRLH-DT5) Richmond, KY | `WRLHTV355.us@SD` | `tvtv.us` | `112986` |
| Dabl (WSB-DT3) Atanta, GA | `WSBDT3.us@SD` | `tvtv.us` | `92262` |
| Dabl (WTHR-DT2) Indianapolis, IN | `WTHR132.us@SD` | `tvtv.us` | `30411` |
| Dabl (WWJ-DT3) Detroit, MI | `WWJDT3.us@SD` | `tvtv.us` | `42611` |
| Dallas Cowboys Cheer | `DallasCowboysCheerleaders.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA300004TE` |
| DangerTV | `DangerTV.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ3504708A` |
| Dark Matter TV | `DarkMatterTV.us@SD` | `plex.tv` | `5eea605674085f0040ddc7a6` |
| Dateline | `Dateline247.us@SD` | `plex.tv` | `5fc70600598c41002da3dd19` |
| Daystar - Network HD | `DaystarTV.us@SD` | `tvpassport.com` | `daystar--network-hd/13634` |
| Daystar (K14JS-D3) Denver, CO | `K14JSD143.us@SD` | `tvtv.us` | `17831` |
| Daystar (KAKZ-LD2) Palm Springs, CA | `KAKZLD42.us@SD` | `tvtv.us` | `83293` |
| Daystar (KDPH-LD2) Phoenix, AZ | `KDPHLD482.us@HD` | `tvtv.us` | `18021` |
| Daystar (KDTS) Stockton, CA | `KDTSLD521.us@HD` | `tvtv.us` | `32896` |
| Daystar (KGMC-DT3) Clovis, CA | `KGMCDT3.us@SD` | `tvtv.us` | `77069` |
| Daystar (KKPM-CD3) Clovis, CA | `KKPMCD283.us@SD` | `tvtv.us` | `92484` |
| Daystar (KMBY-LD3) Monterey, CA | `KMBYLD273.us@SD` | `tvtv.us` | `82822` |
| Daystar (KMSG-LD3) Fresno, CA | `KMSGLD393.us@SD` | `tvtv.us` | `101769` |
| Daystar (KOCE-TV3) Los Angeles, CA | `KOCETV503.us@SD` | `tvtv.us` | `53201` |
| Daystar (KQRO-LD6) Morgan Hill, CA | `KQROLD456.us@SD` | `tvtv.us` | `98269` |
| Daystar (WACN) Raleigh, NC | `WACNLP1.us@SD` | `tvpassport.com` | `daystar-wacn-raleigh-nc/5074` |
| Daystar (WKOB-LD2) New York, NY | `WKOBLD422.us@HD` | `tvtv.us` | `70833` |
| Daystar Español | `DaystarTVEspanol.us@SD` | `distro.tv` | `144301` |
| De Pelicula | `DePeliculaUS.us@SD` | `tvtv.us` | `35401` |
| Deal or No Deal | `DealorNoDeal.us@SD` | `pluto.tv` | `5e9debf8c881310007d7bde1` |
| Deals (KVHF-LD7) Fresno, CA | `KVHFLD47.us@SD` | `tvtv.us` | `96966` |
| Decades | `Decades.us@SD` | `tvtv.us` | `91415` |
| Decades (KAXT-CD2) San Francisco, CA | `KAXTCD682.us@HD` | `tvtv.us` | `67377` |
| Decades (KFAZ-CA2) Fresno, CA | `KFAZCA2.us@SD` | `tvtv.us` | `104357` |
| Decades (KICU-TV4) San Jose, CA | `KICUTV364.us@SD` | `tvtv.us` | `97794` |
| Decades (KLPD-LD2) Denver, CO | `KLPDLD72.us@SD` | `tvtv.us` | `15462` |
| Decades (KNLC-DT5) St Louis MO | `KNLC245.us@SD` | `tvtv.us` | `106847` |
| Decades (KRIV-DT2) Houston TX | `KRIV262.us@SD` | `tvtv.us` | `105340` |
| Decades (KTTV4) Los Angeles, CA | `KTTV134.us@SD` | `tvtv.us` | `112522` |
| Decades (KUTP-DT4) Arizona, PX | `KUTP454.us@SD` | `tvtv.us` | `112708` |
| Decades (WAGA-DT5) Atanta, GA | `WAGATV55.us@SD` | `tvtv.us` | `112717` |
| Decades (WBGT-CD5) Rochester, NY | `WBGTCD465.us@SD` | `tvtv.us` | `33298` |
| Decades (WCIU-DT6) Chicago, IL | `WCIUTV266.us@SD` | `tvtv.us` | `59674` |
| Decades (WHCT-LD5) Hartford, CT | `WHCTLD355.us@SD` | `tvtv.us` | `116365` |
| Decades (WNYW-DT5) New York, NY | `WNYW55.us@SD` | `tvtv.us` | `112941` |
| Decades (WTVU-CD5) Syracuse, NY | `WTVUCD225.us@SD` | `tvtv.us` | `35647` |
| Defy (KKPX-TV4) San Francisco, CA | `KKPXTV654.us@SD` | `tvtv.us` | `50680` |
| Defy (KPXN-TV3) Los Angeles, CA | `KPXNTV303.us@SD` | `tvtv.us` | `49817` |
| Defy (KSPX-TV5) Sacramento-Modesto, CA | `KSPXTV295.us@SD` | `tvtv.us` | `82730` |
| DEFY (WPXN-DT4) New York, NY | `WPXNTV314.us@SD` | `tvtv.us` | `55347` |
| Defy TV (KPPX-DT5) Arizona, PX | `KPPXTV515.us@SD` | `tvtv.us` | `82678` |
| DEFY TV (WHPX-DT5) Hartford, CT | `WHPXTV265.us@SD` | `tvtv.us` | `82749` |
| DEFY TV (WINP-DT5) Pittsburgh, PA | `WINPTV165.us@SD` | `tvtv.us` | `83523` |
| Defy TV (WPPX-DT6) Philadelphia, PA | `WPPXTV616.us@SD` | `tvtv.us` | `83522` |
| Degrassi | `Degrassi.us@US` | `pluto.tv` | `5c6eeb85c05dfc257e5a50c4` |
| Demand Africa | `DemandAfrica.us@SD` | `xumo.tv` | `100#99991381` |
| Designated Survivor | `DesignatedSurvivor.us@SD` | `plex.tv` | `66aa9b7fd8fc59729226073e` |
| Destination America | `DestinationAmerica.us@SD` | `tvguide.com` | `9200009245` |
| Digi TV (KTVW-DT5) Phoenix, AZ | `KTVWDT5.us@SD` | `tvtv.us` | `36592` |
| Discovery Channel (US) - Eastern Feed | `DiscoveryChannel.us@East` | `tvpassport.com` | `discovery-channel-us--eastern-feed/649` |
| Discovery Channel (US) - Pacific Feed | `DiscoveryChannel.us@West` | `tvpassport.com` | `discovery-channel-us--pacific-feed/1206` |
| Discovery Channel en Español | `DiscoveryenEspanol.us@SD` | `tvtv.us` | `19247` |
| Discovery Familia | `DiscoveryFamilia.us@SD` | `tvtv.us` | `99630` |
| Discovery Family Channel HD | `DiscoveryFamily.us@SD` | `tvpassport.com` | `discovery-family-channel-hd/8518` |
| Discovery Life Channel HD | `DiscoveryLife.us@SD` | `tvpassport.com` | `discovery-life-channel-hd/16423` |
| Disney - Eastern Feed | `DisneyChannel.us@East` | `tvpassport.com` | `disney--eastern-feed/595` |
| Disney - Pacific Feed | `DisneyChannel.us@West` | `tvpassport.com` | `disney--pacific-feed/1271` |
| Disney Junior USA HD - East | `DisneyJunior.us@East` | `tvpassport.com` | `disney-junior-usa-hd--east/10523` |
| Disney Junior USA HD - West | `DisneyJunior.us@West` | `tvpassport.com` | `disney-junior-usa-hd--west/16229` |
| Disney XD USA HD - Eastern Feed | `DisneyXD.us@East` | `tvpassport.com` | `disney-xd-usa-hd--eastern-feed/6236` |
| Disney XD USA HD - Pacific Feed | `DisneyXD.us@West` | `tvpassport.com` | `disney-xd-usa-hd--pacific-feed/16228` |
| Divorce Court | `NoseyDivorceCourt.us@SD` | `xumo.tv` | `350#99991346` |
| DIYA TV (KNLA-CD3) Los Angeles, CA | `KNLACD203.us@SD` | `tvtv.us` | `68655` |
| Doctor Who Classic | `DoctorWhoClassic.us@US` | `pluto.tv` | `5ce4475cd43850831ca91ce7` |
| Documentary+ | `DocumentaryPlus.us@International` | `plex.tv` | `614e286b2bac097ffd6fd6ab` |
| Documentary+ | `DocumentaryPlus.us@US` | `plex.tv` | `62f42e6cad0081c6ef405723` |
| Docurama | `Docurama.us@SD` | `tvtv.us` | `110479` |
| Dog the Bounty Hunter | `DogtheBountyHunter.us@US` | `pluto.tv` | `5bee1a7359ee03633e780238` |
| Dog TV | `DogTV.us@SD` | `tvtv.us` | `82446` |
| Dog Whisperer | `DogWhisperer.us@UK` | `plex.tv` | `652a8b001b5c74bc83cf727c` |
| Dove | `DoveChannel.us@SD` | `xumo.tv` | `300#99991333` |
| Dr. Phil | `BestofDrPhil.us@SD` | `xumo.tv` | `350#99951370` |
| DraftKings Network | `DraftKingsNetwork.us@SD` | `xumo.tv` | `50#99951265` |
| Drama Life | `DramaLife.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ26000015Y` |
| Dramon | `SonyCanalNovelas.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ3000002OC` |
| Dry Bar Comedy | `DryBarComedyPlus.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ30000039U` |
| Dungeon TV | `DungeonTV.us@SD` | `distro.tv` | `42162` |
| Dust | `DUST.us@SD` | `tvtv.us` | `112881` |
| DW English (KBID-DT2) Fresno, CA | `KBIDLP2.us@SD` | `tvtv.us` | `89915` |
| DW English (KPJK-DT4) San Mateo, CA | `KPJK604.us@SD` | `tvtv.us` | `109636` |
| E! Entertainment USA HD - East | `E.us@East` | `tvpassport.com` | `e-entertainment-usa-hd--east/6659` |
| E! Entertainment USA HD - Pacific | `E.us@West` | `tvpassport.com` | `e-entertainment-usa-hd--pacific/17059` |
| E! Keeping Up | `EKeepingUp.us@SD` | `plex.tv` | `645e328e3ea1d2d705ef8ab2` |
| Ebony TV by Lionsgate | `EbonyTVbyLionsgate.us@SD` | `plex.tv` | `6533de63bd43e1c8b1865152` |
| El Reino Infantil | `PlutoTVElReinoInfantil.us@SD` | `pluto.tv` | `66fedd65d7de140008dccd66` |
| Electric Now | `ElectricNow.us@SD` | `tvtv.us` | `112797` |
| Empire PBS (KJHP-LP3) Morongo Valley, CA | `KJHPLP3.us@SD` | `tvtv.us` | `82641` |
| Empire PBS (KVCR-DT3) San Bernardino, CA | `KVCRDT243.us@SD` | `tvtv.us` | `59978` |
| Enlace | `EnlaceTBN.us@SD` | `tvpassport.com` | `enlace/3256` |
| Enlace (KTBN-TV4) Los Angeles, CA | `KTBNTV404.us@SD` | `tvtv.us` | `53397` |
| Enlace (WKOI-DT4) Richmond, IN | `WKOITV454.us@SD` | `tvtv.us` | `50104` |
| Entertainment Tonight Live | `ETLive.us@SD` | `tvtv.us` | `110291` |
| ES.TV HD | `ESTV.us@SD` | `tvpassport.com` | `estv-hd/18805` |
| eScapes | `eScapesXUMO.us@SD` | `xumo.tv` | `250#99991280` |
| ESNE (KDOC-TV2) Los Angeles, CA | `KDOCTV562.us@SD` | `tvtv.us` | `60651` |
| Esperanza TV | `EsperanzaTV.us@SD` | `tvtv.us` | `65095` |
| ESPN College Extra 1 | `ESPNCollegeExtra1.us@SD` | `tvpassport.com` | `espn-college-extra-1/9982` |
| ESPN College Extra 2 | `ESPNCollegeExtra2.us@SD` | `tvpassport.com` | `espn-college-extra-2/15433` |
| ESPN College Extra 3 | `ESPNCollegeExtra3.us@SD` | `tvpassport.com` | `espn-college-extra-3/15435` |
| ESPN College Extra 4 | `ESPNCollegeExtra4.us@SD` | `tvpassport.com` | `espn-college-extra-4/15437` |
| ESPN College Extra 5 | `ESPNCollegeExtra5.us@SD` | `tvpassport.com` | `espn-college-extra-5/15439` |
| ESPN College Extra 6 | `ESPNCollegeExtra6.us@SD` | `tvpassport.com` | `espn-college-extra-6/15441` |
| ESPN College Extra 7 | `ESPNCollegeExtra7.us@SD` | `tvpassport.com` | `espn-college-extra-7/15352` |
| ESPN College Extra 8 | `ESPNCollegeExtra8.us@SD` | `tvpassport.com` | `espn-college-extra-8/15445` |
| ESPN Deportes | `ESPNDeportes.us@SD` | `tvtv.us` | `25595` |
| ESPN HD | `ESPN.us@SD` | `tvpassport.com` | `espn-hd/3036` |
| ESPN News HD | `ESPNews.us@SD` | `tvpassport.com` | `espn-news-hd/6246` |
| ESPN U | `ESPNU.us@SD` | `tvpassport.com` | `espn-u/3331` |
| ESPN2 HD | `ESPN2.us@SD` | `tvpassport.com` | `espn2-hd/3379` |
| Estrella (KCBT) Bakersfield, CA | `KCBTLD341.us@HD` | `tvtv.us` | `73738` |
| Estrella (KGMC) Clovis, CA | `KGMC431.us@HD` | `tvtv.us` | `61403` |
| Estrella (KHSC-DT5) Fresno, CA | `KHSCLD5.us@SD` | `tvtv.us` | `101750` |
| Estrella (KQCA-DT3) Sacramento, CA | `KQCADT3.us@SD` | `tvtv.us` | `93860` |
| Estrella (KRCA) Los Angeles, CA | `KRCA71.us@HD` | `tvtv.us` | `35352` |
| Estrella (KRET-DT3) Palm Springs, CA | `KRETCD453.us@SD` | `tvtv.us` | `82816` |
| Estrella (KSBW-DT3) Monterey, CA | `KSBW83.us@SD` | `tvtv.us` | `99135` |
| Estrella (KSDX) San Diego, CA | `KSDXLD91.us@SD` | `tvtv.us` | `71987` |
| Estrella Games | `EstrellaGames.us@SD` | `plex.tv` | `64fb9149bb3e0baa5dcc0944` |
| Estrella News | `EstrellaNews.us@SD` | `pluto.tv` | `60492e6d7f3f560007ab0f62` |
| Estrella TV | `EstrellaTV.us@SD` | `tvtv.us` | `65064` |
| Estrella TV (KCNS-DT4) San Francisco, CA | `KCNS504.us@SD` | `tvtv.us` | `73924` |
| Estrella TV (KYMA-DT3) Yuma, AZ | `KYMADT133.us@SD` | `tvtv.us` | `35541` |
| EstrellaTV (WASA-LD1) Port Jervis, NY | `WASALD421.us@HD` | `tvtv.us` | `75011` |
| EstrellaTV (WKOB-LD6) New York, NY | `WKOBLD6.us@SD` | `tvtv.us` | `81777` |
| ET | `EntertainmentTonight.us@SD` | `pluto.tv` | `5dc0c78281eddb0009a02d5e` |
| EWTN USA | `EWTN.us@English` | `tvpassport.com` | `ewtn-usa/620` |
| Explorer Channel (WUNC-DT3) Chapel Hill, NC | `WUNCTV43.us@SD` | `tvtv.us` | `30647` |
| Extreme Jobs | `ExtremeJobs.us@SD` | `plex.tv` | `690ce1d0718f73527d832927` |
| FailArmy | `FailArmy.us@UK` | `plex.tv` | `5f170d62b898490041b4936e` |
| FailArmy | `FailArmy.us@US` | `pluto.tv` | `554158e864526b29254ff105` |
| FaithTV (KVMD-DT6) Twentynine Palms, CA | `KVMD316.us@SD` | `tvtv.us` | `67224` |
| Family Channel USA (K26CI-DT3) Cortex, CO | `K26CID263.us@SD` | `tvtv.us` | `18211` |
| Family Channel USA (WRTD-DT3) Birmingham, AL | `WRTDLD3.us@SD` | `tvtv.us` | `11895` |
| Family Channel USA (WSFG-DT5) Berry, AL | `W31FMD515.us@SD` | `tvtv.us` | `17558` |
| Family Ties | `FamilyTies.us@SD` | `pluto.tv` | `5f77939a630f530007dde654` |
| FanDuel Racing | `FanDuelRacing.us@SD` | `tvtv.us` | `32258` |
| FanDuel TV | `FanDuelTV.us@SD` | `tvguide.com` | `9200012412` |
| Farscape | `Farscape.us@SD` | `plex.tv` | `635195e9ccee3e1547a8831a` |
| FAVE TV (KCBS-TV4) Los Angeles, CA | `KCBSTV24.us@SD` | `tvtv.us` | `117036` |
| FAVE TV (KOVR4) Stockton, CA | `KOVR134.us@SD` | `tvtv.us` | `117083` |
| FAVE TV (KPIX-TV4) San Francisco, CA | `KPIXTV54.us@SD` | `tvtv.us` | `117034` |
| FAVE TV (WCBS-DT4) New York, NY | `WCBSTV24.us@SD` | `tvtv.us` | `117203` |
| Fave TV (WCCO-DT4) St Paul, MN | `WCCOTV44.us@SD` | `tvtv.us` | `117140` |
| Fave TV (WFAA-DT4) Dallas, TX | `KTVT114.us@SD` | `tvtv.us` | `117086` |
| FAVE TV (WFOR-DT4) Miami, FL | `WFORTV44.us@SD` | `tvtv.us` | `117054` |
| Fave TV (WWJ-DT4) Detroit, MI | `WWJDT4.us@SD` | `tvtv.us` | `42612` |
| Fear Factor | `FearFactor.us@UK` | `plex.tv` | `651600fb2ff655e77635c62a` |
| Fear Factor | `FearFactor.us@US` | `xumo.tv` | `200#99951130` |
| FETV | `FETV.us@SD` | `tvtv.us` | `73413` |
| Fifth Gear | `FifthGear.us@UK` | `xumo.tv` | `100#99951207` |
| Fil Am TV (KSMV-LD3) Los Angeles, CA | `KSMVLD313.us@SD` | `tvtv.us` | `78829` |
| FilmRise Action | `FilmRiseAction.us@SD` | `plex.tv` | `66ea0504c24d95b51b7cd189` |
| FilmRise Anime | `FilmRiseAnime.us@SD` | `plex.tv` | `6449369eb3ff17382cae5819` |
| FilmRise Classic TV | `FilmRiseClassicTV.us@SD` | `plex.tv` | `66ea07049502c5778b828d3f` |
| FilmRise Free Movies | `FilmRiseFreeMovies.us@SD` | `plex.tv` | `66ea085d9502c5778b828d41` |
| FilmRise Mysteries | `FilmRiseMysteries.us@SD` | `plex.tv` | `6933306bac5b3f9f53442372` |
| FilmRise Sci-Fi | `FilmRiseSciFi.us@SD` | `plex.tv` | `6449369eb3ff17382cae580d` |
| FilmRise True Crime | `FilmRiseTrueCrime.us@SD` | `plex.tv` | `646e489b58898bf3be94b325` |
| FilmRise Western | `FilmRiseWestern.us@SD` | `plex.tv` | `6449369eb3ff17382cae57fd` |
| Flicks of Fury | `FlicksofFury.us@SD` | `pluto.tv` | `58e55b14ad8e9c364d55f717` |
| Flix | `Flix.us@East` | `tvguide.com` | `9233000217` |
| Flix West | `Flix.us@West` | `tvtv.us` | `16575` |
| FNX (K48MN-D2) Boulder, CO | `K48MND2.us@SD` | `tvtv.us` | `12650` |
| FNX (KEET4) Eureka, CA | `KEETDT4.us@SD` | `tvtv.us` | `82461` |
| FNX (KPJK-TV5) San Mateo, CA | `KPJK605.us@SD` | `tvtv.us` | `109637` |
| FNX (KVCR-DT2) San Bernardino, CA | `KVCRDT242.us@SD` | `tvtv.us` | `59972` |
| FNX (WMBQ-CD) New York, NY | `WMBQCD471.us@HD` | `tvtv.us` | `76311` |
| FNX (WNDT-CD) New York, NY | `WNDTCD211.us@HD` | `tvtv.us` | `82818` |
| Folk TV | `FolkTV.us@SD` | `tvtv.us` | `33640` |
| Food Network USA HD - Eastern Feed | `FoodNetwork.us@East` | `tvpassport.com` | `food-network-usa-hd--eastern-feed/3438` |
| Food Network USA HD - Pacific Feed | `FoodNetwork.us@West` | `tvpassport.com` | `food-network-usa-hd--pacific-feed/11581` |
| Forensic Files | `ForensicFiles.us@SD` | `pluto.tv` | `5bb1af6a268cae539bcedb0a` |
| Forever Kids | `ForeverKids.us@SD` | `pluto.tv` | `56171fafada51f8004c4b40f` |
| FOX - Eastern | `Fox.us@East` | `tvpassport.com` | `fox--eastern/1229` |
| FOX - Pacific | `Fox.us@West` | `tvpassport.com` | `fox--pacific/4409` |
| FOX (K06IQ) Newberry Springs, CA | `K06IQD111.us@HD` | `tvpassport.com` | `fox-k06iq-newberry-springs-ca/13346` |
| FOX (K13AV-DT3) Denver, CO | `K13AVD3.us@SD` | `tvpassport.com` | `fox-k13av-dt3-denver-co/17836` |
| FOX (K14JZ-D3) Denver, CO | `K14JZD103.us@SD` | `tvpassport.com` | `fox-k14jz-d3-denver-co/12638` |
| FOX (K18LH) Lewiston, ID | `K18LHD281.us@HD` | `tvpassport.com` | `fox-k18lh-lewiston-id/7254` |
| FOX (K28CW) Flagstaff, AZ | `K28CWD451.us@HD` | `tvpassport.com` | `fox-k28cw-flagstaff-az/15559` |
| FOX (K28CW) Flagstaff, AZ | `K28CWD454.us@SD` | `tvtv.us` | `15559` |
| FOX (K31IQ-D3) Sterling, CO | `K31IQD3.us@SD` | `tvpassport.com` | `fox-k31iq-d3-sterling-co/12644` |
| FOX (K33KJ-D) Crested Butte, CO | `K33KJD311.us@SD` | `tvpassport.com` | `fox-k33kj-d-crested-butte-co/19994` |
| FOX (K38KL-D) Ellensburg, WA | `K38KLD1.us@SD` | `tvpassport.com` | `fox-k38kl-d-ellensburg-wa/15124` |
| FOX (K39FC-D) East Flagstaff, AZ | `K39FCD1.us@SD` | `tvpassport.com` | `fox-k39fc-d-east-flagstaff-az/15557` |
| FOX (K44JP) Cottage Grove, OR | `K44JPD1.us@SD` | `tvpassport.com` | `fox-k44jp-cottage-grove-or/18282` |
| FOX (K47AE-D) Inyokern, CA | `K47AED1.us@SD` | `tvpassport.com` | `fox-k47ae-d-inyokern-ca/13347` |
| FOX (K48GI-D) Flagstaff, AZ | `K48GID1.us@SD` | `tvpassport.com` | `fox-k48gi-d-flagstaff-az/15558` |
| FOX (KAAS-LP) Garden City, KS | `KAASLP171.us@HD` | `tvpassport.com` | `fox-kaas-lp-garden-city-ks/28104` |
| FOX (KAAS-TV) Salina, KS HD | `KAASTV171.us@HD` | `tvpassport.com` | `fox-kaas-tv-salina-ks-hd/8170` |
| FOX (KABB) San Antonio, TX HD | `KABB291.us@HD` | `tvpassport.com` | `fox-kabb-san-antonio-tx-hd/9767` |
| FOX (KADN) Lafayette, LA HD | `KADNTV151.us@HD` | `tvpassport.com` | `fox-kadn-lafayette-la-hd/8059` |
| FOX (KAII) Wailuku, HI | `KAIITV71.us@HD` | `tvpassport.com` | `fox-kaii-wailuku-hi/5014` |
| FOX (KARD) Monroe, LA HD | `KARD141.us@HD` | `tvpassport.com` | `fox-kard-monroe-la-hd/7899` |
| FOX (KAYU) Spokane, WA HD | `KAYUTV281.us@HD` | `tvpassport.com` | `fox-kayu-spokane-wa-hd/3910` |
| FOX (KBAK-DT2) Bakersfield, CA | `KBAKTV582.us@HD` | `tvpassport.com` | `fox-kbak-dt2-bakersfield-ca/17408` |
| FOX (KBFX) Bakersfield, CA HD | `KBFXCD581.us@HD` | `tvpassport.com` | `fox-kbfx-bakersfield-ca-hd/7564` |
| FOX (KBIM-TV2) Albuquerque, NM | `KBIMTV102.us@HD` | `tvpassport.com` | `fox-kbim-tv2-albuquerque-nm/31015` |
| FOX (KBRR) Thief River Falls, ND | `KBRR101.us@HD` | `tvpassport.com` | `fox-kbrr-thief-river-falls-nd/4292` |
| FOX (KBSI) Cape Girardeau, MO HD | `KBSI231.us@HD` | `tvpassport.com` | `fox-kbsi-cape-girardeau-mo-hd/6153` |
| Fox (KBVK-LP) Spencer, IA | `KBVKLP1.us@SD` | `tvpassport.com` | `fox-kbvk-lp-spencer-ia/28920` |
| FOX (KBVU) Eureka, CA HD | `KBVU281.us@HD` | `tvpassport.com` | `fox-kbvu-eureka-ca-hd/7008` |
| FOX (KBWU-LD) Richland, Etc.,, WA | `KBWULD111.us@HD` | `tvpassport.com` | `fox-kbwu-ld-richland-etc-wa/25486` |
| FOX (KCBA) Salinas, CA | `KCBA351.us@HD` | `tvtv.us` | `42820` |
| FOX (KCIT) Amarillo, TX HD | `KCIT141.us@HD` | `tvpassport.com` | `fox-kcit-amarillo-tx-hd/17133` |
| FOX (KCOY-DT2) Santa Maria, CA | `KCOYTV122.us@HD` | `tvpassport.com` | `fox-kcoy-dt2-santa-maria-ca/14629` |
| FOX (KCPQ-DT1) Seattle WA | `KCPQ131.us@HD` | `tvtv.us` | `21254` |
| FOX (KCVU) Chico, CA HD | `KCVU201.us@HD` | `tvpassport.com` | `fox-kcvu-chico-ca-hd/9010` |
| FOX (KCYU) Tri-Cities, WA HD | `KCYULD411.us@HD` | `tvpassport.com` | `fox-kcyu-tri-cities-wa-hd/7986` |
| FOX (KDFW) Dallas, TX HD | `KDFW41.us@HD` | `tvpassport.com` | `fox-kdfw-dallas-tx-hd/5412` |
| FOX (KDFX) Palm Springs, CA HD | `KDFXCD391.us@HD` | `tvpassport.com` | `fox-kdfx-palm-springs-ca-hd/4935` |
| FOX (KDSM) Des Moines, IA HD | `KDSMTV81.us@HD` | `tvpassport.com` | `fox-kdsm-des-moines-ia-hd/6400` |
| FOX (KDVR) Denver, CO HD | `KDVR311.us@HD` | `tvpassport.com` | `fox-kdvr-denver-co-hd/6401` |
| FOX (KECY) Yuma, AZ HD | `KECYTV91.us@HD` | `tvpassport.com` | `fox-kecy-yuma-az-hd/6403` |
| FOX (KESQ-DT13) Palm Springs, CA | `KESQDT13.us@SD` | `tvpassport.com` | `fox-kesq-dt13-palm-springs-ca/18435` |
| FOX (KEVN) Rapid City, SD HD | `KEVNLD71.us@HD` | `tvpassport.com` | `fox-kevn-rapid-city-sd-hd/6672` |
| FOX (KEYC-DT2) Mankato, MN HD | `KEYCTV122.us@HD` | `tvpassport.com` | `fox-keyc-dt2-mankato-mn-hd/19344` |
| FOX (KFCT) Fort Collins, CO HD | `KFCT221.us@HD` | `tvpassport.com` | `fox-kfct-fort-collins-co-hd/7556` |
| FOX (KFFX) Yakima, WA HD | `KFFXTV111.us@HD` | `tvpassport.com` | `fox-kffx-yakima-wa-hd/7973` |
| FOX (KFJX) Pittsburg, KS HD | `KFJX141.us@HD` | `tvpassport.com` | `fox-kfjx-pittsburg-ks-hd/8138` |
| FOX (KFNB) Casper, WY HD | `KFNB201.us@HD` | `tvpassport.com` | `fox-kfnb-casper-wy-hd/9917` |
| FOX (KFNE) Riverton, WY HD | `KFNE101.us@HD` | `tvpassport.com` | `fox-kfne-riverton-wy-hd/7558` |
| FOX (KFNR) Rawlins, WY HD | `KFNR111.us@HD` | `tvpassport.com` | `fox-kfnr-rawlins-wy-hd/7557` |
| FOX (KFOX) El Paso, TX HD | `KFOXTV91.us@HD` | `tvpassport.com` | `fox-kfox-el-paso-tx-hd/13535` |
| FOX (KFQX) Grand Junction, CO | `KFQX41.us@HD` | `tvpassport.com` | `fox-kfqx-grand-junction-co/1986` |
| FOX (KFTA) Fayetteville, AR HD | `KFTATV341.us@HD` | `tvpassport.com` | `fox-kfta-fayetteville-ar-hd/6407` |
| FOX (KFXK) Longview, TX HD | `KFXKTV511.us@HD` | `tvpassport.com` | `fox-kfxk-longview-tx-hd/7277` |
| FOX (KFXL-LD) Lufkin, TX | `KFXLLD301.us@HD` | `tvpassport.com` | `fox-kfxl-ld-lufkin-tx/11639` |
| FOX (KFXL) Lincoln, NE HD | `KFXLTV511.us@HD` | `tvpassport.com` | `fox-kfxl-lincoln-ne-hd/7273` |
| FOX (KHAW) Hilo, HI | `KHAWTV111.us@HD` | `tvpassport.com` | `fox-khaw-hilo-hi/5013` |
| FOX (KHGI-TV2) Lincoln, NE HD | `KHGITV132.us@HD` | `tvpassport.com` | `fox-khgi-tv2-lincoln-ne-hd/18602` |
| FOX (KHMT) Hardin, MT HD | `KHMT41.us@HD` | `tvpassport.com` | `fox-khmt-hardin-mt-hd/7276` |
| FOX (KHON) Honolulu, HI | `KHONTV21.us@HD` | `tvpassport.com` | `fox-khon-honolulu-hi/2649` |
| FOX (KIDY) San Angelo, TX HD | `KIDY61.us@HD` | `tvpassport.com` | `fox-kidy-san-angelo-tx-hd/17157` |
| FOX (KIDZ) Abilene, TX | `KIDZLD1.us@SD` | `tvpassport.com` | `fox-kidz-abilene-tx/18678` |
| FOX (KIIT) North Platte, NE HD | `KIITCD111.us@HD` | `tvpassport.com` | `fox-kiit-north-platte-ne-hd/10251` |
| FOX (KJNB-LD) Jonesboro, AR HD | `KJNBLD1.us@SD` | `tvpassport.com` | `fox-kjnb-ld-jonesboro-ar-hd/20008` |
| Fox (KJNE-LP) Jonesboro, AR | `KJNELP1.us@SD` | `tvpassport.com` | `fox-kjne-lp-jonesboro-ar/29845` |
| FOX (KJRR) Jamestown, ND HD | `KJRR71.us@HD` | `tvpassport.com` | `fox-kjrr-jamestown-nd-hd/8542` |
| FOX (KJTL) Wichita Falls, TX HD | `KJTL181.us@HD` | `tvpassport.com` | `fox-kjtl-wichita-falls-tx-hd/7481` |
| FOX (KJTV) Lubbock, TX HD | `KJTVTV341.us@HD` | `tvpassport.com` | `fox-kjtv-lubbock-tx-hd/6147` |
| FOX (KJUD-DT3) Juneau, AK | `KJUD83.us@HD` | `tvpassport.com` | `fox-kjud-dt3-juneau-ak/13235` |
| FOX (KKFX) Santa Barbara, CA HD | `KKFXCD241.us@HD` | `tvpassport.com` | `fox-kkfx-santa-barbara-ca-hd/8098` |
| FOX (KKRP-LD) St. George, UT | `KKRPLD131.us@HD` | `tvpassport.com` | `fox-kkrp-ld-st-george-ut/30225` |
| FOX (KLJB) Davenport, IA HD | `KLJB261.us@HD` | `tvpassport.com` | `fox-kljb-davenport-ia-hd/4490` |
| FOX (KLRT) Little Rock, AR HD | `KLRTTV421.us@HD` | `tvpassport.com` | `fox-klrt-little-rock-ar-hd/9285` |
| FOX (KLSR) Eugene, OR HD | `KLSRTV341.us@HD` | `tvpassport.com` | `fox-klsr-eugene-or-hd/19102` |
| FOX (KLWY) Cheyenne, WY HD | `KLWY271.us@HD` | `tvpassport.com` | `fox-klwy-cheyenne-wy-hd/7547` |
| FOX (KMIZ-DT4) Columbia, MO | `KMIZ174.us@HD` | `tvpassport.com` | `fox-kmiz-dt4-columbia-mo/18643` |
| FOX (KMJT) Ogden, KS | `KMJTLP1.us@SD` | `tvpassport.com` | `fox-kmjt-ogden-ks/8160` |
| FOX (KMPH-CD) Fresno, CA | `KMPHCD171.us@SD` | `tvpassport.com` | `fox-kmph-cd-fresno-ca/13395` |
| FOX (KMPH) Fresno, CA HD | `KMPHTV261.us@HD` | `tvpassport.com` | `fox-kmph-fresno-ca-hd/9360` |
| FOX (KMSB) Tucson, AZ HD | `KMSB111.us@HD` | `tvpassport.com` | `fox-kmsb-tucson-az-hd/7637` |
| FOX (KMSP) Minneapolis, MN HD | `KMSPDT1.us@SD` | `tvpassport.com` | `fox-kmsp-minneapolis-mn-hd/4776` |
| FOX (KMSS) Shreveport, LA HD | `KMSSTV451.us@HD` | `tvpassport.com` | `fox-kmss-shreveport-la-hd/7887` |
| FOX (KMVT3) Twin Falls, ID | `KMVT113.us@SD` | `tvpassport.com` | `fox-kmvt-dt3-twin-falls-id/18616` |
| FOX (KMVU) Medford, OR HD | `KMVUDT261.us@HD` | `tvpassport.com` | `fox-kmvu-medford-or-hd/7966` |
| FOX (KNIN) Boise, ID HD | `KNINTV91.us@HD` | `tvpassport.com` | `fox-knin-boise-id-hd/6286` |
| FOX (KNOP-TV2) North Platte, NE | `KNOPTV22.us@HD` | `tvpassport.com` | `fox-knop-dt2-north-platte-ne/18587` |
| FOX (KNPN) St. Joseph, MO HD | `KNPNLD1.us@SD` | `tvpassport.com` | `fox-knpn-st-joseph-mo-hd/17190` |
| FOX (KNRR) Pembina, ND | `KNRR121.us@HD` | `tvpassport.com` | `fox-knrr-pembina-nd/4293` |
| FOX (KOAM-DT2) Joplin, MO | `KOAMTV72.us@HD` | `tvpassport.com` | `fox-koam-dt2-joplin-mo/18572` |
| Fox (KOCW) Hoisington, KS | `KOCW171.us@HD` | `tvpassport.com` | `fox-kocw-hoisington-ks/29019` |
| FOX (KOKH) Oklahoma City, OK HD | `KOKHTV251.us@HD` | `tvpassport.com` | `fox-kokh-oklahoma-city-ok-hd/8199` |
| FOX (KPEJ) Midland, TX HD | `KPEJTV241.us@HD` | `tvpassport.com` | `fox-kpej-midland-tx-hd/6159` |
| FOX (KPSP-DT9) Palm Springs, CA | `KPSPCD9.us@SD` | `tvpassport.com` | `fox-kpsp-dt9-palm-springs-ca/18519` |
| FOX (KPTH) Sioux City, IA HD | `KPTH441.us@HD` | `tvpassport.com` | `fox-kpth-sioux-city-ia-hd/4650` |
| FOX (KPTM) Omaha, NE HD | `KPTM421.us@HD` | `tvpassport.com` | `fox-kptm-omaha-ne-hd/4741` |
| Fox (KPTP-LD) Norfolk, NE | `KPTPLD441.us@HD` | `tvpassport.com` | `fox-kptp-ld-norfolk-ne/27221` |
| FOX (KPTV) Portland, OR HD | `KPTV491.us@HD` | `tvpassport.com` | `fox-kptv-portland-or-hd/3731` |
| FOX (KQDS) Duluth, MN HD | `KQDSTV211.us@HD` | `tvpassport.com` | `fox-kqds-duluth-mn-hd/6744` |
| FOX (KQFX) Columbia, MO HD | `KQFXLD221.us@HD` | `tvpassport.com` | `fox-kqfx-columbia-mo-hd/8012` |
| FOX (KRBK) Osage Beach, MO HD | `KRBK491.us@HD` | `tvpassport.com` | `fox-krbk-osage-beach-mo-hd/10111` |
| FOX (KREZ-TV2) Albuquerque, NM | `KREZTV62.us@HD` | `tvpassport.com` | `fox-krez-tv2-albuquerque-nm/31014` |
| FOX (KRIV) Houston, TX HD | `KRIV261.us@HD` | `tvpassport.com` | `fox-kriv-houston-tx-hd/6745` |
| FOX (KRQE-DT2) Albuqerque, NM | `KRQE132.us@HD` | `tvpassport.com` | `fox-krqe-dt2-albuqerque-nm/19480` |
| FOX (KRXI) Reno, NV HD | `KRXITV211.us@HD` | `tvpassport.com` | `fox-krxi-reno-nv-hd/6233` |
| FOX (KSAS-LP) Dodge City, KS | `KSASLP171.us@HD` | `tvpassport.com` | `fox-ksas-lp-dodge-city-ks/30774` |
| FOX (KSAS-TV) Wichita, KS HD | `KSASTV361.us@SD` | `tvpassport.com` | `fox-ksas-tv-wichita-ks-hd/6746` |
| FOX (KSAZ) Phoenix, AZ HD | `KSAZTV101.us@HD` | `tvpassport.com` | `fox-ksaz-phoenix-az-hd/6331` |
| FOX (KSNT-DT2) Topeka, KS HD | `KSNT272.us@HD` | `tvpassport.com` | `fox-ksnt-dt2-topeka-ks-hd/17276` |
| FOX (KSTU) Salt Lake City, UT HD | `KSTU131.us@HD` | `tvpassport.com` | `fox-kstu-salt-lake-city-ut-hd/4465` |
| FOX (KSVT) Twin Falls, ID HD | `KSVTLD1.us@SD` | `tvpassport.com` | `fox-ksvt-twin-falls-id-hd/17282` |
| FOX (KSWB) San Diego, CA HD | `KSWBTV691.us@HD` | `tvpassport.com` | `fox-kswb-san-diego-ca-hd/6749` |
| FOX (KTBC) Austin, TX HD | `KTBC71.us@HD` | `tvpassport.com` | `fox-ktbc-austin-tx-hd/4827` |
| FOX (KTBY) Anchorage, AK HD | `KTBY41.us@HD` | `tvpassport.com` | `fox-ktby-anchorage-ak-hd/9446` |
| FOX (KTMF-DT2) Missoula, MT | `KTMF232.us@HD` | `tvtv.us` | `64586` |
| FOX (KTMF-LD2) Kalispell, MT | `KTMFLD422.us@HD` | `tvpassport.com` | `fox-ktmf-ld2-kalispell-mt/31186` |
| FOX (KTMJ) Topeka, KS HD | `KTMJCD431.us@HD` | `tvpassport.com` | `fox-ktmj-topeka-ks-hd/8147` |
| FOX (KTTV) Los Angeles, CA HD | `KTTV111.us@HD` | `tvpassport.com` | `fox-kttv-los-angeles-ca-hd/4556` |
| FOX (KTVE-DT2) Monroe, LA | `KTVE102.us@HD` | `tvpassport.com` | `fox-ktve-dt2-monroe-la/11878` |
| FOX (KTVI) St. Louis, MO HD | `KTVI21.us@HD` | `tvpassport.com` | `fox-ktvi-st-louis-mo-hd/6611` |
| FOX (KTVU) San Francisco, CA HD | `KTVU41.us@HD` | `tvpassport.com` | `fox-ktvu-san-francisco-ca-hd/6612` |
| FOX (KTVZ-DT3) Bend, OR | `KTVZ213.us@SD` | `tvpassport.com` | `fox-ktvz-dt3-bend-or/13159` |
| FOX (KTXL) Sacramento, CA HD | `KTXL401.us@HD` | `tvpassport.com` | `fox-ktxl-sacramento-ca-hd/6272` |
| FOX (KVCT) Victoria, TX HD | `KVCT191.us@HD` | `tvpassport.com` | `fox-kvct-victoria-tx-hd/6614` |
| FOX (KVHP) Lake Charles, LA HD | `KVHP291.us@HD` | `tvpassport.com` | `fox-kvhp-lake-charles-la-hd/6615` |
| FOX (KVRR) Fargo, ND HD | `KVRR151.us@HD` | `tvpassport.com` | `fox-kvrr-fargo-nd-hd/7516` |
| FOX (KVVU) Las Vegas, NV HD | `KVVUTV51.us@HD` | `tvpassport.com` | `fox-kvvu-las-vegas-nv-hd/6616` |
| FOX (KWKT) Waco, TX HD | `KWKTTV441.us@HD` | `tvpassport.com` | `fox-kwkt-waco-tx-hd/6274` |
| Fox (KWVC-LD) Malaga, Ect, WA | `KWVCLD1.us@SD` | `tvpassport.com` | `fox-kwvc-ld-malaga-ect-wa/26224` |
| Fox (KWYB-LD2) Bozeman, MT | `KWYBLD282.us@HD` | `tvpassport.com` | `fox-kwyb-ld2-bozeman-mt/31185` |
| FOX (KXFX) Brownsville, TX | `KXFXCD671.us@HD` | `tvpassport.com` | `fox-kxfx-brownsville-tx/5389` |
| FOX (KXLT) Rochester, MN HD | `KXLTTV471.us@HD` | `tvpassport.com` | `fox-kxlt-rochester-mn-hd/6617` |
| FOX (KXND-LD) Minot, ND HD | `KXNDLD1.us@SD` | `tvpassport.com` | `fox-kxnd-ld-minot-nd-hd/8314` |
| FOX (KXOF) Laredo, TX HD | `KXOFCD311.us@HD` | `tvpassport.com` | `fox-kxof-laredo-tx-hd/6618` |
| FOX (KXPI-DT2) Pocatello, ID | `KXPILD32.us@HD` | `tvpassport.com` | `fox-kxpi-dt2-pocatello-id/18312` |
| FOX (KXPI) HD Pocatello, ID | `KXPILD31.us@SD` | `tvpassport.com` | `fox-kxpi-hd-pocatello-id/8603` |
| FOX (KXRM) Colorado Springs, CO HD | `KXRMTV211.us@HD` | `tvpassport.com` | `fox-kxrm-colorado-springs-co-hd/7994` |
| FOX (KXVA) Abilene, TX HD | `KXVA151.us@HD` | `tvpassport.com` | `fox-kxva-abilene-tx-hd/17138` |
| FOX (KYLE-DT2) Bryan, TX HD | `KYLETV282.us@HD` | `tvpassport.com` | `fox-kyle-dt2-bryan-tx-hd/16824` |
| FOX (KYOU) Ottumwa, IA HD | `KYOUTV151.us@HD` | `tvpassport.com` | `fox-kyou-ottumwa-ia-hd/18819` |
| FOX (KZJO-DT2) Seattle, WA | `KZJO222.us@HD` | `tvpassport.com` | `fox-kzjo-dt2-seattle-wa/11753` |
| FOX (W24DB-D) Clarks Summit, PA | `W24DBD241.us@HD` | `tvpassport.com` | `fox-w24db-d-clarks-summit-pa/20360` |
| FOX (WABG-DT2) Greenville, MS HD | `WABGTV62.us@HD` | `tvpassport.com` | `fox-wabg-dt2-greenville-ms-hd/18820` |
| FOX (WACH) Columbia, SC HD | `WACH571.us@HD` | `tvpassport.com` | `fox-wach-columbia-sc-hd/4766` |
| FOX (WAGA) Atlanta, GA HD | `WAGATV51.us@HD` | `tvpassport.com` | `fox-waga-atlanta-ga-hd/6275` |
| FOX (WAHU) Charlottesville, VA HD | `WAHUCD1.us@SD` | `tvpassport.com` | `fox-wahu-charlottesville-va-hd/19180` |
| FOX (WALA) Mobile, AL HD | `WALATV101.us@HD` | `tvpassport.com` | `fox-wala-mobile-al-hd/6276` |
| FOX (WATM2) Altoona, PA | `WATMTV232.us@HD` | `tvtv.us` | `58804` |
| FOX (WBFF) Baltimore, MD HD | `WBFF451.us@HD` | `tvpassport.com` | `fox-wbff-baltimore-md-hd/8646` |
| FOX (WBKO-DT2) Bowling Green, KY HD | `WBKO132.us@HD` | `tvpassport.com` | `fox-wbko-dt2-bowling-green-ky-hd/5003` |
| FOX (WBRC) Birmingham, AL HD | `WBRC61.us@HD` | `tvpassport.com` | `fox-wbrc-birmingham-al-hd/7575` |
| FOX (WCCU) Champaign, IL HD | `WCCU31.us@HD` | `tvpassport.com` | `fox-wccu-champaign-il-hd/15143` |
| FOX (WCOV) Montgomery, AL HD | `WCOVTV201.us@HD` | `tvpassport.com` | `fox-wcov-montgomery-al-hd/6573` |
| FOX (WCTV2) Tallahassee, FL | `WTWCTV402.us@HD` | `tvtv.us` | `50901` |
| FOX (WDAF) Kansas City, MO HD | `WDAFTV41.us@HD` | `tvpassport.com` | `fox-wdaf-kansas-city-mo-hd/4848` |
| FOX (WDBD) Jackson, MS HD | `WDBD401.us@HD` | `tvpassport.com` | `fox-wdbd-jackson-ms-hd/6574` |
| FOX (WDFX) Dothan, AL HD | `WDFXTV341.us@HD` | `tvpassport.com` | `fox-wdfx-dothan-al-hd/6575` |
| FOX (WDKY) Lexington, KY HD | `WDKYTV561.us@HD` | `tvpassport.com` | `fox-wdky-lexington-ky-hd/6576` |
| FOX (WDRB) Louisville, KY HD | `WDRB411.us@HD` | `tvpassport.com` | `fox-wdrb-louisville-ky-hd/6577` |
| FOX (WEMT) Tri-Cities, TN/VA HD | `WEMT391.us@HD` | `tvpassport.com` | `fox-wemt-tri-cities-tnva-hd/6579` |
| FOX (WEUX) Eau Claire, WI HD | `WEUX481.us@HD` | `tvpassport.com` | `fox-weux-eau-claire-wi-hd/19933` |
| FOX (WFFF) Burlington, VT HD | `WFFFTV441.us@HD` | `tvpassport.com` | `fox-wfff-burlington-vt-hd/4528` |
| FOX (WFFT) Fort Wayne, IN HD | `WFFTTV551.us@HD` | `tvpassport.com` | `fox-wfft-fort-wayne-in-hd/6581` |
| FOX (WFLD) Chicago, IL HD | `WFLD501.us@HD` | `tvpassport.com` | `fox-wfld-chicago-il-hd/8583` |
| FOX (WFLX) West Palm Beach, FL HD | `WFLX291.us@HD` | `tvpassport.com` | `fox-wflx-west-palm-beach-fl-hd/8257` |
| FOX (WFOX) Jacksonville, FL HD | `WFOXTV301.us@HD` | `tvpassport.com` | `fox-wfox-jacksonville-fl-hd/16343` |
| FOX (WFQX) Traverse City/Cadillac, MI HD | `WFQXTV321.us@HD` | `tvpassport.com` | `fox-wfqx-traverse-citycadillac-mi-hd/7060` |
| FOX (WFTC) Minneapolis, MN | `WFTC91.us@HD` | `tvpassport.com` | `fox-wftc-minneapolis-mn/13608` |
| FOX (WFTX) Cape Coral, FL HD | `WFTXTV361.us@HD` | `tvpassport.com` | `fox-wftx-cape-coral-fl-hd/4815` |
| FOX (WFUP) Vanderbilt/ Gaylord, MI | `WFUP451.us@HD` | `tvpassport.com` | `fox-wfup-vanderbilt-gaylord-mi/1259` |
| FOX (WFVX) Bangor, ME HD | `WFVXLD71.us@HD` | `tvpassport.com` | `fox-wfvx-bangor-me-hd/7058` |
| FOX (WFXB) Lumberton, NC HD | `WFXB431.us@HD` | `tvpassport.com` | `fox-wfxb-lumberton-nc-hd/7059` |
| FOX (WFXG) Augusta, GA HD | `WFXG541.us@HD` | `tvpassport.com` | `fox-wfxg-augusta-ga-hd/6684` |
| FOX (WFXI) Morehead, NC HD | `WFXIDT1.us@SD` | `tvpassport.com` | `fox-wfxi-morehead-nc-hd/5646` |
| FOX (WFXL) Albany, GA HD | `WFXL311.us@HD` | `tvpassport.com` | `fox-wfxl-albany-ga-hd/6371` |
| FOX (WFXP) Erie, PA HD | `WFXP661.us@HD` | `tvpassport.com` | `fox-wfxp-erie-pa-hd/6372` |
| FOX (WFXR) Roanoke, VA HD | `WFXR271.us@HD` | `tvpassport.com` | `fox-wfxr-roanoke-va-hd/3738` |
| FOX (WFXT) Boston, MA | `WFXT251.us@HD` | `tvpassport.com` | `fox-wfxt-boston-ma/338` |
| FOX (WFXV) Utica, NY HD | `WFXV331.us@HD` | `tvpassport.com` | `fox-wfxv-utica-ny-hd/6374` |
| FOX (WGBC) Meridian, MS HD | `WGBC301.us@HD` | `tvpassport.com` | `fox-wgbc-meridian-ms-hd/6375` |
| FOX (WGGB-DT2) Springfield, MA HD | `WGGBTV402.us@HD` | `tvpassport.com` | `fox-wggb-dt2-springfield-ma-hd/7731` |
| FOX (WGHP) Greensboro, NC HD | `WGHP81.us@HD` | `tvpassport.com` | `fox-wghp-greensboro-nc-hd/4717` |
| FOX (WGMB) Baton Rouge, LA HD | `WGMBTV441.us@HD` | `tvpassport.com` | `fox-wgmb-baton-rouge-la-hd/8068` |
| FOX (WGXA) Macon, GA HD | `WGXA241.us@HD` | `tvpassport.com` | `fox-wgxa-macon-ga-hd/8124` |
| FOX (WHBQ) Memphis, TN HD | `WHBQTV131.us@HD` | `tvpassport.com` | `fox-whbq-memphis-tn-hd/7872` |
| FOX (WHNS) Greenville, SC HD | `WHNS211.us@HD` | `tvpassport.com` | `fox-whns-greenville-sc-hd/7192` |
| FOX (WHSV-DT2) Harrisonburg, VA HD | `WHSVTV32.us@HD` | `tvpassport.com` | `fox-whsv-dt2-harrisonburg-va-hd/19190` |
| FOX (WICZ) Binghamton, NY HD | `WICZTV401.us@HD` | `tvpassport.com` | `fox-wicz-binghamton-ny-hd/4744` |
| FOX (WITI) Milwaukee, WI HD | `WITI61.us@HD` | `tvpassport.com` | `fox-witi-milwaukee-wi-hd/6853` |
| FOX (WJBK) Detroit, MI DV | `WJBK21.us@HD` | `tvpassport.com` | `fox-wjbk-detroit-mi-dv/3951` |
| FOX (WJKT) Jackson, TN HD | `WJKT161.us@HD` | `tvpassport.com` | `fox-wjkt-jackson-tn-hd/18828` |
| FOX (WJW) Cleveland, OH HD | `WJWDT1.us@SD` | `tvpassport.com` | `fox-wjw-cleveland-oh-hd/3679` |
| FOX (WJZY) Charlotte, NC HD | `WJZY551.us@HD` | `tvpassport.com` | `fox-wjzy-charlotte-nc-hd/4709` |
| FOX (WLAX) La Crosse, WI HD | `WLAX251.us@HD` | `tvpassport.com` | `fox-wlax-la-crosse-wi-hd/8004` |
| FOX (WLUC-DT2) Marquette, MI | `WLUCTV62.us@HD` | `tvtv.us` | `49212` |
| FOX (WLUK) Green Bay, WI HD | `WLUKTV141.us@HD` | `tvpassport.com` | `fox-wluk-green-bay-wi-hd/7494` |
| FOX (WMSN) Madison, WI HD | `WMSNTV471.us@HD` | `tvpassport.com` | `fox-wmsn-madison-wi-hd/9099` |
| FOX (WNAC) E. Providence, RI HD | `WNACTV641.us@HD` | `tvpassport.com` | `fox-wnac-e-providence-ri-hd/7759` |
| FOX (WNTZ) Alexandria, LA | `WNTZTV481.us@HD` | `tvpassport.com` | `fox-wntz-alexandria-la/2457` |
| FOX (WNYF) Massena, NY HD | `WNYFCD281.us@HD` | `tvpassport.com` | `fox-wnyf-massena-ny-hd/5326` |
| FOX (WNYW) New York, NY HD | `WNYW51.us@HD` | `tvpassport.com` | `fox-wnyw-new-york-ny-hd/4557` |
| FOX (WOFL) Orlando, FL HD | `WOFL651.us@HD` | `tvpassport.com` | `fox-wofl-orlando-fl-hd/7577` |
| FOX (WOGX) Gainesville, FL HD | `WOGX511.us@HD` | `tvpassport.com` | `fox-wogx-gainesville-fl-hd/8112` |
| FOX (WOLF) Hazleton, PA HD | `WOLFTV561.us@HD` | `tvpassport.com` | `fox-wolf-hazleton-pa-hd/7531` |
| FOX (WOVA) Parkersburg, WV HD | `WOVALD1.us@SD` | `tvpassport.com` | `fox-wova-parkersburg-wv-hd/17110` |
| FOX (WPFO) Portland, ME HD | `WPFO81.us@HD` | `tvpassport.com` | `fox-wpfo-portland-me-hd/3596` |
| FOX (WPGH) Pittsburgh, PA HD | `WPGHTV531.us@HD` | `tvpassport.com` | `fox-wpgh-pittsburgh-pa-hd/6716` |
| FOX (WPGX) Panama City, FL HD | `WPGX281.us@HD` | `tvpassport.com` | `fox-wpgx-panama-city-fl-hd/6715` |
| Fox (WPMC-CD) Mappsville, VA | `WPMCCD361.us@SD` | `tvpassport.com` | `fox-wpmc-cd-mappsville-va/27345` |
| FOX (WPMT) Harrisburg, PA HD | `WPMT431.us@HD` | `tvpassport.com` | `fox-wpmt-harrisburg-pa-hd/6717` |
| FOX (WQMY-DT2) Williamsport, PA | `WQMY532.us@HD` | `tvpassport.com` | `fox-wqmy-dt2-williamsport-pa/17655` |
| FOX (WQRF) Rockford, IL HD | `WQRFTV391.us@HD` | `tvpassport.com` | `fox-wqrf-rockford-il-hd/19137` |
| FOX (WRAZ) Raleigh-Durham, NC HD | `WRAZ541.us@SD` | `tvpassport.com` | `fox-wraz-raleigh-durham-nc-hd/4823` |
| FOX (WRLH) Richmond, VA HD | `WRLHTV351.us@HD` | `tvpassport.com` | `fox-wrlh-richmond-va-hd/8195` |
| FOX (WRSP) Springfield, IL HD | `WRSPTV551.us@HD` | `tvpassport.com` | `fox-wrsp-springfield-il-hd/4587` |
| FOX (WSBT-DT2) South Bend, IN HD | `WSBTTV222.us@HD` | `tvpassport.com` | `fox-wsbt-dt2-south-bend-in-hd/20014` |
| FOX (WSFX) Wilmington, NC HD | `WSFXTV261.us@HD` | `tvpassport.com` | `fox-wsfx-wilmington-nc-hd/4799` |
| FOX (WSMH) Flint, MI HD | `WSMH661.us@HD` | `tvpassport.com` | `fox-wsmh-flint-mi-hd/9278` |
| FOX (WSVF) Harrisonburg, VA | `WSVFCD431.us@HD` | `tvpassport.com` | `fox-wsvf-harrisonburg-va/11646` |
| FOX (WSVN) Miami, FL HD | `WSVN71.us@HD` | `tvpassport.com` | `fox-wsvn-miami-fl-hd/7510` |
| FOX (WSYM) Lansing, MI HD | `WSYMTV471.us@HD` | `tvpassport.com` | `fox-wsym-lansing-mi-hd/9279` |
| FOX (WSYT) Syracuse, NY HD | `WSYT681.us@HD` | `tvpassport.com` | `fox-wsyt-syracuse-ny-hd/4802` |
| FOX (WTAT) Charleston, SC HD | `WTATTV41.us@HD` | `tvpassport.com` | `fox-wtat-charleston-sc-hd/7375` |
| FOX (WTGS) Savannah, GA HD | `WTGS281.us@HD` | `tvpassport.com` | `fox-wtgs-savannah-ga-hd/7373` |
| FOX (WTHI-DT2) Terre Haute, IN HD | `WTHITV102.us@HD` | `tvpassport.com` | `fox-wthi-dt2-terre-haute-in-hd/9713` |
| FOX (WTIC) Hartford, CT HD | `WTICTV611.us@HD` | `tvpassport.com` | `fox-wtic-hartford-ct-hd/7374` |
| FOX (WTNZ) Knoxville, TN HD | `WTNZ431.us@HD` | `tvpassport.com` | `fox-wtnz-knoxville-tn-hd/6734` |
| FOX (WTOV-DT2) Steubenville, OH HD | `WTOVTV92.us@HD` | `tvpassport.com` | `fox-wtov-dt2-steubenville-oh-hd/17115` |
| FOX (WTTG) District of Columbia HD | `WTTG51.us@HD` | `tvpassport.com` | `fox-wttg-district-of-columbia-hd/3740` |
| FOX (WTVC-DT2) Chattanooga, TN HD | `WTVC92.us@HD` | `tvpassport.com` | `fox-wtvc-dt2-chattanooga-tn-hd/6578` |
| FOX (WTVT) Tampa Bay, FL HD | `WTVT131.us@HD` | `tvpassport.com` | `fox-wtvt-tampa-bay-fl-hd/6736` |
| FOX (WTXF) Philadelphia, PA HD | `WTXFTV291.us@HD` | `tvpassport.com` | `fox-wtxf-philadelphia-pa-hd/6738` |
| FOX (WUHF) Rochester, NY HD | `WUHF81.us@HD` | `tvpassport.com` | `fox-wuhf-rochester-ny-hd/6499` |
| FOX (WUPW) Toledo, OH HD | `WUPW361.us@HD` | `tvpassport.com` | `fox-wupw-toledo-oh-hd/4759` |
| FOX (WUTV) Buffalo, NY HD | `WUTV491.us@HD` | `tvpassport.com` | `fox-wutv-buffalo-ny-hd/3584` |
| FOX (WVBT) Hampton Roads, VA HD | `WVBT431.us@HD` | `tvpassport.com` | `fox-wvbt-hampton-roads-va-hd/7215` |
| FOX (WVFX) Clarksburg, WV HD | `WVFX101.us@HD` | `tvpassport.com` | `fox-wvfx-clarksburg-wv-hd/7216` |
| FOX (WVNS-DT2) Bluefield, WV HD | `WVNSTV592.us@HD` | `tvpassport.com` | `fox-wvns-dt2-bluefield-wv-hd/7217` |
| FOX (WVUE) New Orleans, LA HD | `WVUEDT81.us@HD` | `tvpassport.com` | `fox-wvue-new-orleans-la-hd/7218` |
| FOX (WWCW-DT2) Lynchburg, VA | `WWCW242.us@SD` | `tvpassport.com` | `fox-wwcw-dt2-lynchburg-va/5051` |
| FOX (WWNY-TV2) Watertown, NY | `WWNYTV72.us@HD` | `tvpassport.com` | `fox-wwny-dt2-watertown-ny/5052` |
| FOX (WXIN) Indianapolis, IN HD | `WXIN591.us@HD` | `tvpassport.com` | `fox-wxin-indianapolis-in-hd/7679` |
| FOX (WXIX) Cincinnati, OH HD | `WXIXTV191.us@HD` | `tvpassport.com` | `fox-wxix-cincinnati-oh-hd/3671` |
| FOX (WXMI) Grand Rapids, MI HD | `WXMI171.us@HD` | `tvpassport.com` | `fox-wxmi-grand-rapids-mi-hd/9338` |
| FOX (WXTX) Columbus, GA HD | `WXTX541.us@HD` | `tvpassport.com` | `fox-wxtx-columbus-ga-hd/6497` |
| FOX (WXXA) Albany, NY HD | `WXXATV231.us@HD` | `tvpassport.com` | `fox-wxxa-albany-ny-hd/3705` |
| FOX (WXXV) Gulfport, MS HD | `WXXVTV251.us@HD` | `tvpassport.com` | `fox-wxxv-gulfport-ms-hd/6498` |
| FOX (WYDC) Corning, NY HD | `WYDC481.us@HD` | `tvpassport.com` | `fox-wydc-corning-ny-hd/7150` |
| FOX (WYDO) Greenville, NC HD | `WYDO141.us@HD` | `tvpassport.com` | `fox-wydo-greenville-nc-hd/7151` |
| FOX (WYFX) Youngstown, OH HD | `WYFXLD621.us@HD` | `tvpassport.com` | `fox-wyfx-youngstown-oh-hd/7152` |
| FOX (WYZZ) Bloomington, IL HD | `WYZZTV431.us@HD` | `tvpassport.com` | `fox-wyzz-bloomington-il-hd/4598` |
| FOX (WZAW) Wausau, WI HD | `WZAWLD331.us@HD` | `tvpassport.com` | `fox-wzaw-wausau-wi-hd/6373` |
| FOX (WZTV) Nashville, TN HD | `WZTV171.us@HD` | `tvpassport.com` | `fox-wztv-nashville-tn-hd/6727` |
| Fox Business HD | `FoxBusinessNetwork.us@SD` | `tvpassport.com` | `fox-business-hd/5600` |
| Fox Deportes HD | `FoxDeportes.us@SD` | `tvpassport.com` | `fox-deportes-hd/10502` |
| Fox News HD | `FoxNewsChannel.us@SD` | `tvpassport.com` | `fox-news-hd/6207` |
| FOX Soccer Plus HD | `FoxSoccerPlus.us@SD` | `tvpassport.com` | `fox-soccer-plus-hd/11551` |
| FOX SOUL | `FoxSoul.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA300032J7` |
| FOX Sports 1 | `FoxSports1.us@HD` | `tvguide.com` | `9233008440` |
| FOX Sports 2 | `FoxSports2.us@HD` | `tvguide.com` | `9200009884` |
| Fox Sports 2 HD | `FoxSports2LatinAmerica.us@South` | `tvpassport.com` | `fox-sports-2-hd/10263` |
| Fox Sports Racing | `FoxSportsRacing.us@SD` | `tvpassport.com` | `fox-sports-racing/192` |
| Fox Weather | `FoxWeather.us@SD` | `tvpassport.com` | `fox-weather/37620` |
| FOX Weather OTA (WNYW-DT3) New York, NY | `WNYW53.us@SD` | `tvtv.us` | `81334` |
| France 24 (WLVT-DT3) Bethlehem, PA | `WLVTTV693.us@SD` | `tvtv.us` | `45792` |
| Free Speech TV | `FreeSpeechTV.us@SD` | `tvtv.us` | `16220` |
| Freeform HD - East Feed | `Freeform.us@East` | `tvpassport.com` | `freeform-hd--east-feed/6110` |
| Freeform HD - Pacific Feed | `Freeform.us@West` | `tvpassport.com` | `freeform-hd--pacific-feed/13510` |
| Frightflix | `FrightFlix.us@SD` | `distro.tv` | `42164` |
| Fubo Sports Network | `FuboSportsNetwork.us@SD` | `plex.tv` | `5fc705f68aba71002d8b7b37` |
| Fun Roads (WACP-DT7) Atlantic City, NJ | `WACP47.us@SD` | `tvtv.us` | `106014` |
| Funny AF | `FunnyAF.us@SD` | `pluto.tv` | `580e87ff497c73ba2f321dd3` |
| FUSE TV HD - Eastern | `Fuse.us@East` | `tvpassport.com` | `fuse-tv-hd--eastern/6221` |
| FUSE TV HD - Pacific | `Fuse.us@West` | `tvpassport.com` | `fuse-tv-hd--pacific/17062` |
| Fusion | `Fusion.us@SD` | `tvtv.us` | `83173` |
| FX Movie Channel HD | `FXMovieChannel.us@SD` | `tvpassport.com` | `fx-movie-channel-hd/8463` |
| FX Networks East Coast HD | `FX.us@East` | `tvpassport.com` | `fx-networks-east-coast-hd/6111` |
| FX Networks West Coast | `FX.us@West` | `tvpassport.com` | `fx-networks-west-coast/1449` |
| FXX USA HD - Eastern | `FXX.us@East` | `tvpassport.com` | `fxx-usa-hd--eastern/7506` |
| FXX USA HD - Pacific | `FXX.us@West` | `tvpassport.com` | `fxx-usa-hd--pacific/19081` |
| FYI USA HD - Eastern | `FYI.us@East` | `tvpassport.com` | `fyi-usa-hd--eastern/6211` |
| FYI USA HD - Pacific | `FYI.us@West` | `tvpassport.com` | `fyi-usa-hd--pacific/19083` |
| Galavisión Este | `Galavision.us@East` | `tvtv.us` | `10222` |
| Galavisión Oeste | `Galavision.us@West` | `tvtv.us` | `18350` |
| Galxy TV | `GalxyTV.us@SD` | `plex.tv` | `621672e42c2627c068e73ad8` |
| Game Show Central | `GameShowCentral.us@SD` | `tvtv.us` | `116474` |
| Game Show Network | `GameShowNetwork.us@East` | `tvguide.com` | `9200019858` |
| Game Show Network West | `GameShowNetwork.us@West` | `tvtv.us` | `44382` |
| Garfield and Friends | `GarfieldandFriends.us@US` | `pluto.tv` | `60faf9ddfcc1f200070a5932` |
| Geit (WTXL3) Tallahassee, FL | `WTXLTV273.us@SD` | `tvtv.us` | `74751` |
| Gem Shopping Network | `GemShoppingNetwork.us@SD` | `tvtv.us` | `26643` |
| Get.Factual | `Getfactual.us@UK` | `plex.tv` | `6699937717c9985deeb74e39` |
| GetTV (KBTF-CD2) Bakersfield, CA | `KBTFCD312.us@SD` | `tvtv.us` | `86445` |
| GetTV (KDFW-DT4) Dallas, TX | `KDFW44.us@SD` | `tvtv.us` | `115738` |
| GetTV (KDTV-CD3) San Francisco, CA | `KDTVCD283.us@SD` | `tvtv.us` | `111735` |
| GetTV (KDTV-DT3) San Francisco, CA | `KDTVDT263.us@SD` | `tvtv.us` | `86438` |
| GetTV (KFPH-CD3) Phoenix, AZ | `KFPHCD3.us@SD` | `tvtv.us` | `16726` |
| GetTV (KFTR-DT2) Ontario, CA | `KFTRDT462.us@SD` | `tvtv.us` | `67461` |
| GetTV (KFTV-DT2) Hanford, CA | `KFTVDT212.us@SD` | `tvtv.us` | `33817` |
| GetTV (KSDK-DT2) St Louis MO | `KSDK52.us@SD` | `tvtv.us` | `47735` |
| GetTV (KTFK-DT3) Sacramento, CA | `KTFKDT643.us@SD` | `tvtv.us` | `86443` |
| GetTV (KYMB-LD3) Monterey, CA | `KYMBLD3.us@SD` | `tvtv.us` | `70849` |
| GetTV (W34EY-D3) Huntsville, AL | `W34EYD383.us@SD` | `tvtv.us` | `36308` |
| getTV (WFUT-DT3) New York, NY | `WFUTDT683.us@SD` | `tvtv.us` | `85948` |
| GetTV (WGBO-DT3) Chicago, IL | `WGBODT663.us@SD` | `tvtv.us` | `90168` |
| GetTV (WISH-DT2) Indianapolis, IN | `WISHTV82.us@SD` | `tvtv.us` | `25526` |
| GetTV (WUOA-LD4) Birmingham, AL | `WUOALD464.us@SD` | `tvtv.us` | `31752` |
| Ghost Hunters | `GhostHunters.us@UK` | `pluto.tv` | `64e561a4354251000823a0e0` |
| GLORY Kickboxing | `GloryKickboxing.us@UK` | `plex.tv` | `63f914bffe2c3d32e1a7929f` |
| GLORY Kickboxing | `GloryKickboxing.us@US` | `xumo.tv` | `100#99991278` |
| Go Wild | `GoWild.us@SD` | `plex.tv` | `6615360a8423b8d7e61a099b` |
| God TV (KKPM-DT2) Sacramento, CA | `KKPMCD282.us@SD` | `tvtv.us` | `74895` |
| Gol TV USA HD | `GolTVUSA.us@SD` | `tvpassport.com` | `gol-tv-usa-hd/12608` |
| Golazo Network | `CBSSportsGolazoNetwork.us@SD` | `pluto.tv` | `63a0e33a45264d000850ed7e` |
| Golf Channel USA HD | `GolfChannel.us@SD` | `tvpassport.com` | `golf-channel-usa-hd/6039` |
| Gordon Ramsay's Hell's Kitchen | `GordonRamsaysHellsKitchen.us@SD` | `pluto.tv` | `5b4e99f4423e067bd6df6903` |
| Gospel Broadcasting (K26GS-DT8) Harrison, AR | `K26GSD8.us@SD` | `tvtv.us` | `18229` |
| GoTraveler | `GoTraveler.us@SD` | `plex.tv` | `60a53634126de9002e694bc2` |
| GoUSA TV | `GoUSATV.us@SD` | `plex.tv` | `60a9d105d162b9002d05a60c` |
| Gravitas Movies | `GravitasMovies.us@SD` | `plex.tv` | `5efe1de7e0b3f5003f5d9f8e` |
| Great | `GetTV.us@SD` | `tvpassport.com` | `gettv/11258` |
| Great American Family | `GreatAmericanFamily.us@SD` | `tvguide.com` | `9200009636` |
| Grit (KASW-DT2) Arizona PX | `KASWDT2.us@SD` | `tvtv.us` | `97506` |
| Grit (WDPN-DT2) Philadelphia, PA | `WDPNTV22.us@SD` | `tvtv.us` | `76927` |
| Grit (WEWS-DT2) Cleveland, OH | `WEWSTV52.us@SD` | `tvtv.us` | `72901` |
| Grit (WGBO-DT5) Chicago, IL | `WGBODT665.us@SD` | `tvtv.us` | `106735` |
| Grit (WGCL-DT3) Atanta, GA | `WGCLDT3.us@SD` | `tvtv.us` | `46099` |
| Grit (WHPX-DT4) Hartford, CT | `WHPXTV264.us@SD` | `tvtv.us` | `57495` |
| Grit (WJLP-DT3) New York, NY | `WJLP333.us@SD` | `tvtv.us` | `99162` |
| Grit (WKBW4) Buffalo, NY | `WKBWTV74.us@SD` | `tvtv.us` | `104784` |
| Grit (WMAR-DT2) Washington D.C. | `WMARTV542.us@SD` | `tvtv.us` | `43979` |
| Grit (WPCW-DT3) Pittsburgh, PA | `WPCWDT3.us@SD` | `tvtv.us` | `104896` |
| Grit (WPPX-DT3) Philadelphia, PA | `WPPXTV613.us@SD` | `tvtv.us` | `43975` |
| Grit (WRTV-DT2) Indianapolis, IN | `WRTV62.us@SD` | `tvtv.us` | `48923` |
| Grit (WTAJ4) Altoona, PA | `WTAJTV104.us@SD` | `tvtv.us` | `106291` |
| Grit Network | `Grit.us@SD` | `tvpassport.com` | `grit-network/14377` |
| Grit TV (K25OM-D5) Prescott, AZ | `K25OMD5.us@SD` | `tvtv.us` | `35558` |
| Grit TV (KCOY-TV3) Santa Maria, CA | `KCOYTV123.us@HD` | `tvtv.us` | `108065` |
| Grit TV (KFMB-TV3) San Diego, CA | `KFMBTV83.us@SD` | `tvtv.us` | `100093` |
| Grit TV (KFSF-DT4) San Francisco, CA | `KFSFDT664.us@SD` | `tvtv.us` | `90120` |
| Grit TV (KFTR-DT4) Ontario, CA | `KFTRDT464.us@SD` | `tvtv.us` | `90182` |
| Grit TV (KFTV-DT4) Hanford, CA | `KFTVDT214.us@SD` | `tvtv.us` | `90186` |
| Grit TV (KHIZ-LD3) Los Angeles, CA | `KHIZLD393.us@SD` | `tvtv.us` | `99757` |
| Grit TV (KMMD-CD4) Salinas, CA | `KMMDCD394.us@SD` | `tvtv.us` | `107334` |
| Grit TV (KPSE-LD2) Palm Springs, CA | `KPSELD502.us@SD` | `tvtv.us` | `108913` |
| Grit TV (KTFK-DT4) Stockton, CA | `KTFKDT644.us@SD` | `tvtv.us` | `90196` |
| Grit TV (WGCE-CD2) Rochester, NY | `WGCECD62.us@SD` | `tvtv.us` | `35766` |
| Grit TV (WNCN3) Goldsboro, NC | `WNCN173.us@SD` | `tvpassport.com` | `grit-tv-wncn3-goldsboro-nc/19495` |
| Grit Xtra | `GritXtra.us@SD` | `plex.tv` | `62b45f15b4508e0eedacdf25` |
| Gunsmoke | `Gunsmoke.us@SD` | `pluto.tv` | `60f75771dfc72a00071fd0e0` |
| H&I (K25OM-D3) Prescott, AZ | `K25OMD3.us@SD` | `tvtv.us` | `35555` |
| H&I (KAIL3) Fresno, CA | `KAIL73.us@SD` | `tvtv.us` | `77607` |
| H&I (KCOP-TV4) Los Angeles, CA | `KCOPDT4.us@SD` | `tvtv.us` | `97062` |
| H&I (KQCA2) Sacramento, CA | `KQCADT2.us@SD` | `tvtv.us` | `63012` |
| H&I (KRET) Palm Springs, CA | `KRETCD451.us@SD` | `tvtv.us` | `82507` |
| H&I (KTLN-TV) San Rafael, CA | `KTLNTV681.us@HD` | `tvtv.us` | `36140` |
| H&I (KVME) Bishop, CA | `KVMETV201.us@SD` | `tvtv.us` | `62830` |
| H&I (WTVU-CD3) Syracuse, NY | `WTVUCD223.us@SD` | `tvtv.us` | `35645` |
| Hallmark Channel HD - Eastern | `HallmarkChannel.us@East` | `tvpassport.com` | `hallmark-channel-hd--eastern/6213` |
| Hallmark Channel HD - Pacific | `HallmarkChannel.us@West` | `tvpassport.com` | `hallmark-channel-hd--pacific/17058` |
| Hallmark Drama | `HallmarkDrama.us@SD` | `tvtv.us` | `105723` |
| Hallmark Family | `HallmarkFamily.us@SD` | `tvguide.com` | `9233010939` |
| Hallmark Movies & More | `HallmarkMoviesMore.us@SD` | `pluto.tv` | `628e685ba3811100070551a8` |
| Hallmark Mystery | `HallmarkMoviesMysteries.us@East` | `tvguide.com` | `9233013351` |
| Hallmark Mystery - Pacific | `HallmarkMoviesMysteries.us@West` | `tvpassport.com` | `hallmark-movies--mysteries--pacific/11414` |
| Happy Days | `HappyDays.us@SD` | `pluto.tv` | `5f7794162a4559000781fc12` |
| Hawaii TV (KITV-DT3) Honolulu, HI | `KITV43.us@HD` | `tvtv.us` | `109140` |
| HBCUGO SPORTS | `HBCUGOSports.us@SD` | `plex.tv` | `631a212e82b744e0309aa56e` |
| HBO Comedy HD - East | `HBOComedy.us@East` | `tvpassport.com` | `hbo-comedy-hd--east/7105` |
| HBO Comedy HD - Pacific | `HBOComedy.us@West` | `tvpassport.com` | `hbo-comedy-hd--pacific/8469` |
| HBO Drama (HBO 3) - Eastern HD | `HBOSignature.us@East` | `tvpassport.com` | `hbo-signature-hbo-3--eastern-hd/7099` |
| HBO Drama (HBO 3) - Pacific HD | `HBOSignature.us@West` | `tvpassport.com` | `hbo-signature-hbo-3--pacific-hd/7711` |
| HBO Family - Eastern Feed HD | `HBOFamily.us@East` | `tvpassport.com` | `hbo-family--eastern-feed-hd/7104` |
| HBO Family Latinoamérica | `HBOFamilyLatinAmerica.us@SD` | `tvtv.us` | `32933` |
| HBO HD - Eastern Feed | `HBO.us@East` | `tvpassport.com` | `hbo-hd--eastern-feed/627` |
| HBO HD - Pacific Feed | `HBO.us@West` | `tvpassport.com` | `hbo-hd--pacific-feed/2629` |
| HBO Hits - Eastern Feed HD | `HBO2.us@East` | `tvpassport.com` | `hbo-2--eastern-feed-hd/6313` |
| HBO Hits - Pacific Feed HD | `HBO2.us@West` | `tvpassport.com` | `hbo-2--pacific-feed-hd/6314` |
| HBO Zone HD - East | `HBOZone.us@East` | `tvpassport.com` | `hbo-zone-hd--east/7102` |
| HBO Zone HD - Pacific | `HBOZone.us@West` | `tvpassport.com` | `hbo-zone-hd--pacific/8470` |
| HDNet Movies | `HDNetMovies.us@SD` | `tvpassport.com` | `hdnet-movies/4267` |
| Health (WPBT-DT3) Miami, FL | `WPBT23.us@SD` | `tvtv.us` | `32577` |
| Heartland | `Heartland.us@Eastern` | `xumo.tv` | `150#99951494` |
| Heartland | `Heartland.us@Web` | `pluto.tv` | `61f07513227feb00073ee6bc` |
| Heartland (KQRO-LD9) Morgan Hill, CA | `KQROLD9.us@SD` | `tvtv.us` | `115372` |
| Heartland (KVBC-LP6) Reedley, CA | `KVBCLP6.us@SD` | `tvtv.us` | `88412` |
| Heartland (KWHY-TV2) Los Angeles, CA | `KWHY632.us@SD` | `tvtv.us` | `64575` |
| Heartland (KZGN) Los Angeles, CA | `KZGNLD211.us@HD` | `tvtv.us` | `89346` |
| Heartland (WACP-DT3) Atlantic City, NJ | `WACP43.us@SD` | `tvtv.us` | `98301` |
| Heartland (WBON-LD3) Richmond, KY | `WBONLD93.us@SD` | `tvtv.us` | `84235` |
| Heartland Network (WJLP-DT6) New York, NY | `WJLP336.us@SD` | `tvtv.us` | `115891` |
| Hell's Kitchen | `HellsKitchen.us@UK` | `xumo.tv` | `250#99991681` |
| Heores and Icons (KDFW-DT3) Dallas, TX | `KDFW43.us@SD` | `tvtv.us` | `113579` |
| Heroes and Icons (KNLC-DT3) St Louis, MO | `KNLC243.us@SD` | `tvtv.us` | `106839` |
| Heroes and Icons (KPRC-DT3) Houston TX | `KPRCTV23.us@SD` | `tvtv.us` | `40466` |
| Heroes and Icons (KSAZ-DT2) Arizona, PX | `KSAZTV103.us@SD` | `tvtv.us` | `44656` |
| Heroes and Icons (KSTP-DT7) St Paul, MN | `KSTPTV57.us@SD` | `tvtv.us` | `46095` |
| Heroes and Icons (WCIU-DT4) Chicago, IL | `WCIUTV264.us@SD` | `tvtv.us` | `61780` |
| Heroes and Icons (WDCA-DT3) Washington D.C. | `WDCA53.us@SD` | `tvtv.us` | `81318` |
| Heroes and Icons (WDPN-DT4) Philadelphia, PA | `WDPNTV24.us@SD` | `tvtv.us` | `91607` |
| Heroes and Icons (WHCT-LD2) Hartford, CT | `WHCTLD352.us@SD` | `tvtv.us` | `116361` |
| Heroes and Icons (WPCW-DT2) Pittsburgh, PA | `WPCWDT2.us@SD` | `tvtv.us` | `100908` |
| Heroes and Icons (WPLG-DT3) Miami, FL | `WPLG103.us@SD` | `tvtv.us` | `80549` |
| Heroes and Icons (WSBK-DT2) Boston, MA | `WSBKTV382.us@SD` | `tvtv.us` | `101068` |
| HerSphere by Lionsgate | `HerSphere.us@SD` | `plex.tv` | `644c4bc17472b186783f35a0` |
| HGTV USA HD - Eastern | `HGTV.us@East` | `tvpassport.com` | `hgtv-usa-hd--eastern/3690` |
| HGTV USA HD - Pacific Feed | `HGTV.us@West` | `tvpassport.com` | `hgtv-usa-hd--pacific-feed/16232` |
| Hi-YAH! | `HiYAH.us@SD` | `plex.tv` | `5f64c4ef35f612003f6ffe30` |
| Highway to Heaven | `HighwaytoHeaven.us@UK` | `plex.tv` | `64f1177d79fd56092f9061bf` |
| Hillsong (KTBN-TV2) Santa Ana, CA | `KTBNTV402.us@HD` | `tvtv.us` | `53385` |
| Hillsong (WKOI-DT2) Richmond, IN | `WKOITV262.us@SD` | `tvtv.us` | `50100` |
| Hillsong (WSFG-LD4) Berry, AL | `W31FMD514.us@SD` | `tvtv.us` | `17557` |
| Hillsong Channel | `HillsongChannel.us@SD` | `tvtv.us` | `29328` |
| History | `History.us@East` | `tvguide.com` | `9233008002` |
| History en Español | `HistoryenEspanol.us@SD` | `tvtv.us` | `105678` |
| History West | `History.us@West` | `tvtv.us` | `88545` |
| HITN | `HITN.us@SD` | `tvtv.us` | `17142` |
| HLN HD | `HLN.us@SD` | `tvpassport.com` | `hln-hd/6994` |
| Hmong TV USA (KJEO-DT6) Fresno, CA | `KJEOLD326.us@HD` | `tvtv.us` | `71852` |
| Hollywire | `HollyWire.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBC2400015DO` |
| Home.Made.Nation | `HomeMadeNation.us@SD` | `plex.tv` | `5f74cf82ffbe690040689f47` |
| Hope Channel | `HopeChannelNorthAmerica.us@SD` | `tvpassport.com` | `hope-channel/6827` |
| HSN - Home Shopping Network | `HSN.us@East` | `tvpassport.com` | `hsn--home-shopping-network/14985` |
| HSN (K25OM-D2) Prescott, AZ | `K25OMD2.us@SD` | `tvtv.us` | `35557` |
| HSN (KAZT-CD3) Phoenix, AZ | `KAZTCD73.us@SD` | `tvtv.us` | `72529` |
| HSN (KAZT-DT3) Prescott, AZ | `KAZTTV73.us@SD` | `tvtv.us` | `72186` |
| HSN (KGMC4) Clovis, CA | `KGMCDT4.us@SD` | `tvtv.us` | `114866` |
| HSN (KGO-DT4) San Francisco, CA | `KGODT4.us@SD` | `tvtv.us` | `120855` |
| HSN (KNET) Los Angeles, CA | `KNETCD251.us@HD` | `tvtv.us` | `69575` |
| HSN (KNLA) Los Angeles, CA | `KNLACD251.us@HD` | `tvtv.us` | `67967` |
| HSN (KPXN-TV6) Los Angeles, CA | `KPXNTV306.us@SD` | `tvtv.us` | `83481` |
| HSN (WABC-DT4) New York, NY | `WABCTV74.us@SD` | `tvtv.us` | `119697` |
| HSN (WEWS-DT5) Cleveland, OH | `WEWSTV55.us@SD` | `tvtv.us` | `118455` |
| HSN (WKBW5) Buffalo, NY | `WKBWTV75.us@SD` | `tvtv.us` | `118884` |
| HSN (WTVD4) Raleigh, NC | `WTVD114.us@SD` | `tvpassport.com` | `hsn-wtvd4-raleigh-nc/36166` |
| HSN 2 | `HSN2.us@SD` | `tvpassport.com` | `hsn-2/13495` |
| HTV | `HTV.us@SD` | `tvtv.us` | `15969` |
| Hungry | `Hungry.us@SD` | `xumo.tv` | `200#99991380` |
| iCarly TV | `iCarly.us@East` | `pluto.tv` | `6450209d939a5900084dba1d` |
| IFC Films Picks | `IFCFilmsPicks.us@SD` | `plex.tv` | `5fc705eb052f6f002ef46057` |
| IFC West | `IFC.us@West` | `tvtv.us` | `61866` |
| iHeart90s | `IHeart90s.us@SD` | `xumo.tv` | `350#9995100` |
| Impact Network | `ImpactNetwork.us@SD` | `tvtv.us` | `71798` |
| Impact Television Network | `ImpactTVNetwork.us@SD` | `ontvtonight.com` | `us#69026955/impact-television-network` |
| Impossible - Quiz Show | `ImpossibleQuizShow.us@SD` | `plex.tv` | `6308fa9c0417b7074a4ad959` |
| Independent Film Channel US HD | `IFC.us@East` | `tvpassport.com` | `independent-film-channel-us-hd/6215` |
| IndiePlex East | `IndiePlex.us@East` | `tvtv.us` | `49751` |
| IndiePlex West | `IndiePlex.us@West` | `tvtv.us` | `63181` |
| Infomercials (K46LG-D2) Monterey, CA | `K46LGD2.us@SD` | `tvtv.us` | `98274` |
| Infomercials (K46LG-D4) Monterey, CA | `K46LGD4.us@SD` | `tvtv.us` | `98276` |
| Infomercials (KAHC-LD7) Sacramento, CA | `KAHCLD437.us@SD` | `tvtv.us` | `102576` |
| Infomercials (KFMS-LD) Keyes, CA | `KFMSLD471.us@SD` | `tvtv.us` | `106412` |
| Infomercials (KHIZ-LD4) Los Angeles, CA | `KHIZLD394.us@SD` | `tvtv.us` | `101974` |
| Infomercials (KMMC) San Francisco, CA | `KMMCLD521.us@HD` | `tvtv.us` | `77782` |
| Infomercials (KQRM-LP) Petaluma, CA | `KQRMLD1.us@SD` | `tvtv.us` | `114341` |
| Infomercials (KSKJ-CD3) Los Angeles, CA | `KSKJCD453.us@SD` | `tvtv.us` | `97173` |
| Infomercials (KVMD7) Twentynine Palms, CA | `KVMD577.us@SD` | `tvtv.us` | `69724` |
| Infomercials (KWMO-LD2) Hot Springs, AR | `KWMOLD342.us@SD` | `tvtv.us` | `36260` |
| Infomercials (KXLA12) Los Angeles, CA | `KXLA5712.us@SD` | `tvtv.us` | `95950` |
| Infomercials (WNMF) New York, NY | `WNMFLD221.us@SD` | `tvpassport.com` | `infomercials-wnmf-new-york-ny/17860` |
| Infomercials (WVTT-CD4) Olean, NY | `WVTTCD344.us@SD` | `tvtv.us` | `36323` |
| Ink Master | `InkMaster.us@SD` | `pluto.tv` | `60807fd5db701400078219c2` |
| INSP | `INSP.us@SD` | `tvtv.us` | `11066` |
| Investigation Discovery USA HD - Eastern | `InvestigationDiscovery.us@East` | `tvpassport.com` | `investigation-discovery-usa-hd--eastern/6997` |
| Investigation Discovery USA HD - Pacific | `InvestigationDiscovery.us@West` | `tvpassport.com` | `investigation-discovery-usa-hd--pacific/19950` |
| ION | `IONTV.us@East` | `tvguide.com` | `9233011910` |
| ION (KION-TV3) Monterey, CA | `KIONTV463.us@SD` | `tvtv.us` | `106723` |
| ION (KKPX) San Francisco, CA | `KKPXTV651.us@HD` | `tvtv.us` | `35375` |
| ION (KNSO3) Fresno, CA | `KNSO513.us@SD` | `tvtv.us` | `61749` |
| Ion (KPXD-DT1) Dallas, TX | `KPXDTV681.us@HD` | `tvtv.us` | `34833` |
| ION (KPXN) Los Angeles, CA | `KPXNTV641.us@HD` | `tvtv.us` | `49814` |
| ION (KSPX) Sacramento-Modesto, CA | `KSPXTV291.us@HD` | `tvtv.us` | `46555` |
| ION (WKOI-DT) Richmond, IN | `WKOITV431.us@SD` | `tvtv.us` | `34609` |
| ION (WPXN) New York, NY | `WPXNTV311.us@HD` | `tvpassport.com` | `ion-wpxn-new-york-ny/1778` |
| ION (WPXU) Jacksonville, NC | `WPXUTV351.us@HD` | `tvpassport.com` | `ion-wpxu-jacksonville-nc/7774` |
| ION (WRIC-DT2) Richmond, VA | `WRICTV82.us@SD` | `tvtv.us` | `71490` |
| ION (WRPX) Raleigh-Durham, NC HD | `WRPXTV621.us@HD` | `tvpassport.com` | `ion-wrpx-raleigh-durham-nc-hd/7773` |
| Ion Mystery (KTVI-DT3) St Louis, MO | `KTVI23.us@SD` | `tvtv.us` | `98169` |
| Ion Mystery (KXLN-DT3) Houston, TX | `KXLNDT453.us@SD` | `tvtv.us` | `90227` |
| ION Mystery (WFSB-DT2) Hartford, CT | `WFSB32.us@SD` | `tvtv.us` | `42901` |
| ION Mystery (WINP-DT4) Pittsburgh, PA | `WINPTV164.us@SD` | `tvtv.us` | `72117` |
| ION Mystery (WJLP-DT4) New York, NY | `WJLP334.us@SD` | `tvtv.us` | `99163` |
| ION Mystery (WNCN4) Goldsboro, NC | `WNCN174.us@SD` | `tvpassport.com` | `ion-mystery-wncn4-goldsboro-nc/33270` |
| ION Mystery (WPXN-DT3) New York, NY | `WPXNTV313.us@SD` | `tvtv.us` | `55285` |
| ION Mystery (WRAL-TV4) Raleigh, NC | `WRALTV54.us@SD` | `tvpassport.com` | `ion-mystery-wral-tv4-raleigh-nc/37397` |
| ION Mystery (WRPX-TV3) Raleigh-Durham, NC | `WRPXTV473.us@SD` | `tvpassport.com` | `ion-mystery-wrpx-tv3-raleigh-durham-nc/12059` |
| Ion Mystery (WWBT-DT4) Richmond, KY | `WWBT124.us@SD` | `tvtv.us` | `113527` |
| Ion Mystery (WXMI-DT4) Grand Rapids, MI | `WXMI174.us@SD` | `tvtv.us` | `107639` |
| ION Plus East | `IONPlus.us@East` | `tvtv.us` | `55241` |
| Ion Television (KPPX-DT1) Arizona, PX | `KPPXTV511.us@HD` | `tvtv.us` | `34834` |
| ION Television (WCTV4) Tallahassee, FL | `WCTV64.us@SD` | `tvtv.us` | `113519` |
| Ion Television (WHPX-DT1) Hartford, CT | `WHPXTV261.us@HD` | `tvtv.us` | `57562` |
| ION Television (WINP-DT1) Pittsburgh, PA | `WINPTV161.us@HD` | `tvtv.us` | `45992` |
| Ion Television (WPPX-DT1) Philadelphia, PA | `WPPXTV611.us@HD` | `tvtv.us` | `43971` |
| Iron Chef | `IronChef.us@US` | `plex.tv` | `6707cfa5da81682f2d1e6837` |
| It's Showtime at the Apollo | `ItsShowtimeattheApollo.us@SD` | `xumo.tv` | `150#99991349` |
| JBS | `JBS.us@SD` | `tvtv.us` | `74978` |
| Jersey Shore | `JerseyShore.us@SD` | `pluto.tv` | `609bfa51fbecc1000733152e` |
| Jewelry Television | `JewelryTV.us@SD` | `tvpassport.com` | `jewelry-television/3000` |
| Jewelry Television (K46LG-DT3) Monterey, CA | `K46LGD3.us@SD` | `tvtv.us` | `98275` |
| Jewelry Television (KBID-DT4) Fresno, CA | `KBIDLP4.us@SD` | `tvtv.us` | `89184` |
| Jewelry Television (KDPH-DT4) Phoenix, AZ | `KDPHLD483.us@SD` | `tvtv.us` | `18022` |
| Jewelry Television (KFLA-LD5) Los Angeles, CA | `KFLALD85.us@SD` | `tvtv.us` | `66979` |
| Jewelry Television (KVHF-LD5) Fresno, CA | `KVHFLD45.us@SD` | `tvtv.us` | `74203` |
| Jewelry Television (KVMD-DT3) Twentynine Palms, CA | `KVMD313.us@SD` | `tvtv.us` | `47200` |
| Jewelry Television (KZDN-DT4) Denver, CO | `KZDNLD264.us@SD` | `tvtv.us` | `33943` |
| Jewelry Television (WACP-DT5) Atlantic City, NJ | `WACP45.us@SD` | `tvtv.us` | `98303` |
| Jewelry Television (WNYJ-LD1) New York, NY | `WNYJLD221.us@SD` | `tvtv.us` | `114802` |
| Jewelry TV (KAAP-LD8) Santa Cruz, CA | `KAAPLD248.us@SD` | `tvtv.us` | `113391` |
| Jewelry TV (KSBS-DT5) Denver, CO | `KSBSCD5.us@SD` | `tvtv.us` | `17516` |
| Jewelry TV (WALE-LD4) Montgomery, AL | `WALELD4.us@SD` | `tvtv.us` | `31252` |
| Jewelry TV (WBXZ-LP3) Buffalo, NY | `WBXZLP3.us@SD` | `tvtv.us` | `18174` |
| Jewish Life Television | `JewishLifeTelevision.us@SD` | `tvtv.us` | `60165` |
| Johnny Carson | `JohnnyCarsonTV.us@SD` | `tvtv.us` | `115370` |
| Journy | `Journy.us@SD` | `plex.tv` | `5f5132df62fe160040f26bc2` |
| Judge Faith | `JudgeFaith.us@SD` | `plex.tv` | `5f5132da62fe160040f26b5b` |
| Judge Nosey | `JudgeNosey.us@US` | `pluto.tv` | `5e9decb953e157000752321c` |
| Just for Laughs Comedy | `JustforLaughs.us@UK` | `xumo.tv` | `150#99991176` |
| Just For Laughs Gags | `JustforLaughsGags.us@SD` | `plex.tv` | `64704954e536e0faaf10be9f` |
| K5 (KHNL-DT2) Honolulu, HI | `KHNL132.us@HD` | `tvtv.us` | `50417` |
| KACVDT | `KACVTV21.us@HD` | `i.mjh.nz` | `PBS/all#KACV` |
| KAIDDT | `KAID41.us@HD` | `i.mjh.nz` | `PBS/all#KAID` |
| KAKMDT | `KAKM71.us@HD` | `i.mjh.nz` | `PBS/all#KAKM` |
| KAMUDT | `KAMUTV121.us@HD` | `i.mjh.nz` | `PBS/all#KAMU` |
| Kartoon Channel! | `KartoonChannel.us@SD` | `pluto.tv` | `60fb040d4795a6000762fe8f` |
| KAWEDT | `KAWE91.us@HD` | `i.mjh.nz` | `PBS/all#KAWE` |
| KBDIDT | `KBDITV121.us@HD` | `i.mjh.nz` | `PBS/all#KBDI` |
| KBFD TV (KBFD-DT) Honolulu, HI | `KBFDDT321.us@HD` | `tvtv.us` | `47156` |
| KBS World (KTSF-DT3) San Francisco, CA | `KTSF263.us@SD` | `tvtv.us` | `64712` |
| KBTCDT | `KBTCTV281.us@HD` | `i.mjh.nz` | `PBS/all#KBTC` |
| KCAL Los Angeles | `KCALTV91.us@HD` | `tvpassport.com` | `kcal-los-angeles/1826` |
| KCET Los Angeles, CA | `KCET581.us@HD` | `tvpassport.com` | `kcet-los-angeles-ca/2310` |
| KCOSDT | `KCOS131.us@HD` | `i.mjh.nz` | `PBS/all#KCOS` |
| KCPTDT | `KCPT191.us@HD` | `i.mjh.nz` | `PBS/all#KCPT` |
| KCWCDT | `KCWCDT41.us@HD` | `i.mjh.nz` | `PBS/all#KCWC` |
| KDOC (KDOC) Los Angeles, CA | `KDOCTV561.us@HD` | `tvtv.us` | `43284` |
| KEDTDT | `KEDT161.us@HD` | `i.mjh.nz` | `PBS/all#KEDT` |
| KENWDT2 | `KENW32.us@HD` | `i.mjh.nz` | `PBS/all#KENWDT2` |
| KETADT | `KETATV131.us@HD` | `i.mjh.nz` | `PBS/all#KETA` |
| KETSDT | `KETS21.us@HD` | `i.mjh.nz` | `PBS/all#KETS` |
| KFMEDT | `KFME131.us@HD` | `i.mjh.nz` | `PBS/all#KFME` |
| KFTH HDTV UniMás 67 | `KFTHDT671.us@HD` | `ontvtonight.com` | `us#69025354/kfth-hdtv-unimas-67` |
| Kidoodle TV | `KidoodleTV.us@SD` | `plex.tv` | `5eea605574085f0040ddc79a` |
| KidsFlix | `KidsFlix.us@SD` | `plex.tv` | `5eea605574085f0040ddc797` |
| KIKU (KIKU) Honolulu, HI | `KIKU201.us@HD` | `tvtv.us` | `43452` |
| KINC HDTV Univision 15 | `KINC151.us@HD` | `ontvtonight.com` | `us#69033134/kinc-hdtv-univision-15` |
| KINT HDTV Univision 26 | `KINTTV261.us@HD` | `ontvtonight.com` | `us#69033135/kint-hdtv-univision-26` |
| KLDO Univision 27 | `KLDOTV271.us@HD` | `ontvtonight.com` | `us#69025384/kldo-univision-27` |
| KLRNDT | `KLRN81.us@HD` | `i.mjh.nz` | `PBS/all#KLRN` |
| KLVXDT | `KLVX101.us@HD` | `i.mjh.nz` | `PBS/all#KLVX` |
| KMOSDT | `KMOSTV61.us@HD` | `i.mjh.nz` | `PBS/all#KMOS` |
| KNIC HDTV | `KNICDT171.us@HD` | `ontvtonight.com` | `us#69034764/knic-hdtv` |
| KNMEDT | `KNMETV51.us@HD` | `i.mjh.nz` | `PBS/all#KNME` |
| KNPBDT | `KNPB51.us@HD` | `i.mjh.nz` | `PBS/all#KNPB` |
| KNVO HDTV Univision 48 | `KNVO481.us@HD` | `ontvtonight.com` | `us#69033137/knvo-hdtv-univision-48` |
| KOODDT | `KOOD91.us@HD` | `i.mjh.nz` | `PBS/all#KOOD` |
| KOPBDT | `KOPBTV101.us@HD` | `i.mjh.nz` | `PBS/all#KOPB` |
| KORO Univision 28 HDTV | `KORO281.us@HD` | `ontvtonight.com` | `us#69033138/koro-univision-28-hdtv` |
| KOZKDT | `KOZK211.us@HD` | `i.mjh.nz` | `PBS/all#KOZK` |
| KPBTDT | `KPBTTV361.us@HD` | `i.mjh.nz` | `PBS/all#KPBT` |
| KPMF-LD7 Paragould, AR | `KPMFLD267.us@SD` | `tvtv.us` | `31825` |
| KPTSDT | `KPTS81.us@HD` | `i.mjh.nz` | `PBS/all#KPTS` |
| KQSL-DT (KQSL-DT) Fort Bragg, CA | `KQSL81.us@HD` | `tvtv.us` | `43736` |
| KRCA-DT4 (KRCA-DT4) Los Angeles, CA | `KRCA74.us@SD` | `tvtv.us` | `83303` |
| KREN Univision 27 | `KRENTV271.us@HD` | `ontvtonight.com` | `us#69025128/kren-univision-27` |
| KRMADT | `KRMATV61.us@HD` | `i.mjh.nz` | `PBS/all#KRMA` |
| KRON (KRON) San Francisco, CA | `KRONTV71.us@HD` | `tvtv.us` | `19573` |
| KRWGDT | `KRWGTV221.us@HD` | `i.mjh.nz` | `PBS/all#KRWG` |
| KSCC HDTV | `KSCC381.us@HD` | `ontvtonight.com` | `us#69033935/kscc-hdtv` |
| KSCI (KSCI) Los Angeles, CA | `KSCI501.us@HD` | `tvtv.us` | `29035` |
| KSMQDT | `KSMQTV151.us@HD` | `i.mjh.nz` | `PBS/all#KSMQ` |
| KSPSDT | `KSPSTV71.us@HD` | `i.mjh.nz` | `PBS/all#KSPS` |
| KSYSDT | `KSYS81.us@HD` | `i.mjh.nz` | `PBS/all#KSYS` |
| KTFD HDTV UniMás 14 | `KTFDTV501.us@HD` | `ontvtonight.com` | `us#69025358/ktfd-hdtv-unimas-14` |
| KTFN HDTV UniMás 65 | `KTFN651.us@HD` | `ontvtonight.com` | `us#69033218/ktfn-hdtv-unimas-65` |
| KTFQ HDTV Univision | `KTFQTV411.us@HD` | `ontvtonight.com` | `us#69033136/ktfq-hdtv-univision` |
| KTLA Los Angeles, CA | `KTLA51.us@HD` | `tvpassport.com` | `ktla-los-angeles-ca/90` |
| KTSF (KTSF) Bisbane, CA | `KTSF261.us@HD` | `tvtv.us` | `31221` |
| KTVU Plus (KICU-TV) San Jose, CA | `KICUTV361.us@HD` | `tvtv.us` | `21650` |
| KTVW HDTV Univision 33 | `KTVWDT351.us@HD` | `ontvtonight.com` | `us#69025387/ktvw-hdtv-univision-33` |
| KTWUDT | `KTWU111.us@HD` | `i.mjh.nz` | `PBS/all#KTWU` |
| KUACDT | `KUACTV91.us@HD` | `i.mjh.nz` | `PBS/all#KUAC` |
| KUATDT | `KUATTV61.us@HD` | `i.mjh.nz` | `PBS/all#KUAT` |
| KUEDDT | `KUED71.us@HD` | `i.mjh.nz` | `PBS/all#KUED` |
| KUONDT | `KUONTV121.us@HD` | `i.mjh.nz` | `PBS/all#KUON` |
| KUSDDT | `KUSDTV21.us@HD` | `i.mjh.nz` | `PBS/all#KUSD` |
| KUSI (KUSI) San Diego, CA | `KUSITV691.us@HD` | `tvtv.us` | `114110` |
| KUSMDT | `KUSMTV91.us@SD` | `i.mjh.nz` | `PBS/all#KUSM` |
| KUTH HDTV Univision 32 | `KUTHDT321.us@HD` | `ontvtonight.com` | `us#69034876/kuth-hdtv-univision-32` |
| KUVE HDTV Univision 38 | `KUVEDT461.us@HD` | `ontvtonight.com` | `us#69034830/kuve-hdtv-univision-38` |
| KVSN HDTV Univision 48 | `KVSNDT481.us@HD` | `ontvtonight.com` | `us#69034099/kvsn-hdtv-univision-48` |
| KWCMDT | `KWCMTV101.us@HD` | `i.mjh.nz` | `PBS/all#KWCM` |
| KWEX HDTV Univision 41 | `KWEXDT411.us@HD` | `ontvtonight.com` | `us#69025390/kwex-hdtv-univision-41` |
| KWHY-DT3 (KWHY-DT3) Los Angeles, CA | `KWHY633.us@SD` | `tvtv.us` | `87653` |
| KWSUDT | `KWSUTV101.us@HD` | `i.mjh.nz` | `PBS/all#KWSU` |
| KXLA (KXLA) Los Angeles, CA | `KXLA571.us@HD` | `tvtv.us` | `42829` |
| KXLA-DT2 (KXLA-DT2) Los Angeles, CA | `KXLA572.us@SD` | `tvtv.us` | `42832` |
| Laff - Network HD | `Laff.us@SD` | `tvpassport.com` | `laff--network-hd/20170` |
| Laff (KGTV3) San Diego, CA | `KGTV103.us@SD` | `tvtv.us` | `92396` |
| Laff (KHIZ-LD2) Los Angeles, CA | `KHIZLD392.us@HD` | `tvtv.us` | `101396` |
| Laff (KIRO-DT3) Seattle, WA | `KIROTV73.us@SD` | `tvtv.us` | `59434` |
| Laff (KKPX-TV5) San Francisco, CA | `KKPXTV655.us@SD` | `tvtv.us` | `83533` |
| Laff (KMAX-TV2) Sacramento, CA | `KMAXTV312.us@SD` | `tvtv.us` | `105599` |
| Laff (KMMD-CD6) Salinas, CA | `KMMDCD396.us@HD` | `tvtv.us` | `107336` |
| Laff (KMMD-CD7) Salinas, CA | `KMMDCD397.us@SD` | `tvtv.us` | `112701` |
| Laff (KMOV-DT4) St Louis MO | `KMOV44.us@SD` | `tvtv.us` | `111191` |
| Laff (KNXV-DT3) Arizona, PX | `KNXVTV153.us@SD` | `tvtv.us` | `92213` |
| Laff (KPXN-TV5) Los Angeles, CA | `KPXNTV305.us@SD` | `tvtv.us` | `84433` |
| Laff (KSBY3) San Luis Obispo, CA | `KSBY63.us@SD` | `tvtv.us` | `102009` |
| Laff (KSPX-TV3) Sacramento-Modesto, CA | `KSPXDT3.us@SD` | `tvtv.us` | `46561` |
| Laff (KXTU-LD3) Colorado Springs, CO | `KXTULD573.us@SD` | `tvtv.us` | `32418` |
| Laff (WALE-LD2) Montgomery, AL | `WALELD172.us@SD` | `tvtv.us` | `31265` |
| Laff (WEWS-DT3) Cleveland, OH | `WEWSTV53.us@SD` | `tvtv.us` | `92188` |
| Laff (WFSB-DT3) Hartford, CT | `WFSB33.us@SD` | `tvtv.us` | `30323` |
| Laff (WFXT-DT3) Boston MI | `WFXT663.us@SD` | `tvtv.us` | `92241` |
| Laff (WGBO-DT2) Chicago, IL | `WGBODT662.us@SD` | `tvtv.us` | `86446` |
| Laff (WJLP-DT2) New York, NY | `WJLP332.us@SD` | `tvtv.us` | `92098` |
| Laff (WPPX-DT5) Philadelphia, PA | `WPPXTV615.us@SD` | `tvtv.us` | `82712` |
| Laff (WPXI-DT1) Pittsburgh, PA | `WPXI113.us@SD` | `tvtv.us` | `58746` |
| Laff (WPXN-DT5) New York, NY | `WPXNTV315.us@SD` | `tvtv.us` | `82708` |
| Laff (WRTV-DT3) Indianapolis, IN | `WRTV63.us@SD` | `tvtv.us` | `73364` |
| Laff (WTAJ3) Altoona, PA | `WTAJTV103.us@SD` | `tvtv.us` | `100646` |
| Laff (WXYZ-DT3) Detroit, MI | `WXYZTV73.us@SD` | `tvtv.us` | `35425` |
| LATV | `LATV.us@SD` | `plex.tv` | `6685a97b59703916799193a5` |
| LATV (KBNT-CD2) San Diego, CA | `KBNTCD172.us@SD` | `tvtv.us` | `75511` |
| LATV (KCNZ-CD) San Francisco, CA | `KCNZCD281.us@HD` | `tvtv.us` | `64878` |
| LATV (KEVC-DT3) Palm Springs, CA | `KEVCCD3.us@SD` | `tvtv.us` | `107476` |
| LATV (KFUL) Los Angeles, CA | `KFULLD231.us@HD` | `tvtv.us` | `55225` |
| LATV (KPMR-DT3) Santa Barbara, CA | `KPMR383.us@SD` | `tvtv.us` | `65905` |
| LATV (KSEE-DT3) Fresno, CA | `KSEE243.us@SD` | `tvtv.us` | `57694` |
| LATV (KSMS-DT3) Monterey, CA | `KSMSTV673.us@SD` | `tvtv.us` | `64165` |
| LATV (KTSB-DT3) Santa Barbara, CA | `KTSBCD3.us@SD` | `tvtv.us` | `99062` |
| LATV (KTVU-DT2) San Francisco, CA | `KTVU22.us@SD` | `tvtv.us` | `50439` |
| LATV (KVMD) Twentynine Palms, CA | `KVMD351.us@SD` | `tvtv.us` | `34758` |
| LATV (WUVN-DT4) Hartford, CT | `WUVNDT2.us@SD` | `tvtv.us` | `70525` |
| LATV (XHAS-DT2) San Diego, CA | `XHASDT2.us@SD` | `tvtv.us` | `74026` |
| Law & Crime Network | `LawCrime.us@SD` | `tvpassport.com` | `law--crime-network/32823` |
| Lawless | `Lawless.us@SD` | `plex.tv` | `654a6d313713a28d9f0b917f` |
| LEGO Kids TV | `LEGOKidsTV.us@SD` | `pluto.tv` | `60fb01a24795a6000762fe83` |
| Lifetime Network US - Eastern Feed HD | `Lifetime.us@East` | `tvpassport.com` | `lifetime-network-us--eastern-feed-hd/6333` |
| Lifetime Network US - Pacific Feed HD | `Lifetime.us@West` | `tvpassport.com` | `lifetime-network-us--pacific-feed-hd/8996` |
| Lifetime Real Women East | `LifetimeRealWomen.us@SD` | `tvtv.us` | `29612` |
| Link TV | `LinkTV.us@SD` | `tvtv.us` | `21450` |
| Little Stars Universe | `LittleStarsUniverse.us@SD` | `pluto.tv` | `51c75f7bb6f26ba1cd00002f` |
| LiveNow From FOX | `LiveNOWfromFOX.us@SD` | `tvtv.us` | `119219` |
| Living Faith TV | `LivingFaithTV.us@SD` | `tvtv.us` | `58595` |
| LMN | `LifetimeMovies.us@East` | `tvguide.com` | `9233009825` |
| LMN West | `LifetimeMovies.us@West` | `tvtv.us` | `19192` |
| Local Now (KDOC-DT6) Los Angeles, CA | `KDOCTV566.us@SD` | `tvtv.us` | `99692` |
| Local Now (WNWT-LD1) New York, NY | `WNWTLD371.us@SD` | `tvtv.us` | `81896` |
| Local Programming (KVHD-LD2) Los Angeles, CA | `KVHDLD2.us@SD` | `tvtv.us` | `16175` |
| Localish (KABC-TV2) Los Angeles, CA | `KABCTV72.us@SD` | `tvtv.us` | `42615` |
| Localish (KFSN-TV2) Fresno, CA | `KFSNTV302.us@HD` | `tvtv.us` | `40717` |
| Localish (KGO-DT2) San Francisco, CA | `KGODT2.us@SD` | `tvtv.us` | `30833` |
| Localish (KTRK-DT2) Houston, TX | `KTRKTV132.us@HD` | `tvtv.us` | `43140` |
| Localish (WABC-DT2) New York, NY | `WABCTV72.us@SD` | `tvtv.us` | `35230` |
| Localish (WLS-DT2) Chicago, IL | `WLSDT2.us@SD` | `tvtv.us` | `35892` |
| Localish (WPVI-DT2) Philadelphia, PA | `WPVITV62.us@HD` | `tvtv.us` | `43156` |
| Localish (WTVD-DT2) Raleigh, NC HD | `WTVD112.us@HD` | `tvpassport.com` | `localish-wtvd-dt2-raleigh-nc-hd/18858` |
| LOGO - East | `Logo.us@East` | `tvpassport.com` | `logo--east/2091` |
| LOGO - Pacific | `Logo.us@West` | `tvpassport.com` | `logo--pacific/13460` |
| Logo Pluto TV | `LogoPlutoTV.us@SD` | `pluto.tv` | `5ce5a8954311f992edbe1da2` |
| LOL! Network | `KevinHartsLOLNetwork.us@SD` | `plex.tv` | `628ea9fcffe4cec6361f5310` |
| Longhorn Network | `LonghornNetwork.us@SD` | `tvtv.us` | `76219` |
| Los Asesinatos de Midsomer | `LosAsesinatosdeMidsomer.us@Spain` | `plex.tv` | `682511d9ae4546e02a6ba4f9` |
| Loupe 4K | `Loupe4K.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBB1000002TK` |
| Love & Hip Hop | `LoveHipHop.us@SD` | `pluto.tv` | `5d51ddf0369acdb278dfb05e` |
| Love Thy Neighbor | `LoveThyNeighbor.us@SD` | `plex.tv` | `685f0e1fa7111a932d28f1a6` |
| Lucky Dog | `LuckyDog.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA3000044BJ` |
| LX (WCAU-DT3) Philadelphia, PA | `WCAU103.us@SD` | `tvtv.us` | `62804` |
| LX Network (KCSO-LD5) Sacramento, CA | `KCSOLD335.us@SD` | `tvtv.us` | `115843` |
| LX Network (KNBC-DT3) Los Angeles, CA | `KNBC43.us@SD` | `tvtv.us` | `114892` |
| LX Network (KNTV-DT5) San Francisco, CA | `KNTV115.us@SD` | `tvtv.us` | `114883` |
| LX Network (KSTS-DT5) San Francisco, CA | `KSTS485.us@SD` | `tvtv.us` | `114882` |
| MagellanTV Wildest | `MagellanTVNow.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ340000677` |
| MAGNOLIA Network | `MagnoliaNetwork.us@East` | `tvguide.com` | `9200012415` |
| Mainstreet TV (KBTV-CA6) Sacramento, CA | `KBTVCD86.us@SD` | `tvtv.us` | `87908` |
| Majestadtv (KCNZ-CD7) San Francisco, CA | `KCNZCD287.us@SD` | `tvtv.us` | `106634` |
| Mana (KSFV-CD2) Los Angeles, CA | `KSFVCD272.us@HD` | `tvtv.us` | `87005` |
| Mana Vision 3 (KJEO-DT4) Fresno, CA | `KJEOLD4.us@SD` | `tvtv.us` | `69084` |
| Market (KVBC-DT4) Reedley, CA | `KVBCLP4.us@SD` | `tvtv.us` | `88400` |
| Marquee Sports Network | `MarqueeSportsNetwork.us@SD` | `tvtv.us` | `113776` |
| MASN | `MASN.us@SD` | `tvtv.us` | `46817` |
| MASN2 | `MASN2.us@SD` | `tvtv.us` | `55433` |
| Matlock | `Matlock.us@SD` | `pluto.tv` | `60f754f98185580007eb0754` |
| Maverick Black Cinema | `MaverickBlackCinema.us@SD` | `xumo.tv` | `0#99991336` |
| MBC America | `MBCAmerica.us@SD` | `tvtv.us` | `50270` |
| MCAETv | `MCAETTV.us@SD` | `tvtv.us` | `12630` |
| MCAETv (K38JP-D3) Monterey, CA | `K38JPD3.us@SD` | `tvtv.us` | `99050` |
| McLeods Daughters | `McLeodsDaughters.us@UK` | `plex.tv` | `6515fd4f2ff655e77635c628` |
| Mega TV | `MegaTV.us@SD` | `tvtv.us` | `58698` |
| MeTV - Network HD | `MeTV.us@SD` | `tvpassport.com` | `metv--network-hd/20357` |
| MeTV (K20JL-D2) Ellensburg, WA | `K20JLD352.us@HD` | `tvpassport.com` | `metv-k20jl-d2-ellensburg-wa/15133` |
| MeTV (KAKE-DT2) Wichita, KS | `KAKE102.us@SD` | `tvpassport.com` | `metv-kake-dt2-wichita-ks/12586` |
| MeTV (KAPP2) Yakima, WA | `KAPP352.us@HD` | `tvpassport.com` | `metv-kapp-dt2-yakima-wa/3829` |
| MeTV (KAZT-CD2) Phoenix, AZ | `KAZTCD72.us@HD` | `tvpassport.com` | `metv-kazt-cd2-phoenix-az/31303` |
| MeTV (KAZT-TV2) Prescott, AZ HD | `KAZTTV72.us@HD` | `tvpassport.com` | `metv-kazt-tv2-prescott-az-hd/10086` |
| MeTV (KBCW-DT3) San Francisco, CA | `KBCWDT3.us@SD` | `tvtv.us` | `110385` |
| MeTV (KCRA-DT2) Sacramento, CA | `KCRATV582.us@SD` | `tvtv.us` | `30815` |
| MeTV (KCSO-DT2) Sacramento, CA | `KCSOLD2.us@SD` | `tvtv.us` | `72479` |
| MeTV (KDBZ-CD2) Bozeman, MT | `KDBZCD62.us@SD` | `tvpassport.com` | `metv-kdbz-cd2-bozeman-mt/31304` |
| MeTV (KDOC-DT3) Los Angeles, CA | `KDOCTV563.us@SD` | `tvtv.us` | `60864` |
| MeTV (KEGW-LD2) Fayetteville, AR | `KEGWLD2.us@SD` | `tvpassport.com` | `metv-kegw-ld2-fayetteville-ar/31312` |
| MeTV (KERO-DT3) Bakersfield, CA | `KEROTV233.us@SD` | `tvtv.us` | `76917` |
| MeTV (KETV-DT2) Omaha, NE HD | `KETV72.us@SD` | `tvpassport.com` | `metv-ketv-dt2-omaha-ne-hd/10253` |
| MeTV (KFDF-DT2) Fort Smith, AR | `KFDFCD442.us@SD` | `tvpassport.com` | `metv-kfdf-dt2-fort-smith-ar/1853` |
| MeTV (KGBD-LD2) Great Bend, KS | `KGBDLD302.us@SD` | `tvpassport.com` | `metv-kgbd-ld2-great-bend-ks/31316` |
| MeTV (KGMC-DT6) Fresno, CA | `KGMC436.us@SD` | `tvtv.us` | `116670` |
| MeTV (KGTV2) San Diego, CA | `KGTV102.us@SD` | `tvtv.us` | `40462` |
| MeTV (KHME) Rapid City, NE | `KHME231.us@HD` | `tvpassport.com` | `metv-khme-rapid-city-ne/8297` |
| MeTV (KHVO2) Hilo, HI | `KHVO42.us@HD` | `tvpassport.com` | `metv-khvo2-hilo-hi/31310` |
| MeTV (KITV-DT2) Honolulu, HI | `KITV42.us@HD` | `tvpassport.com` | `metv-kitv-dt2-honolulu-hi/9902` |
| MeTV (KJCX-LD) Helena, MT | `KJCXLD1.us@SD` | `tvpassport.com` | `metv-kjcx-ld-helena-mt/26606` |
| MeTV (KKAF-CD2) Siloam Springs, AR | `KKAFCD2.us@SD` | `tvpassport.com` | `metv-kkaf-cd2-siloam-springs-ar/31313` |
| MeTV (KLBB-LD) Lubbock, TX | `KLBBLD481.us@HD` | `tvpassport.com` | `metv-klbb-ld-lubbock-tx/30618` |
| MeTV (KLWB) Lafayette, LA HD | `KLWB501.us@HD` | `tvpassport.com` | `metv-klwb-lafayette-la-hd/10204` |
| MeTV (KMAU2) Wailuku, HI | `KMAU42.us@HD` | `tvpassport.com` | `metv-kmau2-wailuku-hi/31311` |
| MeTV (KMIR-DT2) Palm Springs, CA | `KMIRTV362.us@SD` | `tvtv.us` | `70489` |
| MeTV (KMLU) Columbia, LA | `KMLU111.us@HD` | `tvpassport.com` | `metv-kmlu-columbia-la/19154` |
| MeTV (KMNZ-LD2) Coeur D'Alene, ID | `K31QKD42.us@HD` | `tvpassport.com` | `metv-kmnz-ld2-coeur-dalene-id/31301` |
| MeTV (KMVU-DT2) Medford/Klamath Falls, OR | `KMVUDT262.us@SD` | `tvpassport.com` | `metv-kmvu-dt2-medfordklamath-falls-or/10325` |
| MeTV (KMYA-DT) Little Rock, AR HD | `KMYADT491.us@HD` | `tvpassport.com` | `metv-kmya-dt-little-rock-ar-hd/10644` |
| MeTV (KNLC-DT1) St Louis, MO | `KNLC241.us@HD` | `tvtv.us` | `54439` |
| MeTV (KRAH-CD2) Paris, AR | `KRAHCD352.us@SD` | `tvtv.us` | `31315` |
| MeTV (KRCR-DT2) Redding, CA | `KRCRTV72.us@HD` | `tvtv.us` | `34475` |
| MeTV (KRTN-TV) Durango, CO | `KRTNTV331.us@SD` | `tvpassport.com` | `metv-krtn-tv-durango-co/11783` |
| MeTV (KSTC-DT3) St Paul, MN | `KSTCTV53.us@SD` | `tvtv.us` | `73502` |
| MeTV (KTEL-CD) Albuquerque, NM | `KTELCD471.us@SD` | `tvpassport.com` | `metv-ktel-cd-albuquerque-nm/2369` |
| MeTV (KTEL-TV4) Carlsbad, NM | `KTELTV254.us@SD` | `tvpassport.com` | `metv-ktel-tv4-carlsbad-nm/31305` |
| MeTV (KTLN-DT2) Novato, CA | `KTLNTV682.us@HD` | `tvtv.us` | `84496` |
| MeTV (KTLN-TV3) Novato, CA | `KTLNTV683.us@SD` | `tvtv.us` | `84497` |
| MeTV (KUMN-LP2) Moses Lake, Etc., WA | `KUMNLP2.us@SD` | `tvpassport.com` | `metv-kumn-lp2-moses-lake-etc-wa/31302` |
| MeTV (KUPK-DT2) Garden City, KS | `KUPK132.us@SD` | `tvpassport.com` | `metv-kupk-dt2-garden-city-ks/17274` |
| MeTV (KUWB-LD2) Bloomington, UT | `K22PHD302.us@SD` | `tvpassport.com` | `metv-kuwb-ld2-bloomington-ut/31306` |
| MeTV (KVBC) Fresno, CA | `KVBCLP1.us@SD` | `tvtv.us` | `88397` |
| MeTV (KVEW-DT2) Tri-Cities, WA HD | `KVEW422.us@HD` | `tvpassport.com` | `metv-kvew-dt2-tri-cities-wa-hd/7960` |
| MeTV (KVHP-LD4) Jasper, TX | `KVHPLD4.us@SD` | `tvpassport.com` | `metv-kvhp-ld4-jasper-tx/31307` |
| MeTV (KVLY-TV3) Fargo, ND | `KVLYTV113.us@SD` | `tvpassport.com` | `metv-kvly-dt3-fargo-nd/7349` |
| MeTV (KWCE) Alexandria, LA | `KWCELP1.us@SD` | `tvpassport.com` | `metv-kwce-alexandria-la/2456` |
| MeTV (KWNL-CD2) Winslow, AR | `KWNLCD2.us@SD` | `tvpassport.com` | `metv-kwnl-cd2-winslow-ar/31314` |
| MeTV (KXMN) Spokane, WA HD | `KXMNLD1.us@SD` | `tvpassport.com` | `metv-kxmn-spokane-wa-hd/6282` |
| MeTV (KYAZ-DT1) Houston TX | `KYAZ511.us@HD` | `tvtv.us` | `43454` |
| MeTV (KYMB-LD) Monterey, CA | `KYMBLD1.us@SD` | `tvpassport.com` | `metv-kymb-ld-monterey-ca/11378` |
| MeTV (KZSD) San Diego, CA | `KZSDLP1.us@SD` | `tvtv.us` | `35950` |
| MeTV (WAPK-CA) Tri-Cities, TN/VA HD | `WAPKCD361.us@HD` | `tvpassport.com` | `metv-wapk-ca-tri-cities-tnva-hd/6284` |
| MeTV (WBAL-DT2) Baltimore, MD | `WBALTV112.us@SD` | `tvtv.us` | `48570` |
| MeTV (WBBZ-DT3) Buffalo, NY HD | `WBBZTV673.us@SD` | `tvpassport.com` | `metv-wbbz-dt3-buffalo-ny-hd/15097` |
| MeTV (WBBZ) Buffalo, NY | `WBBZTV671.us@HD` | `tvpassport.com` | `metv-wbbz-buffalo-ny/9936` |
| MeTV (WBME) Milwaukee, WI | `WBMECD491.us@HD` | `tvpassport.com` | `metv-wbme-milwaukee-wi/3172` |
| MeTV (WBND-LD2) Michiana, IN | `WBNDLD572.us@HD` | `tvpassport.com` | `metv-wbnd-ld2-michiana-in/11798` |
| MeTV (WCCU-DT2) Champaign, IL HD | `WCCUDT2.us@SD` | `tvpassport.com` | `metv-wccu-dt2-champaign-il-hd/11349` |
| MeTV (WCIU-DT3) Chicago, IL | `WCIUTV263.us@SD` | `tvtv.us` | `59687` |
| MeTV (WCIV-DT3) Charleston, SC HD | `WCIV43.us@SD` | `tvpassport.com` | `metv-wciv-dt3-charleston-sc-hd/16316` |
| MeTV (WCTV2) Tallahassee, FL | `WCTV62.us@SD` | `tvtv.us` | `46285` |
| MeTV (WCVB-DT2) Boston, MA | `WCVBTV52.us@SD` | `tvtv.us` | `35356` |
| MeTV (WDIO-DT2) Duluth, MN | `WDIODT102.us@HD` | `tvpassport.com` | `metv-wdio-dt2-duluth-mn/6037` |
| MeTV (WDPN-DT1) Philadelphia, PA | `WDPNTV21.us@HD` | `tvtv.us` | `64010` |
| MeTV (WESH-DT2) Orlando, FL | `WESHDT2.us@SD` | `tvtv.us` | `77535` |
| MeTV (WFMZ-DT3) Allentown, PA | `WFMZTV693.us@SD` | `tvtv.us` | `73877` |
| MeTV (WGUD-LD) Pascagoula, MS | `WGUDLD1.us@SD` | `tvpassport.com` | `metv-wgud-ld-pascagoula-ms/16337` |
| MeTV (WHCT-LD1) Hartford, CT | `WHCTLD351.us@HD` | `tvtv.us` | `115216` |
| MeTV (WILT-LD2) Wilmington, NC | `W33FFD242.us@SD` | `tvpassport.com` | `metv-wilt-ld2-wilmington-nc/31308` |
| MeTV (WJLP) New Jersey/New York | `WJLP371.us@SD` | `tvpassport.com` | `metv-wjlp-new-jerseynew-york/5138` |
| MeTV (WJLP) New Jersey/New York HD | `WJLP338.us@SD` | `tvpassport.com` | `metv-wjlp-new-jerseynew-york-hd/19177` |
| MeTV (WKIN-CD) Weber Cy,Va-Kpt,Tn, VA | `WKINCD361.us@HD` | `tvpassport.com` | `metv-wkin-cd-weber-cyva-kpttn-va/26391` |
| MeTV (WLLA-DT2) Grand Rapids, MI HD | `WLLA642.us@SD` | `tvpassport.com` | `metv-wlla-dt2-grand-rapids-mi-hd/16277` |
| MeTV (WLWK-CD2) Sturgeon Bay, WI | `WLWKCD222.us@SD` | `tvpassport.com` | `metv-wlwk-cd2-sturgeon-bay-wi/31309` |
| MeTV (WMBB-DT2) Panama, FL | `WMBB132.us@SD` | `tvpassport.com` | `metv-wmbb-dt2-panama-fl/8369` |
| MeTV (WMUR-DT2) Manchers, NH | `WMURTV92.us@SD` | `tvpassport.com` | `metv-wmur-dt2-manchers-nh/11273` |
| MeTV (WNYF-CD2) Watertown, NY | `WNYFCD282.us@SD` | `tvpassport.com` | `metv-wnyf-cd2-watertown-ny/19439` |
| MeTV (WOLO-DT4) Columbia, SC HD | `WOLOTV254.us@SD` | `tvpassport.com` | `metv-wolo-dt4-columbia-sc-hd/10475` |
| MeTV (WPLG-DT2) Miami, FL | `WPLG102.us@SD` | `tvtv.us` | `55971` |
| MeTV (WPXI-DT1) Pittsburgh, PA | `WPXI112.us@SD` | `tvtv.us` | `46798` |
| MeTV (WRAZ2) Raleigh-Durham, NC | `WRAZ502.us@HD` | `tvpassport.com` | `metv-wraz2-raleigh-durham-nc/9989` |
| MeTV (WSWB-DT2) Scranton, PA HD | `WSWB382.us@SD` | `tvpassport.com` | `metv-wswb-dt2-scranton-pa-hd/9299` |
| MeTV (WTHR-DT3) Indianapolis, IN HD | `WTHR133.us@HD` | `tvpassport.com` | `metv-wthr-dt3-indianapolis-in-hd/11359` |
| MeTV (WTTG-DT3) Washington D.C. | `WTTG53.us@SD` | `tvtv.us` | `102968` |
| MeTV (WUPA-DT4) Atanta, GA | `WUPA694.us@SD` | `tvtv.us` | `110189` |
| MeTV (WVTM-DT2) Birmingham, AL | `WVTMTV132.us@SD` | `tvpassport.com` | `metv-wvtm-dt2-birmingham-al/6449` |
| MeTV (WWBT-DT2) Richmond, KY | `WWBT122.us@SD` | `tvtv.us` | `30674` |
| MeTV (WYME) Gainesville, FL | `WYMECD451.us@SD` | `tvpassport.com` | `metv-wyme-gainesville-fl/11818` |
| MeTV (WZAW-LD2) Wausau, WI | `WZAWLD332.us@SD` | `tvpassport.com` | `metv-wzaw-ld2-wausau-wi/17310` |
| MeTV (WZMQ) Marquette, MI HD | `WZMQ191.us@SD` | `tvpassport.com` | `metv-wzmq-marquette-mi-hd/19910` |
| MeTV /My Network TV (WOIO-DT2) Cleveland, OH | `WOIO432.us@SD` | `tvtv.us` | `54702` |
| MeTV Plus (KEJR-LD2) Phoenix, AZ | `KEJRLD2.us@SD` | `tvtv.us` | `18044` |
| MeTV Plus (KNLC-DT7) St Louis MO | `KNLC247.us@SD` | `tvtv.us` | `121156` |
| MeTV Plus (KTLN-DT4) San Francisco, CA | `KTLNTV684.us@SD` | `tvtv.us` | `84493` |
| MeTV Plus (KYAZ-DT2) Houston TX | `KYAZ512.us@SD` | `tvtv.us` | `64146` |
| MeTV Plus (WCIU-DT5) Chicago, IL | `WCIUTV265.us@SD` | `tvtv.us` | `70376` |
| MeTV Plus (WZME-DT2) New York, NY | `WZME432.us@SD` | `tvtv.us` | `74322` |
| MeTV+ (KHTV-CD) Los Angeles, CA | `KHTVCD61.us@HD` | `tvtv.us` | `75675` |
| MGM HD (USA) | `MGMHD.us@SD` | `tvpassport.com` | `mgm-hd-usa/6107` |
| MGM+ Drive-In | `MGMPlusDriveIn.us@SD` | `tvguide.com` | `9200006851` |
| MGM+ East | `MGMPlus.us@East` | `tvtv.us` | `65669` |
| MGM+ Hits HD | `MGMPlusHits.us@East` | `tvguide.com` | `9233013634` |
| MGM+ Marquee HD | `MGMPlusMarquee.us@SD` | `tvguide.com` | `9200020594` |
| MGM+ West | `MGMPlus.us@West` | `tvtv.us` | `66073` |
| MHz Now | `MHzNow.us@SD` | `plex.tv` | `611152a48f945c002c40021a` |
| Michigan Learning Channel (WTVS-DT5) Detroit, MI | `WTVS565.us@SD` | `tvtv.us` | `117254` |
| Midnight Pulp | `MidnightPulp.us@SD` | `plex.tv` | `5ef4e1b40d9ad000423c4427` |
| Midsomer Murders | `MidsomerMurders.us@SD` | `pluto.tv` | `5cbf6a868a1bce4a3d52a5e9` |
| Milenio (KSDY) San Diego, CA | `KSDYLD501.us@HD` | `tvtv.us` | `70467` |
| Military History Channel | `MilitaryHistory.us@SD` | `tvtv.us` | `48999` |
| Mission Impossible | `MissionImpossible.us@SD` | `pluto.tv` | `5f77977bd924d80007eee60c` |
| Misterios sin resolver | `Misteriossinresolver.us@SD` | `pluto.tv` | `5f4d882d5233170007ee880e` |
| MLB | `MLB.us@SD` | `pluto.tv` | `5e66968a70f34c0007d050be` |
| MLB Extra Innings 1 | `MLBExtraInnings1.us@SD` | `tvtv.us` | `75674` |
| MLB Extra Innings 10 | `MLBExtraInnings10.us@SD` | `tvtv.us` | `60887` |
| MLB Extra Innings 2 | `MLBExtraInnings2.us@SD` | `tvtv.us` | `60878` |
| MLB Extra Innings 3 | `MLBExtraInnings3.us@SD` | `tvtv.us` | `60879` |
| MLB Extra Innings 4 | `MLBExtraInnings4.us@SD` | `tvtv.us` | `60880` |
| MLB Extra Innings 5 | `MLBExtraInnings5.us@SD` | `tvtv.us` | `60881` |
| MLB Extra Innings 6 | `MLBExtraInnings6.us@SD` | `tvtv.us` | `60882` |
| MLB Extra Innings 7 | `MLBExtraInnings7.us@SD` | `tvtv.us` | `60883` |
| MLB Extra Innings 8 | `MLBExtraInnings8.us@SD` | `tvtv.us` | `60884` |
| MLB Extra Innings 9 | `MLBExtraInnings9.us@SD` | `tvtv.us` | `60885` |
| MLB Network HD | `MLBNetwork.us@SD` | `tvpassport.com` | `mlb-network-hd/6218` |
| MLB Strike Zone | `MLBStrikeZone.us@SD` | `tvtv.us` | `80404` |
| MNT (KCOP) Los Angeles, CA | `KCOPTV51.us@HD` | `tvpassport.com` | `mnt-kcop-los-angeles-ca/1811` |
| MNT (KTVD) Denver, CO | `KTVD201.us@HD` | `tvpassport.com` | `mnt-ktvd-denver-co/1565` |
| MNT (WNYO) Buffalo, NY | `WNYOTV71.us@HD` | `tvpassport.com` | `mnt-wnyo-buffalo-ny/324` |
| MNT (WPHL) Philadelphia, PA HD | `WPHLTV651.us@HD` | `tvpassport.com` | `mnt-wphl-philadelphia-pa-hd/7168` |
| MNT (WRDC) Raleigh, NC HD | `WRDC401.us@HD` | `tvpassport.com` | `mnt-wrdc-raleigh-nc-hd/7776` |
| MNT (WWOR) New York, NY | `WWORTV91.us@HD` | `tvpassport.com` | `mnt-wwor-new-york-ny/1612` |
| Monster Jam | `MonsterJam.us@SD` | `pluto.tv` | `65c69b683ba51e00084534a3` |
| More TV Drama | `MoreTVDrama.us@SD` | `pluto.tv` | `613260e4bdb71c00070d63fa` |
| More TV Sitcoms | `MoreTVSitcoms.us@SD` | `pluto.tv` | `6132619f9ddaa50007e7dd86` |
| MoreMax | `MoreMax.us@East` | `tvguide.com` | `9233015766` |
| MoreMax West | `MoreMax.us@West` | `tvtv.us` | `16620` |
| Motor Trend Network | `MotorTrend.us@SD` | `tvguide.com` | `9233003479` |
| MotorTrend FAST TV | `FastTV.us@SD` | `pluto.tv` | `6400f731d200410008f9b339` |
| MovieMax | `MovieMax.us@East` | `tvguide.com` | `9233000532` |
| MovieMax West | `MovieMax.us@West` | `tvtv.us` | `61166` |
| MoviePlex East | `MoviePlex.us@East` | `tvtv.us` | `15295` |
| MoviePlex West | `MoviePlex.us@West` | `tvtv.us` | `17128` |
| Movies (KNLC-DT4) St Louis MO | `KNLC244.us@SD` | `tvtv.us` | `106846` |
| Movies (WAGA-DT2) Atanta, GA | `WAGATV52.us@SD` | `tvtv.us` | `81314` |
| Movies (WHCT-LD4) Hartford, CT | `WHCTLD354.us@SD` | `tvtv.us` | `116363` |
| Movies for Gamers | `MoviesforGamers.us@SD` | `pluto.tv` | `6008ddf24ef92b00079d61cf` |
| Movies! (K14HC-D2) Prescott, AZ | `K14HCD452.us@SD` | `tvtv.us` | `35568` |
| Movies! (K18DR-DT4) Cortez, CO | `K18DRD74.us@SD` | `tvtv.us` | `17923` |
| Movies! (K28CW-D2) Flagstaff, AZ | `K28CWD452.us@SD` | `tvtv.us` | `15561` |
| Movies! (KCOP-DT3) Los Angeles, CA | `KCOPDT3.us@SD` | `tvtv.us` | `66849` |
| Movies! (KMIR-DT3) Palm Springs, CA | `KMIRDT3.us@SD` | `tvtv.us` | `103821` |
| Movies! (KRCR-DT3) Redding, CA | `KRCRTV73.us@SD` | `tvtv.us` | `73174` |
| Movies! (KTVU-DT3) San Francisco, CA | `KTVU23.us@SD` | `tvtv.us` | `92206` |
| Movies! (KTXH-DT2) Houston TX | `KTXHDT2.us@SD` | `tvtv.us` | `81449` |
| Movies! (KUTP-DT2) Arizona, PX | `KUTP452.us@SD` | `tvtv.us` | `81451` |
| Movies! (KVBC-DT3) Reedley, CA | `KVBCLP3.us@SD` | `tvtv.us` | `88399` |
| Movies! (WBGT-CD7) Rochester, NY | `WBGTCD467.us@SD` | `tvtv.us` | `33299` |
| Movies! (WDCA-DT2) Washington D.C. | `WDCA52.us@SD` | `tvtv.us` | `77760` |
| Movies! (WFLD-DT2) Chicago, IL | `WFLD322.us@SD` | `tvtv.us` | `108535` |
| Movies! (WNYW-DT2) New York, NY | `WNYW52.us@SD` | `tvtv.us` | `30763` |
| Movies! (WTVU-CD6) Syracuse, NY | `WTVUCD226.us@SD` | `tvtv.us` | `35648` |
| Movies!(WTXF-DT2) Philadelphia, PA | `WTXFTV572.us@SD` | `tvtv.us` | `82027` |
| MOVIESPHERE | `MovieSphere.us@US` | `plex.tv` | `5fb84bc1b7ad2d002dcb735f` |
| MS NOW HD | `MSNBC.us@SD` | `tvpassport.com` | `msnbc-usa-hd/6995` |
| MSG (Madison Square Gardens) HD | `MSG.us@SD` | `tvpassport.com` | `msg-madison-square-gardens-hd/4695` |
| MSG 2 HD | `MSG2.us@SD` | `tvpassport.com` | `msg-2-hd/31491` |
| MSG Plus | `MSGPlus.us@SD` | `tvpassport.com` | `msg-plus/1088` |
| MST3K | `MST3K.us@US` | `pluto.tv` | `545943f1c9f133a519bbac92` |
| MTV 2 East HD | `MTV2.us@East` | `tvpassport.com` | `mtv-2-east-hd/10276` |
| MTV 2 West- HD | `MTV2.us@West` | `tvpassport.com` | `mtv-2-west-hd/15030` |
| MTV Biggest Pop | `MTVBiggestPop.us@US` | `pluto.tv` | `5d14fd1a252d35decbc4080c` |
| MTV Classic - East | `MTVClassic.us@East` | `tvpassport.com` | `mtv-classic--east/2093` |
| MTV Classic - West | `MTVClassic.us@West` | `tvpassport.com` | `mtv-classic--west/14615` |
| MTV en español | `MTVenEspanol.us@SD` | `pluto.tv` | `5cf96d351652631e36d4331f` |
| MTV Live HD | `MTVLive.us@SD` | `tvpassport.com` | `mtv-live-hd/6081` |
| MTV Pluto TV | `MTVPlutoTV.us@US` | `pluto.tv` | `5ca672f515a62078d2ec0ad2` |
| MTV Spankin' New | `MTVSpankinNew.us@US` | `pluto.tv` | `5d14fdb8ca91eedee1633117` |
| MTV Tr3s East | `MTVTr3s.us@East` | `tvtv.us` | `18715` |
| MTV Tr3s West | `MTVTr3s.us@West` | `tvtv.us` | `55928` |
| MTV U | `MTVU.us@SD` | `tvpassport.com` | `mtv-u/2701` |
| MTV USA - Eastern Feed | `MTV.us@East` | `tvpassport.com` | `mtv-usa--eastern-feed/656` |
| MTV USA - Pacific Feed | `MTV.us@West` | `tvpassport.com` | `mtv-usa--pacific-feed/1264` |
| Music Choice 70s | `MusicChoice70s.us@SD` | `tvtv.us` | `19326` |
| Music Choice 80s | `MusicChoice80s.us@SD` | `tvtv.us` | `24405` |
| Music Choice 90s | `MusicChoice90s.us@SD` | `tvtv.us` | `19336` |
| Music Choice Alternative | `MusicChoiceAlternative.us@SD` | `tvtv.us` | `19310` |
| Music Choice Classic Rock | `MusicChoiceClassicRock.us@SD` | `tvtv.us` | `19311` |
| Music Choice Country Hits | `MusicChoiceCountryHits.us@SD` | `tvtv.us` | `19342` |
| Music Choice Dance/EDM | `MusicChoiceDanceEDM.us@SD` | `tvtv.us` | `76302` |
| Music Choice Gospel | `MusicChoiceGospel.us@SD` | `tvtv.us` | `26229` |
| Music Choice Hip-Hop and R&B | `MusicChoiceHipHopandRB.us@SD` | `tvtv.us` | `26230` |
| Music Choice Hit List | `MusicChoiceHitList.us@SD` | `tvtv.us` | `19313` |
| Music Choice Indie | `MusicChoiceIndie.us@SD` | `tvtv.us` | `19332` |
| Music Choice Jazz | `MusicChoiceJazz.us@SD` | `tvtv.us` | `19357` |
| Music Choice Kids Only! | `MusicChoiceKidzOnly.us@SD` | `tvtv.us` | `19330` |
| Music Choice Love Songs | `MusicChoiceLoveSongs.us@SD` | `tvtv.us` | `19314` |
| Music Choice Max | `MusicChoiceMax.us@SD` | `tvtv.us` | `19346` |
| Music Choice Metal | `MusicChoiceMetal.us@SD` | `tvtv.us` | `31030` |
| Music Choice Mexicana | `MusicChoiceMexicana.us@SD` | `tvtv.us` | `19320` |
| Music Choice Musica Urbana | `MusicChoiceMusicUrbana.us@SD` | `tvtv.us` | `24382` |
| Music Choice Pop & Country | `MusicChoicePopCountry.us@SD` | `tvtv.us` | `19325` |
| Music Choice Pop Hits | `MusicChoicePopHits.us@SD` | `tvtv.us` | `43335` |
| Music Choice Pop Latino | `MusicChoicePopLatino.us@SD` | `tvtv.us` | `24380` |
| Music Choice R&B Classics | `MusicChoiceRBClassics.us@SD` | `tvtv.us` | `19344` |
| Music Choice R&B Soul | `MusicChoiceRBSoul.us@SD` | `tvtv.us` | `26250` |
| Music Choice Rap | `MusicChoiceRap.us@SD` | `tvtv.us` | `24378` |
| Music Choice Reggae | `MusicChoiceReggae.us@SD` | `tvtv.us` | `26221` |
| Music Choice Rock | `MusicChoiceRock.us@SD` | `tvtv.us` | `19312` |
| Music Choice Smooth Jazz | `MusicChoiceSmoothJazz.us@SD` | `tvtv.us` | `19362` |
| Music Choice Soft Rock | `MusicChoiceSoftRock.us@SD` | `tvtv.us` | `19315` |
| Music Choice Teen Beats | `MusicChoiceTeenBeats.us@SD` | `tvtv.us` | `19327` |
| Music Choice Throwback Jamz | `MusicChoiceThrowbackJamz.us@SD` | `tvtv.us` | `26232` |
| Music Choice Today's Country | `MusicChoiceTodaysCountry.us@SD` | `tvtv.us` | `26248` |
| Music Choice Toddler Tunes | `MusicChoiceToddlerTunes.us@SD` | `tvtv.us` | `19329` |
| Music Choice Tropicales | `MusicChoiceTropicales.us@SD` | `tvtv.us` | `19335` |
| Music Choice Y2K | `MusicChoiceY2K.us@SD` | `tvtv.us` | `26228` |
| My Network TV (WADL-DT1) Mount Clemens, MI | `WADL381.us@HD` | `tvtv.us` | `32511` |
| My Network TV (WATL-DT1) Atlanta, GA | `WATL361.us@HD` | `tvtv.us` | `31621` |
| My Network TV (WDCA-DT1) Washington D.C. | `WDCA51.us@HD` | `tvtv.us` | `34427` |
| My Network TV (WMNT-CD1) Toledo, OH | `WMNTCD481.us@SD` | `tvtv.us` | `83457` |
| My Network TV (WPWR-DT) Chicago, IL | `WPWRTV501.us@HD` | `tvtv.us` | `34662` |
| My Network TV (WSBK-DT1) Boston, MA | `WSBKTV381.us@HD` | `tvtv.us` | `32723` |
| My Network TV (WXSP-CD1) Grand Rapids MI | `WXSPCD81.us@HD` | `tvtv.us` | `68648` |
| My NetworkTV (WHVL-LD1) State Collage PA | `WHVLLD291.us@HD` | `tvtv.us` | `65494` |
| My Nework TV (KUTP-DT1) Arizona, PX | `KUTP451.us@HD` | `tvtv.us` | `24345` |
| My TV (WBFF-DT2) Baltimore, MD | `WBFF452.us@HD` | `tvtv.us` | `50339` |
| My65 / FOX 35 Plus (WRBW-DT1) Orlando, FL | `WRBW91.us@HD` | `tvtv.us` | `26191` |
| MyDestination.TV | `MyDestinationTV.us@SD` | `tvtv.us` | `71303` |
| MyNetwork (KMOV-DT3) St Louis MO | `KMOV43.us@SD` | `tvtv.us` | `80426` |
| MyNetwork (KTXH-DT1) Houston TX | `KTXH671.us@HD` | `tvtv.us` | `30977` |
| MyNetwork (WCTX-DT1) Hartford, CT | `WCTX81.us@HD` | `tvtv.us` | `35469` |
| MyNetwork TV (KDFW-DT2) Dallas, TX | `KDFW42.us@SD` | `tvtv.us` | `49091` |
| MyNetworkTV (K23DT-D) Tahoe City, CA | `K23DTD1.us@SD` | `tvtv.us` | `70292` |
| MyNetworkTV (KECA-DT2) Eureka, CA | `KECALD292.us@HD` | `tvtv.us` | `67395` |
| MyNetworkTV (KEYT-DT2) Santa Barbara, CA | `KEYTTV32.us@HD` | `tvtv.us` | `55555` |
| MyNetworkTV (KHII-TV) Honolulu, HI | `KHIITV91.us@HD` | `tvtv.us` | `31532` |
| MyNetworkTV (KOTR) Monterey, CA | `KOTRLD71.us@SD` | `tvtv.us` | `110858` |
| MyNetworkTV (KPSE) Palm Springs, CA | `KPSELD501.us@HD` | `tvtv.us` | `90891` |
| MyNetworkTV (KQCA) Sacramento, CA | `KQCA581.us@HD` | `tvtv.us` | `25509` |
| MyNetworkTV (KRVU) Chico, CA | `KRVULD461.us@HD` | `tvtv.us` | `65306` |
| MyNetworkTV (KUVI) Bakersfield, CA | `KUVIDT451.us@SD` | `tvtv.us` | `34718` |
| MyNetworkTV (KZTC) San Diego, CA | `KZTCLP1.us@SD` | `tvtv.us` | `73702` |
| MyNetworkTV (KZVU) Chico, CA | `KZVULD221.us@HD` | `tvtv.us` | `65308` |
| MyNetworkTV (WBTW-DT2) Florence, SC | `WBTW132.us@SD` | `tvtv.us` | `52756` |
| MyNetworkTV (WRLH-DT2) Richmond, KY | `WRLHTV352.us@SD` | `tvtv.us` | `52724` |
| MyNetworkTV National | `MNT.us@East` | `tvguide.com` | `9233001847` |
| Mystery Science Theater 3000 | `MysteryScienceTheater3000.us@SD` | `tvtv.us` | `113781` |
| MythBusters | `Mythbusters.us` | `xumo.tv` | `300#99951396` |
| MythBusters | `Mythbusters.us@UK` | `pluto.tv` | `66e0b4866ad04d0008fff4d8` |
| MyTime Movie Network | `MyTimeMovieNetworkEast.us@SD` | `plex.tv` | `644875d7af92c31f4a190bc2` |
| Naruto | `Naruto.us@US` | `pluto.tv` | `5da0c85bd2c9c10009370984` |
| NASA (K13AV-DT6) Denver, CO | `K13AVD6.us@SD` | `tvtv.us` | `17839` |
| NASA TV | `NASATV.us@SD` | `tvtv.us` | `12553` |
| NASA TV UHD | `NASATVUHD.us@SD` | `tvtv.us` | `34466` |
| Nash Bridges | `NashBridges.us@SD` | `plex.tv` | `6668b69889c051b3733f9b60` |
| Nashville | `Nashville.us@SD` | `plex.tv` | `6087ff3ae99ff1002ce1465b` |
| Nat Geo Mundo | `NatGeoMundo.us@SD` | `tvtv.us` | `117788` |
| National Geographic US HD - Eastern | `NationalGeographic.us@East` | `tvpassport.com` | `national-geographic-us-hd--eastern/4436` |
| National Geographic US HD - Pacific | `NationalGeographic.us@West` | `tvpassport.com` | `national-geographic-us-hd--pacific/19084` |
| National Geographic Wild HD | `NationalGeographicWild.us@East` | `tvpassport.com` | `national-geographic-wild-hd/9579` |
| NBA League Pass 1 | `NBALeaguePass1.us@SD` | `tvtv.us` | `20810` |
| NBA League Pass 10 | `NBALeaguePass10.us@SD` | `tvtv.us` | `21115` |
| NBA League Pass 2 | `NBALeaguePass2.us@SD` | `tvtv.us` | `20811` |
| NBA League Pass 3 | `NBALeaguePass3.us@SD` | `tvtv.us` | `20812` |
| NBA League Pass 4 | `NBALeaguePass4.us@SD` | `tvtv.us` | `21044` |
| NBA League Pass 5 | `NBALeaguePass5.us@SD` | `tvtv.us` | `21045` |
| NBA League Pass 6 | `NBALeaguePass6.us@SD` | `tvtv.us` | `21046` |
| NBA League Pass 7 | `NBALeaguePass7.us@SD` | `tvtv.us` | `21047` |
| NBA League Pass 8 | `NBALeaguePass8.us@SD` | `tvtv.us` | `21048` |
| NBA League Pass 9 | `NBALeaguePass9.us@SD` | `tvtv.us` | `21049` |
| NBA TV USA HD | `NBATV.us@SD` | `tvpassport.com` | `nba-tv-usa-hd/5645` |
| NBC - Central | `NBC.us@Central` | `tvpassport.com` | `nbc--central/9912` |
| NBC - Mountain | `NBC.us@Mountain` | `tvpassport.com` | `nbc--mountain/9913` |
| NBC - Network Eastern | `NBC.us@East` | `tvpassport.com` | `nbc--network-eastern/1227` |
| NBC - Network Pacific | `NBC.us@West` | `tvpassport.com` | `nbc--network-pacific/4410` |
| NBC (K13XD-DT2) Fairbanks, AK | `K13XDD2.us@SD` | `tvpassport.com` | `nbc-k13xd-dt2-fairbanks-ak/17760` |
| NBC (K14LZ) Minneapolis, MN | `K14LZD41.us@HD` | `tvpassport.com` | `nbc-k14lz-minneapolis-mn/11865` |
| NBC (K18IR) Minneapolis, MN | `K18IRD41.us@HD` | `tvpassport.com` | `nbc-k18ir-minneapolis-mn/11867` |
| NBC (K21DG) Minneapolis, MN | `K21DGD1.us@SD` | `tvpassport.com` | `nbc-k21dg-minneapolis-mn/11869` |
| NBC (K21HX) Minneapolis, MN | `K21HXD211.us@HD` | `tvpassport.com` | `nbc-k21hx-minneapolis-mn/11870` |
| NBC (K31EF) Minneapolis, MN | `K31EFD111.us@HD` | `tvpassport.com` | `nbc-k31ef-minneapolis-mn/11866` |
| NBC (K32IG-D) Ellensburg, WA | `K32IGD231.us@HD` | `tvpassport.com` | `nbc-k32ig-d-ellensburg-wa/15126` |
| NBC (K35BW) Lewiston, ID | `K35BWD61.us@HD` | `tvpassport.com` | `nbc-k35bw-lewiston-id/7252` |
| NBC (K36KW) Minneapolis, MN | `K36KWD21.us@HD` | `tvpassport.com` | `nbc-k36kw-minneapolis-mn/11868` |
| NBC (K39FE) Minneapolis, MN | `K39FED1.us@SD` | `tvpassport.com` | `nbc-k39fe-minneapolis-mn/11871` |
| NBC (KAGS) Bryan, TX HD | `KAGSLD231.us@HD` | `tvpassport.com` | `nbc-kags-bryan-tx-hd/11425` |
| NBC (KAIT2) Jonesboro, AR | `KAIT82.us@HD` | `tvpassport.com` | `nbc-kait-dt2-jonesboro-ar/14363` |
| NBC (KALB) Alexandria, LA | `KALBTV51.us@HD` | `tvpassport.com` | `nbc-kalb-alexandria-la/2455` |
| NBC (KAMR) Amarillo, TX HD | `KAMRTV41.us@HD` | `tvpassport.com` | `nbc-kamr-amarillo-tx-hd/6261` |
| NBC (KARE) Minneapolis, MN HD | `KARE111.us@HD` | `tvpassport.com` | `nbc-kare-minneapolis-mn-hd/4774` |
| NBC (KARK) Little Rock, AR HD | `KARKTV41.us@HD` | `tvpassport.com` | `nbc-kark-little-rock-ar-hd/6262` |
| NBC (KATH) Juneau, AK | `KATHLD21.us@HD` | `tvpassport.com` | `nbc-kath-juneau-ak/5100` |
| NBC (KAVU-TV2) Victoria, TX | `KAVUTV252.us@SD` | `tvpassport.com` | `nbc-kavu-dt2-victoria-tx/17396` |
| NBC (KBGF) Great Falls, MT HD | `KBGFLD1.us@SD` | `tvpassport.com` | `nbc-kbgf-great-falls-mt-hd/7000` |
| NBC (KBJR) Duluth, MN HD | `KBJRTV61.us@HD` | `tvpassport.com` | `nbc-kbjr-duluth-mn-hd/6263` |
| NBC (KBMT-DT2) Beaumont, TX HD | `KBMT122.us@HD` | `tvpassport.com` | `nbc-kbmt-dt2-beaumont-tx-hd/6999` |
| NBC (KCBD) Lubbock, TX HD | `KCBD111.us@HD` | `tvpassport.com` | `nbc-kcbd-lubbock-tx-hd/6148` |
| NBC (KCEN) Temple, TX HD | `KCENTV61.us@HD` | `tvpassport.com` | `nbc-kcen-temple-tx-hd/5849` |
| NBC (KCFW) Kalispell, MT HD | `KCFWTV91.us@HD` | `tvpassport.com` | `nbc-kcfw-kalispell-mt-hd/8923` |
| NBC (KCRA) Sacramento, CA HD | `KCRATV581.us@HD` | `tvpassport.com` | `nbc-kcra-sacramento-ca-hd/6260` |
| NBC (KCWY) Casper, WY HD | `KCWYDT131.us@HD` | `tvpassport.com` | `nbc-kcwy-casper-wy-hd/6264` |
| NBC (KDBZ-CD) Bozeman, MT | `KDBZCD61.us@HD` | `tvpassport.com` | `nbc-kdbz-cd-bozeman-mt/30698` |
| NBC (KDLT) Sioux Falls, SD HD | `KDLTTV461.us@HD` | `tvpassport.com` | `nbc-kdlt-sioux-falls-sd-hd/6265` |
| NBC (KDLV) Mitchell, SD | `KDLVTV51.us@HD` | `tvpassport.com` | `nbc-kdlv-mitchell-sd/5101` |
| NBC (KECI) Missoula, MT HD | `KECITV131.us@HD` | `tvpassport.com` | `nbc-keci-missoula-mt-hd/8924` |
| NBC (KENV-DT2) Elko, NV | `KENVDT2.us@SD` | `tvpassport.com` | `nbc-kenv-dt2-elko-nv/18046` |
| NBC (KENV) Elko, NV HD | `KENVDT101.us@HD` | `tvpassport.com` | `nbc-kenv-elko-nv-hd/5141` |
| NBC (KETK) East Texas, TX HD | `KETKTV561.us@HD` | `tvpassport.com` | `nbc-ketk-east-texas-tx-hd/6266` |
| NBC (KFDX) Wichita Falls, TX HD | `KFDXTV31.us@HD` | `tvpassport.com` | `nbc-kfdx-wichita-falls-tx-hd/6267` |
| NBC (KFOR) Oklahoma City, OK HD | `KFORTV431.us@HD` | `tvpassport.com` | `nbc-kfor-oklahoma-city-ok-hd/6268` |
| NBC (KFTA-DT2) Ft. Smith, AR | `KFTATV242.us@HD` | `tvpassport.com` | `nbc-kfta-dt2-ft-smith-ar/11710` |
| NBC (KFYR) Bismarck, ND HD | `KFYRTV51.us@HD` | `tvpassport.com` | `nbc-kfyr-bismarck-nd-hd/8334` |
| NBC (KGET) Bakersfield, CA HD | `KGETTV171.us@HD` | `tvpassport.com` | `nbc-kget-bakersfield-ca-hd/7562` |
| NBC (KGIN-DT2) Hastings, NE | `KGIN112.us@HD` | `tvpassport.com` | `nbc-kgin-dt2-hastings-ne/18553` |
| NBC (KGNS) Laredo, TX HD | `KGNSTV81.us@HD` | `tvpassport.com` | `nbc-kgns-laredo-tx-hd/9482` |
| NBC (KGW) Portland, OR HD | `KGWDT1.us@SD` | `tvpassport.com` | `nbc-kgw-portland-or-hd/3729` |
| NBC (KHBC) Hilo, HI | `KHBCDT1.us@SD` | `tvpassport.com` | `nbc-khbc-hilo-hi/5103` |
| NBC (KHNL) Honolulu, HI HD | `KHNL131.us@HD` | `tvpassport.com` | `nbc-khnl-honolulu-hi-hd/7674` |
| NBC (KHQ) Spokane, WA HD | `KHQDT1.us@SD` | `tvpassport.com` | `nbc-khq-spokane-wa-hd/6270` |
| NBC (KIEM) Eureka, CA HD | `KIEMTV31.us@HD` | `tvpassport.com` | `nbc-kiem-eureka-ca-hd/6982` |
| NBC (KING) Seattle, WA DV | `KINGTV51.us@HD` | `tvpassport.com` | `nbc-king-seattle-wa-dv/3948` |
| NBC (KJRH) Tulsa, OK HD | `KJRHTV21.us@HD` | `tvpassport.com` | `nbc-kjrh-tulsa-ok-hd/6271` |
| NBC (KKCO) Grand Junction, CO HD | `KKCO111.us@HD` | `tvpassport.com` | `nbc-kkco-grand-junction-co-hd/6983` |
| NBC (KLAF) Lafayette, LA HD | `KLAFLD141.us@HD` | `tvpassport.com` | `nbc-klaf-lafayette-la-hd/9927` |
| NBC (KMCB) Coos Bay, OR | `KMCB231.us@HD` | `tvpassport.com` | `nbc-kmcb-coos-bay-or/5105` |
| NBC (KMIR) Palm Springs, CA HD | `KMIRTV361.us@HD` | `tvpassport.com` | `nbc-kmir-palm-springs-ca-hd/4934` |
| NBC (KMOL) Victoria, TX HD | `KMOLLD171.us@HD` | `tvpassport.com` | `nbc-kmol-victoria-tx-hd/17151` |
| NBC (KMOT) Minot, ND HD | `KMOT101.us@HD` | `tvpassport.com` | `nbc-kmot-minot-nd-hd/8319` |
| NBC (KMTR) Eugene, OR HD | `KMTR161.us@HD` | `tvpassport.com` | `nbc-kmtr-eugene-or-hd/19100` |
| NBC (KNAZ) Flagstaff, AZ | `KNAZTV21.us@HD` | `tvpassport.com` | `nbc-knaz-flagstaff-az/1177` |
| NBC (KNBC) Los Angeles, CA HD | `KNBC41.us@HD` | `tvpassport.com` | `nbc-knbc-los-angeles-ca-hd/4558` |
| NBC (KNBN) Rapid City, SD HD | `KNBN211.us@HD` | `tvpassport.com` | `nbc-knbn-rapid-city-sd-hd/6182` |
| NBC (KNDO) Tri-Cities, WA HD | `KNDO231.us@HD` | `tvpassport.com` | `nbc-kndo-tri-cities-wa-hd/8625` |
| NBC (KNDU) Tri-Cities, WA HD | `KNDU251.us@HD` | `tvpassport.com` | `nbc-kndu-tri-cities-wa-hd/7972` |
| NBC (KNEP2) Scottsbluff, NE | `KNEP42.us@HD` | `tvpassport.com` | `nbc-knep2-scottsbluff-ne/8304` |
| NBC (KNOP-TV) North Platte, NE HD | `KNOPTV21.us@HD` | `tvpassport.com` | `nbc-knop-north-platte-ne-hd/9566` |
| NBC (KNSD) San Diego, CA HD | `KNSD481.us@HD` | `tvpassport.com` | `nbc-knsd-san-diego-ca-hd/6929` |
| NBC (KNTV) San Francisco, CA HD | `KNTV111.us@HD` | `tvpassport.com` | `nbc-kntv-san-francisco-ca-hd/6871` |
| NBC (KNVN) Chico, CA HD | `KNVN241.us@HD` | `tvpassport.com` | `nbc-knvn-chico-ca-hd/6872` |
| NBC (KNWA) Ft. Smith, AR HD | `KNWATV511.us@HD` | `tvpassport.com` | `nbc-knwa-ft-smith-ar-hd/6873` |
| NBC (KOAA) Colorado Springs, CO HD | `KOAATV51.us@HD` | `tvpassport.com` | `nbc-koaa-colorado-springs-co-hd/6874` |
| NBC (KOB) Albuquerque, NM HD | `KOBDT1.us@SD` | `tvpassport.com` | `nbc-kob-albuquerque-nm-hd/5108` |
| NBC (KOBF) Farmington, NM HD | `KOBF121.us@HD` | `tvpassport.com` | `nbc-kobf-farmington-nm-hd/6875` |
| NBC (KOBI) Medford, OR HD | `KOBI51.us@HD` | `tvpassport.com` | `nbc-kobi-medford-or-hd/10330` |
| NBC (KOGG) Wailuku, HI | `KOGG61.us@HD` | `tvpassport.com` | `nbc-kogg-wailuku-hi/5113` |
| NBC (KOMU) Columbia, MO HD | `KOMUTV81.us@HD` | `tvpassport.com` | `nbc-komu-columbia-mo-hd/6877` |
| NBC (KOTI) Klamath Falls, OR HD | `KOTI21.us@HD` | `tvpassport.com` | `nbc-koti-klamath-falls-or-hd/7965` |
| NBC (KPLC) Lake Charles, LA HD | `KPLC71.us@HD` | `tvpassport.com` | `nbc-kplc-lake-charles-la-hd/6878` |
| NBC (KPNX) Phoenix, AZ HD | `KPNX121.us@HD` | `tvpassport.com` | `nbc-kpnx-phoenix-az-hd/6318` |
| NBC (KPRC) Houston, TX HD | `KPRCTV391.us@HD` | `tvpassport.com` | `nbc-kprc-houston-tx-hd/7902` |
| NBC (KPSN-LD) Payson, AZ | `KPSNLD1.us@SD` | `tvpassport.com` | `nbc-kpsn-ld-payson-az/26700` |
| NBC (KPVI) Pocatello, ID HD | `KPVIDT61.us@HD` | `tvpassport.com` | `nbc-kpvi-pocatello-id-hd/7555` |
| NBC (KQCD) Dickinson, ND HD | `KQCDTV71.us@HD` | `tvpassport.com` | `nbc-kqcd-dickinson-nd-hd/8046` |
| NBC (KRBC) Abilene, TX HD | `KRBCTV91.us@HD` | `tvpassport.com` | `nbc-krbc-abilene-tx-hd/17135` |
| NBC (KRII) Chisholm, MN | `KRII111.us@HD` | `tvpassport.com` | `nbc-krii-chisholm-mn/5116` |
| NBC (KRIS) Corpus Christi, TX HD | `KRISTV61.us@HD` | `tvpassport.com` | `nbc-kris-corpus-christi-tx-hd/4750` |
| NBC (KRNV) Reno, NV HD | `KRNVDT41.us@HD` | `tvpassport.com` | `nbc-krnv-reno-nv-hd/6230` |
| NBC (KSAN) San Angelo, TX HD | `KSANTV31.us@HD` | `tvpassport.com` | `nbc-ksan-san-angelo-tx-hd/17156` |
| NBC (KSBW) Monterey, CA HD | `KSBW81.us@HD` | `tvpassport.com` | `nbc-ksbw-monterey-ca-hd/13483` |
| NBC (KSBY) Santa Barbara, CA HD | `KSBY61.us@HD` | `tvpassport.com` | `nbc-ksby-santa-barbara-ca-hd/8097` |
| NBC (KSCT) Sitka, AK | `KSCTLP1.us@SD` | `tvpassport.com` | `nbc-ksct-sitka-ak/5119` |
| NBC (KSDK) St. Louis, MO HD | `KSDK51.us@HD` | `tvpassport.com` | `nbc-ksdk-st-louis-mo-hd/6623` |
| NBC (KSEE-DT1) Fresno, CA HD | `KSEE241.us@HD` | `tvpassport.com` | `nbc-ksee-dt1-fresno-ca-hd/6624` |
| NBC (KSHB) Kansas City, MO HD | `KSHBTV411.us@HD` | `tvpassport.com` | `nbc-kshb-kansas-city-mo-hd/6625` |
| NBC (KSL) Salt Lake City, UT HD | `KSLDT1.us@SD` | `tvpassport.com` | `nbc-ksl-salt-lake-city-ut-hd/4462` |
| NBC (KSNB) Hastings, NE HD | `KSNBTV41.us@HD` | `tvpassport.com` | `nbc-ksnb-hastings-ne-hd/6269` |
| NBC (KSNC) Great Bend, KS HD | `KSNC21.us@HD` | `tvpassport.com` | `nbc-ksnc-great-bend-ks-hd/8164` |
| NBC (KSNF) Joplin, MO HD | `KSNF161.us@HD` | `tvpassport.com` | `nbc-ksnf-joplin-mo-hd/6626` |
| NBC (KSNG) Garden City, KS HD | `KSNG111.us@HD` | `tvpassport.com` | `nbc-ksng-garden-city-ks-hd/17273` |
| NBC (KSNK) McCook, NE | `KSNK81.us@HD` | `tvpassport.com` | `nbc-ksnk-mccook-ne/1590` |
| NBC (KSNL) Salina, KS HD | `KSNLLD61.us@HD` | `tvpassport.com` | `nbc-ksnl-salina-ks-hd/8168` |
| NBC (KSNT) Topeka, KS HD | `KSNT271.us@HD` | `tvpassport.com` | `nbc-ksnt-topeka-ks-hd/6627` |
| NBC (KSNV) Las Vegas, NV HD | `KSNV31.us@HD` | `tvpassport.com` | `nbc-ksnv-las-vegas-nv-hd/17245` |
| NBC (KSNW) Wichita, KS HD | `KSNW31.us@HD` | `tvpassport.com` | `nbc-ksnw-wichita-ks-hd/8134` |
| NBC (KSTF-DT2) Casper, WY | `KSTF102.us@HD` | `tvpassport.com` | `nbc-kstf-dt2-casper-wy/18441` |
| NBC (KSTS-DT3) San Francisco, CA | `KSTS113.us@HD` | `tvpassport.com` | `nbc-ksts-dt3-san-francisco-ca/18438` |
| NBC (KTAL) Shreveport, LA HD | `KTALTV61.us@HD` | `tvpassport.com` | `nbc-ktal-shreveport-la-hd/6628` |
| NBC (KTCW) Roseburg, OR | `KTCW461.us@HD` | `tvpassport.com` | `nbc-ktcw-roseburg-or/5106` |
| NBC (KTEN) Ada, OK HD | `KTEN101.us@HD` | `tvpassport.com` | `nbc-kten-ada-ok-hd/8044` |
| NBC (KTIV) Sioux City, IA HD | `KTIV41.us@HD` | `tvpassport.com` | `nbc-ktiv-sioux-city-ia-hd/4636` |
| NBC (KTSM) El Paso, TX HD | `KTSMTV91.us@HD` | `tvpassport.com` | `nbc-ktsm-el-paso-tx-hd/13534` |
| NBC (KTTC) Rochester, MN HD | `KTTC101.us@HD` | `tvpassport.com` | `nbc-kttc-rochester-mn-hd/7870` |
| NBC (KTUU) Anchorage, AK HD | `KTUUTV21.us@HD` | `tvpassport.com` | `nbc-ktuu-anchorage-ak-hd/9443` |
| NBC (KTVB) Boise, ID HD | `KTVB71.us@HD` | `tvpassport.com` | `nbc-ktvb-boise-id-hd/10384` |
| NBC (KTVE) Monroe, LA HD | `KTVE101.us@HD` | `tvpassport.com` | `nbc-ktve-monroe-la-hd/7900` |
| NBC (KTVF) Fairbanks, AK | `KTVF111.us@HD` | `tvpassport.com` | `nbc-ktvf-fairbanks-ak/5121` |
| NBC (KTVH) Helena, MT HD | `KTVHDT121.us@HD` | `tvpassport.com` | `nbc-ktvh-helena-mt-hd/9199` |
| NBC (KTVM) Butte, MT HD | `KTVMTV71.us@SD` | `tvpassport.com` | `nbc-ktvm-butte-mt-hd/8925` |
| NBC (KTVZ) Bend, OR HD | `KTVZ211.us@HD` | `tvpassport.com` | `nbc-ktvz-bend-or-hd/8222` |
| NBC (KULR) Billings, MT HD | `KULRTV81.us@HD` | `tvpassport.com` | `nbc-kulr-billings-mt-hd/7548` |
| NBC (KUMV) Williston, ND HD | `KUMVTV81.us@HD` | `tvpassport.com` | `nbc-kumv-williston-nd-hd/8554` |
| NBC (KUSA) Denver, CO HD | `KUSA91.us@HD` | `tvpassport.com` | `nbc-kusa-denver-co-hd/8024` |
| NBC (KVEO) Brownsville, TX HD | `KVEOTV231.us@HD` | `tvpassport.com` | `nbc-kveo-brownsville-tx-hd/4686` |
| NBC (KVLY) Fargo, ND HD | `KVLYTV111.us@HD` | `tvpassport.com` | `nbc-kvly-fargo-nd-hd/7517` |
| NBC (KVOA) Tucson, AZ HD | `KVOA41.us@HD` | `tvpassport.com` | `nbc-kvoa-tucson-az-hd/7633` |
| NBC (KWAB) | `KWABDT1.us@SD` | `tvpassport.com` | `nbc-kwab-newswest-9-big-spring-tx/5139` |
| NBC (KWES) Midland, TX HD | `KWESTV91.us@HD` | `tvpassport.com` | `nbc-kwes-midland-tx-hd/6161` |
| NBC (KWQC) Quad Cities, IA HD | `KWQCTV61.us@HD` | `tvpassport.com` | `nbc-kwqc-quad-cities-ia-hd/4487` |
| NBC (KWWL) Waterloo, IA HD | `KWWL71.us@HD` | `tvpassport.com` | `nbc-kwwl-waterloo-ia-hd/8225` |
| NBC (KWYM-LP) Laramie, WY | `KWYMLP1.us@SD` | `tvpassport.com` | `nbc-kwym-lp-laramie-wy/26758` |
| NBC (KXAN) Austin, TX HD | `KXANTV361.us@HD` | `tvpassport.com` | `nbc-kxan-austin-tx-hd/7913` |
| NBC (KXAS) Fort Worth, TX HD | `KXASTV51.us@HD` | `tvpassport.com` | `nbc-kxas-fort-worth-tx-hd/5415` |
| NBC (KXGN-DT2) HD Glendive, MT | `KXGNTV52.us@SD` | `tvpassport.com` | `nbc-kxgn-dt2-hd-glendive-mt/19261` |
| NBC (KYTV) Springfield, MO HD | `KYTV331.us@HD` | `tvpassport.com` | `nbc-kytv-springfield-mo-hd/8083` |
| NBC (KYUS) Miles City, MT | `KYUSTV31.us@HD` | `tvpassport.com` | `nbc-kyus-miles-city-mt/5143` |
| NBC (WAFF) Hunstville, AL HD | `WAFF481.us@HD` | `tvpassport.com` | `nbc-waff-hunstville-al-hd/6724` |
| NBC (WAGT) Augusta, GA HD | `WAGTCD261.us@HD` | `tvpassport.com` | `nbc-wagt-augusta-ga-hd/6683` |
| NBC (WALB) Albany, GA HD | `WALB101.us@HD` | `tvpassport.com` | `nbc-walb-albany-ga-hd/6364` |
| NBC (WAND) Decatur, IL HD | `WAND171.us@HD` | `tvpassport.com` | `nbc-wand-decatur-il-hd/4585` |
| NBC (WAVE) Louisville, KY HD | `WAVE581.us@HD` | `tvpassport.com` | `nbc-wave-louisville-ky-hd/6725` |
| NBC (WAVY) Hampton Roads, VA HD | `WAVYTV101.us@HD` | `tvpassport.com` | `nbc-wavy-hampton-roads-va-hd/6365` |
| NBC (WBAL) Baltimore, MD HD | `WBALTV111.us@HD` | `tvpassport.com` | `nbc-wbal-baltimore-md-hd/6366` |
| NBC (WBBH) Fort Myers, FL HD | `WBBHTV201.us@HD` | `tvpassport.com` | `nbc-wbbh-fort-myers-fl-hd/4807` |
| NBC (WBIR) Knoxville, TN HD | `WBIRTV101.us@HD` | `tvpassport.com` | `nbc-wbir-knoxville-tn-hd/6367` |
| NBC (WBOY) Clarksburg, WV HD | `WBOYTV121.us@HD` | `tvpassport.com` | `nbc-wboy-clarksburg-wv-hd/6368` |
| NBC (WBRE) Wilkes-Barre, PA HD | `WBRETV281.us@HD` | `tvpassport.com` | `nbc-wbre-wilkes-barre-pa-hd/6369` |
| NBC (WCAU) Philadelphia, PA HD | `WCAU621.us@HD` | `tvpassport.com` | `nbc-wcau-philadelphia-pa-hd/6370` |
| NBC (WCBD) Charleston, SC HD | `WCBDTV21.us@HD` | `tvpassport.com` | `nbc-wcbd-charleston-sc-hd/6690` |
| NBC (WCMH) Columbus, OH HD | `WCMHTV41.us@HD` | `tvpassport.com` | `nbc-wcmh-columbus-oh-hd/3685` |
| NBC (WCNC) Charlotte, NC HD | `WCNCTV361.us@HD` | `tvpassport.com` | `nbc-wcnc-charlotte-nc-hd/5257` |
| NBC (WCSH) Portland, ME HD | `WCSH61.us@HD` | `tvpassport.com` | `nbc-wcsh-portland-me-hd/4760` |
| NBC (WCTX-CD) Virginia Beach, VA | `WCTXCD1.us@SD` | `tvpassport.com` | `nbc-wctx-cd-virginia-beach-va/25596` |
| NBC (WCYB) Bristol, VA HD | `WCYBTV51.us@HD` | `tvpassport.com` | `nbc-wcyb-bristol-va-hd/6894` |
| NBC (WDAM) Laurel, MS HD | `WDAMTV71.us@HD` | `tvpassport.com` | `nbc-wdam-laurel-ms-hd/6895` |
| NBC (WDIV) Detroit, MI DV | `WDIVTV41.us@HD` | `tvpassport.com` | `nbc-wdiv-detroit-mi-dv/3946` |
| NBC (WDSU) New Orleans, LA HD | `WDSU61.us@HD` | `tvpassport.com` | `nbc-wdsu-new-orleans-la-hd/6896` |
| NBC (WDTN) Dayton, OH HD | `WDTN431.us@SD` | `tvpassport.com` | `nbc-wdtn-dayton-oh-hd/7415` |
| NBC (WEAU) Eau Claire, WI HD | `WEAU131.us@HD` | `tvpassport.com` | `nbc-weau-eau-claire-wi-hd/8248` |
| NBC (WECT) Wilmington, NC HD | `WECT61.us@HD` | `tvpassport.com` | `nbc-wect-wilmington-nc-hd/4800` |
| NBC (WEEK) Bloomington, IL HD | `WEEKTV251.us@HD` | `tvpassport.com` | `nbc-week-bloomington-il-hd/4602` |
| NBC (WETM) Elmira, NY HD | `WETMTV181.us@HD` | `tvpassport.com` | `nbc-wetm-elmira-ny-hd/7021` |
| NBC (WFIE) Evansville, IN HD | `WFIE141.us@HD` | `tvpassport.com` | `nbc-wfie-evansville-in-hd/7019` |
| NBC (WFLA) Tampa Bay, FL HD | `WFLATV81.us@HD` | `tvpassport.com` | `nbc-wfla-tampa-bay-fl-hd/6699` |
| NBC (WFMJ) Youngstown, OH HD | `WFMJTV211.us@HD` | `tvpassport.com` | `nbc-wfmj-youngstown-oh-hd/6700` |
| NBC (WFXQ) Springfield, MA | `WFXQCD281.us@HD` | `tvpassport.com` | `nbc-wfxq-springfield-ma/11881` |
| NBC (WGAL) Lancaster, PA HD | `WGAL81.us@HD` | `tvpassport.com` | `nbc-wgal-lancaster-pa-hd/6701` |
| NBC (WGBA) Green Bay, WI HD | `WGBATV261.us@HD` | `tvpassport.com` | `nbc-wgba-green-bay-wi-hd/4899` |
| NBC (WGBC-DT2) Meridian, MS HD | `WGBC302.us@HD` | `tvpassport.com` | `nbc-wgbc-dt2-meridian-ms-hd/6702` |
| NBC (WGEM) Quincy, IL HD | `WGEMTV101.us@HD` | `tvpassport.com` | `nbc-wgem-quincy-il-hd/8015` |
| NBC (WGRZ) Buffalo, NY HD | `WGRZ21.us@HD` | `tvpassport.com` | `nbc-wgrz-buffalo-ny-hd/3582` |
| NBC (WGTQ-DT2) Traverse City, MI | `WGTQ82.us@HD` | `tvpassport.com` | `nbc-wgtq-dt2-traverse-city-mi/17951` |
| NBC (WHEC) Rochester, NY HD | `WHECTV101.us@HD` | `tvpassport.com` | `nbc-whec-rochester-ny-hd/13762` |
| NBC (WHIZ) Zanesville, OH HD | `WHIZTV181.us@HD` | `tvpassport.com` | `nbc-whiz-zanesville-oh-hd/7416` |
| NBC (WHO) Des Moines, IA HD | `WHODT1.us@SD` | `tvpassport.com` | `nbc-who-des-moines-ia-hd/6388` |
| NBC (WICU) Erie, PA HD | `WICUTV121.us@HD` | `tvpassport.com` | `nbc-wicu-erie-pa-hd/6390` |
| NBC (WILX) Lansing, MI HD | `WILXTV101.us@HD` | `tvpassport.com` | `nbc-wilx-lansing-mi-hd/7162` |
| NBC (WIS) Columbia, SC HD | `WISDT1.us@SD` | `tvpassport.com` | `nbc-wis-columbia-sc-hd/4763` |
| NBC (WITD-CD) Chesapeake, VA | `WITDCD231.us@HD` | `tvpassport.com` | `nbc-witd-cd-chesapeake-va/29463` |
| NBC (WITN) Greenville, NC HD | `WITNTV71.us@HD` | `tvpassport.com` | `nbc-witn-greenville-nc-hd/6393` |
| NBC (WIVT-DT2) Binghampton, NY | `WIVT342.us@HD` | `tvpassport.com` | `nbc-wivt-dt2-binghampton-ny/17722` |
| NBC (WJAC) Johnstown, PA HD | `WJACTV61.us@HD` | `tvpassport.com` | `nbc-wjac-johnstown-pa-hd/6394` |
| NBC (WJAR) Cranston, RI HD | `WJAR101.us@HD` | `tvpassport.com` | `nbc-wjar-cranston-ri-hd/6396` |
| NBC (WJFW) Wausau, WI HD | `WJFWTV121.us@HD` | `tvpassport.com` | `nbc-wjfw-wausau-wi-hd/6398` |
| NBC (WJHG-TV) Panama City Beach, FL HD | `WJHGTV71.us@HD` | `tvpassport.com` | `nbc-wjhg-panama-city-beach-fl-hd/6714` |
| NBC (WKTD) Portsmouth, VA | `WKTDCD171.us@HD` | `tvpassport.com` | `nbc-wktd-portsmouth-va/19455` |
| NBC (WKTV) Utica, NY HD | `WKTV21.us@HD` | `tvpassport.com` | `nbc-wktv-utica-ny-hd/7160` |
| NBC (WKYC) Cleveland, OH HD | `WKYC31.us@HD` | `tvpassport.com` | `nbc-wkyc-cleveland-oh-hd/3676` |
| NBC (WLBT) Jackson, MS HD | `WLBT31.us@HD` | `tvpassport.com` | `nbc-wlbt-jackson-ms-hd/7161` |
| NBC (WLBZ) Bangor, ME HD | `WLBZ21.us@HD` | `tvpassport.com` | `nbc-wlbz-bangor-me-hd/3641` |
| NBC (WLEX) Lexington, KY HD | `WLEXTV181.us@HD` | `tvpassport.com` | `nbc-wlex-lexington-ky-hd/6242` |
| NBC (WLIO) Lima, OH HD | `WLIO81.us@HD` | `tvpassport.com` | `nbc-wlio-lima-oh-hd/7408` |
| NBC (WLTZ) Columbus, GA HD | `WLTZ381.us@HD` | `tvpassport.com` | `nbc-wltz-columbus-ga-hd/6491` |
| NBC (WLUC) Upper Michigan, MI HD | `WLUCTV61.us@HD` | `tvpassport.com` | `nbc-wluc-upper-michigan-mi-hd/19898` |
| NBC (WLWK-CD) Sturgeon Bay, WI | `WLWKCD221.us@HD` | `tvpassport.com` | `nbc-wlwk-cd-sturgeon-bay-wi/29625` |
| NBC (WLWT) Cincinnati, OH HD | `WLWT641.us@HD` | `tvpassport.com` | `nbc-wlwt-cincinnati-oh-hd/3672` |
| NBC (WMAQ) Chicago, IL HD | `WMAQTV51.us@HD` | `tvpassport.com` | `nbc-wmaq-chicago-il-hd/6492` |
| NBC (WMBF) Myrtle Beach, SC HD | `WMBFTV321.us@HD` | `tvpassport.com` | `nbc-wmbf-myrtle-beach-sc-hd/6493` |
| NBC (WMC) Memphis, TN HD | `WMCDT1.us@SD` | `tvpassport.com` | `nbc-wmc-memphis-tn-hd/7871` |
| NBC (WMGT) Macon, GA HD | `WMGTTV411.us@HD` | `tvpassport.com` | `nbc-wmgt-macon-ga-hd/6494` |
| NBC (WMTV) Madison, WI HD | `WMTV151.us@HD` | `tvpassport.com` | `nbc-wmtv-madison-wi-hd/9104` |
| NBC (WNBC) New York, NY HD | `WNBC471.us@HD` | `tvpassport.com` | `nbc-wnbc-new-york-ny-hd/4559` |
| NBC (WNBD-LP) Grenada, MS HD | `WNBDLD331.us@HD` | `tvpassport.com` | `nbc-wnbd-lp-grenada-ms-hd/8806` |
| NBC (WNBJ-LD) Jackson, TN | `WNBJLD391.us@HD` | `tvpassport.com` | `nbc-wnbj-ld-jackson-tn/25992` |
| NBC (WNBW-DT) Gainesville, FL HD | `WNBWDT91.us@HD` | `tvpassport.com` | `nbc-wnbw-dt-gainesville-fl-hd/8106` |
| NBC (WNDU) South Bend, IN HD | `WNDUTV161.us@HD` | `tvpassport.com` | `nbc-wndu-south-bend-in-hd/6495` |
| NBC (WNKY) Bowling Green, KY HD | `WNKY401.us@HD` | `tvpassport.com` | `nbc-wnky-bowling-green-ky-hd/8278` |
| NBC (WNWO) Toledo, OH HD | `WNWOTV241.us@HD` | `tvpassport.com` | `nbc-wnwo-toledo-oh-hd/3683` |
| NBC (WNYT) Albany, NY HD | `WNYT131.us@HD` | `tvpassport.com` | `nbc-wnyt-albany-ny-hd/3707` |
| NBC (WOAI) San Antonio, TX HD | `WOAITV41.us@HD` | `tvpassport.com` | `nbc-woai-san-antonio-tx-hd/4871` |
| NBC (WOGC-CD) Holland, MI | `WOGCCD251.us@HD` | `tvpassport.com` | `nbc-wogc-cd-holland-mi/27224` |
| NBC (WOOD) Grand Rapids, MI HD | `WOODTV81.us@HD` | `tvpassport.com` | `nbc-wood-grand-rapids-mi-hd/9339` |
| NBC (WOWT) Omaha, NE HD | `WOWT61.us@HD` | `tvpassport.com` | `nbc-wowt-omaha-ne-hd/4738` |
| NBC (WPBN) Traverse City, MI HD | `WPBNTV71.us@HD` | `tvpassport.com` | `nbc-wpbn-traverse-city-mi-hd/11453` |
| NBC (WPMI) Mobile, AL HD | `WPMITV441.us@HD` | `tvpassport.com` | `nbc-wpmi-mobile-al-hd/7602` |
| NBC (WPSD) Paducah, KY HD | `WPSDTV61.us@HD` | `tvpassport.com` | `nbc-wpsd-paducah-ky-hd/6154` |
| NBC (WPTA-DT2) Ft. Wayne, IN | `WPTA212.us@HD` | `tvpassport.com` | `nbc-wpta-dt2-ft-wayne-in/5977` |
| NBC (WPTV) West Palm Beach, FL HD | `WPTVTV51.us@HD` | `tvpassport.com` | `nbc-wptv-west-palm-beach-fl-hd/8258` |
| NBC (WPTZ) Plattsburg, NY HD | `WPTZ51.us@HD` | `tvpassport.com` | `nbc-wptz-plattsburg-ny-hd/4527` |
| NBC (WPXI) Pittsburgh, PA HD | `WPXI111.us@HD` | `tvpassport.com` | `nbc-wpxi-pittsburgh-pa-hd/3714` |
| NBC (WRAL) Raleigh-Durham, NC HD | `WRALTV51.us@HD` | `tvpassport.com` | `nbc-wral-raleigh-durham-nc-hd/4826` |
| NBC (WRC) District of Columbia HD | `WRCDT1.us@SD` | `tvpassport.com` | `nbc-wrc-district-of-columbia-hd/3739` |
| NBC (WRCB) Chattanooga, TN HD | `WRCB31.us@HD` | `tvpassport.com` | `nbc-wrcb-chattanooga-tn-hd/9894` |
| NBC (WRDE) Salisbury, MD | `WRDELD311.us@HD` | `tvpassport.com` | `nbc-wrde-salisbury-md/20002` |
| NBC (WREX) Rockford, IL HD | `WREX131.us@HD` | `tvpassport.com` | `nbc-wrex-rockford-il-hd/19136` |
| NBC (WRGX) Dothan, AL HD | `WRGXLD231.us@HD` | `tvpassport.com` | `nbc-wrgx-dothan-al-hd/19093` |
| NBC (WSAV) Savannah, GA HD | `WSAVTV31.us@HD` | `tvpassport.com` | `nbc-wsav-savannah-ga-hd/7184` |
| NBC (WSAZ) Huntington, WV HD | `WSAZTV81.us@HD` | `tvpassport.com` | `nbc-wsaz-huntington-wv-hd/6116` |
| NBC (WSFA) Montgomery, AL HD | `WSFA121.us@HD` | `tvpassport.com` | `nbc-wsfa-montgomery-al-hd/6569` |
| NBC (WSLS) Roanoke, VA HD | `WSLSTV101.us@HD` | `tvpassport.com` | `nbc-wsls-roanoke-va-hd/6570` |
| NBC (WSMV) Nashville, TN HD | `WSMVTV41.us@HD` | `tvpassport.com` | `nbc-wsmv-nashville-tn-hd/6571` |
| NBC (WSTM) Syracuse, NY HD | `WSTMTV91.us@HD` | `tvpassport.com` | `nbc-wstm-syracuse-ny-hd/3663` |
| NBC (WTAP) Parkersburg, WV HD | `WTAPTV151.us@HD` | `tvpassport.com` | `nbc-wtap-parkersburg-wv-hd/6572` |
| NBC (WTHR) Indianapolis, IN HD | `WTHR131.us@HD` | `tvpassport.com` | `nbc-wthr-indianapolis-in-hd/7680` |
| NBC (WTLV) Jacksonville, FL HD | `WTLV121.us@HD` | `tvpassport.com` | `nbc-wtlv-jacksonville-fl-hd/5824` |
| NBC (WTMJ) Milwaukee, WI HD | `WTMJTV41.us@HD` | `tvpassport.com` | `nbc-wtmj-milwaukee-wi-hd/6849` |
| NBC (WTOM) Traverse City, MI | `WTOMTV41.us@HD` | `tvpassport.com` | `nbc-wtom-traverse-city-mi/5126` |
| NBC (WTOV) Steubenville, OH HD | `WTOVTV91.us@HD` | `tvpassport.com` | `nbc-wtov-steubenville-oh-hd/6850` |
| NBC (WTVA) Tupelo, MS HD | `WTVA91.us@HD` | `tvpassport.com` | `nbc-wtva-tupelo-ms-hd/6851` |
| NBC (WTVJ-DT1) Miami, FL | `WTVJ61.us@HD` | `tvtv.us` | `21219` |
| NBC (WTVY-DT4) Dothan, AL | `WTVY44.us@SD` | `tvpassport.com` | `nbc-wtvy-dt4-dothan-al/11885` |
| NBC (WTWC) Tallahassee, FL HD | `WTWCTV401.us@HD` | `tvpassport.com` | `nbc-wtwc-tallahassee-fl-hd/8552` |
| NBC (WTWO) Terre Haute, IN HD | `WTWO21.us@HD` | `tvpassport.com` | `nbc-wtwo-terre-haute-in-hd/7526` |
| NBC (WVIR) Charlottesville, VA HD | `WVIRTV291.us@HD` | `tvpassport.com` | `nbc-wvir-charlottesville-va-hd/3746` |
| NBC (WVIT) W. Hartford, CT HD | `WVIT301.us@HD` | `tvpassport.com` | `nbc-wvit-w-hartford-ct-hd/7715` |
| NBC (WVLA) Baton Rouge, LA HD | `WVLATV331.us@HD` | `tvpassport.com` | `nbc-wvla-baton-rouge-la-hd/8058` |
| NBC (WVTM) Birmingham, AL HD | `WVTMTV131.us@HD` | `tvpassport.com` | `nbc-wvtm-birmingham-al-hd/7576` |
| NBC (WVVA) Bluefield, VA HD | `WVVA61.us@HD` | `tvpassport.com` | `nbc-wvva-bluefield-va-hd/8294` |
| NBC (WWBT) Richmond, VA HD | `WWBT651.us@HD` | `tvpassport.com` | `nbc-wwbt-richmond-va-hd/8193` |
| NBC (WWLP) Springfield, MA HD | `WWLP221.us@HD` | `tvpassport.com` | `nbc-wwlp-springfield-ma-hd/7730` |
| NBC (WXIA) Atlanta, GA HD | `WXIATV111.us@HD` | `tvpassport.com` | `nbc-wxia-atlanta-ga-hd/9904` |
| NBC (WXII) Winston-Salem, NC HD | `WXIITV201.us@HD` | `tvpassport.com` | `nbc-wxii-winston-salem-nc-hd/4721` |
| NBC (WYFF) Greenville, SC HD | `WYFF401.us@SD` | `tvpassport.com` | `nbc-wyff-greenville-sc-hd/7196` |
| NBC 2 (WESH-DT1) Orlando, FL | `WESH241.us@HD` | `tvtv.us` | `21647` |
| NBC Comedy Vault | `NBCComedyVault.us@SD` | `xumo.tv` | `150#99951244` |
| NBC KJAC (KVHP-LD2) Jasper, TX | `KVHPLD2.us@SD` | `tvpassport.com` | `nbc-kjac-kvhp-ld2-jasper-tx/31336` |
| NBC News Now | `NBCNewsNOW.us@SD` | `tvtv.us` | `114174` |
| NBC Sports Boston | `NBCSportsBoston.us@SD` | `tvtv.us` | `11104` |
| NBC Sports California | `NBCSportsCalifornia.us@SD` | `tvtv.us` | `44917` |
| NBC Sports Chicago | `NBCSportsChicago.us@SD` | `tvtv.us` | `44447` |
| NBC Sports Chicago Plus | `NBCSportsChicagoPlus.us@SD` | `tvtv.us` | `45948` |
| NBC Sports Chicago Plus 2 | `NBCSportsChicagoPlus2.us@SD` | `tvtv.us` | `55875` |
| NBC Sports NOW | `NBCSportsNOW.us@SD` | `plex.tv` | `5fc70600598c41002da3dd43` |
| NBC Sports Philadelphia | `NBCSportsPhiladelphia.us@SD` | `tvtv.us` | `17596` |
| NBC Sports Washington | `NBCSportsWashington.us@SD` | `tvtv.us` | `10271` |
| NBC Universo HD - Eastern | `NBCUniverso.us@East` | `tvpassport.com` | `nbc-universo-hd--eastern/16418` |
| NBC Universo West | `NBCUniverso.us@West` | `tvtv.us` | `91880` |
| NBCLX (KTMD-DT3) Houston, TX | `KTMD473.us@SD` | `tvtv.us` | `70962` |
| NBCLX (KXAS-DT3) Dallas TX | `KXASTV53.us@SD` | `tvtv.us` | `61401` |
| NBCLX (National) | `NBCLX.us@SD` | `tvtv.us` | `114278` |
| NBCLX (WRC-DT5) Washington D.C. | `WRCDT3.us@SD` | `tvtv.us` | `114820` |
| NBCLX (WTVJ-DT3) Miami, FL | `WTVJDT3.us@SD` | `tvtv.us` | `63644` |
| NECN | `NECN.us@SD` | `tvtv.us` | `11000` |
| NESN | `NESN.us@SD` | `tvtv.us` | `10996` |
| NESN Plus | `NESNPlus.us@SD` | `tvtv.us` | `63516` |
| NEW K-POP | `NEWKPOP.us@SD` | `plex.tv` | `60d4edd7b2fdec002c14112d` |
| NEW K.MOVIES | `NEWKMOVIES.us@SD` | `plex.tv` | `60d4eddab2fdec002c141131` |
| New Tang Dynasty (WMBC-DT5) Newton, NJ | `WMBCTV635.us@SD` | `tvtv.us` | `62811` |
| New Tang Dynasty TV (KCNS-DT5) San Francisco, CA | `KCNS505.us@SD` | `tvtv.us` | `77041` |
| New Tang Dynasty TV (KXLA-DT7) Los Angeles, CA | `KXLA447.us@SD` | `tvtv.us` | `64829` |
| News 12 New York | `News12NewYork.us@SD` | `pluto.tv` | `5fff49cfb5cd4f0007c2b0dc` |
| News12 Bronx | `News12Bronx.us@SD` | `tvtv.us` | `18580` |
| News12 Brooklyn | `News12Brooklyn.us@SD` | `tvtv.us` | `46292` |
| News12 Conneticut | `News12Conneticut.us@SD` | `tvtv.us` | `27512` |
| News12 Hudson Valley | `News12HudsonValley.us@SD` | `tvtv.us` | `46640` |
| News12 Long Island | `News12LongIsland.us@SD` | `tvtv.us` | `10999` |
| News12 New Jersey | `News12NewJersey.us@SD` | `tvtv.us` | `16143` |
| News12 Westchester | `News12Westchester.us@SD` | `tvtv.us` | `12309` |
| NewsChannel 12 OEYT (KCOY) Santa Maria, CA | `KCOYTV121.us@HD` | `tvtv.us` | `42750` |
| Newschannel 5+ (WTVF-DT2) Nashville, TN | `WTVF582.us@SD` | `tvtv.us` | `31244` |
| NewsMax TV | `NewsmaxTV.us@SD` | `tvpassport.com` | `newsmax-tv/16818` |
| Newsmax TV (KFMS-LD6) Sacramento, CA | `KFMSLD476.us@SD` | `tvtv.us` | `106416` |
| Newsmax2 | `Newsmax2.us@SD` | `tvpassport.com` | `newsmax2/37081` |
| NewsNation | `NewsNation.us@SD` | `tvguide.com` | `9233013251` |
| Newsnet | `NewsNet.us@SD` | `tvtv.us` | `92205` |
| NewsNet (KAAP-LD) Santa Cruz, CA | `KAAPLD247.us@SD` | `tvtv.us` | `121383` |
| NewsNet (KFLA) Los Angeles, CA | `KFLALD81.us@SD` | `tvtv.us` | `59632` |
| NewsNet (WBXZ-LP11) Buffalo, NY | `WBXZLP11.us@SD` | `tvtv.us` | `34242` |
| NewsNet (WHNE-LD9) Detroit, MI | `WHNELD39.us@SD` | `tvtv.us` | `110711` |
| NewsNet (WMNN-LD1) Lake City, MI | `WMNNLD261.us@SD` | `tvtv.us` | `71678` |
| NewsNet (WYBN-LD8) Albany, NY | `WYBNLD148.us@SD` | `tvtv.us` | `17340` |
| Newsy | `Newsy.us@SD` | `tvtv.us` | `96827` |
| Newsy (KGTV6) San Diego, CA | `KGTV106.us@SD` | `tvtv.us` | `121400` |
| NewsY (KPPX-DT4) Arizona, PX | `KPPXTV514.us@SD` | `tvtv.us` | `50051` |
| NewsY (WINP-DT7) Pittsburgh, PA | `WINPTV167.us@SD` | `tvtv.us` | `121394` |
| Newsy (WPXN-DT7) New York, NY | `WPXNTV317.us@SD` | `tvtv.us` | `121325` |
| NFL Channel | `NFLChannel.us@SD` | `pluto.tv` | `5ced7d5df64be98e07ed47b6` |
| NFL Network | `NFLNetwork.us@SD` | `tvpassport.com` | `nfl-network/3349` |
| NFL Red Zone | `NFLRedZone.us@SD` | `tvtv.us` | `89351` |
| NFL Sunday Ticket 1 | `NFLSundayTicket1.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-1/2747` |
| NFL Sunday Ticket 10 | `NFLSundayTicket10.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-10/2756` |
| NFL Sunday Ticket 11 | `NFLSundayTicket11.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-11/2903` |
| NFL Sunday Ticket 12 | `NFLSundayTicket12.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-12/2904` |
| NFL Sunday Ticket 13 | `NFLSundayTicket13.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-13/2905` |
| NFL Sunday Ticket 14 | `NFLSundayTicket14.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-14/2906` |
| NFL Sunday Ticket 2 | `NFLSundayTicket2.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-2/2748` |
| NFL Sunday Ticket 3 | `NFLSundayTicket3.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-3/2749` |
| NFL Sunday Ticket 4 | `NFLSundayTicket4.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-4/2750` |
| NFL Sunday Ticket 5 | `NFLSundayTicket5.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-5/2751` |
| NFL Sunday Ticket 6 | `NFLSundayTicket6.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-6/2752` |
| NFL Sunday Ticket 7 | `NFLSundayTicket7.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-7/2753` |
| NFL Sunday Ticket 8 | `NFLSundayTicket8.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-8/2754` |
| NFL Sunday Ticket 9 | `NFLSundayTicket9.us@SD` | `tvpassport.com` | `nfl-sunday-ticket-9/2755` |
| NHK World (KCET-DT3) Los Angeles, CA | `KCET583.us@SD` | `tvtv.us` | `55374` |
| NHK World (KRCB-DT3) Cotati, CA | `KRCB223.us@HD` | `tvtv.us` | `35246` |
| NHK World (WNJN-DT2) Montclair, NJ | `WNJN582.us@HD` | `tvtv.us` | `29140` |
| NHK World (WNJS-DT2) Camden, NJ | `WNJS522.us@HD` | `tvtv.us` | `43940` |
| NHL Center Ice 1 | `NHLCenterIce1.us@SD` | `tvpassport.com` | `nhl-center-ice-1/15375` |
| NHL Center Ice 10 | `NHLCenterIce10.us@SD` | `tvpassport.com` | `nhl-center-ice-10/15377` |
| NHL Center Ice 2 | `NHLCenterIce2.us@SD` | `tvpassport.com` | `nhl-center-ice-2/15383` |
| NHL Center Ice 3 | `NHLCenterIce3.us@SD` | `tvpassport.com` | `nhl-center-ice-3/15385` |
| NHL Center Ice 4 | `NHLCenterIce4.us@SD` | `tvpassport.com` | `nhl-center-ice-4/15387` |
| NHL Center Ice 5 | `NHLCenterIce5.us@SD` | `tvpassport.com` | `nhl-center-ice-5/15389` |
| NHL Center Ice 6 | `NHLCenterIce6.us@SD` | `tvpassport.com` | `nhl-center-ice-6/15392` |
| NHL Center Ice 7 | `NHLCenterIce7.us@SD` | `tvpassport.com` | `nhl-center-ice-7/15393` |
| NHL Center Ice 8 | `NHLCenterIce8.us@SD` | `tvpassport.com` | `nhl-center-ice-8/15395` |
| NHL Center Ice 9 | `NHLCenterIce9.us@SD` | `tvpassport.com` | `nhl-center-ice-9/15397` |
| NHL Network USA | `NHLNetwork.us@SD` | `tvpassport.com` | `nhl-network-usa/14156` |
| NHL Network USA Alternate HD | `NHLNetworkAlternate.us@SD` | `tvpassport.com` | `nhl-network-usa-alternate-hd/18834` |
| Nick Jr. - East | `NickJr.us@East` | `tvpassport.com` | `nick-jr--east/1969` |
| Nick Jr. - West | `NickJr.us@West` | `tvpassport.com` | `nick-jr--west/14645` |
| Nick Jr. Pluto TV | `NickJrPlutoTV.us@US` | `pluto.tv` | `5ca6748a37b88b269472dad9` |
| Nick Pluto TV | `NickPlutoTV.us@US` | `i.mjh.nz` | `SamsungTVPlus/us#USBA3000158L` |
| Nickelodeon en español | `NickenEspanol.us@SD` | `pluto.tv` | `5d8d08395f39465da6fb3ec4` |
| Nickelodeon Pluto TV | `NickelodeonPlutoTV.us@SD` | `pluto.tv` | `5ca673e0d0bd6c2689c94ce3` |
| Nickelodeon USA - East Feed HD | `Nickelodeon.us@East` | `tvpassport.com` | `nickelodeon-usa--east-feed-hd/6342` |
| Nickelodeon USA - Pacific Feed HD | `Nickelodeon.us@West` | `tvpassport.com` | `nickelodeon-usa--pacific-feed-hd/6343` |
| NickMusic | `NickMusic.us@SD` | `tvtv.us` | `90209` |
| Nicktoons HD - East | `Nicktoons.us@East` | `tvpassport.com` | `nicktoons-hd--east/11445` |
| Nicktoons HD - West | `Nicktoons.us@West` | `tvpassport.com` | `nicktoons-hd--west/16230` |
| Ninja Kidz TV | `NinjaKidzTV.us@SD` | `plex.tv` | `627ec46a92d8e6a705784bd1` |
| NLEC (KNLC-DT2) St Louis, MO | `KNLC242.us@SD` | `tvtv.us` | `64120` |
| Noor TV (KBID-DT7) Fresno, CA | `KBIDLP7.us@SD` | `tvtv.us` | `89916` |
| North Carolina Channel (WUNC-DT4) Chapel Hill, NC | `WUNCTV44.us@SD` | `tvtv.us` | `30648` |
| North Coast Create (KEET3) Eureka, CA | `KEETDT3.us@SD` | `tvtv.us` | `67155` |
| North Star SEN (KXLT-DT2) Rochester, MN HD | `KXLTTV472.us@SD` | `tvpassport.com` | `metv-kxlt-dt2-rochester-mn-hd/9223` |
| Nosey | `Nosey.us@US` | `xumo.tv` | `350#99991366` |
| Novelisima (WKOB-LD8) New York, NY | `WKOBLD8.us@SD` | `tvtv.us` | `113864` |
| NRBTV | `NRBTV.us@SD` | `tvtv.us` | `49097` |
| NTD Eng! (KCNS-DT6) San Francisco, CA | `KCNS386.us@SD` | `tvtv.us` | `88559` |
| NTD TV | `NTDTV.us@East` | `tvtv.us` | `11253` |
| NTD TV (KMTP-DT5) San Francisco, CA | `KMTPTV505.us@SD` | `tvtv.us` | `60834` |
| Nuestra Visión | `NuestraVision.us@SD` | `tvtv.us` | `106819` |
| NYC GOV (WNYE-DT2) New York, NY | `WNYETV252.us@SD` | `tvtv.us` | `28270` |
| NYC Life (WNYE-DT1) New York, NY | `WNYETV251.us@HD` | `tvtv.us` | `26196` |
| OAN Plus | `OANPlus.us@SD` | `pluto.tv` | `5e7cf6c7b156d500078c5f44` |
| One America News Network | `OneAmericaNewsNetwork.us@SD` | `tvpassport.com` | `one-america-news-network/12614` |
| One Caribbean Television | `OneCaribbeanTelevision.us@SD` | `tvtv.us` | `20036` |
| One Piece | `OnePiece.us@SD` | `pluto.tv` | `5f7790b3ed0c88000720b241` |
| ONTV4U | `OnTV4U.us@SD` | `tvpassport.com` | `ontv4u/13142` |
| ONTV4U (KBTV-CA2) Sacramento, CA | `KBTVCD82.us@SD` | `tvtv.us` | `70628` |
| Oprah Winfrey Network USA Eastern | `OWN.us@East` | `tvpassport.com` | `oprah-winfrey-network-usa-eastern/1159` |
| Oprah Winfrey Network USA Pacific | `OWN.us@West` | `tvpassport.com` | `oprah-winfrey-network-usa-pacific/6125` |
| Outdoor Channel US | `OutdoorChannel.us@SD` | `tvpassport.com` | `outdoor-channel-us/1086` |
| Outdoor Channel US HD | `OutdoorChannel.us@HD` | `tvpassport.com` | `outdoor-channel-us-hd/4638` |
| OuterMax | `OuterMax.us@East` | `tvguide.com` | `9200014841` |
| OuterMax West | `OuterMax.us@West` | `tvtv.us` | `61174` |
| OuterSphere by Lionsgate | `OuterSphere.us@SD` | `plex.tv` | `641496bf238e21f260e7844a` |
| Outside | `OutsideTV.us@SD` | `plex.tv` | `629e522ed1bc5f1b16c6b98d` |
| Outside TV | `OutsideTVPlus.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ3504707A` |
| Ovation | `Ovation.us@SD` | `tvguide.com` | `9233011240` |
| Overtime | `Overtime.us@SD` | `plex.tv` | `62a388865440744efae8e243` |
| Oxygen True Crime HD - Eastern | `Oxygen.us@East` | `tvpassport.com` | `oxygen-hd--eastern/6846` |
| Oxygen True Crime HD - Pacific | `Oxygen.us@West` | `tvpassport.com` | `oxygen-hd--pacific/16231` |
| Pac-12 Arizona | `Pac12Arizona.us@SD` | `tvtv.us` | `76372` |
| Pac-12 Bay Area | `Pac12BayArea.us@SD` | `tvtv.us` | `76370` |
| Pac-12 Insider | `Pac12Insider.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA300034DB` |
| Pac-12 Los Angeles | `Pac12LosAngeles.us@SD` | `tvtv.us` | `76375` |
| Pac-12 Mountain | `Pac12Mountain.us@SD` | `tvtv.us` | `76374` |
| Pac-12 Networks | `Pac12Networks.us@SD` | `tvtv.us` | `76366` |
| Pac-12 Oregon | `Pac12Oregon.us@SD` | `tvtv.us` | `76371` |
| Pac-12 Washington | `Pac12Washington.us@SD` | `tvtv.us` | `76373` |
| Paramount Movie Channel | `ParamountMovieChannel.us@SD` | `pluto.tv` | `5cb0cae7a461406ffe3f5213` |
| Paramount Network | `ParamountNetwork.us@East` | `tvguide.com` | `9233013810` |
| Paramount+ Picks | `ParamountPlusPicks.us@SD` | `pluto.tv` | `5ff8c708653d080007361b14` |
| Paramount+ with Showtime | `Showtime.us@East` | `tvguide.com` | `9200016599` |
| Pasiones US | `Pasiones.us@SD` | `tvtv.us` | `61776` |
| PBR RidePass | `PBRRidePass.us@SD` | `pluto.tv` | `60d39387706fe50007fda8e8` |
| PBS (K18HD) Fresno, CA | `K18HDD181.us@HD` | `tvtv.us` | `66964` |
| PBS (KAET-DT1) Arizona PX | `KAET81.us@HD` | `tvtv.us` | `25102` |
| PBS (KCTS) Seattle, WA | `KCTSTV91.us@HD` | `tvpassport.com` | `pbs-kcts-seattle-wa/190` |
| PBS (KDIN-TV) Des Moines, IA | `KDINTV111.us@HD` | `tvtv.us` | `27422` |
| PBS (KERA-DT1) Dallas, TX | `KERATV131.us@HD` | `tvtv.us` | `20372` |
| PBS (KETC-DT1) St Louis, MO | `KETC91.us@HD` | `tvtv.us` | `32057` |
| PBS (KHET) Honolulu, HI | `KHET111.us@HD` | `tvtv.us` | `49918` |
| PBS (KIXE) Redding, CA | `KIXETV91.us@HD` | `tvtv.us` | `42680` |
| PBS (KJHP-LP) Morongo Valley, CA | `KJHPLP1.us@SD` | `tvtv.us` | `82636` |
| PBS (KLCS) Los Angeles, CA | `KLCS581.us@HD` | `tvtv.us` | `43777` |
| PBS (KLRU-DT1) Austin, TX | `KLRU181.us@HD` | `tvtv.us` | `35500` |
| PBS (KODG-LP) Palm Springs, CA | `KODGLP1.us@SD` | `tvtv.us` | `70795` |
| PBS (KPBS) San Diego, CA | `KPBS151.us@HD` | `tvtv.us` | `29024` |
| PBS (KQED) San Francisco, CA | `KQED91.us@HD` | `tvtv.us` | `24344` |
| PBS (KQEH-DT2) San Francisco, CA | `KQEH542.us@HD` | `tvtv.us` | `55312` |
| PBS (KQET) Salinas, CA | `KQET251.us@HD` | `tvtv.us` | `49856` |
| PBS (KRCB) Cotati, CA | `KRCB221.us@HD` | `tvtv.us` | `35242` |
| PBS (KTCA-DT1) St Paul, MN | `KTCATV21.us@HD` | `tvtv.us` | `114142` |
| PBS (KUFM) Missoula, MT | `KUFMTV111.us@HD` | `tvpassport.com` | `pbs-kufm-missoula-mt/13228` |
| PBS (KUHT-DT1) Houston, TX | `KUHT81.us@HD` | `tvtv.us` | `26193` |
| PBS (KVCR) San Bernardino, CA | `KVCRDT241.us@HD` | `tvtv.us` | `44023` |
| PBS (KVIE) Sacramento, CA | `KVIE61.us@HD` | `tvtv.us` | `34197` |
| PBS (KVPT) Fresno, CA | `KVPT181.us@HD` | `tvtv.us` | `45729` |
| PBS (WBGU) Bowling Green, OH | `WBGUTV271.us@HD` | `tvpassport.com` | `pbs-wbgu-bowling-green-oh/3025` |
| PBS (WCMU) Mt. Pleasant, MI | `WCMUTV141.us@HD` | `tvpassport.com` | `pbs-wcmu-mt-pleasant-mi/9304` |
| PBS (WCNY-TV) Syracuse, NY | `WCNYTV241.us@HD` | `tvtv.us` | `32074` |
| PBS (WCVE-DT) Richmond, VA | `WCVETV231.us@HD` | `tvtv.us` | `43782` |
| PBS (WDCQ) Flint, MI | `WDCQTV191.us@HD` | `tvpassport.com` | `pbs-wdcq-flint-mi/9042` |
| PBS (WEDH-DT1) Hartford, CT | `WEDH651.us@SD` | `tvtv.us` | `53126` |
| PBS (WETA) HD Washington, DC | `WETATV261.us@HD` | `tvpassport.com` | `pbs-weta-hd-washington-dc/8180` |
| PBS (WETK) Colchester, VT | `WETK331.us@HD` | `tvpassport.com` | `pbs-wetk-colchester-vt/102` |
| PBS (WFSU1) Tallahassee, FL | `WFSUTV111.us@HD` | `tvtv.us` | `35387` |
| PBS (WFYI-DT1) Indianapolis, IN | `WFYI201.us@HD` | `tvtv.us` | `33787` |
| PBS (WGTE-TV) Toledo, OH | `WGTETV301.us@HD` | `tvtv.us` | `36205` |
| PBS (WGVU) Grand Rapids, MI | `WGVUTV351.us@HD` | `tvpassport.com` | `pbs-wgvu-grand-rapids-mi/1919` |
| PBS (WHUT-DT1) Washington, DC | `WHUTTV91.us@HD` | `tvtv.us` | `59160` |
| PBS (WHYY-DT1) Philadelphia, PA | `WHYYTV441.us@HD` | `tvtv.us` | `24114` |
| PBS (WKAR) East Lansing, MI | `WKARTV231.us@HD` | `tvpassport.com` | `pbs-wkar-east-lansing-mi/13241` |
| PBS (WLIW) Long Island, NY | `WLIW471.us@HD` | `tvpassport.com` | `pbs-wliw-long-island-ny/1775` |
| PBS (WLVT) Bethlehem, PA HD | `WLVTTV691.us@HD` | `tvpassport.com` | `pbs-wlvt-bethlehem-pa-hd/8664` |
| PBS (WMAE) Booneville, MS | `WMAETV121.us@HD` | `tvpassport.com` | `pbs-wmae-booneville-ms/1402` |
| PBS (WNED) Buffalo, NY | `WNEDTV171.us@HD` | `tvpassport.com` | `pbs-wned-buffalo-ny/92` |
| PBS (WNET) New York, NY | `WNET211.us@HD` | `tvpassport.com` | `pbs-wnet-new-york-ny/1774` |
| PBS (WNJB-DT1) New Brunswick, NJ | `WNJB581.us@HD` | `tvtv.us` | `11721` |
| PBS (WNJN-DT1) Montclair, NJ | `WNJN581.us@HD` | `tvtv.us` | `11723` |
| PBS (WNJS-DT1) Camden, NJ | `WNJS521.us@HD` | `tvtv.us` | `11724` |
| PBS (WNJT-DT1) Trenton, NJ | `WNJT521.us@HD` | `tvtv.us` | `11725` |
| PBS (WNMU) Marquette, MI | `WNMU131.us@HD` | `tvtv.us` | `44220` |
| PBS (WPBS) Watertown, NY | `WPBSTV161.us@HD` | `tvpassport.com` | `pbs-wpbs-watertown-ny/29` |
| PBS (WPBT-DT1) Miami, FL | `WPBT421.us@HD` | `tvtv.us` | `26192` |
| PBS (WPSU1) Altoona, PA | `WPSUTV31.us@HD` | `tvtv.us` | `45799` |
| PBS (WQED-DT1) Pittsburgh, PA | `WQED131.us@HD` | `tvtv.us` | `51809` |
| PBS (WRLK-TV) Columbia, SC | `WRLKTV351.us@HD` | `tvtv.us` | `21896` |
| PBS (WSBE) Providence, RI HD | `WSBETV511.us@SD` | `tvpassport.com` | `pbs-wsbe-providence-ri-hd/7752` |
| PBS (WTTW-DT1) Chicago, IL | `WTTW111.us@HD` | `tvtv.us` | `30415` |
| PBS (WTVS) Detroit, MI | `WTVS561.us@HD` | `tvpassport.com` | `pbs-wtvs-detroit-mi/22` |
| PBS (WUNC-TV) Chapel Hill, NC | `WUNCTV41.us@HD` | `tvtv.us` | `30645` |
| PBS (WUPA-DT1) Atlanta, GA | `WGTV81.us@HD` | `tvtv.us` | `59210` |
| PBS (WVIZ-DT1) Cleveland, OH | `WVIZ251.us@HD` | `tvtv.us` | `44366` |
| PBS (WXXI) Rochester, NY | `WXXITV211.us@HD` | `tvpassport.com` | `pbs-wxxi-rochester-ny/46` |
| PBS Antiques Roadshow | `PBSAntiquesRoadshow.us@SD` | `pluto.tv` | `636c2b3c55d2e700074105c4` |
| PBS Arizona Life (KAET-DT2) Arizona PX | `KAET82.us@SD` | `tvtv.us` | `25103` |
| PBS Create (WLIW-DT2) New York, NY | `WLIWDT2.us@SD` | `tvtv.us` | `34135` |
| PBS Create (WVIZ-DT4) Cleveland, OH | `WVIZ254.us@SD` | `tvtv.us` | `57703` |
| PBS HD | `PBS.us@East` | `tvguide.com` | `9233004141` |
| PBS Kids (KAET-DT4) Arizona PX | `KAET84.us@SD` | `tvtv.us` | `58879` |
| PBS Kids (KERA-DT2) Dallas, TX | `KERATV132.us@SD` | `tvtv.us` | `65053` |
| PBS Kids (KETC-DT2) St Louis, MO | `KETC92.us@HD` | `tvtv.us` | `32060` |
| PBS Kids (KLCS-DT2) Los Angeles, CA | `KLCS582.us@SD` | `tvtv.us` | `43779` |
| PBS Kids (KLRU-DT4) Austin, TX | `KLRU184.us@SD` | `tvtv.us` | `35506` |
| PBS Kids (KPBS-DT4) San Diego, CA | `KPBS154.us@SD` | `tvtv.us` | `101904` |
| PBS Kids (KQED4) San Francisco, CA | `KQED94.us@SD` | `tvtv.us` | `34168` |
| PBS Kids (KQEH4) San Jose, CA | `KQEH544.us@SD` | `tvtv.us` | `58519` |
| PBS Kids (KQET4) Watsonville, CA | `KQET254.us@SD` | `tvtv.us` | `55548` |
| PBS Kids (KTCA-DT4) St Paul, MN | `KTCATV24.us@HD` | `tvtv.us` | `31262` |
| PBS Kids (KUHT-DT3) Houston, TX | `KUHT83.us@SD` | `tvtv.us` | `55345` |
| PBS Kids (KVPT-DT2) Fresno, CA | `KVPT182.us@SD` | `tvtv.us` | `46249` |
| PBS Kids (WCVE-DT4) Richmond, VA | `WCVETV234.us@SD` | `tvtv.us` | `108690` |
| PBS Kids (WEDH-DT2) Hartford, CT | `WEDH652.us@SD` | `tvtv.us` | `63442` |
| PBS Kids (WETA-DT3) Washington D.C. | `WETATV263.us@SD` | `tvtv.us` | `32050` |
| PBS Kids (WFSU4) Tallahassee, FL | `WFSUTV114.us@SD` | `tvtv.us` | `35393` |
| PBS Kids (WHYY-DT2) Philadelphia, PA | `WHYYTV443.us@SD` | `tvtv.us` | `51000` |
| PBS Kids (WNED3) Buffalo, NY | `WNEDTV173.us@SD` | `tvtv.us` | `34921` |
| PBS Kids (WNET-DT2) New York, NY | `WNET132.us@SD` | `tvtv.us` | `31780` |
| PBS Kids (WPBS-DT4) Watertown, NY | `WPBSTV164.us@SD` | `tvtv.us` | `31734` |
| PBS Kids (WPBT-DT4) Miami, FL | `WPBT24.us@SD` | `tvtv.us` | `43178` |
| PBS Kids (WPSU4) Altoona, PA | `WPSUTV34.us@SD` | `tvtv.us` | `101660` |
| PBS Kids (WQED-DT5) Pittsburgh, PA | `WQED135.us@SD` | `tvtv.us` | `101971` |
| PBS Kids (WVIZ-DT5) Cleveland, OH | `WVIZ255.us@HD` | `tvtv.us` | `102096` |
| PBS KIDS 24/7 | `PBSKids.us@SD` | `tvpassport.com` | `pbs-kids-247/31867` |
| PBS Kids East (National Feed) | `PBSKidsEasternCentral.us@SD` | `tvtv.us` | `101364` |
| PBS Kids(WUPA-DT4) Atlanta, GA | `WGTV84.us@SD` | `tvtv.us` | `102035` |
| PBS Life (K43LW-D) Prescott, Etc., AZ | `K43LWD2.us@SD` | `tvtv.us` | `35552` |
| PBS Nature | `PBSNature.us@SD` | `pluto.tv` | `640a64bd73e013000893d4e0` |
| PBS North Coast (KEET) Eureka, CA | `KEET131.us@HD` | `tvtv.us` | `35319` |
| PBS North Coast Kids (KEET-DT2) Eureka, CA | `KEETDT2.us@SD` | `tvtv.us` | `35321` |
| PBS North Coast World (KEET-TV5) Eureka, CA | `KEETDT5.us@SD` | `tvtv.us` | `106516` |
| PBS Plus (KQED2) San Jose, CA | `KQED92.us@HD` | `tvtv.us` | `30507` |
| PBS Plus (KQEH) San Jose, CA | `KQEH541.us@HD` | `tvtv.us` | `44690` |
| PBS Plus (KQET2) San Francisco, CA | `KQET252.us@HD` | `tvtv.us` | `55320` |
| PBS Retro | `PBSRetro.us@SD` | `plex.tv` | `65fb337f00433c8a0799ce98` |
| PBS SoCal1 (KOCE) Huntington Beach, CA | `KOCETV501.us@HD` | `tvtv.us` | `34544` |
| PBS SoCal2 (KOCE-TV2) Huntington Beach, CA | `KOCETV502.us@SD` | `tvtv.us` | `46525` |
| PBS Travel | `PBSTravel.us@SD` | `plex.tv` | `684c201a3496598cf4003fbc` |
| PBS West (National Feed) | `PBS.us@West` | `tvtv.us` | `62271` |
| PBS World | `WorldChannel.us@SD` | `tvpassport.com` | `pbs-world/10214` |
| PBS World (KAET-DT3) Arizona PX | `KAET83.us@SD` | `tvtv.us` | `25104` |
| PBS World (KETC-DT3) St Louis, MO | `KETC93.us@SD` | `tvtv.us` | `32065` |
| PBS World (KIXE-DT3) Redding, CA | `KIXETV93.us@SD` | `tvtv.us` | `55603` |
| PBS World (KOCE-DT4) Huntington Beach, CA | `KOCETV504.us@SD` | `tvtv.us` | `58716` |
| PBS World (KPBS-DT2) San Diego, CA | `KPBS152.us@HD` | `tvtv.us` | `30697` |
| PBS World (KQED3) San Francisco, CA | `KQED93.us@SD` | `tvtv.us` | `35278` |
| PBS World (KQEH3) San Jose, CA | `KQEH543.us@SD` | `tvtv.us` | `55524` |
| PBS World (KQET3) Watsonville, CA | `KQET253.us@SD` | `tvtv.us` | `55541` |
| PBS World (KUHT-DT4) Houston, TX | `KUHT84.us@SD` | `tvtv.us` | `70801` |
| PBS World (KVIE3) Sacramento, CA | `KVIE63.us@SD` | `tvtv.us` | `35916` |
| PBS World (KVPT-DT4) Fresno, CA | `KVPT184.us@SD` | `tvtv.us` | `97775` |
| PBS World (WCVE-DT3) Richmond, VA | `WCVETV233.us@SD` | `tvtv.us` | `58918` |
| PBS World (WETA-DT4) Washington D.C. | `WETATV264.us@SD` | `tvtv.us` | `32052` |
| PBS World (WHYY-DT2) Philadelphia, PA | `WHYYTV442.us@SD` | `tvtv.us` | `45913` |
| PBS World (WLIW-DT3) New York, NY | `WLIWDT3.us@SD` | `tvtv.us` | `44147` |
| PBS World (WPSU3) Altoona, PA | `WPSUTV33.us@SD` | `tvtv.us` | `49155` |
| PBS World (WQED-DT3) Pittsburgh, PA | `WQED133.us@SD` | `tvtv.us` | `34555` |
| PBS World (WVIZ-DT3) Cleveland, OH | `WVIZDT3.us@SD` | `tvtv.us` | `57737` |
| PBS World(WUPA-DT3) Atlanta, GA | `WGTV83.us@SD` | `tvtv.us` | `61567` |
| People TV | `PeopleTV.us@SD` | `tvtv.us` | `107584` |
| Perry Mason | `PerryMason.us@SD` | `pluto.tv` | `6197086891ddd4000739941a` |
| Pets.TV | `PetsTV.us@SD` | `tvtv.us` | `71297` |
| PFL MMA | `PFLMMA.us@SD` | `pluto.tv` | `6334a574605f140007e233c4` |
| PGA TOUR | `PGATour.us@SD` | `pluto.tv` | `5de94dacb394a300099fa22a` |
| Pink Panther | `ThePinkPanther.us@SD` | `plex.tv` | `6876f76054325376973fd314` |
| PixL TV | `PixLTV.us@SD` | `tvtv.us` | `70113` |
| Playboy TV Latin America | `PlayboyTVLatinAmerica.us@SD` | `tvtv.us` | `16788` |
| Pluto TV Action | `PlutoTVAction.us@US` | `pluto.tv` | `561d7d484dc7c8770484914a` |
| Pluto TV Adventure | `PlutoTVAdventure.us@US` | `pluto.tv` | `69d7ebb726eeec84158e28cb` |
| Pluto TV Anime | `PlutoTVAnime.us@US` | `pluto.tv` | `5812b7d3249444e05d09cc49` |
| Pluto TV Anime | `PlutoTVAnime.us@USPlus` | `pluto.tv` | `62a2e8d8a1c8650007e95bac` |
| Pluto TV Anime Movies | `PlutoTVAnimeMovies.us@SD` | `pluto.tv` | `67ed8f7e443f0671bc2b2368` |
| Pluto TV Backcountry | `PlutoTVBackcountry.us@SD` | `pluto.tv` | `5cabdf1437b88b26947346b2` |
| Pluto TV Cars | `PlutoTVCars.us@SD` | `pluto.tv` | `5812b3a4249444e05d09cc46` |
| Pluto TV Comedy | `PlutoTVComedy.us@US` | `pluto.tv` | `5a4d3a00ad95e4718ae8d8db` |
| Pluto TV Competition | `PlutoTVCompetition.us@SD` | `pluto.tv` | `603fde9026ecbf0007752c2c` |
| Pluto TV Crime Drama | `PlutoTVCrimeDrama.us@SD` | `pluto.tv` | `5f31fd1b4c510e00071c3103` |
| Pluto TV Crime Movies | `PlutoTVCrimeMovies.us@SD` | `pluto.tv` | `5f4d8594eb979c0007706de7` |
| Pluto TV Cult Films | `PlutoTVCultFilms.us@US` | `pluto.tv` | `5c665db3e6c01b72c4977bc2` |
| Pluto TV Drama | `PlutoTVDrama.us@US` | `pluto.tv` | `5b4e92e4694c027be6ecece1` |
| Pluto TV Fantastic | `PlutoTVFantastic.us@SD` | `pluto.tv` | `5b64a245a202b3337f09e51d` |
| Pluto TV Game Shows | `PlutoTVGameShows.us@SD` | `pluto.tv` | `6036e7c385749f00075dbd3b` |
| Pluto TV History | `PlutoTVHistory.us@US` | `pluto.tv` | `5a4d35dfa5c02e717a234f86` |
| Pluto TV Hometown Drama | `PlutoTVHometownDrama.us@SD` | `pluto.tv` | `69d6c7befde57cd5ba0160c3` |
| Pluto TV Horror | `PlutoTVHorror.us@US` | `pluto.tv` | `569546031a619b8f07ce6e25` |
| Pluto TV Icons | `PlutoTVIcons.us@SD` | `pluto.tv` | `64b585f84ea480000838e446` |
| Pluto TV Lives | `PlutoTVLives.us@US` | `pluto.tv` | `5d8beeb39b5d5d5f8c672530` |
| Pluto TV Military | `PlutoTVMilitary.us@SD` | `pluto.tv` | `5bb3fea0f711fd76340eebff` |
| Pluto TV Novelas | `PlutoTVNovelas.us@US` | `pluto.tv` | `5cf96c0222df39f1a338d163` |
| Pluto TV Paranormal | `PlutoTVParanormal.us@US` | `pluto.tv` | `5adf96e3e738977e2c31cb04` |
| Pluto TV Pixel World | `MinecrafTV.us@US` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ3504531A` |
| Pluto TV Reaction | `PlutoTVReaction.us@SD` | `pluto.tv` | `617b37b361e0fd0008cfd8c5` |
| Pluto TV Reality | `PlutoTVReality.us@US` | `pluto.tv` | `5d8bf0b06d2d855ee15115e3` |
| Pluto TV Romance | `PlutoTVRomance.us@US` | `pluto.tv` | `5a66795ef91fef2c7031c599` |
| Pluto TV Sci-Fi | `PlutoTVSciFi.us@US` | `pluto.tv` | `5b4fc274694c027be6ed3eea` |
| Pluto TV Science | `PlutoTVScience.us@US` | `pluto.tv` | `563a970aa1a1f7fe7c9daad7` |
| Pluto TV Spotlight | `PlutoTVSpotlight.us@SD` | `pluto.tv` | `5ba3fb9c4b078e0f37ad34e8` |
| Pluto TV Staff Picks | `PlutoTVStaffPicks.us@SD` | `pluto.tv` | `5f4d863b98b41000076cd061` |
| Pluto TV Terror | `PlutoTVTerror.us@SD` | `pluto.tv` | `5c6dc88fcd232425a6e0f06e` |
| Pluto TV Thrillers | `PlutoTVThrillers.us@US` | `pluto.tv` | `5b4e69e08291147bd04a9fd7` |
| Pluto TV Trending Now | `PlutoTVTrendingNow.us@SD` | `pluto.tv` | `673247127d5da5000817b4d6` |
| Pluto TV True Crime | `PlutoTVTrueCrime.us@US` | `pluto.tv` | `5812be1c249444e05d09cc50` |
| Pluto TV Westerns | `PlutoTVWesterns.us@US` | `pluto.tv` | `5b4e94282d4ec87bdcbb87cd` |
| Pokémon | `PlutoTVPokemon.us@US` | `pluto.tv` | `6675c7868768aa0008d7f1c7` |
| PokerGO | `PokerGo.us@US` | `pluto.tv` | `5fc54366b04b2300072e31af` |
| POP HD - East | `Pop.us@East` | `tvpassport.com` | `pop-hd--east/10370` |
| POP HD - West | `Pop.us@West` | `tvpassport.com` | `pop-hd--west/19105` |
| Portlandia | `Portlandia.us@SD` | `plex.tv` | `61d735fea7b7c7f703418512` |
| PosiTiV | `PositivTV.us@SD` | `tvpassport.com` | `positiv/4456` |
| PosiTiV (K14JS-DT5) Denver, CO | `K14JSD145.us@SD` | `tvtv.us` | `17833` |
| PosiTiv (KOFY-DT3) San Francisco, CA | `KOFYTV203.us@SD` | `tvtv.us` | `84450` |
| PosiTiV (KTBN-TV5) Los Angeles, CA | `KTBNTV405.us@SD` | `tvtv.us` | `53399` |
| PosiTiV (WKOI-DT3) Richmond, IN | `WKOIDT3.us@SD` | `tvtv.us` | `50102` |
| POWERNATION | `PowerNationTV.us@SD` | `pluto.tv` | `63b48016d9dd51000828fa37` |
| Pursuit Channel | `PursuitChannel.us@SD` | `tvtv.us` | `60111` |
| Pursuit Up | `PursuitUP.us@SD` | `tvtv.us` | `112487` |
| Quest | `Quest.us@SD` | `tvtv.us` | `106838` |
| Quest (KARE-DT4) St Paul, MN | `KARE114.us@SD` | `tvtv.us` | `106937` |
| Quest (KFMB-TV5) San Diego, CA | `KFMBTV85.us@SD` | `tvtv.us` | `114213` |
| Quest (KFTR-DT5) Ontario, CA | `KFTRDT465.us@SD` | `tvtv.us` | `107681` |
| Quest (KING-DT3) Seattle, WA | `KINGTV53.us@SD` | `tvtv.us` | `106988` |
| Quest (KPNX-DT4) Arizona, PX | `KPNX124.us@SD` | `tvtv.us` | `107082` |
| Quest (KRON-TV4) San Francisco, CA | `KRONDT4.us@SD` | `tvtv.us` | `106636` |
| Quest (KSDK-DT4) St Louis MO | `KSDK54.us@SD` | `tvtv.us` | `107218` |
| Quest (KTFF-DT3) Porterville, CA | `KTFFDT613.us@SD` | `tvtv.us` | `108500` |
| Quest (KXTV4) Sacramento, CA | `KXTV104.us@SD` | `tvtv.us` | `107071` |
| Quest (WCCT-DT4) Hartford, CT | `WCCTDT4.us@SD` | `tvtv.us` | `106478` |
| Quest (WFAA-DT4) Dallas, TX | `WFAA84.us@SD` | `tvtv.us` | `107044` |
| Quest (WGRZ4) Buffalo, NY | `WGRZ24.us@SD` | `tvtv.us` | `106948` |
| Quest (WKYC-DT4) Cleveland, OH | `WKYC34.us@SD` | `tvtv.us` | `107047` |
| Quest (WMBC-DT2) Newton, NJ | `WMBCTV632.us@SD` | `tvtv.us` | `55810` |
| Quest (WTHR-DT5) Indianapolis, IN | `WTHR135.us@SD` | `tvtv.us` | `113175` |
| Quest (WXIA-DT4) Atanta, GA | `WXIATV114.us@SD` | `tvtv.us` | `107026` |
| QVC | `QVC.us@SD` | `tvpassport.com` | `qvc/14683` |
| QVC (KAHC-LD5) Sacramento, CA | `KAHCLD435.us@SD` | `tvtv.us` | `100254` |
| QVC (KAKZ-DT4) Palm Springs, CA | `KAKZLD4.us@SD` | `tvtv.us` | `83295` |
| QVC (KKPM-DT5) Sacramento, CA | `KKPMCD285.us@SD` | `tvtv.us` | `92486` |
| QVC (KNXV-DT4) Arizona, PX | `KNXVDT4.us@SD` | `tvtv.us` | `111171` |
| QVC (KQRO-LD5) Morgan Hill, CA | `KQROLD455.us@SD` | `tvtv.us` | `98268` |
| QVC (KSBS-CD3) Denver, CO | `KSBSCD103.us@SD` | `tvtv.us` | `35051` |
| QVC (KTRK-DT4) Houston, TX | `KTRKTV204.us@SD` | `tvtv.us` | `120853` |
| QVC (WRNN-DT4) New York, NY | `WRNNTV94.us@SD` | `tvtv.us` | `75533` |
| QVC (WRTV-DT4) Indianapolis, IN | `WRTV64.us@SD` | `tvtv.us` | `95139` |
| QVC (WUOA-LD5) Birmingham, AL | `WUOALD465.us@SD` | `tvtv.us` | `31753` |
| QVC2 | `QVC2.us@SD` | `tvtv.us` | `82682` |
| QVC2 (KAHC-LD6) Sacramento, CA | `KAHCLD436.us@SD` | `tvtv.us` | `100255` |
| QVC2 (KCNZ-CD2) San Francisco, CA | `KCNZCD282.us@SD` | `tvtv.us` | `70483` |
| QVC2 (WUOA-LD7) Birmingham, AL | `WUOALD467.us@SD` | `tvtv.us` | `31760` |
| QVC3 | `QVC3.us@SD` | `tvtv.us` | `101260` |
| RACER Select | `RacerSelect.us@SD` | `plex.tv` | `5f0641d0e8ffda004033aff4` |
| Rakuten Viki | `RakutenViki.us@US` | `plex.tv` | `60d4edd8b2fdec002c14112f` |
| Real America's Voice | `RealAmericasVoice.us@SD` | `distro.tv` | `64501` |
| ReelzChannel | `Reelz.us@SD` | `tvpassport.com` | `reelzchannel/4175` |
| Retro TV (K26CI-DT5) Cortez, CO | `K26CID265.us@SD` | `tvtv.us` | `18223` |
| Retro TV (KBTV-CA5) Sacramento, CA | `KBTVCD85.us@SD` | `tvtv.us` | `87906` |
| Retro TV (KLRA-CD4) Little Rock, AR | `KLRACD204.us@SD` | `tvtv.us` | `36259` |
| Retro TV (WBON-LD4) Richmond, KY | `WBONLD94.us@SD` | `tvtv.us` | `115204` |
| Retro TV (WDPN-DT5) Philadelphia, PA | `WDPNTV25.us@SD` | `tvtv.us` | `106849` |
| Retro TV (WJLP-DT5) New York, NY | `WJLPDT5.us@SD` | `tvtv.us` | `111255` |
| Retro TV (WNYX-DT5) New York, NY | `WNYXLD5.us@SD` | `tvtv.us` | `17849` |
| Retro TV (WXNY-DT5) New York, NY | `WXNYLD5.us@SD` | `tvtv.us` | `17346` |
| Retro TV (WXNY-LD4) New York, NY | `WXNYLD4.us@SD` | `tvtv.us` | `16446` |
| Retro TV (WYBN-LD2) Albany, NY | `WYBNLD142.us@SD` | `tvtv.us` | `11906` |
| RetroCrush | `RetroCrush.us@SD` | `plex.tv` | `5ef4e1b40d9ad000423c442a` |
| RetroPlex East | `RetroPlex.us@East` | `tvtv.us` | `49767` |
| RetroPlex West | `RetroPlex.us@West` | `tvtv.us` | `63179` |
| Rev'n | `REVN.us@Eastern` | `tvtv.us` | `91119` |
| REV'N (K26CI-DT7) Cortez, CO | `K26CID267.us@SD` | `tvtv.us` | `18226` |
| REV'N (K38IZ-D7) Phoenix, AZ | `K38IZD7.us@SD` | `tvtv.us` | `36171` |
| REV'N (KBTV-CA7) Sacramento, CA | `KBTVCD87.us@SD` | `tvtv.us` | `91130` |
| REV'N (KVHF-LD4) Clovis, CA | `KVHFLD44.us@SD` | `tvtv.us` | `73848` |
| REV'N (WMJN-LD4) Huntsville, AL | `WMJNLD4.us@SD` | `tvtv.us` | `34929` |
| Revenue Frontier | `RevenueFrontier.us@SD` | `tvtv.us` | `58799` |
| Revenue Frontier (KFMS-LD4) Sacramento, CA | `KFMSLD474.us@SD` | `tvtv.us` | `106414` |
| Revenue Frontier (KHSC-DT3) Fresno, CA | `KHSCLD323.us@SD` | `tvtv.us` | `101748` |
| Revolt TV | `Revolt.us@SD` | `tvpassport.com` | `revolt-tv/11301` |
| Revry | `Revry.us@SD` | `pluto.tv` | `674f735a2fb8a100087bf253` |
| Revry Her | `RevryHer.us@SD` | `distro.tv` | `43914` |
| Revry Latinx | `RevryLatinX.us@SD` | `plex.tv` | `68c87052da79d98d977dc90e` |
| Rewind TV (KPLR-DT4) St Louis MO | `KPLRDT4.us@SD` | `tvtv.us` | `111088` |
| Rewind TV (WGN-DT4) Chicago, IL | `WGNDT4.us@SD` | `tvtv.us` | `106422` |
| Rewind TV (WNLO2) Buffalo, NY | `WNLO42.us@SD` | `tvtv.us` | `43432` |
| Rewind TV (WOIO-DT4) Cleveland, OH | `WOIO194.us@SD` | `tvtv.us` | `121077` |
| Rewind TV (WOOD-DT2) Grand Rapids, MI | `WOODTV82.us@SD` | `tvtv.us` | `20729` |
| Rewind TV (WPIX-DT4) NY | `WPIX114.us@HD` | `tvtv.us` | `70260` |
| Rewind TV (WUCW-DT5) St Paul, MN | `WUCWDT5.us@SD` | `tvtv.us` | `120698` |
| Rewind TV US (WNCN2) Raleigh-Durham, NC | `WNCN282.us@SD` | `tvpassport.com` | `rewind-tv-us-wncn2-raleigh-durham-nc/9991` |
| RFD-TV | `RFDTV.us@SD` | `tvtv.us` | `25148` |
| RiffTrax | `RiffTrax.us@US` | `pluto.tv` | `58d947b9e420d8656ee101ab` |
| Right Now TV (KVHF-LD2) Fresno, CA | `KVHFLD42.us@SD` | `tvtv.us` | `73845` |
| ROAR (KOKI) Tulsa, OK HD | `KOKITV231.us@HD` | `tvpassport.com` | `fox-koki-tulsa-ok-hd/8151` |
| ROAR (WEYI) Flint, MI HD | `WEYITV461.us@HD` | `tvpassport.com` | `nbc-weyi-flint-mi-hd/7020` |
| Root Sports Northwest | `RootSportsNorthwest.us@SD` | `tvtv.us` | `11062` |
| RT America | `RTAmerica.us@SD` | `tvtv.us` | `58333` |
| Runtime Español | `RuntimeEspanol.us@SD` | `plex.tv` | `5f5132e362fe160040f26c15` |
| RVTV | `RVTV.us@HD` | `distro.tv` | `144407` |
| Ryan and Friends | `RyanandFriends.us@SD` | `pluto.tv` | `5fb584b7613a31000789de5a` |
| SAB TV (KBID-DT8) Fresno, CA | `KBIDLP8.us@SD` | `tvtv.us` | `102804` |
| Samsung Wild Life | `SamsungWildlife.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBA3000043LH` |
| Samuel Goldwyn Channel | `SamuelGoldwynChannel.us@SD` | `plex.tv` | `6233ee9222dcc1d9a93916b6` |
| Samuel Goldwyn Classics | `SamuelGoldwynClassics.us@SD` | `plex.tv` | `6233ef13ce37cac7a278664b` |
| SBS (KSCI-DT2) Long Beach, CA | `KSCI502.us@SD` | `tvtv.us` | `37213` |
| Schwab Network | `SchwabNetwork.us@SD` | `distro.tv` | `36454` |
| Science | `Science.us@East` | `tvguide.com` | `9200019847` |
| Scream Factory TV | `ScreamFactoryTV.us@SD` | `plex.tv` | `6351991cccee3e1547a8831e` |
| ScreenPix | `ScreenPix.us@SD` | `tvtv.us` | `113001` |
| ScreenPix Action | `ScreenPixAction.us@SD` | `tvtv.us` | `113003` |
| ScreenPix Voices | `ScreenPixVoices.us@SD` | `tvtv.us` | `113004` |
| ScreenPix Westerns | `ScreenPixWesterns.us@SD` | `tvtv.us` | `113002` |
| Scripps News | `ScrippsNews.us@SD` | `tvpassport.com` | `scripps-news/5999` |
| SEC Network HD | `SECNetwork.us@SD` | `tvpassport.com` | `sec-network-hd/13712` |
| Shepherd's Chapel | `ShepherdsChapel.us@SD` | `tvtv.us` | `32518` |
| Shop LC | `ShopLC.us@SD` | `tvpassport.com` | `shop-lc/36273` |
| Shop LC (KAHC-LD4) Sacramento, CA | `KAHCLD434.us@SD` | `tvtv.us` | `100253` |
| Shop LC (KCNZ-CD6) San Francisco, CA | `KCNZCD286.us@SD` | `tvtv.us` | `106633` |
| Shop LC (KHIZ-LD5) Los Angeles, CA | `KHIZLD395.us@SD` | `tvtv.us` | `99758` |
| Shop LC (KHOU-DT2) Houston, TX | `KHOU392.us@SD` | `tvtv.us` | `45597` |
| Shop LC (KPHO-DT4) Arizona, PX | `KPHOTV54.us@SD` | `tvtv.us` | `116901` |
| Shop LC (KPNX-DT2) Arizona, PX | `KPNX612.us@SD` | `tvtv.us` | `49108` |
| Shop LC (KRON-TV5) San Francisco, CA | `KRONDT5.us@SD` | `tvtv.us` | `115446` |
| Shop LC (KSAO-DT5) Sacramento, CA | `KSAOLD495.us@SD` | `tvtv.us` | `77076` |
| Shop LC (KTVP-LD3) Phoenix, AZ | `KTVPLD233.us@SD` | `tvtv.us` | `16718` |
| Shop LC (KVMD-DT5) Twentynine Palms, CA | `KVMD315.us@SD` | `tvtv.us` | `67218` |
| Shop LC (KVPA-LD2) Phoenix, AZ | `KVPALD422.us@SD` | `tvtv.us` | `35811` |
| Shop LC (WACP-DT4) Atlantic City, NJ | `WACPDT4.us@SD` | `tvtv.us` | `98302` |
| Shop LC (WKOB-LD7) New York, NY | `WKOBLD7.us@SD` | `tvtv.us` | `113863` |
| Shop LC (WKYC-DT6) Cleveland, OH | `WKYC36.us@SD` | `tvtv.us` | `122046` |
| Shop LC (WUOA-LD6) Birmingham, AL | `WUOALD466.us@SD` | `tvtv.us` | `31754` |
| ShopHQ | `ShopHQ.us@SD` | `tvtv.us` | `14948` |
| ShopHQ (KCNS) San Francisco, CA | `KCNS501.us@HD` | `tvtv.us` | `31220` |
| SHOPHQ (KZMM-CD2) Fresno, CA | `KZMMCD222.us@SD` | `tvtv.us` | `93200` |
| Shout Factory TV | `ShoutFactoryTV.us@SD` | `tvtv.us` | `111132` |
| Showtime 2 - Eastern | `Showtime2.us@East` | `tvpassport.com` | `showtime-2--eastern/1387` |
| Showtime 2 - Pacific | `Showtime2.us@West` | `tvpassport.com` | `showtime-2--pacific/2596` |
| Showtime Extreme HD - Eastern | `ShowtimeExtreme.us@East` | `tvpassport.com` | `showtime-extreme-hd--eastern/7107` |
| Showtime Extreme HD - Pacific | `ShowtimeExtreme.us@West` | `tvpassport.com` | `showtime-extreme-hd--pacific/7569` |
| Showtime Family Zone - Pacific | `ShowtimeFamilyZone.us@West` | `tvpassport.com` | `showtime-family-zone--pacific/2599` |
| Showtime Family Zone HD - Eastern | `ShowtimeFamilyZone.us@East` | `tvpassport.com` | `showtime-family-zone-hd--eastern/7108` |
| Showtime Next HD - Eastern | `ShowtimeNext.us@East` | `tvpassport.com` | `showtime-next-hd--eastern/7109` |
| Showtime Next HD - Pacific | `ShowtimeNext.us@West` | `tvpassport.com` | `showtime-next-hd--pacific/20033` |
| SHOWTIME SHOWCASE | `ShowtimeShowcase.us@East` | `tvguide.com` | `9233003805` |
| Showtime Showcase West | `ShowtimeShowcase.us@West` | `tvtv.us` | `16584` |
| Showtime West | `Showtime.us@West` | `tvtv.us` | `11117` |
| Showtime Women - Eastern | `ShowtimeWomen.us@East` | `tvpassport.com` | `showtime-women--eastern/2273` |
| Showtime Women HD - Pacific | `ShowtimeWomen.us@West` | `tvpassport.com` | `showtime-women-hd--pacific/19982` |
| SHOxBET | `ShoxBet.us@East` | `tvguide.com` | `9233017018` |
| SHOxBET West | `ShoxBet.us@West` | `tvtv.us` | `20625` |
| SinoVision (WMBC-DT4) Newton, NJ | `WMBCTV634.us@SD` | `tvtv.us` | `55773` |
| SKWAD | `SKWAD.us@SD` | `plex.tv` | `5f12332eeca6a20040b328e5` |
| Sky Link TV | `SkyLinkTV.us@SD` | `tvtv.us` | `49492` |
| Sky Link TV (KXLA-DT3) Los Angeles, CA | `KXLA573.us@SD` | `tvtv.us` | `64656` |
| Slightly Off IFC | `SlightlyOffIFC.us@SD` | `plex.tv` | `5fc705eea2236e002d69f5ae` |
| Slopes TV | `SlopesTV.us@SD` | `distro.tv` | `42167` |
| Smart LifeStyle TV | `SmartLifeStyleTV.us@SD` | `tvtv.us` | `88293` |
| Smart Lifestyle TV (KPHE-DT5) Phoenix, AZ | `KPHELD445.us@SD` | `tvtv.us` | `35114` |
| Smile | `Smile.us@SD` | `tvpassport.com` | `smile/5275` |
| Smile (K14JS-DT6) Denver, CO | `K14JSD146.us@SD` | `tvtv.us` | `17834` |
| Smile (KTBN-TV3) Santa Ana, CA | `KTBNTV403.us@SD` | `tvtv.us` | `53389` |
| Smile (WKOI-DT5) Richmond, IN | `WKOIDT5.us@SD` | `tvtv.us` | `50106` |
| Smile (WSFG-DT3) Berry, AL | `W31FMD513.us@SD` | `tvtv.us` | `15613` |
| Smile (WSSF-LD3) Fayette, AL | `WSSFLD513.us@SD` | `tvtv.us` | `15614` |
| Smile TV | `SmileTV.us@SD` | `tvtv.us` | `49208` |
| Smithsonian | `SmithsonianChannel.us@East` | `tvguide.com` | `9233002112` |
| Smithsonian Channel Selects | `SmithsonianChannelSelects.us@SD` | `pluto.tv` | `5f21ea08007a49000762d349` |
| SNL Vault | `SNLVault.us@SD` | `plex.tv` | `5fc70600598c41002da3dd34` |
| So Yummy! | `SoYummy.us@SD` | `tvtv.us` | `115674` |
| So... Real | `SoReal.us@US` | `plex.tv` | `5f0ff262d71dcb00449ec012` |
| SonLife (KCNS-DT3) San Francisco, CA | `KCNS503.us@SD` | `tvtv.us` | `67071` |
| SonLife (KXLA-DT6) Los Angeles, CA | `KXLA576.us@SD` | `tvtv.us` | `64654` |
| SonLife (WKOB-LD5) New York, NY | `WKOBLD5.us@SD` | `tvtv.us` | `81776` |
| SonLife Broadcasting Network | `SBNTV.us@SD` | `tvtv.us` | `67676` |
| SonLife Network (KBTV-CA3) Sacramento, CA | `KBTVCD83.us@SD` | `tvtv.us` | `87900` |
| SonLife Network (KHDT-DT3) Denver, CO | `KHDTLD3.us@SD` | `tvtv.us` | `15453` |
| SonLife Network (KHSC-DT4) Fresno, CA | `KHSCLD354.us@SD` | `tvtv.us` | `101749` |
| SonLife Network (KSAO-DT6) Sacramento, CA | `KSAOLD496.us@SD` | `tvtv.us` | `100414` |
| SonLife Network (KYMB-LD5) Monterey, CA | `KYMBLD5.us@SD` | `tvtv.us` | `107655` |
| SonLife Network (KZMM-CD3) Fresno, CA | `KZMMCD223.us@SD` | `tvtv.us` | `93203` |
| SonLife Network (WUCB-DT4) Albany, NY | `WUCBLD324.us@SD` | `tvtv.us` | `17444` |
| Sony Movies | `SonyMovies.us@SD` | `tvtv.us` | `69091` |
| Sony SAB TV USA | `SonySABUSA.us@SD` | `tvtv.us` | `16030` |
| Spark TV Light & Love | `SparkTVLightLove.us@SD` | `plex.tv` | `614a11bfa6f839154ee3306d` |
| Spectrum OC16 | `SpectrumOC16.us@SD` | `tvtv.us` | `9581` |
| Spectrum SportsNet | `SpectrumSportsNet.us@SD` | `tvtv.us` | `77375` |
| Spectrum SportsNet LA | `SpectrumSportsNetLA.us@SD` | `tvtv.us` | `87023` |
| SPEEDVISION | `SPEEDVISION.us@SD` | `xumo.tv` | `100#99951268` |
| Spike Outdoors | `SpikeOutdoors.us@SD` | `pluto.tv` | `5c393cad2de254456f7ef8c2` |
| Spike Pluto TV | `SpikePlutoTV.us@SD` | `pluto.tv` | `5812bcc8237a6ff45d16c407` |
| Sports (KATU-DT2) Portland, OR | `KATU22.us@HD` | `tvpassport.com` | `metv-katu-dt2-portland-or/11770` |
| SportsGrid | `SportsGrid.us@SD` | `plex.tv` | `5ef11485d33ab9004048a1ca` |
| SportsGrid (KRON-DT3) San Francisco, CA | `KRONDT3.us@SD` | `tvtv.us` | `82660` |
| SportsGrid (WOOD-DT3) Grand Rapids, MI | `WOODTV83.us@SD` | `tvtv.us` | `20730` |
| Sportsman Channel | `SportsmanChannel.us@SD` | `tvtv.us` | `33930` |
| SportsNet New York | `SportsNetNewYork.us@SD` | `tvtv.us` | `49603` |
| SSTN (KHIZ-LD6) Los Angeles, CA | `KHIZLD396.us@SD` | `tvtv.us` | `99759` |
| SSTN (KMYA-DT2) Little Rock, AR | `KMYADT492.us@SD` | `tvtv.us` | `12465` |
| SSTN (KSKJ-DT2) Los Angeles, CA | `KSKJCD452.us@SD` | `tvtv.us` | `97135` |
| Stadium | `Stadium.us@SD` | `tvtv.us` | `104950` |
| Stadium (KBNT-CD3) San Diego, CA | `KBNTCD3.us@SD` | `tvtv.us` | `107576` |
| Stadium (KBVU-DT3) Eureka, CA | `KBVUDT4.us@SD` | `tvtv.us` | `110231` |
| Stadium (KCPQ-DT4) Seattle, WA | `KCPQ134.us@SD` | `tvtv.us` | `108236` |
| Stadium (KCVU-DT4) Chico, CA | `KCVU204.us@SD` | `tvtv.us` | `110233` |
| Stadium (KDNL-DT1) St Louis MO | `KDNLTV304.us@SD` | `tvtv.us` | `105675` |
| Stadium (KFPB-LD6) Globe, AZ | `KFPBLD316.us@SD` | `tvtv.us` | `16740` |
| Stadium (WLNY-DT3) New York, NY | `WLNYTV553.us@SD` | `tvtv.us` | `110888` |
| Stadium College Sports Atlantic | `StadiumCollegeSports.us@Atlantic` | `tvtv.us` | `26077` |
| Stadium College Sports Central | `StadiumCollegeSports.us@Central` | `tvtv.us` | `26078` |
| Stadium College Sports Pacific | `StadiumCollegeSports.us@Pacific` | `tvtv.us` | `26079` |
| Star Trek | `StarTrek.us@US` | `pluto.tv` | `5efbd39f8c4ce900075d7698` |
| Start TV | `StartTV.us@SD` | `tvtv.us` | `109454` |
| Start TV (KDKA-DT2) Pittsburgh, PA | `KDKATV22.us@SD` | `tvtv.us` | `92072` |
| Start TV (KNLC-DT6) St Louis MO | `KNLC246.us@SD` | `tvtv.us` | `109818` |
| Start TV (KOVR2) Sacramento, CA | `KOVR132.us@SD` | `tvtv.us` | `35423` |
| Start TV (KPIX-TV2) San Francisco, CA | `KPIXTV52.us@SD` | `tvtv.us` | `91800` |
| Start TV (KPRC-DT2) Houston TX | `KPRCTV22.us@SD` | `tvtv.us` | `40465` |
| Start TV (KUTP-DT5) Arizona, PX | `KUTP455.us@SD` | `tvtv.us` | `112713` |
| Start TV (KVBC-DT2) Reedley, CA | `KVBCLP2.us@SD` | `tvtv.us` | `88398` |
| Start TV (KYW-DT2) Philadelphia, PA | `KYWDT2.us@SD` | `tvtv.us` | `77056` |
| Start TV (WBZ-DT2) Boston, MA | `WBZDT2.us@SD` | `tvtv.us` | `91906` |
| Start TV (WCBS-DT2) New York, NY | `WCBSTV212.us@SD` | `tvtv.us` | `74916` |
| Start TV (WCCO-DT2) St Paul, MN | `WCCOTV42.us@SD` | `tvtv.us` | `92038` |
| Start TV (WFAA-DT2) Dallas, TX | `KTVT112.us@SD` | `tvtv.us` | `91694` |
| Start TV (WFMZ-DT2) Chicago, IL | `WBBMDT2.us@SD` | `tvtv.us` | `91649` |
| Start TV (WFOR-DT2) Miami, FL | `WFORTV42.us@SD` | `tvtv.us` | `92064` |
| Start TV (WLNY-DT4) New York, NY | `WLNYTV554.us@SD` | `tvtv.us` | `113297` |
| Start TV (WRAL-TV3) Raleigh, NC | `WRALTV53.us@SD` | `tvpassport.com` | `start-tv-wral-tv3-raleigh-nc/33861` |
| Start TV (WUPA-DT2) Atanta, GA | `WUPA692.us@SD` | `tvtv.us` | `92417` |
| Start TV (WWJ-DT2) Detroit, MI | `WWJDT2.us@SD` | `tvtv.us` | `42610` |
| Start TV(WUPA-DT5) Atanta, GA | `WUPA695.us@SD` | `tvtv.us` | `112373` |
| StartTV (WHCT-LD3) Hartford, CT | `WHCTLD353.us@SD` | `tvtv.us` | `116362` |
| STARZ Cinema | `StarzCinema.us@East` | `tvguide.com` | `9233008357` |
| Starz Cinema West | `StarzCinema.us@West` | `tvtv.us` | `19651` |
| Starz Comedy - Eastern | `StarzComedy.us@East` | `tvpassport.com` | `starz-comedy--eastern/4223` |
| Starz Comedy - Pacific | `StarzComedy.us@West` | `tvpassport.com` | `starz-comedy--pacific/4224` |
| Starz Edge - Eastern | `StarzEdge.us@East` | `tvpassport.com` | `starz-edge--eastern/2120` |
| Starz Edge - Pacific | `StarzEdge.us@West` | `tvpassport.com` | `starz-edge--pacific/2678` |
| Starz Encore Action HD - Eastern | `StarzEncoreAction.us@East` | `tvpassport.com` | `starz-encore-action-hd--eastern/10812` |
| Starz Encore Action HD - Pacific | `StarzEncoreAction.us@West` | `tvpassport.com` | `starz-encore-action-hd--pacific/10813` |
| Starz Encore Black HD - Eastern | `StarzEncoreBlack.us@East` | `tvpassport.com` | `starz-encore-black-hd--eastern/10814` |
| Starz Encore Black HD - Pacific | `StarzEncoreBlack.us@West` | `tvpassport.com` | `starz-encore-black-hd--pacific/10815` |
| STARZ ENCORE Classic | `StarzEncoreClassic.us@East` | `tvguide.com` | `9200003144` |
| Starz Encore Classic West | `StarzEncoreClassic.us@West` | `tvtv.us` | `17126` |
| STARZ ENCORE Español | `StarzEncoreSpanish.us@East` | `ontvtonight.com` | `us#69040329/starz-encore-espanol` |
| Starz Encore Family HD - Eastern | `StarzEncoreFamily.us@East` | `tvpassport.com` | `starz-encore-family-hd--eastern/11441` |
| Starz Encore Family HD - Pacific | `StarzEncoreFamily.us@West` | `tvpassport.com` | `starz-encore-family-hd--pacific/11442` |
| Starz Encore HD - Eastern | `StarzEncore.us@East` | `tvpassport.com` | `starz-encore-hd--eastern/6083` |
| Starz Encore HD - Pacific | `StarzEncore.us@West` | `tvpassport.com` | `starz-encore-hd--pacific/13464` |
| Starz Encore Suspense HD - Eastern | `StarzEncoreSuspense.us@East` | `tvpassport.com` | `starz-encore-suspense-hd--eastern/11437` |
| Starz Encore Suspense HD - Pacific | `StarzEncoreSuspense.us@West` | `tvpassport.com` | `starz-encore-suspense-hd--pacific/11438` |
| Starz Encore Westerns HD - Eastern | `StarzEncoreWesterns.us@East` | `tvpassport.com` | `starz-encore-westerns-hd--eastern/11439` |
| Starz Encore Westerns HD - Pacific | `StarzEncoreWesterns.us@West` | `tvpassport.com` | `starz-encore-westerns-hd--pacific/11440` |
| Starz HD - Eastern | `Starz.us@East` | `tvpassport.com` | `starz-hd--eastern/3388` |
| Starz HD - Pacific | `Starz.us@West` | `tvpassport.com` | `starz-hd--pacific/3389` |
| Starz In Black - Eastern | `StarzInBlack.us@East` | `tvpassport.com` | `starz-in-black--eastern/1957` |
| Starz In Black - Pacific | `StarzInBlack.us@West` | `tvpassport.com` | `starz-in-black--pacific/2679` |
| Starz Kids & Family - Eastern | `StarzKidsFamily.us@East` | `tvpassport.com` | `starz-kids--family--eastern/1194` |
| Starz Kids & Family - Pacific | `StarzKidsFamily.us@West` | `tvpassport.com` | `starz-kids--family--pacific/1219` |
| Stories by AMC | `StoriesbyAMC.us@SD` | `pluto.tv` | `5e8254118601b80007b4b7ae` |
| Story Television (KAZA-DT2) Avalon, CA | `KAZATV542.us@SD` | `tvtv.us` | `66282` |
| Story Television (WJLP-DT7) New York, NY | `WJLP337.us@SD` | `tvtv.us` | `120389` |
| Story Television (WZME-DT1) New York, NY | `WZME491.us@SD` | `tvtv.us` | `64008` |
| SundanceTV USA - East | `SundanceTV.us@East` | `tvpassport.com` | `sundancetv-usa--east/1848` |
| SundanceTV USA - West | `SundanceTV.us@West` | `tvpassport.com` | `sundancetv-usa--west/4169` |
| Surfer TV | `SurfNowTV.us@SD` | `plex.tv` | `6227c215c9f485cc7afe8c41` |
| Survivor | `Survivor.us@SD` | `pluto.tv` | `5f21e7b24744c60007c1f6fc` |
| Swerve Sports | `SwerveSports.us@SD` | `pluto.tv` | `683df56f5195c2a60a3f5559` |
| SWX Collage Sports (KHQ-DT2) Spokane, WA | `KHQDT2.us@SD` | `tvtv.us` | `33843` |
| Syfy HD - Eastern Feed | `Syfy.us@East` | `tvpassport.com` | `syfy-hd--eastern-feed/5643` |
| Syfy HD - Pacific Feed | `Syfy.us@West` | `tvpassport.com` | `syfy-hd--pacific-feed/5644` |
| Tai Shan TV (KVMD-DT10) Twentynine Palms, CA | `KVMDDT10.us@SD` | `tvtv.us` | `67227` |
| Tastemade | `Tastemade.us@US` | `tvtv.us` | `107076` |
| TBD (KIAH-DT4) Houston, TX | `KIAHDT4.us@SD` | `tvtv.us` | `106397` |
| TBD (WMBC-DT3) Newton, NJ | `WMBCDT3.us@SD` | `tvtv.us` | `55772` |
| TBD (WPSG-DT4) Philadelphia, PA | `WPSGDT4.us@SD` | `tvtv.us` | `110654` |
| TBD (WUCW-DT4) St Paul, MN | `WUCWDT4.us@SD` | `tvtv.us` | `99041` |
| TBD TV (KBCW-DT4) San Francisco, CA | `KBCWDT4.us@SD` | `tvtv.us` | `110386` |
| TBD TV (KBFX-DT2) Bakersfield, CA | `KBFXCD292.us@SD` | `tvtv.us` | `70178` |
| TBD TV (KFPB-LD7) Globe, AZ | `KFPBLD317.us@SD` | `tvtv.us` | `35118` |
| TBD TV (KFRE-TV3) Fresno, CA | `KFREDT3.us@SD` | `tvtv.us` | `76141` |
| TBD TV (KTXL-DT4) Sacramento, CA | `KTXL404.us@SD` | `tvtv.us` | `108521` |
| TBD. (KDNL-DT1) St Louis, MO | `KDNLTV302.us@SD` | `tvtv.us` | `69661` |
| TBD. (WGN-DT5) Chicago, IL | `WGNDT5.us@SD` | `tvtv.us` | `120897` |
| TBD. (WTLF3) Tallahassee, FL | `WTLF243.us@SD` | `tvtv.us` | `102330` |
| TBD. (WUTV2) Buffalo, NY | `WUTV292.us@SD` | `tvtv.us` | `42947` |
| TBN - Trinity Broadcasting Network - East | `TBN.us@East` | `tvpassport.com` | `tbn--trinity-broadcasting-network--east/1119` |
| TBN (KTBN) Los Angeles, CA | `KTBNTV401.us@HD` | `tvtv.us` | `52307` |
| TBN (WSSF-LD6) Fayette, AL | `WSSFLD516.us@SD` | `tvtv.us` | `15618` |
| TBN (WTBY) New York, NY | `WTBYTV541.us@HD` | `tvpassport.com` | `tbn-wtby-new-york-ny/2575` |
| TBN Inspire | `TBNInspire.us@SD` | `tvtv.us` | `122276` |
| TBS - East HD | `TBS.us@East` | `tvpassport.com` | `tbs--east-hd/6090` |
| TBS - Pacific HD | `TBS.us@West` | `tvpassport.com` | `tbs--pacific-hd/6231` |
| TCT (KAIL) Fresno, CA | `KAIL71.us@HD` | `tvtv.us` | `34443` |
| TCT (KTNC) San Francisco, CA | `KTNCTV501.us@HD` | `tvtv.us` | `34741` |
| Teen Mom | `TeenMom.us@SD` | `pluto.tv` | `6127e12ed140e900077e7b6f` |
| TeenNick | `TeenNick.us@East` | `tvguide.com` | `9200006974` |
| Telemax (KSDI) Fresno, CA | `KSDILD1.us@SD` | `tvtv.us` | `32976` |
| Telemundo - Eastern Feed | `Telemundo.us@East` | `tvpassport.com` | `telemundo--eastern-feed/1521` |
| Telemundo - Pacific Feed | `Telemundo.us@West` | `tvpassport.com` | `telemundo--pacific-feed/2013` |
| Telemundo (KCSO) Sacramento, CA | `KCSOLD331.us@HD` | `tvtv.us` | `73759` |
| Telemundo (KECY-DT4) El Centro, CA | `KECYTV94.us@HD` | `tvtv.us` | `67466` |
| Telemundo (KESQ-DT8) Palm Springs, CA | `KESQDT8.us@SD` | `tvtv.us` | `74853` |
| Telemundo (KKEY) Bakersfield, CA | `KKEYLP131.us@HD` | `tvtv.us` | `91869` |
| Telemundo (KMMW-LD) Stockton, CA | `KMMWLD1.us@SD` | `tvtv.us` | `87098` |
| Telemundo (KMUM-CD) Sacramento, CA | `KMUMCD331.us@HD` | `tvtv.us` | `100377` |
| Telemundo (KMUV) Monterey, CA | `KMUVLP1.us@SD` | `tvtv.us` | `48743` |
| Telemundo (KNSO) Fresno, CA | `KNSO511.us@HD` | `tvtv.us` | `31805` |
| Telemundo (KNTV-DT3) San Francisco, CA | `KNTV483.us@HD` | `tvtv.us` | `61388` |
| Telemundo (KNVN-DT2) Chico, CA | `KNVN242.us@HD` | `tvtv.us` | `80734` |
| Telemundo (KSPX-TV9) Sacramento, CA | `KSPXTV299.us@SD` | `tvtv.us` | `99582` |
| Telemundo (KSTS) San Jose, CA | `KSTS481.us@HD` | `tvtv.us` | `30460` |
| Telemundo (KTAS) Santa Barbara, CA | `KTAS331.us@HD` | `tvtv.us` | `31229` |
| Telemundo (KTMD-DT1) Houston, TX | `KTMD471.us@HD` | `tvtv.us` | `35517` |
| Telemundo (KUAN) San Diego, CA | `KUANLD481.us@HD` | `tvtv.us` | `107246` |
| Telemundo (KUNA) Palm Desert, CA | `KUNALP1.us@SD` | `tvtv.us` | `18094` |
| Telemundo (KVEA) Los Angeles, CA | `KVEA521.us@HD` | `tvpassport.com` | `telemundo-kvea-los-angeles-ca/2611` |
| Telemundo (KXTX-DT1) Dallas, TX | `KXTXTV391.us@HD` | `tvtv.us` | `20773` |
| Telemundo (WDNI-CD1) Indianapolis, IN | `WDNICD191.us@HD` | `tvtv.us` | `68610` |
| Telemundo (WNJU) Teterboro, NJ | `WNJU471.us@HD` | `tvpassport.com` | `telemundo-wnju-teterboro-nj/1772` |
| Telemundo (WQWQ-LP) Paducah, KY | `WQWQLP1.us@SD` | `tvpassport.com` | `cbs-wqwq-lp-paducah-ky/19437` |
| Telemundo (WRTD-LD5) Tuscaloosa, AL | `WRTDLD5.us@SD` | `tvtv.us` | `15611` |
| Telemundo (WSCV-DT1) Fort Lauderdale, FL | `WSCV61.us@HD` | `tvtv.us` | `34734` |
| Telemundo (WSCV-DT4) Fort Lauderdale, FL | `WSCV514.us@SD` | `tvtv.us` | `79548` |
| Telemundo (WSNS-DT1) Chicago, IL | `WSNSTV51.us@HD` | `tvtv.us` | `24521` |
| Telemundo (WSOC-DT2) Charlotte, NC | `WSOCTV92.us@HD` | `tvtv.us` | `45250` |
| Telemundo (WWSI-DT1) Philadelphia, PA | `WWSI621.us@HD` | `tvtv.us` | `25371` |
| Telemundo (WZDC-CD1) Washington, DC | `WZDCCD441.us@HD` | `tvtv.us` | `76363` |
| Telemundo (WZTD-LD) Richmond, KY | `WZTDLD451.us@HD` | `tvtv.us` | `78805` |
| Telemundo 31 (WTMO-CD1) Orlando, FL | `WTMOCD311.us@HD` | `tvtv.us` | `78613` |
| Telemundo al Dia | `TelemundoAlDia.us@HD` | `plex.tv` | `6478acb5c83f56da796f166f` |
| Telemundo telenovelas clásicas | `TelemundoTelenovelasClasicas.us@SD` | `pluto.tv` | `5cf96cc422df39f1a338d165` |
| Telemundp (WRC-DT4) Washington D.C. | `WRCDT4.us@SD` | `tvtv.us` | `106502` |
| Televisión Dominicana | `TelevisionDominicana.us@SD` | `tvtv.us` | `14996` |
| TeleXitos | `TeleXitos.us@SD` | `tvtv.us` | `74299` |
| TeleXitos (KASA-TV2) Albuquerque, NM | `KASATV22.us@SD` | `tvpassport.com` | `metv-kasa-tv2-albuquerque-nm/31483` |
| TeleXitos (KCSO-DT3) Sacramento, CA | `KCSOLD333.us@SD` | `tvtv.us` | `82445` |
| TeleXitos (KMBY-LD2) Monterey, CA | `KMBYLD272.us@SD` | `tvtv.us` | `71861` |
| TeleXitos (KNSO-DT2) Fresno, CA | `KNSO592.us@SD` | `tvtv.us` | `61747` |
| TeleXitos (KSTS-DT2) San Jose, CA | `KSTS482.us@SD` | `tvtv.us` | `43082` |
| Telexitos (KTMD-DT2) Houston, TX | `KTMD472.us@SD` | `tvtv.us` | `70961` |
| TeleXitos (KUAN-LD2) Poway, CA | `KUANLD482.us@SD` | `tvtv.us` | `107247` |
| TeleXitos (KVEA-DT2) Los Angeles, CA | `KVEADT2.us@SD` | `tvtv.us` | `64573` |
| TeleXitos (WNJU-DT2) New York, NY | `WNJU472.us@SD` | `tvtv.us` | `74578` |
| TeleXitos (WSCV-DT2) Fort Lauderdale, FL | `WSCV62.us@SD` | `tvtv.us` | `75502` |
| TeleXitos (WSNS-DT2) Chicago, IL | `WSNSTV52.us@SD` | `tvtv.us` | `67535` |
| TennisChannel 2 | `TennisChannel.us@Plus2` | `pluto.tv` | `681109b688b9d85d0938c6ba` |
| TG Junior | `TGJunior.us@SD` | `plex.tv` | `5f123330eca6a20040b328e8` |
| The Addams Family | `TheAddamsFamily.us@SD` | `pluto.tv` | `5d81607ab737153ea3c1c80e` |
| The Africa Channel | `TheAfricaChannel.us@SD` | `tvtv.us` | `47472` |
| The Amazing Race | `TheAmazingRace.us@SD` | `pluto.tv` | `5f21e8a6e2f12b000755afdb` |
| The Andy Griffith Show | `TheAndyGriffithShow.us@SD` | `pluto.tv` | `60f75178e7f8aa0007e9c259` |
| The Asylum | `Asylum.us@SD` | `plex.tv` | `6627ab12580825e8a7bc4f04` |
| The Asylum | `TheAsylum.us@US` | `xumo.tv` | `50#99991331` |
| The Bob Ross Channel | `TheBobRossChannel.us@SD` | `pluto.tv` | `5f36d726234ce10007784f2a` |
| The Bold and the Beautiful | `TheBoldtheBeautiful.us@UK` | `xumo.tv` | `350#99951476` |
| The Carol Burnett Show | `TheCarolBurnettShow.us@SD` | `tvtv.us` | `122609` |
| The Challenge | `TheChallenge.us@SD` | `pluto.tv` | `5d48685da7e9f476aa8a1888` |
| The Conners | `TheConners.us@SD` | `plex.tv` | `6668b7a5e4f56766e556a415` |
| The Cooking Channel HD | `CookingChannel.us@SD` | `tvpassport.com` | `the-cooking-channel-hd/8113` |
| The Country Network | `TheCountryNetwork.us@SD` | `tvtv.us` | `69639` |
| The Country Network (KFLA-LD2) Los Angeles, CA | `KFLALD82.us@SD` | `tvtv.us` | `59725` |
| The Country Network (KMSG-DT5) Fresno, CA | `KMSGLD395.us@SD` | `tvtv.us` | `88548` |
| The Country Network (KSAO-DT7) Sacramento, CA | `KSAOLD497.us@SD` | `tvtv.us` | `100415` |
| The Country Network (KYMB-LD6) Monterey, CA | `KYMBLD6.us@SD` | `tvtv.us` | `107656` |
| The Country Network (WDVB) Edison, NJ | `WDVBCD541.us@HD` | `tvpassport.com` | `the-country-network-wdvb-edison-nj/11067` |
| The Cowboy Channel | `TheCowboyChannel.us@SD` | `tvtv.us` | `80597` |
| The Cowboy Channel (WSFG-DT2) Berry, AL | `W31FMD512.us@SD` | `tvtv.us` | `15612` |
| The Cowboy Channel (WSSF-LD2) Fayette, AL | `WSSFLD512.us@SD` | `tvtv.us` | `15616` |
| The CW (WPCW-DT1) Pittsburgh, PA | `WPCWDT1.us@SD` | `tvtv.us` | `64020` |
| The Design Network | `TheDesignNetwork.us@SD` | `xumo.tv` | `200#99991390` |
| the Dot (WTTV-DT2) Indianapolis, IN | `WTTV42.us@SD` | `tvtv.us` | `50839` |
| The Family Channel | `TheFamilyChannel.us@East` | `tvtv.us` | `11156` |
| The Family Channel (WACP-DT6) Atlantic City, NJ | `WACP46.us@SD` | `tvtv.us` | `103862` |
| The FBI Files | `FBIFiles.us@UK` | `plex.tv` | `6582a024a90606db3c841b1b` |
| The First | `TheFirstTV.us@SD` | `tvtv.us` | `114934` |
| The Florida Channel (WFSU2) | `WFSUTV112.us@HD` | `tvtv.us` | `35389` |
| The Grio | `TheGrioTV.us@SD` | `tvtv.us` | `101752` |
| The Grio (KAIL-DT2) Fresno, CA | `KAIL72.us@SD` | `tvtv.us` | `59987` |
| The Grio (KICU-TV5) San Jose, CA | `KICUTV365.us@SD` | `tvtv.us` | `105295` |
| The Grio (KMMD-CD3) Salinas, CA | `KMMDCD393.us@HD` | `tvtv.us` | `107305` |
| The Grio (KTTV-DT3) Los Angeles, CA | `KTTV113.us@SD` | `tvtv.us` | `68615` |
| the Grio TV (KSAZ-DT3) Arizona, PX | `KSAZTV614.us@SD` | `tvtv.us` | `9750` |
| The Grio TV (WNYW-DT4) New York, NY | `WNYW54.us@SD` | `tvtv.us` | `97965` |
| The Grio TV (WSVN-DT2) Miami, FL | `WSVN72.us@HD` | `tvtv.us` | `61999` |
| the GrioTV (KTXH-DT4) Houston TX | `KTXHDT4.us@SD` | `tvtv.us` | `95562` |
| the GrioTV (WAGA-DT4) Atanta, GA | `WAGATV54.us@SD` | `tvtv.us` | `104952` |
| The GrioTV (WFLD-DT4) Chicago, IL | `WFLD324.us@SD` | `tvtv.us` | `108537` |
| The Griotv (WTXF-DT3) Philadelphia, PA | `WTXFTV573.us@SD` | `tvtv.us` | `82029` |
| The Jamie Oliver Channel | `TheJamieOliverChannel.us@SD` | `pluto.tv` | `64dab9df3d48f40008868091` |
| The Judge Judy Channel | `TheJudgeJudyChannel.us@SD` | `pluto.tv` | `6283d51144ad8f0007fa382d` |
| The Love Boat | `TheLoveBoat.us@SD` | `pluto.tv` | `5f7794a788d29000079d2f07` |
| The Movie | `TheMovieChannel.us@East` | `tvguide.com` | `9233015305` |
| The Movie Channel Extra West | `TheMovieChannelXtra.us@West` | `tvtv.us` | `17687` |
| The Movie Channel West | `TheMovieChannel.us@West` | `tvtv.us` | `12509` |
| The Movie Xtra | `TheMovieChannelXtra.us@East` | `tvguide.com` | `9233011536` |
| The Nest | `TheNest.us@SD` | `tvpassport.com` | `the-nest/14118` |
| The New Detectives | `TheNewDetectives.us@US` | `pluto.tv` | `5aea40b35126c2157123aa64` |
| The Ohio Channel (WVIZ-DT2) Cleveland, OH | `WVIZ252.us@SD` | `tvtv.us` | `46488` |
| The Pet Collective | `ThePetCollective.us@US` | `pluto.tv` | `5bb1ad55268cae539bcedb08` |
| The Price Is Right | `ThePriceIsRight.us@HD` | `pluto.tv` | `643f035d5a0cd50008361534` |
| The Price Is Right: The Barker Era | `ThePriceIsRightTheBarkerEra.us@SD` | `pluto.tv` | `5f7791b8372da90007fd45e6` |
| The Rifleman | `TheRifleman.us@SD` | `pluto.tv` | `5e825550e758c700077b0aef` |
| The Tennis Channel HD | `TennisChannel.us@SD` | `tvpassport.com` | `the-tennis-channel-hd/7051` |
| The Twilight Zone | `PlutoTVTheTwilightZone.us@SD` | `pluto.tv` | `67352ed93a61d4000881f9fa` |
| The U (WCIU-DT2) Chicago, IL | `WCIUTV262.us@HD` | `tvtv.us` | `36101` |
| The U (WMEU-CD1) Chicago, IL | `WMEUCD481.us@HD` | `tvtv.us` | `67657` |
| The Walk (KKPM-DT6) Chico, CA | `KKPMCD286.us@SD` | `tvtv.us` | `92487` |
| The Walking Dead en español | `TheWalkingDeadenEspanol.us@SD` | `pluto.tv` | `5e82bb378601b80007b4bd78` |
| The Walking Dead Universe | `TheWalkingDeadUniverse.us@SD` | `pluto.tv` | `62fa8176b9884200074ef5ae` |
| The Weather Channel HD | `TheWeatherChannel.us@SD` | `tvpassport.com` | `the-weather-channel-hd/5599` |
| The Word Network | `TheWordNetwork.us@SD` | `tvtv.us` | `21781` |
| THIS (K13AV) Denver, CO | `K13AVD5.us@SD` | `tvtv.us` | `17835` |
| THIS (KABC-TV3) Los Angeles, CA | `KABCTV73.us@SD` | `tvtv.us` | `42616` |
| THIS (KFPB-LD3) Globe, AZ | `KFPBLD313.us@SD` | `tvtv.us` | `35116` |
| THIS (KFSN-TV3) Fresno, CA | `KFSNTV303.us@SD` | `tvtv.us` | `40718` |
| THIS (KRET-DT2) Palm Springs, CA | `KRETCD452.us@SD` | `tvtv.us` | `102789` |
| THIS (KSAO-DT2) Sacramento, CA | `KSAOLD492.us@SD` | `tvtv.us` | `73234` |
| THIS (KYMB-LD2) Monterey, CA | `KYMBLD2.us@SD` | `tvtv.us` | `68642` |
| THIS (WBXZ-LP12) Buffalo, NY | `WBXZLP12.us@SD` | `tvtv.us` | `34243` |
| THIS (WYBN-LD3) Albany, NY | `WYBNLD143.us@SD` | `tvtv.us` | `17335` |
| This Old House | `ThisOldHouse.us@SD` | `pluto.tv` | `5d51e791b7dba3b2ae990ab2` |
| This TV | `ThisTV.us@SD` | `tvtv.us` | `61775` |
| This TV (KGO-DT3) San Francisco, CA | `KGODT3.us@SD` | `tvtv.us` | `49937` |
| This TV (KSDK-DT6) St Louis MO | `KSDK56.us@SD` | `tvtv.us` | `121438` |
| This TV (KTRK-DT3) Houston, TX | `KTRKTV133.us@SD` | `tvtv.us` | `44109` |
| This TV (KYW-DT3) Philadelphia, PA | `WPVITV63.us@SD` | `tvtv.us` | `43139` |
| This TV (WABC-DT3) New York, NY | `WABCTV73.us@SD` | `tvtv.us` | `50276` |
| This TV (WATL-DT2) Atlanta, GA | `WATL362.us@SD` | `tvtv.us` | `70568` |
| This TV (WLS-DT3) Chicago, IL | `WLSDT3.us@SD` | `tvtv.us` | `46236` |
| Three Angels (K08MM) Bakersfield, CA | `K08MMD1.us@SD` | `tvtv.us` | `103348` |
| Three Angels (K17JI) Fresno, CA | `K17JID121.us@HD` | `tvtv.us` | `84833` |
| Three Angels (K21DO) Palm Springs, CA | `K21DOD211.us@SD` | `tvtv.us` | `102713` |
| Three Angels (KKPM-CD) Chico, CA | `KKPMCD281.us@SD` | `tvtv.us` | `74891` |
| Three Angels (KLFB-LD) Salinas, CA | `KLFBLD221.us@SD` | `tvtv.us` | `78681` |
| Three Angels (KQRO-LD) Morgan Hill, CA | `KQROLD451.us@SD` | `tvtv.us` | `98229` |
| Three Angels (KSKJ-DT5) Los Angeles, CA | `KSKJCD455.us@SD` | `tvtv.us` | `97175` |
| Three Angels (KURK-LD3) San Francisco, CA | `KURKLD33.us@HD` | `tvtv.us` | `109750` |
| Three Angels (W34EY-D6) Huntsville, AL | `W34EYD386.us@SD` | `tvtv.us` | `36311` |
| Three Angels Broadcasting Network | `3ABNEnglish.us@SD` | `tvpassport.com` | `three-angels-broadcasting-network/19066` |
| Three's Company | `ThreesCompany.us@SD` | `pluto.tv` | `5ef3977e5d773400077de284` |
| ThrillerMax | `ThrillerMax.us@East` | `tvguide.com` | `9200000856` |
| ThrillerMax West | `ThrillerMax.us@West` | `tvtv.us` | `18436` |
| Timeless/Infomercials (WTVE-DT2) Reading, PA | `WTVE512.us@SD` | `tvtv.us` | `78908` |
| Tiny House Nation | `TinyHouseNation.us@SD` | `pluto.tv` | `601a0342dcf4370007566891` |
| TLC USA HD - Eastern | `TLC.us@East` | `tvpassport.com` | `tlc-usa-hd--eastern/5004` |
| TLC USA HD - Pacific | `TLC.us@West` | `tvpassport.com` | `tlc-usa-hd--pacific/13492` |
| TLN (KQRO-LD4) Morgan Hill, CA | `KQROLD454.us@SD` | `tvtv.us` | `98267` |
| TMZ | `TMZ.us@SD` | `plex.tv` | `63e2ca44203bafbef831a152` |
| TNA Wrestling | `IMPACTWrestling.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBB1000001XP` |
| TNT - Eastern Feed | `TNT.us@East` | `tvpassport.com` | `tnt--eastern-feed/347` |
| TNT - Pacific Feed | `TNT.us@West` | `tvpassport.com` | `tnt--pacific-feed/2252` |
| TODAY All Day | `TODAYAllDay.us@SD` | `pluto.tv` | `5d695f7db53adf96b78e7ce3` |
| Toku | `Toku.us@SD` | `tvtv.us` | `50914` |
| Toon Goggles | `ToonGoggles.us@SD` | `plex.tv` | `5f170d60b898490041b49359` |
| TOTALLY TURTLES | `TotallyTurtles.us@US` | `pluto.tv` | `5d0c16d686454ead733d08f8` |
| Trailer Park Boys: The SwearNet Show | `TrailerParkBoysTheSwearNetShow.us@SD` | `plex.tv` | `6348b2cb1159f6a5ce819b89` |
| Travel | `TravelChannel.us@East` | `tvguide.com` | `9233000035` |
| Tribeca Channel | `TribecaChannel.us@SD` | `plex.tv` | `60ede94f7da2ef002c55ce9b` |
| True Crime Network | `TrueCrimeNetwork.us@SD` | `tvtv.us` | `91496` |
| True Crime Network (KARE-DT3) St Paul, MN | `KARE113.us@SD` | `tvtv.us` | `91454` |
| True Crime Network (KDTV-CD5) San Francisco, CA | `KDTVCD285.us@SD` | `tvtv.us` | `111737` |
| True Crime Network (KFMB-TV4) San Diego, CA | `KFMBTV84.us@SD` | `tvtv.us` | `114211` |
| True Crime Network (KFSF-DT5) Vallejo, CA | `KFSFDT665.us@SD` | `tvtv.us` | `105668` |
| True Crime Network (KHOU-DT3) Houston, TX | `KHOU113.us@SD` | `tvtv.us` | `45598` |
| True Crime Network (KING-DT2) Seattle, WA | `KINGTV52.us@SD` | `tvtv.us` | `46081` |
| True Crime Network (KMEX-DT4) Los Angeles, CA | `KMEXDT344.us@SD` | `tvtv.us` | `100352` |
| True Crime Network (KPNX-DT3) Arizona, PX | `KPNX123.us@SD` | `tvtv.us` | `91543` |
| True Crime Network (KPSN-LD3) Payson, AZ | `KPSNLD3.us@SD` | `tvtv.us` | `31257` |
| True Crime Network (KSDK-DT3) St Louis MO | `KSDK53.us@SD` | `tvtv.us` | `91518` |
| True Crime Network (KVBC-DT5) Reedley, CA | `KVBCLP5.us@SD` | `tvtv.us` | `88401` |
| True Crime Network (KXTV-DT2) Sacramento, CA | `KXTV102.us@SD` | `tvtv.us` | `35360` |
| True Crime Network (WCTV5) Tallahassee, FL | `WCTV65.us@SD` | `tvtv.us` | `118313` |
| True Crime Network (WFAA-DT3) Dallas, TX | `WFAA83.us@SD` | `tvtv.us` | `52785` |
| True Crime Network (WFUT-DT2) New York, NY | `WFUTDT682.us@SD` | `tvtv.us` | `67228` |
| True Crime Network (WGBO-DT4) Chicago, IL | `WGBODT664.us@SD` | `tvtv.us` | `105328` |
| True Crime Network (WGRZ3) Buffalo, NY | `WGRZ493.us@SD` | `tvtv.us` | `64270` |
| True Crime Network (WKYC-DT2) Cleveland, OH | `WKYC32.us@SD` | `tvtv.us` | `42697` |
| True Crime Network (WMGM-DT1) Wildwood, PA | `WMGMTV481.us@HD` | `tvtv.us` | `44920` |
| True Crime Network (WTHR-DT4) Indianapolis, IN | `WTHR134.us@SD` | `tvtv.us` | `116940` |
| True Crime Network (WUSA-DT2) Washington D.C. | `WUSA92.us@SD` | `tvtv.us` | `47155` |
| True Crime Network (WWBT-DT5) Richmond, KY | `WWBT125.us@SD` | `tvtv.us` | `114161` |
| True Crime Now | `TrueCrimeNow.us@SD` | `plex.tv` | `61ae679103baf19077bbf933` |
| True History Channel | `TrueHistory.us@SD` | `xumo.tv` | `300#99991650` |
| True Real (KSTP-DT5) St Paul, MN | `KSTPDT5.us@SD` | `tvtv.us` | `73508` |
| TrueReal (KKPX-TV6) San Francisco, CA | `KKPXTV656.us@SD` | `tvtv.us` | `89279` |
| TrueReal (KPPX-DT6) Arizona, PX | `KPPXTV516.us@SD` | `tvtv.us` | `83482` |
| TrueReal (KPXN-TV4) Los Angeles, CA | `KPXNTV304.us@SD` | `tvtv.us` | `49819` |
| TrueReal (KSPX-TV6) Sacramento, CA | `KSPXTV296.us@SD` | `tvtv.us` | `83529` |
| TrueReal (WINP-DT6) Pittsburgh, PA | `WINPTV166.us@SD` | `tvtv.us` | `90854` |
| Truereal (WPPX-DT4) Philadelphia, PA | `WPPXTV614.us@SD` | `tvtv.us` | `43977` |
| TrueReal (WPXN-DT6) New York, NY | `WPXNTV316.us@SD` | `tvtv.us` | `83518` |
| TrueReal (WSFL-DT4) Miami, FL | `WSFLTV394.us@SD` | `tvtv.us` | `70585` |
| truTV USA - East HD | `truTV.us@East` | `tvpassport.com` | `trutv-usa--east-hd/6996` |
| truTV USA - Pacific HD | `truTV.us@West` | `tvpassport.com` | `trutv-usa--pacific-hd/18808` |
| TUDN | `TUDN.us@SD` | `tvtv.us` | `77033` |
| Turner Classic Movies USA | `TCM.us@East` | `tvpassport.com` | `turner-classic-movies-usa/176` |
| TV 64 (WAXN-DT1) Kannapolis, NC | `WAXNTV91.us@HD` | `tvtv.us` | `30908` |
| TV Guide | `TVGuide.us@SD` | `tvtv.us` | `14781` |
| TV Guide (KVHF-LD) Fresno, CA | `KVHFLD41.us@HD` | `tvtv.us` | `89259` |
| TV Land - Eastern HD | `TVLand.us@East` | `tvpassport.com` | `tv-land--eastern-hd/8815` |
| TV Land - Pacific HD | `TVLand.us@West` | `tvpassport.com` | `tv-land--pacific-hd/16223` |
| TV Land Drama | `TVLandDrama.us@SD` | `pluto.tv` | `5d40bebc5e3d2750a2239d7e` |
| TV Land Sitcoms | `TVLandSitcoms.us@SD` | `pluto.tv` | `61bd0b57872c650008ed2e38` |
| TV One | `TVOne.us@SD` | `tvpassport.com` | `tv-one/2287` |
| TV27 (WRDQ-DT1) Orlando, FL | `WRDQ271.us@HD` | `tvtv.us` | `31505` |
| TVE51/Infomercials (WTVE-DT1) Reading, PA | `WTVE511.us@HD` | `tvtv.us` | `34796` |
| TVK2 | `tvK2.us@SD` | `tvtv.us` | `66157` |
| Twist (KFSF-DT6) San Francisco, CA | `KFSFDT666.us@SD` | `tvtv.us` | `118944` |
| Twist (KHOU-DT4) Houston, TX | `KHOU394.us@SD` | `tvtv.us` | `106947` |
| Twist (KING-DT4) Seattle, WA | `KINGTV54.us@SD` | `tvtv.us` | `121196` |
| Twist (KPNX-DT5) Arizona, PX | `KPNX125.us@SD` | `tvtv.us` | `118820` |
| Twist (KSDK-DT5) St Louis MO | `KSDK55.us@SD` | `tvtv.us` | `118887` |
| Twist (KXTV5) Sacramento, CA | `KXTV105.us@SD` | `tvtv.us` | `118846` |
| Twist (WGRZ5) Buffalo, NY | `WGRZ25.us@SD` | `tvtv.us` | `119032` |
| Twist (WISH-DT3) Indianapolis, IN | `WISHTV83.us@SD` | `tvtv.us` | `25527` |
| Twist (WKYC-DT5) Cleveland, OH | `WKYC35.us@SD` | `tvtv.us` | `118839` |
| Twist (WUSA-DT4) Washington D.C. | `WUSA94.us@SD` | `tvtv.us` | `118858` |
| Twist (WXTV-DT3) NY | `WXTVDT683.us@SD` | `tvtv.us` | `91913` |
| TYT Network | `TYTNetwork.us@SD` | `tvtv.us` | `107478` |
| Ultra Familia | `UltraFamilia.us@SD` | `tvtv.us` | `80149` |
| Unbeaten | `Unbeaten.us@SD` | `plex.tv` | `67f45ef989089d917e1b1634` |
| UNI (KBNT) San Diego, CA | `KBNTCD171.us@HD` | `tvtv.us` | `68070` |
| UNI (KDTV-CD) Santa Rosa, CA | `KDTVCD281.us@HD` | `tvtv.us` | `111733` |
| UNI (KDTV) San Francisco, CA | `KDTVDT261.us@HD` | `tvtv.us` | `42617` |
| UNI (KEUV) Eureka, CA | `KEUVLP1.us@SD` | `tvtv.us` | `114098` |
| UNI (KEVC) Indio, CA | `KEVCCD51.us@HD` | `tvtv.us` | `98379` |
| UNI (KEZT) Stockton, CA | `KEZTCD231.us@HD` | `tvtv.us` | `95861` |
| UNI (KFSF-DT2) San Francisco, CA | `KFSFDT662.us@HD` | `tvtv.us` | `55589` |
| UNI (KFTU-DT2) Douglas, AZ | `KFTUDT32.us@HD` | `tvtv.us` | `31457` |
| UNI (KFTV) Fresno, CA | `KFTVDT211.us@HD` | `tvtv.us` | `33815` |
| UNI (KMEX) Los Angeles, CA | `KMEXDT341.us@HD` | `tvpassport.com` | `uni-kmex-los-angeles-ca/2602` |
| UNI (KPMR) Santa Barbara, CA | `KPMR381.us@HD` | `tvtv.us` | `43021` |
| UNI (KSMS) Monterey, CA | `KSMSTV671.us@HD` | `tvtv.us` | `63089` |
| UNI (KTFF-DT2) Porterville, CA | `KTFFDT612.us@HD` | `tvtv.us` | `35978` |
| UNI (KUCO) Chico, CA | `KUCOLP1.us@SD` | `tvtv.us` | `41891` |
| UNI (KUVI-DT2) Bakersfield, CA | `KUVIDT452.us@HD` | `tvtv.us` | `91921` |
| UNI (KUVS) Modesto, CA | `KUVSDT191.us@HD` | `tvtv.us` | `34150` |
| UNI (KVES) Palm Springs, CA | `KVESLD1.us@SD` | `tvtv.us` | `72568` |
| UNI (WXTV) Teaneck, NJ | `WXTVDT681.us@HD` | `tvpassport.com` | `uni-wxtv-teaneck-nj/1771` |
| Unidentified | `Unidentified.us@SD` | `plex.tv` | `6227d1d2c9f485cc7afe8c44` |
| UniMas (K15HJ-D) Ridgecrest, CA | `K15HJD461.us@HD` | `tvtv.us` | `63944` |
| UniMas (KAKW-DT2) Austin, TX | `KAKWDT622.us@HD` | `tvtv.us` | `65933` |
| UniMás (KBTF) Bakersfield, CA | `KBTFCD311.us@HD` | `tvtv.us` | `65518` |
| UniMás (KDJT) Monterey, CA | `KDJTCD671.us@HD` | `tvtv.us` | `95983` |
| UniMás (KDTF) San Diego, CA | `KDTFLD361.us@HD` | `tvtv.us` | `67983` |
| UniMás (KDTV-CD2) San Francisco, CA | `KDTVCD282.us@HD` | `tvtv.us` | `111734` |
| UniMás (KEVC-DT2) Santa Barbara, CA | `KEVCCD2.us@SD` | `tvtv.us` | `107475` |
| UniMás (KEXT) Modesto, CA | `KEXTCD1.us@SD` | `tvtv.us` | `96386` |
| UniMás (KFSF) San Francisco, CA | `KFSFDT661.us@HD` | `tvtv.us` | `42586` |
| UniMás (KFTR) Ontario, CA | `KFTRDT461.us@HD` | `tvtv.us` | `53123` |
| UniMás (KFTR) Ontario, CA | `KMEXDT342.us@SD` | `tvpassport.com` | `unimas-kftr-ontario-ca/11261` |
| UniMás (KKTF-LD) Chico, CA | `KKTFLD301.us@SD` | `tvtv.us` | `69262` |
| UniMás (KPMR-DT2) Santa Barbara, CA | `KPMRDT2.us@SD` | `tvtv.us` | `65903` |
| UniMás (KSMS-DT2) Monterey, CA | `KSMSDT2.us@SD` | `tvtv.us` | `67536` |
| UniMas (KSTR-DT1) Dallas, TX | `KSTRDT491.us@HD` | `tvtv.us` | `27421` |
| UniMas (KTFF-LD) Fresno, CA | `KTFFLD411.us@HD` | `tvtv.us` | `89544` |
| UniMás (KTFF) Porterville, CA | `KTFFDT611.us@HD` | `tvtv.us` | `35976` |
| UniMás (KTFK) Sacramento, CA | `KTFKDT641.us@HD` | `tvtv.us` | `52309` |
| UniMás (KTSB-DT2) Santa Barbara, CA | `KTSBCD2.us@SD` | `tvtv.us` | `99061` |
| UniMás (KTSB) Santa Barbara, CA | `KTSBCD351.us@HD` | `tvtv.us` | `99060` |
| UniMás (KUVI-DT3) Bakersfield, CA | `KUVIDT453.us@HD` | `tvtv.us` | `92139` |
| UniMás (KUVS-DT2) Sacramento, CA | `KUVSDT642.us@HD` | `tvtv.us` | `34152` |
| Unimas (KXLN-DT2) Houston, TX | `KXLNDT452.us@HD` | `tvtv.us` | `67464` |
| Unimas (WFPA-CD1) Philadelphia, PA | `WFPACD281.us@HD` | `tvtv.us` | `95894` |
| UniMás (WFTY) Smithtown, NY | `WFTYDT671.us@SD` | `tvpassport.com` | `unimas-wfty-smithtown-ny/1961` |
| UniMás (WFUT) New York, NY | `WFUTDT681.us@HD` | `tvpassport.com` | `unimas-wfut-new-york-ny/1776` |
| UniMás 29 (WRCF-CD1) Orlando, FL | `WRCFCD291.us@HD` | `tvtv.us` | `83296` |
| UniMás Este | `UniMas.us@East` | `tvtv.us` | `29058` |
| Unimas West (National Feed) | `UniMas.us@West` | `tvtv.us` | `31541` |
| Universal Crime | `UniversalCrime.us@East` | `pluto.tv` | `6549341853fc9700083901ac` |
| Universal Kids (Off-Air) | `UniversalKids.us@East` | `tvguide.com` | `9233003660` |
| Univision - Eastern Feed HD | `Univision.us@East` | `tvpassport.com` | `univision--eastern-feed-hd/8136` |
| Univision - Pacific Feed HD | `Univision.us@West` | `tvpassport.com` | `univision--pacific-feed-hd/8137` |
| Univision (KUVN-DT1) Dallas, TX | `KUVNDT491.us@HD` | `tvtv.us` | `113569` |
| Univision (KXLN-DT1) Houston, TX | `KXLNDT451.us@HD` | `tvtv.us` | `35653` |
| Univision (WGBO-DT1) Chicago, IL | `WGBODT661.us@HD` | `tvtv.us` | `42635` |
| Univision (WUVN-DT1) Hartford, CT | `WUVN471.us@HD` | `tvtv.us` | `54447` |
| Univision 43 (WVEN-DT1) Orlando, FL | `WVENTV431.us@HD` | `tvtv.us` | `34579` |
| Univision Tlnovelas | `UnivisionTlnovelas.us@SD` | `tvtv.us` | `74550` |
| Unsolved Mysteries | `UnsolvedMysteries.us@UK` | `plex.tv` | `6449369eb3ff17382cae5816` |
| Unsolved Mysteries | `UnsolvedMysteries.us@US` | `pluto.tv` | `5b4e96a0423e067bd6df6901` |
| UP | `UpTV.us@SD` | `tvpassport.com` | `up/5911` |
| US Armenia (KIIO-LD) Los Angeles, CA | `KIIOLD101.us@HD` | `tvtv.us` | `73580` |
| USA | `USANetwork.us@East` | `tvguide.com` | `9233004106` |
| USA Network West | `USANetwork.us@West` | `tvtv.us` | `11208` |
| USA Today | `USATODAY.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBB1500001GD` |
| VBS (KJLA-DT6) Los Angeles, CA | `KJLA576.us@SD` | `tvtv.us` | `64838` |
| Vevo '70s | `Vevo70s.us@SD` | `pluto.tv` | `5f32f26bcd8aea00071240e5` |
| Vevo '80s | `Vevo80s.us@SD` | `pluto.tv` | `5fd7b8bf927e090007685853` |
| Vevo '90s | `Vevo90s.us@SD` | `pluto.tv` | `5fd7bb1f86d94a000796e2c2` |
| Vevo 2K | `Vevo2K.us@SD` | `pluto.tv` | `5fd7bca3e0a4ee0007a38e8c` |
| Vevo Country | `VevoCountry.us@SD` | `pluto.tv` | `5da0d75e84830900098a1ea0` |
| Vevo Hip-Hop | `VevoHipHop.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBC3600002EK` |
| Vevo Latino | `VevoLatino.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBC3600015GF` |
| Vevo Pop | `VevoPop.us@SD` | `pluto.tv` | `5d93b635b43dd1a399b39eee` |
| Vevo R&B | `VevoRB.us@SD` | `pluto.tv` | `5da0d83f66c9700009b96d0e` |
| VGNTV (KDOC-DT5) Los Angeles, CA | `KDOCTV565.us@SD` | `tvtv.us` | `83053` |
| VH1 HD - Eastern | `VH1.us@East` | `tvpassport.com` | `vh1-hd--eastern/6204` |
| VH1 HD - Pacific Feed | `VH1.us@West` | `tvpassport.com` | `vh1-hd--pacific-feed/16234` |
| VICE | `VICETV.us@SD` | `tvguide.com` | `9233002242` |
| Vice News | `ViceNews.us@SD` | `plex.tv` | `635ff8bb66f96b46951ab7f3` |
| ViendoMovies | `ViendoMovies.us@SD` | `tvtv.us` | `52208` |
| Viet Today TV (KTSF-DT5) San Francisco, CA | `KTSF265.us@SD` | `tvtv.us` | `70623` |
| Vision Latina (KCYM-LD) Des Moines, IA | `KCYMLD441.us@SD` | `tvpassport.com` | `newsmax-tv-kcym-ld-des-moines-ia/26376` |
| Vme Kids | `VmeKids.us@SD` | `tvtv.us` | `70830` |
| VSiN | `VSiN.us@SD` | `tvtv.us` | `108970` |
| WACP4 (WACP-DT1) Atlantic City, NJ | `WACP41.us@HD` | `tvtv.us` | `75909` |
| WAMI HDTV UniMás 69 | `WAMIDT691.us@HD` | `ontvtonight.com` | `us#69025362/wami-hdtv-unimas-69` |
| Wanted: Dead or Alive | `WantedDeadorAlive.us@SD` | `plex.tv` | `61ddcc6023daf618ed44c29f` |
| Watch it Kid | `WatchitKID.us@SD` | `plex.tv` | `621672612c2627c068e73ad6` |
| Watchit Scream! | `WatchitScream.us@SD` | `distro.tv` | `42168` |
| WaypointTV | `WaypointTV.us@SD` | `xumo.tv` | `50#99991358` |
| WBIQDT | `WBIQ101.us@HD` | `i.mjh.nz` | `PBS/all#WBIQ` |
| WBNX-TV 55 (WBNX-DT1) Akron, OH | `WBNXTV551.us@HD` | `tvtv.us` | `55926` |
| WBRADT | `WBRATV151.us@HD` | `i.mjh.nz` | `PBS/all#WBRA` |
| WBRE Rewind TV | `WBRETV283.us@SD` | `ontvtonight.com` | `us#4042599682/wbre-rewind-tv` |
| WCBBDT | `WCBB101.us@HD` | `i.mjh.nz` | `PBS/all#WCBB` |
| WCETDT | `WCET541.us@HD` | `i.mjh.nz` | `PBS/all#WCET` |
| WCFEDT | `WCFETV571.us@HD` | `i.mjh.nz` | `PBS/all#WCFE` |
| WCTEDT | `WCTE221.us@HD` | `i.mjh.nz` | `PBS/all#WCTE` |
| WDSEDT | `WDSE81.us@HD` | `i.mjh.nz` | `PBS/all#WDSE` |
| WE (Women's Entertainment) - Eastern | `WeTV.us@East` | `tvpassport.com` | `we-womens-entertainment--eastern/664` |
| WE (Women's Entertainment) - Pacific | `WeTV.us@West` | `tvpassport.com` | `we-womens-entertainment--pacific/4171` |
| WEAODT | `WEAO491.us@HD` | `i.mjh.nz` | `PBS/all#WEAO` |
| Weather (KPSN-LD2) Payson, AZ | `KPSNLD2.us@SD` | `tvtv.us` | `31466` |
| Weather on the 15s (WPDE-DT4) Florence, SC | `WPDETV154.us@SD` | `tvtv.us` | `103850` |
| WeatherNation | `WeatherNation.us@SD` | `tvpassport.com` | `weathernation/13501` |
| WeatherSpy | `WeatherSpy.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAJ3400014LK` |
| WEDUDT | `WEDU31.us@HD` | `i.mjh.nz` | `PBS/all#WEDU` |
| Weeds & Nurse Jackie | `WeedsNurseJackie.us` | `plex.tv` | `66915d35086cb6d46eae12c8` |
| Weeds & Nurse Jackie | `WeedsNurseJackie.us@SD` | `xumo.tv` | `150#99951535` |
| WEFS (WEFS-DT1) Cocoa, FL | `WEFS681.us@HD` | `tvtv.us` | `42521` |
| WEIQDT | `WEIQ421.us@HD` | `i.mjh.nz` | `PBS/all#WEIQ` |
| WEIUDT | `WEIUTV511.us@HD` | `i.mjh.nz` | `PBS/all#WEIU` |
| Wendy Williams | `TheWendyWilliamsShow.us@SD` | `plex.tv` | `685f0f5c593aba51f211823b` |
| WENHDT | `WENHTV111.us@HD` | `i.mjh.nz` | `PBS/all#WENH` |
| WETA UK (WETA-DT2) Washington D.C. | `WETATV262.us@HD` | `tvtv.us` | `21526` |
| WETPDT | `WETPTV21.us@HD` | `i.mjh.nz` | `PBS/all#WETP` |
| WFDC HDTV Univision 14 | `WFDCDT501.us@HD` | `ontvtonight.com` | `us#69033219/wfdc-hdtv-univision-14` |
| WFMZ Weathers (WFMZ-DT2) Allentown, PA | `WFMZTV692.us@SD` | `tvtv.us` | `35859` |
| WFMZ-Allentown, PA HD | `WFMZTV691.us@HD` | `tvpassport.com` | `wfmz-allentown-pa-hd/7787` |
| WFWADT | `WFWA391.us@HD` | `i.mjh.nz` | `PBS/all#WFWA` |
| WGBHDT | `WGBHTV441.us@HD` | `i.mjh.nz` | `PBS/all#WGBH` |
| WGBYDT | `WGBYTV571.us@HD` | `i.mjh.nz` | `PBS/all#WGBY` |
| WGCUDT | `WGCU301.us@HD` | `i.mjh.nz` | `PBS/all#WGCU` |
| WGN9 (WGN-DT1) Chicago, IL | `WGNDT1.us@SD` | `tvtv.us` | `20455` |
| WGPX Court TV | `WGPXTV163.us@SD` | `ontvtonight.com` | `us#69028903/wgpx-court-tv` |
| WHDH Boston, MA | `WHDH71.us@HD` | `tvpassport.com` | `whdh-boston-ma/135` |
| WHPR TV Detroit Live (WHPS-CD2) Highland Park, MI | `WHPSCD152.us@SD` | `tvtv.us` | `99581` |
| WHRODT | `WHROTV151.us@HD` | `i.mjh.nz` | `PBS/all#WHRO` |
| Wild 'N Out | `WildNOut.us@SD` | `pluto.tv` | `5d48678d34ceb37d3c458a55` |
| WILLDT | `WILLTV121.us@HD` | `i.mjh.nz` | `PBS/all#WILL` |
| Willow | `Willow.us@SD` | `tvtv.us` | `68605` |
| Willow Sports | `WillowSports.us@SD` | `plex.tv` | `66fbf9cf128ab3f65b259bcb` |
| WILM-TV10 (WILM-LD) Wilmington, NC | `WILMLD101.us@HD` | `tvtv.us` | `48638` |
| Wine, Watches & Whiskey | `WineWatchesWhiskey.us@HD` | `distro.tv` | `144408` |
| WIPBDT | `WIPB491.us@HD` | `i.mjh.nz` | `PBS/all#WIPB` |
| WipeoutXtra | `WipeoutXtra.us@SD` | `plex.tv` | `6515fb621fc969615e69d16e` |
| WITFDT | `WITFTV431.us@HD` | `i.mjh.nz` | `PBS/all#WITF` |
| WJCTDT | `WJCT71.us@HD` | `i.mjh.nz` | `PBS/all#WJCT` |
| WKLEDT | `WKLE461.us@HD` | `i.mjh.nz` | `PBS/all#WKLE` |
| WKNODT | `WKNO101.us@HD` | `i.mjh.nz` | `PBS/all#WKNO` |
| WKYUDT | `WKYUTV241.us@HD` | `i.mjh.nz` | `PBS/all#WKYU` |
| WLJTDT | `WLJT111.us@HD` | `i.mjh.nz` | `PBS/all#WLJT` |
| WLNY TV10/55, Riverhead, NY | `WLNYTV551.us@HD` | `tvpassport.com` | `wlny-tv1055-riverhead-ny/9574` |
| WLPBDT | `WLPBTV271.us@HD` | `i.mjh.nz` | `PBS/all#WLPB` |
| WLRNDT | `WLRNTV171.us@HD` | `i.mjh.nz` | `PBS/all#WLRN` |
| WLTV HDTV Univision 23 | `WLTVDT231.us@HD` | `ontvtonight.com` | `us#69025393/wltv-hdtv-univision-23` |
| WMBC (WMBC-DT1) Newton, NJ | `WMBCTV631.us@HD` | `tvtv.us` | `35911` |
| WMCN44/ShopHQ (WMCN-DT1) Princeton, NJ | `WMCNTV441.us@HD` | `tvtv.us` | `11976` |
| WMHTDT | `WMHT171.us@HD` | `i.mjh.nz` | `PBS/all#WMHT` |
| WMPBDT | `WMPB671.us@HD` | `i.mjh.nz` | `PBS/all#WMPB` |
| WMPNDT | `WMPNTV291.us@HD` | `i.mjh.nz` | `PBS/all#WMPN` |
| WMVSDT | `WMVS361.us@HD` | `i.mjh.nz` | `PBS/all#WMVS` |
| WMYD Detroit, MI | `WMYD71.us@HD` | `tvpassport.com` | `mnt-wmyd-detroit-mi/269` |
| WNEODT | `WNEO451.us@HD` | `i.mjh.nz` | `PBS/all#WNEO` |
| WNINDT | `WNIN91.us@HD` | `i.mjh.nz` | `PBS/all#WNIN` |
| WNITDT | `WNIT341.us@HD` | `i.mjh.nz` | `PBS/all#WNIT` |
| WNPTDT | `WNPT81.us@HD` | `i.mjh.nz` | `PBS/all#WNPT` |
| WOLF Charge | `WOLFTV564.us@SD` | `ontvtonight.com` | `us#9951079803/wolf-charge` |
| Women's Sports Network | `WomensSportsNetwork.us@SD` | `pluto.tv` | `686d8dd294a028da3ac59566` |
| World (KERA-DT4) Dallas, TX | `KERATV134.us@SD` | `tvtv.us` | `119445` |
| World (KLRU-DT3) Austin, TX | `KLRU183.us@SD` | `tvtv.us` | `35504` |
| World (WRLK-DT3) Columbia, SC | `WRLKTV353.us@SD` | `tvtv.us` | `33854` |
| World Channel (KMTP-TV2) San Francisco, CA | `KMTPTV502.us@HD` | `tvtv.us` | `61386` |
| World Harvest (K14JS-DT2) Denver, CO | `K14JSD142.us@SD` | `tvtv.us` | `17830` |
| World Harvest TV | `WorldHarvestTV.us@SD` | `tvtv.us` | `11514` |
| World Poker Tour | `WorldPokerTour.us@US` | `tvtv.us` | `113372` |
| WOSC (WTLW-DT2) Findlay, OH | `WTLWDT2.us@SD` | `tvtv.us` | `61124` |
| WOSUDT | `WOSUTV341.us@HD` | `i.mjh.nz` | `PBS/all#WOSU` |
| WOUBDT | `WOUBTV201.us@HD` | `i.mjh.nz` | `PBS/all#WOUB` |
| WPIX New York (SUPERSTATION) HD | `WPIX71.us@HD` | `tvpassport.com` | `wpix-new-york-superstation-hd/4794` |
| WPIX QVC | `WPIXDT5.us@SD` | `ontvtonight.com` | `us#11551192637/wpix-qvc` |
| WPNEDT | `WPNETV381.us@HD` | `i.mjh.nz` | `PBS/all#WPNE` |
| WPTDDT | `WPTD161.us@HD` | `i.mjh.nz` | `PBS/all#WPTD` |
| WQED Showcase (WQED-DT4) Pittsburgh, PA | `WQED134.us@SD` | `tvtv.us` | `73776` |
| WQHS HDTV Univision 61 | `WQHSDT611.us@HD` | `ontvtonight.com` | `us#69025394/wqhs-hdtv-univision-61` |
| WQLNDT | `WQLN541.us@HD` | `i.mjh.nz` | `PBS/all#WQLN` |
| WQMY HDTV | `WQMY531.us@SD` | `ontvtonight.com` | `us#69032979/wqmy-hdtv` |
| WQPTDT | `WQPTTV241.us@HD` | `i.mjh.nz` | `PBS/all#WQPT` |
| WQPX Bounce | `WQPXTV642.us@SD` | `ontvtonight.com` | `us#69028993/wqpx-bounce` |
| WQPX Court TV | `WQPXTV643.us@SD` | `ontvtonight.com` | `us#69028994/wqpx-court-tv` |
| WQPX Grit | `WQPXTV644.us@SD` | `ontvtonight.com` | `us#368523426/wqpx-grit` |
| WQPX HDTV | `WQPXTV641.us@HD` | `ontvtonight.com` | `us#69025498/wqpx-hdtv` |
| WRNN/ShopHQ (WRNN-DT1) New Rochelle, NY | `WRNNTV91.us@HD` | `tvtv.us` | `101453` |
| WRPTDT | `WRPT311.us@HD` | `i.mjh.nz` | `PBS/all#WRPT` |
| WSIUDT | `WSIUTV81.us@HD` | `i.mjh.nz` | `PBS/all#WSIU` |
| WSKGDT | `WSKGTV461.us@HD` | `i.mjh.nz` | `PBS/all#WSKG` |
| WSREDT | `WSRE231.us@HD` | `i.mjh.nz` | `PBS/all#WSRE` |
| WSWB Comet TV | `WSWB383.us@SD` | `ontvtonight.com` | `us#1970644081/wswb-comet-tv` |
| WSWB HDTV | `WSWB381.us@HD` | `ontvtonight.com` | `us#69030209/wswb-hdtv` |
| WTCIDT | `WTCI451.us@HD` | `i.mjh.nz` | `PBS/all#WTCI` |
| WTIC True Crime Network | `WTICTV614.us@SD` | `ontvtonight.com` | `us#5654205407/wtic-true-crime-network` |
| WTIUDT | `WTIU301.us@HD` | `i.mjh.nz` | `PBS/all#WTIU` |
| WTNH Rewind TV | `WTNH82.us@SD` | `ontvtonight.com` | `us#69025719/wtnh-rewind-tv` |
| WTTW Prime (WTTW-DT2) Chicago, IL | `WTTW112.us@HD` | `tvtv.us` | `36111` |
| WTV (KMTP-TV4) San Francisco, CA | `KMTPTV504.us@SD` | `tvtv.us` | `61387` |
| WTVIDT | `WTVI421.us@HD` | `i.mjh.nz` | `PBS/all#WTVI` |
| WTVPDT | `WTVP471.us@HD` | `i.mjh.nz` | `PBS/all#WTVP` |
| WTXF Buzzr TV | `WTXFTV294.us@SD` | `ontvtonight.com` | `us#1700273212/wtxf-buzzr-tv` |
| Wu Tang Collection | `WuTangCollection.us@SD` | `plex.tv` | `5eea605474085f0040ddc770` |
| WUCFDT | `WUCFTV451.us@HD` | `i.mjh.nz` | `PBS/all#WUCF` |
| WUFTDT | `WUFT51.us@HD` | `i.mjh.nz` | `PBS/all#WUFT` |
| WUNI HDTV Univision 27 | `WUNI661.us@HD` | `ontvtonight.com` | `us#69032511/wuni-hdtv-univision-27` |
| WUTF HDTV | `WUTFTV271.us@HD` | `ontvtonight.com` | `us#69022276/wutf-hdtv` |
| WUVC HDTV Univision 40 | `WUVCDT401.us@HD` | `ontvtonight.com` | `us#69033127/wuvc-hdtv-univision-40` |
| WUVG HDTV Univision 34 | `WUVGDT341.us@HD` | `ontvtonight.com` | `us#69025368/wuvg-hdtv-univision-34` |
| WUVP HDTV Univision 65 | `WUVPDT651.us@HD` | `ontvtonight.com` | `us#69033133/wuvp-hdtv-univision-65` |
| WVEA Univision 62 | `WVEATV501.us@HD` | `ontvtonight.com` | `us#69034237/wvea-univision-62` |
| WVIA HDTV | `WVIATV441.us@HD` | `ontvtonight.com` | `us#69050073/wvia-hdtv` |
| WVIADT2 PBS Kids | `WVIATV442.us@SD` | `ontvtonight.com` | `us#69028822/wviadt2-pbs-kids` |
| WVPBDT | `WVPBTV331.us@HD` | `i.mjh.nz` | `PBS/all#WVPB` |
| WVUTDT | `WVUT221.us@HD` | `i.mjh.nz` | `PBS/all#WVUT` |
| WXELDT | `WXELTV421.us@HD` | `i.mjh.nz` | `PBS/all#WXEL` |
| WXFT HDTV UniMás 60 | `WXFTDT71.us@HD` | `ontvtonight.com` | `us#69025371/wxft-hdtv-unimas-60` |
| WXXA-TV4 | `WXXATV234.us@SD` | `tvtv.us` | `34871` |
| WYESDT | `WYESTV321.us@HD` | `i.mjh.nz` | `PBS/all#WYES` |
| WYINDT | `WYIN561.us@HD` | `i.mjh.nz` | `PBS/all#WYIN` |
| WYOU COZI TV | `WYOU224.us@SD` | `ontvtonight.com` | `us#5739936960/wyou-cozi-tv` |
| WYOU ION Mystery | `WYOU222.us@SD` | `ontvtonight.com` | `us#4044136931/wyou-ion-mystery` |
| XFC TV | `XFCTV.us@SD` | `plex.tv` | `621670feab2095ca85353ad4` |
| XITE 90s Throwback | `XITE90sThrowback.us@SD` | `plex.tv` | `6889430a3b7708975e7c07e3` |
| XITE Celebrates | `XITECelebrates.us@SD` | `plex.tv` | `68894a9267ddc0ef2cdbf503` |
| XITE Hip-Hop Evolution | `XITEHipHopEvolution.us@SD` | `plex.tv` | `68894b6e10df0c242e4136cc` |
| XITE Nuevo Latino | `XITENuevoLatino.us@SD` | `plex.tv` | `6889479e67ddc0ef2cdbf501` |
| XITE R&B Feels | `XITERBFeels.us@SD` | `plex.tv` | `68800c6c4033a6a442ad923b` |
| XITE Rap Game | `XITERapGame.us@SD` | `plex.tv` | `68800b694033a6a442ad9239` |
| XITE Siempre Latino | `XITESiempreLatino.us@SD` | `plex.tv` | `68800a594033a6a442ad9237` |
| Xplore | `XploreTV.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USBC2100008DP` |
| Xtreme Outdoor Presented by HISTORY | `SkillsPlusThrills.us@SD` | `i.mjh.nz` | `SamsungTVPlus/us#USAK3508706A` |
| Xumo Free Westerns | `XumoFreeWesterns.us@SD` | `xumo.tv` | `0#99991397` |
| YES Network | `YesNetwork.us@SD` | `tvpassport.com` | `yes-network/1953` |
| YES2 Overflow | `YES2Overflow.us@SD` | `tvtv.us` | `17279` |
| Yo! MTV | `YoMTV.us@SD` | `pluto.tv` | `5d14fc31252d35decbc4080b` |
| YouToo America (WBCF-LD2) Florence, AL | `WBCFLD2.us@SD` | `tvtv.us` | `31473` |
| Yu-Gi-Oh! | `YuGiOh.us@SD` | `pluto.tv` | `5f4ec10ed9636f00089b8c89` |
| YurView California | `YurViewCalifornia.us@SD` | `tvtv.us` | `10078` |
| Z Nation | `ZNation.us@SD` | `plex.tv` | `66ce3e009ac0b1441b19ca29` |
| Zee TV USA | `ZeeTVUSA.us@SD` | `tvtv.us` | `33377` |
| ZWTV (KJLA-DT9) Los Angeles, CA | `KJLA579.us@SD` | `tvtv.us` | `65628` |

## Upstream EPG tools

This repository is still a fork of [iptv-org/epg](https://github.com/iptv-org/epg). The sections below are the original grab tools.

## Table of contents

- ✨ [Installation](#installation)
- 🚀 [Usage](#usage)
- 💫 [Update](#update)
- 🐋 [Docker](#docker)
- 📅 [Guides](#guides)
- 🗄 [Database](#database)
- 👨‍💻 [API](#api)
- 📚 [Resources](#resources)
- 💬 [Discussions](#discussions)
- 🛠 [Contribution](#contribution)
- 📄 [License](#license)

## Installation

First, you need to install [Node.js](https://nodejs.org/en) on your computer. You will also need to install [Git](https://git-scm.com/downloads) to follow these instructions.

After that open the [Console](https://en.wikipedia.org/wiki/Windows_Console) (or [Terminal](<https://en.wikipedia.org/wiki/Terminal_(macOS)>) if you have macOS) and type the following command:

```sh
git clone --depth 1 -b master https://github.com/iptv-org/epg.git
```

This will copy all the code from the repository to your computer into the `epg` folder. After that, we just need to go to the folder we created:

```sh
cd epg
```

And install all the dependencies:

```sh
npm install
```

## Usage

To start the download of the guide, select one of the supported sites from [SITES.md](SITES.md) file and paste its name into the command below:

```sh
npm run grab --- --sites=example.com
```

Then run it and wait for the guide to finish downloading. When finished, a new `guide.xml` file will appear in the current directory.

You can also customize the behavior of the script using this options:

```sh
Usage: npm run grab --- [options]

Options:
  -s, --sites <names>           A comma-separated list of the sites to parse
  -c, --channels <path>         Path to *.channels.xml file (required if the "--sites" attribute is
                                not specified)
  -o, --output <path>           Path to output file (default: "guide.xml")
  -l, --lang <codes>            Allows you to restrict downloading to channels in specified languages only (example: "en,id")
  -t, --timeout <milliseconds>  Timeout for each request in milliseconds (default: 30000)
  -d, --delay <milliseconds>    Delay between request in milliseconds (default: 0)
  -x, --proxy <url>             Use the specified proxy (example: "socks5://username:password@127.0.0.1:1234")
  --days <days>                 Number of days for which the program will be loaded (defaults to the value from the site config)
  --maxConnections <number>     Number of concurrent requests (default: 1)
  --gzip [path]                 Specifies whether or not to create a compressed version of the guide (default: false)
  --json [path]                 Specifies whether or not to create a JSON version of the guide (default: false)
  --curl                        Display each request as CURL (default: false)
```

### Downloading from multiple sites at once

To do this, simply list the site names separated by commas:

```sh
npm run grab --- --sites=example1.com,example2.com
```

To avoid mixing guides from different sites into a single output file, we can also automatically split the output into separate files based on the site name:

```sh
npm run grab --- --sites=example1.com,example2.com --output=guides/{site}.xml
```

### Parallel downloading

By default, the guide for each channel is downloaded one by one, but you can change this behavior by increasing the number of simultaneous requests using the `--maxConnections` attribute:

```sh
npm run grab --- --sites=example.com --maxConnections=10
```

But be aware that under heavy load some sites may start return an error or completely block your access.

### Use custom channel list

Create an XML file and copy the descriptions of all the channels you need from the [/sites](sites) into it:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<channels>
  <channel site="arirang.com" lang="en" xmltv_id="ArirangTV.kr" site_id="CH_K">Arirang TV</channel>
  ...
</channels>
```

And then specify the path to that file via the `--channels` attribute:

```sh
npm run grab --- --channels=path/to/custom.channels.xml
```

### Run on schedule

If you want to download guides on a schedule, you can use [cron](https://en.wikipedia.org/wiki/Cron) or any other task scheduler. Currently, we use a tool called [chronos](https://github.com/freearhey/chronos) for this purpose.

To start it, you only need to specify the necessary `grab` command and [cron expression](https://crontab.guru/):

```sh
npx chronos --execute="npm run grab --- --sites=example.com" --pattern="0 0,12 * * *" --log
```

For more info go to [chronos](https://github.com/freearhey/chronos) documentation.

### Access the guide by URL

You can make the guide available via URL by running your own server. The easiest way to do this is to run this command:

```sh
npx serve
```

After that, the guide will be available at the link:

```
http://localhost:3000/guide.xml
```

In addition it will be available to other devices on the same local network at the address:

```
http://<your_local_ip_address>:3000/guide.xml
```

For more info go to [serve](https://github.com/vercel/serve) documentation.

## Update

If you have downloaded the repository code according to the instructions above, then to update it will be enough to run the command:

```sh
git pull
```

And then update all the dependencies:

```sh
npm install
```

## Docker

### Pull an image

```sh
docker pull ghcr.io/iptv-org/epg:master
```

### Create and run container

```sh
docker run -p 3000:3000 -v /path/to/channels.xml:/epg/public/channels.xml ghcr.io/iptv-org/epg:master
```

By default, the guide will be downloaded every day at 00:00 UTC and saved to the `/epg/public/guide.xml` file inside the container.

From the outside, it will be available at this link:

```
http://localhost:3000/guide.xml
```

or

```
http://<your_local_ip_address>:3000/guide.xml
```

### Environment Variables

To fine-tune the execution, you can pass environment variables to the container as follows:

```sh
docker run \
-p 5000:3000 \
-v /path/to/channels.xml:/epg/public/channels.xml \
-e CRON_SCHEDULE="0 0,12 * * *" \
-e MAX_CONNECTIONS=10 \
-e GZIP=true \
-e JSON=true \
-e CURL=true \
-e PROXY="socks5://127.0.0.1:1234" \
-e DAYS=14 \
-e TIMEOUT=5 \
-e DELAY=2 \
-e RUN_AT_STARTUP=true \
ghcr.io/iptv-org/epg:master
```

| Variable        | Description                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| CRON_SCHEDULE   | A [cron expression](https://crontab.guru/) describing the schedule of the guide loadings (default: "0 0 \* \* \*") |
| MAX_CONNECTIONS | Limit on the number of concurrent requests (default: 1)                                                            |
| GZIP            | Boolean value indicating whether to create a compressed version of the guide (default: false)                      |
| JSON            | Boolean value indicating whether to create a JSON version of the guide (default: false)                            |
| CURL            | Display each request as CURL (default: false)                                                                      |
| PROXY           | Use the specified proxy                                                                                            |
| DAYS            | Number of days for which the guide will be loaded (defaults to the value from the site config)                     |
| TIMEOUT         | Timeout for each request in milliseconds (default: 30000)                                                          |
| DELAY           | Delay between request in milliseconds (default: 0)                                                                 |
| RUN_AT_STARTUP  | Run grab on container startup (default: true)                                                                      |

## Guides

Any user can share the guides they have created with the rest of the community. A complete list of these guides and their current status can be found in the [GUIDES.md](GUIDES.md) file.

## Database

All channel data is taken from the [iptv-org/database](https://github.com/iptv-org/database) repository. If you find any errors please open a new [issue](https://github.com/iptv-org/database/issues) there.

## API

The API documentation can be found in the [iptv-org/api](https://github.com/iptv-org/api) repository.

## Resources

Links to other useful IPTV-related resources can be found in the [iptv-org/awesome-iptv](https://github.com/iptv-org/awesome-iptv) repository.

## Discussions

If you have a question or an idea, you can post it in the [Discussions](https://github.com/orgs/iptv-org/discussions) tab.

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/iptv-org/epg/blob/master/CONTRIBUTING.md) before sending [issue](https://github.com/iptv-org/epg/issues) or a [pull request](https://github.com/iptv-org/epg/pulls).

And thank you to everyone who has already contributed!

### Backers

<a href="https://opencollective.com/iptv-org"><img src="https://opencollective.com/iptv-org/backers.svg?width=890" /></a>

### Contributors

<a href="https://github.com/iptv-org/epg/graphs/contributors"><img src="https://opencollective.com/iptv-org/contributors.svg?width=890" /></a>

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](LICENSE)
