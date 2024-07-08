
let winScore = document.querySelector(".winScore");
let randomNum = document.querySelector(".randomNum");
let num = document.querySelector(".num");
let loseScore = document.querySelector(".loseScore");

let winScoreSpan = 0;
let loseScoreSpan = 0;
let numSpan = 0;
let randomNumSpan = 0;

let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
let image4 = document.querySelector(".image4");

function RandomNum() {
    return Math.floor(Math.random() * 12  );
}

image1.addEventListener("click", function(){
    add(RandomNum());
});

image2.addEventListener("click", function(){
    add(RandomNum());
});

image3.addEventListener("click", function(){
    add(RandomNum());
});

image4.addEventListener("click", function(){
    add(RandomNum());
});

function add(number) {
    numSpan += number;
    num.textContent = numSpan;
    gameStart();
}

function gameStart() {
    if (numSpan === randomNumSpan) {
        winScoreSpan++;
        resetGame();
    } else if (numSpan > randomNumSpan) {
        loseScoreSpan++;
        resetGame();
    }
    dom();
}

function random() {
    randomNumSpan = Math.floor(Math.random() * 150);
    randomNum.textContent = randomNumSpan;
}

random();

function reset() {
    winScoreSpan = 0;
    loseScoreSpan = 0;
    numSpan = 0;
    dom();
}

function resetGame() {
    numSpan = 0;
    num.textContent = numSpan;
    random();
}

function dom() {
    winScore.textContent = winScoreSpan;
    loseScore.textContent = loseScoreSpan;
    num.textContent = numSpan;
    randomNum.textContent = randomNumSpan;
}