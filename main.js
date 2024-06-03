import './style.css';
import './public/fonts/FontAwesome/css/all.css';
import './public/css/iransans.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

var postToShow = 0;
console.log(window.innerWidth)
function displaySize(){
  if (window.innerWidth >= 0){
    postToShow = 1
  }
  if(window.innerWidth > 768){
    postToShow = 2
  }
  if(window.innerWidth > 1080){
    postToShow = 3
  }
  if(window.innerWidth > 1400){
    postToShow = 4
  }
}

var swiper = new Swiper(".mySwiper", {
    effect: 'cards',
    grabCursor: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
});
displaySize()
console.log(postToShow)
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: postToShow,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})