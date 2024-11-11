function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

function Student(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.study = function() {
    console.log(`Studet learn ${this.subject}`);
}

const student1 = new Student("Bohdan", "Math");
student1.greet();
student1.study();
