const { test, expect } = require('@jest/globals')
const correctA = require('../Functionality/QuestionsAndAnswers4')
const qanda4 = require('../Functionality/QuestionsAndAnswers4')

test('correctA should return the correct answer for the question being passed in', () => 
{
    expect(correctA("What logical operator ensures that BOTH boolean expressions are true for the overall expression to be true?")).toBe("&&");
    expect(correctA("What logical operator ensures that AT LEAST ONE boolean expression is true for the overall expression to be true?")).toBe("||");
    expect(correctA("What loop contains the loop control variable, boolean condition, and variable updating on one line of code?")).toBe("for loop");
    expect(correctA("What is one type of decision structure?")).toBe("if-else");
    expect(correctA("What is an example of an exit-control loop that always executes at least once?")).toBe("do-while");
    expect(correctA("What system level function lets you format the console output using format specifiers and their corresponding arguments?")).toBe("printf");
    expect(correctA("In a switch case statement, if none of the case label expressions match the switch expression, which optional label is branched to instead?")).toBe("default");
    expect(correctA("What logical operator inverts the boolean value of a boolean expression?")).toBe("!");
    expect(correctA("For a switch case statement, which keyword should terminate a case label expression to stop all remaining case expressions from executing?")).toBe("break");
    expect(correctA("Which relational operator tests for equality between its two operands?")).toBe("==");
})