const { stringLength, reverseString, capitalize } = require("./app");

test('string length', () => {
    expect(stringLength('1')).toBeGreaterThan(0);
    expect(stringLength('1')).toBeLessThan(11);
})

test('reverse string', () => {
    expect(reverseString('Happy')).toBe('yppaH');
})

test('capitalize', () => {
    expect(capitalize('happy')).toMatch('HAPPY');
})