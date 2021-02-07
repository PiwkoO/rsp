const showPlayerScore = document.querySelector('.player-score');
const showAiScore = document.querySelector('.ai-score');
const startButton = document.querySelector('.start');
const cards = [...document.querySelectorAll('.cards div')];

const ai = {
  select: null,
  score: 0,
};

const player = {
  select: null,
  score: 0,
};

const checkResult = () => {
  if (player.select === ai.select) {
    cards.forEach(card => card.classList.add('draw'));
  } else if (
    (player.select === 0 && ai.select === 1) ||
    (player.select === 1 && ai.select === 2) ||
    (player.select === 2 && ai.select === 0)
  ) {
    // eslint-disable-next-line no-plusplus
    player.score++;
    cards.forEach(card => card.classList.add('win'));
  } else {
    // eslint-disable-next-line no-plusplus
    ai.score++;
    cards.forEach(card => card.classList.add('lose'));
  }
};

const checkCards = () => {
  if (player.select != null) {
    checkResult();
  } else {
    cards.forEach(card => card.classList.add('lose'));
  }
};

const selectCard = function() {
  cards.forEach(card => card.classList.remove('selected', 'win', 'lose', 'draw'));
  this.classList.add('selected');
  player.select = cards.indexOf(this);
};

const aiChoice = () => {
  ai.select = Math.floor(Math.random() * cards.length);
};

const reset = () => {
  cards.forEach(card => card.classList.remove('selected', 'win', 'lose', 'draw'));
  player.select = null;
  ai.select = null;
};

const startGame = () => {
  aiChoice();
  checkCards();
  showPlayerScore.textContent = player.score;
  showAiScore.textContent = ai.score;
  setTimeout(reset, 1000);
};

cards.forEach(card => card.addEventListener('click', selectCard));
startButton.addEventListener('click', startGame);
