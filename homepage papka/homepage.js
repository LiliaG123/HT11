const quotes = [
   "You, yourself, as much as anybody in the entire universe, deserve your love and affection",
   "Healing takes time, and asking for help is a courageous step",
   "Your present circumstances don’t determine where you go; they merely determine where you start."
];
let quoteIndex = 0;
function changeQuote() {
    document.getElementById('quote')
        .innerHTML = quotes[quoteIndex];
    quoteIndex = (quoteIndex++) % quotes.length;
    changeQuote();
    setInterval(changeQuote, 60000);
}