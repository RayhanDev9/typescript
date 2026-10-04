// ============================================================
// 05 · Getter & Setter — Latihan
// Jalankan: npm run materi -- materi/06-oop-typescript/05-getter-dan-setter/latihan.ts
// ============================================================

// TODO 1: Buat class `SuhuRuangan`:
//         - Properti internal: `private _celsius: number = 0;`
//         - Constructor menerima `celsius: number` dan menugaskannya ke setter.
//         - Getter `celsius`: mengembalikan `this._celsius`.
//         - Setter `celsius`: hanya menerima suhu >= -273.15 (nol mutlak). Jika di bawah itu, tolak dan beri peringatan.
//         - Getter `fahrenheit`: menghitung dan mengembalikan `(this._celsius * 9/5) + 32`.
//         - Setter `fahrenheit`: mengonversi input fahrenheit ke celsius `(f - 32) * 5/9` lalu menyimpannya ke `this._celsius`.


// TODO 2: Uji class `SuhuRuangan`:
//         a. Buat objek `suhu` dengan nilai awal 25°C.
//         b. Tampilkan suhu dalam Celsius dan Fahrenheit via getter.
//         c. Ubah suhu via setter fahrenheit menjadi 212°F, lalu cek berapa suhu Celsius-nya (harus 100°C).

