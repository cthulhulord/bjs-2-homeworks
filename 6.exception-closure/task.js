function parseCount(parseValue) {
			let parseResult = Number.parseFloat(parseValue);
			if (Number.isNaN(parseResult)) {
				throw new Error('Невалидное значение');
			} else {
				return parseResult;
			}
		}

function validateCount(parseValue) {
	try {
		return parseCount(parseValue);
		} catch(error) {
		return error;
	} finally {
	}
}

class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;

		if (this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side3 + this.side2 < this.side1) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		return (this.side1 + this.side2 + this.side3);
	}

	get area() {
		let p = this.perimeter / 2;
		console.log(p);
		return +Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3);
	}
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);
	} catch(error) {
		return error;
	} finally {
	}
	
}