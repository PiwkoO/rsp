import './assets/sass/style.sass';

const playButton = document.querySelector('.play');
const howToButton = document.querySelector('.how');
const closeButton = document.querySelector('.close');
const menuButton = document.querySelector('.menu');

const rulesPage = document.querySelector('.rules');
const gamePage = document.querySelector('.game');
const gameResults = document.querySelector('.results');

const showGame = () => {
    gamePage.classList.add('active');
    setTimeout(animButton, 1000);
};

const showResults = () => {
    gameResults.classList.toggle('active');
    menuButton.classList.toggle('color')
};

const showRules = () => {
    rulesPage.classList.add('active');
    setTimeout(animButton, 1000);
};

const animButton = () => {
    closeButton.classList.add('show');
    menuButton.classList.add('show');
};

const closeWindow = () => {
    rulesPage.classList.remove('active');
    gamePage.classList.remove('active');
    closeButton.classList.remove('show');
    menuButton.classList.remove('show');
};

menuButton.addEventListener('click', showResults);
closeButton.addEventListener('click', closeWindow);
howToButton.addEventListener('click', showRules);
playButton.addEventListener('click', showGame);