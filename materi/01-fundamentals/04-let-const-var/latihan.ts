// ============================================================
// 04 · let, const, var — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/04-let-const-var/latihan.ts
// ============================================================

// TODO 1: Kode di bawah memakai `var` dan `let` sembarangan.
//         Ganti setiap kata kunci dengan `const` atau `let` yang PALING TEPAT.
//         (Petunjuk: variabel mana saja yang nilainya diubah?)
var namaToko = "Toko Maju";
var stokBarang = 100;
let tahunBerdiri = 2010;
var jumlahTerjual = 0;

jumlahTerjual = 15;
stokBarang = 85;

console.log(namaToko, tahunBerdiri, stokBarang, jumlahTerjual);


// TODO 2: Buat variabel statusPesanan yang HANYA boleh berisi
//         "diproses", "dikirim", atau "selesai". Nilai awalnya "diproses".
//         Ubah nilainya menjadi "dikirim", lalu tampilkan.


// TODO 3: Buat `const` bernama batasDiskon dan `let` bernama totalBelanja
//         dengan nilai yang sama (misalnya 100000).
//         Arahkan mouse ke keduanya. Tulis tipe masing-masing di komentar.
