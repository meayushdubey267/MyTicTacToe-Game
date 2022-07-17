console.log("welcome to tic tac toe")
let music= new Audio("music.mp3")
let audioturn= new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")

let turn="X"
let isgameover=false

// function to change turn
const changeturn=()=>{
    return turn ==="X"?"0":"X"
}


// fuction to check for a win
const checkwin= ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}


// game logic
music.play()
let boxes= document.getElementsByClassName("box");

// The Array.from() method returns an array from any iterable object.

Array.from(boxes).forEach(element =>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
            turn=changeturn()
            audioturn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
})

// add on click listener to reset to reset button

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
            element.innerText=""
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})
