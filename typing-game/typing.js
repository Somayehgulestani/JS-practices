const setting = document.querySelector(".settings-btn");
const setBox = document.querySelector(".settings");
const optionsList = document.getElementById("difficulty");
const input = document.getElementById("text");
const Tcontainer = document.querySelector(".time-container");
const time = document.getElementById("time");
const Scontainer = document.querySelector(".score-container");
const score = document.querySelector("#score");
const endGame = document.querySelector(".end-game-container");
const word = document.getElementById("word");
const textH2 = document.querySelector("h2");



let words = [
    'computer',
    'document',
    'people',
    'neighborhood',
    'issued',
    'describes',
    'understand',
    'impact',
    'significant',
    'community',
    'frequently',
    'underestimated',
    'remarkable',
    'university',
    'probably',

];



let times = {
    easy:15,
    medium:10,
    hard:5
}

let currentword =0 ;
let timedown ;
let timer;

function startGame() {
    word.textContent = words[0];
}

function WordUpdate(i) {
    word.textContent = words[i];
    
}

function check() {
     
    if (input.value.trim() === words[currentword]) {
        currentword++;
        input.value ="";
        increaseScore();
      clearInterval(timer);
         timedown = times[optionsList.value];
         startTime();
    }
    if (currentword === words.length) {
        clearInterval(timer);
        endGame.style.display = "block" 
endGame.innerHTML="<h1>Congratulation, you have finished the game.</h1>";
    } 
   WordUpdate(currentword);
}

function increaseScore() {
    const checkScore = Number(score.textContent);
    score.textContent =checkScore + 1;
    
}


function startTime() {
    //حذف تایمر در حال اجرا و جلوگیری از اجرای دو تایمر
    clearInterval(timer)
    timer = setInterval(()=>{
    time.textContent = timedown + "s";
    if (timedown <= 0) {
        clearInterval(timer);
        EndGame();
    }else{
        timedown--;
    }
    }, 1000);
}

function level() {
 timedown = times[optionsList.value]; 
 time.textContent = timedown +"s";
 startTime();
}

function EndGame() {
    endGame.style.display = "block" 
endGame.innerHTML="<h1>Time ran out</h1>";
const small = document.createElement("p");
small.textContent = `your score is ${score.textContent}`;
endGame.appendChild(small);

const again = document.createElement("button");
again.textContent = "play again";
endGame.appendChild(again);
again.addEventListener("click", ()=>{
location.reload();
});
}



window.addEventListener("DOMContentLoaded", ()=>{
startGame();
});

input.addEventListener("focus",()=>{
level();

});
input.addEventListener("input",()=>{
check();

});


let isShow = true;
setting.addEventListener("click", ()=>{
    if (isShow) {
        setBox.classList.add("hide");
    }else{
        setBox.classList.remove("hide")
    }
    isShow =!isShow;
});