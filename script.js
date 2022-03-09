const icon = document.querySelector('.icon');
const nav = document.getElementById("category-nav");
const back = document.querySelector('.transparent-background')
const cart = document.querySelector('#nav-last-item')
const cartContent = document.querySelector('#cart-item')
const menuHandler = () => {
    nav.classList.toggle("disply-ele");
    back.classList.toggle("disply-ele");
}

const cartHandler = () => {
    cartContent.classList.toggle("disply-ele");
    back.classList.toggle("disply-ele");
}
icon.addEventListener('click', menuHandler);

cart.addEventListener('click', cartHandler);
