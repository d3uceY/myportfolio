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




//entrance animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting){
          entry.target.classList.add('show')
      } 
      // else 
//       // entry.target.classList.remove('show')
  })
})




const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
//entrance animation

//pre-loader
// var loader = document.getElementById('preloader');

//  window.addEventListener('load', function(){
//    loader.style.display = 'none';
//  })
 //pre-loader






//  GSAP animation

gsap.from('.nav-item', {
  opacity: 0.01,
  duration: 1,
  stagger: .5,
  y: '-20%',
})


gsap.from('.hero-animate', {
  opacity: 0.01,
  duration: .8,
  stagger: .2,
  delay: 2.2,
  y: 20,
})


gsap.from('.lottie-hero-svg', {
  delay: 2.2,
  opacity: 0.01,
  duration: .8,
  x: '-20%'
})

gsap.from('.image-container', {
  delay: 0.2,
  opacity: 0.01,
  duration: .6,
  x: '-20%',
  scrollTrigger: '.image-container',
})

gsap.from('.write-ups', {
  delay: 0.2,
  opacity: .01,
  duration: .6,
  y: '20%',
  scrollTrigger: '.write-ups',

})

gsap.from('.form-container', {
  opacity: 0.01,
  duration: 1,
  y: '20%',
  scrollTrigger: '.form-container',
})

gsap.from('.contact-icon', {
  duration: .5,
  opacity: .01,
  scrollTrigger: '.contact-icon'
})

gsap.from('.footer-list', {
  duration: 1,
  opacity: 0.01,
  y: 20,
  stagger: .5,
  scrollTrigger: '.footer-list'
})


gsap.to('#preloader', {
  display: 'none',
  duration: 2
})

//  GSAP animation


