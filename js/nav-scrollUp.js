/////////////////////////////////
//scroll--sticky navScrollUp
////////////////////////////////
const bgHeader = document.querySelector(".bg-header")
const navScrollUp = document.querySelector(".navScrollUp")

const navSticky = function (entries) {
    const [entry] = entries;
    // console.log(entry)

    if (!entry.isIntersecting) {
        navScrollUp.classList.add("sticky")
        navScrollUp.classList.remove("navScrollUp--stick")
        document.querySelector(".nav__icon-img").setAttribute("style", "height : 4rem")
        // header.classList.add("noneDisplay")}
        // } else if (entries.boundingClientRect.height < 600) {
        //     // navScrollUp.classList.add("navScrollUp--stick")
    } else {
        navScrollUp.classList.remove("sticky")
        navScrollUp.classList.add("navScrollUp--stick")
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
//collapse-navScrollUp
////////////////////////////////
const btnMenu = document.querySelector(".menu")
const navbar = document.getElementById("main-navScrollUp")

btnMenu.addEventListener("click", function () {
    if (navbar.className === "navScrollUp--ul") {
        navbar.className = "collapse-navScrollUp"
        document.querySelector(".close").classList.remove("hidden")
        document.querySelector(".menu").classList.add("hidden")
    }
})

const btnClose = document.querySelectorAll(".close,.nav__nav-box")

for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].addEventListener("click", function () {
        if (navbar.className === "collapse-navScrollUp") {
            navbar.className = "navScrollUp--ul"
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