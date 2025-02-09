const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-button');

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice?t=' + new Date().getTime());
        const data = await response.json();
        adviceIdElement.textContent = data.slip.id;
        adviceTextElement.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        adviceTextElement.textContent = "Oops, something went wrong. Please try again.";
        console.error("Error fetching advice:", error);
    }
}

diceButton.addEventListener('click', fetchAdvice);

window.addEventListener('load', fetchAdvice);
