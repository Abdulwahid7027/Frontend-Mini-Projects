const countEl = document.querySelector(".counter")

const barEl = document.querySelector(".loading-bar-front")

let idx = 0

updateNumber()

function updateNumber() {
    countEl.innerText = idx + "%"
    barEl.style.width = idx + "%"
    idx++
    if(idx < 101) {
        setTimeout(updateNumber,20)
    }
}