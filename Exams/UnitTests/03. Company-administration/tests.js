const {expect} = require('chai');
const {companyAdministration} = require('./companyAdministration');

describe("companyAdministration", () => {

  it('works', function (){
    expect(1).to.equal(1);
  })

  describe('hiringEmployee', function () {

    it('happy path', function () {
      expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 5)).to.equal('Alex was successfully hired for the position Programmer.');
      expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 3)).to.equal('Alex was successfully hired for the position Programmer.');
    });

    it('should throw on invalid input', function () {
      expect(() => companyAdministration.hiringEmployee('Alex', 'Film Maker', 1)).to.throw(`We are not looking for workers for this position.`);
      expect(companyAdministration.hiringEmployee('Alex', 'Programmer', 2)).to.equal(`Alex is not approved for this position.`);
    });
  });

  describe('calculateSalary', function () {
    it('happy path', function () {
      expect(companyAdministration.calculateSalary(2)).to.equal(30);
      expect(companyAdministration.calculateSalary(3)).to.equal(45);
      expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    });

    it('should throw on invalid input', function () {
      expect(() => companyAdministration.calculateSalary('2')).throw('Invalid hours');
      expect(() => companyAdministration.calculateSalary(-1)).throw('Invalid hours');
      expect(() => companyAdministration.calculateSalary([])).throw('Invalid hours');
      expect(() => companyAdministration.calculateSalary(null)).throw('Invalid hours');
    });
  });

  describe('firedEmployee', function () {

    it('happy path', function () {
      expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'Georgi'], 1)).to.equal('Petar, Georgi');
    });

    it('should throw on invalid input', function () {
      expect(() => companyAdministration.firedEmployee({}, 1)).throw('Invalid input');
      expect(() => companyAdministration.firedEmployee([], 1)).throw('Invalid input');
      expect(() => companyAdministration.firedEmployee({}, {})).throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan'], null)).throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan'], -1)).throw('Invalid input');
      expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan'], 3)).throw('Invalid input');
    });
  });
});
