import './style.css';
import './public/fonts/FontAwesome/css/all.css';
import './public/css/iransans.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

import './public/js/voiceflow'

gsap.registerPlugin(ScrollTrigger, TextPlugin, RoughEase)



var postToShow = 0;

const sentences = ["بک‌تست در تایم فریم‌های متفاوت", "گزارش اتوماتیک از معامله شما", "قابل استفاده در دستگاه‌های مختلف", "پشتیبانی قدرتمند"]

var blink = gsap.to('.blink', {opacity: 0, ease: 'power2.inOut', repeat: -1})

var mastertl = gsap.timeline({repeat: -1})

sentences.forEach((sentence) => {
  var tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
  tl.to('.changable', {duration:2, text: sentence})
  mastertl.add(tl)
})

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

const button = document.querySelectorAll('.collapse-btn')
button.forEach(element => {
  element.addEventListener('click', (e) => {
    if (element.nextElementSibling.classList.contains(['max-h-[0]'])){
      element.lastElementChild.innerHTML = `<i class="fa-light fa-minus"></i>`
    }else{
      element.lastElementChild.innerHTML = `<i class="fa-light fa-angle-down text-[1.2rem]"></i>`
    }
    element.nextElementSibling.classList.toggle('max-h-[0]')
    element.nextElementSibling.classList.toggle('mt-4')
    
  })
});


