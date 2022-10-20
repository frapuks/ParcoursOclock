console.log('start');

const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
];

const backgroundImages = [
    '../../images/tripodvisor/canyon.jpg',
    '../../images/tripodvisor/city.jpg',
    '../../images/tripodvisor/nature.jpg',
    '../../images/tripodvisor/ocean.jpg',
    '../../images/tripodvisor/road.jpg',
    '../../images/tripodvisor/ski.jpg',
];

let backgroundIndex = 0;

// Newsletter toggle display
const buttonNewsletter = document.querySelector('.menu__item--newsletter');
const buttonCloseNewsletter = document.querySelector('.newsletter__close');
const newsletterElement = document.querySelector('.newsletter');
const inputEmail = document.getElementById('subscriber-email');
buttonNewsletter.addEventListener('click', displayNewsletterElement);
buttonCloseNewsletter.addEventListener('click', removeNewsletterElement);

// Message error email invalid
const messageError = document.createElement('p');
messageError.style.color = "red";
messageError.style.fontWeight = "bold";
inputEmail.addEventListener('input', checkEmail);

// slider
const slider = document.querySelector('.slider');
const sliderButtons = slider.querySelectorAll('.slider__btn');
const arrowLeft = sliderButtons[0];
const arrowRight = sliderButtons[1];
slider.style.backgroundImage = `url(${backgroundImages[backgroundIndex]})`;
slider.style.backgroundSize = `cover`;
slider.style.backgroundPosition = `center`;
arrowLeft.addEventListener('click', changeBgLeft);
arrowRight.addEventListener('click', changeBgRight);

// display newsletter after 300px scrolling
window.onscroll = function test(event){
    if (window.scrollY > 300 && newsletterElement.dataset.scrollY300px !== "true") {
        newsletterElement.classList.add('newsletter--on');
        newsletterElement.dataset.scrollY300px = "true";
    }
}

// toggle dark-mode
const buttonDarkMode = document.getElementById('theme-switch');
buttonDarkMode.addEventListener('click', handleDarkMode);

// toggle green-mode
const buttonGreenMode = document.getElementById('theme-green');
buttonGreenMode.addEventListener('click', handleGreenMode);

// toggle red-mode
const buttonRedMode = document.getElementById('theme-red');
buttonRedMode.addEventListener('click', handleRedMode);

// toggle blue-mode
const buttonBlueMode = document.getElementById('theme-blue');
buttonBlueMode.addEventListener('click', handleBlueMode);

// articles filtering
const checkboxes = document.getElementsByName('rating');
const articles = document.querySelectorAll('.review');
for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', handleFilteringArticles);
}




// functions
function displayNewsletterElement(event) {
    event.preventDefault();
    newsletterElement.classList.toggle('newsletter--on');
}

function removeNewsletterElement(event) {
    event.preventDefault();
    newsletterElement.classList.remove('newsletter--on');
}

function checkEmail() {
    messageError.textContent = "";
    for (const string of forbiddenDomains) {
        if(inputEmail.value.includes(string)) {
            messageError.textContent = "Email non valide";
            newsletterElement.append(messageError);
        }
    }
}

function changeBgLeft(){
    if (backgroundIndex) {
        backgroundIndex--;
    } else {
        backgroundIndex = 5;
    }
    slider.style.backgroundImage = `url(${backgroundImages[backgroundIndex]})`;
}

function changeBgRight(){
    if (backgroundIndex === 5) {
        backgroundIndex = 0;
    } else {
        backgroundIndex++;
    }
    slider.style.backgroundImage = `url(${backgroundImages[backgroundIndex]})`;
}

function handleDarkMode() {
    document.body.classList.toggle('theme-dark');
}
function handleGreenMode() {
    document.body.classList.toggle('theme-green');
    if (document.body.classList.contains('theme-red') || document.body.classList.contains('theme-blue')) {
        document.body.classList.remove('theme-red');
        document.body.classList.remove('theme-blue');
    }
}
function handleRedMode() {
    document.body.classList.toggle('theme-red');
    if (document.body.classList.contains('theme-green') || document.body.classList.contains('theme-blue')) {
        document.body.classList.remove('theme-green');
        document.body.classList.remove('theme-blue');
    }
}
function handleBlueMode() {
    document.body.classList.toggle('theme-blue');
    if (document.body.classList.contains('theme-red') || document.body.classList.contains('theme-green')) {
        document.body.classList.remove('theme-red');
        document.body.classList.remove('theme-green');
    }
}

function handleFilteringArticles(event) {
    for (const article of articles) {
        if (article.dataset.rating === event.currentTarget.value) {
            article.classList.toggle('review--hidden');
        }
    }
}







//--------------------- FEATURES ---------------------\\

// button "like"
const buttonsLike = document.querySelectorAll('.btn__like');
for (const button of buttonsLike) {
    button.addEventListener('click', handleLike);
}

function handleLike(event) {
    event.currentTarget.classList.toggle('like--checked');
}

// button "Favoris"
const buttonFav = document.querySelector('.menu__item--favoris');
buttonFav.addEventListener('click', handleFavoris);

function handleFavoris(event) {
    event.preventDefault();
    const cards = document.querySelectorAll('.card');
    for (const card of cards) {
        const cardFavBtn = card.querySelector('.btn__like');
        if (cardFavBtn.classList.contains('like--checked')) {
            card.classList.remove('card--hidden');
        } else {
            card.classList.toggle('card--hidden');
        }
    }
}

// button "avis"
// add link into HTML anchor