const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    fetch(`https://v6.exchangerate-api.com/v6/d3fd05cc168c58209ef5238e/latest/${currencyEl_one.value}`)
        .then((res) => res.json())
        .then(data => {
            rateEl.innerText = `1 ${currencyEl_one.value} = ${data.conversion_rates[currencyEl_two.value].toFixed(2)} ${currencyEl_two.value}`
            amountEl_two.innerText = `${(amountEl_one.value * data.conversion_rates[currencyEl_two.value]).toFixed(2)}`
        })
}
currencyEl_one.addEventListener('change', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
swap.addEventListener('click', function () {
    const temp = currencyEl_two.value
    currencyEl_two.value = currencyEl_one.value;
    currencyEl_one.value = temp;
    calculate()
})
calculate()