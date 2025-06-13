//pertemuan4 – Contoh Fungsi Konversi Suhu
//sebelum refactor
var suhu = 100;

function toFahrenheit(suhu) {
    return suhu * 9 / 5 + 32;
}

console.log(toFahrenheit(suhu));

// Sesudah refactor
const suhu = 100;

/**
 * Mengubah suhu dari Celcius ke Fahrenheit
 * @param {number} celcius 
 * @returns {number}
 */
function toFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

console.log(toFahrenheit(suhu));
