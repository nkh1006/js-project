const clockView = document.querySelector("#clockViewer");

let init = () => {
  getTime();
  setInterval(getTime, 1000);
};

let getTime = () => {
  let clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  clockView.innerHTML = hour + " : " + minute + " : " + second;
};

init();
