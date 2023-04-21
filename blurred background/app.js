const btnEl = document.querySelector(".btn")
const popupContainerEl = document.querySelector(".popup-container");
const containerEl = document.querySelector(".container")
const closeIconEl = document.querySelector(".close-btn")

btnEl.addEventListener("click",()=>{
    popupContainerEl.classList.remove("active");
    containerEl.classList.add("active");
})
closeIconEl.addEventListener("click",()=>{
    popupContainerEl.classList.add("active");
    containerEl.classList.remove("active");
})