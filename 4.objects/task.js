function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ("marks" in this === true) {
        this.marks = [...this.marks, ...marks]
    }
}

Student.prototype.addMarks(mark1, mark2, mark3, ...rest) = function (marks) {
    return addMarks;
}

Student.prototype.getAverage = function () {
    if ('marks' in this === false || this.marks.length === 0) {
        //правильно ли проверка на существования объекта marks и наличия в нем оценок?
        return 0
    }
    return this.marks.reduce((acc, item) => acc + item / this.marks.length, 0)
    //правильно ли мщется среднее значение у this.marks?
}

Student.prototype.exclude = function (reason) {
  
}
