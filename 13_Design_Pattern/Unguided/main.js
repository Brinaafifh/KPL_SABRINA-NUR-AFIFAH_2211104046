const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

const subject = new Subject();

// Kirim subject ke observer agar bisa unsubscribe nanti
const observer1 = new ConcreteObserver("Observer 1", subject);
const observer2 = new ConcreteObserver("Observer 2", subject);

subject.attach(observer1);
subject.attach(observer2);

// Kirim beberapa notifikasi
subject.notify("Update versi 1.0");
subject.notify("Update versi 2.0");
subject.notify("Update versi 3.0");
subject.notify("Update versi 4.0");
