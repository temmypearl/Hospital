document.querySelector('.navbar-toggle').addEventListener
('click', () => document.querySelector(".nav")
.classList.toggle('show'));


function checkEligibility() {
    const age = document.getElementById('age').value;
    const healthCondition = document.getElementById('health-condition').value;
    const resultDiv = document.getElementById('result');

    let resultMessage = '';

    if (age >= 65 || healthCondition === 'yes') {
        resultMessage = 'You qualify for the vaccine!';
    } else {
        resultMessage = 'You do not qualify for the vaccine at this time.';
    }

    resultDiv.textContent = resultMessage;
}
