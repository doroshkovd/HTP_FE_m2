function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'some text';
    this.color = options.color || 'white';
}

function Truck(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'some text';
    this.color = options.color || 'black';
}

function carsFactory(options) {
    if(options.type === 'car') {
        return new Car(options);
    } else {
        return new Truck(options);
    }
}

newCar = carsFactory({type: 'car'});
newTruck = carsFactory({type: 'c'});

console.log(newCar);
console.log(newTruck);