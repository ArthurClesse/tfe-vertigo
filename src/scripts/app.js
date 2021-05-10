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