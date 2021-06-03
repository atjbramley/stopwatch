function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector(".clock").textContent = time;
}

displayTime();
