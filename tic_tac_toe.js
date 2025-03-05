let boxes =document.querySelectorAll(".box");
let container=document.querySelector(".msg-container");
let reset=document.querySelector("#reset_btn");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#message");

let turnO=true;//let suppose player O will play first
let count=0;//used to track the count

const winningPatterns=[
    [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetBtn=()=>{
    turnO=true;
    count = 0;
    enableBoxes();
    container.classList.add("hide");
};
// console.log(winningPatterns);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){//turnO===true by default
            box.innerText="O";
            turnO=false;
            box.style.color="white";//used to change the font color to white for O
            //console.log(" O box is clicked");
        }
        else{//playerX
            box.innerText="X";
            turnO=true;
            box.style.color="black";//used to change the font color to black for X
            //console.log(" X box is clicked");
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count=== 9 && !isWinner){
            gameDraw();
        }        
    });
});

const gameDraw=()=>{
    msg.innerText="Match Draw,Play Again!!";
    container.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
            box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    // console.log("hii");
     msg.innerText=`Congratulations🎉${winner} is Winner!`;
     container.classList.remove("hide");
     disableBoxes();
};

const checkWinner=()=>{
    //for(i=0;i<=8;i++)
    for(let pattern of winningPatterns){
        {
            //console.log(pattern);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val!= ""&& pos3Val !=""){
                if(pos1Val===pos2Val&&pos2Val===pos3Val){
                    //console.log(`winner is ${pos1Val}`);
                    showWinner(pos1Val);
                    return true;
                }
            } 

        }
    }
};

newGameBtn.addEventListener("click",resetBtn);
reset.addEventListener("click",resetBtn);