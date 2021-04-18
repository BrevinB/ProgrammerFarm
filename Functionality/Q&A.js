class Answer {
    constructor(column, row, answer) {
        this.column = column;
        this.row = row;
        this.answer = answer;
        this.p = createP(answer);
    }
  
  
      display() {
   
          this.p.position(this.column, this.row);
  
      }
  
      removeA() {
  
          this.p.remove();
  
      }
  }