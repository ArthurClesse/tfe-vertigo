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
const containerFace = document.querySelector(".container-facial");
const containerGene = document.querySelector(".container-general");


linkFace.addEventListener("click", function(){
  containerGene.classList.add("hidden");
  linkGene.classList.remove("text-purple");
  containerFace.classList.remove("hidden");
  linkFace.classList.add("text-purple");
});
linkGene.addEventListener("click", function(){
  containerGene.classList.remove("hidden");
  linkGene.classList.add("text-purple");
  containerFace.classList.add("hidden");
  linkFace.classList.remove("text-purple");
})

//POPUP 
const popUp = document.querySelector(".container-popup");
const btnPop = document.querySelector(".btn-popup");

btnPop.addEventListener("click", function(){
  popUp.classList.add("hidden");
});