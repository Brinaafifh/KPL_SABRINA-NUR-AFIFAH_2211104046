//rest_api – Contoh Express App
//sebelum refactor
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Halo dunia');
});

app.listen(3000);

//Sesudah refactor
const express = require('express');
const app = express();

/**
 * Endpoint root untuk menampilkan pesan halo
 */
app.get('/', (req, res) => {
    res.send('Halo dunia');
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
