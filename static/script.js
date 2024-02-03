var getItalyTime = function () {
  var now = new Date();
  var italyTime = now.toLocaleString("it-IT", { timeZone: 'Europe/Rome', hour12: false, hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  var italyHour = now.toLocaleString("it-IT", { timeZone: 'Europe/Rome', hourCycle: 'h24', hour: 'numeric' });

  document.getElementById("clock").innerHTML = italyTime;

  if (italyHour >= 22 || italyHour <= 6) {
    document.getElementById("vid").style.visibility = "hidden";
    document.getElementById("dorm").style.display = "flex";
  } else {
    document.getElementById("vid").style.display = "flex";
    document.getElementById("dorm").style.visibility = "hidden";
  }
};

getItalyTime();
setInterval(getItalyTime);