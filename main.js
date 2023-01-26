// Footer-Copyright 
let year = document.querySelector("#current-year")
year.innerHTML = new Date() .getFullYear();

// Slider-owlCarousel 
$(".slider").owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
     0:{
         items: 1,
         nav: false
     },
     600:{
         items: 2,
         nav: false
     },
     1000:{
         items: 3,
         nav: false
     },
    }
 });

// Slider-owlCarousel 
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
     0:{
         items: 1,
         nav: false
     },
     600:{
         items: 4,
         nav: false
     },
     1000:{
         items: 5,
         nav: false
     },
    }
 });

//  Increment-numbers 
 const counters = document.querySelectorAll('.counter')
 counters.forEach(counter => {
     counter.innerText = '0'
     const updateCounter = () => {
         const target = +counter.getAttribute('data-target')
         const c = +counter.innerText
         const increment = target / 200
         if (c < target) {
             counter.innerText = `${Math.ceil(c + increment)}`
             setTimeout(updateCounter, 20)
         } else {
             counter.innerText = target
         }
     }
     updateCounter()
 });

 let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop >500){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};