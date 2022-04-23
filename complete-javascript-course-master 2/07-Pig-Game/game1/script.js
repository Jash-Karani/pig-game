'use strict';

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activePlayer = document.querySelector('.player--active');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
let sum_player_current_0,sum_player_current_1,sum_player_total_0,sum_player_total_1;
let winner ='0';
/////////////////////////////////////////////////
reset();
///////////////////////////////////////////////
function reset(){
    sum_player_current_0=0;
    sum_player_total_0 =0
    sum_player_current_1=0;
    sum_player_total_1 =0;

    score0El.textContent=0;
    score1El.textContent=0;
    currentScore0El.textContent=0;
    currentScore1El.textContent=0;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${winner}`).classList.remove('player--winner');
    player1.classList.remove('player--active')
    player0.classList.add('player--active')
}


////////////////////////////////////////////////
btnRoll.addEventListener('click',function(){
    if( sum_player_total_0<100 && sum_player_total_1<100){
        const dice = Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${String(dice)}.png`;

        if(!(dice===1)){
            if(current_player()==0){
                
                sum_player_current_0=sum_player_current_0+dice;
                currentScore0El.textContent=sum_player_current_0;
                player_winner();
            }
            else{
                sum_player_current_1=sum_player_current_1+dice;
                currentScore1El.textContent=sum_player_current_1;
                player_winner();
            }
        }

        else if(dice===1){
            player_switch();
        }

    }
})
////////////////////////////////////////////////////////
btnHold.addEventListener('click',function(){
    if(current_player()===0 && sum_player_total_0<100 && sum_player_total_1<100){
        sum_player_total_0 = sum_player_total_0 + sum_player_current_0;
        score0El.textContent = sum_player_total_0;
        player_winner();
        player_switch();        
    }
    else if(current_player()===1 && sum_player_total_0<100 && sum_player_total_1<100){
        sum_player_total_1 = sum_player_total_1 + sum_player_current_1;
        score1El.textContent = sum_player_total_1;
        player_switch();
        player_winner();
    }
})
//////////////////////////////////////////////////////////////
btnNew.addEventListener('click',function(){
    reset();
})
///////////////////////////////////////////////////////////////
const player_switch = function(){
    if(current_player()===0){
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
        sum_player_current_0=0;
        currentScore0El.textContent=sum_player_current_0;
    }
    else{
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        sum_player_current_1=0;
        currentScore1El.textContent=sum_player_current_1;
    }
}
/////////////////////////////////////////////////////////
const current_player = function(){
    if(document.querySelector('.player--active').classList.contains('player--0')){
        return(0)
    }
    else{
        return(1)
    }
}
//////////////////////////////////////////////////////////
const player_winner = function(){
    console.log(1);
    if(sum_player_total_0>=100){
        console.log('first')
        player0.classList.add('player--winner');
        winner='0';
    }
    else if(sum_player_total_1>=100){
        console.log('second')
        player1.classList.add('player--winner')
        winner='1';
    }
}