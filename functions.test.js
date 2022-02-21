const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('Should run', () => {
    expect(returnTwo(2)).toBe(2)


})

test('greeting should be', () => {
    expect(greeting('Chris')).toBe(`Hello, Chris!`)
    expect(greeting('Hara')).toBe(`Hello, Hara!`)
})

describe('mathFunctions', () => {

test('adding numbers should be', () => {
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14)
})
test('multiply numbers should be', () => {
    expect(multiply(1,2)).toBe(2)
    expect(multiply(5,9)).toBe(45)
})
test('divide numbers should be', () => {
    expect(divide(11,1)).toBe(11)
    expect(divide(66,6)).toBe(11)
})
test('subtract numbers should be', () => {
    expect(subtract(8,2)).toBe(6)
    expect(subtract(9,6)).toBe(3)
})



















})
