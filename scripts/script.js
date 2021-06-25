'use strict';
const computerScore=document.getElementById('computer-score');
const userScore=document.getElementById('user-score');
const gameStartContainer=document.getElementById('game-start');
const gameResultContainer=document.getElementById('game-result');
const btnGameStart=document.getElementById('btn-game-start');
const computerChoice=document.getElementById('computer-choice');
const userChoice=document.getElementById('user-choice');
const result=document.getElementById('result');



let cScore=0;
let pScore=0;
let answer='';
let g=false;

//functions
const gameLogic=function(userSelected,computerSelected){
    if(userSelected===computerSelected){
        answer='draw';
        updateDom(userSelected,computerSelected);
        return;
    }

    else if(userSelected==='rock'){
        if(computerSelected==='paper'){
            cScore++;
            answer='You lose';
            updateDom(userSelected,computerSelected);
            return;
        }
        else{
            pScore++;
            answer='You won';
            updateDom(userSelected,computerSelected);
        }
    }

    else if(userSelected==='paper'){
        if(computerSelected==='scissors'){
            cScore++;
            answer='You lose';
            updateDom(userSelected,computerSelected);
            return;
        }
        else{
            pScore++;
            answer='You won';
            updateDom(userSelected,computerSelected);
        }
    }

    else if(userSelected==='scissors'){
        if(computerSelected==='rock'){
            answer='You lose';
            cScore++;
            updateDom(userSelected,computerSelected);
            console.log(userSelected);
            console.log(computerSelected);
            return;
        }
        else{
            answer='You won';
            pScore++;
            updateDom(userSelected,computerSelected);
            console.log(userSelected);
            console.log(computerSelected);
        }
    }
}

 const  check=function(input){
     if(g===true){
            const userSelected=input;
            const choices=['rock','paper','scissors'];
            let num=Math.trunc(Math.random()*3);
            const computerSelected=choices[num];
            gameLogic(userSelected,computerSelected);
       }
    }      





const updateDom=function(userSelected,computerSelected){
    computerScore.innerText=cScore;
    userScore.innerText=pScore;
    computerChoice.innerHTML=`Computer Choose <strong>
        ${computerSelected.toUpperCase()}</strong>`;
    userChoice.innerHTML=`User Choose <strong>
        ${userSelected.toUpperCase()}</strong>`;    
    result.innerText=answer;    
}



///Game Start function
const gameStart=function(){
    if(g===true){
    computerScore.innerText=cScore;
    userScore.innerText=pScore;
    gameResultContainer.classList.remove('hidden');
    gameStartContainer.classList.add('hidden');
}
};


const gameClicked=function(){
    return g=true;
}

btnGameStart.addEventListener('click',gameStart);


///calling functions