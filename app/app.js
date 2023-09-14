var swiper = new Swiper(".SwiperTrainer", {
    slidesPerView: 1,
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
});

//menu mobile
const menuIcon = document.getElementById('menu-mobile')
const links = document.getElementById('nav-links')

// toggle menu
const toggleMenu = () => {
    links.classList.toggle('active')
    menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenu)
links.childNodes.forEach(item => {
    item.addEventListener('click', toggleMenu)
})