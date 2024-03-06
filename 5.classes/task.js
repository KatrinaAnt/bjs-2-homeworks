class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(fix) {
		if (fix < 0) {
			this._state = 0;
		} else if (fix <= 100) {
			this._state = fix;
		} else {
			this._state = 100;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const findResult = this.books.find(item => item[type] === value);
		return findResult || null;
	}

	giveBookByName(bookName) {
	    const book = this.findBookBy("name", bookName);
        if (!book) {
		    return null;
		}
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
	}
}

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return "Невалидное значение";
		} else if (this.marks.hasOwnProperty(subject) === false) {
			this.marks[subject] = [];
		};
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject) === false || this.marks[subject].length === 0) {
			return 0;
		};
		const subjectName = this.marks[subject];
		return subjectName.reduce((accumulator, item, index) => {
			const sum = accumulator + item;
			if (index === subjectName.length - 1) {
				return sum / subjectName.length;
			};
			return sum;
		}, 0);
	}

	getAverage() {
		const allSubgect = Object.keys(this.marks);
		return allSubgect.reduce((accumulator, item, index) => {
			const totalSum = accumulator + this.getAverageBySubject(item);
			if (index === allSubgect.length - 1) {
				return totalSum / allSubgect.length;
			};
			return totalSum;
		}, 0);
	}
}