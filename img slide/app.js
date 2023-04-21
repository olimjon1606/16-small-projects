const nextEl = document.querySelector(".next")
const prevEl = document.querySelector(".prev")
const imageContainerEl = document.querySelector(".img-container")
const imgsEl = document.querySelectorAll("img")
let current = 1
let timeout
nextEl.addEventListener("click", () => {
    current++
    clearTimeout(timeout)
    updateImg()
})
prevEl.addEventListener("click", () => {
    current--
    clearTimeout(timeout)
    updateImg()
})
updateImg()
function updateImg() {
    if (current > imgsEl.length)
        current = 1
    else if (current < 1)
        current = imgsEl.length
    imageContainerEl.style.transform = `translateX(-${(current - 1) * 500}px)`

    timeout = setTimeout(() => {
        current++
        updateImg()
    }, 3000)
}