// Slider   ---------------------

const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

});


// Search   ---------------------

document.querySelector(".search-btn__open").addEventListener("click", function() {
  document.querySelector(".search__line").classList.add("search__active");
  this.classList.add("active");
})

document.querySelector(".search-btn__close").addEventListener("click", function(e) {
  e.preventDefault()
  document.querySelector(".search__line").classList.remove("search__active");
  document.querySelector(".search-btn__open").classList.remove("active")
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".search__line");
  if (!target.closest(".search-container")) {
  form.classList.remove("search__active");
    form.querySelector(".search__input").value = "";
    document.querySelector(".search__line").classList.remove("search__active");
    document.querySelector(".search-btn__open").classList.remove("active")
    console.log(document.querySelector(".search-btn__open"))
  }
});

// According   ---------------------

$( function() {
  $( ".questions__list" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });

 } );

//  Tabs

let tabsBtn = document.querySelectorAll('.step__item__link');
let tabsItem = document.querySelectorAll('.tabs__element');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = element;
    const tabId = path.getAttribute("data-path");
    const currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(element){
      element.classList.remove("tabs__element--active");
    });

    tabsItem.forEach(function(element){
      element.classList.remove("tabs__element--active");
    });

    path.classList.add("tabs__element--active");
    currentTab.classList.add("tabs__element--active");
  });
});

 // Burger   ---------------------

 document.querySelector(".header__burger-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("header__nav--active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("header__nav--active");
})

