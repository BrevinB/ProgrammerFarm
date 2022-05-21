var cnv;
var hay = [];
var ans = [];
var hayBaleImg, bg, pigImg, index, pig;
var pigClicked = false;
var hayClicked = false;
var pigR, pigL, pigU, pigD, hayR, hayL, hayU, hayD = false;
var level1 = false, level2 = false, level3 = false, level4 = false, level5 = false, level6 = false, level7 = false, level8 = false;
var level1Check = false, level2Check = false; level3Check = false, level4Check = false, level5Check = false, level6Check = false, level7Check = false, level8Check = false;
var total = 0;
let pigSound;
let backgroundSound;
let haySound;
var initVol = .1;
let arcadeFont;
var music = false;
var soundEffects = false;

function preload() {
  soundFormats('mp3');
  hayBaleImg = loadImage("Images/HayBale.png");
  pigImg = loadImage("Images/Pig.png");
  bg = loadImage("Images/Grass.png");
  pigSound = loadSound('sounds/pig.mp3');
  backgroundSound = loadSound('sounds/backgroundSound.mp3');
  haySound = loadSound('sounds/hay.mp3');
  arcadeFont = loadFont('Fonts/PressStart2P-Regular.ttf');

  generateQAndA();  
  generateLevelTwoQAndA();
  generateLevelThreeQAndA();
  generateLevelFourQAndA();

}


function setup() {
  backgroundSound.setVolume(initVol);
  pigSound.setVolume(.2);
  haySound.setVolume(.2);
  cnv = createCanvas(600, 600);
  cnv.position(windowWidth / 3, 100, 'fixed');
  
  //resize images
  hayBaleImg.resize(80,90);  
  pigImg.resize(80,80);
  document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
  
  pig = new Pig(0,0);
  
} 


function draw() {

  //pig = new Pig(0,0);
  background(bg);
  //Setup grid interface
  for (var x = 0; x < width; x += width / 7) {
		for (var y = 0; y < height; y += height / 7) {

			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
      line(0, y, width, y);
      
		}
  }

   //setup option slots and starting position
   let greenBlocks = color(0,128,0);
   fill(greenBlocks);
   //Top left corner
   rect(0,-5,85,90);

   //pig at starting position
   pig.display();
  
  if(level1 == true) {
    
    level1Check = true;
    newLevel();
    levelOne();
    displayQ();
    level1 = false;
       
  } else if(level2 == true) {
    
    level2Check = true;
    newLevel();
    levelTwo();
    displayQ2();
    level2 = false;
        
  } else if(level3 == true) {

    level3Check = true;
    newLevel();
    levelThree();
    displayQ3();
    level3 = false;
  
  } else if (level4 == true) {
      level4Check = true;
      newLevel();
      levelFour();
      displayQ4();
      level4 = false;
    } 

  if (total >= 1150)
  {
    if (level5 == true)
    {
     level5Check = true;
     newLevel();
     levelFive();
     level5 = false; 
    } else if (level6 == true)
    {
      level6Check = true;
      newLevel();
      levelSix();
      level6 = false;
    } else if (level7 == true)
    {
      level7Check = true;
      newLevel();
      levelSeven();
      level7 = false;
    } else {
      if (level8 == true)
      {
        level8Check = true;
        newLevel();
        levelEight();
        level8 = false;
      }
    }
  }
  else {
    ;

  }
  


 

  //display haybales
  for(i = 0; i < hay.length; i++) {

    hay[i].display();
   
  }

  for(i = 0; i < ans.length; i++) {

    ans[i].display();

  }


}

//check to see if there is a haybale where the mouse clicked and if there is perform the clicked funcion
function mousePressed() {

  for(let i = 0; i < hay.length; i++) {
    if(pigClicked) {
      break;
    }

    if(hay[i].clicked(mouseX, mouseY)) {

      index = i;
      hayClicked = true;
      break;

    }
  }

  if(hayClicked) {
    
  } else if(pig.isClicked(mouseX, mouseY)) {
      pigClicked = true;
  }

}


//Move the haybales and set them to new location
function keyPressed() {

  if(keyCode == LEFT_ARROW  || keyCode == 65 && keyIsPressed) {

    if(hayClicked) {
      hayL = true;
      if(soundEffects == true) {
        haySound.play();
      }
      hay[index].column -= 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
      hay[index].checkPigColission();
      hayL = false;
    }

    if(pigClicked) {
      pigL = true;
      pig.column -= 85;
      pig.checkBorder();
      pig.checkHayBale();
      pig.answerCheck();
      pigL = false;
      
    }

  }

  if(keyCode == RIGHT_ARROW || keyCode == 68 && keyIsPressed) {

    if(hayClicked) {
      hayR = true;
      if(soundEffects == true) {
        haySound.play();
      }
      hay[index].column += 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
      hay[index].checkPigColission();
      hayR = false;
    }

    if(pigClicked) {
      pigR = true;
      pig.column += 85;
      pig.checkBorder();
      pig.checkHayBale();
      pig.answerCheck();
      pigR = false;
    }

  }

  if(keyCode == UP_ARROW || keyCode == 87 && keyIsPressed) {

    if(hayClicked) {
      hayU = true;
      if(soundEffects == true) {
        haySound.play();
      }
      hay[index].row -= 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
      hay[index].checkPigColission();
      hayU = false;
    }

    if(pigClicked) {
      pigU = true;
      pig.row -= 85;
      pig.checkBorder();
      pig.checkHayBale();
      pig.answerCheck();
      pigU = false;
    }
  }

  if(keyCode == DOWN_ARROW || keyCode == 83 && keyIsPressed) {

    if(hayClicked) {
      hayD = true;
      if(soundEffects == true) {
        haySound.play();
      }
      hay[index].row += 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
      hay[index].checkPigColission();
      hayD = false;
    }

    if(pigClicked) {
      pigD = true;
      pig.row += 85;
      pig.checkBorder();
      pig.checkHayBale();
      pig.answerCheck();
      pigD = false;
    }
  }

  if(keyCode == ENTER || keyCode == 32 && keyIsPressed) {
    for(let i = 0; i < hay.length; i++) {
      hay[i].entered();
    }
    pig.entered();
  }
}
