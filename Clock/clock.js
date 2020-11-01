setInterval(setClock, 1000);
//Watch
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
// Number watch
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
// S A M E
// const hourHand = document.querySelector("#hh");
// const minuteHand = document.querySelector("#mm");
// const secondHand = document.querySelector("#ss");
function setClock() {
  const currentDate = new Date();
  //Watch
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRation = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRation);
  //Number watch
  let h = currentDate.getHours();
  let m = currentDate.getMinutes();
  let s = currentDate.getSeconds();
  let am = "AM";
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  if (h > 12) {
    h -= 12;
    am = "PM";
  }
  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;
  period.textContent = am;
}
const setRotation = (element, relationRation) => {
  element.style.setProperty("--rotation", relationRation * 360);
};
setClock(); // when you do a refresh it put the hands in the correct
