
//document.addEventListener('DOMContentLoaded', function () {


console.log("JS work!")

// Check that service workers are supported
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('js/service-worker.js')
//       .then(reg => console.log('service worker registered'))
//       .catch(err => console.log('service worker not registered', err))
//   });
// }


// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err))
}

//}, false);