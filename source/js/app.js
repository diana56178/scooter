if (window.matchMedia('(max-width: 767px)').matches) {
    const slider = document.querySelector('.slider__list');
    const prevButton = document.querySelector('.button-prev');
    const nextButton = document.querySelector('.button-next');
    const slides = Array.from(slider.querySelectorAll('.slider__item'));
    const slideCount = slides.length;
    let slideIndex = 0;

    prevButton.addEventListener('click', showPreviouseSlide);
    nextButton.addEventListener('click', shoeNextSlide);

    function showPreviouseSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function shoeNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    updateSlider();
}