/////////////////////////////////
//country
////////////////////////////////
const clickCountry = document.querySelectorAll(".members__from")
const popupContainer = document.querySelector("#popup")
const popupContent = document.querySelector(".popup__content")
const countryCard = document.querySelector(".country")
const closePopupBtn = document.querySelector("#close")
const from = document.querySelectorAll(".from")

//get info about country from API
const getCountryData = function (country) {

    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`)
    request.send()

    request.addEventListener("load", function () {

        const [data] = JSON.parse(this.responseText)
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
    })
}

// //open popup
clickCountry.forEach((i) => i.addEventListener("click", function () {
    if (popupContainer.className === "popup-hidden") {
        popupContainer.className = "popup";
        popupContainer.classList.remove("popup-hidden")
        // countryCard.style.opacity = 1;

        closePopupBtn.classList.remove("popup-hidden")

        // from.forEach((i, n) => {
        //     console.log(i)
        //     const text = []
        //     text[n].push(i.textContent)
        //
        //     console.log(listText)
        //     // // const text = from[i].textContent
        //     // getCountryData(text)
        //     // console.log(from)
        //     // console.log(text)
        // })
    }
}))

//close popup
const closePopup = document.querySelectorAll("#close, #popup")

for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener("click", function () {
        if (popupContainer.className === "popup") {
            popupContainer.className = "popup-hidden"
            closePopupBtn.classList.add("popup-hidden")
            //remove the html part we add with getCountryData with function
            popupContent.innerHTML = ""
            popupContent.style.opacity = 0;

        }
    })
}


// closePopup.forEach( () => addEventListener("click", function () {
//     if (popupContainer.className === "popup") {
//         popupContainer.className = "popup-hidden"
//         closePopupBtn.classList.add("popup-hidden")
//         //remove the html part we add with getCountryData with function
//         popupContent.innerHTML = ""
//         // popupContainer.childNodes(countryCard)
//     }
// }))
