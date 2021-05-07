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
        x: Math.random() * 850,
        y: Math.random() * 700,
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

//Color change cicle 1
function circleColor(newColor) {
  let textColor = document.querySelector(".text-color");
  let listCircles = document.querySelectorAll(".circle-color1");

  for(let listCircle of listCircles){
    listCircle.style.backgroundColor = newColor;
  }
  textColor.innerHTML = newColor;
}

//Color change cicle 2
function circleColor2(newColor) {
  let textColor = document.querySelector(".text-color");
  let list2Circles = document.querySelectorAll(".circle-color2");

  for(let list2Circle of list2Circles){
    list2Circle.style.backgroundColor = newColor;
  }
  textColor.innerHTML = newColor;
}   

//Slider range cirlce 1
let slider = document.getElementById('range-circle1');
let listCircles = document.querySelectorAll(".circle-color1");

slider.addEventListener('input', e => {
  for(let listCircle of listCircles){
    listCircle.style.width = e.target.value + 'px';
    listCircle.style.height = e.target.value + 'px'
  }
})


//Slider range cirlce 2
let slider2 = document.getElementById('range-circle2');
let list2Circles = document.querySelectorAll(".circle-color2");

slider2.addEventListener('input', e => {
  for(let list2Circle of list2Circles){
    list2Circle.style.width = e.target.value + 'px';
    list2Circle.style.height = e.target.value + 'px'
  }
})


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
//Change text
  function changeText() {
    var x = document.getElementById("myText").value;
    let listElements = document.querySelectorAll(".vertigo");

    for(let listElement of listElements){
        listElement.innerHTML = x;
    }
  }

//Change text color
  function changeColor(newColor) {
    let textColor = document.querySelector(".text-color");
    let listElements = document.querySelectorAll(".vertigo");

    for(let listElement of listElements){
        listElement.style.color = newColor;
    }
    textColor.innerHTML = newColor;
}   

//Change background color
function changeBackground(newBackground) {
    let bgColor = document.querySelector(".background-color");
    let bgChange = document.querySelector(".bg-change");

    bgChange.style.backgroundColor = newBackground;
    bgColor.innerHTML = newBackground;
} 

//Without stroke text
function noStroke(){
    let listStrokes = document.querySelectorAll(".text-beta2");
    for(let listStroke of listStrokes){
        if(listStroke.classList.contains("stroke")){
            listStroke.classList.remove("stroke");
        }
    }
}

//With stroke text
function withStroke(){

    let listStrokes = document.querySelectorAll(".text-beta2");
    for(let listStroke of listStrokes){
        if(listStroke.classList.contains("stroke")){
        }
        else{
            listStroke.classList.add("stroke");
        }
    }
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