const containerEl = document.querySelector(".container")


for (i = 0; i < 30; i++) {

    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container")
    containerEl.appendChild(colorContainerEl)
    const spanEl = document.createElement("span");
    spanEl.classList.add("spanC")
    colorContainerEl.appendChild(spanEl);

}
const colorContainerEls = document.querySelectorAll(".color-container")



function randomColor() {
    const chars = "0123456789abcdef"
    const charLength = 6;
    let colorCode = ""
    for (i = 0; i < charLength; i++) {
        const randomN = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomN, randomN + 1)
    }
    return colorCode;
}
function generateColor() {
    colorContainerEls.forEach((colorContainerEl, spanEl) => {
        const newColorCode = randomColor();
        console.log(newColorCode)
        colorContainerEl.style.backgroundColor = "#" + newColorCode
        console.log(colorContainerEl.childNodes[0].classList.value)
        const spanText = colorContainerEl.childNodes[0]
        spanText.style.backgroundColor = "#" + newColorCode
        // spanText.style.opacity = ".5"
        spanText.innerText = "#" + newColorCode
    })

}
generateColor()
