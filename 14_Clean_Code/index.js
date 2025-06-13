//Modul 08 - Runtime Configuration dan Internationalization
//sebelum refactor
var config = require('./config');
var data = require('./data');

function start() {
    console.log("Aplikasi berjalan");
    console.log("Bahasa:", config.lang);
}

start();

//Sesudah refactor
const config = require('./config');
const data = require('./data');

/**
 * Menjalankan aplikasi utama
 * @function
 */
function startApp() {
    console.log("Aplikasi berjalan");
    console.log("Bahasa:", config.lang);
}

startApp();
