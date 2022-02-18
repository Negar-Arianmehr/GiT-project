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
const requestInfo = async (country) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);

        if (!response) {
            throw new Error("Something wrong");
        }
        const data = await response.json();
        renderCountry(data[0], country);
    } catch (error) {
        console.log(error)
    }
}
const renderCountry = function (data, className = '') {
    const html =
        `<article class='country'>
      <img class='country__img' src=${data.flags.png} />
      <div class='country__data'>
        <h3 class='country__name'>${data.name.common}</h3>
        <h4 class='country__region'>${data.region}</h4>
        <p class='country__row'><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
        <p class='country__row'><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class='country__row'><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>

    </article>`;

    //where have to put this html
    popupContent.insertAdjacentHTML('beforeend', html);
    popupContent.style.opacity = 1;
};
// //open popup
from.forEach((i) => i.addEventListener("click", function () {
    if (popupContainer.className === "popup-hidden") {
        popupContainer.className = "popup";
        popupContainer.classList.remove("popup-hidden")
        // countryCard.style.opacity = 1;

        closePopupBtn.classList.remove("popup-hidden")
        const text = i.textContent
        console.log(text)
        requestInfo(text)
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
