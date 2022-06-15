const Assert = require("assert");
const {isOddOrEven} = require("../02_EvenOrOdd");
const expect = require('chai').expect;

describe('is odd or even tests', function () {
    it('should be undefined if number', function () {
        expect(isOddOrEven(2)).undefined;
        //Assert.equal(isOddOrEven(2), undefined);
    });

    it('should be undefined if array', function () {
        expect(isOddOrEven([])).undefined;
    });

    it('should be undefined if object', function () {
        expect(isOddOrEven({})).undefined;
    });

    it('should return odd if string is odd', function () {
        let actual = isOddOrEven('hi!');
        expect(actual).to.equal('odd');
        //Assert.equal(actual, 'odd');
    });

    it('should return even if string is even', function () {
        let actual = isOddOrEven('hi');
        expect(actual).to.equal('even');
        //Assert.equal(actual, "even");
    });
});