function Vehicle(type, speed) {
    this.type = type;
    this.speed = speed;
}

Vehicle.prototype.move = function() {
    console.log(`${this.type} move with speed ${this.speed} km/h`);
}

const myCar = new Vehicle('car', 100);
myCar.move();