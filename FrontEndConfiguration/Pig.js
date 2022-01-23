//setup pig
class Pig {
    constructor(column, row) {
      this.column = column;
      this.row = row;
      this.stroke = 0;
      this.strokeW = 0;
      
    }

    
 //if haybale is clicked set the border and don't let anything else click until isSelected is false
 isClicked(px, py) {
    
    if(pigClicked == true) {
       //Do nothing
       //return false;
    } else {

      if(px >= this.column && px < this.column + 80 && py >= this.row && py < this.row + 90) {
      
        if(soundEffects == true) {
          pigSound.play();
        }
        this.strokeW = 4;
        this.stroke = 51;
        pigClicked = true;
        return true;
    }
  }

  }
     //When called the haybales will be created and displayed
  display() {

    strokeWeight(this.strokeW);
    stroke(this.stroke);
    image(pigImg, this.column, this.row);
    noFill();
    rect(this.column, this.row, 90, 85);
  
  }

  entered() {
    this.strokeW = 0;
    this.stroke = 0;
    pigClicked = false;
    pigR = false;
    pigL = false;
    pigU = false;
    pigD = false;
   
  }

  checkBorder() {

    if(this.column < 0 ) {
      this.column += 85;
    } 

    if(this.column > 530) {
      this.column -= 85;
    }

    if(this.row < 0) {
      this.row += 85;
    }
    
    if(this.row > 530) {
      this.row -= 85
    }

  }

  checkHayBale() {

    for(let i = 0; i < hay.length; i++) {
      
        if(this.column == hay[i].column && this.row == hay[i].row) {
          switch (true) {
            case pigL:
              this.column += 85;
              break;
            case pigR:
              this.column -= 85;
              break;
            case pigU:
              this.row += 85;
              this.column = this.column;
              break;
            case pigD:
              this.column = this.column;
              this.row -= 85;
              break;
            default:
              break;
          }
        }

    }
  }


  answerCheck()  {
    
    //Top Left
    if(this.column == 510 && this.row == 0) {
        
      if(level1Check == true) {
        checkAnswer1(515, 0);
      } else if(level2Check == true) {
        checkAnswer2(515, 0);
      } else if(level3Check == true) {
        checkAnswer3(515, 0);
      } else if(level4Check == true) {
        checkAnswer4(515,0);
      }
      
      //Middle
    } else if(this.column == 0 && this.row == 170) {

      if(level1Check == true) {
        checkAnswer1(0, 172);
      } else if(level2Check == true) {
        checkAnswer2(0, 172);
      } else if(level3Check == true) {
        checkAnswer3(0, 172);
      } else if(level4Check == true) {
        checkAnswer4(0, 172);
      }
    
      //Bottom Left
    } else if(this.column == 0 && this.row == 510) {
      
      if(level1Check == true) {
        checkAnswer1(0, 516);
      } else if(level2Check == true) {
        checkAnswer2(0, 516);
      } else if(level3Check == true) {
        checkAnswer3(0, 516);
      } else if(level4Check == true) {
        checkAnswer4(0, 516);
      }
      
      //Bottom Right
    } else if(this.column == 510 && this.row == 510) {

      
      if(level1Check == true) {
        checkAnswer1(515, 515);
      } else if(level2Check == true) {
        checkAnswer2(515, 515);
      } else if(level3Check == true) {
        checkAnswer3(515, 515);
      } else if(level4Check == true) {
        checkAnswer4(515, 515);
      }
    
      
    }
  }
}
