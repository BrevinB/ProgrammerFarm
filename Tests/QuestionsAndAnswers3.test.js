const { test, expect } = require('@jest/globals')
const correctA = require('../Functionality/QuestionsAndAnswers3')
const qanda3 = require('../Functionality/QuestionsAndAnswers3')

test('correctA should return the correct answer for the question being passed in', () => 
{
    expect(correctA("What operator can be used for String concatenation?")).toBe("+")
    expect(correctA("What String method returns how many characters are in a String variable?")).toBe("length")
    expect(correctA('What variables are accessible from their declaration to the end of the method in which the declaration took place?')).toBe('local')
    expect(correctA('How are single line comments specified?')).toBe('//')
    expect(correctA('How are multi-line comments specified?')).toBe('/** */')
    expect(correctA('What variables are accessible anywhere in a program, no exceptions?')).toBe('global')
    expect(correctA('Which keyword makes specific classes in the Java library available to the program?')).toBe('import')
    expect(correctA('What String method returns the character present at a specific position for a given String?')).toBe('charAt')
    expect(correctA('Which Java API class allows you to create message and input dialog boxes?')).toBe('JOptionPane')
    expect(correctA("Which Java API class allows the program to read input from the keyboard?")).toBe("Scanner")
    expect(correctA("What keyword can be used in a variable declaration to make said variable constant?")).toBe("final");
})