function EventObserver() {
    this.observers = [];

    this.subscribe = function(fn) {
        this.observers.push(fn);
    };

    this.unsubscribe = function(fn) {
      this.observers = this.observers.filter(subscriber => subscriber !== fn);
    };

    this.broadcast = function(data) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}

const eventItem = new EventObserver();

function test1() {
    setTimeout(function(){
        console.log('async start');
        console.log('async progress');
        console.log('async end');
        eventItem.broadcast({value: 2});
    }, 3000);
}

function test2(data) {
    console.log('Data from test 2:', data.value);
}

function test3(data) {
    console.log('Data from test 3:', data.value);
}

function test4(data) {
    console.log('Data from test 4:', data.value);
}

eventItem.subscribe(test2);
test1();


setTimeout(function(){
    eventItem.subscribe(test3);
    eventItem.subscribe(test4);
    test1();
}, 8000);
