let secondCount = 0;
let stopWatch;
const displayPara = document.getElementById('timerDigits');

function displayCount() {
    let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount % 60)

    if (hours < 10) {
        displayHours = '0' + hours;
    } else {
        displayHours = hours
    }
    if (minutes < 10) {
        displayMinutes = '0' + minutes;
    } else {
        displayMinutes = minutes;
    }
    if (seconds < 10) {
        displaySeconds = '0' + seconds;
    } else {displaySeconds = seconds}

    displayPara.innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds;
    secondCount++;
}

// Assigning Buttons
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Interactivity
startButton.addEventListener('click', () => {
    stopWatch = setInterval(displayCount, 1000);
    startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
    clearInterval(stopWatch);
    startButton.disabled = false;
    stopButton.style.backgroundColor = 'orange';
    stopButton.innerHTML = 'STOPPED';
});

resetButton.addEventListener('click', () => {
    clearInterval(stopWatch);
    startButton.disabled = false;
    secondCount = 0;
    displayCount();
    resetButton.style.backgroundColor = 'green';
    resetButton.innerHTML = 'RESET';
});

displayCount();