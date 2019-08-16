import './assets/sass/style.sass';

const playButton = document.querySelector('.play');
const howToButton = document.querySelector('.how');
const closeButton = document.querySelector('.close');

const rulesPage = document.querySelector('.rules');
const gamePage = document.querySelector('.game');

const showGame = () => {
    gamePage.classList.add('active');
    setTimeout(animButton, 1000);
};

const showRules = () => {
    rulesPage.classList.add('active');
    setTimeout(animButton, 1000);
};

const animButton = () => {
    closeButton.classList.add('show')
};

const closeWindow = () => {
    rulesPage.classList.remove('active');
    gamePage.classList.remove('active');
    closeButton.classList.remove('show');
};

closeButton.addEventListener('click', closeWindow);
howToButton.addEventListener('click', showRules);
playButton.addEventListener('click', showGame);