class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const top = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return top;
    }

    top() {
        const top = this.pop();
        this.push(top);
        return top;
    }

    empty() {
        return this.queue1.length === 0;
    }
}

module.exports = MyStack;