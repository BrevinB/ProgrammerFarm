var cnv;
let row;
let column;
var hay = [];
var answers = [];
var isSelected = false;
var hayBaleImg, bg, pigImg;
var index;
var pig;
var pigClicked = false;

function preload() {

  hayBaleImg = loadImage("../Images/HayBale.png");
  pigImg = loadImage("../Images/Pig.png");
  bg = loadImage("../Images/Grass.png");

}


function setup() {

  openNav();
  cnv = createCanvas(600, 600);
  cnv.position(375, 100);
  //resize images
  hayBaleImg.resize(80,90);  
  pigImg.resize(80,80);

  //Create the haybales
  //Line 1
  hay[0] = new HayBale(340, 0,);

  //Line 2
  hay[1] = new HayBale(0, 85);
  hay[2] = new HayBale(85, 85);
  hay[3] = new HayBale(170, 85);
  hay[4] = new HayBale(255, 85);
  hay[5] = new HayBale(430, 85);

  //Line 3
  hay[6] = new HayBale(255, 175);
  hay[7] = new HayBale(430, 175);

  //Line 4
  hay[8] = new HayBale(0, 255);
  hay[9] = new HayBale(85, 255);
  hay[10] = new HayBale(170, 255);
  hay[11] = new HayBale(255, 255);
  hay[12] = new HayBale(430, 255);

  //Line 5
  hay[13] = new HayBale(255, 345);
  hay[14] = new HayBale(430, 345);

  //Line 6
  hay[15] = new HayBale(255, 435);
  hay[16] = new HayBale(340, 435);
  hay[17] = new HayBale(430, 435);

  //Line 7
  hay[18] = new HayBale(255, 515);

  pig = new Pig(10,10);


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

  //bottom right corner 
  rect(515,515,85,90);

  //top right corner
  rect(515,-5,85,90);

  //bottom left corner
  rect(0,515,85,90);

  //Middle
  rect(0,172,85,85);
  
  //pig at starting position
  pig.display();

  //display haybales
  for(i = 0; i < hay.length; i++) {

    hay[i].display();

  }

}

