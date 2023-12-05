// navigationbar
navLinks = document.querySelector('.navigation-content');
menuToggler = document.querySelector('.toggle');
menuTogglerParent = document.querySelector('#menubtn')

menuToggler.addEventListener('click', () => {
  if (navLinks.classList.contains('clicked')) {
    navLinks.classList.remove('clicked')
  } else {
    navLinks.classList.add('clicked')
  }
})

menuTogglerParent.addEventListener('click', () => {
  menuTogglerParent.classList.add('active');
  if (!navLinks.classList.contains('clicked')) {
    menuToggler.classList.remove('active')
  }
})

window.addEventListener('scroll', () => {
  navLinks.classList.remove('clicked');
  menuTogglerParent.classList.remove('active')
})
// navigationbar


//easter egg
const easyAnswers = ['deuce', 'jesse', '</d>']
const secretCode = ['rick roll', 'rickroll'];
const secretCodeInput = document.querySelector('#secret-code-input');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {

  let easyAnswerMatch = false;
  let secretCodeMatched = false;
  let secretCodeValue = secretCodeInput.value.trim().toLowerCase();

  if (secretCodeValue === '') {
    alert('type something inside, abeg')
    return;
  }

  for (const easyCode of easyAnswers) {
    if (easyCode === secretCodeValue) {
      easyAnswerMatch = true
      break;
    }
  }

  for (const code of secretCode) {
    if (code === secretCodeValue) {
      secretCodeMatched = true;
      break;
    }
  }

  
  if (easyAnswerMatch) {
    alert('you thought it was gon be that easy?😭')
    return
  }

  if (secretCodeMatched) {
    alert('Wow, congratulatons. You have Redeemed your reward. Send Proof to Deuce');
    return
  }

  alert('You got it wrong. Try Again')

});
//easter egg


//  GSAP animation
gsap.registerPlugin(ScrollTrigger)

gsap.from('#project-container-5', {
  opacity: 0.01,
  duration: .6,
  x: '20%',
  scrollTrigger: '#project-container-5'
})


gsap.from('#project-container-4', {
  opacity: 0.01,
  duration: .6,
  x: '-20%',
  scrollTrigger: '#project-container-4'
})

gsap.from('#project-container-1', {
  opacity: 0.01,
  duration: .6,
  x: '20%',
  scrollTrigger: '#project-container-1'
})

gsap.from('#project-container-2', {
  opacity: 0.01,
  duration: .6,
  x: '-20%',
  scrollTrigger: '#project-container-2'
})

gsap.from('#project-container-3', {
  opacity: 0.01,
  duration: .6,
  x: '20%',
  scrollTrigger: '#project-container-3'
})


gsap.from('.navigation-link', {
  opacity: 0,
  duration: .6,
  stagger: .2,
  y: '-20px',
})

gsap.to('#logo-overlay', {
  width: 0,
  duration: .3,
  delay: 2.5,
  ease: "expo.out"
})

gsap.from('.hero-animate', {
  opacity: 0,
  duration: .5,
  delay: .7,
  stagger: .2,
  y: '20%',
  ease: "power2.out"
})

gsap.from('.hero-svg', {
  opacity: 0,
  duration: .5,
  delay: 1.6,
  x: '20%',
  ease: "power2.out"
})


gsap.from('.about-me-writeup', {
  delay: 0.2,
  opacity: .01,
  duration: .6,
  y: '10%',
  stagger: .25,
  scrollTrigger: '.about-me-writeup',

})

gsap.from('.form-container', {
  opacity: 0.01,
  duration: .6,
  y: '30%',
  scrollTrigger: '.form-container',
})

gsap.from('.contact-icon', {
  duration: .5,
  opacity: .01,
  scrollTrigger: '.contact-icon'
})


gsap.from('.contacts', {
  duration: 2,
  opacity: 0.01,
  scrollTrigger: '.contacts'
})


gsap.from('.side-nav', {
  delay: 1.8,
  x: -20,
  duration: .4,
  opacity: 0.01,
  scrollTrigger: '.side-nav'
})
//  GSAP animation

