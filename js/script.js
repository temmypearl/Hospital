// document.querySelector('.navbar-toggle').addEventListener
// ('click', () => document.querySelector(".nav")
// .classList.toggle('show'));

const toggleButton = document.querySelector('.navbar-toggle');
const closeButton = document.querySelector('.navbar-close-toggle');
const nav = document.getElementById('primary-nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleButton.style.display = 'none';
    closeButton.style.display = 'block';
    closeButton.classList.add('active');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('active');
    toggleButton.style.display = 'block';
    closeButton.style.display = 'none';
});


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
