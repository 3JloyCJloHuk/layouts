const slides = document.querySelectorAll('.background-main-white'),
      left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      cricles = document.querySelectorAll('.cricle');

let index = 0;

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('active-main');
    }
    slides[n].classList.add('active-main');
}

const activeCricle = n => {
    for (let cricle of cricles) {
        cricle.classList.remove('active-cricle');
    }
    cricles[n].classList.add('active-cricle');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeCricle(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const backSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

right.addEventListener('click', nextSlide);
left.addEventListener('click', backSlide);
