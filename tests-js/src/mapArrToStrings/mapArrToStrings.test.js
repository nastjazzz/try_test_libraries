const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Valid value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('Valid value with strings inside', () => {
        expect(mapArrToStrings([1, 'acf', '2', 3])).toEqual(['1', '3']);
    });

    test('Valid value only strings', () => {
        expect(mapArrToStrings(['1', '2', '3'])).toEqual([]);
    });

    test('Empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });

    test('Valid value', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3]);
    });
});
