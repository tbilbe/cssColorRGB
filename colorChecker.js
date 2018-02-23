var colors = [
              "rgb(8, 111, 214)",
              "rgb(8, 76, 214)",
              "rgb(198, 11, 212)",
              "rgb(128, 255, 14)",
              "rgb(8, 111, 30)",
              "rgb(95, 119, 155)",
            ]

var squares = document.querySelectorAll('.square');
var message = document.getElementById('message');
// Winning Color Square
var goalSquare = pickColor();
// update the HTML content to show the picked color from array
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = goalSquare;



for (var i = 0; i < squares.length; i++) {
  // initial colors on the squares
  squares[i].style.backgroundColor = colors[i];

  // add the click listeners to the squares
  squares[i].addEventListener('click', function(){
    // get the color of the clicked square
    var userPick = this.style.backgroundColor;
    // compare this with the goal square
    if(userPick === goalSquare) {
      message.textContent = 'Correct - You clever MOFO!'
      colorChanger(goalSquare);
    } else {
      // if you pick the wrong color remvove the option from the user
      this.style.backgroundColor = "#232323";
      message.textContent = 'Try Again - Dummy!'
    }
  });
}

function colorChanger(col) {
  // loop through the array and change the color of the squares
  for (var i = 0; i < squares.length; i++) {
    // change the color of the squares
    squares[i].style.backgroundColor = col;
  }
}

function pickColor() {
  // pick a random number
  var newColor = Math.floor(Math.random() * colors.length);
  return colors[newColor];
}