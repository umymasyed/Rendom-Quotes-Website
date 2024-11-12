const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford" },
    { text: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
    { text: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra" },
    { text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
    { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "The way I see it, if you want the rainbow, you gotta put up with the rain.", author: "Dolly Parton" },
    { text: "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.", author: "Hillary Clinton" },
    { text: "Don’t settle for what life gives you; make life better and build something.", author: "Ashton Kutcher" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The best way out is always through.", author: "Robert Frost" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "To be the best, you must be able to handle the worst.", author: "Wilson Kanadi" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The mind is everything. What you think, you become.", author: "Buddha" },
    { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { text: "Change the world by being yourself.", author: "Amy Poehler" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "What we think, we become.", author: "Buddha" },
    { text: "Yesterday you said tomorrow. Just do it.", author: "Nike" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Whatever you do, do it well.", author: "Walt Disney" },
    { text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { text: "What consumes your mind controls your life.", author: "Unknown" },
    { text: "Wherever you go, go with all your heart.", author: "Confucius" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "Live what you love.", author: "Unknown" },
    { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
    { text: "Dream without fear. Love without limits.", author: "Unknown" },
    { text: "Die with memories, not dreams.", author: "Unknown" },
    { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { text: "The harder you work, the luckier you get.", author: "Gary Player" },
    { text: "Keep going. Be all in.", author: "Bryan Hutchinson" },
    { text: "The past does not equal the future.", author: "Tony Robbins" },
    { text: "Stay foolish to stay sane.", author: "Maxime Lagacé" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { text: "Whatever you do, make it memorable.", author: "Unknown" },
    { text: "If not now, when?", author: "Eckhart Tolle" },
    { text: "Your passion is waiting for your courage to catch up.", author: "Isabelle Lafleche" },
    { text: "Impossible is for the unwilling.", author: "John Keats" },
    { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
    { text: "Try Again. Fail again. Fail better.", author: "Samuel Beckett" },
    { text: "Life is short, and it’s up to you to make it sweet.", author: "Sarah Louise Delany" },
    { text: "To be happy, we must not be too concerned with others.", author: "Albert Camus" },
    { text: "Don’t dream your life, live your dream.", author: "Unknown" },
    { text: "Light tomorrow with today.", author: "Elizabeth Barrett Browning" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "Life becomes easier when you learn to accept the apology you never got.", author: "R. Brault" },
    { text: "He who is brave is free.", author: "Seneca" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
    { text: "You are enough just as you are.", author: "Meghan Markle" }
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
