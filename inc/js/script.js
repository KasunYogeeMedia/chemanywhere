// header banner typewriter effect 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["From Anywhere At any time"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
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

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



// Slide from right
const slideElementsleft = document.querySelectorAll('.right-sec');

function slideLeft() {
    slideElementsleft.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('slide-in');
    } else {
      el.classList.remove('slide-in');
    }
  });
}

slideLeft();

window.addEventListener('scroll', slideLeft);


// Slide from left
const slideElementsright = document.querySelectorAll('.left_sec');

function slideRight() {
    slideElementsright.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('slide-in');
    } else {
      el.classList.remove('slide-in');
    }
  });
}

slideRight();

window.addEventListener('scroll', slideRight);


// Slide from bottom
const slideElementsBottom = document.querySelectorAll('.sec_6 .sec_5-content');

function slideUp() {
  slideElementsBottom.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('slide-in');
    } else {
      el.classList.remove('slide-in');
    }
  });
}

slideUp();

window.addEventListener('scroll', slideUp);