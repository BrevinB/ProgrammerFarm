var cA; //to store correct answer info
var answer3;
var q;
var answers3 = [];
var questions3 = [];

function generateLevelThreeQAndA() {

    questions3 = loadStrings("Text_Files/level3_questions.txt");
    answers3 = loadStrings("Text_Files/level3_answers.txt");

    for (let i = 0; i < questions3.length; i++)
    {
      answers3[i] = answers3[i].replace(/[\r]+/gm, "");
      questions3[i] = questions3[i].replace(/[\r]+/gm, "");
    }
}

function displayQ3() {
    
    var question = questions3[Math.floor(Math.random()*questions3.length)];

    q = createElement('h1', question); //choose one random question

    answer3 = correctA3(question); //get correct answer based on question displayed

    displayA3(answer3); //pass correct answer into displayA()

    q.position(375,5);
}

//display answers in their corresponding boxes
function displayA3(correctA) {
    var aArray = [];

    for (let i = 0; i < answers3.length; i++)
    {
        aArray[i] = answers3[i];
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
function correctA3(question)
{
    var answer;

    switch (question)
    {
        case "What operator can be used for String concatenation?":
            answer = "+";
            break;

        case "What String method returns how many characters are in a String variable?":
            answer = "length";
            break;

        case "What variables are accessible from their declaration to the end of the method in which the declaration took place?":
            answer = "local";
            break;

        case "How are single line comments specified?":
            answer = "//";
            break;
        
        case "How are multi-line comments specified?":
            answer = "/** */";
            break;
        
        case "What variables are accessible anywhere in a program, no exceptions?":
            answer = "global";
            break;

        case "Which keyword makes specific classes in the Java library available to the program?":
            answer = "import";
            break;

        case "What String method returns the character present at a specific position for a given String?":
            answer = "charAt";
            break;
        
        case "Which Java API class allows you to create message and input dialog boxes?":
            answer = "JOptionPane";
            break;
        
        case "Which Java API class allows the program to read input from the keyboard?":
            answer = "Scanner";
            break;
        
        case "What keyword can be used in a variable declaration to make said variable constant?":
            answer = "final";
            break;
    }

    return answer;
}

//checks to see if the answer is correct 
function checkAnswer3(x,y) {    
   
    for(i = 0; i < 4; i++) {
        if(x == ans[i].column && y == ans[i].row) {
            if(ans[i].answer == answer3) {
             
                total += 150;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound3();
                
                
                break;
               
            } else {

                youLose();
                total = 0;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound3();
                break;

            }
        }

    }
    

}

//remove current questions and answers when player wins the game
function newRound3()
{
    for(k = 0; k < ans.length; k++) {
    
        ans[k].removeA();

     }

    for(h = 0; h < hay.length; h++) {

        hay.pop();
  
    }

    levelThree();
    q.remove();
    displayQ();
    pig.entered();
    for(let i = 0; i < hay.length; i++) {
        hay[i].entered();
      }
    

    
}
