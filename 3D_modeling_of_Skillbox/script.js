document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})
