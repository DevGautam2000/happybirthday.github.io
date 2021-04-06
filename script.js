const circleUp = document.querySelector(".circleUp");
const circleDown = document.querySelector(".circleDown");
const html = document.querySelector("html");
const button = document.querySelector(".btn");
const text = document.querySelector(".text");
const audio = new Audio("hb.mp3");

let timer;
let audioTimer;
let count = -1;
let promp = "";

button.addEventListener("click", () => {
  if (count === -1) {
    promp = prompt("Enter your name to proceed.");

    if (promp === null) {
      alert("Please enter your name to proceed.");
    } else {
      count = 0;
    }
  }

  if (promp !== null) {
    document.querySelector(".footer").style.color = "gray";
    if (count > 0) {
      circleUp.classList.remove("down");
      circleDown.classList.remove("down");
      button.classList.add("gone");
      button.innerHTML = "";
      clearInterval(timer);
      timer = setInterval(() => {
        button.style.display = "none";
      }, 1000);

      audio.pause();
      clearInterval(audioTimer);
      text.innerHTML =
        "Have a Great Day!<br>May your dreams come true.<br><br><div class='note'>~Your loving friend</div>";
    }

    let whiteSpaceIndex = promp.indexOf(" ");

    if (count === 0) {
      count++;

      circleUp.classList.add("down");
      circleDown.classList.add("down");
      html.classList.add("Clicked");
      button.innerHTML = "Stop Audio";
      let first = promp.substr(0, 1);
      let sub = promp.substring(1, whiteSpaceIndex);
      text.innerHTML = `Happy Birthday ${
        first.toUpperCase() + sub.toLowerCase()
      }`;
      let promise = audio.play();

      audioTimer = setInterval(() => {
        promise = audio.play();
      }, 100);
      timer = setInterval(setColor, 1000);
    }
  }
});

function setColor() {
  // let randomBg =
  //     "rgb(" +
  //     Math.floor(Math.random() * 250) +
  //     "," +
  //     Math.floor(Math.random() * 250) +
  //     "," +
  //     Math.floor(Math.random() * 250) +
  //     ")";
  // linear-gradient(90deg, rgb(221, 32, 32), rgb(67, 79, 252));
  let randomBg =
    "linear-gradient(90deg," +
    "rgb(" +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 250) +
    ")," +
    "rgb(" +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 250) +
    "))";

  text.style.color =
    "rgb(" +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 250) +
    ")";
  html.style.background = randomBg;
}
