const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Valid value', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('Less than valid value', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('Bigger than valid value', () => {
        expect(validateValue(101)).toBe(false);
    });

    test('Null value', () => {
        expect(validateValue()).toBe(false);
    });

    test('Equal to smallest value', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('Equal to biggest value', () => {
        expect(validateValue(100)).toBe(true);
    });
});
