const API_URL = 'https://api.adviceslip.com/advice';
const adviceButton = document.querySelector('.advice-btn');
const adviceContent = document.querySelector('.advice-content');
const adviceNumber = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');

const addQuote = res => {
    console.log(res);

    adviceNumber.innerText = `advice #${res.slip.id}`;
    advice.innerText = `"${res.slip.advice}"`;
    adviceContent.appendChild(adviceNumber);
    adviceContent.appendChild(advice);
}

const addAdvice = () => {
    adviceContent.innerText = "";

    fetch(API_URL)
        .then(res => res.json())
        .then(res => addQuote(res))
}

adviceButton.addEventListener('click', addAdvice)

