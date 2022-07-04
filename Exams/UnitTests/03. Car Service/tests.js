const {carService} = require('./03. Car service_Resources');
const {expect} = require('chai');

describe('carService', function () {

    it('works', function () {
        expect(1).to.equal(1);
    });

    describe('isItExpensive', function () {

        it('happy path', function () {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Wheels')).to.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive('Windshield')).to.equal(`The overall price will be a bit cheaper`);
        });

    });

    describe('discount', function () {

        it('happy path', function () {

            expect(carService.discount(1, 100)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
            expect(() => carService.discount('2', 100)).to.throw("Invalid input");
            expect(() => carService.discount('2', '100')).to.throw("Invalid input");
            expect(() => carService.discount('2', 100)).to.throw("Invalid input");
            expect(() => carService.discount([], 100)).to.throw("Invalid input");
            expect(() => carService.discount(4, {})).to.throw("Invalid input");
            expect(() => carService.discount([], {})).to.throw("Invalid input");
            expect(() => carService.discount()).to.throw("Invalid input");
            expect(() => carService.discount(3)).to.throw("Invalid input");
            expect(() => carService.discount(3, undefined)).to.throw("Invalid input");
            expect(() => carService.discount(undefined, 100)).to.throw("Invalid input");

        });
    });

    describe('parts to buy', function () {

        it('test', function () {

            let partsCatalogParts = [{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }];
            let neededParts = [{ part: "coil springs", price: 230 }];
            let price = 230;


            expect(carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }],
                ["blow off valve", "injectors"])).to.equal(145);
            expect(carService.partsToBuy([{ part: "blow off valve", price: 190 }, { part: "coil springs", price: 230 }],
                ["blow off valve", "injectors"])).to.equal(190);
            expect(carService.partsToBuy([{ part: "blow off valve", price: 145 }],
                [{ part: "blow off valve", price: 140 }])).to.equal(0);
            expect(carService.partsToBuy(partsCatalogParts, neededParts)).to.equal(0);
        });

        it('test2', function () {
            expect(() => carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }])).to.throw(0);
            expect(() => carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }], 0)).to.throw(0);
            expect(() => carService.partsToBuy('blow off', { part: "coil springs", price: 230 })).to.throw("Invalid input");
            expect(() => carService.partsToBuy('blow off', 'coil springs').to.throw("Invalid input"));
            expect(() => carService.partsToBuy(undefined, [{ part: "coil springs", price: 220 }]).to.throw("Invalid input"));
            expect(() => carService.partsToBuy([{ part: "coil springs", price: 220 }]).to.throw("Invalid input"));
            expect(() => carService.partsToBuy().to.throw("Invalid input"));
        });

    });

});
