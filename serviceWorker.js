const staticWAThem = "wathem-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/nav-logo.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticWAThem).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    fetch(fetchEvent.request).catch(res =>{
      return caches.match(fetchEvent.request)
    })
  )
})