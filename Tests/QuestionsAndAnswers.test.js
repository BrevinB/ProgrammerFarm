const { test, expect } = require('@jest/globals')
const correctA = require('../Functionality/QuestionsAndAnswers')
const qanda = require('../Functionality/QuestionsAndAnswers')

test('correctA should return the correct answer for the question being passed in', () => 
{
    expect(correctA("Which arithmetic operator is used to assign a value to a variable?")).toBe("=")
    expect(correctA("Which is a string literal?")).toBe("\"value\"")
    expect(correctA('Which is an integer literal?')).toBe(50)
    expect(correctA('Which data type stores floating point numbers with 7 digits of accuracy?')).toBe('float')
    expect(correctA('Which data type stores floating point numbers with 15 digits of accuracy?')).toBe('double')
    expect(correctA('What character code does Java use to store char literals?')).toBe('Unicode')
    expect(correctA('Which is a double literal?')).toBe(40.59)
    expect(correctA('How do you force a double literal to a float literal?')).toBe('33.4F')
    expect(correctA('Which data type that stores integer values has a size of 8 bytes?')).toBe('long')
    expect(correctA("Which is a char literal?")).toBe("\'a\'")
})