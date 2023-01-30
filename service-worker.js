/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "72560c9b838e4951c08d4ee0d267733b"
  },
  {
    "url": "api/cli.html",
    "revision": "78a07ef0179c35d1de733bd39a4bd4d9"
  },
  {
    "url": "api/node.html",
    "revision": "01dd2a8149ad339a60316714749ed7d6"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.7fef8a44.css",
    "revision": "50eafdd2836caa97808e6ffd8e342211"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c4d66ff2.js",
    "revision": "43e8bb0a5c4b71fcfe51519bd8333852"
  },
  {
    "url": "assets/js/100.92912fb8.js",
    "revision": "8aae0ff578220ba018aa752c4bbf3760"
  },
  {
    "url": "assets/js/101.86ade755.js",
    "revision": "7b5f06d62c1a20d24cff8648c4bbe02c"
  },
  {
    "url": "assets/js/102.f45b9e50.js",
    "revision": "f02da8f4da7dddcc924fe4f3808b691e"
  },
  {
    "url": "assets/js/103.7c90b94d.js",
    "revision": "769e7e9e1eb2e1926f38f948b752ec34"
  },
  {
    "url": "assets/js/104.ff245914.js",
    "revision": "5a3152cdb38b496c44debe1ca8fc60a2"
  },
  {
    "url": "assets/js/105.1fce5fee.js",
    "revision": "c194cc9e2de54640d55e27c5810c9fab"
  },
  {
    "url": "assets/js/106.6c7f3aea.js",
    "revision": "bd17b6190392fc73d1dffe5bf5f344b5"
  },
  {
    "url": "assets/js/107.7c78bdec.js",
    "revision": "43666fc9613a6c5399b6d5ae9b7f679e"
  },
  {
    "url": "assets/js/108.c16451fe.js",
    "revision": "053f19526b7e780cfcdf997501e885ee"
  },
  {
    "url": "assets/js/109.8f6de160.js",
    "revision": "bbeda743cfa6d285c8aeeacde5322ebc"
  },
  {
    "url": "assets/js/11.f883cecf.js",
    "revision": "13c509c06b2c06ec3f5343fcbfbb0651"
  },
  {
    "url": "assets/js/110.cac27508.js",
    "revision": "98b9a051811d5fc58fb51ae0e8d8a408"
  },
  {
    "url": "assets/js/12.4c6c4262.js",
    "revision": "7462f409233164583ce6f63d8aaef5e7"
  },
  {
    "url": "assets/js/13.e5990ec0.js",
    "revision": "2ba91a8853ee92dd6bcf1f58a0c51093"
  },
  {
    "url": "assets/js/14.b1c421f9.js",
    "revision": "52893b96be321b7bd4d8ee169fcd34f2"
  },
  {
    "url": "assets/js/15.a6b105eb.js",
    "revision": "607975b8a65bd14054beeb59fb4f0df6"
  },
  {
    "url": "assets/js/16.ed2f4936.js",
    "revision": "d27db9c86294c9fb22ddcca7dcc5b0cf"
  },
  {
    "url": "assets/js/17.ae1b46bd.js",
    "revision": "ec56c8f6f91ecaa0f418f328460c04eb"
  },
  {
    "url": "assets/js/18.192f180e.js",
    "revision": "b68ee6c95a8613e023dfd53dc18af210"
  },
  {
    "url": "assets/js/19.c358957f.js",
    "revision": "f2e77b98b87b0c8cff79c559f55b3328"
  },
  {
    "url": "assets/js/20.84e53a02.js",
    "revision": "77624df41fd55cf38dee5526162ece46"
  },
  {
    "url": "assets/js/21.e62057c2.js",
    "revision": "0c519f7a0edc3d725bf8192ef5b15ea0"
  },
  {
    "url": "assets/js/22.507060a5.js",
    "revision": "d717bde2d39eebcbb9e3d442cc29e704"
  },
  {
    "url": "assets/js/23.4de74f49.js",
    "revision": "419c5bd87b7ad8e44261d8c8e58d5e1c"
  },
  {
    "url": "assets/js/24.d11ec67e.js",
    "revision": "fe280e6dd48423972661d8ecf60c5d32"
  },
  {
    "url": "assets/js/25.1c45030e.js",
    "revision": "329ea681825e9414198c7ce74bf11fdf"
  },
  {
    "url": "assets/js/26.c539b9de.js",
    "revision": "506c19911475251c3ac12e9264edb339"
  },
  {
    "url": "assets/js/27.063609c5.js",
    "revision": "1bd5f718f51fed605114b16d2e34f1dc"
  },
  {
    "url": "assets/js/28.a30d0353.js",
    "revision": "dc3c5bfe100f60951fd6528f66387ea0"
  },
  {
    "url": "assets/js/29.5686bf2e.js",
    "revision": "ef1e50cd640cee41a10a28b7fd7bd24c"
  },
  {
    "url": "assets/js/30.fc1b694f.js",
    "revision": "69aabb6fc48f991389b236e908253556"
  },
  {
    "url": "assets/js/31.5468743c.js",
    "revision": "004ece7cd57c1c72c7f3012660ae3000"
  },
  {
    "url": "assets/js/32.55640998.js",
    "revision": "2039eeceedd9ba2e6ff814c0449749d2"
  },
  {
    "url": "assets/js/33.a45e5cfc.js",
    "revision": "06fea00c5a324d558cd9d70305ee71d8"
  },
  {
    "url": "assets/js/34.aec32ae3.js",
    "revision": "8797d1fdb4802d9b77eec064c0977871"
  },
  {
    "url": "assets/js/35.e8d59ca5.js",
    "revision": "c188174263eee9c2b27c781df10f726e"
  },
  {
    "url": "assets/js/36.9e2d793b.js",
    "revision": "55e80c4b35d80bd98912ad1067667f7e"
  },
  {
    "url": "assets/js/37.73a936ca.js",
    "revision": "95481b0d476e44ad27437bea7cec8aaf"
  },
  {
    "url": "assets/js/38.92c55c0f.js",
    "revision": "c597fcc4a2af35cc070bc43b3c3eaf33"
  },
  {
    "url": "assets/js/39.6f9e05b0.js",
    "revision": "0c559f1689b66de4bb61c334d76be6b1"
  },
  {
    "url": "assets/js/40.26470c8d.js",
    "revision": "d81bc7eb6295b2b9219883f5ef623388"
  },
  {
    "url": "assets/js/41.d5737998.js",
    "revision": "d62847e4070248f8c8b20a2453693d3d"
  },
  {
    "url": "assets/js/42.cc7d2fe2.js",
    "revision": "5fd8088a9581979fe18fe56358e02020"
  },
  {
    "url": "assets/js/43.ca14971b.js",
    "revision": "a47464bb98222b6a10bae29a3f4b7b84"
  },
  {
    "url": "assets/js/44.9618bd7e.js",
    "revision": "8617c79780b9e91d57e2379af75357d8"
  },
  {
    "url": "assets/js/45.363c656d.js",
    "revision": "f5a955cd241d2876f3c21bcaa8ba0dbe"
  },
  {
    "url": "assets/js/46.61614985.js",
    "revision": "b875e49cdc0042f4e0d688c50964a3eb"
  },
  {
    "url": "assets/js/47.754a77a2.js",
    "revision": "710865ab9db97f6e58388eef3aaef99e"
  },
  {
    "url": "assets/js/48.41e458e1.js",
    "revision": "1bf5db3fa4a32a6795eee10864ecfb6b"
  },
  {
    "url": "assets/js/49.65b8e889.js",
    "revision": "b131de4cb428aa9d8e01d55b9dccc2d9"
  },
  {
    "url": "assets/js/5.0356bad9.js",
    "revision": "7f68985ab06f11f8722afa8773623a5e"
  },
  {
    "url": "assets/js/50.45c31c8d.js",
    "revision": "99105618e508bc04af0be2835d4e1767"
  },
  {
    "url": "assets/js/51.4f508daf.js",
    "revision": "4fc3dc33e589c27652f69ca8d83eeb41"
  },
  {
    "url": "assets/js/52.00febbb9.js",
    "revision": "a2d5f25cc9ee5c0a01da9e574a3f3daa"
  },
  {
    "url": "assets/js/53.f3dc98f4.js",
    "revision": "5df2fd50c1be1fc7aa6f332d825ad9e4"
  },
  {
    "url": "assets/js/54.4339a8eb.js",
    "revision": "8c75305c718391d0f04dbbf5ef8bc923"
  },
  {
    "url": "assets/js/55.9c494e90.js",
    "revision": "fb3238b541ac1f9bd364e3ef74e026a5"
  },
  {
    "url": "assets/js/56.d577c3a9.js",
    "revision": "6ee8665656e1ae28422b1117aeab4b8e"
  },
  {
    "url": "assets/js/57.490eacc9.js",
    "revision": "d600d26197deb5d95142ca67aaa02c82"
  },
  {
    "url": "assets/js/58.3ee3051b.js",
    "revision": "13140b7a629de2497ecfa411d04afc00"
  },
  {
    "url": "assets/js/59.48feac09.js",
    "revision": "dd673d62db0ff6ab2d64704d3f5e24bf"
  },
  {
    "url": "assets/js/6.3218ba87.js",
    "revision": "a3d263a1b0568e302f34d38fe6953e05"
  },
  {
    "url": "assets/js/60.df0c2d8b.js",
    "revision": "474044e22869f1296c7cf62e26c87adf"
  },
  {
    "url": "assets/js/61.e82c4356.js",
    "revision": "0d26d1cee960bec95080b0d2d02c9d2b"
  },
  {
    "url": "assets/js/62.f689df20.js",
    "revision": "0102da7ae94e1743dfb4e6a60c64eb80"
  },
  {
    "url": "assets/js/63.1c793b48.js",
    "revision": "08ebb32224e3d8c2ffd82eb55cbec2a1"
  },
  {
    "url": "assets/js/64.716a70d0.js",
    "revision": "c5ce160d0d8b8a37d2b1103e4aefc2f7"
  },
  {
    "url": "assets/js/65.b98d8bcf.js",
    "revision": "b5c8833799920f12827a015c1157cdde"
  },
  {
    "url": "assets/js/66.37f7ca0b.js",
    "revision": "4f5c2f203afdb4b1ef128e36121abf05"
  },
  {
    "url": "assets/js/67.612bf971.js",
    "revision": "275e405a6d516ec6914e4d134280e7d4"
  },
  {
    "url": "assets/js/68.a5ec9490.js",
    "revision": "2b5b397428e587303e24cb6908f538f4"
  },
  {
    "url": "assets/js/69.563ce73b.js",
    "revision": "f6f890ce5d87207c2b7128f312491b6e"
  },
  {
    "url": "assets/js/7.622c5acd.js",
    "revision": "ef4d69da4af5183f38ae8ad40f07de8f"
  },
  {
    "url": "assets/js/70.9f1ee749.js",
    "revision": "756e409b33d97ac0c4ff49fd623b94f7"
  },
  {
    "url": "assets/js/71.a0f399b1.js",
    "revision": "06a27b5c7c97a03413e7074d8456b19c"
  },
  {
    "url": "assets/js/72.001f47b8.js",
    "revision": "03d8048355c9d432d064fdfa5f358558"
  },
  {
    "url": "assets/js/73.4427240b.js",
    "revision": "91d5420f095facc977763b46d0c50a57"
  },
  {
    "url": "assets/js/74.aa0b3398.js",
    "revision": "ffca24792873319ea15991a896567b3e"
  },
  {
    "url": "assets/js/75.efb06f5b.js",
    "revision": "2df1b05df059bed0e6298774d2c6d74c"
  },
  {
    "url": "assets/js/76.de141f6d.js",
    "revision": "a3589eeb6f0f31d49c9517d6061a51ca"
  },
  {
    "url": "assets/js/77.f0a1b80b.js",
    "revision": "e4d52f76c250022013c13fd63c9485b9"
  },
  {
    "url": "assets/js/78.c61bc0ca.js",
    "revision": "5812bfb48b08666036cf84bbbcbc94e2"
  },
  {
    "url": "assets/js/79.8d7740e7.js",
    "revision": "3a6ef9320451db2ef229a088e31f1960"
  },
  {
    "url": "assets/js/8.20e11ac3.js",
    "revision": "9e5a22fefb12325cded0531e6d93a4d4"
  },
  {
    "url": "assets/js/80.2d3a8c11.js",
    "revision": "8ae6520a85b54fdcc16a8ca70c1f7251"
  },
  {
    "url": "assets/js/81.ae8eea60.js",
    "revision": "e676b24662c4445746cb6215977c7dc3"
  },
  {
    "url": "assets/js/82.11bde23f.js",
    "revision": "acee83981d45ef2837755ac2f2f32716"
  },
  {
    "url": "assets/js/83.81cfe200.js",
    "revision": "fb88c31c68dd95402f7bd980f5239330"
  },
  {
    "url": "assets/js/84.b406494e.js",
    "revision": "74fc77073d4ae21f77fbf193735789e1"
  },
  {
    "url": "assets/js/85.14708f52.js",
    "revision": "7318cd0116a2f993aea3349e7edfa87b"
  },
  {
    "url": "assets/js/86.384adf85.js",
    "revision": "fb8929cce837c88ee0bcd2fd6d04ce21"
  },
  {
    "url": "assets/js/87.591e96f6.js",
    "revision": "0542af6b64b4298fff596934c79a7e8d"
  },
  {
    "url": "assets/js/88.ad35cb2d.js",
    "revision": "703787af91aeb049b13d6040a61f50c1"
  },
  {
    "url": "assets/js/89.11b828f8.js",
    "revision": "1f93946040f3488807020d57209f9da4"
  },
  {
    "url": "assets/js/9.f40c8d63.js",
    "revision": "684c43c3b1cac05341b80ff84c91d81c"
  },
  {
    "url": "assets/js/90.93545807.js",
    "revision": "e2e93f66c356bd03b3901d16a2f8d29b"
  },
  {
    "url": "assets/js/91.d288f419.js",
    "revision": "00fa0cad4b48d39a8ef16b3f69de748e"
  },
  {
    "url": "assets/js/92.47b05629.js",
    "revision": "b3c287b8447059a1ed10080f13933707"
  },
  {
    "url": "assets/js/93.28e63796.js",
    "revision": "6c43c33596caab2386ec20ac877127ec"
  },
  {
    "url": "assets/js/94.a9ff1c9f.js",
    "revision": "dc6b2754604788bd12db1573c6063811"
  },
  {
    "url": "assets/js/95.ca47a425.js",
    "revision": "fa879a1a35fe611d83dc09b32d4e4bd1"
  },
  {
    "url": "assets/js/96.f408eeb9.js",
    "revision": "5b31b4c11b3e4655f04b99aaecbcc6cd"
  },
  {
    "url": "assets/js/97.66d58197.js",
    "revision": "aae081df72df619b62aaf726e7fa1af6"
  },
  {
    "url": "assets/js/98.958a7138.js",
    "revision": "459f63fcc7f481ccc0d8d6724dd172dc"
  },
  {
    "url": "assets/js/99.84d3380a.js",
    "revision": "ee21213e620057f8242beb62b9d05838"
  },
  {
    "url": "assets/js/app.bdea7db2.js",
    "revision": "cda533336ac08ddd81e3c72f7885b678"
  },
  {
    "url": "assets/js/vendors~docsearch.e0c00185.js",
    "revision": "7032f0387eda3c3cd075a2be354f4e8f"
  },
  {
    "url": "assets/js/vendors~flowchart.4d811a74.js",
    "revision": "5c4afe1847726abffdba010302bc0d6d"
  },
  {
    "url": "assets/js/vendors~notification.29f11cd4.js",
    "revision": "ed2eb05acd21b5ef4ef08408c5ea3733"
  },
  {
    "url": "config/index.html",
    "revision": "1a2a92a32e2ccd51965baf82fa3cf918"
  },
  {
    "url": "faq/index.html",
    "revision": "527f86ff1784d1d6a38d0fce0c8cd979"
  },
  {
    "url": "guide/assets.html",
    "revision": "474d03d38030f6bfb707bbefad5509aa"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "cecc8cb382d9fdf714f43ba30e6adb41"
  },
  {
    "url": "guide/deploy.html",
    "revision": "b6fe411216ab92ad47230b586b928bd6"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "1a212810b44d8c9b70aef484282d3827"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "bedf4d5550ad0f49038c767fbafc47f8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5c80e2845a74807480cbfca4882b7c9e"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "e97db56a31baa4bee8e2c8791e84104f"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a62c2f4e1b166cfd8d9df8de8857738c"
  },
  {
    "url": "guide/index.html",
    "revision": "83e6b548edeedf4c4da71975151dc4ed"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "4f36772a3aaadfe391f02427835a58df"
  },
  {
    "url": "guide/markdown.html",
    "revision": "c85e75626686d4d3df620adc95173da3"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "fda9fd95ac661a5d51765467d826fdf3"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "5b1a782de6e3015a90218c7b9ffea31a"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "28e666b0acd4716c830c73580be91fa3"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "a870ea2df937e4dd01ce544db92e584f"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "4e1d76bad6bc7364dffc26679d58f038"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "dab60a259a256384267dac11852bb2ba"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "2142ae201e2d64298292abbc7702ecdd"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "22ce834a7a81a94fe5f4c1cb1e43d8c4"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "4db1effcaa6d867ff840d741fa36d8d0"
  },
  {
    "url": "plugin/index.html",
    "revision": "9d10edac3b67ff2d04bebf1751eb2a9a"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "b33a6ea9d237a35ea17b0bf6c679492d"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "ddef8e0c93db92ff2760034a9152efdb"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "0ad4a5e58e420be8cefa134b90d0690b"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "7c9301ebcc77429a08bf8fa3c43673cd"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "c0845e42bf4459e4b641aa4f64788860"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "ab60408434a9f0b333ecd6fe0e1e97aa"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "13c838bd4c144d9fece8c2724c4d6fff"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "42033fa53b93903a4c102bce84125021"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "cab9e6347a60a3c7ae684e18b997552d"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "8a52c53cdd8f2f074c5157c1fa418cca"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "3cb7ada3636a566958e110b3882d8ed8"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "99e052881dd9dc37027cd8f1c7725a99"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "911cd3696541331a0bf35b70c669f4b4"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "c2b227ad189e7517c1bc5efad5438805"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "75949becaba75bb6951437e3831cfe25"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "1c3813ea7311dbfdf1157605b56bbfa0"
  },
  {
    "url": "theme/index.html",
    "revision": "93b7ff5f43b22d2c622f1f95653db148"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "1fa15992c96fc2904e775863ff7229f6"
  },
  {
    "url": "theme/option-api.html",
    "revision": "8473d803ff74141cc55569af3110e82b"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "f9ff07bcc9a30f1b5a2ebe543a946419"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "04341fe4e9fe51710386889a48b278d0"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "b71017b81ef23ea463541184e34e5dbd"
  },
  {
    "url": "zh/api/node.html",
    "revision": "4229e00c83f3bc655b1c078f2a28cec4"
  },
  {
    "url": "zh/config/index.html",
    "revision": "83fb37b6e2b551775a6ff42d078381ea"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "6c6a217e7458addc3fc35d1570a21e3f"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "cc1fa42a2083a5c80ae9725fa115db9b"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "b13ca584b292aa7bccaeb48ab661bfb1"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "4df356945704b3ebbd182d03f4bcd2f9"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "df5c4ce2c0dc9e0fd30a9ebd92b70e4e"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "233de4abc1bf531095aa32073b584da1"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "0468abccb40ca558771ce64bb0ec3fc7"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "f1aeeed062984f02a1d84f98e6994c24"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5b5eedeb3037b57c4513a5c3025fdad0"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e13a85004e2dae65a2277955a22987b9"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "14d4c0bb335aa735bb00b7e1e5bc0df4"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "1159e3cdfd7df8f41e3d8f83bf5f47ec"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "1fe185a0e168181abdff2556f9f9d5de"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "9ca049a83267fd227bfdbd8032fd88c9"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "e9b2cb61404819a50eb60ed760a924df"
  },
  {
    "url": "zh/index.html",
    "revision": "94da4aeda372fcf2c3e28ce2122a2955"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "e6091455a1a0582aa0b89d6a35b8c89b"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "3b9de3e9653d1791b8fe8117eaffd9ed"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "701ce56f18b0163d92ca11adbd07bcfc"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "65d8f2bce672dfdd8c2226dff6f87f01"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "a521cb8a244cc228f25ace2ff0ba0298"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "52bf47d1eaf5741c2b5d0c738aa3fcc8"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "968e607963a04b865ab87f5d95beceb6"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "0d7d137ff1085fc9040e8f07351d9472"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "ee229f6474e531d48c0980cd8dc7500d"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "93bf849e1a666dff1681b2886a3bf998"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "4e8c0fa4027403f5327d8af8c1a1804b"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "4be64ee9f39861f6cef9345397b08be6"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "0ab4ffbaea15fd937552d7624f0effd4"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "a66b14b28226c5099e48f4952ac508ac"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "348ff8f2b8c9b267001a173c8fb9fa35"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "1ad70d099dae66376f3ad972f09ea545"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "cdc4a76528b428f85e6c5445c67cf3c4"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "38f77266cb5927452cde606f7b02880c"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "b2f9ff8f6363b8d90ec32b38312813e1"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "b1ae48dc13ca8f692a8cc38a13107f1c"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "459059c7118f71560036dd4ad83186eb"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "4be42e232313502252fbf6cd275285e6"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "2de992eda56ba384910ff9473ade49be"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "44468cb2c64d55f6d70ca9de3d0710bf"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "0636a221516dacfada1e0f1c92b7b7ee"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "d4406622ec31af790689ec228d540e7b"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "8a3c66d2c5f35919f57da9a65da47d7e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
