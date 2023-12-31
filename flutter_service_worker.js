'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4e69b2869ac022e57005f1a563c5cc63",
"assets/AssetManifest.json": "5b4eb0783b8178225cb54a3ccd0787a5",
"assets/assets/images/abstract.png": "baa32632d651be655687158835d20acd",
"assets/assets/images/cert/adv_flutter.jpg": "1cd1cd46044bcf8dfd9e3cc63cb2fa81",
"assets/assets/images/cert/IMG_0002.jpg": "1b02a2553983426e7a51954fe254be40",
"assets/assets/images/cert/IMG_0005.jpg": "3faf24c43c96a54a2ab4a2b19469842e",
"assets/assets/images/cert/vue_cert.jpg": "90540fb47a66fca7a85d8e76386f49af",
"assets/assets/images/icons/briefcase-outline.svg": "e6bec1e5451528361457b50932c52ed4",
"assets/assets/images/icons/business-outline.svg": "ad7fee6523044f5a28adb287af49595f",
"assets/assets/images/icons/certificate.png": "0409d9686068c169789acec4f26051c1",
"assets/assets/images/icons/clock.png": "a695f60c3e5b94e69812372580edeabc",
"assets/assets/images/icons/code-slash-outline.svg": "657d7cbfdadce995910944c1dca8ef3c",
"assets/assets/images/icons/graduation-hat.png": "a2907af4c0ebbef837ec40ed161e7936",
"assets/assets/images/icons/information-circle-outline.svg": "f415f774a1bc8b3bb7e214735bba2fdc",
"assets/assets/images/icons/logo-discord.svg": "184dc46d568501c2bea4f47ea51f9f3d",
"assets/assets/images/icons/logo-github.svg": "5eca19e8c927cb5cae4e9a9d0611c09a",
"assets/assets/images/icons/logo-instagram.svg": "b51977d0533241bff8d34a73dcad9a1c",
"assets/assets/images/icons/logo-linkedin.svg": "9e40031f9d4b81e16c9bb9b49c56cff4",
"assets/assets/images/icons/logo-medium.svg": "b91e4f2e27b3f201215a4e81c63b2c93",
"assets/assets/images/icons/mail-open-outline.svg": "5e32ffa5072e7d2f8d4810036196d9bb",
"assets/assets/images/icons/navigate-outline.svg": "83c3bd9a89b4e7632debef226e69d341",
"assets/assets/images/icons/newspaper-outline.svg": "06e27e085e2aba012e76dc7a7eabd3de",
"assets/assets/images/icons/person-outline.svg": "1a17e2a0c69233645236d2d6a633aeb7",
"assets/assets/images/icons/school.png": "36d47a8940848ad2077256b3e7a62ad5",
"assets/assets/images/icons/skills/antd.svg": "33c9478394215e35842f0b165baaf0f0",
"assets/assets/images/icons/skills/dart.png": "21b8043f537f0f099ef4687377bfa27d",
"assets/assets/images/icons/skills/firebase.png": "0799cbc7f2c79012629a85e8060526c4",
"assets/assets/images/icons/skills/flutter.png": "6ba940675e2cd74bde86ba0bd4201309",
"assets/assets/images/icons/skills/go.svg": "f680f6b7b224d1c5bf40018b96c180bb",
"assets/assets/images/icons/skills/java.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"assets/assets/images/icons/skills/mongodb.png": "46e29bfbc7bbe282ad5f45c705eb7441",
"assets/assets/images/icons/skills/mongodb.svg": "0640796573b1d9edea3bdf12c8b378a5",
"assets/assets/images/icons/skills/next.png": "0764aad1217dafb6a89ce8f608aa12d9",
"assets/assets/images/icons/skills/nuxt.png": "155cc655fc85caece9f20c33af157c67",
"assets/assets/images/icons/skills/supabase.png": "31897aca639035129bcaa32db7d0edb4",
"assets/assets/images/icons/skills/swift.svg": "93325a9d25433c94e08efae1839811dd",
"assets/assets/images/icons/skills/tailwind.svg": "543e948214391cf8dbc3613c7e7cbb92",
"assets/assets/images/icons/skills/typescript.png": "bff6b2788849ed735b91799212e1d4c4",
"assets/assets/images/icons/skills/vuetify.svg": "fa6678fba0bed9df804d785863723299",
"assets/assets/images/icons/trophy-outline.svg": "89b6cf85bf618e568263d001c30b11f5",
"assets/assets/images/icons/works/alicorn.png": "1f44ccfdbfee36f6e1f5ba89dd8086e7",
"assets/assets/images/icons/works/exvention.png": "987b8a902efd25ec591573452a264061",
"assets/assets/images/icons/works/weserve.png": "b45ede1ac7f69ab7df68540484f56bfb",
"assets/assets/images/layered-waves-haikei.png": "32f6468a4b1670da745ec58dd5887801",
"assets/assets/images/layered-waves-haikei.svg": "68aa809f132b864fba47330faa84f83b",
"assets/assets/images/phone-call.png": "f03396a53f7b645d7e2b493b81b36c2d",
"assets/assets/images/plum-plate.png": "4a21bc16af53326fbe691cfe8967c585",
"assets/assets/json/profile.json": "992c83fe8c4b7c65e50f29232621801b",
"assets/assets/json/skills.json": "a700d68951795ff3682fa24b7386a9eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "76ef5f7d34fd56685dab1e1643e73f88",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2344c4bb73d2b695de37cb7409aa1631",
"/": "30a4ee487a13951ff0f115332c4d8409",
"ios/Pods.build/Release-iphonesimulator/Flutter.build/dgph": "d51a874fb4c1de788a046d48ed35fb3f",
"ios/Pods.build/Release-iphonesimulator/path_provider_ios.build/dgph": "d51a874fb4c1de788a046d48ed35fb3f",
"ios/Pods.build/Release-iphonesimulator/Pods-Runner.build/dgph": "d51a874fb4c1de788a046d48ed35fb3f",
"ios/Pods.build/Release-iphonesimulator/shared_preferences_ios.build/dgph": "d51a874fb4c1de788a046d48ed35fb3f",
"ios/Pods.build/Release-iphonesimulator/url_launcher_ios.build/dgph": "d51a874fb4c1de788a046d48ed35fb3f",
"main.dart.js": "6bde1fa3936d539b49d7faecefb5ec34",
"manifest.json": "1debeb9ae6db7912d6e95d7cfd994602",
"version.json": "cc112e8febde71efa43d0d6ca6de0bcf",
"web/assets/AssetManifest.json": "5b4eb0783b8178225cb54a3ccd0787a5",
"web/assets/assets/images/abstract.png": "baa32632d651be655687158835d20acd",
"web/assets/assets/images/cert/adv_flutter.jpg": "1cd1cd46044bcf8dfd9e3cc63cb2fa81",
"web/assets/assets/images/cert/IMG_0002.jpg": "1b02a2553983426e7a51954fe254be40",
"web/assets/assets/images/cert/IMG_0005.jpg": "3faf24c43c96a54a2ab4a2b19469842e",
"web/assets/assets/images/cert/vue_cert.jpg": "90540fb47a66fca7a85d8e76386f49af",
"web/assets/assets/images/icons/briefcase-outline.svg": "e6bec1e5451528361457b50932c52ed4",
"web/assets/assets/images/icons/business-outline.svg": "ad7fee6523044f5a28adb287af49595f",
"web/assets/assets/images/icons/certificate.png": "0409d9686068c169789acec4f26051c1",
"web/assets/assets/images/icons/clock.png": "a695f60c3e5b94e69812372580edeabc",
"web/assets/assets/images/icons/code-slash-outline.svg": "657d7cbfdadce995910944c1dca8ef3c",
"web/assets/assets/images/icons/graduation-hat.png": "a2907af4c0ebbef837ec40ed161e7936",
"web/assets/assets/images/icons/information-circle-outline.svg": "f415f774a1bc8b3bb7e214735bba2fdc",
"web/assets/assets/images/icons/logo-discord.svg": "184dc46d568501c2bea4f47ea51f9f3d",
"web/assets/assets/images/icons/logo-github.svg": "5eca19e8c927cb5cae4e9a9d0611c09a",
"web/assets/assets/images/icons/logo-instagram.svg": "b51977d0533241bff8d34a73dcad9a1c",
"web/assets/assets/images/icons/logo-linkedin.svg": "9e40031f9d4b81e16c9bb9b49c56cff4",
"web/assets/assets/images/icons/logo-medium.svg": "b91e4f2e27b3f201215a4e81c63b2c93",
"web/assets/assets/images/icons/mail-open-outline.svg": "5e32ffa5072e7d2f8d4810036196d9bb",
"web/assets/assets/images/icons/navigate-outline.svg": "83c3bd9a89b4e7632debef226e69d341",
"web/assets/assets/images/icons/newspaper-outline.svg": "06e27e085e2aba012e76dc7a7eabd3de",
"web/assets/assets/images/icons/person-outline.svg": "1a17e2a0c69233645236d2d6a633aeb7",
"web/assets/assets/images/icons/school.png": "36d47a8940848ad2077256b3e7a62ad5",
"web/assets/assets/images/icons/skills/antd.svg": "33c9478394215e35842f0b165baaf0f0",
"web/assets/assets/images/icons/skills/dart.png": "21b8043f537f0f099ef4687377bfa27d",
"web/assets/assets/images/icons/skills/firebase.png": "0799cbc7f2c79012629a85e8060526c4",
"web/assets/assets/images/icons/skills/flutter.png": "6ba940675e2cd74bde86ba0bd4201309",
"web/assets/assets/images/icons/skills/java.png": "1e1ba20cfa4a4c86d66437632e35df2f",
"web/assets/assets/images/icons/skills/mongodb.png": "46e29bfbc7bbe282ad5f45c705eb7441",
"web/assets/assets/images/icons/skills/mongodb.svg": "0640796573b1d9edea3bdf12c8b378a5",
"web/assets/assets/images/icons/skills/next.png": "0764aad1217dafb6a89ce8f608aa12d9",
"web/assets/assets/images/icons/skills/nuxt.png": "155cc655fc85caece9f20c33af157c67",
"web/assets/assets/images/icons/skills/supabase.png": "31897aca639035129bcaa32db7d0edb4",
"web/assets/assets/images/icons/skills/tailwind.svg": "543e948214391cf8dbc3613c7e7cbb92",
"web/assets/assets/images/icons/skills/typescript.png": "bff6b2788849ed735b91799212e1d4c4",
"web/assets/assets/images/icons/skills/vuetify.svg": "fa6678fba0bed9df804d785863723299",
"web/assets/assets/images/icons/trophy-outline.svg": "89b6cf85bf618e568263d001c30b11f5",
"web/assets/assets/images/icons/works/alicorn.png": "1f44ccfdbfee36f6e1f5ba89dd8086e7",
"web/assets/assets/images/icons/works/exvention.png": "987b8a902efd25ec591573452a264061",
"web/assets/assets/images/icons/works/weserve.png": "b45ede1ac7f69ab7df68540484f56bfb",
"web/assets/assets/images/layered-waves-haikei.png": "32f6468a4b1670da745ec58dd5887801",
"web/assets/assets/images/layered-waves-haikei.svg": "68aa809f132b864fba47330faa84f83b",
"web/assets/assets/images/phone-call.png": "f03396a53f7b645d7e2b493b81b36c2d",
"web/assets/assets/images/plum-plate.png": "4a21bc16af53326fbe691cfe8967c585",
"web/assets/assets/json/profile.json": "992c83fe8c4b7c65e50f29232621801b",
"web/assets/assets/json/skills.json": "a700d68951795ff3682fa24b7386a9eb",
"web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"web/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"web/assets/NOTICES": "76ef5f7d34fd56685dab1e1643e73f88",
"web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"web/canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"web/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"web/canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"web/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "30a4ee487a13951ff0f115332c4d8409",
"web/main.dart.js": "900d58782e8b7517e04cd449e7667c50",
"web/manifest.json": "1debeb9ae6db7912d6e95d7cfd994602",
"web/version.json": "cc112e8febde71efa43d0d6ca6de0bcf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
