let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'purple','green'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started  == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText  = `Level ${level}`;

    let randInd = Math.floor(Math.random()*3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randInd);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
};

function checkAns(idx){
    //console.log("curr level :",level)
    //let idx = level-1;

    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            // levelUp();
        }
    }   else {
        h2.innerHTML = `Highest Score : <b>${5*level}</b>  <br> Game Over ! Your level was : <b>${level}</b>  <br>Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn); 

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}