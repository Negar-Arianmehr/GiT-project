const btnReadMore = document.querySelector(".history__read-more")
const moreText = document.querySelector("#readMore")
const addpopup = document.querySelector(".history__context")
btnReadMore.addEventListener("click", function () {
    moreText.classList.toggle("popup-hidden")
    // addStyle.setAttribute("style", "overflow-y: scroll")
    addpopup.classList.add("popup")

})