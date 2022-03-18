let modalLink = document.querySelector('.header-nav__link.modal');
let modalWrapper = document.querySelector('.modal-about__wrapper');
let modalClose = document.querySelector('.close-modal');

modalLink.onclick = () => {
    modalWrapper.classList.add('active');
};

modalClose.onclick = () => {
    modalWrapper.classList.remove('active');
};