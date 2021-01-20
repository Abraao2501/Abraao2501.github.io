const menuToggle = document.querySelector(".menu-toggle");
const menuSection = document.querySelector(".menu-section");
const file = nike


//Using the "toggle" method to add / remove the "on" from the class list
menuToggle.addEventListener("click", () => {
  menuSection.classList.toggle("on");
});

const comprar = document.querySelector('button')
comprar.addEventListener('click' , () => {
  window.location.assign("./pages/info.html")
})

var image = document.querySelector('#shoe')
image.src = '/imgs/arrow blue.png'