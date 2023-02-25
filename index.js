const billInput = document.getElementById("bill-id")
const peopleInput = document.getElementById("number-of-people-id")
const reset = document.querySelector(".reset")
const fivePercent = document.querySelector(".five-percent")
const tenPercent = document.querySelector(".ten-percent")
const fifteenPercent = document.querySelector(".fifteen-percent")
const twentyfivePercent = document.querySelector(".twenty-five-percent")
const fiftyPercent = document.querySelector(".fifty-percent")
const tipAmount = document.querySelector(".tip-amount")
const totalAmount = document.querySelector(".total-amount")
const custom = document.querySelector(".custom")

fivePercent.addEventListener("click", () =>{
    tipAmount.innerHTML = (billInput.value * parseInt('5') / 100).toFixed(2)
})

tenPercent.addEventListener("click", () =>{
    tipAmount.innerHTML = (billInput.value * parseInt('10') / 100).toFixed(2)
})

fifteenPercent.addEventListener("click", () =>{
    tipAmount.innerHTML = (billInput.value * parseInt('15') / 100).toFixed(2)
})

twentyfivePercent.addEventListener("click", () =>{
    tipAmount.innerHTML = (billInput.value * parseInt('25') / 100).toFixed(2)
})

fiftyPercent.addEventListener("click", () =>{
    tipAmount.innerHTML = (billInput.value * parseInt('50') / 100).toFixed(2)
})

custom.addEventListener("input", () =>{
    tipAmount.innerHTML = (billInput.value * custom.value / 100).toFixed(2)
})

peopleInput.addEventListener("input", () =>{
    totalAmount.innerHTML = (tipAmount.innerHTML * peopleInput.value).toFixed(2)
})

reset.addEventListener('click', () =>{
    tipAmount.innerHTML = '0.00'
    totalAmount.innerHTML = '0.00'
    billInput.value = '0'
    peopleInput.value = '0'
})
