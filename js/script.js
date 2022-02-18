
/////////////////////////////////
//Reveal section
////////////////////////////////
const allSections = document.querySelectorAll(".section")

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("hidden--section")
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
})

allSections.forEach(function (section) {
    sectionObserver.observe(section)
    section.classList.add("hidden--section")
})


/////////////////////////////////
//slider
////////////////////////////////
const slides = document.querySelectorAll(".about__slide")
const btnLeft = document.querySelector(".about__slider__btn--left")
const btnRight = document.querySelector(".about__slider__btn--right")
const dotContainer = document.querySelector(".dots")

//for current slide
let curSlide = 0
const maxSlide = slides.length

//function for creat Dots
const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`)
    })
}
createDots()

//dot active
const activeDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"))

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active")
}

//function for changing slides
const goToSlide = function (slide) {
    //-100%, 0%, 100%,
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
    activeDot(0)
}

//when the web is loading go to slide with 0 index
goToSlide(0)
activeDot(0)
//Next Slide function
const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++;
    }
    goToSlide(curSlide)
    activeDot(curSlide)
}


//Previous Slide function
const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1
    } else {
        curSlide--
    }
    goToSlide(curSlide)
    activeDot(curSlide)
}


btnRight.addEventListener("click", nextSlide)
btnLeft.addEventListener("click", prevSlide)

//for using arrow left and down in keyboard...you can see the event in console with console.log
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide()
    e.key === "ArrowRight" && nextSlide()
})

//for works dots in slideershow
dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
        const {slide} = e.target.dataset
        goToSlide(slide)
        activeDot(slide)
    }
})

///////////////////////////////////////////////////////////////////
//slider for members
const cards = document.querySelectorAll(".members__card")
const btnCardLeft = document.querySelector(".members__slider__btn--left")
const btnCardRight = document.querySelector(".members__slider__btn--right")


let curCard = 0
const maxCard = cards.length

//CAeousalcards
let width = window.innerWidth
const carousalCards = function (card) {
    cards.forEach((c, i) => (c.style.transform = `translateX(${100 * (i - 2 * card)}%)`))
}
carousalCards(0)

//for Next cards
const nextCard = function () {
    if (curCard === maxCard - 1 && width <= 800) {
        curCard = 0
    }
    if (curCard === maxCard - 2 && width > 800) {
        curCard = 0
    } else {
        curCard++
    }
    carousalCards(curCard)
}

btnCardRight.addEventListener("click", nextCard)

//For previous cards
const preCard = function () {
    if (curCard === 0 && width <= 800) {
        curCard = maxCard
    }
    if (curCard === 0) {
        curCard = maxCard - 2
    } else {
        curCard--
    }
    carousalCards(curCard)
    // activeDotMember(curCard)
}

btnCardLeft.addEventListener("click", preCard)

//for using arrow left and down in keyboard...you can see the event in console with console.log
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") preCard()
    e.key === "ArrowRight" && nextCard()
})



