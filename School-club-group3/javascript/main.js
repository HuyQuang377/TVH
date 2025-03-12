// Truy xuất phần tử
let nav_link = document.querySelectorAll('.nav-link');

// Nav bar

function nav_active() {
    nav_link.forEach(i => {
        i.classList.remove('nav-link-hover');
    })
}

nav_link.forEach(i => {
    console.log(i);
    i.addEventListener('click', () => {
        nav_active();
        i.classList.add('nav-link-hover');
    })
})
// slide ảnh
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;
let slidesPerView = getSlidesPerView();

function getSlidesPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
}

function moveSlide() {
    slidesPerView = getSlidesPerView();
    const maxIndex = slideCount - slidesPerView;
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
        slider.style.transform = "translateX(0)";

        slider.style.transition = "transform 0.5s ease-in-out";

        return;
    }
    const slideWidth = slides[0].offsetWidth + 10;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

window.addEventListener("resize", () => {
    slidesPerView = getSlidesPerView();
    currentIndex = 0;

    slider.style.transform = "translateX(0)";
});

setInterval(moveSlide, 3000);


// click đổi background
let header = document.querySelector('header');
let imgs = document.querySelectorAll('.slide img');

imgs.forEach(i => {
    i.addEventListener('click', () => {
        let index_2 = Number(i.getAttribute('alt'));
        header.style.backgroundImage = `url(./img/bg-img-system/bg-system-${index_2}.jpg)`;
    })
})

// Nội dung nghiên cứu
var splide = new Splide('.splide');
var bar = splide.root.querySelector('.my-carousel-progress-bar');

// Updates the bar width whenever the carousel moves:
splide.on('mounted move', function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';
});

splide.mount();