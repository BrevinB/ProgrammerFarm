const { test, expect } = require('@jest/globals')
const correctA1 = require('../Functionality/QuestionsAndAnswers').default

test('correctA1 should return the correct answer for the question being passed in', () => 
{
    expect(correctA1("Which arithmetic operator is used to assign a value to a variable?")).toBe("=")
    expect(correctA1("Which is a string literal?")).toBe('"value"')
    expect(correctA1('Which is an integer literal?')).toBe('50')
    expect(correctA1('Which data type stores floating point numbers with 7 digits of accuracy?')).toBe('float')
    expect(correctA1('Which data type stores floating point numbers with 15 digits of accuracy?')).toBe('double')
    expect(correctA1('What character code does Java use to store char literals?')).toBe('Unicode')
    expect(correctA1('Which is a double literal?')).toBe('40.59')
    expect(correctA1('How do you force a double literal to a float literal?')).toBe('33.4F')
    expect(correctA1('Which data type that stores integer values has a size of 8 bytes?')).toBe('long')
    expect(correctA1("Which is a char literal?")).toBe("'a'")
    expect(correctA1("Which data type that stores integer values has a size of 1 byte?")).toBe("byte")
    expect(correctA1("Which data type that stores integer values has a size of 2 bytes?")).toBe("short")
    expect(correctA1("Which data type that stores integer values has a size of 4 bytes?")).toBe("int")
    expect(correctA1("What is a named storage location in the computer's memory called?")).toBe("variable")
})