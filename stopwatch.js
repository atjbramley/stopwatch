// Setup
let secondCount = 0;
let stopWatch;
const displayPara = document.getElementById("timerDigits");

// Main stopwatch function
function displayCount() {
  // Turning times into valid numbers for display
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60);
  let seconds = Math.floor(secondCount % 60);

  // Ensuring that all 3 sections of stopwatch always display 2 figures
  if (hours < 10) {
    displayHours = "0" + hours;
  } else {
    displayHours = hours;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes;
  } else {
    displayMinutes = minutes;
  }
  if (seconds < 10) {
    displaySeconds = "0" + seconds;
  } else {
    displaySeconds = seconds;
  }

  // Setting display
  displayPara.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;

  // Increments second-count each time function is run
  secondCount++;
}

// Assigning Buttons
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// Button Interactivity
startButton.addEventListener("click", () => {
  stopWatch = setInterval(displayCount, 1000);
  startButton.style.backgroundColor = "pink";
  startButton.innerHTML = "STARTED";
  startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  clearInterval(stopWatch);
  startButton.disabled = false;
  stopButton.style.backgroundColor = "orange";
  stopButton.innerHTML = "STOPPED";
});

resetButton.addEventListener("click", () => {
  clearInterval(stopWatch);
  startButton.disabled = false;
  secondCount = 0;
  displayCount();
  resetButton.style.backgroundColor = "green";
  resetButton.innerHTML = "RESET";
});

// Sets stopwatch to 00:00:00 as soon as script finishes loading
displayCount();

// Exports Timer Function for testing
// export default displayCount;
