function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let firstStudent = new Student("Анастасия", "женский", 26);
let secondStudent = new Student("Евгений", "мужской", 31);
let thirdStudent = new Student("Полина", "женский", 19);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty("marks") === false) {
		return console.log(`Отчислен за ${this.excluded}`);
	};
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") === false || this.marks.length === 0) {
		return 0;
	};
	let sum = 0;
	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	};
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}
