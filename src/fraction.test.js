const Fraction = require('./fraction');

describe('Sum', () => {
	const operations = [
		{
			firstFraction: new Fraction({
				numerator: 0, 
				denominator: 1
			}),
			secondFraction: new Fraction({
				numerator: 0, 
				denominator: 1
			}),
			expectedResult: new Fraction({
				numerator: 0, 
				denominator: 1
			})
		},
		{
			firstFraction: new Fraction({
				numerator: 1, 
				denominator: 7
			}),
			secondFraction: new Fraction({
				numerator: 2, 
				denominator: 7
			}),
			expectedResult: new Fraction({
				numerator: 3, 
				denominator: 7
			})
		}
	];
	
	operations.forEach(({ firstFraction, secondFraction, expectedResult }) => {
		it(`Add ${firstFraction.toString()} + ${secondFraction.toString()} should be equals to ${expectedResult.toString()}`, 
			() => {
			
			const sumResult = firstFraction.sum(secondFraction);
			
			expect(sumResult.equals(expectedResult)).toBe(true);
			expect(sumResult.toString()).toBe(expectedResult.toString());
		});
	})
});