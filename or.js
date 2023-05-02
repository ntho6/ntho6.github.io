var getItalyTime = function () {
  var now = new Date();
  var italyTime = now.toLocaleString("it-IT", { timeZone: 'Europe/Rome', hour12: false, hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  var italyHour = now.toLocaleString("it-IT", { timeZone: 'Europe/Rome', hourCycle: 'h24', hour: 'numeric' });

  document.getElementById("clock").innerHTML = italyTime;

  var dorm = 22;
  var svegl = 8;

  if (italyHour >= dorm || italyHour <= svegl) {
    document.getElementById('vid').style.display = 'none';
    document.getElementById('png').style.display = 'initial';
    document.getElementById('png2').style.display = 'initial';
  } else {
    document.getElementById('vid').style.display = 'initial';
    document.getElementById('png').style.display = 'none';
    document.getElementById('png2').style.display = 'none';
  }
};

getItalyTime();
setInterval(getItalyTime, 1000);
