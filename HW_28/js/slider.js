function Slider(elem) {
    this.elem = document.querySelector(elem);
    this.init();
    changeSlides(this.mainBox, this.slides, this.slide,2000);
}
Slider.prototype.init = function () {
    this.mainBox = document.querySelector(".slides");
    this.slides = document.querySelectorAll('.slides__item');
    this.slide = document.querySelector('.slides__item');
};
function changeSlides(mainBox, slides, slide, timeout) {
        let index = 0;
        let max = slides.length;
        let styleOfWrapper = getComputedStyle(document.querySelector('.slider-container'));
        let size = parseInt(styleOfWrapper.width);
        console.log(size);
        let sliderInterval = setInterval(function () {
            mainBox.style.transition =  "transform 0.5s ease-out";
            index >= max - 1 ? false : index++;
            mainBox.style.transform = 'translateX(' + (-index * size) + 'px)';
            mainBox.addEventListener('transitionend', function () {
                slides[index].id === 'firstClone' ? index = 0 : index;
                mainBox.style.transition = 'none';
                mainBox.style.transform = 'translateX(' + (-index * size) + 'px)';
            });
        }, timeout);
    }
let sliderAuto = new Slider(".slider-container");
