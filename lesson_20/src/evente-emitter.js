export class EventEmmiter {
    constructor() {
        this._events = {};
    }

    on(event, listener) {
        (this._events[event] || (this._events[event] = [])).push(listener);
        return this;
    }

    emit(event, arg) {
        console.log(this._events);
        (this._events[event] || []).forEach(listener => listener(arg));
    }
}