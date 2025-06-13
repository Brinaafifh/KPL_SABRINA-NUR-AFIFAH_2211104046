class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
        console.log('Observer ditambahkan.');
    }

    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log('Observer dihapus.');
        }
    }

    notify(data) {
        console.log('Notifikasi ke semua observer...');
        this.observers.forEach(observer => observer.update(data));
    }
}

module.exports = Subject;
