// generate random colors with 6 options(colored squares)
let colors = generateRandomColors(6);
let h1 = document.querySelector("h1");

let squares = document.querySelectorAll(".square");

let pickedColor = pickColor();

let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    // grab color of picked color
    let clickedColor = this.style.backgroundColor;

    // compare color to picked color

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

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
