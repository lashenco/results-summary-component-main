const container = document.querySelector('.container')
const circle = document.querySelector(".circle");

circle.onclick = function () {
  if (container.classList.contains('active')) {
    container.classList.toggle('active')
  }else{
    container.classList.add('active')
  }
}