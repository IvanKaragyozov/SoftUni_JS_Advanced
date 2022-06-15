const expect = require('chai').expect;

/**
 * Running test without the need of creating a new test file.
 */

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;

    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";

    }
    return string.charAt(index);

}

/*
 *  Tests
 */

describe('char lookup tests', function () {

    it('check whether first parameter type is valid', function () {
        expect(lookupChar(0, 0)).to.equal(undefined);
    });

    it('check whether second parameter type is valid', function () {
        expect(lookupChar('hello', 'test')).to.equal(undefined);
    });

    it('check value with index bigger than string length', function () {
        expect(lookupChar('hello', 0.1)).to.equal(undefined);
    });

    it('check value with negative index', function () {
        expect(lookupChar('hi', 10)).to.equal('Incorrect index');
    });

    it('check value with valid params', function () {
        expect(lookupChar('hi', -10)).to.equal('Incorrect index');
    });

    it('check value with valid parameters', function () {
        expect(lookupChar('hello', 1)).to.equal('e');
    });
});
