'use strict';

const navToggle = document.querySelector(".nav-toggle")

navToggle.addEventListener('click', (e) => {
  e.preventDefault()
  navToggle.classList.toggle('is-active')    
})

$('.nav-button').on('click', function() {
  $('nav').toggleClass('open')  
})

document.addEventListener("touchstart", function(){}, true);
