function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// Cette fonction attribut la valeur de la hauteur de l'image à la div de classe "offer", "front-card" et "back-card" 
// cette fonction de marche pas pour le moment
function resizeOfferDiv(){
  var cardHeight = document.querySelector("div.offer img").height;
  console.log('cardHeight='+cardHeight);
  document.querySelector("div.offer").setAttribute("height", cardHeight);
  document.querySelector("div.front-card").setAttribute("height", cardHeight);
  document.querySelector("div.back-card").setAttribute("height", cardHeight);
  console.log('div.offer_Height='+document.querySelector("div.offer").getAttribute("height"));

}
window.addEventListener("load", resizeOfferDiv, false);
window.addEventListener("resize", resizeOfferDiv, false);