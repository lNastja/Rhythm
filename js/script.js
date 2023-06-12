"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {

	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
	 
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true
		},
	 
	 });
}

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuIcon) {
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}
