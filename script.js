const icon = document.querySelector('.icon');
const nav = document.getElementById("category-nav");
const back = document.querySelector('.transparent-background')
const cart = document.querySelector('#nav-last-item')
const cartContent = document.querySelector('#cart-item')
const increaser = document.querySelectorAll('.plus')
const decreaser = document.querySelectorAll('.minus')
const menuIcon = document.querySelector('i');
const modal = document.querySelector('.modal');
const checkoutBtns = document.querySelectorAll('.btn_checkout');

let countItem = localStorage.getItem("products") ? localStorage.getItem("products") : 0;

cart.setAttribute('data-before', countItem)
const checkoutHandler = () => {
    modal.classList.toggle("disply-ele");
    back.classList.toggle("disply-ele");
}
const menuHandler = () => {
    nav.classList.toggle("disply-ele");
    back.classList.toggle("disply-ele");
    let mark = document.querySelector('#menu-icon');
    if(nav.classList.contains('disply-ele')) {
        mark.src = 'assets/shared/tablet/icon-hamburger.svg';
        mark.classList.remove('fa-bars1')
    } else {
        mark.src = 'assets/shared/tablet/xmark-solid.svg';
        mark.classList.add('fa-bars1')
    }
}

const cartHandler = (e) => {
    console.log(e.currentTarget);
    cartContent.classList.toggle("disply-ele");
    back.classList.toggle("disply-ele");
}
icon.addEventListener('click', menuHandler);

cart.addEventListener('click', cartHandler);

back.addEventListener('click', () => {
    back.classList.add('disply-ele');
    nav.classList.add("disply-ele");
    cartContent.classList.add('disply-ele');
    modal.classList.add("disply-ele");
});


checkoutBtns.forEach(item => {
    item.addEventListener('click', checkoutHandler);
})



increaser.forEach((item) => {
    item.addEventListener('click', function (event) {
        console.log('clicked')   
        countItem++;
        localStorage.setItem("products", countItem);
        cart.setAttribute('data-before', countItem);       
    });
})

decreaser.forEach((item) => {
    item.addEventListener('click', function (event) {
        console.log('clicked')
        countItem == 0 ? countItem : countItem--;
        // countItem--;
        localStorage.setItem("products", countItem);
        cart.setAttribute('data-before', countItem);
    });
})