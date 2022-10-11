let Galary = document.querySelectorAll(".Galary .box img");

Galary.forEach(img => {

  img.addEventListener('click', (e) => {

    let overlay = document.createElement("div");
    overlay.className = "overlay-popup";
    document.body.appendChild(overlay);

    let popuppox = document.createElement("div");
    popuppox.className = 'popup-box';


    let popupimag = document.createElement("img");
    popupimag.src = img.src;

    popuppox.appendChild(popupimag);

    document.body.appendChild(popuppox);


  });
});

document.addEventListener("click", function(e) {
  if(e.target.className == 'overlay-popup'){
    document.querySelector('.overlay-popup').remove();
    document.querySelector('.popup-box').remove();
  }
});