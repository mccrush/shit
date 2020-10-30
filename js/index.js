
document.addEventListener('DOMContentLoaded', function () {

  console.log("All work!")
  showItem()


  function showItem() {
    let itemHead = document.querySelectorAll('.item-head')

    for (let item of itemHead) {
      item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle("show-item")
        if (item.nextElementSibling.classList.contains("show-item")) {
          item.nextElementSibling.style.height = '290px'
        } else {
          item.nextElementSibling.style.height = 0
        }

      })
    }
  }



}, false);
