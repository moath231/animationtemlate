let Galary = document.querySelectorAll(".Galary .box img");

Galary.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay-popup";
    document.body.appendChild(overlay);

    let popuppox = document.createElement("div");
    popuppox.className = "popup-box";

    let popupimag = document.createElement("img");
    popupimag.src = img.src;

    popuppox.appendChild(popupimag);

    document.body.appendChild(popuppox);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "overlay-popup") {
    document.querySelector(".overlay-popup").remove();
    document.querySelector(".popup-box").remove();
  }
});
// !


// !
function openmeganav() {
  let megalink = document.querySelector(".mega-link");

  const active = document.querySelector(".other-link .active");

  if(active){
    megalink.classList.remove("active");
  }else{
    megalink.classList.add("active");
  }
  }
  // !



  // ! countdown
  let countDownDate = new Date("oct 21, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".Latest-Events .time .box-time .day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".Latest-Events .time .box-time .hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".Latest-Events .time .box-time .min").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".Latest-Events .time .box-time .Sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
// **



// * * on scroll function
let Skill = document.querySelector("#Our-Skills"); //! our skill section
let Stats = document.querySelector("#Stats"); //! Stats section
let numbers = document.querySelectorAll(".Stats .box span"); //! Stats section
let start = false;

window.onscroll = function () {

  // ** Stats
  if(window.scrollY >= (Stats.offsetTop - 200)){
    if(!start){
      numbers.forEach((n) => startcount(n));
    }
    start=true;
  }

  // ** skill
  if(window.scrollY >= Skill.offsetTop){
    let skills = document.querySelectorAll(".skill .the-progress span");
    skills.forEach(S => {
      S.style.width = S.dataset.width;
    });
  }

}


function startcount(n){
  let goal = n.dataset.goal;
  let count = setInterval(() => {
    n.textContent++;
    if(n.textContent == goal){
      clearInterval(count);
    }
  },2000 / goal)
}
//
//