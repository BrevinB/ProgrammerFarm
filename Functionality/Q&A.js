class Answer {
    constructor(column, row, answer) {
        this.column = column;
        this.row = row;
        this.answer = answer;
        this.p;
      
    }
  
  
      display() {

        
        stroke(0);
        strokeWeight(0);
        fill(0,128,0);
        rect(this.column, this.row, 85, 85);

        fill(0);

        //adjust font size if answer cannot fit in answer grid
        if (str(this.answer).length < 9)
        {
          textSize(10);
        }

        else
        {
          textSize(8);
        }
        this.p = text(this.answer, this.column+40, this.row+50);

        textAlign(CENTER);
        //textSize(9);
        textFont(arcadeFont);
        

      }
  
  
  }