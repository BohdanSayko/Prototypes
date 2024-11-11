function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} make a noise`);
}

function Dog(name) {
    Animal.call(this, name);
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.speak = function() {
    console.log(`${this.name} barks`);
}

const dog = new Dog('Bobik');
dog.speak();