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

Student.prototype.getAverage = function () {
    if ('marks' in this === false || this.marks.length === 0) {
        //правильно ли проверка на существования объекта marks и наличия в нем оценок?
        return 0
    }
    return this.marks.reduce((acc, mark, item, arr) => acc + mark / this.marks.length, 0)
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;

    this.excluded = reason;
}
