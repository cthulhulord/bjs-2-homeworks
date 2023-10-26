function Student(name, gender, age) {
  	this.name = name;
  	this.gender = gender;
  	this.age = age;
  	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks != undefined) {
  	this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks != undefined && this.marks.length != 0) {
  	return this.marks.reduce((acc, curr) => acc + curr, 0) / this.marks.length;
  } else {
  	return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student('Alex', 'male', 17);
let student2 = new Student('Jane', 'female', 19);
let student3 = new Student('Ann', 'female', 18); 