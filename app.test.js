const { stringLength, reverseString, capitalize } = require("./app");

test('string length', () => {
    expect(stringLength('Happy')).toBe(5);
})

test('reverse string', () => {
    expect(reverseString('Happy')).toBe('yppaH');
})

test('capitalize', () => {
    expect(capitalize('happy')).toMatch('HAPPY');
})