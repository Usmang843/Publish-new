window.onload = function () {
  var sec = "00",
    tensec = "00",
    min = "00";
  var appmin = document.getElementById("min");
  var appsec = document.getElementById("sec");
  var apptensec = document.getElementById("tensec");
  var btnStart = document.getElementById("start");
  var btnStop = document.getElementById("stop");
  var btnReset = document.getElementById("reset");
  var interval;

  btnStart.onclick = function () {
    clearInterval(interval);
    console.log("start");
    interval = setInterval(startTimer, 10);
  };
  btnStop.onclick = function () {
    clearInterval(interval);
  };
  btnReset.onclick = function () {
    clearInterval(interval);
    sec = "00";
    tensec = "00";
    min = "00"
    appsec.innerHTML = sec;
    apptensec.innerHTML = tensec;
    appmin.innerHTML = min
  };
  function startTimer() {
    tensec++;
    if (tensec <= 9) {
      apptensec.innerHTML = "0" + tensec;
    }
    if (tensec > 9) {
      apptensec.innerHTML = tensec;
    }
    if (tensec > 99) {
      sec++;
      appsec.innerHTML = "0" + sec;
      tensec = 0;
      apptensec.innerHTML = "0" + 0;
    }
    if (sec > 9) {
      appsec.innerHTML = sec;
    }
    if (sec > 99) {
      min++;
      appmin.innerHTML = "0" + min;
      sec = 0;
      appsec.innerHTML = "0" + 0;
      tensec = 0;
      apptensec.innerHTML = "0" + 0;
    }
    if (min > 9) {
      appmin.innerHTML = min;
    }
  }
};
