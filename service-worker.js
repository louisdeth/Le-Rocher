// Simple service worker to enable PWA installation
self.addEventListener("install", event => {
  console.log("Service worker installé.");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service worker activé.");
});

// Permet à l'application de fonctionner sans mise en cache avancée
self.addEventListener("fetch", event => {
  // Ne fait rien ici : on laisse le navigateur gérer normalement
});
