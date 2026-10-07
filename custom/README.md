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

1399 USA channels from `tvpassport.com`. One row is one unique XMLTV id in [`usa.channels.xml`](usa.channels.xml). East or HD is used when the same id has more than one listing. The XMLTV id is what players map against.

| Channel | XMLTV id | TVPassport site id |
| --- | --- | --- |
| ABC - Central | `ABC.us@Central` | `abc--central/9910` |
| ABC - Eastern | `ABC.us@East` | `abc--eastern/1224` |
| ABC - Mountain | `ABC.us@Mountain` | `abc--mountain/9911` |
| ABC - Pacific | `ABC.us@West` | `abc--pacific/4407` |
| ABC (K20JL-D) Ellensburg, WA | `K20JLD351.us@HD` | `abc-k20jl-d-ellensburg-wa/15132` |
| ABC (K30FN) Mankato, MN | `K30FND1.us@SD` | `abc-k30fn-mankato-mn/4617` |
| ABC (K45FZ) Lewiston, ID | `K45FZD1.us@SD` | `abc-k45fz-lewiston-id/7253` |
| ABC (KAAL) Austin, MN HD | `KAAL61.us@HD` | `abc-kaal-austin-mn-hd/7869` |
| ABC (KABC) Los Angeles, CA HD | `KABCTV71.us@HD` | `abc-kabc-los-angeles-ca-hd/4552` |
| ABC (KABY) Aberdeen, SD HD | `KABYDT1.us@SD` | `abc-kaby-aberdeen-sd-hd/6650` |
| ABC (KAEF) Eureka, CA HD | `KAEFTV231.us@HD` | `abc-kaef-eureka-ca-hd/17104` |
| ABC (KAIT) Jonesboro, AR HD | `KAIT81.us@HD` | `abc-kait-jonesboro-ar-hd/7873` |
| ABC (KAKE) Wichita, KS HD | `KAKE101.us@HD` | `abc-kake-wichita-ks-hd/5753` |
| ABC (KAMC) Lubbock, TX HD | `KAMC281.us@HD` | `abc-kamc-lubbock-tx-hd/6146` |
| ABC (KAPP) Yakima, WA HD | `KAPP351.us@HD` | `abc-kapp-yakima-wa-hd/7984` |
| ABC (KATC) Lafayette, LA HD | `KATC31.us@HD` | `abc-katc-lafayette-la-hd/5779` |
| ABC (KATN) Fairbanks, AK HD | `KATN21.us@HD` | `abc-katn-fairbanks-ak-hd/6641` |
| ABC (KATU) Portland, OR HD | `KATU321.us@HD` | `abc-katu-portland-or-hd/3727` |
| ABC (KATV) Little Rock, AR HD | `KATV71.us@HD` | `abc-katv-little-rock-ar-hd/5745` |
| ABC (KAVU) Victoria, TX HD | `KAVUTV251.us@HD` | `abc-kavu-victoria-tx-hd/6642` |
| ABC (KBMT) Beaumont, TX HD | `KBMT121.us@HD` | `abc-kbmt-beaumont-tx-hd/6643` |
| ABC (KBMY) Bismarck, ND HD | `KBMY171.us@HD` | `abc-kbmy-bismarck-nd-hd/8335` |
| ABC (KCAU) Sioux City, IA HD | `KCAUTV91.us@HD` | `abc-kcau-sioux-city-ia-hd/4648` |
| ABC (KCRG) Cedar Rapids, IA HD | `KCRGTV91.us@HD` | `abc-kcrg-cedar-rapids-ia-hd/5761` |
| ABC (KDKF) Klamath Falls, OR HD | `KDKF311.us@HD` | `abc-kdkf-klamath-falls-or-hd/7964` |
| ABC (KDNL) St. Louis. MO HD | `KDNLTV301.us@HD` | `abc-kdnl-st-louis-mo-hd/5726` |
| ABC (KDRV) Medford - Klamath Falls, OR HD | `KDRV121.us@HD` | `abc-kdrv-medford--klamath-falls-or-hd/5806` |
| ABC (KECY-DT2) Yuma, AZ HD | `KECYTV92.us@HD` | `abc-kecy-dt2-yuma-az-hd/6646` |
| ABC (KERO) Bakersfield, CA HD | `KEROTV231.us@HD` | `abc-kero-bakersfield-ca-hd/5781` |
| ABC (KESQ) Palm Springs, CA HD | `KESQTV421.us@HD` | `abc-kesq-palm-springs-ca-hd/4933` |
| ABC (KETV) Omaha, NE HD | `KETV71.us@HD` | `abc-ketv-omaha-ne-hd/4739` |
| ABC (KEYT) Santa Barbara, CA HD | `KEYTTV31.us@HD` | `abc-keyt-santa-barbara-ca-hd/6647` |
| ABC (KEZI) Eugene, OR HD | `KEZI91.us@HD` | `abc-kezi-eugene-or-hd/5776` |
| ABC (KFBB) Great Falls, MT HD | `KFBBTV51.us@HD` | `abc-kfbb-great-falls-mt-hd/8927` |
| ABC (KFSN) Fresno, CA HD | `KFSNTV301.us@HD` | `abc-kfsn-fresno-ca-hd/5744` |
| ABC (KGBD-LD) Great Bend, KS | `KGBDLD301.us@HD` | `abc-kgbd-ld-great-bend-ks/29192` |
| ABC (KGO) San Francisco, CA HD | `KGODT1.us@SD` | `abc-kgo-san-francisco-ca-hd/5716` |
| ABC (KGTV) San Diego, CA HD | `KGTV101.us@HD` | `abc-kgtv-san-diego-ca-hd/5729` |
| ABC (KGUN) Tucson, AZ HD | `KGUNTV91.us@HD` | `abc-kgun-tucson-az-hd/5754` |
| ABC (KGWC-DT2) Casper, WY | `KGWCTV142.us@SD` | `abc-kgwc-dt2-casper-wy/18578` |
| ABC (KHBB) Helena, MT HD | `KHBBLD211.us@HD` | `abc-khbb-helena-mt-hd/8928` |
| ABC (KHBS) Ft. Smith, AR HD | `KHBS401.us@HD` | `abc-khbs-ft-smith-ar-hd/5766` |
| ABC (KHDS-LP) Salina, KS | `KHDSLD291.us@HD` | `abc-khds-lp-salina-ks/8149` |
| ABC (KHGI) Kearney, NE HD | `KHGITV131.us@HD` | `abc-khgi-kearney-ne-hd/7686` |
| ABC (KHOG) Fayetteville, AR HD | `KHOGTV291.us@HD` | `abc-khog-fayetteville-ar-hd/8093` |
| ABC (KHQA-DT2) Quincy, MO HD | `KHQATV72.us@HD` | `abc-khqa-dt2-quincy-mo-hd/8014` |
| ABC (KHSD) Lead, SD HD | `KHSDTV71.us@HD` | `abc-khsd-lead-sd-hd/8333` |
| ABC (KHVO) Hilo, HI | `KHVO41.us@HD` | `abc-khvo-hilo-hi/26236` |
| ABC (KIFI) Idaho Falls, ID HD | `KIFITV81.us@HD` | `abc-kifi-idaho-falls-id-hd/6648` |
| ABC (KIII) Corpus Christi, TX HD | `KIII31.us@HD` | `abc-kiii-corpus-christi-tx-hd/6649` |
| ABC (KITV) Honolulu, HL HD | `KITV41.us@HD` | `abc-kitv-honolulu-hl-hd/7672` |
| ABC (KIVI) Boise, ID | `KIVITV61.us@HD` | `abc-kivi-boise-id/3397` |
| ABC (KJCT) Grand Junction, CO HD | `KJCTLP1.us@SD` | `abc-kjct-grand-junction-co-hd/9470` |
| ABC (KJUD) Juneau, AK HD | `KJUD81.us@HD` | `abc-kjud-juneau-ak-hd/9471` |
| ABC (KKTQ) Cheyenne, WY HD | `KKTQLD1.us@SD` | `abc-kktq-cheyenne-wy-hd/9472` |
| ABC (KLAX) Alexandria, LA HD | `KLAXTV311.us@HD` | `abc-klax-alexandria-la-hd/9473` |
| ABC (KLBY) Colby, KS | `KLBY41.us@HD` | `abc-klby-colby-ks/1584` |
| ABC (KLKN) Lincoln, NE HD | `KLKN81.us@HD` | `abc-klkn-lincoln-ne-hd/5489` |
| ABC (KLTV) Tyler, TX HD | `KLTV71.us@HD` | `abc-kltv-tyler-tx-hd/9474` |
| ABC (KMAU) Wailuku, HI | `KMAU41.us@HD` | `abc-kmau-wailuku-hi/30057` |
| ABC (KMBC) Kansas City, MO HD | `KMBCTV91.us@HD` | `abc-kmbc-kansas-city-mo-hd/8877` |
| ABC (KMCY) Minot, ND HD | `KMCY141.us@HD` | `abc-kmcy-minot-nd-hd/8318` |
| ABC (KMGH) Denver, CO HD | `KMGHTV71.us@HD` | `abc-kmgh-denver-co-hd/5723` |
| ABC (KMID) Midland, TX HD | `KMID21.us@HD` | `abc-kmid-midland-tx-hd/7999` |
| ABC (KMIZ) Columbia, MO HD | `KMIZ171.us@HD` | `abc-kmiz-columbia-mo-hd/5786` |
| ABC (KMNZ-LD) Coeur D'Alene, ID | `K31QKD41.us@HD` | `abc-kmnz-ld-coeur-dalene-id/25478` |
| ABC (KNEP) Scottsbluff, NE HD | `KNEPDT1.us@SD` | `abc-knep-scottsbluff-ne-hd/8608` |
| ABC (KNXV) Phoenix, AZ HD | `KNXVTV611.us@HD` | `abc-knxv-phoenix-az-hd/5721` |
| ABC (KOAT) Albuquerque, NM HD | `KOATTV71.us@HD` | `abc-koat-albuquerque-nm-hd/5739` |
| ABC (KOCO) Oklahoma City, OK HD | `KOCOTV51.us@HD` | `abc-koco-oklahoma-city-ok-hd/5738` |
| ABC (KODE) Joplin, MO HD | `KODETV121.us@HD` | `abc-kode-joplin-mo-hd/8139` |
| ABC (KOHD) Bend, OR HD | `KOHD181.us@HD` | `abc-kohd-bend-or-hd/8223` |
| ABC (KOLO) Reno, NV HD | `KOLOTV81.us@HD` | `abc-kolo-reno-nv-hd/5770` |
| ABC (KOMO) Seattle, WA HD | `KOMOTV511.us@HD` | `abc-komo-seattle-wa-hd/2829` |
| ABC (KOTA) Rapid City, SD HD | `KOTATV71.us@HD` | `abc-kota-rapid-city-sd-hd/5791` |
| ABC (KPOB) Poplar Bluff, MO | `KPOBTV151.us@HD` | `abc-kpob-poplar-bluff-mo/2718` |
| ABC (KPRY) Pierre, SD HD | `KPRYTV461.us@HD` | `abc-kpry-pierre-sd-hd/6651` |
| ABC (KQTV) St. Joseph, MO HD | `KQTV21.us@HD` | `abc-kqtv-st-joseph-mo-hd/17187` |
| ABC (KRCR) Redding, CA HD | `KRCRTV71.us@HD` | `abc-krcr-redding-ca-hd/5782` |
| ABC (KRDO) Colorado Springs, CO HD | `KRDOTV131.us@HD` | `abc-krdo-colorado-springs-co-hd/7996` |
| ABC (KRGV) Weslaco, TX HD | `KRGVTV51.us@HD` | `abc-krgv-weslaco-tx-hd/4688` |
| ABC (KRHD) Bryan, TX HD | `KRHDCD401.us@HD` | `abc-krhd-bryan-tx-hd/11421` |
| ABC (KRWF) Redwood Falls, MN HD | `KRWF431.us@HD` | `abc-krwf-redwood-falls-mn-hd/6709` |
| ABC (KSAT) San Antonio, TX HD | `KSATTV91.us@HD` | `abc-ksat-san-antonio-tx-hd/9764` |
| ABC (KSAW) Twin Falls, ID HD | `KSAWLD61.us@HD` | `abc-ksaw-twin-falls-id-hd/10137` |
| ABC (KSAX) Alexandria, MN HD | `KSAX421.us@HD` | `abc-ksax-alexandria-mn-hd/10031` |
| ABC (KSBW-DT2) Monterey, CA HD | `KSBW82.us@HD` | `abc-ksbw-dt2-monterey-ca-hd/13484` |
| ABC (KSFY) Sioux Falls, SD HD | `KSFYTV131.us@HD` | `abc-ksfy-sioux-falls-sd-hd/5771` |
| ABC (KSGW) Sheridan, WY HD | `KSGWTV121.us@HD` | `abc-ksgw-sheridan-wy-hd/7560` |
| ABC (KSPR) Springfield, MO HD | `KSPRDT1.us@SD` | `abc-kspr-springfield-mo-hd/8084` |
| ABC (KSTP) St. Paul, MN HD | `KSTPTV51.us@HD` | `abc-kstp-st-paul-mn-hd/4773` |
| ABC (KSVI) Billings, MT HD | `KSVI61.us@HD` | `abc-ksvi-billings-mt-hd/8922` |
| ABC (KSWO-TV) Lawton, OK HD | `KSWOTV71.us@HD` | `abc-kswo-tv-lawton-ok-hd/4727` |
| ABC (KSWX-LP) Duncan, OK | `KSWXLP1.us@SD` | `abc-kswx-lp-duncan-ok/29160` |
| ABC (KTBS) Shreveport, LA HD | `KTBSTV31.us@HD` | `abc-ktbs-shreveport-la-hd/5757` |
| ABC (KTEN-DT3) Ada, OK HD | `KTEN103.us@HD` | `abc-kten-dt3-ada-ok-hd/8986` |
| ABC (KTKA) Topeka, KS HD | `KTKATV491.us@HD` | `abc-ktka-topeka-ks-hd/8148` |
| ABC (KTMF) Missoula, MT HD | `KTMF231.us@HD` | `abc-ktmf-missoula-mt-hd/8926` |
| ABC (KTNV) Las Vegas, NV HD | `KTNVTV331.us@HD` | `abc-ktnv-las-vegas-nv-hd/5740` |
| ABC (KTRE) Lufkin, TX HD | `KTRE91.us@HD` | `abc-ktre-lufkin-tx-hd/11005` |
| ABC (KTRK) Houston, TX HD | `KTRKTV131.us@HD` | `abc-ktrk-houston-tx-hd/5718` |
| ABC (KTUL) Tulsa, OK HD | `KTUL81.us@HD` | `abc-ktul-tulsa-ok-hd/5748` |
| ABC (KTVO) Kirskville, MO HD | `KTVO31.us@HD` | `abc-ktvo-kirskville-mo-hd/18817` |
| ABC (KTVX) Salt Lake City, UT HD | `KTVX41.us@HD` | `abc-ktvx-salt-lake-city-ut-hd/4461` |
| ABC (KTWO) Casper, WY HD | `KTWOTV21.us@HD` | `abc-ktwo-casper-wy-hd/7543` |
| ABC (KTXS) Abilene, TX HD | `KTXSTV121.us@HD` | `abc-ktxs-abilene-tx-hd/17142` |
| ABC (KUPK) Garden City, KS HD | `KUPK131.us@HD` | `abc-kupk-garden-city-ks-hd/8159` |
| ABC (KUWB-LD) Bloomington, UT | `K22PHD301.us@HD` | `abc-kuwb-ld-bloomington-ut/27286` |
| ABC (KVEW) Tri-Cities, WA HD | `KVEW421.us@HD` | `abc-kvew-tri-cities-wa-hd/7971` |
| ABC (KVHP-LD) Jasper, TX | `KVHPLD1.us@SD` | `abc-kvhp-ld-jasper-tx/29748` |
| ABC (KVIA) El Paso, TX HD | `KVIATV71.us@HD` | `abc-kvia-el-paso-tx-hd/13533` |
| ABC (KVIH) Clovis, NM | `KVIHTV121.us@HD` | `abc-kvih-clovis-nm/4401` |
| ABC (KVII) Amarillo, TX HD | `KVIITV71.us@HD` | `abc-kvii-amarillo-tx-hd/17132` |
| ABC (KVUE) Austin, TX HD | `KVUE241.us@HD` | `abc-kvue-austin-tx-hd/7914` |
| ABC (KWNB) Hayes Center, NE | `KWNBLD291.us@HD` | `abc-kwnb-hayes-center-ne/4955` |
| ABC (KWYB-LD) Bozeman, MT | `KWYBLD281.us@HD` | `abc-kwyb-ld-bozeman-mt/27662` |
| ABC (KWYB) Butte, MT HD | `KWYB181.us@HD` | `abc-kwyb-butte-mt-hd/8930` |
| ABC (KXLY) Spokane, WA HD | `KXLYTV41.us@HD` | `abc-kxly-spokane-wa-hd/5332` |
| ABC (KXMD-DT2) Williston , ND | `KXMDTV112.us@HD` | `abc-kxmd-dt2-williston--nd/18314` |
| ABC (KXTV) Sacramento, CA HD | `KXTV101.us@HD` | `abc-kxtv-sacramento-ca-hd/5724` |
| ABC (KXXV) Waco, TX HD | `KXXV251.us@HD` | `abc-kxxv-waco-tx-hd/5763` |
| ABC (KYUR) Anchorage, AK HD | `KYUR131.us@HD` | `abc-kyur-anchorage-ak-hd/9458` |
| ABC (KZCO) Denver, CO HD | `KZCOLD281.us@HD` | `abc-kzco-denver-co-hd/18142` |
| ABC (W07DC-D) Allentown, PA | `W07DCD441.us@HD` | `abc-w07dc-d-allentown-pa/15303` |
| ABC (W14CO) Clarks Summit, PA | `W14COD441.us@HD` | `abc-w14co-clarks-summit-pa/15734` |
| ABC (W15CO) Towanda, PA | `W15COD441.us@HD` | `abc-w15co-towanda-pa/15737` |
| ABC (W26CV) Mansfield, PA | `W26CVD441.us@HD` | `abc-w26cv-mansfield-pa/15736` |
| ABC (W28DP) Pottsville, PA | `W28DPD1.us@SD` | `abc-w28dp-pottsville-pa/15738` |
| ABC (WAAY) Huntsville, AL HD | `WAAYTV311.us@HD` | `abc-waay-huntsville-al-hd/5758` |
| ABC (WABC) New York, NY HD | `WABCTV71.us@HD` | `abc-wabc-new-york-ny-hd/4553` |
| ABC (WABG) Greenville, MS HD | `WABGTV61.us@HD` | `abc-wabg-greenville-ms-hd/8809` |
| ABC (WABM-DT2) Birmingham, AL HD | `WABM682.us@HD` | `abc-wabm-dt2-birmingham-al-hd/16258` |
| ABC (WALB-DT2) Albany, GA HD | `WALB102.us@HD` | `abc-walb-dt2-albany-ga-hd/9316` |
| ABC (WAOW) Wausau, WI HD | `WAOW91.us@HD` | `abc-waow-wausau-wi-hd/5784` |
| ABC (WAPT) Jackson, MS HD | `WAPT161.us@HD` | `abc-wapt-jackson-ms-hd/15053` |
| ABC (WATE) Knoxville, TN HD | `WATETV61.us@HD` | `abc-wate-knoxville-tn-hd/5746` |
| ABC (WATM) Johnstown, PA HD | `WATMTV231.us@HD` | `abc-watm-johnstown-pa-hd/7520` |
| ABC (WATN) Memphis, TN HD | `WATNTV241.us@HD` | `abc-watn-memphis-tn-hd/6382` |
| ABC (WAWV) Terre Haute, IN HD | `WAWVTV381.us@HD` | `abc-wawv-terre-haute-in-hd/2012` |
| ABC (WBAY) Green Bay, WI HD | `WBAYTV21.us@HD` | `abc-wbay-green-bay-wi-hd/4897` |
| ABC (WBBJ-DT2) DVS Jackson, TN | `WBBJDT2.us@SD` | `abc-wbbj-dt2-dvs-jackson-tn/17489` |
| ABC (WBBJ) Jackson, TN HD | `WBBJTV71.us@HD` | `abc-wbbj-jackson-tn-hd/5790` |
| ABC (WBKO) Bowling Green, KY HD | `WBKO131.us@HD` | `abc-wbko-bowling-green-ky-hd/5792` |
| ABC (WBKP-DT2) Marquette, MI | `WBKP52.us@HD` | `abc-wbkp-dt2-marquette-mi/18189` |
| ABC (WBOY-DT2) Clarksburg, WV HD | `WBOYTV122.us@HD` | `abc-wboy-dt2-clarksburg-wv-hd/7491` |
| ABC (WBRZ) Baton Rouge, LA HD | `WBRZTV21.us@HD` | `abc-wbrz-baton-rouge-la-hd/5764` |
| ABC (WBUP) Ishpeming, MI HD | `WBUP101.us@HD` | `abc-wbup-ishpeming-mi-hd/19899` |
| ABC (WCDC) Adams, MA | `WCDCDT1.us@SD` | `abc-wcdc-adams-ma/4945` |
| ABC (WCHS) Charleston, WV HD | `WCHSTV81.us@HD` | `abc-wchs-charleston-wv-hd/5751` |
| ABC (WCJB) Gainesville, FL HD | `WCJBTV201.us@HD` | `abc-wcjb-gainesville-fl-hd/5430` |
| ABC (WCPO) Cincinnati, OH HD | `WCPOTV91.us@HD` | `abc-wcpo-cincinnati-oh-hd/3674` |
| ABC (WCTI) New Bern, NC HD | `WCTITV121.us@HD` | `abc-wcti-new-bern-nc-hd/5647` |
| ABC (WCVB) Boston, MA HD | `WCVBTV501.us@SD` | `abc-wcvb-boston-ma-hd/3661` |
| ABC (WDAM-DT2) Laurel, MS HD | `WDAMTV72.us@HD` | `abc-wdam-dt2-laurel-ms-hd/19170` |
| ABC (WDAY) Fargo, ND HD | `WDAYTV61.us@HD` | `abc-wday-fargo-nd-hd/7515` |
| ABC (WDAZ) Devil's Lake, ND HD | `WDAZTV81.us@HD` | `abc-wdaz-devils-lake-nd-hd/7768` |
| ABC (WDBB-DT2) Bessemer, AL | `WDBB332.us@SD` | `abc-wdbb-dt2-bessemer-al/13397` |
| ABC (WDHN) Dothan, AL HD | `WDHN181.us@HD` | `abc-wdhn-dothan-al-hd/7165` |
| ABC (WDIO) Duluth, MN HD | `WDIODT101.us@HD` | `abc-wdio-duluth-mn-hd/5785` |
| ABC (WEAR) Pensacola, FL HD | `WEARTV31.us@HD` | `abc-wear-pensacola-fl-hd/5749` |
| ABC (WEEK-DT2) Peoria, IL HD | `WEEKTV252.us@HD` | `abc-week-dt2-peoria-il-hd/4596` |
| ABC (WEHT) Evansville, IN HD | `WEHT251.us@HD` | `abc-weht-evansville-in-hd/5765` |
| ABC (WENY) Elmira, NY HD | `WENYTV361.us@HD` | `abc-weny-elmira-ny-hd/7163` |
| ABC (WEWS) Cleveland, OH HD | `WEWSTV51.us@HD` | `abc-wews-cleveland-oh-hd/3678` |
| ABC (WFAA) Dallas, TX HD | `WFAA81.us@HD` | `abc-wfaa-dallas-tx-hd/5417` |
| ABC (WFTS) Tampa Bay, FL HD | `WFTSTV321.us@HD` | `abc-wfts-tampa-bay-fl-hd/5719` |
| ABC (WFTV) Orlando, FL HD | `WFTV91.us@HD` | `abc-wftv-orlando-fl-hd/5725` |
| ABC (WGGB) Springfield, MA HD | `WGGBTV401.us@HD` | `abc-wggb-springfield-ma-hd/5767` |
| ABC (WGNO) New Orleans, LA HD | `WGNO261.us@HD` | `abc-wgno-new-orleans-la-hd/5737` |
| ABC (WGTU) Traverse City, MI HD | `WGTU291.us@HD` | `abc-wgtu-traverse-city-mi-hd/11454` |
| ABC (WGWW-DT2) Birmingham, AL HD | `WGWW402.us@HD` | `abc-wgww-dt2-birmingham-al-hd/18792` |
| ABC (WGXA-DT2) Macon, GA HD | `WGXA242.us@HD` | `abc-wgxa-dt2-macon-ga-hd/8861` |
| ABC (WHAM) Rochester, NY HD | `WHAMTV131.us@HD` | `abc-wham-rochester-ny-hd/5261` |
| ABC (WHAS) Louisville, KY HD | `WHASTV111.us@HD` | `abc-whas-louisville-ky-hd/5741` |
| ABC (WHSV) Harrisonburg, VA HD | `WHSVTV31.us@HD` | `abc-whsv-harrisonburg-va-hd/3745` |
| ABC (WHTM) Harrisburg, PA HD | `WHTMTV491.us@HD` | `abc-whtm-harrisburg-pa-hd/5735` |
| ABC (WICD) Champaign, IL HD | `WICD271.us@HD` | `abc-wicd-champaign-il-hd/7528` |
| ABC (WICS) Springfield, IL HD | `WICS551.us@HD` | `abc-wics-springfield-il-hd/4586` |
| ABC (WIRT) Hibbing, MN | `WIRTDT131.us@HD` | `abc-wirt-hibbing-mn/4946` |
| ABC (WISN) Milwaukee, WI HD | `WISNTV121.us@HD` | `abc-wisn-milwaukee-wi-hd/6857` |
| ABC (WIVT) Binghamton, NY HD | `WIVT341.us@HD` | `abc-wivt-binghamton-ny-hd/4745` |
| ABC (WJBF) Augusta, GA HD | `WJBF61.us@HD` | `abc-wjbf-augusta-ga-hd/5772` |
| ABC (WJCL) Savannah, GA HD | `WJCL221.us@HD` | `abc-wjcl-savannah-ga-hd/7371` |
| ABC (WJET) Erie, PA HD | `WJETTV241.us@HD` | `abc-wjet-erie-pa-hd/7372` |
| ABC (WJLA) District of Columbia HD | `WJLATV71.us@HD` | `abc-wjla-district-of-columbia-hd/3741` |
| ABC (WJRT) Flint, MI HD | `WJRTTV121.us@HD` | `abc-wjrt-flint-mi-hd/5752` |
| ABC (WJXX) Jacksonville, FL HD | `WJXX251.us@HD` | `abc-wjxx-jacksonville-fl-hd/5713` |
| ABC (WKBW) Buffalo, NY HD | `WKBWTV71.us@HD` | `abc-wkbw-buffalo-ny-hd/3581` |
| ABC (WKEF) Dayton, OH HD | `WKEF451.us@SD` | `abc-wkef-dayton-oh-hd/8790` |
| ABC (WKOW) Madison, WI HD | `WKOW271.us@HD` | `abc-wkow-madison-wi-hd/5759` |
| ABC (WKRN) Nashville, TN HD | `WKRNTV301.us@HD` | `abc-wkrn-nashville-tn-hd/5731` |
| ABC (WLAJ) Lansing, MI HD | `WLAJ61.us@HD` | `abc-wlaj-lansing-mi-hd/5769` |
| ABC (WLNE) Providence, RI HD | `WLNETV61.us@HD` | `abc-wlne-providence-ri-hd/5742` |
| ABC (WLOS) Asheville, NC HD | `WLOS131.us@HD` | `abc-wlos-asheville-nc-hd/5732` |
| ABC (WLOX) Biloxi, MS HD | `WLOX131.us@HD` | `abc-wlox-biloxi-ms-hd/5788` |
| ABC (WLS) Chicago, IL HD | `WLSDT1.us@SD` | `abc-wls-chicago-il-hd/5714` |
| ABC (WMAR) Baltimore, MD HD | `WMARTV21.us@HD` | `abc-wmar-baltimore-md-hd/5727` |
| ABC (WMBB) Panama City, FL HD | `WMBB131.us@HD` | `abc-wmbb-panama-city-fl-hd/5787` |
| ABC (WMDT) Salisbury, MD HD | `WMDT471.us@HD` | `abc-wmdt-salisbury-md-hd/8659` |
| ABC (WMTW) Auburn, ME HD | `WMTW81.us@HD` | `abc-wmtw-auburn-me-hd/3598` |
| ABC (WMUR) Manchester, NH HD | `WMURTV91.us@HD` | `abc-wmur-manchester-nh-hd/3655` |
| ABC (WNCF) Montgomery, AL HD | `WNCF321.us@HD` | `abc-wncf-montgomery-al-hd/5773` |
| ABC (WNEP) Scranton, PA HD | `WNEPTV441.us@HD` | `abc-wnep-scranton-pa-hd/5743` |
| ABC (WOAY) Oak Hill, WV HD | `WOAYTV41.us@HD` | `abc-woay-oak-hill-wv-hd/8293` |
| ABC (WOI) Des Moines, IA HD | `WOIDT1.us@SD` | `abc-woi-des-moines-ia-hd/5755` |
| ABC (WOLO) Columbia, SC HD | `WOLOTV251.us@HD` | `abc-wolo-columbia-sc-hd/4765` |
| ABC (WOTV) Battle Creek, MI HD | `WOTV411.us@HD` | `abc-wotv-battle-creek-mi-hd/5734` |
| ABC (WPBF) West Palm Beach, FL HD | `WPBF251.us@HD` | `abc-wpbf-west-palm-beach-fl-hd/5733` |
| ABC (WPBN-DT2) Cadillac, MI | `WPBNTV72.us@HD` | `abc-wpbn-dt2-cadillac-mi/17670` |
| ABC (WPDE) Lumberton, NC HD | `WPDETV151.us@HD` | `abc-wpde-lumberton-nc-hd/6380` |
| ABC (WPLG) Miami, FL HD | `WPLG101.us@HD` | `abc-wplg-miami-fl-hd/5722` |
| ABC (WPTA) Fort Wayne, IN HD | `WPTA211.us@HD` | `abc-wpta-fort-wayne-in-hd/3688` |
| ABC (WPVI) Philadelphia, PA HD | `WPVITV61.us@HD` | `abc-wpvi-philadelphia-pa-hd/5715` |
| ABC (WQAD) Quad Cities, IA HD | `WQADTV81.us@HD` | `abc-wqad-quad-cities-ia-hd/4492` |
| ABC (WQOW) Eau Claire, WI HD | `WQOW181.us@HD` | `abc-wqow-eau-claire-wi-hd/5778` |
| ABC (WRIC) Richmond, VA HD | `WRICTV81.us@HD` | `abc-wric-richmond-va-hd/5747` |
| ABC (WRTV) Indianapolis, IN HD | `WRTV61.us@HD` | `abc-wrtv-indianapolis-in-hd/5728` |
| ABC (WSB) Atlanta, GA HD | `WSBDT1.us@SD` | `abc-wsb-atlanta-ga-hd/5717` |
| ABC (WSET) Lynchburg, VA HD | `WSETTV241.us@HD` | `abc-wset-lynchburg-va-hd/3734` |
| ABC (WSIL) Carterville, IL HD | `WSILTV31.us@HD` | `abc-wsil-carterville-il-hd/5756` |
| ABC (WSOC) Charlotte, NC HD | `WSOCTV91.us@HD` | `abc-wsoc-charlotte-nc-hd/4708` |
| ABC (WSWS) North Platte, NE | `WSWSDT1.us@SD` | `abc-wsws-north-platte-ne/4956` |
| ABC (WSYR) Syracuse, NY HD | `WSYRTV91.us@HD` | `abc-wsyr-syracuse-ny-hd/4789` |
| ABC (WSYX) Columbus, OH HD | `WSYX61.us@HD` | `abc-wsyx-columbus-oh-hd/4731` |
| ABC (WTAE) Pittsburgh, PA HD | `WTAETV41.us@HD` | `abc-wtae-pittsburgh-pa-hd/3713` |
| ABC (WTEN) Albany, NY HD | `WTEN451.us@HD` | `abc-wten-albany-ny-hd/3706` |
| ABC (WTNH-DT1) HD New Haven, CT | `WTNH81.us@HD` | `abc-wtnh-dt1-hd-new-haven-ct/2054` |
| ABC (WTOK) Meridian, MS HD | `WTOKTV111.us@HD` | `abc-wtok-meridian-ms-hd/5793` |
| ABC (WTVA-DT2) Tupelo, MS HD | `WTVA92.us@HD` | `abc-wtva-dt2-tupelo-ms-hd/19175` |
| ABC (WTVC) Chattanooga, TN HD | `WTVC91.us@HD` | `abc-wtvc-chattanooga-tn-hd/5760` |
| ABC (WTVD) Raleigh, NC HD | `WTVD111.us@HD` | `abc-wtvd-raleigh-nc-hd/4820` |
| ABC (WTVG) Toledo, OH HD | `WTVG131.us@HD` | `abc-wtvg-toledo-oh-hd/3684` |
| ABC (WTVM) Columbus, GA HD | `WTVM91.us@HD` | `abc-wtvm-columbus-ga-hd/5780` |
| ABC (WTVO) Rockford, IL HD | `WTVO171.us@HD` | `abc-wtvo-rockford-il-hd/5783` |
| ABC (WTVQ) Lexington, KY HD | `WTVQDT361.us@HD` | `abc-wtvq-lexington-ky-hd/5750` |
| ABC (WTXL) Tallahassee, FL HD | `WTXLTV271.us@HD` | `abc-wtxl-tallahassee-fl-hd/5768` |
| ABC (WUTR) Utica, NY HD | `WUTR201.us@HD` | `abc-wutr-utica-ny-hd/5789` |
| ABC (WVEC) Norfolk, VA HD | `WVEC131.us@HD` | `abc-wvec-norfolk-va-hd/5736` |
| ABC (WVII) Bangor, ME HD | `WVIITV71.us@HD` | `abc-wvii-bangor-me-hd/10396` |
| ABC (WVNY) Burlington, VT HD | `WVNY221.us@HD` | `abc-wvny-burlington-vt-hd/4526` |
| ABC (WWAY) Wilmington, NC HD | `WWAY31.us@HD` | `abc-wway-wilmington-nc-hd/4797` |
| ABC (WWSB) Sarsota, FL HD | `WWSB401.us@HD` | `abc-wwsb-sarsota-fl-hd/5720` |
| ABC (WWTI) Watertown, NY HD | `WWTI501.us@HD` | `abc-wwti-watertown-ny-hd/13764` |
| ABC (WXLV) Winston-Salem, NC HD | `WXLVTV481.us@HD` | `abc-wxlv-winston-salem-nc-hd/4719` |
| ABC (WXOW) La Crosse, WI HD | `WXOW191.us@HD` | `abc-wxow-la-crosse-wi-hd/5777` |
| ABC (WXYZ) Detroit, MI - Canada HD | `WXYZTV71.us@HD` | `abc-wxyz-detroit-mi--canada-hd/2811` |
| ABC (WYOW) Eagle River, WI | `WYOW341.us@HD` | `abc-wyow-eagle-river-wi/4958` |
| ABC (WYTV) Youngstown, OH HD | `WYTV331.us@HD` | `abc-wytv-youngstown-oh-hd/8523` |
| ABC (WZVN) Fort Myers, FL HD | `WZVNTV261.us@HD` | `abc-wzvn-fort-myers-fl-hd/7654` |
| ABC (WZZM) Grand Rapids, MI HD | `WZZM131.us@HD` | `abc-wzzm-grand-rapids-mi-hd/9335` |
| ABC News Live | `ABCNewsLive.us@SD` | `abc-news-live/36224` |
| ACC Network | `ACCNetwork.us@SD` | `acc-network/33964` |
| AccuWeather HD | `AccuWeatherNOW.us@SD` | `accuweather-hd/7335` |
| AMC - Eastern Feed HD | `AMC.us@East` | `amc--eastern-feed-hd/6219` |
| AMC - Pacific Feed HD | `AMC.us@West` | `amc--pacific-feed-hd/10757` |
| American Heroes Channel | `AmericanHeroesChannel.us@SD` | `american-heroes-channel/2035` |
| AMG-TV (KDDC-LD6) Dodge City, KS | `KDDCLD236.us@SD` | `amg-tv-kddc-ld6-dodge-city-ks/31082` |
| AMG-TV (KDGU-LD6) Ulysses, KS | `KDGULD236.us@SD` | `amg-tv-kdgu-ld6-ulysses-ks/31083` |
| AMG-TV (WKFK-LD3) Biloxi, MS | `WKFKLD3.us@SD` | `amg-tv-wkfk-ld3-biloxi-ms/12428` |
| AMP2 | `AMP2.us@SD` | `amp2/13283` |
| Animal Planet US - East | `AnimalPlanet.us@East` | `animal-planet-us--east/645` |
| Animal Planet US - West | `AnimalPlanet.us@West` | `animal-planet-us--west/3549` |
| Animal Planet US HD - East | `AnimalPlanet.us@EastHD` | `animal-planet-us-hd--east/4537` |
| Animal Planet US HD - West | `AnimalPlanet.us@WestHD` | `animal-planet-us-hd--west/11524` |
| Antenna (KKRP-LD2) St. George, UT | `KKRPLD132.us@HD` | `antenna-kkrp-ld2-st-george-ut/31087` |
| Antenna (KMJF-LD2) Columbus, NE | `KMJFLD162.us@HD` | `antenna-kmjf-ld2-columbus-ne/31088` |
| Antenna (KTVI-DT2) St. Louis, MO | `KTVI22.us@SD` | `antenna-ktvi-dt2-st-louis-mo/9438` |
| Antenna (KWVC-LD2) Malaga, Ect, WA | `KWVCLD2.us@SD` | `antenna-kwvc-ld2-malaga-ect-wa/31089` |
| Antenna (WLFL4) Raleigh, NC | `WLFLDT4.us@SD` | `antenna-wlfl4-raleigh-nc/35198` |
| Antenna (WPIX-DT2) New York, NY HD | `WPIX112.us@HD` | `antenna-wpix-dt2-new-york-ny-hd/8737` |
| Azteca (WMBC) Newton, NJ | `WMBCTV636.us@SD` | `azteca-wmbc-newton-nj/11536` |
| BBC America - East HD | `BBCAmerica.us@East` | `bbc-america--east-hd/11121` |
| BBC America - West HD | `BBCAmerica.us@West` | `bbc-america--west-hd/17061` |
| beIN Sport USA HD | `beINSportsUSA.us@SD` | `bein-sport-usa-hd/10854` |
| BET Gospel | `BETGospel.us@SD` | `bet-gospel/6191` |
| BET HD - Eastern Feed | `BET.us@East` | `bet-hd--eastern-feed/6205` |
| BET HD - Pacific Feed | `BET.us@West` | `bet-hd--pacific-feed/6561` |
| BET Jams | `BETJams.us@SD` | `bet-jams/2113` |
| BET Soul | `BETSoul.us@SD` | `bet-soul/3229` |
| Big Ten Network - Alternate | `BigTenNetworkAlternate.us@SD` | `big-ten-network--alternate/11580` |
| Big Ten Network HD | `BigTenNetwork.us@SD` | `big-ten-network-hd/4500` |
| Big Ten Network Overflow 1 | `BigTenNetworkOverflow1.us@SD` | `big-ten-network-overflow-1/8822` |
| Big Ten Network Overflow 2 | `BigTenNetworkOverflow2.us@SD` | `big-ten-network-overflow-2/8823` |
| Big Ten Network Overflow 3 | `BigTenNetworkOverflow3.us@SD` | `big-ten-network-overflow-3/8824` |
| Bloomberg TV USA | `BloombergTV.us@US` | `bloomberg-tv-usa/1856` |
| Boomerang HD | `Boomerang.us@SD` | `boomerang-hd/16413` |
| Bravo USA HD - Eastern Feed | `Bravo.us@East` | `bravo-usa-hd--eastern-feed/6120` |
| Bravo USA HD - Pacific Feed | `Bravo.us@West` | `bravo-usa-hd--pacific-feed/16226` |
| Busted (WRPX-TV6) Raleigh, NC | `WRPXTV476.us@SD` | `defy-wrpx-tv6-raleigh-nc/11719` |
| Cars.TV HD | `CarsTV.us@SD` | `carstv-hd/18803` |
| Cartoon Network USA HD - Eastern | `CartoonNetwork.us@East` | `cartoon-network-usa-hd--eastern/6917` |
| Cartoon Network USA HD - Pacific | `CartoonNetwork.us@West` | `cartoon-network-usa-hd--pacific/8880` |
| CBS - Eastern | `CBS.us@East` | `cbs--eastern/1225` |
| CBS - Mountain | `CBS.us@Mountain` | `cbs--mountain/9906` |
| CBS - Pacific | `CBS.us@West` | `cbs--pacific/9907` |
| CBS (K04BJ) La Pine, OR | `K04BJD71.us@HD` | `cbs-k04bj-la-pine-or/11511` |
| CBS (K13XD) Fairbanks, AK | `KXDFCD131.us@HD` | `cbs-k13xd-fairbanks-ak/4960` |
| CBS (K21CC) Lewiston, ID | `K21CCD21.us@HD` | `cbs-k21cc-lewiston-id/7251` |
| CBS (K24DT) Aberdeen. SD | `K24KGD61.us@HD` | `cbs-k24dt-aberdeen-sd/4978` |
| CBS (K28MA-D) Argusville, ND | `K28MAD281.us@HD` | `cbs-k28ma-d-argusville-nd/25564` |
| CBS (K47LM) Prineville, OR | `K47LMD1.us@SD` | `cbs-k47lm-prineville-or/11514` |
| CBS (K50HU) Flagstaff, AZ | `K50HUD1.us@SD` | `cbs-k50hu-flagstaff-az/15556` |
| CBS (K50KK-D) Ellensburg, WA | `K50KKD1.us@SD` | `cbs-k50kk-d-ellensburg-wa/15128` |
| CBS (KAUZ) Wichita Falls, TX HD | `KAUZTV61.us@HD` | `cbs-kauz-wichita-falls-tx-hd/4726` |
| CBS (KAVU-DT3) Victoria, TX | `KAVUTV253.us@SD` | `cbs-kavu-dt3-victoria-tx/17403` |
| CBS (KBAK) Bakersfield, CA HD | `KBAKTV291.us@HD` | `cbs-kbak-bakersfield-ca-hd/7565` |
| CBS (KBIM) Roswell, NM HD | `KBIMTV101.us@HD` | `cbs-kbim-roswell-nm-hd/6923` |
| CBS (KBJR-DT2) Duluth, MN HD | `KBJRTV62.us@HD` | `cbs-kbjr-dt2-duluth-mn-hd/6554` |
| CBS (KBNZ) Bend, OR HD | `KBNZLD71.us@HD` | `cbs-kbnz-bend-or-hd/8224` |
| CBS (KBOI) Boise, ID HD | `KBOITV21.us@HD` | `cbs-kboi-boise-id-hd/10383` |
| CBS (KBSD) Dodge City, KS HD | `KBSDDT61.us@HD` | `cbs-kbsd-dodge-city-ks-hd/8158` |
| CBS (KBSH) Hays, KS HD | `KBSHDT71.us@HD` | `cbs-kbsh-hays-ks-hd/8165` |
| CBS (KBSL) Goodland, KS | `KBSLDT101.us@HD` | `cbs-kbsl-goodland-ks/1587` |
| CBS (KBTX) Bryan, TX HD | `KBTXTV31.us@HD` | `cbs-kbtx-bryan-tx-hd/11424` |
| CBS (KBZK) Bozeman, MT HD | `KBZK71.us@HD` | `cbs-kbzk-bozeman-mt-hd/8919` |
| CBS (KCBS) Los Angeles, CA HD | `KCBSTV21.us@HD` | `cbs-kcbs-los-angeles-ca-hd/4554` |
| CBS (KCBY) Coos Bay, OR HD | `KCBYTV111.us@HD` | `cbs-kcby-coos-bay-or-hd/19942` |
| CBS (KCCI) Des Moines, IA HD | `KCCI81.us@HD` | `cbs-kcci-des-moines-ia-hd/6377` |
| CBS (KCCO) Alexandria, MN HD | `KCCODT1.us@SD` | `cbs-kcco-alexandria-mn-hd/8566` |
| CBS (KCCW) Walker, MN HD | `KCCWTV121.us@HD` | `cbs-kccw-walker-mn-hd/8565` |
| CBS (KCLO) Sioux Falls, SD HD | `KCLOTV151.us@HD` | `cbs-kclo-sioux-falls-sd-hd/6673` |
| CBS (KCNC) Denver, CO HD | `KCNCTV41.us@HD` | `cbs-kcnc-denver-co-hd/6674` |
| CBS (KCTV) Kansas City, MO HD | `KCTV621.us@HD` | `cbs-kctv-kansas-city-mo-hd/6676` |
| CBS (KDBC) El Paso, TX HD | `KDBCTV41.us@HD` | `cbs-kdbc-el-paso-tx-hd/5196` |
| CBS (KDKA) Pittsburgh, PA HD | `KDKATV21.us@HD` | `cbs-kdka-pittsburgh-pa-hd/3712` |
| CBS (KDLO) Florence, SD HD | `KDLOTV31.us@HD` | `cbs-kdlo-florence-sd-hd/7932` |
| CBS (KELO) Sioux Falls, SD HD | `KELOTV111.us@HD` | `cbs-kelo-sioux-falls-sd-hd/6707` |
| CBS (KENS) San Antonio, TX HD | `KENS51.us@HD` | `cbs-kens-san-antonio-tx-hd/4887` |
| CBS (KEPR) Tri-Cities, WA HD | `KEPRTV191.us@HD` | `cbs-kepr-tri-cities-wa-hd/6555` |
| CBS (KEYC) Mankato, MN HD | `KEYCTV121.us@HD` | `cbs-keyc-mankato-mn-hd/6556` |
| CBS (KEYE) Austin, TX HD | `KEYETV421.us@HD` | `cbs-keye-austin-tx-hd/4831` |
| CBS (KFDA) Amarillo, TX HD | `KFDATV101.us@HD` | `cbs-kfda-amarillo-tx-hd/6557` |
| CBS (KFDM) Beaumont, TX HD | `KFDM61.us@HD` | `cbs-kfdm-beaumont-tx-hd/4748` |
| CBS (KFMB) San Diego, CA HD | `KFMBTV81.us@HD` | `cbs-kfmb-san-diego-ca-hd/5836` |
| CBS (KFQX-DT2) Grand Junstion, CO | `KFQX42.us@HD` | `cbs-kfqx-dt2-grand-junstion-co/18077` |
| CBS (KFSM-TV) Ft. Smith, AR HD | `KFSMTV51.us@HD` | `cbs-kfsm-ft-smith-ar-hd/8079` |
| CBS (KFVS) Cape Girardeau, MO HD | `KFVSTV121.us@HD` | `cbs-kfvs-cape-girardeau-mo-hd/6152` |
| CBS (KGAN) Cedar Rapids, IA HD | `KGAN21.us@HD` | `cbs-kgan-cedar-rapids-ia-hd/19338` |
| CBS (KGIN) Grand Island, NE HD | `KGIN111.us@HD` | `cbs-kgin-grand-island-ne-hd/7685` |
| CBS (KGJT-DT2) Grand Junction, CO | `KGJTCD272.us@HD` | `cbs-kgjt-dt2-grand-junction-co/18554` |
| CBS (KGMB) Honolulu, HI HD | `KGMB91.us@HD` | `cbs-kgmb-honolulu-hi-hd/7673` |
| CBS (KGMD) Hilo, HI | `KGMDTV91.us@HD` | `cbs-kgmd-hilo-hi/4969` |
| CBS (KGMV) Wailuku, HI | `KGMV91.us@HD` | `cbs-kgmv-wailuku-hi/4968` |
| CBS (KGPE) Fresno, CA HD | `KGPE591.us@HD` | `cbs-kgpe-fresno-ca-hd/9361` |
| CBS (KGWC) Casper, WY | `KGWCTV141.us@HD` | `cbs-kgwc-casper-wy/4288` |
| CBS (KGWL) Lander, WY HD | `KGWLTV51.us@HD` | `cbs-kgwl-lander-wy-hd/7559` |
| CBS (KGWN) Cheyenne, WY HD | `KGWNTV51.us@HD` | `cbs-kgwn-cheyenne-wy-hd/7546` |
| CBS (KGWR) Rock Springs, WY HD | `KGWRTV131.us@HD` | `cbs-kgwr-rock-springs-wy-hd/8813` |
| CBS (KHOU) Houston, TX HD | `KHOU111.us@HD` | `cbs-khou-houston-tx-hd/7903` |
| CBS (KHQA) Quincy, MO HD | `KHQATV71.us@HD` | `cbs-khqa-quincy-mo-hd/8016` |
| CBS (KHSL) Chico, CA HD | `KHSLTV121.us@HD` | `cbs-khsl-chico-ca-hd/13462` |
| CBS (KIMA) Yakima, WA HD | `KIMATV291.us@HD` | `cbs-kima-yakima-wa-hd/7985` |
| CBS (KIMT) Mason City, IA HD | `KIMT31.us@HD` | `cbs-kimt-mason-city-ia-hd/7868` |
| CBS (KION) Salinas, CA HD | `KIONTV461.us@HD` | `cbs-kion-salinas-ca-hd/13482` |
| CBS (KIRO) Seattle, WA HD | `KIROTV71.us@HD` | `cbs-kiro-seattle-wa-hd/2830` |
| CBS (KJNB-DT2) Jonesboro, AR HD | `KJNBLD2.us@SD` | `cbs-kjnb-dt2-jonesboro-ar-hd/20007` |
| CBS (KKTV) Colorado Springs, CO HD | `KKTV111.us@HD` | `cbs-kktv-colorado-springs-co-hd/7995` |
| CBS (KLAS) Las Vegas, NV HD | `KLASTV81.us@HD` | `cbs-klas-las-vegas-nv-hd/6968` |
| CBS (KLBK) Lubbock, TX HD | `KLBKTV131.us@HD` | `cbs-klbk-lubbock-tx-hd/6145` |
| CBS (KLEW) Lewiston, ID HD | `KLEWTV31.us@HD` | `cbs-klew-lewiston-id-hd/6966` |
| CBS (KLFY) Lafayette, LA HD | `KLFYTV101.us@HD` | `cbs-klfy-lafayette-la-hd/6967` |
| CBS (KLST) San Angelo, TX HD | `KLST81.us@HD` | `cbs-klst-san-angelo-tx-hd/17155` |
| CBS (KMOV) St. Louis, MO HD | `KMOV41.us@HD` | `cbs-kmov-st-louis-mo-hd/6619` |
| CBS (KMTV) Omaha, NE HD | `KMTVTV31.us@HD` | `cbs-kmtv-omaha-ne-hd/6620` |
| CBS (KMVT) Twin Falls, ID HD | `KMVT111.us@HD` | `cbs-kmvt-twin-falls-id-hd/10139` |
| CBS (KNOE) Monroe, LA HD | `KNOETV81.us@HD` | `cbs-knoe-monroe-la-hd/6621` |
| CBS (KNPL) North Platte, NE HD | `KNPLLD101.us@HD` | `cbs-knpl-north-platte-ne-hd/16135` |
| CBS (KOAM) Pittsburg, KS HD | `KOAMTV71.us@HD` | `cbs-koam-pittsburg-ks-hd/8143` |
| CBS (KOIN) Portland, OR HD | `KOIN61.us@HD` | `cbs-koin-portland-or-hd/3728` |
| CBS (KOLD) Tucson, AZ HD | `KOLDTV131.us@HD` | `cbs-kold-tucson-az-hd/7638` |
| CBS (KOLN) Lincoln, NE HD | `KOLN101.us@HD` | `cbs-koln-lincoln-ne-hd/4740` |
| CBS (KOLR) Springfield, MO HD | `KOLR101.us@HD` | `cbs-kolr-springfield-mo-hd/8085` |
| CBS (KOSA) Midland, TX HD | `KOSATV71.us@HD` | `cbs-kosa-midland-tx-hd/8000` |
| CBS (KOTV) Tulsa, OK HD | `KOTVDT61.us@HD` | `cbs-kotv-tulsa-ok-hd/8152` |
| CBS (KOVR) Sacramento, CA HD | `KOVR131.us@HD` | `cbs-kovr-sacramento-ca-hd/6298` |
| CBS (KPAX) Missoula, MT HD | `KPAXTV81.us@HD` | `cbs-kpax-missoula-mt-hd/6299` |
| CBS (KPHO) Phoenix, AZ HD | `KPHOTV51.us@HD` | `cbs-kpho-phoenix-az-hd/6300` |
| CBS (KPIC) Roseburg, OR | `KPIC41.us@HD` | `cbs-kpic-roseburg-or/4967` |
| CBS (KPIX) San Francisco, CA HD | `KPIXTV51.us@HD` | `cbs-kpix-san-francisco-ca-hd/6321` |
| CBS (KPLO) Reliance/ Pierre, SD | `KPLOTV61.us@HD` | `cbs-kplo-reliance-pierre-sd/4977` |
| CBS (KRCG) Jefferson, MO HD | `KRCG131.us@HD` | `cbs-krcg-jefferson-mo-hd/6301` |
| CBS (KREM) Spokane, WA HD | `KREM21.us@HD` | `cbs-krem-spokane-wa-hd/6302` |
| CBS (KREY) Montrose, CO | `KREYTV101.us@HD` | `cbs-krey-montrose-co/12388` |
| CBS (KREZ) Albuquerque, NM HD | `KREZTV61.us@HD` | `cbs-krez-albuquerque-nm-hd/19179` |
| CBS (KRQE) Albuquerque, NM HD | `KRQE131.us@HD` | `cbs-krqe-albuquerque-nm-hd/6102` |
| CBS (KRTV) Grand Falls, MT | `KRTV31.us@HD` | `cbs-krtv-grand-falls-mt/575` |
| CBS (KSBB-CD) Santa Barbara, CA | `KSBBCD171.us@HD` | `cbs-ksbb-cd-santa-barbara-ca/25518` |
| CBS (KSLA) Shreveport, LA HD | `KSLA121.us@HD` | `cbs-ksla-shreveport-la-hd/7883` |
| CBS (KSTF) Scottsbluff, NE HD | `KSTF101.us@HD` | `cbs-kstf-scottsbluff-ne-hd/18440` |
| CBS (KSWT) Yuma, AZ HD | `KYMADT131.us@HD` | `cbs-kswt-yuma-az-hd/6304` |
| CBS (KTAB) Abilene, TX HD | `KTABTV321.us@HD` | `cbs-ktab-abilene-tx-hd/17136` |
| CBS (KTHV) Little Rock, AR HD | `KTHV111.us@HD` | `cbs-kthv-little-rock-ar-hd/8077` |
| CBS (KTNL) Sitka, AK | `KTNLTV71.us@SD` | `cbs-ktnl-sitka-ak/4981` |
| CBS (KTVL) Medford, OR HD | `KTVL101.us@HD` | `cbs-ktvl-medford-or-hd/7963` |
| CBS (KTVN) Reno, NV HD | `KTVN21.us@HD` | `cbs-ktvn-reno-nv-hd/6229` |
| CBS (KTVO-DT2) Kirskville, MO HD | `KTVO32.us@HD` | `cbs-ktvo-dt2-kirskville-mo-hd/18818` |
| CBS (KTVQ) Billings, MT HD | `KTVQ21.us@HD` | `cbs-ktvq-billings-mt-hd/7549` |
| CBS (KTVT) Fort Worth, TX HD | `KTVT111.us@HD` | `cbs-ktvt-fort-worth-tx-hd/7465` |
| CBS (KUTV) Salt Lake City, UT HD | `KUTV21.us@HD` | `cbs-kutv-salt-lake-city-ut-hd/4460` |
| CBS (KVAL) Eugene, OR HD | `KVALTV131.us@HD` | `cbs-kval-eugene-or-hd/19104` |
| CBS (KVIQ) Eureka, CA HD | `KVIQLD171.us@HD` | `cbs-kviq-eureka-ca-hd/17102` |
| CBS (KWCH) Wichita, KS HD | `KWCHDT331.us@HD` | `cbs-kwch-wichita-ks-hd/8129` |
| CBS (KWTV) Oklahoma City, OK HD | `KWTVDT91.us@HD` | `cbs-kwtv-oklahoma-city-ok-hd/8198` |
| CBS (KWTX) Waco, TX HD | `KWTXTV101.us@HD` | `cbs-kwtx-waco-tx-hd/5848` |
| CBS (KXGN) HD Glendive, MT | `KXGNTV51.us@HD` | `cbs-kxgn-hd-glendive-mt/19260` |
| CBS (KXII) Sherman, TX HD | `KXII121.us@HD` | `cbs-kxii-sherman-tx-hd/8043` |
| CBS (KXIP) Paris, TX | `KXIPLD1.us@SD` | `cbs-kxip-paris-tx/17159` |
| CBS (KXLF) Butte, MT HD | `KXLFTV41.us@HD` | `cbs-kxlf-butte-mt-hd/8920` |
| CBS (KXLH) Helena, MT HD | `KXLHLD91.us@HD` | `cbs-kxlh-helena-mt-hd/8921` |
| CBS (KXLJ-LD) Juneau, AK | `KXLJLD1.us@SD` | `cbs-kxlj-ld-juneau-ak/19499` |
| CBS (KXMB) Bismarck, ND HD | `KXMBTV121.us@HD` | `cbs-kxmb-bismarck-nd-hd/8331` |
| CBS (KXMC) Minot, ND HD | `KXMCTV131.us@HD` | `cbs-kxmc-minot-nd-hd/8321` |
| CBS (KXMD) Williston, ND HD | `KXMDTV111.us@HD` | `cbs-kxmd-williston-nd-hd/8555` |
| CBS (KYLX-LD) Laredo, TX HD | `KYLXLD1.us@SD` | `cbs-kylx-ld-laredo-tx-hd/10346` |
| CBS (KYTX) Tyler, TX HD | `KYTX191.us@HD` | `cbs-kytx-tyler-tx-hd/11007` |
| CBS (KYW) Philadelphia, PA HD | `KYWDT1.us@SD` | `cbs-kyw-philadelphia-pa-hd/8660` |
| CBS (KZTV) Corpus Christi, TX HD | `KZTV101.us@HD` | `cbs-kztv-corpus-christi-tx-hd/7064` |
| CBS (WABI) Bangor, ME HD | `WABITV51.us@HD` | `cbs-wabi-bangor-me-hd/7061` |
| CBS (WAFB) Baton Rouge, LA HD | `WAFB91.us@HD` | `cbs-wafb-baton-rouge-la-hd/7062` |
| CBS (WAGM) Presque Isle, ME HD | `WAGMTV81.us@HD` | `cbs-wagm-presque-isle-me-hd/4728` |
| CBS (WAKA) Montgomery, AL HD | `WAKA81.us@HD` | `cbs-waka-montgomery-al-hd/6564` |
| CBS (WANE) Fort Wayne, IN HD | `WANETV151.us@HD` | `cbs-wane-fort-wayne-in-hd/6565` |
| CBS (WBBM) Chicago, IL HD | `WBBMTV91.us@HD` | `cbs-wbbm-chicago-il-hd/6566` |
| CBS (WBKB) Alpena, MI HD | `WBKBTV111.us@HD` | `cbs-wbkb-alpena-mi-hd/6567` |
| CBS (WBNG) Binghamton, NY HD | `WBNGTV121.us@HD` | `cbs-wbng-binghamton-ny-hd/6568` |
| CBS (WBNS) Columbus, OH HD | `WBNSTV101.us@HD` | `cbs-wbns-columbus-oh-hd/3686` |
| CBS (WBOC) Salisbury, MD HD | `WBOCTV161.us@HD` | `cbs-wboc-salisbury-md-hd/7523` |
| CBS (WBTV) Charlotte, NC HD | `WBTV641.us@HD` | `cbs-wbtv-charlotte-nc-hd/3649` |
| CBS (WBTW) Myrtle Beach, SC HD | `WBTW211.us@HD` | `cbs-wbtw-myrtle-beach-sc-hd/5228` |
| CBS (WBZ) Boston, MA HD | `WBZDT1.us@SD` | `cbs-wbz-boston-ma-hd/3653` |
| CBS (WCAV) Charlottesville, VA HD | `WCAV271.us@HD` | `cbs-wcav-charlottesville-va-hd/3645` |
| CBS (WCAX) Burlington, VT HD | `WCAXTV31.us@HD` | `cbs-wcax-burlington-vt-hd/3660` |
| CBS (WCBI) Colombus, MS HD | `WCBITV41.us@HD` | `cbs-wcbi-colombus-ms-hd/18786` |
| CBS (WCBS) New York, NY HD | `WCBSTV21.us@HD` | `cbs-wcbs-new-york-ny-hd/4555` |
| CBS (WCCO) Minneapolis, MN HD | `WCCOTV41.us@HD` | `cbs-wcco-minneapolis-mn-hd/4775` |
| CBS (WCIA) Champaign, IL HD | `WCIA31.us@HD` | `cbs-wcia-champaign-il-hd/4588` |
| CBS (WCIX-DT2) Champaign, IL | `WCIX552.us@SD` | `cbs-wcix-dt2-champaign-il/18163` |
| CBS (WCSC) Charleston, SC HD | `WCSCTV51.us@HD` | `cbs-wcsc-charleston-sc-hd/7933` |
| CBS (WCTV) Tallahassee, FL HD | `WCTV61.us@HD` | `cbs-wctv-tallahassee-fl-hd/8550` |
| CBS (WCWN-DT3) Albany, NY | `WCWNDT3.us@SD` | `cbs-wcwn-dt3-albany-ny/10905` |
| CBS (WDBJ) Roanoke, VA HD | `WDBJ71.us@HD` | `cbs-wdbj-roanoke-va-hd/3733` |
| CBS (WDEF) Chattanooga, TN HD | `WDEFTV121.us@HD` | `cbs-wdef-chattanooga-tn-hd/9896` |
| CBS (WDTV) Bridgeport, WV HD | `WDTV51.us@HD` | `cbs-wdtv-bridgeport-wv-hd/7030` |
| CBS (WECP) Panama City, FL HD | `WECPLD211.us@HD` | `cbs-wecp-panama-city-fl-hd/10879` |
| CBS (WEVV) Evansville, IN HD | `WEVVTV441.us@HD` | `cbs-wevv-evansville-in-hd/7032` |
| CBS (WFMY) Greensboro, NC HD | `WFMYTV21.us@HD` | `cbs-wfmy-greensboro-nc-hd/4718` |
| CBS (WFOR) Miami, FL HD | `WFORTV41.us@HD` | `cbs-wfor-miami-fl-hd/7033` |
| CBS (WFRV) Green Bay, WI HD | `WFRVTV51.us@HD` | `cbs-wfrv-green-bay-wi-hd/4898` |
| CBS (WFSB) Hartford, CT HD | `WFSB31.us@HD` | `cbs-wfsb-hartford-ct-hd/7034` |
| CBS (WGCL) Atlanta, GA HD | `WGCLDT1.us@SD` | `cbs-wgcl-atlanta-ga-hd/7035` |
| CBS (WGFL) Gainesville, FL HD | `WGFL281.us@HD` | `cbs-wgfl-gainesville-fl-hd/7036` |
| CBS (WGME) Portland, ME HD | `WGMETV231.us@SD` | `cbs-wgme-portland-me-hd/7037` |
| CBS (WHBF) Rock Island, Il HD | `WHBFTV41.us@HD` | `cbs-whbf-rock-island-il-hd/4488` |
| CBS (WHIO) Dayton, OH HD | `WHIOTV71.us@HD` | `cbs-whio-dayton-oh-hd/8791` |
| CBS (WHLT) Laurel, MS HD | `WHLT221.us@HD` | `cbs-whlt-laurel-ms-hd/19171` |
| CBS (WHNT) Huntsville, AL HD | `WHNTTV191.us@HD` | `cbs-whnt-huntsville-al-hd/6719` |
| CBS (WHP) Harrisburg, PA HD | `WHPDT1.us@SD` | `cbs-whp-harrisburg-pa-hd/6720` |
| CBS (WIAT) Birmingham, AL HD | `WIAT421.us@HD` | `cbs-wiat-birmingham-al-hd/6722` |
| CBS (WIBW) Topeka, KS HD | `WIBWTV131.us@HD` | `cbs-wibw-topeka-ks-hd/6721` |
| CBS (WIFR) Rockford, IL HD | `WIFRDT1.us@SD` | `cbs-wifr-rockford-il-hd/6723` |
| CBS (WINK) Fort Myers, FL HD | `WINKTV111.us@HD` | `cbs-wink-fort-myers-fl-hd/7655` |
| CBS (WIVB) Buffalo, NY HD | `WIVBTV41.us@HD` | `cbs-wivb-buffalo-ny-hd/3583` |
| CBS (WIYE) Parkersburg, WV HD | `WIYELD261.us@HD` | `cbs-wiye-parkersburg-wv-hd/17109` |
| CBS (WJAX) Jacksonville, FL HD | `WJAXTV471.us@HD` | `cbs-wjax-jacksonville-fl-hd/6358` |
| CBS (WJHL) Tri-Cities, TN/VA HD | `WJHLTV111.us@HD` | `cbs-wjhl-tri-cities-tnva-hd/6897` |
| CBS (WJTV) Jackson, MS HD | `WJTV121.us@HD` | `cbs-wjtv-jackson-ms-hd/6898` |
| CBS (WJZ) Baltimore, MD HD | `WJZDT1.us@SD` | `cbs-wjz-baltimore-md-hd/6899` |
| CBS (WKBN) Youngstown, OH HD | `WKBNTV331.us@HD` | `cbs-wkbn-youngstown-oh-hd/8522` |
| CBS (WKBT) La Crosse, WI HD | `WKBTDT81.us@HD` | `cbs-wkbt-la-crosse-wi-hd/6900` |
| CBS (WKMG) Orlando, FL HD | `WKMGTV61.us@HD` | `cbs-wkmg-orlando-fl-hd/6901` |
| CBS (WKRC) Cincinnati, OH HD | `WKRCTV121.us@HD` | `cbs-wkrc-cincinnati-oh-hd/3675` |
| CBS (WKRG) Mobile, AL HD | `WKRGTV551.us@HD` | `cbs-wkrg-mobile-al-hd/7601` |
| CBS (WKYT) Lexington, KY HD | `WKYTTV271.us@HD` | `cbs-wkyt-lexington-ky-hd/6241` |
| CBS (WLFI) Lafayette, IN HD | `WLFITV181.us@HD` | `cbs-wlfi-lafayette-in-hd/11346` |
| CBS (WLKY) Louisville, KY HD | `WLKY321.us@HD` | `cbs-wlky-louisville-ky-hd/8269` |
| CBS (WLNS) Lansing, MI HD | `WLNSTV61.us@HD` | `cbs-wlns-lansing-mi-hd/19159` |
| CBS (WLOX-DT2) Biloxi, MS HD | `WLOX132.us@HD` | `cbs-wlox-dt2-biloxi-ms-hd/16338` |
| CBS (WLTX) Columbia, SC HD | `WLTX191.us@HD` | `cbs-wltx-columbia-sc-hd/4764` |
| CBS (WMAZ) Macon, GA HD | `WMAZTV131.us@HD` | `cbs-wmaz-macon-ga-hd/8125` |
| CBS (WMBD) Central Illinois, IL HD | `WMBDTV311.us@HD` | `cbs-wmbd-central-illinois-il-hd/4600` |
| CBS (WMDN) Meridian, MS HD | `WMDN241.us@HD` | `cbs-wmdn-meridian-ms-hd/19174` |
| CBS (WNCN) Raleigh-Durham, NC HD | `WNCN171.us@HD` | `cbs-wncn-raleigh-durham-nc-hd/4701` |
| CBS (WNCT) Greenville, NC HD | `WNCTTV91.us@HD` | `cbs-wnct-greenville-nc-hd/8339` |
| CBS (WNEM) Flint, MI HD | `WNEMTV51.us@HD` | `cbs-wnem-flint-mi-hd/9039` |
| CBS (WNKY-DT2) Bowling Green, KY HD | `WNKY402.us@HD` | `cbs-wnky-dt2-bowling-green-ky-hd/8283` |
| CBS (WOIO) Cleveland, OH HD | `WOIO431.us@HD` | `cbs-woio-cleveland-oh-hd/3677` |
| CBS (WOWK) Huntington, WV HD | `WOWKTV131.us@HD` | `cbs-wowk-huntington-wv-hd/7422` |
| CBS (WPEC) West Palm Beach, FL HD | `WPEC121.us@HD` | `cbs-wpec-west-palm-beach-fl-hd/8256` |
| CBS (WPRI) E. Providence, RI HD | `WPRITV121.us@HD` | `cbs-wpri-e-providence-ri-hd/7760` |
| CBS (WQTV-LP) Murray, KY | `WQTVLP1.us@SD` | `cbs-wqtv-lp-murray-ky/19436` |
| CBS (WRBL) Columbus, GA HD | `WRBL31.us@HD` | `cbs-wrbl-columbus-ga-hd/6486` |
| CBS (WRDW) Augusta, GA HD | `WRDWTV121.us@HD` | `cbs-wrdw-augusta-ga-hd/6682` |
| CBS (WREG) Memphis, TN HD | `WREGTV31.us@HD` | `cbs-wreg-memphis-tn-hd/5188` |
| CBS (WRGB) Albany, NY HD | `WRGB61.us@HD` | `cbs-wrgb-albany-ny-hd/3704` |
| CBS (WROC) Rochester, NY HD | `WROCTV81.us@HD` | `cbs-wroc-rochester-ny-hd/6487` |
| CBS (WSAW) Wausau, WI HD | `WSAWTV71.us@HD` | `cbs-wsaw-wausau-wi-hd/19903` |
| CBS (WSBT) South Bend, IN HD | `WSBTTV281.us@SD` | `cbs-wsbt-south-bend-in-hd/6488` |
| CBS (WSEE) Erie, PA HD | `WSEETV351.us@HD` | `cbs-wsee-erie-pa-hd/6489` |
| CBS (WSHM) Springfield, MA HD | `WSHMLD331.us@HD` | `cbs-wshm-springfield-ma-hd/6490` |
| CBS (WSPA) Spartanburg, SC HD | `WSPATV71.us@HD` | `cbs-wspa-spartanburg-sc-hd/7201` |
| CBS (WSWG) Valdosta, GA HD | `WSWG441.us@HD` | `cbs-wswg-valdosta-ga-hd/6356` |
| CBS (WTAJ) Altoona, PA HD | `WTAJTV101.us@HD` | `cbs-wtaj-altoona-pa-hd/6357` |
| CBS (WTHI) Terre Haute, IN HD | `WTHITV101.us@HD` | `cbs-wthi-terre-haute-in-hd/6359` |
| CBS (WTKR) Norfolk, VA HD | `WTKR31.us@HD` | `cbs-wtkr-norfolk-va-hd/6360` |
| CBS (WTOC) Savannah, GA HD | `WTOCTV111.us@HD` | `cbs-wtoc-savannah-ga-hd/3698` |
| CBS (WTOL) Toledo, OH HD | `WTOL111.us@HD` | `cbs-wtol-toledo-oh-hd/4753` |
| CBS (WTRF) Wheeling, WV HD | `WTRFTV71.us@HD` | `cbs-wtrf-wheeling-wv-hd/6361` |
| CBS (WTSP) Tampa Bay, FL HD | `WTSP101.us@HD` | `cbs-wtsp-tampa-bay-fl-hd/6362` |
| CBS (WTTK) Kokomo, IN HD | `WTTK61.us@HD` | `cbs-wttk-kokomo-in-hd/20215` |
| CBS (WTTV) Indianapolis, IN HD | `WTTV41.us@HD` | `cbs-wttv-indianapolis-in-hd/7677` |
| CBS (WTVF) Nashville, TN HD | `WTVF581.us@SD` | `cbs-wtvf-nashville-tn-hd/6363` |
| CBS (WTVH) Syracuse, NY HD | `WTVH51.us@SD` | `cbs-wtvh-syracuse-ny-hd/3664` |
| CBS (WTVR) Richmond, VA HD | `WTVRTV61.us@HD` | `cbs-wtvr-richmond-va-hd/8192` |
| CBS (WTVY) Dothan, AL HD | `WTVY41.us@HD` | `cbs-wtvy-dothan-al-hd/7934` |
| CBS (WUSA) District of Columbia HD | `WUSA91.us@HD` | `cbs-wusa-district-of-columbia-hd/3742` |
| CBS (WVLT) Knoxville, TN HD | `WVLTTV81.us@HD` | `cbs-wvlt-knoxville-tn-hd/6730` |
| CBS (WVNS) Beckley, WV HD | `WVNSTV591.us@HD` | `cbs-wvns-beckley-wv-hd/6731` |
| CBS (WWJ) Detroit, MI HD | `WWJDT1.us@SD` | `cbs-wwj-detroit-mi-hd/2812` |
| CBS (WWL) New Orleans, LA HD | `WWLDT1.us@SD` | `cbs-wwl-new-orleans-la-hd/6732` |
| CBS (WWMT) Kalamazoo, MI HD | `WWMT31.us@HD` | `cbs-wwmt-kalamazoo-mi-hd/6733` |
| CBS (WWNY-CD2) Massena, NY | `WWNYCD282.us@HD` | `cbs-wwny-cd2-massena-ny/5325` |
| CBS (WWNY) Watertown, NY HD | `WWNYTV71.us@HD` | `cbs-wwny-watertown-ny-hd/30` |
| CBS (WWTV) Cadillac, MI HD | `WWTV91.us@HD` | `cbs-wwtv-cadillac-mi-hd/11452` |
| CBS (WYCW-DT2) Asheville, SC | `WYCW402.us@SD` | `cbs-wycw-dt2-asheville-sc/11550` |
| CBS (WYMT) Hazard, KY HD | `WYMTTV571.us@HD` | `cbs-wymt-hazard-ky-hd/6117` |
| CBS (WYOU) Scranton, PA HD | `WYOU221.us@HD` | `cbs-wyou-scranton-pa-hd/7535` |
| CBS (ZBM) Hamilton, Bermuda | `WZMQ192.us@HD` | `cbs-zbm-hamilton-bermuda/5002` |
| CBS Sports Network USA HD | `CBSSportsNetworkUSA.us@SD` | `cbs-sports-network-usa-hd/6985` |
| CHARGE! | `Charge.us@SD` | `charge/15228` |
| Charge! (WJAC-DT2) Johnstown, PA | `WJACTV62.us@SD` | `metv-wjac-dt2-johnstown-pa/9520` |
| Charge! (WTVD3) Raleigh, NC | `WTVD283.us@SD` | `charge-wtvd3-raleigh-nc/5225` |
| Cinemax - Eastern Feed | `Cinemax.us@East` | `cinemax--eastern-feed/632` |
| Cinemax - Pacific Feed | `Cinemax.us@West` | `cinemax--pacific-feed/1215` |
| Cinemax Action - Eastern HD | `ActionMax.us@East` | `actionmax--eastern-hd/7094` |
| Cinemax Action - Pacific HD | `ActionMax.us@West` | `actionmax--pacific-hd/8473` |
| CMT US - Eastern Feed HD | `CMT.us@East` | `cmt-us--eastern-feed-hd/6344` |
| CMT US - Pacific Feed HD | `CMT.us@West` | `cmt-us--pacific-feed-hd/6345` |
| CNBC USA HD | `CNBC.us@SD` | `cnbc-usa-hd/6119` |
| CNN | `CNN.us@SD` | `cnn/70` |
| CNN International North America | `CNNInternational.us@NorthAmerica` | `cnn-international-north-america/3008` |
| Comedy Central HD - Eastern Feed | `ComedyCentral.us@East` | `comedy-central-hd--eastern-feed/6957` |
| Comedy Central HD - Pacific Feed | `ComedyCentral.us@West` | `comedy-central-hd--pacific-feed/16224` |
| Comet TV | `Comet.us@SD` | `comet-tv/16811` |
| Connecticut Public Television (WEDW) Bridgeport | `WEDW491.us@SD` | `connecticut-public-television-wedw-bridgeport/2065` |
| Court TV (WRPX-TV2) Raleigh-Durham, NC | `WRPXTV472.us@SD` | `court-tv-wrpx-tv2-raleigh-durham-nc/12001` |
| Court TV Network | `CourtTV.us@SD` | `court-tv-network/33650` |
| Cozi (WNBC-DT2) New York, NY | `WNBC472.us@SD` | `cozi-wnbc-dt2-new-york-ny/10919` |
| Cozi (WRAL-DT2) Raleigh-Durham, NC | `WRALTV52.us@SD` | `cozi-wral-dt2-raleigh-durham-nc/8340` |
| CW (KASW) Phoenix, AZ | `KASW611.us@HD` | `cw-kasw-phoenix-az/1181` |
| CW (WBKP) Calumet, MI | `WBKP51.us@SD` | `cw-wbkp-calumet-mi/4943` |
| CW (WBSF) Flint, MI | `WBSF661.us@HD` | `cw-wbsf-flint-mi/6958` |
| CW (WCCT) Hartford, CT | `WCCTTV81.us@HD` | `cw-wcct-hartford-ct/2057` |
| CW (WCWJ) Jacksonville, FL | `WCWJ41.us@HD` | `cw-wcwj-jacksonville-fl/2046` |
| CW (WKCF) Orlando, FL | `WKCF21.us@HD` | `cw-wkcf-orlando-fl/2515` |
| CW (WLFL) Raleigh, NC HD | `WLFL281.us@HD` | `cw-wlfl-raleigh-nc-hd/4821` |
| CW (WPXT) Portland, ME | `WPXT511.us@HD` | `cw-wpxt-portland-me/2695` |
| DABL (WRAZ3) Raleigh-Durham, NC | `WRAZ503.us@SD` | `dabl-wraz3-raleigh-durham-nc/35201` |
| Daystar - Network HD | `DaystarTV.us@SD` | `daystar--network-hd/13634` |
| Daystar (WACN) Raleigh, NC | `WACNLP1.us@SD` | `daystar-wacn-raleigh-nc/5074` |
| Discovery Channel (US) - Eastern Feed | `DiscoveryChannel.us@East` | `discovery-channel-us--eastern-feed/649` |
| Discovery Channel (US) - Pacific Feed | `DiscoveryChannel.us@West` | `discovery-channel-us--pacific-feed/1206` |
| Discovery Family Channel HD | `DiscoveryFamily.us@SD` | `discovery-family-channel-hd/8518` |
| Discovery Life Channel HD | `DiscoveryLife.us@SD` | `discovery-life-channel-hd/16423` |
| Disney - Eastern Feed | `DisneyChannel.us@East` | `disney--eastern-feed/595` |
| Disney - Pacific Feed | `DisneyChannel.us@West` | `disney--pacific-feed/1271` |
| Disney Junior USA HD - East | `DisneyJunior.us@East` | `disney-junior-usa-hd--east/10523` |
| Disney Junior USA HD - West | `DisneyJunior.us@West` | `disney-junior-usa-hd--west/16229` |
| Disney XD USA HD - Eastern Feed | `DisneyXD.us@East` | `disney-xd-usa-hd--eastern-feed/6236` |
| Disney XD USA HD - Pacific Feed | `DisneyXD.us@West` | `disney-xd-usa-hd--pacific-feed/16228` |
| E! Entertainment USA HD - East | `E.us@East` | `e-entertainment-usa-hd--east/6659` |
| E! Entertainment USA HD - Pacific | `E.us@West` | `e-entertainment-usa-hd--pacific/17059` |
| Enlace | `EnlaceTBN.us@SD` | `enlace/3256` |
| ES.TV HD | `ESTV.us@SD` | `estv-hd/18805` |
| ESPN College Extra 1 | `ESPNCollegeExtra1.us@SD` | `espn-college-extra-1/9982` |
| ESPN College Extra 2 | `ESPNCollegeExtra2.us@SD` | `espn-college-extra-2/15433` |
| ESPN College Extra 3 | `ESPNCollegeExtra3.us@SD` | `espn-college-extra-3/15435` |
| ESPN College Extra 4 | `ESPNCollegeExtra4.us@SD` | `espn-college-extra-4/15437` |
| ESPN College Extra 5 | `ESPNCollegeExtra5.us@SD` | `espn-college-extra-5/15439` |
| ESPN College Extra 6 | `ESPNCollegeExtra6.us@SD` | `espn-college-extra-6/15441` |
| ESPN College Extra 7 | `ESPNCollegeExtra7.us@SD` | `espn-college-extra-7/15352` |
| ESPN College Extra 8 | `ESPNCollegeExtra8.us@SD` | `espn-college-extra-8/15445` |
| ESPN HD | `ESPN.us@SD` | `espn-hd/3036` |
| ESPN News HD | `ESPNews.us@SD` | `espn-news-hd/6246` |
| ESPN U | `ESPNU.us@SD` | `espn-u/3331` |
| ESPN2 HD | `ESPN2.us@SD` | `espn2-hd/3379` |
| EWTN USA | `EWTN.us@English` | `ewtn-usa/620` |
| Food Network USA HD - Eastern Feed | `FoodNetwork.us@East` | `food-network-usa-hd--eastern-feed/3438` |
| Food Network USA HD - Pacific Feed | `FoodNetwork.us@West` | `food-network-usa-hd--pacific-feed/11581` |
| FOX - Eastern | `Fox.us@East` | `fox--eastern/1229` |
| FOX - Pacific | `Fox.us@West` | `fox--pacific/4409` |
| FOX (K06IQ) Newberry Springs, CA | `K06IQD111.us@HD` | `fox-k06iq-newberry-springs-ca/13346` |
| FOX (K13AV-DT3) Denver, CO | `K13AVD3.us@SD` | `fox-k13av-dt3-denver-co/17836` |
| FOX (K14JZ-D3) Denver, CO | `K14JZD103.us@SD` | `fox-k14jz-d3-denver-co/12638` |
| FOX (K18LH) Lewiston, ID | `K18LHD281.us@HD` | `fox-k18lh-lewiston-id/7254` |
| FOX (K28CW) Flagstaff, AZ | `K28CWD451.us@HD` | `fox-k28cw-flagstaff-az/15559` |
| FOX (K31IQ-D3) Sterling, CO | `K31IQD3.us@SD` | `fox-k31iq-d3-sterling-co/12644` |
| FOX (K33KJ-D) Crested Butte, CO | `K33KJD311.us@SD` | `fox-k33kj-d-crested-butte-co/19994` |
| FOX (K38KL-D) Ellensburg, WA | `K38KLD1.us@SD` | `fox-k38kl-d-ellensburg-wa/15124` |
| FOX (K39FC-D) East Flagstaff, AZ | `K39FCD1.us@SD` | `fox-k39fc-d-east-flagstaff-az/15557` |
| FOX (K44JP) Cottage Grove, OR | `K44JPD1.us@SD` | `fox-k44jp-cottage-grove-or/18282` |
| FOX (K47AE-D) Inyokern, CA | `K47AED1.us@SD` | `fox-k47ae-d-inyokern-ca/13347` |
| FOX (K48GI-D) Flagstaff, AZ | `K48GID1.us@SD` | `fox-k48gi-d-flagstaff-az/15558` |
| FOX (KAAS-LP) Garden City, KS | `KAASLP171.us@HD` | `fox-kaas-lp-garden-city-ks/28104` |
| FOX (KAAS-TV) Salina, KS HD | `KAASTV171.us@HD` | `fox-kaas-tv-salina-ks-hd/8170` |
| FOX (KABB) San Antonio, TX HD | `KABB291.us@HD` | `fox-kabb-san-antonio-tx-hd/9767` |
| FOX (KADN) Lafayette, LA HD | `KADNTV151.us@HD` | `fox-kadn-lafayette-la-hd/8059` |
| FOX (KAII) Wailuku, HI | `KAIITV71.us@HD` | `fox-kaii-wailuku-hi/5014` |
| FOX (KARD) Monroe, LA HD | `KARD141.us@HD` | `fox-kard-monroe-la-hd/7899` |
| FOX (KAYU) Spokane, WA HD | `KAYUTV281.us@HD` | `fox-kayu-spokane-wa-hd/3910` |
| FOX (KBAK-DT2) Bakersfield, CA | `KBAKTV582.us@HD` | `fox-kbak-dt2-bakersfield-ca/17408` |
| FOX (KBFX) Bakersfield, CA HD | `KBFXCD581.us@HD` | `fox-kbfx-bakersfield-ca-hd/7564` |
| FOX (KBIM-TV2) Albuquerque, NM | `KBIMTV102.us@HD` | `fox-kbim-tv2-albuquerque-nm/31015` |
| FOX (KBRR) Thief River Falls, ND | `KBRR101.us@HD` | `fox-kbrr-thief-river-falls-nd/4292` |
| FOX (KBSI) Cape Girardeau, MO HD | `KBSI231.us@HD` | `fox-kbsi-cape-girardeau-mo-hd/6153` |
| Fox (KBVK-LP) Spencer, IA | `KBVKLP1.us@SD` | `fox-kbvk-lp-spencer-ia/28920` |
| FOX (KBVU) Eureka, CA HD | `KBVU281.us@HD` | `fox-kbvu-eureka-ca-hd/7008` |
| FOX (KBWU-LD) Richland, Etc.,, WA | `KBWULD111.us@HD` | `fox-kbwu-ld-richland-etc-wa/25486` |
| FOX (KCIT) Amarillo, TX HD | `KCIT141.us@HD` | `fox-kcit-amarillo-tx-hd/17133` |
| FOX (KCOY-DT2) Santa Maria, CA | `KCOYTV122.us@HD` | `fox-kcoy-dt2-santa-maria-ca/14629` |
| FOX (KCVU) Chico, CA HD | `KCVU201.us@HD` | `fox-kcvu-chico-ca-hd/9010` |
| FOX (KCYU) Tri-Cities, WA HD | `KCYULD411.us@HD` | `fox-kcyu-tri-cities-wa-hd/7986` |
| FOX (KDFW) Dallas, TX HD | `KDFW41.us@HD` | `fox-kdfw-dallas-tx-hd/5412` |
| FOX (KDFX) Palm Springs, CA HD | `KDFXCD391.us@HD` | `fox-kdfx-palm-springs-ca-hd/4935` |
| FOX (KDSM) Des Moines, IA HD | `KDSMTV81.us@HD` | `fox-kdsm-des-moines-ia-hd/6400` |
| FOX (KDVR) Denver, CO HD | `KDVR311.us@HD` | `fox-kdvr-denver-co-hd/6401` |
| FOX (KECY) Yuma, AZ HD | `KECYTV91.us@HD` | `fox-kecy-yuma-az-hd/6403` |
| FOX (KESQ-DT13) Palm Springs, CA | `KESQDT13.us@SD` | `fox-kesq-dt13-palm-springs-ca/18435` |
| FOX (KEVN) Rapid City, SD HD | `KEVNLD71.us@HD` | `fox-kevn-rapid-city-sd-hd/6672` |
| FOX (KEYC-DT2) Mankato, MN HD | `KEYCTV122.us@HD` | `fox-keyc-dt2-mankato-mn-hd/19344` |
| FOX (KFCT) Fort Collins, CO HD | `KFCT221.us@HD` | `fox-kfct-fort-collins-co-hd/7556` |
| FOX (KFFX) Yakima, WA HD | `KFFXTV111.us@HD` | `fox-kffx-yakima-wa-hd/7973` |
| FOX (KFJX) Pittsburg, KS HD | `KFJX141.us@HD` | `fox-kfjx-pittsburg-ks-hd/8138` |
| FOX (KFNB) Casper, WY HD | `KFNB201.us@HD` | `fox-kfnb-casper-wy-hd/9917` |
| FOX (KFNE) Riverton, WY HD | `KFNE101.us@HD` | `fox-kfne-riverton-wy-hd/7558` |
| FOX (KFNR) Rawlins, WY HD | `KFNR111.us@HD` | `fox-kfnr-rawlins-wy-hd/7557` |
| FOX (KFOX) El Paso, TX HD | `KFOXTV91.us@HD` | `fox-kfox-el-paso-tx-hd/13535` |
| FOX (KFQX) Grand Junction, CO | `KFQX41.us@HD` | `fox-kfqx-grand-junction-co/1986` |
| FOX (KFTA) Fayetteville, AR HD | `KFTATV341.us@HD` | `fox-kfta-fayetteville-ar-hd/6407` |
| FOX (KFXK) Longview, TX HD | `KFXKTV511.us@HD` | `fox-kfxk-longview-tx-hd/7277` |
| FOX (KFXL-LD) Lufkin, TX | `KFXLLD301.us@HD` | `fox-kfxl-ld-lufkin-tx/11639` |
| FOX (KFXL) Lincoln, NE HD | `KFXLTV511.us@HD` | `fox-kfxl-lincoln-ne-hd/7273` |
| FOX (KHAW) Hilo, HI | `KHAWTV111.us@HD` | `fox-khaw-hilo-hi/5013` |
| FOX (KHGI-TV2) Lincoln, NE HD | `KHGITV132.us@HD` | `fox-khgi-tv2-lincoln-ne-hd/18602` |
| FOX (KHMT) Hardin, MT HD | `KHMT41.us@HD` | `fox-khmt-hardin-mt-hd/7276` |
| FOX (KHON) Lihue, HI HD | `KHONTV21.us@HD` | `fox-khon-lihue-hi-hd/7670` |
| FOX (KIDY) San Angelo, TX HD | `KIDY61.us@HD` | `fox-kidy-san-angelo-tx-hd/17157` |
| FOX (KIDZ) Abilene, TX | `KIDZLD1.us@SD` | `fox-kidz-abilene-tx/18678` |
| FOX (KIIT) North Platte, NE HD | `KIITCD111.us@HD` | `fox-kiit-north-platte-ne-hd/10251` |
| FOX (KJNB-LD) Jonesboro, AR HD | `KJNBLD1.us@SD` | `fox-kjnb-ld-jonesboro-ar-hd/20008` |
| Fox (KJNE-LP) Jonesboro, AR | `KJNELP1.us@SD` | `fox-kjne-lp-jonesboro-ar/29845` |
| FOX (KJRR) Jamestown, ND HD | `KJRR71.us@HD` | `fox-kjrr-jamestown-nd-hd/8542` |
| FOX (KJTL) Wichita Falls, TX HD | `KJTL181.us@HD` | `fox-kjtl-wichita-falls-tx-hd/7481` |
| FOX (KJTV) Lubbock, TX HD | `KJTVTV341.us@HD` | `fox-kjtv-lubbock-tx-hd/6147` |
| FOX (KJUD-DT3) Juneau, AK | `KJUD83.us@HD` | `fox-kjud-dt3-juneau-ak/13235` |
| FOX (KKFX) Santa Barbara, CA HD | `KKFXCD241.us@HD` | `fox-kkfx-santa-barbara-ca-hd/8098` |
| FOX (KKRP-LD) St. George, UT | `KKRPLD131.us@HD` | `fox-kkrp-ld-st-george-ut/30225` |
| FOX (KLJB) Davenport, IA HD | `KLJB261.us@HD` | `fox-kljb-davenport-ia-hd/4490` |
| FOX (KLRT) Little Rock, AR HD | `KLRTTV421.us@HD` | `fox-klrt-little-rock-ar-hd/9285` |
| FOX (KLSR) Eugene, OR HD | `KLSRTV341.us@HD` | `fox-klsr-eugene-or-hd/19102` |
| FOX (KLWY) Cheyenne, WY HD | `KLWY271.us@HD` | `fox-klwy-cheyenne-wy-hd/7547` |
| FOX (KMIZ-DT4) Columbia, MO | `KMIZ174.us@HD` | `fox-kmiz-dt4-columbia-mo/18643` |
| FOX (KMJT) Ogden, KS | `KMJTLP1.us@SD` | `fox-kmjt-ogden-ks/8160` |
| FOX (KMPH-CD) Fresno, CA | `KMPHCD171.us@SD` | `fox-kmph-cd-fresno-ca/13395` |
| FOX (KMPH) Fresno, CA HD | `KMPHTV261.us@HD` | `fox-kmph-fresno-ca-hd/9360` |
| FOX (KMSB) Tucson, AZ HD | `KMSB111.us@HD` | `fox-kmsb-tucson-az-hd/7637` |
| FOX (KMSP) Minneapolis, MN HD | `KMSPDT1.us@SD` | `fox-kmsp-minneapolis-mn-hd/4776` |
| FOX (KMSS) Shreveport, LA HD | `KMSSTV451.us@HD` | `fox-kmss-shreveport-la-hd/7887` |
| FOX (KMVT3) Twin Falls, ID | `KMVT113.us@SD` | `fox-kmvt-dt3-twin-falls-id/18616` |
| FOX (KMVU) Medford, OR HD | `KMVUDT261.us@HD` | `fox-kmvu-medford-or-hd/7966` |
| FOX (KNIN) Boise, ID HD | `KNINTV91.us@HD` | `fox-knin-boise-id-hd/6286` |
| FOX (KNOP-TV2) North Platte, NE | `KNOPTV22.us@HD` | `fox-knop-dt2-north-platte-ne/18587` |
| FOX (KNPN) St. Joseph, MO HD | `KNPNLD1.us@SD` | `fox-knpn-st-joseph-mo-hd/17190` |
| FOX (KNRR) Pembina, ND | `KNRR121.us@HD` | `fox-knrr-pembina-nd/4293` |
| FOX (KOAM-DT2) Joplin, MO | `KOAMTV72.us@HD` | `fox-koam-dt2-joplin-mo/18572` |
| Fox (KOCW) Hoisington, KS | `KOCW171.us@HD` | `fox-kocw-hoisington-ks/29019` |
| FOX (KOKH) Oklahoma City, OK HD | `KOKHTV251.us@HD` | `fox-kokh-oklahoma-city-ok-hd/8199` |
| FOX (KPEJ) Midland, TX HD | `KPEJTV241.us@HD` | `fox-kpej-midland-tx-hd/6159` |
| FOX (KPSP-DT9) Palm Springs, CA | `KPSPCD9.us@SD` | `fox-kpsp-dt9-palm-springs-ca/18519` |
| FOX (KPTH) Sioux City, IA HD | `KPTH441.us@HD` | `fox-kpth-sioux-city-ia-hd/4650` |
| FOX (KPTM) Omaha, NE HD | `KPTM421.us@HD` | `fox-kptm-omaha-ne-hd/4741` |
| Fox (KPTP-LD) Norfolk, NE | `KPTPLD441.us@HD` | `fox-kptp-ld-norfolk-ne/27221` |
| FOX (KPTV) Portland, OR HD | `KPTV491.us@HD` | `fox-kptv-portland-or-hd/3731` |
| FOX (KQDS) Duluth, MN HD | `KQDSTV211.us@HD` | `fox-kqds-duluth-mn-hd/6744` |
| FOX (KQFX) Columbia, MO HD | `KQFXLD221.us@HD` | `fox-kqfx-columbia-mo-hd/8012` |
| FOX (KRBK) Osage Beach, MO HD | `KRBK491.us@HD` | `fox-krbk-osage-beach-mo-hd/10111` |
| FOX (KREZ-TV2) Albuquerque, NM | `KREZTV62.us@HD` | `fox-krez-tv2-albuquerque-nm/31014` |
| FOX (KRIV) Houston, TX HD | `KRIV261.us@HD` | `fox-kriv-houston-tx-hd/6745` |
| FOX (KRQE-DT2) Albuquerque, NM HD | `KRQE132.us@HD` | `fox-krqe-dt2-albuquerque-nm-hd/31011` |
| FOX (KRXI) Reno, NV HD | `KRXITV211.us@HD` | `fox-krxi-reno-nv-hd/6233` |
| FOX (KSAS-LP) Dodge City, KS | `KSASLP171.us@HD` | `fox-ksas-lp-dodge-city-ks/30774` |
| FOX (KSAS-TV) Wichita, KS HD | `KSASTV361.us@SD` | `fox-ksas-tv-wichita-ks-hd/6746` |
| FOX (KSAZ) Phoenix, AZ HD | `KSAZTV101.us@HD` | `fox-ksaz-phoenix-az-hd/6331` |
| FOX (KSNT-DT2) Topeka, KS HD | `KSNT272.us@HD` | `fox-ksnt-dt2-topeka-ks-hd/17276` |
| FOX (KSTU) Salt Lake City, UT HD | `KSTU131.us@HD` | `fox-kstu-salt-lake-city-ut-hd/4465` |
| FOX (KSVT) Twin Falls, ID HD | `KSVTLD1.us@SD` | `fox-ksvt-twin-falls-id-hd/17282` |
| FOX (KSWB) San Diego, CA HD | `KSWBTV691.us@HD` | `fox-kswb-san-diego-ca-hd/6749` |
| FOX (KTBC) Austin, TX HD | `KTBC71.us@HD` | `fox-ktbc-austin-tx-hd/4827` |
| FOX (KTBY) Anchorage, AK HD | `KTBY41.us@HD` | `fox-ktby-anchorage-ak-hd/9446` |
| FOX (KTMF-LD2) Kalispell, MT | `KTMFLD422.us@HD` | `fox-ktmf-ld2-kalispell-mt/31186` |
| FOX (KTMJ) Topeka, KS HD | `KTMJCD431.us@HD` | `fox-ktmj-topeka-ks-hd/8147` |
| FOX (KTTV) Los Angeles, CA HD | `KTTV111.us@HD` | `fox-kttv-los-angeles-ca-hd/4556` |
| FOX (KTVE-DT2) Monroe, LA | `KTVE102.us@HD` | `fox-ktve-dt2-monroe-la/11878` |
| FOX (KTVI) St. Louis, MO HD | `KTVI21.us@HD` | `fox-ktvi-st-louis-mo-hd/6611` |
| FOX (KTVU) San Francisco, CA HD | `KTVU41.us@HD` | `fox-ktvu-san-francisco-ca-hd/6612` |
| FOX (KTVZ-DT3) Bend, OR | `KTVZ213.us@SD` | `fox-ktvz-dt3-bend-or/13159` |
| FOX (KTXL) Sacramento, CA HD | `KTXL401.us@HD` | `fox-ktxl-sacramento-ca-hd/6272` |
| FOX (KVCT) Victoria, TX HD | `KVCT191.us@HD` | `fox-kvct-victoria-tx-hd/6614` |
| FOX (KVHP) Lake Charles, LA HD | `KVHP291.us@HD` | `fox-kvhp-lake-charles-la-hd/6615` |
| FOX (KVRR) Fargo, ND HD | `KVRR151.us@HD` | `fox-kvrr-fargo-nd-hd/7516` |
| FOX (KVVU) Las Vegas, NV HD | `KVVUTV51.us@HD` | `fox-kvvu-las-vegas-nv-hd/6616` |
| FOX (KWKT) Waco, TX HD | `KWKTTV441.us@HD` | `fox-kwkt-waco-tx-hd/6274` |
| Fox (KWVC-LD) Malaga, Ect, WA | `KWVCLD1.us@SD` | `fox-kwvc-ld-malaga-ect-wa/26224` |
| Fox (KWYB-LD2) Bozeman, MT | `KWYBLD282.us@HD` | `fox-kwyb-ld2-bozeman-mt/31185` |
| FOX (KXFX) Brownsville, TX | `KXFXCD671.us@HD` | `fox-kxfx-brownsville-tx/5389` |
| FOX (KXLT) Rochester, MN HD | `KXLTTV471.us@HD` | `fox-kxlt-rochester-mn-hd/6617` |
| FOX (KXND-LD) Minot, ND HD | `KXNDLD1.us@SD` | `fox-kxnd-ld-minot-nd-hd/8314` |
| FOX (KXOF) Laredo, TX HD | `KXOFCD311.us@HD` | `fox-kxof-laredo-tx-hd/6618` |
| FOX (KXPI-DT2) Pocatello, ID | `KXPILD32.us@HD` | `fox-kxpi-dt2-pocatello-id/18312` |
| FOX (KXPI) HD Pocatello, ID | `KXPILD31.us@SD` | `fox-kxpi-hd-pocatello-id/8603` |
| FOX (KXRM) Colorado Springs, CO HD | `KXRMTV211.us@HD` | `fox-kxrm-colorado-springs-co-hd/7994` |
| FOX (KXVA) Abilene, TX HD | `KXVA151.us@HD` | `fox-kxva-abilene-tx-hd/17138` |
| FOX (KYLE-DT2) Bryan, TX HD | `KYLETV282.us@HD` | `fox-kyle-dt2-bryan-tx-hd/16824` |
| FOX (KYOU) Ottumwa, IA HD | `KYOUTV151.us@HD` | `fox-kyou-ottumwa-ia-hd/18819` |
| FOX (KZJO-DT2) Seattle, WA | `KZJO222.us@HD` | `fox-kzjo-dt2-seattle-wa/11753` |
| FOX (W24DB-D) Clarks Summit, PA | `W24DBD241.us@HD` | `fox-w24db-d-clarks-summit-pa/20360` |
| FOX (WABG-DT2) Greenville, MS HD | `WABGTV62.us@HD` | `fox-wabg-dt2-greenville-ms-hd/18820` |
| FOX (WACH) Columbia, SC HD | `WACH571.us@HD` | `fox-wach-columbia-sc-hd/4766` |
| FOX (WAGA) Atlanta, GA HD | `WAGATV51.us@HD` | `fox-waga-atlanta-ga-hd/6275` |
| FOX (WAHU) Charlottesville, VA HD | `WAHUCD1.us@SD` | `fox-wahu-charlottesville-va-hd/19180` |
| FOX (WALA) Mobile, AL HD | `WALATV101.us@HD` | `fox-wala-mobile-al-hd/6276` |
| FOX (WBFF) Baltimore, MD HD | `WBFF451.us@HD` | `fox-wbff-baltimore-md-hd/8646` |
| FOX (WBKO-DT2) Bowling Green, KY HD | `WBKO132.us@HD` | `fox-wbko-dt2-bowling-green-ky-hd/5003` |
| FOX (WBRC) Birmingham, AL HD | `WBRC61.us@HD` | `fox-wbrc-birmingham-al-hd/7575` |
| FOX (WCCU) Champaign, IL HD | `WCCU31.us@HD` | `fox-wccu-champaign-il-hd/15143` |
| FOX (WCOV) Montgomery, AL HD | `WCOVTV201.us@HD` | `fox-wcov-montgomery-al-hd/6573` |
| FOX (WDAF) Kansas City, MO HD | `WDAFTV41.us@HD` | `fox-wdaf-kansas-city-mo-hd/4848` |
| FOX (WDBD) Jackson, MS HD | `WDBD401.us@HD` | `fox-wdbd-jackson-ms-hd/6574` |
| FOX (WDFX) Dothan, AL HD | `WDFXTV341.us@HD` | `fox-wdfx-dothan-al-hd/6575` |
| FOX (WDKY) Lexington, KY HD | `WDKYTV561.us@HD` | `fox-wdky-lexington-ky-hd/6576` |
| FOX (WDRB) Louisville, KY HD | `WDRB411.us@HD` | `fox-wdrb-louisville-ky-hd/6577` |
| FOX (WEMT) Tri-Cities, TN/VA HD | `WEMT391.us@HD` | `fox-wemt-tri-cities-tnva-hd/6579` |
| FOX (WEUX) Eau Claire, WI HD | `WEUX481.us@HD` | `fox-weux-eau-claire-wi-hd/19933` |
| FOX (WFFF) Burlington, VT HD | `WFFFTV441.us@HD` | `fox-wfff-burlington-vt-hd/4528` |
| FOX (WFFT) Fort Wayne, IN HD | `WFFTTV551.us@HD` | `fox-wfft-fort-wayne-in-hd/6581` |
| FOX (WFLD) Chicago, IL HD | `WFLD501.us@HD` | `fox-wfld-chicago-il-hd/8583` |
| FOX (WFLX) West Palm Beach, FL HD | `WFLX291.us@HD` | `fox-wflx-west-palm-beach-fl-hd/8257` |
| FOX (WFOX) Jacksonville, FL HD | `WFOXTV301.us@HD` | `fox-wfox-jacksonville-fl-hd/16343` |
| FOX (WFQX) Traverse City/Cadillac, MI HD | `WFQXTV321.us@HD` | `fox-wfqx-traverse-citycadillac-mi-hd/7060` |
| FOX (WFTC) Minneapolis, MN | `WFTC91.us@HD` | `fox-wftc-minneapolis-mn/13608` |
| FOX (WFTX) Cape Coral, FL HD | `WFTXTV361.us@HD` | `fox-wftx-cape-coral-fl-hd/4815` |
| FOX (WFUP) Vanderbilt/ Gaylord, MI | `WFUP451.us@HD` | `fox-wfup-vanderbilt-gaylord-mi/1259` |
| FOX (WFVX) Bangor, ME HD | `WFVXLD71.us@HD` | `fox-wfvx-bangor-me-hd/7058` |
| FOX (WFXB) Lumberton, NC HD | `WFXB431.us@HD` | `fox-wfxb-lumberton-nc-hd/7059` |
| FOX (WFXG) Augusta, GA HD | `WFXG541.us@HD` | `fox-wfxg-augusta-ga-hd/6684` |
| FOX (WFXI) Morehead, NC HD | `WFXIDT1.us@SD` | `fox-wfxi-morehead-nc-hd/5646` |
| FOX (WFXL) Albany, GA HD | `WFXL311.us@HD` | `fox-wfxl-albany-ga-hd/6371` |
| FOX (WFXP) Erie, PA HD | `WFXP661.us@HD` | `fox-wfxp-erie-pa-hd/6372` |
| FOX (WFXR) Roanoke, VA HD | `WFXR271.us@HD` | `fox-wfxr-roanoke-va-hd/3738` |
| FOX (WFXT) Boston, MA | `WFXT251.us@HD` | `fox-wfxt-boston-ma/338` |
| FOX (WFXV) Utica, NY HD | `WFXV331.us@HD` | `fox-wfxv-utica-ny-hd/6374` |
| FOX (WGBC) Meridian, MS HD | `WGBC301.us@HD` | `fox-wgbc-meridian-ms-hd/6375` |
| FOX (WGGB-DT2) Springfield, MA HD | `WGGBTV402.us@HD` | `fox-wggb-dt2-springfield-ma-hd/7731` |
| FOX (WGHP) Greensboro, NC HD | `WGHP81.us@HD` | `fox-wghp-greensboro-nc-hd/4717` |
| FOX (WGMB) Baton Rouge, LA HD | `WGMBTV441.us@HD` | `fox-wgmb-baton-rouge-la-hd/8068` |
| FOX (WGXA) Macon, GA HD | `WGXA241.us@HD` | `fox-wgxa-macon-ga-hd/8124` |
| FOX (WHBQ) Memphis, TN HD | `WHBQTV131.us@HD` | `fox-whbq-memphis-tn-hd/7872` |
| FOX (WHNS) Greenville, SC HD | `WHNS211.us@HD` | `fox-whns-greenville-sc-hd/7192` |
| FOX (WHSV-DT2) Harrisonburg, VA HD | `WHSVTV32.us@HD` | `fox-whsv-dt2-harrisonburg-va-hd/19190` |
| FOX (WICZ) Binghamton, NY HD | `WICZTV401.us@HD` | `fox-wicz-binghamton-ny-hd/4744` |
| FOX (WITI) Milwaukee, WI HD | `WITI61.us@HD` | `fox-witi-milwaukee-wi-hd/6853` |
| FOX (WJBK) Detroit, MI HD | `WJBK21.us@HD` | `fox-wjbk-detroit-mi-hd/2815` |
| FOX (WJKT) Jackson, TN HD | `WJKT161.us@HD` | `fox-wjkt-jackson-tn-hd/18828` |
| FOX (WJW) Cleveland, OH HD | `WJWDT1.us@SD` | `fox-wjw-cleveland-oh-hd/3679` |
| FOX (WJZY) Charlotte, NC HD | `WJZY551.us@HD` | `fox-wjzy-charlotte-nc-hd/4709` |
| FOX (WLAX) La Crosse, WI HD | `WLAX251.us@HD` | `fox-wlax-la-crosse-wi-hd/8004` |
| FOX (WLUK) Green Bay, WI HD | `WLUKTV141.us@HD` | `fox-wluk-green-bay-wi-hd/7494` |
| FOX (WMSN) Madison, WI HD | `WMSNTV471.us@HD` | `fox-wmsn-madison-wi-hd/9099` |
| FOX (WNAC) E. Providence, RI HD | `WNACTV641.us@HD` | `fox-wnac-e-providence-ri-hd/7759` |
| FOX (WNTZ) Alexandria, LA | `WNTZTV481.us@HD` | `fox-wntz-alexandria-la/2457` |
| FOX (WNYF) Massena, NY HD | `WNYFCD281.us@HD` | `fox-wnyf-massena-ny-hd/5326` |
| FOX (WNYW) New York, NY HD | `WNYW51.us@HD` | `fox-wnyw-new-york-ny-hd/4557` |
| FOX (WOFL) Orlando, FL HD | `WOFL651.us@HD` | `fox-wofl-orlando-fl-hd/7577` |
| FOX (WOGX) Gainesville, FL HD | `WOGX511.us@HD` | `fox-wogx-gainesville-fl-hd/8112` |
| FOX (WOLF) Hazleton, PA HD | `WOLFTV561.us@HD` | `fox-wolf-hazleton-pa-hd/7531` |
| FOX (WOVA) Parkersburg, WV HD | `WOVALD1.us@SD` | `fox-wova-parkersburg-wv-hd/17110` |
| FOX (WPFO) Portland, ME HD | `WPFO81.us@HD` | `fox-wpfo-portland-me-hd/3596` |
| FOX (WPGH) Pittsburgh, PA HD | `WPGHTV531.us@HD` | `fox-wpgh-pittsburgh-pa-hd/6716` |
| FOX (WPGX) Panama City, FL HD | `WPGX281.us@HD` | `fox-wpgx-panama-city-fl-hd/6715` |
| Fox (WPMC-CD) Mappsville, VA | `WPMCCD361.us@SD` | `fox-wpmc-cd-mappsville-va/27345` |
| FOX (WPMT) Harrisburg, PA HD | `WPMT431.us@HD` | `fox-wpmt-harrisburg-pa-hd/6717` |
| FOX (WQMY-DT2) Williamsport, PA | `WQMY532.us@HD` | `fox-wqmy-dt2-williamsport-pa/17655` |
| FOX (WQRF) Rockford, IL HD | `WQRFTV391.us@HD` | `fox-wqrf-rockford-il-hd/19137` |
| FOX (WRAZ) Raleigh-Durham, NC HD | `WRAZ541.us@SD` | `fox-wraz-raleigh-durham-nc-hd/4823` |
| FOX (WRLH) Richmond, VA HD | `WRLHTV351.us@HD` | `fox-wrlh-richmond-va-hd/8195` |
| FOX (WRSP) Springfield, IL HD | `WRSPTV551.us@HD` | `fox-wrsp-springfield-il-hd/4587` |
| FOX (WSBT-DT2) South Bend, IN HD | `WSBTTV222.us@HD` | `fox-wsbt-dt2-south-bend-in-hd/20014` |
| FOX (WSFX) Wilmington, NC HD | `WSFXTV261.us@HD` | `fox-wsfx-wilmington-nc-hd/4799` |
| FOX (WSMH) Flint, MI HD | `WSMH661.us@HD` | `fox-wsmh-flint-mi-hd/9278` |
| FOX (WSVF) Harrisonburg, VA | `WSVFCD431.us@HD` | `fox-wsvf-harrisonburg-va/11646` |
| FOX (WSVN) Miami, FL HD | `WSVN71.us@HD` | `fox-wsvn-miami-fl-hd/7510` |
| FOX (WSYM) Lansing, MI HD | `WSYMTV471.us@HD` | `fox-wsym-lansing-mi-hd/9279` |
| FOX (WSYT) Syracuse, NY HD | `WSYT681.us@HD` | `fox-wsyt-syracuse-ny-hd/4802` |
| FOX (WTAT) Charleston, SC HD | `WTATTV41.us@HD` | `fox-wtat-charleston-sc-hd/7375` |
| FOX (WTGS) Savannah, GA HD | `WTGS281.us@HD` | `fox-wtgs-savannah-ga-hd/7373` |
| FOX (WTHI-DT2) Terre Haute, IN HD | `WTHITV102.us@HD` | `fox-wthi-dt2-terre-haute-in-hd/9713` |
| FOX (WTIC) Hartford, CT HD | `WTICTV611.us@HD` | `fox-wtic-hartford-ct-hd/7374` |
| FOX (WTNZ) Knoxville, TN HD | `WTNZ431.us@HD` | `fox-wtnz-knoxville-tn-hd/6734` |
| FOX (WTOV-DT2) Steubenville, OH HD | `WTOVTV92.us@HD` | `fox-wtov-dt2-steubenville-oh-hd/17115` |
| FOX (WTTG) District of Columbia HD | `WTTG51.us@HD` | `fox-wttg-district-of-columbia-hd/3740` |
| FOX (WTVC-DT2) Chattanooga, TN HD | `WTVC92.us@HD` | `fox-wtvc-dt2-chattanooga-tn-hd/6578` |
| FOX (WTVT) Tampa Bay, FL HD | `WTVT131.us@HD` | `fox-wtvt-tampa-bay-fl-hd/6736` |
| FOX (WTXF) Philadelphia, PA HD | `WTXFTV291.us@HD` | `fox-wtxf-philadelphia-pa-hd/6738` |
| FOX (WUHF) Rochester, NY HD | `WUHF81.us@HD` | `fox-wuhf-rochester-ny-hd/6499` |
| FOX (WUPW) Toledo, OH HD | `WUPW361.us@HD` | `fox-wupw-toledo-oh-hd/4759` |
| FOX (WUTV) Buffalo, NY HD | `WUTV491.us@HD` | `fox-wutv-buffalo-ny-hd/3584` |
| FOX (WVBT) Hampton Roads, VA HD | `WVBT431.us@HD` | `fox-wvbt-hampton-roads-va-hd/7215` |
| FOX (WVFX) Clarksburg, WV HD | `WVFX101.us@HD` | `fox-wvfx-clarksburg-wv-hd/7216` |
| FOX (WVNS-DT2) Bluefield, WV HD | `WVNSTV592.us@HD` | `fox-wvns-dt2-bluefield-wv-hd/7217` |
| FOX (WVUE) New Orleans, LA HD | `WVUEDT81.us@HD` | `fox-wvue-new-orleans-la-hd/7218` |
| FOX (WWCP) Johnstown, PA HD | `WWCPTV81.us@HD` | `fox-wwcp-johnstown-pa-hd/7219` |
| FOX (WWCW-DT2) Lynchburg, VA | `WWCW242.us@SD` | `fox-wwcw-dt2-lynchburg-va/5051` |
| FOX (WWNY-TV2) Watertown, NY | `WWNYTV72.us@HD` | `fox-wwny-dt2-watertown-ny/5052` |
| FOX (WXIN) Indianapolis, IN HD | `WXIN591.us@HD` | `fox-wxin-indianapolis-in-hd/7679` |
| FOX (WXIX) Cincinnati, OH HD | `WXIXTV191.us@HD` | `fox-wxix-cincinnati-oh-hd/3671` |
| FOX (WXMI) Grand Rapids, MI HD | `WXMI171.us@HD` | `fox-wxmi-grand-rapids-mi-hd/9338` |
| FOX (WXTX) Columbus, GA HD | `WXTX541.us@HD` | `fox-wxtx-columbus-ga-hd/6497` |
| FOX (WXXA) Albany, NY HD | `WXXATV231.us@HD` | `fox-wxxa-albany-ny-hd/3705` |
| FOX (WXXV) Gulfport, MS HD | `WXXVTV251.us@HD` | `fox-wxxv-gulfport-ms-hd/6498` |
| FOX (WYDC) Corning, NY HD | `WYDC481.us@HD` | `fox-wydc-corning-ny-hd/7150` |
| FOX (WYDO) Greenville, NC HD | `WYDO141.us@HD` | `fox-wydo-greenville-nc-hd/7151` |
| FOX (WYFX) Youngstown, OH HD | `WYFXLD621.us@HD` | `fox-wyfx-youngstown-oh-hd/7152` |
| FOX (WYZZ) Bloomington, IL HD | `WYZZTV431.us@HD` | `fox-wyzz-bloomington-il-hd/4598` |
| FOX (WZAW) Wausau, WI HD | `WZAWLD331.us@HD` | `fox-wzaw-wausau-wi-hd/6373` |
| FOX (WZTV) Nashville, TN HD | `WZTV171.us@HD` | `fox-wztv-nashville-tn-hd/6727` |
| Fox Business HD | `FoxBusinessNetwork.us@SD` | `fox-business-hd/5600` |
| Fox Deportes HD | `FoxDeportes.us@SD` | `fox-deportes-hd/10502` |
| Fox News HD | `FoxNewsChannel.us@SD` | `fox-news-hd/6207` |
| FOX Soccer Plus HD | `FoxSoccerPlus.us@SD` | `fox-soccer-plus-hd/11551` |
| Fox Sports 2 HD | `FoxSports2LatinAmerica.us@South` | `fox-sports-2-hd/10263` |
| Fox Sports Racing | `FoxSportsRacing.us@SD` | `fox-sports-racing/192` |
| Fox Weather | `FoxWeather.us@SD` | `fox-weather/37620` |
| Freeform HD - East Feed | `Freeform.us@East` | `freeform-hd--east-feed/6110` |
| Freeform HD - Pacific Feed | `Freeform.us@West` | `freeform-hd--pacific-feed/13510` |
| FUSE TV HD - Eastern | `Fuse.us@East` | `fuse-tv-hd--eastern/6221` |
| FUSE TV HD - Pacific | `Fuse.us@West` | `fuse-tv-hd--pacific/17062` |
| FX Movie Channel HD | `FXMovieChannel.us@SD` | `fx-movie-channel-hd/8463` |
| FX Networks East Coast HD | `FX.us@East` | `fx-networks-east-coast-hd/6111` |
| FX Networks West Coast | `FX.us@West` | `fx-networks-west-coast/1449` |
| FXX USA HD - Eastern | `FXX.us@East` | `fxx-usa-hd--eastern/7506` |
| FXX USA HD - Pacific | `FXX.us@West` | `fxx-usa-hd--pacific/19081` |
| FYI USA HD - Eastern | `FYI.us@East` | `fyi-usa-hd--eastern/6211` |
| FYI USA HD - Pacific | `FYI.us@West` | `fyi-usa-hd--pacific/19083` |
| Gol TV USA HD | `GolTVUSA.us@SD` | `gol-tv-usa-hd/12608` |
| Golf Channel USA HD | `GolfChannel.us@SD` | `golf-channel-usa-hd/6039` |
| Great | `GetTV.us@SD` | `gettv/11258` |
| Grit Network | `Grit.us@SD` | `grit-network/14377` |
| Grit TV (WNCN3) Goldsboro, NC | `WNCN173.us@SD` | `grit-tv-wncn3-goldsboro-nc/19495` |
| Hallmark Channel HD - Eastern | `HallmarkChannel.us@East` | `hallmark-channel-hd--eastern/6213` |
| Hallmark Channel HD - Pacific | `HallmarkChannel.us@West` | `hallmark-channel-hd--pacific/17058` |
| Hallmark Mystery - Pacific | `HallmarkMoviesMysteries.us@West` | `hallmark-movies--mysteries--pacific/11414` |
| HBO Comedy HD - East | `HBOComedy.us@East` | `hbo-comedy-hd--east/7105` |
| HBO Comedy HD - Pacific | `HBOComedy.us@West` | `hbo-comedy-hd--pacific/8469` |
| HBO Drama (HBO 3) - Eastern HD | `HBOSignature.us@East` | `hbo-signature-hbo-3--eastern-hd/7099` |
| HBO Drama (HBO 3) - Pacific HD | `HBOSignature.us@West` | `hbo-signature-hbo-3--pacific-hd/7711` |
| HBO Family - Eastern Feed HD | `HBOFamily.us@East` | `hbo-family--eastern-feed-hd/7104` |
| HBO HD - Eastern Feed | `HBO.us@East` | `hbo-hd--eastern-feed/627` |
| HBO HD - Pacific Feed | `HBO.us@West` | `hbo-hd--pacific-feed/2629` |
| HBO Hits - Eastern Feed HD | `HBO2.us@East` | `hbo-2--eastern-feed-hd/6313` |
| HBO Hits - Pacific Feed HD | `HBO2.us@West` | `hbo-2--pacific-feed-hd/6314` |
| HBO Zone HD - East | `HBOZone.us@East` | `hbo-zone-hd--east/7102` |
| HBO Zone HD - Pacific | `HBOZone.us@West` | `hbo-zone-hd--pacific/8470` |
| HDNet Movies | `HDNetMovies.us@SD` | `hdnet-movies/4267` |
| HGTV USA HD - Eastern | `HGTV.us@East` | `hgtv-usa-hd--eastern/3690` |
| HGTV USA HD - Pacific Feed | `HGTV.us@West` | `hgtv-usa-hd--pacific-feed/16232` |
| HLN HD | `HLN.us@SD` | `hln-hd/6994` |
| Hope Channel | `HopeChannelNorthAmerica.us@SD` | `hope-channel/6827` |
| HSN - Home Shopping Network | `HSN.us@East` | `hsn--home-shopping-network/14985` |
| HSN (WTVD4) Raleigh, NC | `WTVD114.us@SD` | `hsn-wtvd4-raleigh-nc/36166` |
| HSN 2 | `HSN2.us@SD` | `hsn-2/13495` |
| Independent Film Channel US HD | `IFC.us@East` | `independent-film-channel-us-hd/6215` |
| Infomercials (WNMF) New York, NY | `WNMFLD221.us@SD` | `infomercials-wnmf-new-york-ny/17860` |
| Investigation Discovery USA HD - Eastern | `InvestigationDiscovery.us@East` | `investigation-discovery-usa-hd--eastern/6997` |
| Investigation Discovery USA HD - Pacific | `InvestigationDiscovery.us@West` | `investigation-discovery-usa-hd--pacific/19950` |
| ION (WPXN) New York, NY | `WPXNTV311.us@HD` | `ion-wpxn-new-york-ny/1778` |
| ION (WPXU) Jacksonville, NC | `WPXUTV351.us@HD` | `ion-wpxu-jacksonville-nc/7774` |
| ION (WRPX) Raleigh-Durham, NC HD | `WRPXTV621.us@HD` | `ion-wrpx-raleigh-durham-nc-hd/7773` |
| ION Mystery (WNCN4) Goldsboro, NC | `WNCN174.us@SD` | `ion-mystery-wncn4-goldsboro-nc/33270` |
| ION Mystery (WRAL-TV4) Raleigh, NC | `WRALTV54.us@SD` | `ion-mystery-wral-tv4-raleigh-nc/37397` |
| ION Mystery (WRPX-TV3) Raleigh-Durham, NC | `WRPXTV473.us@SD` | `ion-mystery-wrpx-tv3-raleigh-durham-nc/12059` |
| Jewelry Television | `JewelryTV.us@SD` | `jewelry-television/3000` |
| KCAL Los Angeles | `KCALTV91.us@HD` | `kcal-los-angeles/1826` |
| KCET Los Angeles, CA | `KCET581.us@HD` | `kcet-los-angeles-ca/2310` |
| KTLA Los Angeles, CA | `KTLA51.us@HD` | `ktla-los-angeles-ca/90` |
| Laff - Network HD | `Laff.us@SD` | `laff--network-hd/20170` |
| Law & Crime Network | `LawCrime.us@SD` | `law--crime-network/32823` |
| Lifetime Network US - Eastern Feed HD | `Lifetime.us@East` | `lifetime-network-us--eastern-feed-hd/6333` |
| Lifetime Network US - Pacific Feed HD | `Lifetime.us@West` | `lifetime-network-us--pacific-feed-hd/8996` |
| Localish (WTVD-DT2) Raleigh, NC HD | `WTVD112.us@HD` | `localish-wtvd-dt2-raleigh-nc-hd/18858` |
| LOGO - East | `Logo.us@East` | `logo--east/2091` |
| LOGO - Pacific | `Logo.us@West` | `logo--pacific/13460` |
| MeTV - Network HD | `MeTV.us@SD` | `metv--network-hd/20357` |
| MeTV (K20JL-D2) Ellensburg, WA | `K20JLD352.us@HD` | `metv-k20jl-d2-ellensburg-wa/15133` |
| MeTV (KAKE-DT2) Wichita, KS | `KAKE102.us@SD` | `metv-kake-dt2-wichita-ks/12586` |
| MeTV (KAPP2) Yakima, WA | `KAPP352.us@HD` | `metv-kapp-dt2-yakima-wa/3829` |
| MeTV (KAZT-CD2) Phoenix, AZ | `KAZTCD72.us@HD` | `metv-kazt-cd2-phoenix-az/31303` |
| MeTV (KAZT-TV2) Prescott, AZ HD | `KAZTTV72.us@HD` | `metv-kazt-tv2-prescott-az-hd/10086` |
| MeTV (KDBZ-CD2) Bozeman, MT | `KDBZCD62.us@SD` | `metv-kdbz-cd2-bozeman-mt/31304` |
| MeTV (KEGW-LD2) Fayetteville, AR | `KEGWLD2.us@SD` | `metv-kegw-ld2-fayetteville-ar/31312` |
| MeTV (KETV-DT2) Omaha, NE HD | `KETV72.us@SD` | `metv-ketv-dt2-omaha-ne-hd/10253` |
| MeTV (KFDF-DT2) Fort Smith, AR | `KFDFCD442.us@SD` | `metv-kfdf-dt2-fort-smith-ar/1853` |
| MeTV (KGBD-LD2) Great Bend, KS | `KGBDLD302.us@SD` | `metv-kgbd-ld2-great-bend-ks/31316` |
| MeTV (KHME) Rapid City, NE | `KHME231.us@HD` | `metv-khme-rapid-city-ne/8297` |
| MeTV (KHVO2) Hilo, HI | `KHVO42.us@HD` | `metv-khvo2-hilo-hi/31310` |
| MeTV (KITV-DT2) Honolulu, HI | `KITV42.us@HD` | `metv-kitv-dt2-honolulu-hi/9902` |
| MeTV (KJCX-LD) Helena, MT | `KJCXLD1.us@SD` | `metv-kjcx-ld-helena-mt/26606` |
| MeTV (KKAF-CD2) Siloam Springs, AR | `KKAFCD2.us@SD` | `metv-kkaf-cd2-siloam-springs-ar/31313` |
| MeTV (KLBB-LD) Lubbock, TX | `KLBBLD481.us@HD` | `metv-klbb-ld-lubbock-tx/30618` |
| MeTV (KLWB) Lafayette, LA HD | `KLWB501.us@HD` | `metv-klwb-lafayette-la-hd/10204` |
| MeTV (KMAU2) Wailuku, HI | `KMAU42.us@HD` | `metv-kmau2-wailuku-hi/31311` |
| MeTV (KMLU) Columbia, LA | `KMLU111.us@HD` | `metv-kmlu-columbia-la/19154` |
| MeTV (KMNZ-LD2) Coeur D'Alene, ID | `K31QKD42.us@HD` | `metv-kmnz-ld2-coeur-dalene-id/31301` |
| MeTV (KMVU-DT2) Medford/Klamath Falls, OR | `KMVUDT262.us@SD` | `metv-kmvu-dt2-medfordklamath-falls-or/10325` |
| MeTV (KMYA-DT) Little Rock, AR HD | `KMYADT491.us@HD` | `metv-kmya-dt-little-rock-ar-hd/10644` |
| MeTV (KRTN-TV) Durango, CO | `KRTNTV331.us@SD` | `metv-krtn-tv-durango-co/11783` |
| MeTV (KTEL-CD) Albuquerque, NM | `KTELCD471.us@SD` | `metv-ktel-cd-albuquerque-nm/2369` |
| MeTV (KTEL-TV4) Carlsbad, NM | `KTELTV254.us@SD` | `metv-ktel-tv4-carlsbad-nm/31305` |
| MeTV (KUMN-LP2) Moses Lake, Etc., WA | `KUMNLP2.us@SD` | `metv-kumn-lp2-moses-lake-etc-wa/31302` |
| MeTV (KUPK-DT2) Garden City, KS | `KUPK132.us@SD` | `metv-kupk-dt2-garden-city-ks/17274` |
| MeTV (KUWB-LD2) Bloomington, UT | `K22PHD302.us@SD` | `metv-kuwb-ld2-bloomington-ut/31306` |
| MeTV (KVEW-DT2) Tri-Cities, WA HD | `KVEW422.us@HD` | `metv-kvew-dt2-tri-cities-wa-hd/7960` |
| MeTV (KVHP-LD4) Jasper, TX | `KVHPLD4.us@SD` | `metv-kvhp-ld4-jasper-tx/31307` |
| MeTV (KVLY-TV3) Fargo, ND | `KVLYTV113.us@SD` | `metv-kvly-dt3-fargo-nd/7349` |
| MeTV (KWCE) Alexandria, LA | `KWCELP1.us@SD` | `metv-kwce-alexandria-la/2456` |
| MeTV (KWNL-CD2) Winslow, AR | `KWNLCD2.us@SD` | `metv-kwnl-cd2-winslow-ar/31314` |
| MeTV (KXMN) Spokane, WA HD | `KXMNLD1.us@SD` | `metv-kxmn-spokane-wa-hd/6282` |
| MeTV (KYMB-LD) Monterey, CA | `KYMBLD1.us@SD` | `metv-kymb-ld-monterey-ca/11378` |
| MeTV (WAPK-CA) Tri-Cities, TN/VA HD | `WAPKCD361.us@HD` | `metv-wapk-ca-tri-cities-tnva-hd/6284` |
| MeTV (WBBZ-DT3) Buffalo, NY HD | `WBBZTV673.us@SD` | `metv-wbbz-dt3-buffalo-ny-hd/15097` |
| MeTV (WBBZ) Buffalo, NY | `WBBZTV671.us@HD` | `metv-wbbz-buffalo-ny/9936` |
| MeTV (WBME) Milwaukee, WI | `WBMECD491.us@HD` | `metv-wbme-milwaukee-wi/3172` |
| MeTV (WBND-LD2) Michiana, IN | `WBNDLD572.us@HD` | `metv-wbnd-ld2-michiana-in/11798` |
| MeTV (WCCU-DT2) Champaign, IL HD | `WCCUDT2.us@SD` | `metv-wccu-dt2-champaign-il-hd/11349` |
| MeTV (WCIV-DT3) Charleston, SC HD | `WCIV43.us@SD` | `metv-wciv-dt3-charleston-sc-hd/16316` |
| MeTV (WDIO-DT2) Duluth, MN | `WDIODT102.us@HD` | `metv-wdio-dt2-duluth-mn/6037` |
| MeTV (WGUD-LD) Pascagoula, MS | `WGUDLD1.us@SD` | `metv-wgud-ld-pascagoula-ms/16337` |
| MeTV (WILT-LD2) Wilmington, NC | `W33FFD242.us@SD` | `metv-wilt-ld2-wilmington-nc/31308` |
| MeTV (WJLP) New Jersey/New York | `WJLP371.us@SD` | `metv-wjlp-new-jerseynew-york/5138` |
| MeTV (WJLP) New Jersey/New York HD | `WJLP338.us@SD` | `metv-wjlp-new-jerseynew-york-hd/19177` |
| MeTV (WKIN-CD) Weber Cy,Va-Kpt,Tn, VA | `WKINCD361.us@HD` | `metv-wkin-cd-weber-cyva-kpttn-va/26391` |
| MeTV (WLLA-DT2) Grand Rapids, MI HD | `WLLA642.us@SD` | `metv-wlla-dt2-grand-rapids-mi-hd/16277` |
| MeTV (WLWK-CD2) Sturgeon Bay, WI | `WLWKCD222.us@SD` | `metv-wlwk-cd2-sturgeon-bay-wi/31309` |
| MeTV (WMBB-DT2) Panama, FL | `WMBB132.us@SD` | `metv-wmbb-dt2-panama-fl/8369` |
| MeTV (WMUR-DT2) Manchers, NH | `WMURTV92.us@SD` | `metv-wmur-dt2-manchers-nh/11273` |
| MeTV (WNYF-CD2) Watertown, NY | `WNYFCD282.us@SD` | `metv-wnyf-cd2-watertown-ny/19439` |
| MeTV (WOLO-DT4) Columbia, SC HD | `WOLOTV254.us@SD` | `metv-wolo-dt4-columbia-sc-hd/10475` |
| MeTV (WRAZ-DT2) Raleigh-Durham, NC HD | `WRAZ502.us@HD` | `metv-wraz-dt2-raleigh-durham-nc-hd/9990` |
| MeTV (WSWB-DT2) Scranton, PA HD | `WSWB382.us@SD` | `metv-wswb-dt2-scranton-pa-hd/9299` |
| MeTV (WTHR-DT3) Indianapolis, IN HD | `WTHR133.us@HD` | `metv-wthr-dt3-indianapolis-in-hd/11359` |
| MeTV (WVTM-DT2) Birmingham, AL | `WVTMTV132.us@SD` | `metv-wvtm-dt2-birmingham-al/6449` |
| MeTV (WYME) Gainesville, FL | `WYMECD451.us@SD` | `metv-wyme-gainesville-fl/11818` |
| MeTV (WZAW-LD2) Wausau, WI | `WZAWLD332.us@SD` | `metv-wzaw-ld2-wausau-wi/17310` |
| MeTV (WZMQ) Marquette, MI HD | `WZMQ191.us@SD` | `metv-wzmq-marquette-mi-hd/19910` |
| MGM HD (USA) | `MGMHD.us@SD` | `mgm-hd-usa/6107` |
| MLB Network HD | `MLBNetwork.us@SD` | `mlb-network-hd/6218` |
| MNT (KCOP) Los Angeles, CA | `KCOPTV51.us@HD` | `mnt-kcop-los-angeles-ca/1811` |
| MNT (KTVD) Denver, CO | `KTVD201.us@HD` | `mnt-ktvd-denver-co/1565` |
| MNT (WNYO) Buffalo, NY | `WNYOTV71.us@HD` | `mnt-wnyo-buffalo-ny/324` |
| MNT (WPHL) Philadelphia, PA HD | `WPHLTV651.us@HD` | `mnt-wphl-philadelphia-pa-hd/7168` |
| MNT (WRDC) Raleigh, NC HD | `WRDC401.us@HD` | `mnt-wrdc-raleigh-nc-hd/7776` |
| MNT (WWOR) New York, NY | `WWORTV91.us@HD` | `mnt-wwor-new-york-ny/1612` |
| MS NOW HD | `MSNBC.us@SD` | `msnbc-usa-hd/6995` |
| MSG (Madison Square Gardens) HD | `MSG.us@SD` | `msg-madison-square-gardens-hd/4695` |
| MSG 2 HD | `MSG2.us@SD` | `msg-2-hd/31491` |
| MSG Plus | `MSGPlus.us@SD` | `msg-plus/1088` |
| MTV 2 East HD | `MTV2.us@East` | `mtv-2-east-hd/10276` |
| MTV 2 West- HD | `MTV2.us@West` | `mtv-2-west-hd/15030` |
| MTV Classic - East | `MTVClassic.us@East` | `mtv-classic--east/2093` |
| MTV Classic - West | `MTVClassic.us@West` | `mtv-classic--west/14615` |
| MTV Live HD | `MTVLive.us@SD` | `mtv-live-hd/6081` |
| MTV U | `MTVU.us@SD` | `mtv-u/2701` |
| MTV USA - Eastern Feed | `MTV.us@East` | `mtv-usa--eastern-feed/656` |
| MTV USA - Pacific Feed | `MTV.us@West` | `mtv-usa--pacific-feed/1264` |
| National Geographic US HD - Eastern | `NationalGeographic.us@East` | `national-geographic-us-hd--eastern/4436` |
| National Geographic US HD - Pacific | `NationalGeographic.us@West` | `national-geographic-us-hd--pacific/19084` |
| National Geographic Wild HD | `NationalGeographicWild.us@East` | `national-geographic-wild-hd/9579` |
| NBA TV USA HD | `NBATV.us@SD` | `nba-tv-usa-hd/5645` |
| NBC - Central | `NBC.us@Central` | `nbc--central/9912` |
| NBC - Mountain | `NBC.us@Mountain` | `nbc--mountain/9913` |
| NBC - Network Eastern | `NBC.us@East` | `nbc--network-eastern/1227` |
| NBC - Network Pacific | `NBC.us@West` | `nbc--network-pacific/4410` |
| NBC (K13XD-DT2) Fairbanks, AK | `K13XDD2.us@SD` | `nbc-k13xd-dt2-fairbanks-ak/17760` |
| NBC (K14LZ) Minneapolis, MN | `K14LZD41.us@HD` | `nbc-k14lz-minneapolis-mn/11865` |
| NBC (K18IR) Minneapolis, MN | `K18IRD41.us@HD` | `nbc-k18ir-minneapolis-mn/11867` |
| NBC (K21DG) Minneapolis, MN | `K21DGD1.us@SD` | `nbc-k21dg-minneapolis-mn/11869` |
| NBC (K21HX) Minneapolis, MN | `K21HXD211.us@HD` | `nbc-k21hx-minneapolis-mn/11870` |
| NBC (K31EF) Minneapolis, MN | `K31EFD111.us@HD` | `nbc-k31ef-minneapolis-mn/11866` |
| NBC (K32IG-D) Ellensburg, WA | `K32IGD231.us@HD` | `nbc-k32ig-d-ellensburg-wa/15126` |
| NBC (K35BW) Lewiston, ID | `K35BWD61.us@HD` | `nbc-k35bw-lewiston-id/7252` |
| NBC (K36KW) Minneapolis, MN | `K36KWD21.us@HD` | `nbc-k36kw-minneapolis-mn/11868` |
| NBC (K39FE) Minneapolis, MN | `K39FED1.us@SD` | `nbc-k39fe-minneapolis-mn/11871` |
| NBC (KAGS) Bryan, TX HD | `KAGSLD231.us@HD` | `nbc-kags-bryan-tx-hd/11425` |
| NBC (KAIT2) Jonesboro, AR | `KAIT82.us@HD` | `nbc-kait-dt2-jonesboro-ar/14363` |
| NBC (KALB) Alexandria, LA | `KALBTV51.us@HD` | `nbc-kalb-alexandria-la/2455` |
| NBC (KAMR) Amarillo, TX HD | `KAMRTV41.us@HD` | `nbc-kamr-amarillo-tx-hd/6261` |
| NBC (KARE) Minneapolis, MN HD | `KARE111.us@HD` | `nbc-kare-minneapolis-mn-hd/4774` |
| NBC (KARK) Little Rock, AR HD | `KARKTV41.us@HD` | `nbc-kark-little-rock-ar-hd/6262` |
| NBC (KATH) Juneau, AK | `KATHLD21.us@HD` | `nbc-kath-juneau-ak/5100` |
| NBC (KAVU-TV2) Victoria, TX | `KAVUTV252.us@SD` | `nbc-kavu-dt2-victoria-tx/17396` |
| NBC (KBGF) Great Falls, MT HD | `KBGFLD1.us@SD` | `nbc-kbgf-great-falls-mt-hd/7000` |
| NBC (KBJR) Duluth, MN HD | `KBJRTV61.us@HD` | `nbc-kbjr-duluth-mn-hd/6263` |
| NBC (KBMT-DT2) Beaumont, TX HD | `KBMT122.us@HD` | `nbc-kbmt-dt2-beaumont-tx-hd/6999` |
| NBC (KCBD) Lubbock, TX HD | `KCBD111.us@HD` | `nbc-kcbd-lubbock-tx-hd/6148` |
| NBC (KCEN) Temple, TX HD | `KCENTV61.us@HD` | `nbc-kcen-temple-tx-hd/5849` |
| NBC (KCFW) Kalispell, MT HD | `KCFWTV91.us@HD` | `nbc-kcfw-kalispell-mt-hd/8923` |
| NBC (KCRA) Sacramento, CA HD | `KCRATV581.us@HD` | `nbc-kcra-sacramento-ca-hd/6260` |
| NBC (KCWY) Casper, WY HD | `KCWYDT131.us@HD` | `nbc-kcwy-casper-wy-hd/6264` |
| NBC (KDBZ-CD) Bozeman, MT | `KDBZCD61.us@HD` | `nbc-kdbz-cd-bozeman-mt/30698` |
| NBC (KDLT) Sioux Falls, SD HD | `KDLTTV461.us@HD` | `nbc-kdlt-sioux-falls-sd-hd/6265` |
| NBC (KDLV) Mitchell, SD | `KDLVTV51.us@HD` | `nbc-kdlv-mitchell-sd/5101` |
| NBC (KECI) Missoula, MT HD | `KECITV131.us@HD` | `nbc-keci-missoula-mt-hd/8924` |
| NBC (KENV-DT2) Elko, NV | `KENVDT2.us@SD` | `nbc-kenv-dt2-elko-nv/18046` |
| NBC (KENV) Elko, NV HD | `KENVDT101.us@HD` | `nbc-kenv-elko-nv-hd/5141` |
| NBC (KETK) East Texas, TX HD | `KETKTV561.us@HD` | `nbc-ketk-east-texas-tx-hd/6266` |
| NBC (KFDX) Wichita Falls, TX HD | `KFDXTV31.us@HD` | `nbc-kfdx-wichita-falls-tx-hd/6267` |
| NBC (KFOR) Oklahoma City, OK HD | `KFORTV431.us@HD` | `nbc-kfor-oklahoma-city-ok-hd/6268` |
| NBC (KFTA-DT2) Ft. Smith, AR | `KFTATV242.us@HD` | `nbc-kfta-dt2-ft-smith-ar/11710` |
| NBC (KFYR) Bismarck, ND HD | `KFYRTV51.us@HD` | `nbc-kfyr-bismarck-nd-hd/8334` |
| NBC (KGET) Bakersfield, CA HD | `KGETTV171.us@HD` | `nbc-kget-bakersfield-ca-hd/7562` |
| NBC (KGIN-DT2) Hastings, NE | `KGIN112.us@HD` | `nbc-kgin-dt2-hastings-ne/18553` |
| NBC (KGNS) Laredo, TX HD | `KGNSTV81.us@HD` | `nbc-kgns-laredo-tx-hd/9482` |
| NBC (KGW) Portland, OR HD | `KGWDT1.us@SD` | `nbc-kgw-portland-or-hd/3729` |
| NBC (KHBC) Hilo, HI | `KHBCDT1.us@SD` | `nbc-khbc-hilo-hi/5103` |
| NBC (KHNL) Honolulu, HI HD | `KHNL131.us@HD` | `nbc-khnl-honolulu-hi-hd/7674` |
| NBC (KHQ) Spokane, WA HD | `KHQDT1.us@SD` | `nbc-khq-spokane-wa-hd/6270` |
| NBC (KIEM) Eureka, CA HD | `KIEMTV31.us@HD` | `nbc-kiem-eureka-ca-hd/6982` |
| NBC (KING) Seattle, WA HD | `KINGTV51.us@HD` | `nbc-king-seattle-wa-hd/2831` |
| NBC (KJRH) Tulsa, OK HD | `KJRHTV21.us@HD` | `nbc-kjrh-tulsa-ok-hd/6271` |
| NBC (KKCO) Grand Junction, CO HD | `KKCO111.us@HD` | `nbc-kkco-grand-junction-co-hd/6983` |
| NBC (KLAF) Lafayette, LA HD | `KLAFLD141.us@HD` | `nbc-klaf-lafayette-la-hd/9927` |
| NBC (KMCB) Coos Bay, OR | `KMCB231.us@HD` | `nbc-kmcb-coos-bay-or/5105` |
| NBC (KMIR) Palm Springs, CA HD | `KMIRTV361.us@HD` | `nbc-kmir-palm-springs-ca-hd/4934` |
| NBC (KMOL) Victoria, TX HD | `KMOLLD171.us@HD` | `nbc-kmol-victoria-tx-hd/17151` |
| NBC (KMOT) Minot, ND HD | `KMOT101.us@HD` | `nbc-kmot-minot-nd-hd/8319` |
| NBC (KMTR) Eugene, OR HD | `KMTR161.us@HD` | `nbc-kmtr-eugene-or-hd/19100` |
| NBC (KNAZ) Flagstaff, AZ | `KNAZTV21.us@HD` | `nbc-knaz-flagstaff-az/1177` |
| NBC (KNBC) Los Angeles, CA HD | `KNBC41.us@HD` | `nbc-knbc-los-angeles-ca-hd/4558` |
| NBC (KNBN) Rapid City, SD HD | `KNBN211.us@HD` | `nbc-knbn-rapid-city-sd-hd/6182` |
| NBC (KNDO) Tri-Cities, WA HD | `KNDO231.us@HD` | `nbc-kndo-tri-cities-wa-hd/8625` |
| NBC (KNDU) Tri-Cities, WA HD | `KNDU251.us@HD` | `nbc-kndu-tri-cities-wa-hd/7972` |
| NBC (KNEP2) Scottsbluff, NE | `KNEP42.us@HD` | `nbc-knep2-scottsbluff-ne/8304` |
| NBC (KNOP-TV) North Platte, NE HD | `KNOPTV21.us@HD` | `nbc-knop-north-platte-ne-hd/9566` |
| NBC (KNSD) San Diego, CA HD | `KNSD481.us@HD` | `nbc-knsd-san-diego-ca-hd/6929` |
| NBC (KNTV) San Francisco, CA HD | `KNTV111.us@HD` | `nbc-kntv-san-francisco-ca-hd/6871` |
| NBC (KNVN) Chico, CA HD | `KNVN241.us@HD` | `nbc-knvn-chico-ca-hd/6872` |
| NBC (KNWA) Ft. Smith, AR HD | `KNWATV511.us@HD` | `nbc-knwa-ft-smith-ar-hd/6873` |
| NBC (KOAA) Colorado Springs, CO HD | `KOAATV51.us@HD` | `nbc-koaa-colorado-springs-co-hd/6874` |
| NBC (KOB) Albuquerque, NM HD | `KOBDT1.us@SD` | `nbc-kob-albuquerque-nm-hd/5108` |
| NBC (KOBF) Farmington, NM HD | `KOBF121.us@HD` | `nbc-kobf-farmington-nm-hd/6875` |
| NBC (KOBI) Medford, OR HD | `KOBI51.us@HD` | `nbc-kobi-medford-or-hd/10330` |
| NBC (KOGG) Wailuku, HI | `KOGG61.us@HD` | `nbc-kogg-wailuku-hi/5113` |
| NBC (KOMU) Columbia, MO HD | `KOMUTV81.us@HD` | `nbc-komu-columbia-mo-hd/6877` |
| NBC (KOTI) Klamath Falls, OR HD | `KOTI21.us@HD` | `nbc-koti-klamath-falls-or-hd/7965` |
| NBC (KPLC) Lake Charles, LA HD | `KPLC71.us@HD` | `nbc-kplc-lake-charles-la-hd/6878` |
| NBC (KPNX) Phoenix, AZ HD | `KPNX121.us@HD` | `nbc-kpnx-phoenix-az-hd/6318` |
| NBC (KPRC) Houston, TX HD | `KPRCTV391.us@HD` | `nbc-kprc-houston-tx-hd/7902` |
| NBC (KPSN-LD) Payson, AZ | `KPSNLD1.us@SD` | `nbc-kpsn-ld-payson-az/26700` |
| NBC (KPVI) Pocatello, ID HD | `KPVIDT61.us@HD` | `nbc-kpvi-pocatello-id-hd/7555` |
| NBC (KQCD) Dickinson, ND HD | `KQCDTV71.us@HD` | `nbc-kqcd-dickinson-nd-hd/8046` |
| NBC (KRBC) Abilene, TX HD | `KRBCTV91.us@HD` | `nbc-krbc-abilene-tx-hd/17135` |
| NBC (KRII) Chisholm, MN | `KRII111.us@HD` | `nbc-krii-chisholm-mn/5116` |
| NBC (KRIS) Corpus Christi, TX HD | `KRISTV61.us@HD` | `nbc-kris-corpus-christi-tx-hd/4750` |
| NBC (KRNV) Reno, NV HD | `KRNVDT41.us@HD` | `nbc-krnv-reno-nv-hd/6230` |
| NBC (KSAN) San Angelo, TX HD | `KSANTV31.us@HD` | `nbc-ksan-san-angelo-tx-hd/17156` |
| NBC (KSBW) Monterey, CA HD | `KSBW81.us@HD` | `nbc-ksbw-monterey-ca-hd/13483` |
| NBC (KSBY) Santa Barbara, CA HD | `KSBY61.us@HD` | `nbc-ksby-santa-barbara-ca-hd/8097` |
| NBC (KSCT) Sitka, AK | `KSCTLP1.us@SD` | `nbc-ksct-sitka-ak/5119` |
| NBC (KSDK) St. Louis, MO HD | `KSDK51.us@HD` | `nbc-ksdk-st-louis-mo-hd/6623` |
| NBC (KSEE-DT1) Fresno, CA HD | `KSEE241.us@HD` | `nbc-ksee-dt1-fresno-ca-hd/6624` |
| NBC (KSHB) Kansas City, MO HD | `KSHBTV411.us@HD` | `nbc-kshb-kansas-city-mo-hd/6625` |
| NBC (KSL) Salt Lake City, UT HD | `KSLDT1.us@SD` | `nbc-ksl-salt-lake-city-ut-hd/4462` |
| NBC (KSNB) Hastings, NE HD | `KSNBTV41.us@HD` | `nbc-ksnb-hastings-ne-hd/6269` |
| NBC (KSNC) Great Bend, KS HD | `KSNC21.us@HD` | `nbc-ksnc-great-bend-ks-hd/8164` |
| NBC (KSNF) Joplin, MO HD | `KSNF161.us@HD` | `nbc-ksnf-joplin-mo-hd/6626` |
| NBC (KSNG) Garden City, KS HD | `KSNG111.us@HD` | `nbc-ksng-garden-city-ks-hd/17273` |
| NBC (KSNK) McCook, NE | `KSNK81.us@HD` | `nbc-ksnk-mccook-ne/1590` |
| NBC (KSNL) Salina, KS HD | `KSNLLD61.us@HD` | `nbc-ksnl-salina-ks-hd/8168` |
| NBC (KSNT) Topeka, KS HD | `KSNT271.us@HD` | `nbc-ksnt-topeka-ks-hd/6627` |
| NBC (KSNV) Las Vegas, NV HD | `KSNV31.us@HD` | `nbc-ksnv-las-vegas-nv-hd/17245` |
| NBC (KSNW) Wichita, KS HD | `KSNW31.us@HD` | `nbc-ksnw-wichita-ks-hd/8134` |
| NBC (KSTF-DT2) Casper, WY | `KSTF102.us@HD` | `nbc-kstf-dt2-casper-wy/18441` |
| NBC (KSTS-DT3) San Francisco, CA | `KSTS113.us@HD` | `nbc-ksts-dt3-san-francisco-ca/18438` |
| NBC (KTAL) Shreveport, LA HD | `KTALTV61.us@HD` | `nbc-ktal-shreveport-la-hd/6628` |
| NBC (KTCW) Roseburg, OR | `KTCW461.us@HD` | `nbc-ktcw-roseburg-or/5106` |
| NBC (KTEN) Ada, OK HD | `KTEN101.us@HD` | `nbc-kten-ada-ok-hd/8044` |
| NBC (KTIV) Sioux City, IA HD | `KTIV41.us@HD` | `nbc-ktiv-sioux-city-ia-hd/4636` |
| NBC (KTSM) El Paso, TX HD | `KTSMTV91.us@HD` | `nbc-ktsm-el-paso-tx-hd/13534` |
| NBC (KTTC) Rochester, MN HD | `KTTC101.us@HD` | `nbc-kttc-rochester-mn-hd/7870` |
| NBC (KTUU) Anchorage, AK HD | `KTUUTV21.us@HD` | `nbc-ktuu-anchorage-ak-hd/9443` |
| NBC (KTVB) Boise, ID HD | `KTVB71.us@HD` | `nbc-ktvb-boise-id-hd/10384` |
| NBC (KTVE) Monroe, LA HD | `KTVE101.us@HD` | `nbc-ktve-monroe-la-hd/7900` |
| NBC (KTVF) Fairbanks, AK | `KTVF111.us@HD` | `nbc-ktvf-fairbanks-ak/5121` |
| NBC (KTVH) Helena, MT HD | `KTVHDT121.us@HD` | `nbc-ktvh-helena-mt-hd/9199` |
| NBC (KTVM) Butte, MT HD | `KTVMTV71.us@SD` | `nbc-ktvm-butte-mt-hd/8925` |
| NBC (KTVZ) Bend, OR HD | `KTVZ211.us@HD` | `nbc-ktvz-bend-or-hd/8222` |
| NBC (KULR) Billings, MT HD | `KULRTV81.us@HD` | `nbc-kulr-billings-mt-hd/7548` |
| NBC (KUMV) Williston, ND HD | `KUMVTV81.us@HD` | `nbc-kumv-williston-nd-hd/8554` |
| NBC (KUSA) Denver, CO HD | `KUSA91.us@HD` | `nbc-kusa-denver-co-hd/8024` |
| NBC (KVEO) Brownsville, TX HD | `KVEOTV231.us@HD` | `nbc-kveo-brownsville-tx-hd/4686` |
| NBC (KVLY) Fargo, ND HD | `KVLYTV111.us@HD` | `nbc-kvly-fargo-nd-hd/7517` |
| NBC (KVOA) Tucson, AZ HD | `KVOA41.us@HD` | `nbc-kvoa-tucson-az-hd/7633` |
| NBC (KWAB) | `KWABDT1.us@SD` | `nbc-kwab-newswest-9-big-spring-tx/5139` |
| NBC (KWES) Midland, TX HD | `KWESTV91.us@HD` | `nbc-kwes-midland-tx-hd/6161` |
| NBC (KWQC) Quad Cities, IA HD | `KWQCTV61.us@HD` | `nbc-kwqc-quad-cities-ia-hd/4487` |
| NBC (KWWL) Waterloo, IA HD | `KWWL71.us@HD` | `nbc-kwwl-waterloo-ia-hd/8225` |
| NBC (KWYM-LP) Laramie, WY | `KWYMLP1.us@SD` | `nbc-kwym-lp-laramie-wy/26758` |
| NBC (KXAN) Austin, TX HD | `KXANTV361.us@HD` | `nbc-kxan-austin-tx-hd/7913` |
| NBC (KXAS) Fort Worth, TX HD | `KXASTV51.us@HD` | `nbc-kxas-fort-worth-tx-hd/5415` |
| NBC (KXGN-DT2) HD Glendive, MT | `KXGNTV52.us@SD` | `nbc-kxgn-dt2-hd-glendive-mt/19261` |
| NBC (KYTV) Springfield, MO HD | `KYTV331.us@HD` | `nbc-kytv-springfield-mo-hd/8083` |
| NBC (KYUS) Miles City, MT | `KYUSTV31.us@HD` | `nbc-kyus-miles-city-mt/5143` |
| NBC (WAFF) Hunstville, AL HD | `WAFF481.us@HD` | `nbc-waff-hunstville-al-hd/6724` |
| NBC (WAGT) Augusta, GA HD | `WAGTCD261.us@HD` | `nbc-wagt-augusta-ga-hd/6683` |
| NBC (WALB) Albany, GA HD | `WALB101.us@HD` | `nbc-walb-albany-ga-hd/6364` |
| NBC (WAND) Decatur, IL HD | `WAND171.us@HD` | `nbc-wand-decatur-il-hd/4585` |
| NBC (WAVE) Louisville, KY HD | `WAVE581.us@HD` | `nbc-wave-louisville-ky-hd/6725` |
| NBC (WAVY) Hampton Roads, VA HD | `WAVYTV101.us@HD` | `nbc-wavy-hampton-roads-va-hd/6365` |
| NBC (WBAL) Baltimore, MD HD | `WBALTV111.us@HD` | `nbc-wbal-baltimore-md-hd/6366` |
| NBC (WBBH) Fort Myers, FL HD | `WBBHTV201.us@HD` | `nbc-wbbh-fort-myers-fl-hd/4807` |
| NBC (WBIR) Knoxville, TN HD | `WBIRTV101.us@HD` | `nbc-wbir-knoxville-tn-hd/6367` |
| NBC (WBOY) Clarksburg, WV HD | `WBOYTV121.us@HD` | `nbc-wboy-clarksburg-wv-hd/6368` |
| NBC (WBRE) Wilkes-Barre, PA HD | `WBRETV281.us@HD` | `nbc-wbre-wilkes-barre-pa-hd/6369` |
| NBC (WCAU) Philadelphia, PA HD | `WCAU621.us@HD` | `nbc-wcau-philadelphia-pa-hd/6370` |
| NBC (WCBD) Charleston, SC HD | `WCBDTV21.us@HD` | `nbc-wcbd-charleston-sc-hd/6690` |
| NBC (WCMH) Columbus, OH HD | `WCMHTV41.us@HD` | `nbc-wcmh-columbus-oh-hd/3685` |
| NBC (WCNC) Charlotte, NC HD | `WCNCTV361.us@HD` | `nbc-wcnc-charlotte-nc-hd/5257` |
| NBC (WCSH) Portland, ME HD | `WCSH61.us@HD` | `nbc-wcsh-portland-me-hd/4760` |
| NBC (WCTX-CD) Virginia Beach, VA | `WCTXCD1.us@SD` | `nbc-wctx-cd-virginia-beach-va/25596` |
| NBC (WCYB) Bristol, VA HD | `WCYBTV51.us@HD` | `nbc-wcyb-bristol-va-hd/6894` |
| NBC (WDAM) Laurel, MS HD | `WDAMTV71.us@HD` | `nbc-wdam-laurel-ms-hd/6895` |
| NBC (WDIV) Detroit, MI HD | `WDIVTV41.us@HD` | `nbc-wdiv-detroit-mi-hd/2816` |
| NBC (WDSU) New Orleans, LA HD | `WDSU61.us@HD` | `nbc-wdsu-new-orleans-la-hd/6896` |
| NBC (WDTN) Dayton, OH HD | `WDTN431.us@SD` | `nbc-wdtn-dayton-oh-hd/7415` |
| NBC (WEAU) Eau Claire, WI HD | `WEAU131.us@HD` | `nbc-weau-eau-claire-wi-hd/8248` |
| NBC (WECT) Wilmington, NC HD | `WECT61.us@HD` | `nbc-wect-wilmington-nc-hd/4800` |
| NBC (WEEK) Bloomington, IL HD | `WEEKTV251.us@HD` | `nbc-week-bloomington-il-hd/4602` |
| NBC (WETM) Elmira, NY HD | `WETMTV181.us@HD` | `nbc-wetm-elmira-ny-hd/7021` |
| NBC (WFIE) Evansville, IN HD | `WFIE141.us@HD` | `nbc-wfie-evansville-in-hd/7019` |
| NBC (WFLA) Tampa Bay, FL HD | `WFLATV81.us@HD` | `nbc-wfla-tampa-bay-fl-hd/6699` |
| NBC (WFMJ) Youngstown, OH HD | `WFMJTV211.us@HD` | `nbc-wfmj-youngstown-oh-hd/6700` |
| NBC (WFXQ) Springfield, MA | `WFXQCD281.us@HD` | `nbc-wfxq-springfield-ma/11881` |
| NBC (WGAL) Lancaster, PA HD | `WGAL81.us@HD` | `nbc-wgal-lancaster-pa-hd/6701` |
| NBC (WGBA) Green Bay, WI HD | `WGBATV261.us@HD` | `nbc-wgba-green-bay-wi-hd/4899` |
| NBC (WGBC-DT2) Meridian, MS HD | `WGBC302.us@HD` | `nbc-wgbc-dt2-meridian-ms-hd/6702` |
| NBC (WGEM) Quincy, IL HD | `WGEMTV101.us@HD` | `nbc-wgem-quincy-il-hd/8015` |
| NBC (WGRZ) Buffalo, NY HD | `WGRZ21.us@HD` | `nbc-wgrz-buffalo-ny-hd/3582` |
| NBC (WGTQ-DT2) Traverse City, MI | `WGTQ82.us@HD` | `nbc-wgtq-dt2-traverse-city-mi/17951` |
| NBC (WHEC) Rochester, NY HD | `WHECTV101.us@HD` | `nbc-whec-rochester-ny-hd/13762` |
| NBC (WHIZ) Zanesville, OH HD | `WHIZTV181.us@HD` | `nbc-whiz-zanesville-oh-hd/7416` |
| NBC (WHO) Des Moines, IA HD | `WHODT1.us@SD` | `nbc-who-des-moines-ia-hd/6388` |
| NBC (WICU) Erie, PA HD | `WICUTV121.us@HD` | `nbc-wicu-erie-pa-hd/6390` |
| NBC (WILX) Lansing, MI HD | `WILXTV101.us@HD` | `nbc-wilx-lansing-mi-hd/7162` |
| NBC (WIS) Columbia, SC HD | `WISDT1.us@SD` | `nbc-wis-columbia-sc-hd/4763` |
| NBC (WITD-CD) Chesapeake, VA | `WITDCD231.us@HD` | `nbc-witd-cd-chesapeake-va/29463` |
| NBC (WITN) Greenville, NC HD | `WITNTV71.us@HD` | `nbc-witn-greenville-nc-hd/6393` |
| NBC (WIVT-DT2) Binghampton, NY | `WIVT342.us@HD` | `nbc-wivt-dt2-binghampton-ny/17722` |
| NBC (WJAC) Johnstown, PA HD | `WJACTV61.us@HD` | `nbc-wjac-johnstown-pa-hd/6394` |
| NBC (WJAR) Cranston, RI HD | `WJAR101.us@HD` | `nbc-wjar-cranston-ri-hd/6396` |
| NBC (WJFW) Wausau, WI HD | `WJFWTV121.us@HD` | `nbc-wjfw-wausau-wi-hd/6398` |
| NBC (WJHG-TV) Panama City Beach, FL HD | `WJHGTV71.us@HD` | `nbc-wjhg-panama-city-beach-fl-hd/6714` |
| NBC (WKTD) Portsmouth, VA | `WKTDCD171.us@HD` | `nbc-wktd-portsmouth-va/19455` |
| NBC (WKTV) Utica, NY HD | `WKTV21.us@HD` | `nbc-wktv-utica-ny-hd/7160` |
| NBC (WKYC) Cleveland, OH HD | `WKYC31.us@HD` | `nbc-wkyc-cleveland-oh-hd/3676` |
| NBC (WLBT) Jackson, MS HD | `WLBT31.us@HD` | `nbc-wlbt-jackson-ms-hd/7161` |
| NBC (WLBZ) Bangor, ME HD | `WLBZ21.us@HD` | `nbc-wlbz-bangor-me-hd/3641` |
| NBC (WLEX) Lexington, KY HD | `WLEXTV181.us@HD` | `nbc-wlex-lexington-ky-hd/6242` |
| NBC (WLIO) Lima, OH HD | `WLIO81.us@HD` | `nbc-wlio-lima-oh-hd/7408` |
| NBC (WLTZ) Columbus, GA HD | `WLTZ381.us@HD` | `nbc-wltz-columbus-ga-hd/6491` |
| NBC (WLUC) Upper Michigan, MI HD | `WLUCTV61.us@HD` | `nbc-wluc-upper-michigan-mi-hd/19898` |
| NBC (WLWK-CD) Sturgeon Bay, WI | `WLWKCD221.us@HD` | `nbc-wlwk-cd-sturgeon-bay-wi/29625` |
| NBC (WLWT) Cincinnati, OH HD | `WLWT641.us@HD` | `nbc-wlwt-cincinnati-oh-hd/3672` |
| NBC (WMAQ) Chicago, IL HD | `WMAQTV51.us@HD` | `nbc-wmaq-chicago-il-hd/6492` |
| NBC (WMBF) Myrtle Beach, SC HD | `WMBFTV321.us@HD` | `nbc-wmbf-myrtle-beach-sc-hd/6493` |
| NBC (WMC) Memphis, TN HD | `WMCDT1.us@SD` | `nbc-wmc-memphis-tn-hd/7871` |
| NBC (WMGT) Macon, GA HD | `WMGTTV411.us@HD` | `nbc-wmgt-macon-ga-hd/6494` |
| NBC (WMTV) Madison, WI HD | `WMTV151.us@HD` | `nbc-wmtv-madison-wi-hd/9104` |
| NBC (WNBC) New York, NY HD | `WNBC471.us@HD` | `nbc-wnbc-new-york-ny-hd/4559` |
| NBC (WNBD-LP) Grenada, MS HD | `WNBDLD331.us@HD` | `nbc-wnbd-lp-grenada-ms-hd/8806` |
| NBC (WNBJ-LD) Jackson, TN | `WNBJLD391.us@HD` | `nbc-wnbj-ld-jackson-tn/25992` |
| NBC (WNBW-DT) Gainesville, FL HD | `WNBWDT91.us@HD` | `nbc-wnbw-dt-gainesville-fl-hd/8106` |
| NBC (WNDU) South Bend, IN HD | `WNDUTV161.us@HD` | `nbc-wndu-south-bend-in-hd/6495` |
| NBC (WNKY) Bowling Green, KY HD | `WNKY401.us@HD` | `nbc-wnky-bowling-green-ky-hd/8278` |
| NBC (WNWO) Toledo, OH HD | `WNWOTV241.us@HD` | `nbc-wnwo-toledo-oh-hd/3683` |
| NBC (WNYT) Albany, NY HD | `WNYT131.us@HD` | `nbc-wnyt-albany-ny-hd/3707` |
| NBC (WOAI) San Antonio, TX HD | `WOAITV41.us@HD` | `nbc-woai-san-antonio-tx-hd/4871` |
| NBC (WOGC-CD) Holland, MI | `WOGCCD251.us@HD` | `nbc-wogc-cd-holland-mi/27224` |
| NBC (WOOD) Grand Rapids, MI HD | `WOODTV81.us@HD` | `nbc-wood-grand-rapids-mi-hd/9339` |
| NBC (WOWT) Omaha, NE HD | `WOWT61.us@HD` | `nbc-wowt-omaha-ne-hd/4738` |
| NBC (WPBN) Traverse City, MI HD | `WPBNTV71.us@HD` | `nbc-wpbn-traverse-city-mi-hd/11453` |
| NBC (WPMI) Mobile, AL HD | `WPMITV441.us@HD` | `nbc-wpmi-mobile-al-hd/7602` |
| NBC (WPSD) Paducah, KY HD | `WPSDTV61.us@HD` | `nbc-wpsd-paducah-ky-hd/6154` |
| NBC (WPTA-DT2) Ft. Wayne, IN | `WPTA212.us@HD` | `nbc-wpta-dt2-ft-wayne-in/5977` |
| NBC (WPTV) West Palm Beach, FL HD | `WPTVTV51.us@HD` | `nbc-wptv-west-palm-beach-fl-hd/8258` |
| NBC (WPTZ) Plattsburg, NY HD | `WPTZ51.us@HD` | `nbc-wptz-plattsburg-ny-hd/4527` |
| NBC (WPXI) Pittsburgh, PA HD | `WPXI111.us@HD` | `nbc-wpxi-pittsburgh-pa-hd/3714` |
| NBC (WRAL) Raleigh-Durham, NC HD | `WRALTV51.us@HD` | `nbc-wral-raleigh-durham-nc-hd/4826` |
| NBC (WRC) District of Columbia HD | `WRCDT1.us@SD` | `nbc-wrc-district-of-columbia-hd/3739` |
| NBC (WRCB) Chattanooga, TN HD | `WRCB31.us@HD` | `nbc-wrcb-chattanooga-tn-hd/9894` |
| NBC (WRDE) Salisbury, MD | `WRDELD311.us@HD` | `nbc-wrde-salisbury-md/20002` |
| NBC (WREX) Rockford, IL HD | `WREX131.us@HD` | `nbc-wrex-rockford-il-hd/19136` |
| NBC (WRGX) Dothan, AL HD | `WRGXLD231.us@HD` | `nbc-wrgx-dothan-al-hd/19093` |
| NBC (WSAV) Savannah, GA HD | `WSAVTV31.us@HD` | `nbc-wsav-savannah-ga-hd/7184` |
| NBC (WSAZ) Huntington, WV HD | `WSAZTV81.us@HD` | `nbc-wsaz-huntington-wv-hd/6116` |
| NBC (WSFA) Montgomery, AL HD | `WSFA121.us@HD` | `nbc-wsfa-montgomery-al-hd/6569` |
| NBC (WSLS) Roanoke, VA HD | `WSLSTV101.us@HD` | `nbc-wsls-roanoke-va-hd/6570` |
| NBC (WSMV) Nashville, TN HD | `WSMVTV41.us@HD` | `nbc-wsmv-nashville-tn-hd/6571` |
| NBC (WSTM) Syracuse, NY HD | `WSTMTV91.us@HD` | `nbc-wstm-syracuse-ny-hd/3663` |
| NBC (WTAP) Parkersburg, WV HD | `WTAPTV151.us@HD` | `nbc-wtap-parkersburg-wv-hd/6572` |
| NBC (WTHR) Indianapolis, IN HD | `WTHR131.us@HD` | `nbc-wthr-indianapolis-in-hd/7680` |
| NBC (WTLV) Jacksonville, FL HD | `WTLV121.us@HD` | `nbc-wtlv-jacksonville-fl-hd/5824` |
| NBC (WTMJ) Milwaukee, WI HD | `WTMJTV41.us@HD` | `nbc-wtmj-milwaukee-wi-hd/6849` |
| NBC (WTOM) Traverse City, MI | `WTOMTV41.us@HD` | `nbc-wtom-traverse-city-mi/5126` |
| NBC (WTOV) Steubenville, OH HD | `WTOVTV91.us@HD` | `nbc-wtov-steubenville-oh-hd/6850` |
| NBC (WTVA) Tupelo, MS HD | `WTVA91.us@HD` | `nbc-wtva-tupelo-ms-hd/6851` |
| NBC (WTVY-DT4) Dothan, AL | `WTVY44.us@SD` | `nbc-wtvy-dt4-dothan-al/11885` |
| NBC (WTWC) Tallahassee, FL HD | `WTWCTV401.us@HD` | `nbc-wtwc-tallahassee-fl-hd/8552` |
| NBC (WTWO) Terre Haute, IN HD | `WTWO21.us@HD` | `nbc-wtwo-terre-haute-in-hd/7526` |
| NBC (WVIR) Charlottesville, VA HD | `WVIRTV291.us@HD` | `nbc-wvir-charlottesville-va-hd/3746` |
| NBC (WVIT) W. Hartford, CT HD | `WVIT301.us@HD` | `nbc-wvit-w-hartford-ct-hd/7715` |
| NBC (WVLA) Baton Rouge, LA HD | `WVLATV331.us@HD` | `nbc-wvla-baton-rouge-la-hd/8058` |
| NBC (WVTM) Birmingham, AL HD | `WVTMTV131.us@HD` | `nbc-wvtm-birmingham-al-hd/7576` |
| NBC (WVVA) Bluefield, VA HD | `WVVA61.us@HD` | `nbc-wvva-bluefield-va-hd/8294` |
| NBC (WWBT) Richmond, VA HD | `WWBT651.us@HD` | `nbc-wwbt-richmond-va-hd/8193` |
| NBC (WWLP) Springfield, MA HD | `WWLP221.us@HD` | `nbc-wwlp-springfield-ma-hd/7730` |
| NBC (WXIA) Atlanta, GA HD | `WXIATV111.us@HD` | `nbc-wxia-atlanta-ga-hd/9904` |
| NBC (WXII) Winston-Salem, NC HD | `WXIITV201.us@HD` | `nbc-wxii-winston-salem-nc-hd/4721` |
| NBC (WYFF) Greenville, SC HD | `WYFF401.us@SD` | `nbc-wyff-greenville-sc-hd/7196` |
| NBC KJAC (KVHP-LD2) Jasper, TX | `KVHPLD2.us@SD` | `nbc-kjac-kvhp-ld2-jasper-tx/31336` |
| NBC Universo HD - Eastern | `NBCUniverso.us@East` | `nbc-universo-hd--eastern/16418` |
| NewsMax TV | `NewsmaxTV.us@SD` | `newsmax-tv/16818` |
| Newsmax2 | `Newsmax2.us@SD` | `newsmax2/37081` |
| NFL Network | `NFLNetwork.us@SD` | `nfl-network/3349` |
| NFL Sunday Ticket 1 | `NFLSundayTicket1.us@SD` | `nfl-sunday-ticket-1/2747` |
| NFL Sunday Ticket 10 | `NFLSundayTicket10.us@SD` | `nfl-sunday-ticket-10/2756` |
| NFL Sunday Ticket 11 | `NFLSundayTicket11.us@SD` | `nfl-sunday-ticket-11/2903` |
| NFL Sunday Ticket 12 | `NFLSundayTicket12.us@SD` | `nfl-sunday-ticket-12/2904` |
| NFL Sunday Ticket 13 | `NFLSundayTicket13.us@SD` | `nfl-sunday-ticket-13/2905` |
| NFL Sunday Ticket 14 | `NFLSundayTicket14.us@SD` | `nfl-sunday-ticket-14/2906` |
| NFL Sunday Ticket 2 | `NFLSundayTicket2.us@SD` | `nfl-sunday-ticket-2/2748` |
| NFL Sunday Ticket 3 | `NFLSundayTicket3.us@SD` | `nfl-sunday-ticket-3/2749` |
| NFL Sunday Ticket 4 | `NFLSundayTicket4.us@SD` | `nfl-sunday-ticket-4/2750` |
| NFL Sunday Ticket 5 | `NFLSundayTicket5.us@SD` | `nfl-sunday-ticket-5/2751` |
| NFL Sunday Ticket 6 | `NFLSundayTicket6.us@SD` | `nfl-sunday-ticket-6/2752` |
| NFL Sunday Ticket 7 | `NFLSundayTicket7.us@SD` | `nfl-sunday-ticket-7/2753` |
| NFL Sunday Ticket 8 | `NFLSundayTicket8.us@SD` | `nfl-sunday-ticket-8/2754` |
| NFL Sunday Ticket 9 | `NFLSundayTicket9.us@SD` | `nfl-sunday-ticket-9/2755` |
| NHL Center Ice 1 | `NHLCenterIce1.us@SD` | `nhl-center-ice-1/15375` |
| NHL Center Ice 10 | `NHLCenterIce10.us@SD` | `nhl-center-ice-10/15377` |
| NHL Center Ice 2 | `NHLCenterIce2.us@SD` | `nhl-center-ice-2/15383` |
| NHL Center Ice 3 | `NHLCenterIce3.us@SD` | `nhl-center-ice-3/15385` |
| NHL Center Ice 4 | `NHLCenterIce4.us@SD` | `nhl-center-ice-4/15387` |
| NHL Center Ice 5 | `NHLCenterIce5.us@SD` | `nhl-center-ice-5/15389` |
| NHL Center Ice 6 | `NHLCenterIce6.us@SD` | `nhl-center-ice-6/15392` |
| NHL Center Ice 7 | `NHLCenterIce7.us@SD` | `nhl-center-ice-7/15393` |
| NHL Center Ice 8 | `NHLCenterIce8.us@SD` | `nhl-center-ice-8/15395` |
| NHL Center Ice 9 | `NHLCenterIce9.us@SD` | `nhl-center-ice-9/15397` |
| NHL Network USA | `NHLNetwork.us@SD` | `nhl-network-usa/14156` |
| NHL Network USA Alternate HD | `NHLNetworkAlternate.us@SD` | `nhl-network-usa-alternate-hd/18834` |
| Nick Jr. - East | `NickJr.us@East` | `nick-jr--east/1969` |
| Nick Jr. - West | `NickJr.us@West` | `nick-jr--west/14645` |
| Nickelodeon USA - East Feed HD | `Nickelodeon.us@East` | `nickelodeon-usa--east-feed-hd/6342` |
| Nickelodeon USA - Pacific Feed HD | `Nickelodeon.us@West` | `nickelodeon-usa--pacific-feed-hd/6343` |
| Nicktoons HD - East | `Nicktoons.us@East` | `nicktoons-hd--east/11445` |
| Nicktoons HD - West | `Nicktoons.us@West` | `nicktoons-hd--west/16230` |
| North Star SEN (KXLT-DT2) Rochester, MN HD | `KXLTTV472.us@SD` | `metv-kxlt-dt2-rochester-mn-hd/9223` |
| One America News Network | `OneAmericaNewsNetwork.us@SD` | `one-america-news-network/12614` |
| ONTV4U | `OnTV4U.us@SD` | `ontv4u/13142` |
| Oprah Winfrey Network USA Eastern | `OWN.us@East` | `oprah-winfrey-network-usa-eastern/1159` |
| Oprah Winfrey Network USA Pacific | `OWN.us@West` | `oprah-winfrey-network-usa-pacific/6125` |
| Outdoor Channel US | `OutdoorChannel.us@SD` | `outdoor-channel-us/1086` |
| Outdoor Channel US HD | `OutdoorChannel.us@HD` | `outdoor-channel-us-hd/4638` |
| Oxygen True Crime HD - Eastern | `Oxygen.us@East` | `oxygen-hd--eastern/6846` |
| Oxygen True Crime HD - Pacific | `Oxygen.us@West` | `oxygen-hd--pacific/16231` |
| PBS (KCTS) Seattle, WA | `KCTSTV91.us@HD` | `pbs-kcts-seattle-wa/190` |
| PBS (KUFM) Missoula, MT | `KUFMTV111.us@HD` | `pbs-kufm-missoula-mt/13228` |
| PBS (WBGU) Bowling Green, OH | `WBGUTV271.us@HD` | `pbs-wbgu-bowling-green-oh/3025` |
| PBS (WCMU) Mt. Pleasant, MI | `WCMUTV141.us@HD` | `pbs-wcmu-mt-pleasant-mi/9304` |
| PBS (WDCQ) Flint, MI | `WDCQTV191.us@HD` | `pbs-wdcq-flint-mi/9042` |
| PBS (WETA) HD Washington, DC | `WETATV261.us@HD` | `pbs-weta-hd-washington-dc/8180` |
| PBS (WETK) Colchester, VT | `WETK331.us@HD` | `pbs-wetk-colchester-vt/102` |
| PBS (WGVU) Grand Rapids, MI | `WGVUTV351.us@HD` | `pbs-wgvu-grand-rapids-mi/1919` |
| PBS (WKAR) East Lansing, MI | `WKARTV231.us@HD` | `pbs-wkar-east-lansing-mi/13241` |
| PBS (WLIW) Long Island, NY | `WLIW471.us@HD` | `pbs-wliw-long-island-ny/1775` |
| PBS (WLVT) Bethlehem, PA HD | `WLVTTV691.us@HD` | `pbs-wlvt-bethlehem-pa-hd/8664` |
| PBS (WMAE) Booneville, MS | `WMAETV121.us@HD` | `pbs-wmae-booneville-ms/1402` |
| PBS (WNED) Buffalo, NY | `WNEDTV171.us@HD` | `pbs-wned-buffalo-ny/92` |
| PBS (WNET) New York, NY | `WNET211.us@HD` | `pbs-wnet-new-york-ny/1774` |
| PBS (WPBS) Watertown, NY | `WPBSTV161.us@HD` | `pbs-wpbs-watertown-ny/29` |
| PBS (WSBE) Providence, RI HD | `WSBETV511.us@SD` | `pbs-wsbe-providence-ri-hd/7752` |
| PBS (WTVS) Detroit, MI | `WTVS561.us@HD` | `pbs-wtvs-detroit-mi/22` |
| PBS (WXXI) Rochester, NY | `WXXITV211.us@HD` | `pbs-wxxi-rochester-ny/46` |
| PBS KIDS 24/7 | `PBSKids.us@SD` | `pbs-kids-247/31867` |
| PBS World | `WorldChannel.us@SD` | `pbs-world/10214` |
| POP HD - East | `Pop.us@East` | `pop-hd--east/10370` |
| POP HD - West | `Pop.us@West` | `pop-hd--west/19105` |
| PosiTiV | `PositivTV.us@SD` | `positiv/4456` |
| QVC | `QVC.us@SD` | `qvc/14683` |
| ReelzChannel | `Reelz.us@SD` | `reelzchannel/4175` |
| Revolt TV | `Revolt.us@SD` | `revolt-tv/11301` |
| Rewind TV US (WNCN2) Raleigh-Durham, NC | `WNCN282.us@SD` | `rewind-tv-us-wncn2-raleigh-durham-nc/9991` |
| ROAR (KOKI) Tulsa, OK HD | `KOKITV231.us@HD` | `fox-koki-tulsa-ok-hd/8151` |
| ROAR (WEYI) Flint, MI HD | `WEYITV461.us@HD` | `nbc-weyi-flint-mi-hd/7020` |
| Scripps News | `ScrippsNews.us@SD` | `scripps-news/5999` |
| SEC Network HD | `SECNetwork.us@SD` | `sec-network-hd/13712` |
| Shop LC | `ShopLC.us@SD` | `shop-lc/36273` |
| Showtime 2 - Eastern | `Showtime2.us@East` | `showtime-2--eastern/1387` |
| Showtime 2 - Pacific | `Showtime2.us@West` | `showtime-2--pacific/2596` |
| Showtime Extreme HD - Eastern | `ShowtimeExtreme.us@East` | `showtime-extreme-hd--eastern/7107` |
| Showtime Extreme HD - Pacific | `ShowtimeExtreme.us@West` | `showtime-extreme-hd--pacific/7569` |
| Showtime Family Zone - Pacific | `ShowtimeFamilyZone.us@West` | `showtime-family-zone--pacific/2599` |
| Showtime Family Zone HD - Eastern | `ShowtimeFamilyZone.us@East` | `showtime-family-zone-hd--eastern/7108` |
| Showtime Next HD - Eastern | `ShowtimeNext.us@East` | `showtime-next-hd--eastern/7109` |
| Showtime Next HD - Pacific | `ShowtimeNext.us@West` | `showtime-next-hd--pacific/20033` |
| Showtime Women - Eastern | `ShowtimeWomen.us@East` | `showtime-women--eastern/2273` |
| Showtime Women HD - Pacific | `ShowtimeWomen.us@West` | `showtime-women-hd--pacific/19982` |
| Smile | `Smile.us@SD` | `smile/5275` |
| Sports (KATU-DT2) Portland, OR | `KATU22.us@HD` | `metv-katu-dt2-portland-or/11770` |
| Start TV (WRAL-TV3) Raleigh, NC | `WRALTV53.us@SD` | `start-tv-wral-tv3-raleigh-nc/33861` |
| Starz Comedy - Eastern | `StarzComedy.us@East` | `starz-comedy--eastern/4223` |
| Starz Comedy - Pacific | `StarzComedy.us@West` | `starz-comedy--pacific/4224` |
| Starz Edge - Eastern | `StarzEdge.us@East` | `starz-edge--eastern/2120` |
| Starz Edge - Pacific | `StarzEdge.us@West` | `starz-edge--pacific/2678` |
| Starz Encore Action HD - Eastern | `StarzEncoreAction.us@East` | `starz-encore-action-hd--eastern/10812` |
| Starz Encore Action HD - Pacific | `StarzEncoreAction.us@West` | `starz-encore-action-hd--pacific/10813` |
| Starz Encore Black HD - Eastern | `StarzEncoreBlack.us@East` | `starz-encore-black-hd--eastern/10814` |
| Starz Encore Black HD - Pacific | `StarzEncoreBlack.us@West` | `starz-encore-black-hd--pacific/10815` |
| Starz Encore Family HD - Eastern | `StarzEncoreFamily.us@East` | `starz-encore-family-hd--eastern/11441` |
| Starz Encore Family HD - Pacific | `StarzEncoreFamily.us@West` | `starz-encore-family-hd--pacific/11442` |
| Starz Encore HD - Eastern | `StarzEncore.us@East` | `starz-encore-hd--eastern/6083` |
| Starz Encore HD - Pacific | `StarzEncore.us@West` | `starz-encore-hd--pacific/13464` |
| Starz Encore Suspense HD - Eastern | `StarzEncoreSuspense.us@East` | `starz-encore-suspense-hd--eastern/11437` |
| Starz Encore Suspense HD - Pacific | `StarzEncoreSuspense.us@West` | `starz-encore-suspense-hd--pacific/11438` |
| Starz Encore Westerns HD - Eastern | `StarzEncoreWesterns.us@East` | `starz-encore-westerns-hd--eastern/11439` |
| Starz Encore Westerns HD - Pacific | `StarzEncoreWesterns.us@West` | `starz-encore-westerns-hd--pacific/11440` |
| Starz HD - Eastern | `Starz.us@East` | `starz-hd--eastern/3388` |
| Starz HD - Pacific | `Starz.us@West` | `starz-hd--pacific/3389` |
| Starz In Black - Eastern | `StarzInBlack.us@East` | `starz-in-black--eastern/1957` |
| Starz In Black - Pacific | `StarzInBlack.us@West` | `starz-in-black--pacific/2679` |
| Starz Kids & Family - Eastern | `StarzKidsFamily.us@East` | `starz-kids--family--eastern/1194` |
| Starz Kids & Family - Pacific | `StarzKidsFamily.us@West` | `starz-kids--family--pacific/1219` |
| SundanceTV USA - East | `SundanceTV.us@East` | `sundancetv-usa--east/1848` |
| SundanceTV USA - West | `SundanceTV.us@West` | `sundancetv-usa--west/4169` |
| Syfy HD - Eastern Feed | `Syfy.us@East` | `syfy-hd--eastern-feed/5643` |
| Syfy HD - Pacific Feed | `Syfy.us@West` | `syfy-hd--pacific-feed/5644` |
| TBN - Trinity Broadcasting Network - East | `TBN.us@East` | `tbn--trinity-broadcasting-network--east/1119` |
| TBN (WTBY) New York, NY | `WTBYTV541.us@HD` | `tbn-wtby-new-york-ny/2575` |
| TBS - East HD | `TBS.us@East` | `tbs--east-hd/6090` |
| TBS - Pacific HD | `TBS.us@West` | `tbs--pacific-hd/6231` |
| Telemundo - Eastern Feed | `Telemundo.us@East` | `telemundo--eastern-feed/1521` |
| Telemundo - Pacific Feed | `Telemundo.us@West` | `telemundo--pacific-feed/2013` |
| Telemundo (KVEA) Los Angeles, CA | `KVEA521.us@HD` | `telemundo-kvea-los-angeles-ca/2611` |
| Telemundo (WNJU) Teterboro, NJ | `WNJU471.us@HD` | `telemundo-wnju-teterboro-nj/1772` |
| Telemundo (WQWQ-LP) Paducah, KY | `WQWQLP1.us@SD` | `cbs-wqwq-lp-paducah-ky/19437` |
| TeleXitos (KASA-TV2) Albuquerque, NM | `KASATV22.us@SD` | `metv-kasa-tv2-albuquerque-nm/31483` |
| The Cooking Channel HD | `CookingChannel.us@SD` | `the-cooking-channel-hd/8113` |
| The Country Network (WDVB) Edison, NJ | `WDVBCD541.us@HD` | `the-country-network-wdvb-edison-nj/11067` |
| The Nest | `TheNest.us@SD` | `the-nest/14118` |
| The Tennis Channel HD | `TennisChannel.us@SD` | `the-tennis-channel-hd/7051` |
| The Weather Channel HD | `TheWeatherChannel.us@SD` | `the-weather-channel-hd/5599` |
| Three Angels Broadcasting Network | `3ABNEnglish.us@SD` | `three-angels-broadcasting-network/19066` |
| TLC USA HD - Eastern | `TLC.us@East` | `tlc-usa-hd--eastern/5004` |
| TLC USA HD - Pacific | `TLC.us@West` | `tlc-usa-hd--pacific/13492` |
| TNT - Eastern Feed | `TNT.us@East` | `tnt--eastern-feed/347` |
| TNT - Pacific Feed | `TNT.us@West` | `tnt--pacific-feed/2252` |
| truTV USA - East HD | `truTV.us@East` | `trutv-usa--east-hd/6996` |
| truTV USA - Pacific HD | `truTV.us@West` | `trutv-usa--pacific-hd/18808` |
| Turner Classic Movies USA | `TCM.us@East` | `turner-classic-movies-usa/176` |
| TV Land - Eastern HD | `TVLand.us@East` | `tv-land--eastern-hd/8815` |
| TV Land - Pacific HD | `TVLand.us@West` | `tv-land--pacific-hd/16223` |
| TV One | `TVOne.us@SD` | `tv-one/2287` |
| UNI (KMEX) Los Angeles, CA | `KMEXDT341.us@HD` | `uni-kmex-los-angeles-ca/2602` |
| UNI (WXTV) Teaneck, NJ | `WXTVDT681.us@HD` | `uni-wxtv-teaneck-nj/1771` |
| UniMás (KFTR) Ontario, CA | `KMEXDT342.us@SD` | `unimas-kftr-ontario-ca/11261` |
| UniMás (WFTY) Smithtown, NY | `WFTYDT671.us@SD` | `unimas-wfty-smithtown-ny/1961` |
| UniMás (WFUT) New York, NY | `WFUTDT681.us@HD` | `unimas-wfut-new-york-ny/1776` |
| Univision - Eastern Feed HD | `Univision.us@East` | `univision--eastern-feed-hd/8136` |
| Univision - Pacific Feed HD | `Univision.us@West` | `univision--pacific-feed-hd/8137` |
| UP | `UpTV.us@SD` | `up/5911` |
| VH1 HD - Eastern | `VH1.us@East` | `vh1-hd--eastern/6204` |
| VH1 HD - Pacific Feed | `VH1.us@West` | `vh1-hd--pacific-feed/16234` |
| Vision Latina (KCYM-LD) Des Moines, IA | `KCYMLD441.us@SD` | `newsmax-tv-kcym-ld-des-moines-ia/26376` |
| WE (Women's Entertainment) - Eastern | `WeTV.us@East` | `we-womens-entertainment--eastern/664` |
| WE (Women's Entertainment) - Pacific | `WeTV.us@West` | `we-womens-entertainment--pacific/4171` |
| WeatherNation | `WeatherNation.us@SD` | `weathernation/13501` |
| WFMZ-Allentown, PA HD | `WFMZTV691.us@HD` | `wfmz-allentown-pa-hd/7787` |
| WHDH Boston, MA | `WHDH71.us@HD` | `whdh-boston-ma/135` |
| WLNY TV10/55, Riverhead, NY | `WLNYTV551.us@HD` | `wlny-tv1055-riverhead-ny/9574` |
| WMYD Detroit, MI | `WMYD71.us@HD` | `mnt-wmyd-detroit-mi/269` |
| WPIX New York (SUPERSTATION) HD | `WPIX71.us@HD` | `wpix-new-york-superstation-hd/4794` |
| YES Network | `YesNetwork.us@SD` | `yes-network/1953` |

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
