const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  './',
  './manifest.json',
  './index.html',
  './cursos.html',
  './quiz.html',
  './style.css',
  './qr-eq.png',
  './qr-poli.png',
  './qr-pr1.png',
  './qr-quiz.png',
  './qr-ima.png',
  './imagens/Ambiental.jpg',
  './imagens/Civil.jpg',
  './imagens/de Alimentos.jpg',
  './imagens/de Bioprocessos.jpg',
  './imagens/de Computação e Informação.jpg',
  './imagens/de Controle e Automação.jpg',
  './imagens/de Materiais.jpg',
  './imagens/de Petróleo.jpg',
  './imagens/de Produção.jpg',
  './imagens/Elétrica.jpg',
  './imagens/Eletrônica e de Computação.jpg',
  './imagens/Industrial.jpg',
  './imagens/Mecânica.jpg',
  './imagens/Metalúrgica.jpg',
  './imagens/Nanotecnologia.jpg',
  './imagens/Naval e Oceânica.jpg',
  './imagens/Nuclear.jpg',
  './imagens/Química.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});