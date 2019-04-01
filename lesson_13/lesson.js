function Timer(elem, current, done) {
    this.elem = elem;
    this.current = current;
    this.done = done;
    this.timerId;

    this.start = () => {
        this.timerId = setInterval(() => {
            this.current -= 1;
            this.elem.innerHTML = this.current;
            if (this.current === 0) {
                this.pause();
                this.done ? this.done() : null;
            }
        }, 1000);
    };

    this.startPromise = () => {
      return new Promise((resolve, reject) => {
         this.timerId = setInterval(() => {
             this.current -= 1;
             this.elem.innerHTML = this.current;
             if (this.current === 0) {
                 this.pause();
                 return resolve();
             }
             // if (this.current < 0) {
             //     return reject();
             // }
         }, 1000);
      });
    };

    this.pause = () => {
      clearTimeout(this.timerId);
    };

    this.reset = (elem, current, done) => {
        this.elem = elem;
        this.current = current;
        this.done = done;
    }
}

const element = document.createElement('span');
element.innerHTML = '5';
const container = document.getElementById('message');
container.appendChild(element);
const button = document.getElementById('start');
const timer = new Timer(element, 5, onFirstTimerEnd);
button.onclick = firstTimerStart;

function firstTimerStart() {
    // timer.start();
    timer.startPromise()
        .then(()=> {
            container.innerHTML = 'Измеряйте пульс';
            element.innerHTML = '6';
            container.appendChild(element);
            timer.reset(element, 6, onSecondTimerEnd);
            return timer.startPromise();
        })
        .then(() => {
            container.innerHTML = 'Введите результат';

        })
        .catch(() => {

        });
}

function onFirstTimerEnd() {
    container.innerHTML = 'Измеряйте пульс';
    element.innerHTML = '6';
    container.appendChild(element);
    timer.reset(element, 6, onSecondTimerEnd);
    timer.start();
}

function onSecondTimerEnd() {
    container.innerHTML = 'Введите результат';
}

// const timer2 = new Timer(document.createElement('span'), 10);
//
// Promise.all([timer.startPromise(), timer2.startPromise()])
//     .then(() => {
//        console.log('timer1 timer2 end');
//     });

Promise.resolve(console.log('create'))
    .then(() => {
        console.log('Promise resolved 1');
    });

console.log('Hey!!!')

const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e718f5cbc2178c537d1e4ebb8492a17a/37.8267,-122.4233';

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    });

