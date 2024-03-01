function parseCount(count) {
	const resultParse = Number.parseFloat(count);
	if (Number.isNaN(resultParse)) {
		throw new Error("Невалидное значение");
	};
	return resultParse;
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(first, second, third) {
		if ((first + second) < third || (first + third) < second || (third + second) < first) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.firstSide = first;
		this.secondSide = second;
		this.thirdSide = third;
	}

	get perimeter() {
		return (this.firstSide + this.secondSide + this.thirdSide);
	}

	get area() {
		const halfmeter = this.perimeter / 2;
		const areaValue = Math.sqrt(halfmeter * (halfmeter - this.firstSide) * (halfmeter - this.secondSide) * (halfmeter - this.thirdSide));
		return Number(areaValue.toFixed(3));
	}
}

function getTriangle(first, second, third) {
	try {
		return new Triangle(first, second, third);
	} catch (error) {
		return {
			get perimeter() {
				return ("Ошибка! Треугольник не существует");
			},
			get area() {
				return ("Ошибка! Треугольник не существует");
			}
		}
	}
}