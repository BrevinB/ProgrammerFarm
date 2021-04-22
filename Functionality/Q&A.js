class Answer {
    constructor(column, row, answer) {
        this.column = column;
        this.row = row;
        this.answer = answer;
        this.p;
      
    }
  
  
      display() {

       
        fill(0,128,0);
        rect(this.column, this.row, 85, 85);
        fill(0);
        this.p = text(this.answer, this.column+40, this.row+50);
        textAlign(CENTER);
        textSize(10);
        textFont(arcadeFont);

      }
  
      removeA() {
  
        //   background();
  
      }
  }