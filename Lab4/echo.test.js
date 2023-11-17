
const exf = require('./echo');

describe("echo tests", () => {
    test('exf("echo", 5) should return "echo echo echo echo echo"', () => {
        const result = exf("echo", 5);
        const expectedResult = "echo\necho\necho\necho\necho"; // Corrected expected result

        expect(result).toBe(expectedResult);
    });
});