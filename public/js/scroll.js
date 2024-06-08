import Lenis from 'lenis'

const lenis = new Lenis({
    duration: 0.6, // Adjust the duration for smooth scrolling
    easing: (t) => t, // Use a linear easing function for uniform speed
  })

// lenis.on('scroll', (e) => {
//     lenis.scrollTo('.section4')
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
