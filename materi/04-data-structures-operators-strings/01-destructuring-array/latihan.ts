// ============================================================
// 01 · Destructuring Array — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/01-destructuring-array/latihan.ts
// ============================================================

// TODO 1: Ambil dua warna pertama dari array `warnaFavorit` ke dalam
//         variabel `warna1` dan `warna2` menggunakan array destructuring.
const warnaFavorit: string[] = ["Biru", "Merah", "Hijau", "Kuning"];


// TODO 2: Dari array `pemenangLomba`, ambil juara 1 ke variabel `juara1`
//         dan juara 3 ke variabel `juara3` (LEWATI juara 2).
const pemenangLomba: string[] = ["Andi", "Budi", "Citra", "Doni"];


// TODO 3: Tukar nilai variabel `skorA` dan `skorB` menggunakan destructuring
//         dalam SATU baris tanpa membuat variabel bantuan baru.
let skorA = 100;
let skorB = 250;
// Tulis kode swap di bawah ini:

console.log("Skor A (harus 250):", skorA);
console.log("Skor B (harus 100):", skorB);


// TODO 4: Bongkar array bersarang di bawah ini untuk mengambil angka 10
//         ke variabel `angka10` dan angka 40 ke variabel `angka40`.
const nestedData: [number, number, [number, number]] = [10, 20, [30, 40]];


// TODO 5: Destruktur array `dimensi` di bawah ini ke variabel `panjang`,
//         `lebar`, dan `tinggi`. Berikan nilai default 1 untuk `tinggi`
//         karena dimensi hanya berisi dua angka.
const dimensi: number[] = [15, 8];

