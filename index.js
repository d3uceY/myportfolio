// typing effect

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["A Frontend Developer", "A Freelancer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// typing effect


//easter egg
const secretCode = 'dEuc3';
const secretCodeInput = document.querySelector('#secret-code-input');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  if (secretCodeInput.value === secretCode) {
    alert('Wow, congratulatons. You have Redeemed your reward. Send Proof to Deuce');
  }
  else if (secretCodeInput.value === ''){
    alert('type something inside, abeg')
  }

  else
  alert('You got it wrong. Try Again')

});
//easter egg

//pre-loader
// var loader = document.getElementById('preloader');

//  window.addEventListener('load', function(){
//    loader.style.display = 'none';
//  })
 //pre-loader

//  GSAP animation
gsap.from('#project-container-1', {
  opacity:0.01,
  duration: .6,
  x: '20%',
  scrollTrigger: '#project-container-1'
})

gsap.from('#project-container-2', {
  opacity:0.01,
  duration: .6,
  x: '-20%',
  scrollTrigger: '#project-container-2'
})

gsap.from('#project-container-3', {
  opacity:0.01,
  duration: .6,
  x: '20%',
  scrollTrigger: '#project-container-3'
})
gsap.from('.nav-link', {
  opacity:0.01,
  duration: .6,
  stagger: .2,
  y:'-80%',
  scrollTrigger: '.nav-link'
})


gsap.from('.hero-animate', {
  opacity: 0,
  duration: .5,
  delay: .7,
  stagger: .2,
  y: '20%',
  ease: "power2.out"
})

gsap.from('.lottie-hero-svg', {
  opacity: 0.01,
  duration: .5,
  delay: 1.6,
  x: '20%',
  ease: "power2.out"
})

gsap.from('.image-container', {
  delay: 0.2,
  opacity: 0.01,
  duration: .6,
  x: '-20%',
  scrollTrigger: '.image-container',
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

gsap.from('.footer-list', {
  duration: .6,
  opacity: 0.01,
  stagger: .5,
  y: 20,
  scrollTrigger: '.footer-list'
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


