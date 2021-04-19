var cA; //to store correct answer info
var answer1;
var q; //question on top of page
var answers1 = [];
var questions1 = [];

//display question at top of page
function generateQAndA() {


    questions1 = loadStrings("Text_Files/level1_questions.txt");
    answers1 = loadStrings("Text_Files/level1_answers.txt");

  for (let i = 0; i < questions1.length; i++) {

      answers1[i] = answers1[i].replace(/[\r]+/gm, "");
      questions1[i] = questions1[i].replace(/[\r]+/gm, "");
      
  }
}

function displayQ() {
    
    
    var question = questions1[Math.floor(Math.random()*questions1.length)];
    
    q = createElement('h1', question); //choose one random question

    answer1 = correctA1(question); //get correct answer based on question displayed
    displayA(answer1); //pass correct answer into displayA()

    q.position(375,5);
}

//display answers in their corresponding boxes
function displayA(correctA) {
    var aArray = [];

    for (let i = 0; i < answers1.length; i++)
    {
        aArray[i] = answers1[i];
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
function correctA1(question)
{
    var answer;

    switch (question)
    {
        case "Which arithmetic operator is used to assign a value to a variable?":
            answer = "=";
            break;

        case "Which is a string literal?":
            answer = "\"value\"";
            break;

        case "Which is an integer literal?":
            answer = 50;
            break;

        case "Which is a char literal?":
            answer = "\'a\'";
            break;

        case "Which data type stores floating point numbers with 7 digits of accuracy?":
            answer = "float";
            break;
        
        case "Which data type stores floating point numbers with 15 digits of accuracy?":
            answer = "double";
            break;

        case "What character code does Java use to store char literals?":
            answer = "Unicode";
            break;
        
        case "Which is a double literal?":
            answer = 40.59;
            break;
        
        case "How do you force a double literal to a float literal?":
            answer = "33.4F";
            break;
        
        case "Which data type that stores integer values has a size of 8 bytes?":
            answer = "long";
            break;

    }

    return answer;
}


//checks to see if the answer is correct 
function checkAnswer1(x,y) {    
   
    for(i = 0; i < 4; i++) {
        if(x == ans[i].column && y == ans[i].row) {
            if(ans[i].answer == answer1) {
             
                total += 50;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                pig.entered();
                newRound1();        
                break;
               
            } else {
  
                //alert("you lose, your score is " + total);
                youLose();
                total = 0;
                document.getElementById("ScoreBoard").innerHTML = "Score : " + total;
                
                pig.entered();
                newRound1();
                break;
  
            }
        }
  
    }
    
  
  }

  
//remove current questions and answers when player wins the game
function newRound1() {
    for(k = 0; k < ans.length; k++) {
    
        ans[k].removeA();

     }


     for(h = 0; h < hay.length; h++) {

        hay.pop();
  
    }


    levelOne();
    q.remove();
    displayQ();
    

    
}



