const menuToggle = document.querySelector(".menu-toggle");
const menuSection = document.querySelector(".menu-section");

//Using the "toggle" method to add / remove the "on" from the class list
menuToggle.addEventListener("click", () => {
  menuSection.classList.toggle("on");
});

const comprar = document.querySelector('button')
comprar.addEventListener('click' , () => {
  window.location.assign("./pages/info.html")
})