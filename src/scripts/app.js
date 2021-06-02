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

//CUSTOM CURSOR
  $(document).ready(function(){
    var cursor = $(".cursor");
    
        $(window).mousemove(function(e) {
            cursor.css({
                top: e.clientY - cursor.height() / 2,
                left: e.clientX - cursor.width() / 2
            });
        });
    
        $(window)
            .mouseleave(function() {
                cursor.css({
                    opacity: "0"
                });
            })
            .mouseenter(function() {
                cursor.css({
                    opacity: "1"
                });
            });
    
        $(".link")
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(3.2)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });
          $(".img-hover")
            .mouseenter(function() {
                cursor.css({
                    transform: "scale(6.2)"
                });
            })
            .mouseleave(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });
        $(window)
            .mousedown(function() {
                cursor.css({
                    transform: "scale(.2)"
                });
            })
            .mouseup(function() {
                cursor.css({
                    transform: "scale(1)"
                });
            });
    });

//TEXT ANIMATION
const ratio = .1
const option = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry){
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, option)
document.querySelectorAll('.reveal').forEach(function (r){
  observer.observe(r)
})

var webcam = document.querySelector('.webcam');
var msgSafari = document.querySelector('.msg-safari');
var textWidth = document.querySelector('.text-width');
var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    console.log("Tu es sur chrome")
  } else {
    webcam.classList.add('hide-safari');
    textWidth.classList.add('hide-safari');
    msgSafari.classList.add('show-safari');
  }
}

//DARK MODE
var btnLight = document.querySelector(".btn-light");
var btnDark = document.querySelector(".btn-dark");
var activeTheme = localStorage.getItem("theme");

if (activeTheme !== null) {
  document.body.setAttribute("data-theme", activeTheme);
}

if (btnLight) {
  btnLight.addEventListener("click", modeLight);
}

if (btnDark) {
  btnDark.addEventListener("click", modeDark);
}

function modeLight() {
  document.body.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
}

function modeDark() {
  document.body.setAttribute("data-theme", "light");
  localStorage.setItem("theme", "light");
}


//TEST 
$(function(){
			
    var $slogans = $("h2.slogan").find("strong");
    var $holder = $("#holder");
    
    //set via JS so they're visible if JS disabled
    $slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
    
    //settings
    var transitionTime = 0.4;
    var slogansDelayTime = 2;
    
    //internal
    var totalSlogans = $slogans.length;
    
    var oldSlogan = 0;
    var currentSlogan = -1;
    
    //initialize	
    switchSlogan();
    
    function switchSlogan(){
        
        oldSlogan = currentSlogan;
        
        if(currentSlogan < totalSlogans-1){
            currentSlogan ++
        } else {
            currentSlogan = 0;
        }
        
        TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
        TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
        
        TweenLite.delayedCall(slogansDelayTime, switchSlogan);
    }
    
});