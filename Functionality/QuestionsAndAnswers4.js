var cA; //to store correct answer info
var answer4;
var q;
var answers4 = [];
var questions4 = [];

function generateLevelFourQAndA() {

    questions4 = loadStrings("../Text_Files/level4_questions.txt");
    answers4 = loadStrings("../Text_Files/level4_answers.txt");

  for (let i = 0; i < questions4.length; i++)
  {
      answers4[i] = answers4[i].replace(/[\r]+/gm, "");
      questions4[i] = questions4[i].replace(/[\r]+/gm, "");
  }
}

function displayQ4() {
    
    var question = questions4[Math.floor(Math.random()*questions4.length)];

    q = createElement('h1', question); //choose one random question

    answer4 = correctA4(question); //get correct answer based on question displayed
    print(answer4);
    displayA(answer4); //pass correct answer into displayA()

    q.position(375,5);
}

//display answers in their corresponding boxes
function displayA(correctA) {
    var aArray = [];

    for (let i = 0; i < answers4.length; i++)
    {
        aArray[i] = answers4[i];
    }

    var m; //index of correct answer in 'aArray' array later on in function

    for (let i = 0; i < aArray.length; i++)
    {
        if (aArray[i] == correctA)
        {
            m = i;
            break;
        }
    }

    //var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11;
    var y_coordinates = [290, 115, 635, 634];
    //var answers = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];

    var x,y; //stores x and y coordinate
    var i; //a random index from y_coordinates
    var j = 0; //loop control for positioning at 4 answers
    var n; //a random index from answers

    while (y_coordinates.length != 0) {
        
        i = Math.floor(Math.random()*y_coordinates.length);
        n = Math.floor(Math.random()*aArray.length);
        y = y_coordinates[i]; //y is a random coordinate from 'y_coordinates' if that coordinate still exists
        
        switch (y) {

            //middle
            case 290:
                x = 390;
                break;
        
            //top right
            case 115:
                x = 905;
                break;

            //bottom right
            case 635:
                x = 905;
                break;
        
            //bottome left
            case 634:
                x = 390;
                break;
        }

        if(j == 0) {

            ans[j] = new Answer(x, y, correctA);
            aArray.splice(m, 1);
        

        } else {

            ans[j] = new Answer(x, y, aArray[n]); 
            aArray.splice(n, 1);
        }
        
        j++;
        y_coordinates.splice(i, 1); //so that we can't reuse that y coordinate
    
    }
}

//return correct answer to question being asked
function correctA4(question)
{
    var answer;

    switch (question)
    {
        case "What logical operator ensures that BOTH boolean expressions are true for the overall expression to be true?":
            answer = "&&";
            break;

        case "What logical operator ensures that AT LEAST ONE boolean expression is true for the overall expression to be true?":
            answer = "||";
            break;

        case "What loop contains the loop control variable, boolean condition, and variable updating on one line of code?":
            answer = "for loop";
            break;
        
        case "What is one type of decision structure?":
            answer = "if-else";
            break;
        
        case "What is an example of an exit-control loop that always executes at least once?":
            answer = "do-while";
            break;
        
        case "What system level function lets you format the console output using format specifiers and their corresponding arguments?":
            answer = "printf";
            break;
        
        case "In a switch case statement, if none of the case label expressions match the switch expression, which optional label is branched to instead?":
            answer = "default";
            break;
        
        case "What logical operator inverts the boolean value of a boolean expression?":
            answer = "!";
            break;

        case "For a switch case statement, which keyword should terminate a case label expression to stop all remaining case expressions from executing?":
            answer = "break";
            break;
        
        case "Which relational operator tests for equality between its two operands?":
            answer = "==";
            break;

    }

    return answer;
}

//checks to see if the answer is correct 
function checkAnswer4(x,y) {    
   
    for(i = 0; i < 4; i++) {
        if(x == ans[i].column && y == ans[i].row) {
            if(ans[i].answer == answer4) {
             
                total += 200;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound4();
                
                
                break;
               
            } else {

                youLose();
                total = 0;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound4();
                break;

            }
        }

    }
    

}

//remove current questions and answers when player wins the game
function newRound4() {
    for(k = 0; k < ans.length; k++) {
    
        ans[k].removeA();

     }

    for(h = 0; h < hay.length; h++) {

        hay.pop();
  
    }

    levelFour();
    q.remove();
    displayQ();
    

    
}

