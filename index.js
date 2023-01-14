setInterval(updateCurrentTime, 1000);

function updateCurrentTime() {
  let date = new Date();
  // console.log("func", date);
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let seconds = document.getElementById("num-sec");
  let minut = document.getElementById("num-min");
  let hours = document.getElementById("num-hour");
  let Ampm = document.getElementById("timeview");
  let ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12;
  hour = hour ? hour : 12;
  Ampm.innerHTML = ampm;
  seconds.innerHTML = sec < 10 ? "0" + sec : sec;
  minut.innerHTML = min < 10 ? "0" + min : min;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
}





var valms = 0;
var valsec = 0;
var valmin = 0;
var stopwatchTimer;
var isStopwatchOn = false;

function start() {
  if (isStopwatchOn) { return }
  let ms = document.getElementById("ms");
  let sec = document.getElementById("sec");
  let min = document.getElementById("min");

  stopwatchTimer = setInterval(function(){
    valms++;
    updateStopwatch();
  }, 10);
  isStopwatchOn = true;

  console.log("started");
}

function stop() {
  if (!isStopwatchOn) {
    return
  } else {
    clearInterval(stopwatchTimer);
    isStopwatchOn = false;
    console.log("stopped");
  }
}

function updateStopwatch() {
  if (valms == 100) {
    valsec++;
    console.log(valsec);
    valms = 0;
  }
  if (valsec == 60) {
    valmin++;
    valsec = 0;
  }
  ms.innerHTML = valms < 9 ? "0" + valms : valms;
  sec.innerHTML = valsec < 9 ? "0" + valsec : valsec;
  min.innerHTML = valmin < 9 ? "0" + valmin : valmin;
}


function reset(){
  stop();
  valms = 0;
  valmin = 0;
  valsec = 0;
  updateStopwatch();
}