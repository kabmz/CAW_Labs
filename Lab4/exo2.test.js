const {myColor, logMyColor, first, last, chunk } = require('./exo2');

describe('first function', () => {
  test('returns an empty array when the input array is null or n is less than or equal to 0', () => {
    expect(first(null, 3)).toEqual([]);
    expect(first([1, 2, 3], 0)).toEqual([]);
  });

  test('returns the first n elements of the array', () => {
    expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  test('returns the first element of the array when n is null', () => {
    expect(first([1, 2, 3])).toEqual(1);
  });
});

describe('last function', () => {
  test('returns an empty array when the input array is null', () => {
    expect(last(null, 3)).toEqual([]);
  });

  test('returns the last n elements of the array', () => {
    expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  test('returns the last element of the array when n is null', () => {
    expect(last([1, 2, 3])).toEqual(3);
  });
});

describe('chunk function', () => {
  test('chunks the array into subarrays of the specified size', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('handles arrays with a length not divisible by the chunk size', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });
});
describe('myColor array console.log statements', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    it('console.log prints myColor as a comma-separated string', () => {
      logMyColor();
      expect(console.log).toHaveBeenCalledWith('Red,Green,White,Black');
    });
  
    it('console.log prints myColor as a default joined string', () => {
      logMyColor();
      expect(console.log).toHaveBeenCalledWith('Red,Green,White,Black');
    });
  
    it('console.log prints myColor as a joined string without separators', () => {
      myColor;
      logMyColor();
      expect(console.log).toHaveBeenCalledWith('RedGreenWhiteBlack');
    });
  });

  