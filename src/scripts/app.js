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
        x: Math.random() * 700,
        y: Math.random() * 800,
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