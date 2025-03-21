const mood = {
    sad: true,
    happy: false,
    dying: false
}

let message = '';

if (mood.happy) {
    message = ('I am so happy! You are doing great! I am proud of you');
} else if (mood.sad) {
    message = ('You are fine but I need more attention. Would you do your tasks to help me?');
} else if (mood.dying) {
    message = 'I am a little bit disappointed. I am so desperate for your help!';
}

document.body.innerHTML = message;

    
