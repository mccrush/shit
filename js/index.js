
document.addEventListener('DOMContentLoaded', function () {

  console.log("All work!")

  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('js/service-worker.js');
    });
  }

  showItem()


  function showItem() {
    let itemHead = document.querySelectorAll('.item-head')

    for (let item of itemHead) {
      item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle("show-item")
        if (item.nextElementSibling.classList.contains("show-item")) {
          item.nextElementSibling.classList.add('height-auto')
          item.children[1].classList.add('item-head-rotate')
        } else {
          item.nextElementSibling.classList.remove('height-auto')
          item.children[1].classList.remove('item-head-rotate')
        }

      })
    }
  }



}, false);
