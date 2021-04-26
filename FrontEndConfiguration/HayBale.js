//setup haybales
class HayBale {
  constructor(column, row) {
    this.column = column;
    this.row = row;
    this.stroke = 0;
    this.strokeW = 0;
    this.h;
    
  }

  //if haybale is clicked set the border and don't let anything else click until isSelected is false
  clicked(px, py) {
    
    if(hayClicked == true) {
       //Do nothing
    } else {

      if(px >= this.column && px < this.column + 80 && py >= this.row && py < this.row + 90) {
      
        if(soundEffects == true) {
          haySound.play();
        }
        this.strokeW = 4;
        this.stroke = 51;
        hayClicked = true;
        return true;
    }
  }

  }

  //When called the haybales will be created and displayed
  display() {

    strokeWeight(this.strokeW);
    stroke(this.stroke);
    this.h = image(hayBaleImg, this.column, this.row);
    noFill();
    rect(this.column, this.row, 90, 85);
  
  }

  //when called border will dissapear since new location is set
  entered() {
    this.strokeW = 0;
    this.stroke = 0;
    hayClicked = false;
    hayL = false;
    hayR = false;
    hayD = false;
    hayU = false;
   
  }


  checkBorder() {

    switch (true) {
      case hayL:
        if(this.column < 0 || (this.column < 85 && this.row == 0) || (this.column < 85 && this.row == 170) || (this.column < 85 && this.row == 510)) {
          this.column += 85;
        }
        break;

      case hayR:
        if(this.column > 515 || (this.column > 500 && this.row == 0) || (this.column > 500 && this.row == 510)) {
          this.column -= 85;
        }
        break;

      case hayD:
        if(this.row > 515 || (this.column < 85 && this.row == 170) || (this.column < 85 && this.row == 510) || (this.column > 500 && this.row == 510)) {
          this.row -= 85
        }
        break;

      case hayU:
        if(this.row < 0 || (this.row == 0 && this.column == 0) || (this.column < 85 && this.row == 170) || (this.column > 500 && this.row == 0) || (this.column < 85 && this.row == 510)) {
          this.row += 85;
        }
        break;
        
      default:
        break;
    }
  }

  checkHayBaleColission() {

    for(let i = 0; i < hay.length; i++) {
      
      if(hay[index] == hay[i]) {
        continue;
      }
        if(this.column == hay[i].column && this.row == hay[i].row) {
          switch (true) {
            case hayL:
              this.column += 85;
              break;
            case hayR:
              this.column -= 85;
              break;
            case hayU:
              this.row += 85;
              break;
            case hayD:
              this.row -= 85;
              break;
            default:
              break;
          }
        }
  }
}

  checkPigColission() {

    for(let i = 0; i < hay.length; i++) {
      if(hay[index] == hay[i]) {
        continue;
      }

      if(this.column == pig.column && this.row == pig.row) {
        switch (true) {
          case hayL:
            this.column += 85;
            break;
          case hayR:
            this.column -= 85;
            break;
          case hayU:
            this.row += 85;
            break;
          case hayD:
            this.row -= 85;
            break;
          default:
            break;
        }
      }
    }

  }

}











