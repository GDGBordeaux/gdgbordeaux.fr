import "./config/firebase";
import Main from "./main";
// import registerServiceWorker from "./registerServiceWorker";

Main();
// registerServiceWorker();

const html = document.querySelector("html");
const checkScroll = () => {
  if (html.scrollTop < 20) {
    html.classList.remove("scrolled");
  } else {
    html.classList.add("scrolled");
  }
};
const setRandomBackground = () => {
  const i = 1 + Math.floor(Math.random() * 4);
  document.body.style.backgroundImage = `url(./asset/bg${i}.jpeg)`;
};

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll, false);
document.addEventListener("DOMContentLoaded", setRandomBackground, false);
