"use strict";
//MENU
let menuButton = document.querySelector(".btn-menu");
menuButton.addEventListener("click", toggleNavigation);

function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");
    }else{
        document.body.setAttribute("data-menu", true);
    }
}


function randomTween(element){
    TweenMax.to(element, {
        x: Math.random() * 1500,
        y: Math.random() * 2000,
        duration: 3,
        ease: Linear.easeNone,
        onComplete:randomTween,
        onCompleteParams: [element]
    })
  }
  
randomTween(document.querySelector(".circle-1"));
randomTween(document.querySelector(".circle-2"));
randomTween(document.querySelector(".circle-3"));
randomTween(document.querySelector(".circle-4"));
randomTween(document.querySelector(".circle-5"));
randomTween(document.querySelector(".circle-6"));
randomTween(document.querySelector(".circle-7"));
randomTween(document.querySelector(".circle-8"));

//Swipper JS
function updateTextInput(val) {
    document.getElementById('textInput').innerHTML=val; 
  }

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//Bêta Vertigo
  function changeText() {
    var x = document.getElementById("myText").value;
    let listElements = document.querySelectorAll(".vertigo");

    for(let listElement of listElements){
        listElement.innerHTML = x;
    }
  }
  function changeColor(newColor) { // definition of function
    let textColor = document.querySelector(".text-color");
    let listElements = document.querySelectorAll(".vertigo");

    for(let listElement of listElements){
        listElement.style.color = newColor;
    }
    textColor.innerHTML = newColor;
}   
function changeBackground(newBackground) { // definition of function
    let bgChange = document.querySelector(".bg-change");
    bgChange.style.backgroundColor = newBackground;
}   
  //Page transition
// const wipe = document.querySelector('.page-transition');
// const TLAnim = gsap.timeline();

// function delay(n) {
//     n = n || 2000;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }

// barba.init({

//   sync: true,

//   transitions: [
//     {
//       async leave(data){

//         const done = this.async();

//         TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

//         await delay(500);
//         done();

//       },
//       enter(data){

//         TLAnim
//         .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
//         .set(wipe, {left: '-110%'})
//         document.body.removeAttribute("data-menu");


//       }
//     }
//   ]

// })