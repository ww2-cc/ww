class MyCircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
        this.capacity = k;
    }

    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.front];
    }

    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.rear];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}

module.exports = MyCircularQueue;