
document.addEventListener('DOMContentLoaded', function () {

  console.log("All work!")
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
