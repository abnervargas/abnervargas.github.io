var swiper = new Swiper(".SwiperTrainer", {
    slidesPerView: 3,
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