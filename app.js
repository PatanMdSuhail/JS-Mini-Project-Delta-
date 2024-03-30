let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => { // keypress is used to start the game when a user press a key on document
    if(started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) { // gameFlash works when user press a button it will flash white
    btn.classList.add("gameflash");
    setTimeout(() => { // Here setTimeout is used to flash the button in fraction of seconds
        btn.classList.remove("gameflash");
    },200);
}

function userFlash(btn) { // userFlash works when user press a button it will flash green
    btn.classList.add("userflash");
    setTimeout(() => { // Here setTimeout is used to flash the button in fraction of seconds
        btn.classList.remove("userflash");
    },200);
}


function levelUp() {
    userSeq = [];
    level++; // the level is increased bt +1
    h2.innerText = `level ${level}`; // 
    

    //random btn choose

    let randIdx = Math.floor(Math.random() *3); // it will give  0 t0 3 which we can assume as btn index
    let randColor = btns[randIdx]; // btns[randIdx] stores the value of random generated index in randomColor
    let randBtn = document.querySelector(`.${randColor}`); // randBtn takes the value randomColor and make the value into class ex:- btns[3] stored in
    // random color  randBtn takes and make it as .purple 
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn); // btnFlash takes value from randBtn as above shown .purple it will make flash the purple button for(200ms)
}

function checkAns(idx) {
    //console.log("curr level : ", level);


    if(userSeq[idx] === gameSeq[idx]) {
        // console.log("Same Value")
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }

    }else {
        h2.innerHTML = `Game Over!😭 <br> Your score was 😊(${level}) <br> Press any key to start a new game😍.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}


function btnPress() {
   //console.log(this);
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   //console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}