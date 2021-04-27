const { test, expect } = require('@jest/globals')
const correctA = require('../Functionality/QuestionsAndAnswers2')
const qanda2 = require('../Functionality/QuestionsAndAnswers2')

test('correctA should return the correct answer for the question being passed in', () => 
{
    expect(correctA("What arithmetic operator calculates the remainder of its two operands?")).toBe("%")
    expect(correctA("What arithmetic operator calculates the quotient of its two operands?")).toBe("/")
    expect(correctA('What arithmetic operator calculates the product of its two operands?')).toBe('*')
    expect(correctA('What arithmetic operator calculates the difference of its two operands?')).toBe('-')
    expect(correctA('What arithmetic operator calculates the sum of its two operands?')).toBe('+')
    expect(correctA('What is a shorthand way to compute x=x+1?')).toBe('x+=1')
    expect(correctA('What is a shorthand way to compute x=x-1?')).toBe('x-=1')
    expect(correctA('What is a shorthand way to compute x=x*1?')).toBe('x*=1')
    expect(correctA('What is a shorthand way to compute x=x/1?')).toBe('x/=1')
    expect(correctA('What is a shorthand way to compute x=x%1?')).toBe('x%=1')
    expect(correctA('How do you force specific operations to be performed before others in a mathematical expression?')).toBe('(        )')
})