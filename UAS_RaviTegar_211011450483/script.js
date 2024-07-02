function openForm() {
    document.getElementById('trip-form').style.display = 'block';
}

function closeForm() {
    document.getElementById('trip-form').style.display = 'none';
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('show');
            section.classList.remove('hide');
        } else {
            section.classList.add('hide');
            section.classList.remove('show');
        }
    });
}

function closeSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.add('hide');
    section.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(initSlideshow);

    function initSlideshow(slideshow) {
        const slides = slideshow.getElementsByClassName('slide');
        const dots = slideshow.getElementsByClassName('dot');
        if (slides.length > 0) {
            slides[0].style.display = 'flex';
            dots[0].classList.add('active');
        }
    }
});

let currentSlides = {
    'cultures-slideshow': 1,
    'tourism-slideshow': 1,
    'hotel-slideshow': 1
};

function showSlides(n, slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} .slide`);
    const dots = document.querySelectorAll(`#${slideshowId} .dot`);

    if (n > slides.length) {
        currentSlides[slideshowId] = 1;
    } else if (n < 1) {
        currentSlides[slideshowId] = slides.length;
    }

    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slides[index].classList.add('fadein')
    });

    dots.forEach(dot => {
        dot.className = dot.className.replace(' active', '');
    });

    slides[currentSlides[slideshowId] - 1].style.display = 'flex';
    dots[currentSlides[slideshowId] - 1].className += ' active';
  /*   slides[0].classList.add('fadein')
    slides[1].classList.add('fadein') */
}

function currentSlide(n, slideshowId) {
    showSlides(currentSlides[slideshowId] = n, slideshowId);
    
}



