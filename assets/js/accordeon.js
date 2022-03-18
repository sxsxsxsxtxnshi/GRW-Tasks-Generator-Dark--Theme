let accordeon = document.querySelector('.main-accordeon__item__sup');
let accordeonInfo = document.querySelector('.main-accordeon__item__info');
accordeon.onclick = () => {
    accordeon.classList.toggle('active');
    accordeonInfo.classList.toggle('hiddenTransition');
};