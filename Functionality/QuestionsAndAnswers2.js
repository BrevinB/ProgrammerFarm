var cA; //to store correct answer info
var answer2;
var q; //question on top of page
var answers2 = [];
var questions2 = [];

function generateLevelTwoQAndA() {

    questions2 = loadStrings("Text_Files/level2_questions.txt");
    answers2 = loadStrings("Text_Files/level2_answers.txt");

    for (let i = 0; i < questions2.length; i++)
    {
      answers2[i] = answers2[i].replace(/[\r]+/gm, "");
      questions2[i] = questions2[i].replace(/[\r]+/gm, "");
    }
}

//display question at top of page
function displayQ2() {

    var question = questions2[Math.floor(Math.random()*questions2.length)];

    q = createElement('h1', question); //choose one random question

    answer2 = correctA2(question); //get correct answer based on question displayed

    displayA2(answer2); //pass correct answer into displayA()

    q.position(375,5);
}

//display answers in their corresponding boxes
//display answers in their corresponding boxes
function displayA2(correctA) {
    var aArray = [];

    for (let i = 0; i < answers2.length; i++)
    {
        aArray[i] = answers2[i];
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
    var y_coordinates = [0, 515, 516, 172];
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
            case 0:
                x = 515;
                break;
        
            //top right
            case 515:
                x = 515;
                break;

            //bottom right
            case 516:
                x = 0;
                break;
        
            //bottome left
            case 172:
                x = 0;
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
function correctA2(question)
{
    var answer;

    switch (question)
    {
        case "What arithmetic operator calculates the remainder of its two operands?":
            answer = "%";
            break;

        case "What arithmetic operator calculates the quotient of its two operands?":
            answer = "/";
            break;

        case "What arithmetic operator calculates the product of its two operands?":
            answer = "*";
            break;

        case "What arithmetic operator calculates the difference of its two operands?":
            answer = "-";
            break;

        case "What arithmetic operator calculates the sum of its two operands?":
            answer = "+";
            break;
        
        case "What is a shorthand way to compute x=x+1?":
            answer = "x+=1";
            break;
        
        case "What is a shorthand way to compute x=x-1?":
            answer = "x-=1";
            break;
        
        case "What is a shorthand way to compute x=x*1?":
            answer = "x*=1";
            break;
        
        case "What is a shorthand way to compute x=x/1?":
            answer = "x/=1";
            break;
        
        case "What is a shorthand way to compute x=x%1?":
            answer = "('x%=1')";
            break;
        
        case "How do you force specific operations to be performed before others in a mathematical expression?":
            answer = "(   )";
            break;


    }

    return answer;
}

//checks to see if the answer is correct 
function checkAnswer2(x,y) {    
   
    for(i = 0; i < 4; i++) {
        if(x == ans[i].column && y == ans[i].row) {
            if(ans[i].answer == answer2) {
             
                total += 100;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound2();
                
                
                break;
               
            } else {

                youLose();
                total = 0;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound2();
                break;

            }
        }

    }
    

}

//remove current questions and answers when player wins the game
function newRound2()
{
    for(k = 0; k < ans.length; k++) {
    
        ans[k].removeA();

     }

    for(h = 0; h < hay.length; h++) {

        hay.pop();
  
    }

    levelTwo();
    q.remove();
    displayQ();
    pig.entered();
    for(let i = 0; i < hay.length; i++) {
        hay[i].entered();
      }
    

    
}
