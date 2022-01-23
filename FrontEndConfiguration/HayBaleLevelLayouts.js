var x_coords = [0, 85, 170, 255, 340, 425, 510] //all possible x coordinates
var y_coords = [0, 85, 170, 255, 340, 425, 510] //all possible y coordinates

function resetValues() {

  level1Check = false;
  level2Check = false;
  level3Check = false;
  level4Check = false;

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

   
   if (i == 25)
   {
     break start;
   }
 }
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
  // let length = hay.length;

  // for (let i = 0; i < length; i++)
  // {
  //   hay.pop();
  // }

  if(q != null) {

      q.remove();

  }
}



 