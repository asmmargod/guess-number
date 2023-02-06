// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "New Content";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 25;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//DECLARE A NUMBER THAT WILL BE USED TO PLAY BY DECLARING number
let secretNumber = Math.trunc(Math.random() * 50) + 1;

//DECLARE THE VARIABLE OF THE TEXT WITH ATTEMPTS LEFT SO IT CAN COUNT DOWN IN THE FUNCTION BELOW
let score = 20;
//variable for the highscore item
let highscore = 0;
//function to adjust contents of the message css class
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//MANIPULATE THE WHITE BOX WITH ? IN IT TO SHOW THE NUMBER GENERATED ABOVE

//ADD EVENT LISTENER THAT LISTENS FOR CLICKS AND WITHIN IT CREATE A FUNCTION WITH GAME LOGIC
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMessage("🐱‍👤No number sweetie");

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🏆 Correct Number 😎";
    displayMessage("🏆Correct number, you rock!✌");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.fontSize = "12rem";

    //SETTING THE HIGHSCORE RESULT
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //REFACTORING EXAMPLE- when guess is low or high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber
      //     ? "🔺Guess is too high! 😜"
      //     : "🔻Guess is too low 😋";
      displayMessage(
        guess > secretNumber
          ? "🔺Guess is too high! 😜"
          : "🔻Guess is too low 😋"
      );
      //count down the attempts left field
      score--;
      //display the new number for attemps left
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "You lost the game, pumpkin 🤮";
      displayMessage("You lost the game, pumpkin 🤮");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   //WHEN SCORE IS TOO HIGH
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Guess is too high! 😜 ";
  //     //count down the attempts left field
  //     score--;
  //     //display the new number for attemps left
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "You lost the game, pumpkin 🤮";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //WHEN THE SCORE IS TOO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Guess is too low! 😜 ";
  //     //count down the attempts left field
  //     score--;
  //     //display the new number for attemps left
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "You lost the game, pumpkin 🤮";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 50) + 1;

  // secretNumber = document.querySelector(".message").textContent =
  //   "Start guessing";
  displayMessage("🐱‍💻Start guessing clever clogs");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(3, 37, 131)";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").style.fontSize = "8rem";
});
