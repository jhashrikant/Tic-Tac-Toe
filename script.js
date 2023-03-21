console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isgameover = false;

//function to change the turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X"  //if x rha to 0 return karna warna fir X hi krdena

};

//function to check for a win
// ab kab kab win hoskta hai uska probability dekhege
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            console.log("Won");
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won the Game"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }

    })
}


//match tied logic 
function matchTied() {
    let boxtexts = document.getElementsByClassName('boxtext');
    console.log("boxtexts");
    Array.from(boxtexts).forEach(e => {
        if (e.innerText !== "" && isgameover !=true) {
            document.querySelector('.info').innerText = "Match tied";
            isgameover = true;
            console.log('match tied');

        }
    })

}


//game logic


let boxes = document.getElementsByClassName("box");  // we are using array .from kykui wo ek html collection return krega//
Array.from(boxes).forEach(element => {
    // console.log(element);   // ye element mtlb basically apna div hua div class=box wala//
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener("click", () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            console.log(turn);
            audioTurn.play();
            checkWin();
            matchTied();


            // win hua ky dekho if nai to below code execute
            if (isgameover != true) {
                document.getElementsByClassName("info")[0].innerText = "Now its Turn for " + turn;
            }
            //document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            //above code me ye likha ha code me ki if gameover nai hoga then turns ko change kro warna krne la koi mtlb nai//
        }
    })

})

//In the above code isly hum isko array banate hai taki isp foreach use krske


//add event listener on reset button

document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e => {
        e.innerText = "";
    });
    turn = "X";  //ye krne se if samjo lst wala X rhega to agla reset ke bad 0 aayga isly usko X kiye
    isgameover = false;  //reset ka mytlb ki game naya start hoga reset pe clik krege to isly false
    if (isgameover != true) {
        document.getElementsByClassName("info")[0].innerText = "Now its Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    }

})