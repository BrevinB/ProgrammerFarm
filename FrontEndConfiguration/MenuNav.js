/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Show title screen and nothing more when first booted up */
function showTitle(){
  document.getElementsById("initSound").hidden = true;
  document.getElementById("titlescreen").hidden = false;
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("title").hidden = true;
}

function volumeSettings() {

  document.getElementById("initSound").style.width = "100%";

}

function closeSoundSettings() {

  pig.entered();
  for(let i = 0; i < hay.length; i++) {
      hay[i].entered();
    }
  
  document.getElementById("initSound").style.width = "0%";
  
  if(document.getElementById("music").checked == true) {
    music = true;
    if(music == true && backgroundSound.isPlaying() == false) {
      backgroundSound.play();
    }
  } else {
    music = false;
    backgroundSound.stop();

  }

  if(document.getElementById("soundEffects").checked == true) {
    soundEffects = true;
  } else {
    soundEffects = false;
  }

}

function howToPlay() {
  document.getElementById("help").style.width = "100%";
}

function closeHowToPlay() {
  document.getElementById("help").style.width = "0%";
  document.getElementById("initSound").style.width = "100%";
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