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
    if ('marks' in this === false) {
        this.marks = [marks]
        //правильно ли осуществленна проверка свойств?
        //как на этой стадии добавить элементы(оценки) в существующий массив marks
    }
}

Student.prototype.getAverage = function () {
    if ('marks' in this === fals || this.marks.length === 0) {
        //проверка на существования объекта marks и наличия в нем оценок.
        return 0
    }
    return this.marks.reduce((acc, item, arr) => acc + item / arr.length, 0)
}

Student.prototype.exclude = function (reason) {
  
}
