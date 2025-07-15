let timer;
let timeLeft = 25 * 60;
let running = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const statusText = document.getElementById('status');

function updateDisplay() {
  const min = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const sec = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (!running) {
    running = true;
    statusText.textContent = '¡Hora de concentrarse!';
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        running = false;
        statusText.textContent = '¡Toma un descanso!';
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  running = false;
  updateDisplay();
  statusText.textContent = '¡Hora de concentrarse!';
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
