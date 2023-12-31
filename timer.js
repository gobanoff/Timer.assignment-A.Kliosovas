let finish;

function displayTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const form = `${String(min).padStart(2, "0")}:${String(sec).padStart(
    2,
    "0"
  )}`;
  document.getElementById("countdown").textContent = form;
}

function start() {
  clearInterval(finish);

  const inputMin = document.getElementById("min").value;
  if (isNaN(inputMin)) {
    show("INPUT DIGITS LOSER!");
    return;
  }

  const sum = inputMin * 60;
  let secSum = sum;

  finish = setInterval(() => {
    if (secSum <= 0) {
      clearInterval(finish);
      timerEnd();
    } else {
      secSum--;
      displayTime(secSum);
    }
  }, 1000);

  displayTime(secSum);
}
function reset() {
  clearInterval(finish);
  document.getElementById("min").value = "";
  document.getElementById("countdown").textContent = "00:00";
}

function timerEnd() {
  show("BOOM !!!   YOU LOSE !!!");
}

function show(message) {
  const add = document.createElement("div");
  add.classList.add("message");
  add.textContent = message;
  document.body.appendChild(add);

  setTimeout(() => {
    add.remove();
  }, 3000);
}
