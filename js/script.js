function openSearch() {
    $('.search--box').toggleClass('active');
}

const secHome = document.querySelector('#slider--item--1');
const secAbout = document.querySelector('#slider--item--2');

$('#header--toggle--1').click(function () {
    secHome.style.left = '0'
    secHome.style.transition = '0.4s'

    secAbout.style.transition = '0.4s'
    secAbout.style.left = '2000px'
})

$('#header--toggle--2').click(function () {
    secHome.style.left = '-2000px'
    secHome.style.transition = '0.4s'

    secAbout.style.transition = '0.4s'
    secAbout.style.left = '0'
})