const scroll = document.querySelector('.scroll'),
    header_nav = document.querySelector('.header_nav');


window.addEventListener('scroll', function() {
    scroll.classList.add('scroll_active');
    header_nav.classList.add('header_navScroll')
    if (window.pageYOffset == 0) {
        scroll.classList.remove('scroll_active');
        header_nav.classList.remove('header_navScroll')
    }
})

const slides = document.querySelectorAll('.slides_noactive'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    squares = document.querySelectorAll('.square'),
    texts = document.querySelectorAll('.slide_text');

let index = 0;

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('slides_active');
    }
    slides[n].classList.add('slides_active');
}

const activeSquare = n => {
    for (let square of squares) {
        square.classList.remove('square_active');
    }
    squares[n].classList.add('square_active');
}

const activeText = n => {
    for (let text of texts) {
        text.classList.remove('text_active');
    }
    texts[n].classList.add('text_active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeSquare(ind);
    activeText(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const backSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

right.addEventListener('click', nextSlide);
left.addEventListener('click', backSlide);