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

//DISABLE SCROLL

var scrollIsEnabled;
scrollIsEnabled = true;

function disableScroll() {
	var scrollPosition = [
  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

function enableScroll() {
	var html = jQuery('html');
var scrollPosition = html.data('scroll-position');
html.css('overflow', html.data('previous-overflow'));
window.scrollTo(scrollPosition[0], scrollPosition[1]);
}

$("#disable-scroll-button").click(function(event) {
	if(scrollIsEnabled === true) {
		disableScroll();
		scrollIsEnabled = false;
	} else {
		enableScroll();
		scrollIsEnabled = true;
	}
});

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

