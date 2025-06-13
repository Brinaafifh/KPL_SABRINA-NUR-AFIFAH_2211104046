**app.js**
Merupakan contoh aplikasi server sederhana menggunakan Express.js.

Sebelum perbaikan, masih memakai var dan belum dilengkapi dokumentasi.

Setelah diperbaiki:

Diganti menggunakan const serta arrow function.

Ditambahkan keterangan (dokumentasi) untuk endpoint utama.

Output saat server berjalan kini lebih informatif.

**convert.js**

Berisi fungsi konversi suhu dari Celcius ke Fahrenheit.

Setelah direstrukturisasi:

Menggunakan const untuk deklarasi variabel agar lebih aman.

Ditambahkan dokumentasi JSDoc untuk meningkatkan keterbacaan dan pemahaman fungsi.

**index.js**

Menjalankan aplikasi dan menampilkan pengaturan bahasa.

Setelah refactor:

Fungsi start() diganti namanya menjadi startApp() agar lebih jelas maksudnya.

Disisipkan komentar untuk menjelaskan fungsi secara singkat.

**Logger.js**
Mengimplementasikan pola desain Singleton untuk mencatat log aplikasi.

Sebelum refactor, masih berbasis function prototype dan memakai var.

Setelah dibersihkan:

Menggunakan sintaks class modern (ES6).

Memastikan hanya ada satu instance Logger yang dapat digunakan.

Ditambahkan komentar dokumentasi untuk metode log().

**Tujuan Utama **
Mempraktikkan prinsip clean code seperti:

Penggunaan nama variabel yang deskriptif.

Penggunaan const atau let menggantikan var.

Penambahan dokumentasi dan komentar untuk menjelaskan kode.

Penerapan struktur kode yang rapi dan mudah digunakan ulang.

Menerapkan pola desain (design pattern) seperti Singleton.

🧠 Ringkasan
Melalui kegiatan refactoring pada Modul 14 ini, kita mempelajari pentingnya menulis kode JavaScript yang bersih, terstruktur, dan mudah dipahami. Penerapan clean code sangat bermanfaat, terutama saat bekerja dalam tim maupun ketika membangun aplikasi berskala besar.

