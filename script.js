const icon = document.querySelector('.icon');
const nav = document.getElementById("category-nav");
const back = document.querySelector('.transparent-background')
const cart = document.querySelector('#nav-last-item')
const cartContent = document.querySelector('#cart-item')
const increaser = document.querySelectorAll('.plus')
const decreaser = document.querySelectorAll('.minus')


let countItem = localStorage.getItem("products") ? localStorage.getItem("products") : 0;

cart.setAttribute('data-before', countItem)
console.log(countItem);

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

back.addEventListener('click', () => {
    back.classList.add('disply-ele');
    nav.classList.add("disply-ele");
    cartContent.classList.add('disply-ele');
});

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