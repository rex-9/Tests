const { Calculator, stringLength, reverseString, capitalize } = require("./app");

describe('calculator', () => {
    const calculator = new Calculator(6, 3);
    const calculator22 = new Calculator(2, 2);
    const calculator2010 = new Calculator(20, 10);
    test('add', () => {
        expect(calculator.add()).toBe(9);
        expect(calculator22.add()).toBe(4);
        expect(calculator2010.add()).toBe(30);
    })
    test('substract', () => {
        expect(calculator.substract()).toBe(3);
        expect(calculator22.substract()).toBe(0);
        expect(calculator2010.substract()).toBe(10);
    })
    test('multiply', () => {
        expect(calculator.multiply()).toBe(18);
        expect(calculator22.multiply()).toBe(4);
        expect(calculator2010.multiply()).toBe(200);
    })
    test('divide', () => {
        expect(calculator.divide()).toBe(2);
        expect(calculator22.divide()).toBe(1);
        expect(calculator2010.divide()).toBe(2);
    })
})

test('string length', () => {
    expect(stringLength('1')).toBeGreaterThan(0);
    expect(stringLength('1')).toBeLessThan(11);
})

test('reverse string', () => {
    expect(reverseString('Happy')).toBe('yppaH');
})

test('capitalize', () => {
    expect(capitalize('happy')).toMatch('Happy');
})