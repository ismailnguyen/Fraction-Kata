function Fraction ({ numerator, denominator }) {
	this.numerator = numerator;
	this.denominator = denominator;
}

Fraction.prototype.sum = function (fractionToSumWith) {
	const numerator = this.numerator * fractionToSumWith.denominator + fractionToSumWith.numerator * this.denominator;
	const denominator = this.denominator * fractionToSumWith.denominator;
	
	const commonDenominator = gcd(numerator, denominator);
	
	return new Fraction({
		numerator: numerator / commonDenominator,
		denominator: denominator / commonDenominator
	});
}

function gcd (a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

Fraction.prototype.equals = function (fractionToCompare) {
	return fractionToCompare.numerator === this.numerator
			&& fractionToCompare.denominator === this.denominator;
}

Fraction.prototype.toString = function () {
	return `${this.numerator}/${this.denominator}`;
}

module.exports = Fraction;