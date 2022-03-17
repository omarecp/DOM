//restart game btn

var restart = document.querySelector("#b")



//Grabs the squares
var squares = document.querySelectorAll('td')

//clear all the squares

function clearboard(){
  for (var i = 0; i < squares.length; i++) {
   squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearboard);
//check if its a X or O

function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O';
  }
  else {
    this.textContent = '';

  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}

//For Loop to add even listener
