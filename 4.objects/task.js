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
    if ('marks' in this === true) {
        return 
    }
}

Student.prototype.getAverage = function () {
    if (this.marks.length === 0) {
        return 0
    }
    return this.marks.reduce((acc, item, arr) => acc + item / arr.length, 0)
}

Student.prototype.exclude = function (reason) {
  
}
