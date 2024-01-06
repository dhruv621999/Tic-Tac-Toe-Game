let boxes=document.querySelectorAll(".box"); //array!
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true;

//2D array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    count=0;
    turnO=true;

    for(let box of boxes)
    {
        box.classList.remove("player-o");
        box.classList.remove("player-x");
    }
    
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    /*click not Click*/
    box.addEventListener("click", () => { 
        count++;
        // console.log("box was clicked");
        if(turnO)
        {
            //playerO
            box.innerText="O";

            box.classList.add("player-o");

            turnO=false;
        }
        else
        {
            //playerX
            box.innerText="X";

            box.classList.add("player-x");

            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";//emptied
    }
};

const showWinner = (winner) => {
    if(winner=="")
        msg.innerText=`Game Was A Tie`;
    else
        msg.innerText=`Congratulation, Winner is ${winner}`;

    msgContainer.classList.remove("hide");

    disableBoxes();
}

const checkWinner = () =>
{
    for(let pattern of winPatterns)//pattern is array
    {
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" & pos3Val!="")//checking for empty!
        {
            if(pos1Val===pos2Val&&pos2Val===pos3Val)
            {
                console.log(count);
                // console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }

            else if(count===9)
            {
                console.log(count);
                showWinner("");
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);