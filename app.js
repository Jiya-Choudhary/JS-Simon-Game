let userSeq = [];
let gameSeq= [];
let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    }, 250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;
    let rndmIdx = Math.floor(Math.random() * 4);
    let rndmClr = btns[rndmIdx];
    let rndmbtn = document.querySelector(`.${rndmClr}`);
    gameSeq.push(rndmClr);
    console.log(gameSeq);
    gameFlash(rndmbtn);
}
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started!");
        started = true;
        levelUp();
    }
});
function checkAns(idx){
    // console.log("Current Level:", level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
        setTimeout(levelUp, 1000);
        }
        console.log("Same");
    } else {
       h2.innerHTML = `Game Over!Your score is <b>${level}</b>.</br> Press any key to restart.`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"}, 150);
       reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}