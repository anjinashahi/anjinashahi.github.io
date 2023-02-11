let menuIcon = document.getElementsByClassName("menu-bar")[0];
let navElement = document.getElementsByClassName("left")[0];
let crossIcon = document.getElementsByClassName("cross")[0];


function changeHeight() {
    navElement.style.height = "auto"
}
function disappear() {
    navElement.style.height = "0px"
}

menuIcon.addEventListener("click", e=>changeHeight(e))
crossIcon.addEventListener("click", e=> disappear(e))

