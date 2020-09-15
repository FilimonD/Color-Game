// generate random colors with 6 options(colored squares)
let numSquares = 6;
let colors = [];

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColor;

let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

// functions runs when page loads
init();

function init() {
  // easy and hard mode buttons event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");

      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }

    // setup squares 
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of picked color
      let clickedColor = this.style.backgroundColor;

      // compare color to picked color

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again!";

        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
    reset();
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change color of squares
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  // pick random numbers by mulitplying the length of colors array
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

// seperate function to generate random colors
function randomColor() {
  // pick a "red" from 0-255
  let r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  let g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
