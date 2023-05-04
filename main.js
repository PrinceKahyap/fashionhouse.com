// Current-year 
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear();

//  owlcarousal 
$(".carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false
        },
    }
});