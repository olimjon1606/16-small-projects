const navbarEl = document.querySelectorAll(".navbar")
const bottomContainerEl = document.querySelector(".bottom-container")

console.log(navbarEl.offsetTop)
console.log(bottomContainerEl.offsetTop)
window.addEventListener("scroll", () => {
    if (window.scrollY > (bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)) {
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active")
    }
})