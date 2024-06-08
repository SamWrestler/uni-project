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