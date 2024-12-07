'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cfbb779312a32b1eb7635cd7c936e2cf",
".git/config": "6f19bcf75ecc6d083805d5441a86b5ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66b69872292c5b05f9e97c3eeeeed609",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "252f7fcf4365fa9671ae1a2751f84d0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aaafd2084b767c7e4b3857cb9c6bb6e8",
".git/logs/refs/heads/main": "f4990d662e2ac376bfd9e63706849a94",
".git/logs/refs/remotes/origin/main": "980b295c5f3dddea7a81353a874ce0f2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/a9a0244713c334709b600457cfe4d229a59f14": "5ae9c8bb66ee596c89d065088d9385e9",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/edb0e7dba06e19c05b6d4154947521ba19b19f": "0bcbcb030319bda995ce04a27b242378",
".git/objects/22/07aab5ef152883ff8136dbb42eee836d3f628f": "dc0466880b301a8aef995cd05a1fd995",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/e7636e5372a3b9bb0d6ac628fc8aa70d0e6491": "3c915b4695e9d08fd4381e5ec4244856",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/bb58d0358f571b343bd324a77b51904d124c7c": "edb9cbde13c325fcb138563468569bd0",
".git/objects/5f/4180e0e492457dc54243a526abbbbc3bd47123": "a0844a6fbe0b95a1af1961eae2f68b53",
".git/objects/60/6764e2725b5c1a9fab62b157fac36d313a72db": "7a5e7d1677f9c28b28e02852bdee201a",
".git/objects/60/86802dce2b87d063e6e72368ac48ef375a553f": "666d116939dbe7ed8ece332f6949608b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/c7c3e181f05c1c256472a817f4ce6049095f22": "0739cd7d8f1f8b2656bf003413c4bc06",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/d23f490f01da55a94d7bc35c96c0e6b2bf2e64": "0dd31843508c3e3690e3b5c28d93e22e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/2c95500bd50850e50745c4e02bc4b1eeb33b9b": "7efbe6fdf205d53cb44c70729e456301",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/45c44594223daeb3acda605f4fbe3a87d5df8b": "51728cba161a0788d99a4ca917308469",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/97/bed8faedcce63bf811f1ca349088087afb2b5d": "feee4b0752c152bedbba391ab254db9d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/99a561a7520e160d362858e4ab3b149d087b07": "a714dd6121f2b76d37e43698bb92e8f2",
".git/objects/9e/b515bbe17c00c4dd58de4ad7cdf915c976293a": "1438c66eed38ec238b30b9a5a63bfd2f",
".git/objects/9f/f10fb5a5afb0fd363eb61ddda6f7259699b07b": "c5ed20e882c7037d505aa4dc2188b499",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/ac/0aebbfc41e2fea9c7f3f0abf7d44fbcfd2bd24": "6aa7732cc3dd1c6210b0717ce7107a43",
".git/objects/b0/8c15fee4b0479fb4b72f1dfb0946183bc5f9dc": "2cc5b2501105fbe61d19e50d6f7fe622",
".git/objects/b2/4f2cad9f597d64771831fd027104a956a68cd4": "8d1d955fe339be6ded87d89d43a2bc0c",
".git/objects/b2/7960ee63fc178d8c53009656dcc82ea6914fdc": "0c118543c5859ef578a3b9fc8578cdf2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/41bd17a09b15e9e07f5589d9b176d1a204e12d": "fce87a60f5eb4c839ca155dab44fded0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/827274373bba476b7c3d7998003a6d6c2ea1a3": "168a130b49a72562ec221eb2a65b256e",
".git/objects/ca/13afb6743d4b8b741070cb2da9c23dda75ea47": "3b8b07e9b28fcbd4d933d427326d106c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/56a99aa3784bce056a2b8f9237cc78d75ffd91": "0a7bf0da4ac54814da917804ffa66e77",
".git/objects/cf/4e27c2503dbd24fbf1b7dec31748421eebbd19": "2ecfe20cd645e4854e577a5620fd7f0f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a9f0384e522d55a905ff5e5e5f7d1f6642d0ab": "d5055d45bb71bd67d819f23c1c551567",
".git/objects/de/62a6876270a250c45dc8395318f4614a99fc02": "0627e56500d8464e1b61390b315dda6a",
".git/objects/e3/3b1b8aa1f433faf161aaaff8611629c4a06f57": "88249e364986b542521ab69a3d6ed98c",
".git/objects/e5/fb1a4a000281c46400a2f2f2493805afbba1d0": "33e703db541d73ac6458f93802685d32",
".git/objects/e6/6f8ba1f3452c1807dc098fd280eb98b1984f3f": "bbc04b31299c9259f16ee98d28e4589a",
".git/objects/e8/0b619ade049368ac540032094f09c6c623e01a": "3698c26c10c69608db98e1dab6c24780",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5e9892a673537c7ca64942729d1cbfef467d11": "45f79fe6e25bed782a13fa1b2d14d65d",
".git/objects/f0/16bc1320c56639dbf4151fca93fff2e4cf2632": "962b273be934b1e3576b0f1036d2d595",
".git/objects/f1/502048e6c3bcf52c4c1a88d5109182d5d4de59": "3562b1619c196d460518a8e91f69202e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/671f5a98e9da895cff0c597df9b4b0539468ed": "448432cb1bc69033e7860e860e998e3d",
".git/refs/heads/main": "d119db447d1e3c4ce22f4507685a650e",
".git/refs/remotes/origin/main": "b1ff9fb40f89eda5c39d483d0e11b888",
"assets/AssetManifest.bin": "fdb5d72ac90f3ceab0b106992556761d",
"assets/AssetManifest.bin.json": "9dda8c9f81df1a840e14dcc0ac18e8c1",
"assets/AssetManifest.json": "06fa28fed0f731501d3f8b338d1b159d",
"assets/assets/1.png": "ef0bd74172c6bfdfc8dc570edd9704cf",
"assets/assets/2.png": "42f0fd5b64b66b62e15d11d9aa540ea9",
"assets/assets/3.png": "c83429b178484f12c4893904b12cabb3",
"assets/assets/4.png": "66a7afafe59d0b2481108d897265f66a",
"assets/assets/5.png": "00d4ea5cf213748d939787b18fb6760e",
"assets/assets/bg.jpg": "ec76245307741ee4488ceb5788eda741",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "40a8a5297c3255a1cdea2f2bcf040075",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10c671428dfd65ad1fba96f3dab04c50",
"/": "10c671428dfd65ad1fba96f3dab04c50",
"main.dart.js": "4e50e514d73ac76774c7c2fc4e1c3015",
"manifest.json": "207bfe52da73245996b372f7665219aa",
"version.json": "bcae0b96bc893e1439dfce0a0242d232"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
