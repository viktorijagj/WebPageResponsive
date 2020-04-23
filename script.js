// Function for hamnurger Menu
function hamburgerMenu(e) {
    var menu = document.getElementById("navClick");
    if (menu.className === "nav-menu") {
        menu.className += " resposive-menu";
    }
    else {
        menu.className = "nav-menu";
    }
    
    e.preventDefault();
}

// Slider
const sliderElements = document.querySelector('.carousel-elements');

//Makes an array from the slides
const slides = Array.from(sliderElements.children);
const nextSlide = document.querySelector('.btn-right');
const prevSlide = document.querySelector('.btn-left');
const navSlide = document.querySelector('.carousel-nav');
const navs = Array.from(navSlide.children);

//Take the size of the images/slides
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//Order the slides one after another function
const slidePosition = function(slide, index){
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(slidePosition);

//Function for moving left or right

const moveSlide = (sliderElements, currentSlideImg,targetSlideImg)=>{

    sliderElements.style.transform = 'translateX(-'+ targetSlideImg.style.left +')';
    currentSlideImg.classList.remove('current');
    targetSlideImg.classList.add('current');
}

const updateNavs = (currentDot,target)=>{
    currentDot.classList.remove('current');
    target.classList.add('current');
}

const hideShowArrows = (slides,nextSlide, prevSlide, index)=>{
    
    if(index === 0){
        prevSlide.classList.add('ishidden');
        nextSlide.classList.remove('ishidden');
    }else if(index === slides.length -1){
        prevSlide.classList.remove('ishidden');
        nextSlide.classList.add('ishidden');
    }else {
        prevSlide.classList.remove('ishidden');
        nextSlide.classList.remove('ishidden');
    }
}

//Use the next Button to move to the right

nextSlide.addEventListener('click', e=>{
    const currentSlideImg = sliderElements.querySelector('.current');
    const nextSlideImg = currentSlideImg.nextElementSibling;
    const currentDot = navSlide.querySelector('.current');
    const nextDot = currentDot.nextElementSibling;
    moveSlide(sliderElements, currentSlideImg, nextSlideImg);
    updateNavs(currentDot, nextDot);
    const nextIndexSlide = slides.findIndex(slide => slide === nextSlideImg);
    hideShowArrows(slides,nextSlide,prevSlide, nextIndexSlide);

})
//Use the prev Button to move to left
prevSlide.addEventListener('click', e=>{
    const currentSlideImg = sliderElements.querySelector('.current');
    const prevSlideImg = currentSlideImg.previousElementSibling;
    const currentDot = navSlide.querySelector('.current');
    const prevtDot = currentDot.previousElementSibling;
    moveSlide(sliderElements, currentSlideImg,prevSlideImg);
    updateNavs(currentDot, prevtDot);
    const prevIndexSlide = slides.findIndex(slide => slide === prevSlideImg);
    hideShowArrows(slides,nextSlide,prevSlide, prevIndexSlide);
 
})
//Navigation Dots
navSlide.addEventListener('click', e=>{
    const target = e.target.closest('button');
    if(!target) return; //stop the function if no target

    const currentSlideImg = sliderElements.querySelector('.current');
    const currentDot = navSlide.querySelector('.current');
    //find index of the dots, findIndex works like forEach
    const index = navs.findIndex(nav=>nav ===target);

    //with target index will be found the targetSlide
    const targetSlide = slides[index];
  
    moveSlide(sliderElements,currentSlideImg, targetSlide);
    updateNavs(currentDot, target);
    hideShowArrows(slides,nextSlide,prevSlide,index);

    
})