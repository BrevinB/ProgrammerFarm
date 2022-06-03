var x_coords = [0, 85, 170, 255, 340, 425, 510] //all possible x coordinates
var y_coords = [0, 85, 170, 255, 340, 425, 510] //all possible y coordinates

function selectLevelOne()
{
  level2Check = false;
  level3Check = false;
  level4Check = false;
  return level1Check = true;
}

function selectLevelTwo()
{
  level1Check = false;
  level3Check = false;
  level4Check = false;
  return level2Check = true;
}

function selectLevelThree()
{
  level1Check = false;
  level2Check = false;
  level4Check = false;
  return level3Check = true;
}

function selectLevelFour()
{
  level1Check = false;
  level2Check = false;
  level3Check = false;
  return level4Check = true;
}

function resetValues() {

  if (total >= 1500)
  {
    level1Check = false;
    level2Check = false;
    level3Check = false;
    level4Check = false;
    level5Check = false;
    level6Check = false;
    level7Check = false;
    level8Check = false;
  }
  else 
  {
    if (level1Check == true)
    {
      level1Check = true;
      level2Check = false;
      level3Check = false;
      level4Check = false;
      level5Check = false;
      level6Check = false;
      level7Check = false;
      level8Check = false;
    }

    else if (level2Check == true)
    {
      level1Check = false;
      level2Check = true;
      level3Check = false;
      level4Check = false;
      level5Check = false;
      level6Check = false;
      level7Check = false;
      level8Check = false;
    }

    else if (level3Check == true)
    {
      level1Check = false;
      level2Check = false;
      level3Check = true;
      level4Check = false;
      level5Check = false;
      level6Check = false;
      level7Check = false;
      level8Check = false;
    }

    else if (level4Check == true)
    {
      level1Check = false;
      level2Check = false;
      level3Check = false;
      level4Check = true;
      level5Check = false;
      level6Check = false;
      level7Check = false;
      level8Check = false;
    }
  }

}


function levelOne() {
  document.getElementById("level").innerHTML = "Level 1";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }
  pig = new Pig(0,0);

  let i = 0;

  while (i < 19)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or answers are overlapped
    {
      hay[i] = null; 
      continue;
    }
 
    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null;
      continue;
    }

    i++;
  }
 
 }

 function levelTwo() {
  document.getElementById("level").innerHTML = "Level 2";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }

  pig = new Pig(0,0);

  let i = 0;

  while (i < 22)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
    {
      hay[i] = null; 
      continue;
    }

    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null
      continue;
    }

    i++;
  }

}

function levelThree() {
  document.getElementById("level").innerHTML = "Level 3";
  hayClicked = false;
  pigClicked = false;
  
  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }
  
 pig = new Pig(0,0);

 let i = 0;

 while (i < 25)
 {
   let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
   let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

   if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
   {
     hay[i] = null; 
     continue;
   }
 
   hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

   if (checkOverlap(i)==true)
   {
     hay[i] = null
     continue;
   }

   i++;
 }

}

function levelFour() {
  document.getElementById("level").innerHTML = "Level 4";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }

  pig = new Pig(0,0);

  let i = 0;

  while (i < 28)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
    {
      hay[i] = null; 
      continue;
    }
    
    
    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null
      continue;
    }

    i++;
  }

}

function levelFive() {

  document.getElementById("level").innerHTML = "Level 5";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }

  pig = new Pig(0,0);

  let i = 0;

  while (i < 31)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
    {
      hay[i] = null; 
      continue;
    }
    
    
    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null
      continue;
    }

    i++;
  }

}

function levelSix() {

  document.getElementById("level").innerHTML = "Level 6";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }

  pig = new Pig(0,0);

  let i = 0;

  while (i < 32)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
    {
      hay[i] = null; 
      continue;
    }
    
    
    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null
      continue;
    }

    i++;
  }

}

function levelSeven() {

  document.getElementById("level").innerHTML = "Level 7";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }

  pig = new Pig(0,0);

  let i = 0;

  while (i < 33)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
    {
      hay[i] = null; 
      continue;
    }
    
    
    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null
      continue;
    }

    i++;
  }

}

function levelEight() {

  document.getElementById("level").innerHTML = "Level 8";
  hayClicked = false;
  pigClicked = false;

  if(music == true) {
    if(backgroundSound.isPlaying()) {

    } else {
      backgroundSound.play();
      backgroundSound.loop();
    }
  }

  pig = new Pig(0,0);

  let i = 0;

  while (i < 34)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    if (x==0 && y==0 || x==510 && y==0 || x==510 && y==510 || x==0 && y==510 || x==0 && y==170) //check if pig or any of the answers are overlapped
    {
      hay[i] = null; 
      continue;
    }
    
    
    hay[i] = new HayBale(x, y) //put haybale in a random spot on the grid

    if (checkOverlap(i)==true)
    {
      hay[i] = null
      continue;
    }

    i++;
  }

}

//check for any overlapping haybales
function checkOverlap(i)
{
  for (let p = 0; p < i; p++)
  {
    if (hay[p].isOverlapping(hay[i]))
    {
      return true; //if any pre-existing haybale overlapped by most recent haybale return true
    }
  }

  return false;
}

function newLevel() {

  hay = []

  if(q != null) {

      q.remove();

  }
}



 