const { test, expect } = require('@jest/globals')
const correctA3 = require('../Functionality/QuestionsAndAnswers3')

test('correctA3 should return the correct answer for the question being passed in', () => 
{
    expect(correctA3("What OPERATOR can be used for String concatenation?")).toBe("+")
    expect(correctA3("Which METHOD can be used for String concatenation?")).toBe('concat')
    expect(correctA3("What String method returns how many characters are in a String variable?")).toBe("length")
    expect(correctA3('What variables are accessible from their declaration to the end of the method in which the declaration took place?')).toBe('local')
    expect(correctA3('How are single line comments specified?')).toBe('//')
    expect(correctA3('How are documentation comments specified?')).toBe('/** */')
    expect(correctA3('How are multi-line comments specified?')).toBe('/* */')
    expect(correctA3('What variables are accessible anywhere in a program, no exceptions?')).toBe('global')
    expect(correctA3('Which keyword makes specific classes in the Java library available to the program?')).toBe('import')
    expect(correctA3('What String method returns the character present at a specific position for a given String?')).toBe('charAt')
    expect(correctA3('What keyword should be used in the declaration for a variable that is to be used unchanged throughout the duration of the program?')).toBe('final')
    expect(correctA3("Which Java API class allows the program to read input from the keyboard?")).toBe("Scanner")
    expect(correctA3("Which method lets you convert a String into an Integer?")).toBe("parseInt")
    expect(correctA3('When you convert a value from a smaller data type to a larger data type, what type of conversion is being used?')).toBe('widening')
    expect(correctA3('When you convert a value from a larger data type to a smaller data type, what type of conversion is being used?')).toBe('narrowing')
})