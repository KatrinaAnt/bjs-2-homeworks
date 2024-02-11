function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = null;
	max = Math.max(...arr);
	min = Math.min(...arr);
	sum = [...arr].reduce((accumulator, currentValue) => accumulator + currentValue);
	let average = sum / [...arr].length;
	return {
		min: min,
		max: max,
		avg: Number(average.toFixed(2))
	};
}

function summElementsWorker(...arr) {
	if (arr.length !== 0) {
		let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
		return sum;
	} else {
		return 0;
	};
}

function differenceMaxMinWorker(...arr) {
	if (arr.length !== 0) {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		let difference = max - min;
		return difference;
	} else {
		return 0;
	};
}

function differenceEvenOddWorker(...arr) {
	if (arr.length !== 0) {
		let sumEvenElements = 0;
		let sumOddElements = 0;
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElements += arr[i];
			} else {
				sumOddElements += arr[i];
			};
		};
		return (sumEvenElements - sumOddElements);
	} else {
		return 0;
	};
}

function averageEvenElementsWorker(...arr) {
	if (arr.length !== 0) {
		let sumEvenElements = null;
		let countEvenElements = null;
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) === 0) {
				sumEvenElements += arr[i];
				countEvenElements++;
			};
		};
		return (sumEvenElements / countEvenElements);
	} else {
		return 0;
	};
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const resultOfFunction = func(...arrOfArr[i]);
		if (resultOfFunction > maxWorkerResult) {
			maxWorkerResult = resultOfFunction;
		};
	};
	return maxWorkerResult;
}
