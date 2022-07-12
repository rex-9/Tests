class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    substract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        return this.a / this.b;
    }
}

const stringLength = (string) => {
    if (1 < string.length < 11) {
        return string.length;
    }
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = { Calculator, stringLength, reverseString, capitalize }