const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
        this.notificationCount = 0;
    }

    update(data) {
        this.notificationCount++;
        console.log(`${this.name} menerima notifikasi: ${data}`);

        if (this.notificationCount >= 3) {
            this.subject.detach(this);
            console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
        }
    }
}

module.exports = ConcreteObserver;
