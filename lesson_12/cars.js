class Car {
    constructor() {
        console.log('New car');
    }
}

export class BMW extends Car {
    constructor() {
        super();
        console.log('Model: BMW');
    }
}