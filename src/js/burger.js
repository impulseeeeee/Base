const burgerIcon = document.querySelector('.burger');
const menu = document.querySelector('.menu');

if (burgerIcon) {
    const navbar = document.querySelector('.navbar');

    burgerIcon.addEventListener("click", function () {
        navbar.classList.toggle('active');
        document.body.classList.toggle("active");
        menu.classList.toggle("active");
        burgerIcon.classList.toggle("active");
    });
}