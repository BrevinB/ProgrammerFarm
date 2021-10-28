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
 
  let i = 0;

  start_position1 : while (i < 19)
  {
    let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
    let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

    hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

    for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
    {
      if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
      {
        hay.pop(); //remove most recently created Haybale from 'hay'
        continue start_position1 ;
      }
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

 let i = 0;

 start_position2 : while (i < 22)
 {
   let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
   let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

   hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

   for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
   {
     if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
     {
       hay.pop(); //remove most recently created Haybale from 'hay'
       continue start_position2 ; //go back to start_position  label to restart process of creating haybales
     }
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

 let i = 0;

 start_position3 : while (i < 25)
 {
   let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
   let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

   hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

   for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
   {
     if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
     {
       hay.pop(); //remove most recently created Haybale from 'hay'
       continue start_position3 ; //go back to start_position  label to restart process of creating haybales
     }
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

 let i = 0;

 start_position4 : while (i < 28)
 {
   let x = x_coords[Math.floor(Math.random()*x_coords.length)] //x is a random x_coordinate
   let y = y_coords[Math.floor(Math.random()*y_coords.length)] //y is a random y_coordinate

   hay.push(new HayBale(x, y)) //put haybale in a random spot on the grid

   for (let p = 0; p < i; p++) //going through all haybales so far and seeing if any overlap
   {
     if (hay[p].isOverlapping(hay[i]) || hay[p].isOverlapping(pig)) //check if haybales overlap each other or the pig
     {
       hay.pop(); //remove most recently created Haybale from 'hay'
       continue start_position4 ; //go back to start_position  label to restart process of creating haybales
     }
   }

   i++;
 }

}

function newLevel() {
      
  for (let i = 0; i < hay.length; i++)
  {
    hay.pop();
  }

  if(q != null) {

      q.remove();

  }
}



 