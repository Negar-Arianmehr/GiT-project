/////////////////////////////////
//Activities- RANDOM COLOR
////////////////////////////////
const shadow = document.getElementsByClassName("more-activities__shadow");

let randomColor = function () {
    for (i = 0; i < shadow.length; ++i) {
        const x = Math.floor(Math.random() * 80)
        const y = Math.floor(Math.random() * 60)
        const z = Math.floor(Math.random() * 250)
        const bgColor = `rgb(${x}, ${y}, ${z})`

        shadow[i].setAttribute("style", `background-color: ${bgColor}`);
        // shadow[i].getElementsByClassName("moreMembers__shadow").style.background = `${bgColor}`
    }
}
randomColor()