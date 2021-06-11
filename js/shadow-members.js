/////////////////////////////////
//MEMBERS- RANDOME COLOR
////////////////////////////////
const shadow = document.getElementsByClassName("moreMembers__shadow");

let randomColor = function () {
    for (i = 0; i < shadow.length; ++i) {
        const x = Math.floor(Math.random() * 205)
        const y = Math.floor(Math.random() * 50)
        const z = Math.floor(Math.random() * 150)
        const bgColor = `rgb(${x}, ${y}, ${z})`

        shadow[i].setAttribute("style", `background-color: ${bgColor}`);
        // shadow[i].getElementsByClassName("moreMembers__shadow").style.background = `${bgColor}`
    }
}
randomColor()