
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
  
    //Create the haybales
   //Line 1
   hay[0] = new HayBale(340, 0,);
 
  let i = 0;

  start: while (i < 19)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

    for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
    {
      if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
      {
        hay.pop(); //remove most recently created Haybale from 'hay'
        continue start;
      }
    }

    i++;

    if (i == 19)
    {
      break start;
    }
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
  //Create the haybales
 //Line 1
 hay[0] = new HayBale(340, 0,);
 hay[1] = new HayBale(85, 0);
 hay[2] = new HayBale(255, 0);

 //Line 2
 hay[3] = new HayBale(0, 85);
 hay[4] = new HayBale(85, 85);
 hay[5] = new HayBale(170, 85);
 hay[6] = new HayBale(255, 85);
 hay[7] = new HayBale(425, 85);

 //Line 3
 hay[8] = new HayBale(255, 170);
 hay[9] = new HayBale(425, 170);

 //Line 4
 hay[10] = new HayBale(0, 255);
 hay[11] = new HayBale(85, 255);
 hay[12] = new HayBale(170, 255);
 hay[13] = new HayBale(255, 255);
 hay[14] = new HayBale(425, 255);

 //Line 5
 hay[15] = new HayBale(255, 340);
 hay[16] = new HayBale(425, 340);

 //Line 6
 hay[17] = new HayBale(255, 425);
 hay[18] = new HayBale(340, 425);
 hay[19] = new HayBale(425, 425);
 hay[20] = new HayBale(0, 425);

 //Line 7
 hay[21] = new HayBale(255, 510);
 hay[22] = new HayBale(85, 510);
 

 var i = 0;

 start: while (i < 22)
 {
   let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
   let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

   hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

   for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
   {
     if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
     {
       hay.pop(); //remove most recently created Haybale from 'hay'
       continue start; //go back to start label to restart process of creating haybales
     }
   }

   i++;

   
   if (i == 22)
   {
     break start;
   }
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

   //Create the haybales
 //Line 1
 hay[0] = new HayBale(340, 0,);
 hay[1] = new HayBale(85, 0);
 hay[2] = new HayBale(255, 0);

 //Line 2
 hay[3] = new HayBale(0, 85);
 hay[4] = new HayBale(85, 85);
 hay[5] = new HayBale(170, 85);
 hay[6] = new HayBale(255, 85);
 hay[7] = new HayBale(425, 85);

 //Line 3
 hay[8] = new HayBale(255, 170);
 hay[9] = new HayBale(425, 170);

 //Line 4
 hay[10] = new HayBale(0, 255);
 hay[11] = new HayBale(85, 255);
 hay[12] = new HayBale(170, 255);
 hay[13] = new HayBale(255, 255);
 hay[14] = new HayBale(425, 255);

 //Line 5
 hay[15] = new HayBale(255, 340);
 hay[16] = new HayBale(425, 340);
 hay[17] = new HayBale(85, 340);

 //Line 6
 hay[18] = new HayBale(255, 425);
 hay[19] = new HayBale(340, 425);
 hay[20] = new HayBale(425, 425);
 hay[21] = new HayBale(0, 425);
 hay[22] = new HayBale(510, 425);

 //Line 7
 hay[23] = new HayBale(255, 510);
 hay[24] = new HayBale(85, 510);
 hay[25] = new HayBale(425, 510);
 

   i++;

   
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
  
     //Create the haybales
 //Line 1
 hay[0] = new HayBale(340, 0,);
 hay[1] = new HayBale(85, 0);
 hay[2] = new HayBale(255, 0);

 //Line 2
 hay[3] = new HayBale(0, 85);
 hay[4] = new HayBale(85, 85);
 hay[5] = new HayBale(170, 85);
 hay[6] = new HayBale(255, 85);
 hay[7] = new HayBale(425, 85);
 hay[8] = new HayBale(510, 85);

 //Line 3
 hay[9] = new HayBale(85, 170);
 hay[10] = new HayBale(255, 170);
 hay[11] = new HayBale(425, 170);


 //Line 4
 hay[12] = new HayBale(0, 255);
 hay[13] = new HayBale(85, 255);
 hay[14] = new HayBale(170, 255);
 hay[15] = new HayBale(255, 255);
 hay[16] = new HayBale(340, 255);
 hay[17] = new HayBale(425, 255);

 //Line 5
 hay[18] = new HayBale(255, 340);
 hay[19] = new HayBale(425, 340);
 hay[20] = new HayBale(85, 340);

 //Line 6
 hay[21] = new HayBale(255, 425);
 hay[22] = new HayBale(340, 425);
 hay[23] = new HayBale(425, 425);
 hay[24] = new HayBale(0, 425);
 hay[25] = new HayBale(510, 425);

 //Line 7
 hay[26] = new HayBale(255, 510);
 hay[27] = new HayBale(85, 510);
 hay[28] = new HayBale(425, 510);
 

 var i = 0;

 start_position: while (i < 28)
 {
   let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
   let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

   hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

   for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
   {
     if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
     {
       hay.pop(); //remove most recently created Haybale from 'hay'
       continue start_position; //go back to start label to restart process of creating haybales
     }
   }

   i++;

   
   if (i == 28)
   {
     break start;
   }
 }

}

function newLevel() {
      
  for(h = 0; h < hay.length; h++) {

      hay.pop();

  }

  if(q != null) {

      q.remove();

  }
}



 