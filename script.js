'use strict'

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const dispalyMessage= function(message){
    document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        dispalyMessage('no mumber')
        // document.querySelector('.message').textContent='no mumber';
        document.querySelector('body').style.backgroundColor='black'
    }
    else if(guess===secretNumber){
       dispalyMessage('correct number');
        // document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor='red';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
            document.querySelector('body').style.backgroundColor='red';
        }
        
    }
    else if(guess!==secretNumber){
        if(score>1){
            // document.querySelector('.message').textContent= guess>secretNumber ? 'too high' : 'too low';
            dispalyMessage(guess>secretNumber ? 'too high' : 'too low')
            score--;
            document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='black'
        }
        else{
            dispalyMessage('you lost')
            // document.querySelector('.message').textContent='you lost'
            document.querySelector('.score').textContent=0
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    dispalyMessage('Start guessing....')
    // document.querySelector('.message').textContent='Start guessing';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor='black'
    document.querySelector('.highscore').textContent=0;
})