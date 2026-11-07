// Adds the cross-origin isolation headers GitHub Pages can't send, so the
// browser allows the model to use several processor cores (SharedArrayBuffer).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.cache === 'only-if-cached' && req.mode !== 'same-origin') return;
  // Audio and video stream in pieces (range requests), which Safari can't play
  // through a service worker. They load with CORS, which isolation accepts.
  if (req.destination === 'audio' || req.destination === 'video') return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.status === 0) return res;
      const headers = new Headers(res.headers);
      headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
      headers.set('Cross-Origin-Opener-Policy', 'same-origin');
      headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
      return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
    })
  );
});
