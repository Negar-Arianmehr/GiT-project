/////////////////////////////////
//scroll--sticky nav
////////////////////////////////
const bgHeader = document.querySelector(".bg-header")
const nav = document.querySelector(".nav")

const navSticky = function (entries) {
    const [entry] = entries;
    // console.log(entry)

    if (!entry.isIntersecting) {
        nav.classList.add("sticky")
        nav.classList.remove("nav--stick")
        document.querySelector(".nav__icon-img").setAttribute("style", "height : 4rem")
        // header.classList.add("noneDisplay")}
        // } else if (entries.boundingClientRect.height < 600) {
        //     // nav.classList.add("nav--stick")
    } else {
        nav.classList.remove("sticky")
        nav.classList.add("nav--stick")
        document.querySelector(".nav__icon-img").setAttribute("style", "height : 5.2rem")
    }
    // header.classList.remove("noneDisplay")
}

const headerObserver = new IntersectionObserver(navSticky, {
    root: null,
    threshold: 0,
})

headerObserver.observe(bgHeader)

/////////////////////////////////
//collapse-
////////////////////////////////
const btnMenu = document.querySelector(".menu")
const navbar = document.getElementById("main-nav")

btnMenu.addEventListener("click", function () {
    if (navbar.className === "nav--ul") {
        navbar.className = "collapse-nav"
        document.querySelector(".close").classList.remove("hidden")
        document.querySelector(".menu").classList.add("hidden")
    }
})

const btnClose = document.querySelectorAll(".close,.nav__nav-box")

for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener("click", function () {
        if (navbar.className === "collapse-nav") {
            navbar.className = "nav--ul"
            document.querySelector(".close").classList.add("hidden")
            document.querySelector(".menu").classList.remove("hidden")
        }
    })
}

/////////////////////////////////
//scroll to up
////////////////////////////////
const btnScrollUp = document.querySelector(".footer__arrow")
const upOfPage = document.querySelector(".header")

btnScrollUp.addEventListener("click", function () {
    const headerPart = upOfPage.getBoundingClientRect()
    window.scrollTo({
        left: headerPart.left,
        top: headerPart.top,
        behavior: "smooth"
        }
    )
    upOfPage.scrollIntoView({behavior: "smooth"})
})