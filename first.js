let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset-btn");
let newGameBtn=document.querySelectorAll("#new-btn");
let msgContainer=document.querySelectorAll(",msg-container");
let resetBtmsg=document.querySelectorAll(",msg");

let turnO = true;

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

const resetGame =() => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("Click",()=>{
        if (turnO){
            box.innerText ="O";
            turnO=false;
        } else{
            box.innerText ="x"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
    
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const resetBtn = document.getElementById("reset");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winner = getWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = You chose: ${userChoice};
    computerChoiceDisplay.textContent = Computer chose: ${computerChoice};
    winnerDisplay.textContent = Result: ${winner};
  });
});

function getWinner(user, computer) {
  if (user === computer) return "It's a draw!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win 🎉";
  } else {
    return "Computer wins 💻";
  }
}

resetBtn.addEventListener("click", () => {
  userChoiceDisplay.textContent = "You chose: -";
  computerChoiceDisplay.textContent = "Computer chose: -";
  winnerDisplay.textContent = "Result: -";
});;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
