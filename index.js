//Nav bar background appear on scroll
var headBar = document.querySelector("#headBar");
window.addEventListener("scroll", function(){
    headBar.classList.toggle("sticky", window.scrollY > 0);
});
//Menu button on responsive
menuBtnClicked = () => {
    var menuBtn = document.getElementById("menu-btn");
    var home = document.getElementById("home");
    home.classList.toggle("active");
    menuBtn.classList.toggle("change");
    headBar.classList.toggle("active");
}



// Changing Name
let names = ["Graphic Designer", "Digital Artist", "Creator", "Developer", "Programer"];

const changingName = document.getElementById("name");
changeName = () => {
    setTimeout(() =>{
        changingName.innerHTML = "Graphic Designer";}, 3000);
    setTimeout(() =>{
        changingName.innerHTML = "Student";}, 6000);
    setTimeout(() =>{
        changingName.innerHTML = "Web Developer";}, 9000);
    setTimeout(() =>{
        changingName.innerHTML = "Programer";}, 12000);
    }
changeName();
setInterval(changeName, 12000);


//Hire me
hireMe = () =>{
    alert("Fool, You don't deserve me. XD")
}

// Other Names
function otherNames(){
    document.querySelector('.honourable-names').classList.toggle('honourable-names-active');
    if(document.querySelector('.honourable-names').classList.contains('honourable-names-active')){
    document.querySelector('.other-names').classList.add('other-names-active');
    }
    else {document.querySelector('.other-names').classList.remove('other-names-active');}
    }



// slider
const slides = document.getElementsByClassName("slide"); // this selection is a live collection; any changes in DOM is updated in the variable unlike querySelectors
console.log(slides);
const btnLeft = document.querySelector(`.btn-left`);
const btnRight = document.querySelector(`.btn-right`);

let currentSlideIndex = 0;
let lastSlideIndex = slides.length - 1;

// go to a slide;
function goToSlide(slideIndex) {
    [...slides].forEach((s, i) => {
        s.style.transform = `translateX(${130 * (i - slideIndex)}%)`
    })
    currentSlideIndex = slideIndex;
    readyNextSlide();
}
goToSlide(currentSlideIndex);

// make ready the next slide if current slide is the first or the last slide
function readyNextSlide() {
    // if currentSlide is the last slide, shift the first slide to the end
    if (currentSlideIndex === lastSlideIndex - 1) {
      slides[lastSlideIndex].insertAdjacentElement("afterend", slides[0]);
      slides[lastSlideIndex].style.transform = `translateX(${240}%)`;
      currentSlideIndex--; //this is because current slide is now the second last slide
    }
    // if currentSlide is the first slide, shift the last slide to the beginning
    if (currentSlideIndex === 1) {
        slides[0].insertAdjacentElement("beforebegin", slides[lastSlideIndex]);
        slides[0].style.transform = `translateX(-${240}%)`;
        currentSlideIndex++; //this is because current slide is now the second slide
    }
}

let middleSlideIndex = 1;

// put the last slide in the beginning; ('if' condition is not necessary but providing if condition is future proof if user sets the initial slide to be shown as the last slide )

// shift all slides left or right based on direction provided
function shiftSlides(direction) {
    direction ? currentSlideIndex++ : currentSlideIndex--
    if (currentSlideIndex === lastSlideIndex || currentSlideIndex === 0) readyNextSlide();
    goToSlide(currentSlideIndex);
    
    for(let i = 0; i < slides.length; i++ ){
        if(slides[i].classList.contains('active')){
            slides[i].classList.remove('active');
        }
    }
    slides[currentSlideIndex].classList.add('active');
}

//button click events
btnRight.addEventListener("click", shiftSlides.bind(null, 1));
btnLeft.addEventListener("click", shiftSlides.bind(null, 0));

