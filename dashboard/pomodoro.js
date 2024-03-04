const timerDisplay = document.querySelector('.time-left');
const startButton = document.querySelector('.start-btn');
const resetButton = document.querySelector('.reset-btn');

let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval;

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  timerDisplay.textContent = display;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      displayTimeLeft(timeLeft);
    } else {
      clearInterval(timerInterval);
      alert('Pomodoro session finished!');
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 25 * 60;
  displayTimeLeft(timeLeft);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
