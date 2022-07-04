const { Repository } = require("./solution.js");
const {expect} = require("chai");

describe("Repository", function () {

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    it('test', function () {
        expect(1).to.equal(1);
    });

    describe("Initialization", function () {
        it("should add props property on init", function () {

            let repo = new Repository(properties);

            expect(repo).to.have.property('props');
            expect(repo.props).to.deep.equal(properties);
        });

        it('should have property data on init', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repo = new Repository(properties);

            expect(repo).to.have.property('data');
            expect(typeof repo.data).is.equal('object');
            expect(repo.data).instanceof(Map);

        });
    });

    describe('Add entity', function () {
        let repository = new Repository(properties);


        it('should return incremented id if valid entity is added', function () {
            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(entity)).to.equal(1);
        });

        it('should store valid entity in data map', function () {
            repository.add(entity);
            expect(repository.data.get(0)).not.to.be.undefined;
            expect(repository.data.get(0)).to.deep.equal(entity);
        });

        it('should throw if property is missing', function () {
            let entity = {
                name: "Pesho",
                age: 22
            };

            let repo = new Repository(entity);
            expect(() => repo.add(entity)).to.throw(Error,`Property birthday is missing from the entity!`);
        });

    });

    describe('Get count', function () {

        it.skip('should return number of entities', function () {

            let repo = new Repository(entity);
            repo.add(entity);

            expect(repo.count).to.equal(1);
        });

    });



});
