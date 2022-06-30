
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let articlesMore = document.querySelector('.articles-more');
let articles = document.querySelectorAll('articles-item');

articlesMore.addEventListener('click',
function(){

  articles.forEach(function(el){
    el.classList('articles-item--visible')
  });

  articlesMore.closest('.articles-center').classList.add('articles-item--hidden');


})
