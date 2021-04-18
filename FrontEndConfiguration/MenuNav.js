/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function youLose() {
  document.getElementById("loseAlert").style.width = "100%";
  document.getElementById("totalScore").innerHTML = "Score : " + total;

  if(level1Check == true) {

    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer1;

  } else if(level2Check == true) {

    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer2;

  } else if(level3Check == true) {

    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer3;

  } else if(level4Check == true) {

    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer4;

  }
  
  
}

function playAgain() {
  document.getElementById("loseAlert").style.width = "0%";
  
}


function levelOneSelected() {
  
  level2=false;
  level3=false;
  level4=false;
  return level1 = true;

}

function levelTwoSelected() {
  level1 = false;
  level3 = false;
  level4 = false;
  return level2 = true;
}

function levelThreeSelected() {
  level1 = false;
  level2 = false;
  level4 = false;
  return level3 = true;
}

function levelFourSelected() {
  level1 = false;
  level2 = false;
  level3 = false;
  return level4 = true;
}