const {expect} = require('chai');

let mathEnforcer = {

    addFive: function (num) {

        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },

    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },

    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('math enforcer tests', function () {
    describe('addFive', function () {

        it('should return correct result with number parameter', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(15.4)).to.equal(20.4);
            expect(mathEnforcer.addFive(-15)).to.equal(-10);
        });

        it('should return undefined if NaN parameter', function () {
            expect(mathEnforcer.addFive('hi')).to.undefined;
            expect(mathEnforcer.addFive('15')).to.undefined;
        });

    });

    describe('subtractTen', function () {

        it('should return correct result with number parameter', function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(-15)).to.equal(-25);
            expect(mathEnforcer.subtractTen(21.9)).to.be.closeTo(11.9, 0.01);
        });

        it('should return undefined if NaN parameter', function () {
            expect(mathEnforcer.subtractTen('hi')).to.undefined;
            expect(mathEnforcer.subtractTen('5')).to.undefined;
        });

    });

    describe('sum', function () {

        it('should return correct result with number parameter', function () {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
            expect(mathEnforcer.sum(-5, 3)).to.equal(-2);
            expect(mathEnforcer.sum(1.24, 3.38)).to.equal(4.62);
        });

        it('should return undefined with NaN parameter', function () {
            expect(mathEnforcer.sum(5, '5')).undefined;
            expect(mathEnforcer.sum('5', 2)).undefined;
            expect(mathEnforcer.sum('hi', '10')).undefined;
        });

    });
});