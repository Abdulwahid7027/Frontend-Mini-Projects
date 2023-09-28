const butEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalpeopleInput = document.getElementById("numberpeople");
const totalSpan = document.getElementById("total");


function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const numberpeopleValue = totalpeopleInput.value; 
    const totalValue = (billValue * (1 + tipValue / 100)) / numberpeopleValue;
    totalSpan.innerText = totalValue.toFixed(2);
}

butEl.addEventListener("click",calculateTotal);
