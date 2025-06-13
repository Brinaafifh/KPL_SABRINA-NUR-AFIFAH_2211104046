const HaloGeneric = require('./HaloGeneric');
const DataGeneric = require('./DataGeneric');

// Membuat instance HaloGeneric dan memanggil method SapaUser
const halo = new HaloGeneric();
halo.SapaUser("Arwin Nabiel Arrofif"); // Ganti dengan nama panggilanmu

// Membuat instance DataGeneric dengan NIM
const data = new DataGeneric("2211104057"); // Ganti dengan NIM kamu
data.PrintData();
