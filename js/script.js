'use strict';
//Header
let header_search = document.querySelector('.header__search');
let header_form = document.querySelector('.header__form');
let header_close = document.querySelector('.header__close');

header_search.addEventListener('click',function(){
	header_form.classList.add('active_form');
});
header_close.addEventListener('click',function(){
	header_form.classList.remove('active_form');
});

//Header menu
let menu_btn = document.querySelector('.menu-header__icon');
let header_menu = document.querySelector('.menu-header__menu');
let links = document.querySelectorAll('.menu-header__link');
 menu_btn.addEventListener('click', function(){
 	menu_btn.classList.toggle('active');
 	header_menu.classList.toggle('active_menu');
 	document.body.classList.toggle('overflow');
 });
for(let link of links){
	link.addEventListener('click', function(){
		menu_btn.classList.remove('active');
		header_menu.classList.remove('active_menu');
		document.body.classList.remove('overflow');
	});
}

 //Patners slider
let partners = document.querySelector('.partners__wrapper');
let partners_items = document.querySelectorAll('.partners__item');
const slider = new Swiper('.partners__body',{
	init: true,
	slidesPerView: 1.5,
	spaceBetween: 30,
});
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 520.98){
  	slider.enable();
  }else {
  	slider.disable();
  	for(let item of partners_items){
		item.style = '';
	}
  }
});
window.addEventListener("resize", function() {
    if (window.innerWidth < 520.98){
		slider.enable();
		for(let item of partners_items){
			item.classList.add('swiper-slide');
		}
	} else {
		slider.disable();
		partners.style = "transform: translate3d(0px,0px,0px)";
		for(let item of partners_items){
			item.classList.remove('swiper-slide');
			item.style = "";
		}
	}
}, false);
