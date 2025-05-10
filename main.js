const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');
const btn = document.getElementById('btn');
const numberInput = document.getElementById('quantity');

let score = 0;
let currentTargetIndex = 0;
let totalTargets = 0;
let clickedTargets = 0;

gameArea.addEventListener('contextmenu', (e) => e.preventDefault());

btn.addEventListener('click', () => {
  gameArea.innerHTML = '';
  score = 0;
  clickedTargets = 0;
  currentTargetIndex = 0;
  scoreBoard.textContent = `Score: ${score}`;

  totalTargets = parseInt(numberInput.value, 10);
  if (isNaN(totalTargets) || totalTargets < 1 || totalTargets > 5) {
    alert('Please enter a number between 1 and 5');
    return;
  }

  for (let i = 0; i < totalTargets; i++) {
    createTarget(i);
  }
});

function createTarget(id) {
  const target = document.createElement('div');
  target.classList.add('target');
  target.dataset.id = id;
  target.textContent = (id + 1).toString();

  moveTarget(target);

  target.addEventListener('click', () => {
    const clickedId = parseInt(target.dataset.id, 10);
    if (clickedId === currentTargetIndex) {
      target.style.display = 'none'; // Hide the target
      currentTargetIndex++;
      clickedTargets++;

      if (clickedTargets === totalTargets) {
        score++;
        scoreBoard.textContent = `Score: ${score}`;
      }
    }
  });

  gameArea.appendChild(target);
}

function moveTarget(target) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxX = gameAreaRect.width - 50;
  const maxY = gameAreaRect.height - 50;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}
