/////////////////////////////////
//country
////////////////////////////////
const clickCountry = document.querySelector(".members__from")
const popupContent = document.querySelector(".popup__content")
const popupContainer = document.querySelector("#popup")
const from = document.getElementById("from").textContent
console.log(from)
//get info about country from API
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`)
    request.send()

    request.addEventListener("load", function () {

        const [data] = JSON.parse(this.responseText)
        console.log(data)
        const html =
            `<article class="country"> 
                <div class="country__img-box">
                    <img src="${data.flag}" alt="flag pic" class="country__img">
                </div>
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>  
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>`

        popupContent.insertAdjacentHTML("beforeend", html);
        popupContent.style.opacity = 1;
        console.log("data.name")
    })
}




// const showCountry = function () {
//     clickCountry.forEach((from) => {
//         from.addEventListener("click", function () {
//             getCountryData(from)
//         })
//     })
// }
// console.log(showCountry())
// showCountry("from")


// //open popup
clickCountry.addEventListener("click", function () {
    if (popupContainer.className === "popup-hidden") {
        popupContainer.className = "popup";
        popupContainer.classList.remove("popup-hidden")
        popupContent.setAttribute("style", "opacity : 1")
        getCountryData(from)
    }
})

