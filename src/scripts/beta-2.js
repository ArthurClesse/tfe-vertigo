"use strict";
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
  let circleColor01 = document.querySelector(".text-color01");
  let listCircles = document.querySelectorAll(".circle-color1");

  for(let listCircle of listCircles){
    listCircle.style.backgroundColor = newColor;
  }
  circleColor01.innerHTML = newColor;
}

//Color change cicle 2
function circleColor2(newColor) {
  let circleColor02 = document.querySelector(".text-color02");
  let list2Circles = document.querySelectorAll(".circle-color2");

  for(let list2Circle of list2Circles){
    list2Circle.style.backgroundColor = newColor;
  }
  circleColor02.innerHTML = newColor;
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
