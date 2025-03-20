const quoteNumber = Math.random();
let quote = '';
if (quoteNumber >= 0 && quoteNumber < 1/3){
        quote = '“You, yourself, as much as anybody in the entire universe, deserve your love and affection.”';
    } else if (quoteNumber >= 1/3 && quoteNumber < 2/3){
        quote = '“Healing takes time, and asking for help is a courageous step.”';
    } else if (quoteNumber >= 2/3 && quoteNumber < 1){
        quote = '“Your present circumstances don’t determine where you go; they merely determine where you start.”';
    }