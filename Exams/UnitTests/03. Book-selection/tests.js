const {expect} = require('chai');
const {bookSelection} = require("./solution");

describe("Book Selection", () => {

    it('works', function (){
        expect(1).to.equal(1);
    })

    describe('isGenreSuitable', function () {

        it('happy path', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 10)).to.equal('Those books are suitable');
        });

        it('inappropriate genre for the age', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
        });

        it('inappropriate genre for age, edge case', function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

    });

    describe('isItAffordable', function () {

        it('happy path', function () {
            expect(bookSelection.isItAffordable(1, 2)).to.equal('Book bought. You have 1$ left');
            expect(bookSelection.isItAffordable(2, 2)).to.equal('Book bought. You have 0$ left');
        });

        it('not enough money', function () {
            expect(bookSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough money');
            expect(bookSelection.isItAffordable(6, 3)).to.equal('You don\'t have enough money');
        });

        it('invalid input', function () {
            expect(() => bookSelection.isItAffordable('1', 1)).to.throw();
            expect(() => bookSelection.isItAffordable(1, "1")).to.throw();
            expect(() => bookSelection.isItAffordable('1', '1')).to.throw();
        });

    });

    describe('suitableTitles', function () {

        it('happy path, single match', function () {
            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a',
            }
            ], 'a')).to.deep.equal(['aa']); // found only one match
        });

        it('happy path, two matches', function () {

            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            },
                {
                    title: 'ab',
                    genre: 'a'
                },
                {
                    title: 'bb',
                    genre: 'b'
                }
            ], 'a')).to.deep.equal(['aa', 'ab']);
        });

        it('no match', function () {
            expect(bookSelection.suitableTitles([{
                title: 'bb',
                genre: 'b',
            }
            ], 'a')).to.deep.equal([]);
        });

        it('should throw on invalid input', function () {
            expect(() => bookSelection.suitableTitles('aaab', 'a')).to.throw();
            expect(() => bookSelection.suitableTitles([{
                title: 'bb',
                genre: '5',
            }], 5)).to.throw();
        });
    });
});
