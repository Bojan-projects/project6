document.querySelector('.bx-menu').addEventListener('click', ()=>{
 document.querySelector('.navbar').classList.toggle('active');
 document.querySelector('.bx-menu').classList.toggle('bx-x');
 document.querySelector('header').classList.toggle('active');
});

var swiper = new Swiper(".home", {
 spaceBetween: 30,
 centeredSlides: true,
 autoplay: {
   delay: 2500,
   disableOnInteraction: false,
 },
 pagination: {
   el: ".swiper-pagination",
   clickable: true,
 },

});

var swiper = new Swiper(".soonSlider", {
 loop: true,
 spaceBetween: 30,
 centeredSlides: true,
 autoplay: {
   delay: 4000,
   disableOnInteraction: false,
 },
 breakpoints: {
  0:{
   slidesPerView: 2,
  },
  568:{
   slidesPerView: 3,
  },
  768:{
   slidesPerView: 4,
  },
  968:{
   slidesPerView: 4,
  },
 
 }
});

