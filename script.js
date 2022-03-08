const icon = document.querySelector('.icon');
const nav = document.getElementById("category-nav");
const back = document.querySelector('.transparent-background')

const menuHandler = () => {
    nav.classList.toggle("disply-ele");
    back.classList.toggle("disply-ele");
}

icon.addEventListener('click', menuHandler);


// let options = {
//     root: document.querySelector('.section-1'),
//     rootMargin: '0px',
//     threshold: 0.5
// }
// const callback = (entries, observer) => {
//     entries.forEach(element => {
//         element.style.animation = 'visible 4s linear';
//     });
// //    div.style.animation = 'visible 4s linear';
// }
// let observer = new IntersectionObserver(callback, options);
// const target = document.querySelector('.speaker-1')[0]
// observer.observe(target);