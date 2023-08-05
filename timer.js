let finish;
function reset() {
    clearInterval(finish);
    document.getElementById("min").value = "";
    document.getElementById("countdown").textContent = "00:00";
  }
  function displayTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const form = `${String(min).padStart(2, "0")}:${String(sec).padStart( 2, "0")}`;
    document.getElementById("countdown").textContent = form;
  }











