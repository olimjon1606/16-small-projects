const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');
const rem = 50
textareaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = rem - textareaEl.value.length;

}