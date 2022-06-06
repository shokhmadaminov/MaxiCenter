const burgerBtn = document.querySelector(".burger-btn")
const sitenavLeft = document.querySelector(".sitenav-left")
const sitenavClose = document.querySelector(".sitenav-left__close")


burgerBtn.addEventListener("click", function() {
    sitenavLeft.classList.add("transform")
    sitenavLeft.classList.remove("transform-repeat")
})
sitenavClose.addEventListener("click", function() {
    sitenavLeft.classList.remove("transform")
    sitenavLeft.classList.add("transform-repeat")
})