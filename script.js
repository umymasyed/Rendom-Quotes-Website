const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const copyQuoteBtn = document.getElementById('copy-quote');
const saveQuoteBtn = document.getElementById('save-quote');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const quoteBox = document.querySelector('.quote-box');
const backgroundAnimation = document.querySelector('.background-animation');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote(quote) {
    quoteBox.style.opacity = '0';
    quoteBox.style.transform = 'scale(0.9)';

    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `- ${quote.author}`;
        quoteBox.style.opacity = '1';
        quoteBox.style.transform = 'scale(1)';
    }, 300);
}

function copyQuote() {
    const quoteToCopy = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(quoteToCopy).then(() => {
        alert('Quote copied to clipboard!');
    });
}

function saveQuote() {
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes') || '[]');
    const currentQuote = { text: quoteText.textContent, author: quoteAuthor.textContent.slice(2) };

    if (!savedQuotes.some(quote => quote.text === currentQuote.text)) {
        savedQuotes.push(currentQuote);
        localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
        alert('Quote saved to favorites!');
    } else {
        alert('This quote is already in your favorites!');
    }
}

function toggleTheme() {
    body.classList.toggle('dark-theme');
    backgroundAnimation.classList.toggle('light-animation');
    backgroundAnimation.classList.toggle('dark-animation');
}

newQuoteBtn.addEventListener('click', () => displayQuote(getRandomQuote()));
copyQuoteBtn.addEventListener('click', copyQuote);
saveQuoteBtn.addEventListener('click', saveQuote);
themeToggleBtn.addEventListener('click', toggleTheme);

// Initial quote display
displayQuote(getRandomQuote());
