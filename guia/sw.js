const C='guia-v1';
const A=['./', 'index.html', 'manifest.json', 'img/a_f2_mochila.jpg', 'img/a_f4_tapiri.jpg', 'img/a_f6_pederneira.jpg', 'img/a_filtro_areia.jpg', 'img/capa.jpg', 'img/f3_massagem_adulto.jpg', 'img/fig01.jpg', 'img/fig02.jpg', 'img/fig03.jpg', 'img/fig04.jpg', 'img/fig05.jpg', 'img/fig06.jpg', 'img/fig07.jpg', 'img/icone.png', 'img/previa.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
