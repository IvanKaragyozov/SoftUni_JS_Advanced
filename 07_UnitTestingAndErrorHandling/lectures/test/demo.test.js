const {expect} = require('chai');
const demo = require('./demo');

/**
 * Start through console with: {test file directory} mocha {test file name.js}
 */

describe('even or odd', function () {
    it('isString', function () {
        expect(demo(3)).to.undefined;
    });

    it('isOdd', function () {
        expect(demo('s')).to.equal('odd');
    });

    it('isEven', function () {
        expect(demo('aa')).to.equal('even')
    });
});