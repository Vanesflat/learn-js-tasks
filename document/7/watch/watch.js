const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
let timer;


const conversionToTwoDigit = (number) => number < 10 ? `0${number}` : `${number}`;
const setTimer = () => {
  const date = new Date();
  const h = date.getHours();
  hours.innerHTML = conversionToTwoDigit(h);

  const m = date.getMinutes();
  minutes.innerHTML = conversionToTwoDigit(m);

  const s = date.getSeconds();
  seconds.innerHTML = conversionToTwoDigit(s);
};

startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);

function startBtnHandler() {
  stopBtnHandler();
  timer = setInterval(setTimer, 1000);
  setTimer();
}

function stopBtnHandler() {
  clearInterval(timer);
}
