document.addEventListener("DOMContentLoaded", function () {
    // Navbar Animation
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.classList.add("show");
    }
    // Swiper Slider Configuration
    var swiper = new Swiper(".trending-slider", {
        effect: "coverflow", // 🔥 3D Effect
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        autoplay: {
            delay: 2000, // Auto-slide every 2 seconds
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 50, // Adjust rotation for a smooth 3D effect
            stretch: 0,
            depth: 100,
            modifier: 2.5, // Adjust this for stronger effect
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
