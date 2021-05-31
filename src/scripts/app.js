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
  threshold: ratio
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
