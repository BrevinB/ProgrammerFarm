var cnv;
var hay = [];
var ans = [];
var hayBaleImg, bg, pigImg, index, pig;
var pigClicked = false;
var hayClicked = false;
var pigR, pigL, pigU, pigD, hayR, hayL, hayU, hayD = false;
var level1 = false, level2 = false, level3 = false, level4 = false;
var level1Check = false, level2Check = false; level3Check = false, level4Check = false;
var total = 0;
let pigSound;
let backgroundSound;
let haySound;
var initVol = .1;
let arcadeFont;

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
  openNav();
  backgroundSound.setVolume(initVol);
  pigSound.setVolume(.2);
  haySound.setVolume(.2);
  //begginNav();
  cnv = createCanvas(600, 600);
  cnv.position(windowWidth / 3, 100, 'fixed');
  
  //resize images
  hayBaleImg.resize(80,90);  
  pigImg.resize(80,80);
  document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
  
  pig = new Pig(0,0);
  
} 


function draw() {


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
 
   // //bottom right corner 
   // rect(515,515,85,90);
 
   // //top right corner
   // rect(515,-5,85,90);
 
   // //bottom left corner
   // rect(0,515,85,90);
 
   // //Middle
   // rect(0,172,85,85);
   
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
  
  } else if(level4 == true) {

    level4Check = true;
    newLevel();
    levelFour();
    displayQ4();
    level4 = false;
  
   } 


 

  //display haybales
  for(i = 0; i < hay.length; i++) {

    hay[i].display();
   
  }

  for(i = 0; i < ans.length; i++) {

    ans[i].display();

  }

  // ans[0].p.position(515, -5);

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
    
  } else if(pig.clicked(mouseX, mouseY)) {
      pigClicked = true;
  }

}


//Move the haybales and set them to new location
function keyPressed() {

  if(keyCode == LEFT_ARROW && keyIsPressed) {

    if(hayClicked) {
      hayL = true;
      haySound.play();
      hay[index].column -= 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
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

  if(keyCode == RIGHT_ARROW && keyIsPressed) {

    if(hayClicked) {
      hayR = true;
      haySound.play();
      hay[index].column += 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
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

  if(keyCode == UP_ARROW && keyIsPressed) {

    if(hayClicked) {
      hayU = true;
      haySound.play();
      hay[index].row -= 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
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

  if(keyCode == DOWN_ARROW && keyIsPressed) {

    if(hayClicked) {
      hayD = true;
      haySound.play();
      hay[index].row += 85;
      hay[index].checkBorder();
      hay[index].checkHayBaleColission();
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

  if(keyCode == ENTER && keyIsPressed) {
    for(let i = 0; i < hay.length; i++) {
      hay[i].entered();
    }
    pig.entered();
  }
}


// Definition of windowResized Function
// function windowResized() {
//   resizeCanvas(600, 600);
// }