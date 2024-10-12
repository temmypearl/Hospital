// document.querySelector('.navbar-toggle').addEventListener
// ('click', () => document.querySelector(".nav")
// .classList.toggle('show'));

function nav


function checkEligibility() {
    const age = document.getElementById('age').value;
    const annualIncome = document.getElementById('annual-income').value;
    const healthCondition = document.getElementById('health-condition').value;
    const resultDiv = document.getElementById('result');

    let resultMessage = '';

    if (age < 5 && healthCondition === "no" && annualIncome < 4500) {
        resultMessage = "Eligible for free vaccination.";
    } else {
        resultMessage = 'Not eligible for free vaccination.';
    }

    resultDiv.textContent = resultMessage;
}
