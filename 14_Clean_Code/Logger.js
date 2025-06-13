//13_Design_Pattern_Implementation – UNGUIDED (contoh Singleton)
//sebelum refactor
var instance;

function Logger() {
    if (instance) {
        return instance;
    }
    instance = this;
    this.logs = [];
}

Logger.prototype.log = function (message) {
    this.logs.push(message);
    console.log("LOG:", message);
};

module.exports = Logger;

//Sesudah refactor
/**
 * Singleton Logger class
 */
class Logger {
    constructor() {
        if (Logger.instance) return Logger.instance;
        this.logs = [];
        Logger.instance = this;
    }

    /**
     * Menambahkan log
     * @param {string} message 
     */
    log(message) {
        this.logs.push(message);
        console.log("LOG:", message);
    }
}

module.exports = Logger;
