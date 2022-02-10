/* через displa: none(.noactive)  -   display: block(.active) */

const slides = document.querySelectorAll('.noactive'),
    left = document.querySelector('.left_community'),
    right = document.querySelector('.right_community');

let index = 0;

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('active'); /* */
    }
    slides[n].classList.add('active');
}



const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const backSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

right.addEventListener('click', nextSlide);
left.addEventListener('click', backSlide);