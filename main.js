const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');
const btn = document.getElementById('btn');
const numberInput = document.getElementById('quantity');

let score = 0;

function createTarget(id) {
  const target = document.createElement('div');
  target.classList.add('target');
  target.dataset.id = id;

  moveTarget(target);

  target.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    moveTarget(target);
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

gameArea.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  if (e.key === 'F12') {
    e.preventDefault();
    score = 0;
    scoreBoard.textContent = `Score: ${score}`;
  }
});

btn.addEventListener('click', () => {
  gameArea.innerHTML = '';

  score = 0;
  scoreBoard.textContent = `Score: ${score}`;

  let numberOfTargets = parseInt(numberInput.value, 10);
  if (isNaN(numberOfTargets) || numberOfTargets < 1 || numberOfTargets > 5) {
    alert('Please enter a number between 1 and 5');
    return;
  }

  for (let i = 0; i < numberOfTargets; i++) {
    createTarget(i);
  }
});
function createTarget(id) {
  const target = document.createElement('div');
  target.classList.add('target');
  target.dataset.id = id;

  target.textContent = (id + 1).toString();

  moveTarget(target);

  target.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    moveTarget(target);
  });

  gameArea.appendChild(target);
}
