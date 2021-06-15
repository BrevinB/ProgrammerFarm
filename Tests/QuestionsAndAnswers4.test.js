const { test, expect } = require('@jest/globals')
const correctA4 = require('../Functionality/QuestionsAndAnswers4')

test('correctA4 should return the correct answer for the question being passed in', () => 
{
    expect(correctA4("What logical operator ensures that BOTH boolean expressions are true for the overall expression to be true?")).toBe("&&");
    expect(correctA4("What logical operator ensures that AT LEAST ONE boolean expression is true for the overall expression to be true?")).toBe("||");
    expect(correctA4("What loop contains the loop control variable, boolean condition, and variable updating on one line of code?")).toBe("for loop");
    expect(correctA4("What is one type of decision structure?")).toBe("if-else");
    expect(correctA4("What is an example of an exit-control loop that always executes at least once?")).toBe("do-while");
    expect(correctA4("What system level function lets you format the console output using format specifiers and their corresponding arguments?")).toBe("printf");
    expect(correctA4("In a switch case statement, if none of the case label expressions match the switch expression, which optional label is branched to instead?")).toBe("default");
    expect(correctA4("What logical operator inverts the boolean value of a boolean expression?")).toBe("!");
    expect(correctA4("For a switch case statement, which keyword should terminate a case label expression to stop all remaining case expressions from executing?")).toBe("break");
    expect(correctA4("Which relational operator tests for equality between its two operands?")).toBe("==");
    expect(correctA4("What kind of loop continues to execute until its corresponding boolean expression is false?")).toBe("while")
    expect(correctA4('Which relational operator tests that the leftmost operand is greater than the rightmost operand?')).toBe('>')
    expect(correctA4('Which relational operator tests that the leftmost operand is less than the rightmost operand?')).toBe('<')
    expect(correctA4("Which relational operator tests for inequality between its two operands?")).toBe("!=")
})