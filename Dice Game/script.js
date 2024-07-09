'use strict';

const score0EL = document.querySelector('#score--0')
const score1EL = document.querySelector('#score--1')
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player1El = document.querySelector('player--0')
const player2El = document.querySelector('player--1')

let CurrentScore = 0;
let activePlayer = 0;
const scores = [0,0];

score0EL.textContent = 0;
score1EL.textContent = 0;

diceEL.classList.add('hidden');

btnRoll.addEventListener
('click', function()
{
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;


    if(dice == 1)
    {
        CurrentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = CurrentScore;
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')

        if(activePlayer == 0)
            activePlayer = 1
        else
            activePlayer = 0;
    }
    else
    {
        CurrentScore +=dice;
        document.getElementById(`current--${activePlayer}`).textContent = CurrentScore;
    }
});

btnHold.addEventListener
('click', function()
{
    if(activePlayer == 0)
    {
        scores[0] += CurrentScore;
        score0EL.textContent = scores[0];
        CurrentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = CurrentScore;
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')

        if(scores[0] > 20)
        {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            
        }

        activePlayer = 1;

        if(scores[0] > 20)
        {
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
    
    }
    else
    {
        scores[1] += CurrentScore;
        score1EL.textContent = scores[1];
        CurrentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = CurrentScore;

        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')

        if(scores[1] > 20)
        {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        }

        activePlayer = 0;

        if(scores[1] > 20)
        {
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
    }
})


btnNew.addEventListener
('click', function()
{
    scores[0]=0;
    scores[1]=0;

    score0EL.textContent = 0;
    score1EL.textContent = 0;

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;

    activePlayer = 0;    
    document.querySelector('.player--0').classList.add('player--active')
})
