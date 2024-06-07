import './style.css';
import './public/fonts/FontAwesome/css/all.css';
import './public/css/iransans.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './public/js/voiceflow'
gsap.registerPlugin(ScrollTrigger)

var postToShow = 0;
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


const profile_panel = document.querySelector('.profile-panel')
const journal_panel = document.querySelector('.journal-panel')
document.querySelector('.profile').addEventListener('click', (e) => {
  gsap.to('.profile-panel', { left: "10%", duration:0.2, direction:"rtl"})
  profile_panel.classList.add('side-panel-shadow')
})

document.querySelector('.close-profile').addEventListener('click', (e) => {
  gsap.to('.profile-panel', { left: "100%", duration:0.2, direction:"rtl"})
  profile_panel.classList.remove('side-panel-shadow')

})

document.querySelector('.journal').addEventListener('click', (e) => {
  gsap.to('.journal-panel', { left: "10%", duration:0.2, direction:"rtl"})
  profile_panel.classList.add('side-panel-shadow')

})

document.querySelector('.close-journal').addEventListener('click', (e) => {
  gsap.to('.journal-panel', { left: "100%", duration:0.2, direction:"rtl"})
  profile_panel.classList.remove('side-panel-shadow')

})