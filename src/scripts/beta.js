"use strict";
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

//MENU BETA
const linkFace = document.querySelector(".link-facial");
const linkGene = document.querySelector(".link-general");
const linkVit = document.querySelector(".link-vitesse");
const containerFace = document.querySelector(".container-facial");
const containerGene = document.querySelector(".container-general");
const containerVit = document.querySelector(".container-vitesse");


linkFace.addEventListener("click", function(){
  containerGene.classList.add("hidden");
  linkGene.classList.remove("text-purple");
  containerVit.classList.add("hidden");
  linkVit.classList.remove("text-purple");
  containerFace.classList.remove("hidden");
  linkFace.classList.add("text-purple");
});
linkGene.addEventListener("click", function(){
  containerGene.classList.remove("hidden");
  linkGene.classList.add("text-purple");
  containerFace.classList.add("hidden");
  linkFace.classList.remove("text-purple");
  containerVit.classList.add("hidden");
  linkVit.classList.remove("text-purple");
});
linkVit.addEventListener("click", function(){
  containerGene.classList.add("hidden");
  linkGene.classList.remove("text-purple");
  containerFace.classList.add("hidden");
  linkFace.classList.remove("text-purple");
  containerVit.classList.remove("hidden");
  linkVit.classList.add("text-purple");
});


//COOKIE
const showMsg = localStorage.getItem('showMsg');

if(showMsg === 'false'){
  $('#popup').css("display", "none");
}

$('#popup-close').on('click', function(){
  localStorage.setItem('showMsg', 'false');
  $('#popup').css("display", "none");
});

//Slider range vitesse
let slider = document.getElementById('range-text1');
let listTexts = document.querySelectorAll(".text-beta");

slider.addEventListener('input', e => {
  for(let listText of listTexts){
    listText.style["-webkit-animation-duration"] = e.target.value + "s";
  }
})

//Slider range vitesse 2
let slider2 = document.getElementById('range-text2');
let list2Texts = document.querySelectorAll(".text-beta2");

slider2.addEventListener('input', e => {
  for(let list2Text of list2Texts){
    list2Text.style["-webkit-animation-duration"] = e.target.value + "s";
  }
})