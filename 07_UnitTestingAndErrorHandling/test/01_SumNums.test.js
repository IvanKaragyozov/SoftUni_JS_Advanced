const {sum} = require('./01_SumNums');
const Assert = require("assert");

describe('sum(arr) - sum array of numbers', function () {

    it("should return 3 for [1, 2]", function (){
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        Assert.equal(actualSum, expectedSum);
    })

    it('should return 1 for [1]', function (){
        let expected = 1;
        let actual = sum([1]);
        Assert.equal(actual, expected);
    })

});