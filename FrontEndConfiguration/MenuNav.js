let levelsUnlocked = false; //keep levels 5-8 unlocked when player gets wrong answer after getting 1150+ points

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("initSound").style.width = "0%";
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";

  if (level1 == true || level2 == true || level3 == true || level4 == true || level5 == true || level6 == true || level7 == true || level8 == true)
    document.getElementById("title").hidden = true;
}

function volumeSettings() {

  document.getElementById("initSound").style.width = "100%";

}

function closeSoundSettings() {

  //pig.entered();
  for(let i = 0; i < hay.length; i++) {
      hay[i].entered();
    }
  
  document.getElementById("initSound").style.width = "0%";
  
  if(document.getElementById("music").checked == true) {
    music = true;
    if(music == true && backgroundSound.isPlaying() == false) {
      backgroundSound.play();
      backgroundSound.loop();
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

   } else if(level5Check == true) {
    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer5;
   } else if(level6Check == true) {
    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer6;
   } else if(level7Check == true) {
    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer7;
   } else {
    document.getElementById("correctAnswer").innerHTML = "Correct Answer was : " + answer8;
   }
  
  
}

function playAgain() {
  document.getElementById("loseAlert").style.width = "0%";
  
}

function closeLevelLocked()
{
  document.getElementById("levelLocked").style.width="0%";
  document.getElementById("initSound").style.width="100%";
}

function levelOneSelected() {
  
  level2=false;
  level3=false;
  level4=false;
  level5 = false;
  level6 = false;
  level7 = false;
  level8 = false;
  return level1 = true;

}

function levelTwoSelected() {
  level1 = false;
  level3 = false;
  level4 = false;
  level5 = false;
  level6 = false;
  level7 = false;
  level8 = false;
  return level2 = true;
}

function levelThreeSelected() {
  level1 = false;
  level2 = false;
  level4 = false;
  level5 = false;
  level6 = false;
  level7 = false;
  level8 = false;
  return level3 = true;
}

function levelFourSelected() {
  level1 = false;
  level2 = false;
  level3 = false;
  level5 = false;
  level6 = false;
  level7 = false;
  level8 = false;
  return level4 = true;
}

function levelFiveSelected() {
  if (total >= 1150 || levelsUnlocked === true)
  {
    levelsUnlocked = true;
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = false;
    level6 = false;
    level7 = false;
    level8 = false;
    return level5 = true;
  } else {
    openLevelLocked()
  }

}

function levelSixSelected() {
  if (total >= 1150 || levelsUnlocked === true)
  {
    levelsUnlocked = true;
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = false;
    level5 = false;
    level7 = false;
    level8 = false;
    return level6 = true;
  } else {
    openLevelLocked()
  }
}

function levelSevenSelected() {
  if (total >= 1150 || levelsUnlocked === true)
  {
    levelsUnlocked = true;
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = false;
    level5 = false;
    level6 = false;
    level8 = false;
    return level7 = true;
  } else {
    openLevelLocked()
  }
}

function levelEightSelected() {
  if (total >= 1150 || levelsUnlocked === true)
  {
    levelsUnlocked = true;
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = false;
    level5 = false;
    level6 = false;
    level7 = false;
    return level8 = true;
  } else {
    openLevelLocked()
  }
}

function openLevelLocked()
{
  if (levelsUnlocked === false && total < 1150) //if levels 5-8 haven't been unlocked yet AND total is less than 1150, display locked levels
    document.getElementById("levelLocked").style.width="100%";
}