var numSquares = 6; // mode in game easy = 3, hard = 6 todo ultra = 9
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll('.square');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var h3 = document.querySelector('h3');
// Winning Color Square
var goalSquare = pickColor();
// update the HTML content to show the picked color from array and inject into span
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = goalSquare;

// buttons for hard and easy mode select them
var modeBtns = document.querySelectorAll('.mode');
//loop through btns 
for(var i = 0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener('click', function(){
    modeBtns[0].classList.remove('selected');
    modeBtns[1].classList.remove('selected');
    this.classList.add('selected');
    //if easy clicked set numSquares and vice versa - ternary operator!
    this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
    reset();
  });
}

function reset() {
  h1.style.backgroundColor = 'steelblue';
  h3.style.backgroundColor = 'steelblue';
  // reset the button text
  refreshButton.textContent = 'New Colors🌋'
  // reset the span message
  message.textContent = '';
  // generate all new colors
  colors = generateRandomColor(numSquares);
  // pick a new goal color
  goalSquare = pickColor();
  // change the title to show the new goal 
  colorDisplay.textContent = goalSquare;
  // change the color of the user pick squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      //show the squares everytime with block
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
    // initial colors on the squares
  }
}

//Select the refresh button for new game, add event listener
var refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', function(){
  // reset heading h1 and h3
  h1.style.backgroundColor = 'steelblue';
  h3.style.backgroundColor = 'steelblue';
  // reset the button text
  this.textContent = 'New Colors🌋'
  // reset the span message
  message.textContent = '';
  // generate all new colors
  colors = generateRandomColor(numSquares);
  // pick a new goal color
  goalSquare = pickColor();
  // change the title to show the new goal 
  colorDisplay.textContent = goalSquare;
  // change the color of the user pick squares
  for (var i = 0; i < squares.length; i++) {
    // initial colors on the squares
    squares[i].style.backgroundColor = colors[i];

  }
});

// style the sqaures
for (var i = 0; i < squares.length; i++) {
  // initial colors on the squares
  squares[i].style.backgroundColor = colors[i];

  // add the click listeners to the squares
  squares[i].addEventListener('click', function(){
    // get the color of the clicked square
    var userPick = this.style.backgroundColor;
    // compare this with the goal square
    if(userPick === goalSquare) {
      message.textContent = 'Correct - You clever MOFO!';
      refreshButton.textContent = 'Play Again?';
      colorChanger(goalSquare);
      h1.style.backgroundColor = goalSquare;
      h3.style.backgroundColor = goalSquare;
    } else {
      // if you pick the wrong color remvove the option from the user
      this.style.backgroundColor = '#232323';
      message.textContent = 'Try Again - Dummy!'
    }
  });
}

// num is the number of random colors to generate - 3, 6 or 9
function generateRandomColor(num) {
  // make an array
  var array = []
  
  // loop num many times
  for(var i = 0; i < num; i++) {
    // push random number into array
    array.push(randomRGBval());

  }
  // return concat number to create RGB
  return array;
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

// function to create random rgb values
function randomRGBval() {
  // pick random red from 0 - 250
  var red = Math.floor(Math.random() * 256);
  // pick random green from 0 - 250
  var green = Math.floor(Math.random() * 256);  
  // pick random blue from 0 - 250
  var blue = Math.floor(Math.random() * 256);
  //format variables into correct string
  var string = 'rgb(' + red + ', '+ green + ', ' + blue + ')';
  return string;  
}