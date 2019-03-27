export class Task {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
        if (!Task.count) {
            Task.count = 1;
        } else {
            Task.count++;
        }
    }


    render() {
        console.log(`Task name: ${this.name}; Priority: ${this.priority}`);
    }

    static getCount() {
        return Task.count;
    }
}