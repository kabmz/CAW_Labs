const  { mean }  = require('./notation');

describe('mean function', () => {
    it('calculates the mean of an array of numbers', () => {
        const scores = [13, 190, 45, 78, 238];
        const result = mean(scores);
        expect(result).toBeCloseTo(112.8, 1); 
    }); 
});