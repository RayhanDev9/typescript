// ============================================================
// 09 · Primitif vs Reference — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/09-primitif-vs-reference/latihan.ts
// ============================================================

// Kasus: Analisis Mutasi Array Referensi
const daftarSkorTimA: number[] = [10, 20, 30];
const daftarSkorTimB: number[] = daftarSkorTimA;

daftarSkorTimB.push(40);

// TODO 1: Tebak isi dari `daftarSkorTimA` dan `daftarSkorTimB` sebelum menjalankan file.
//         Apakah `daftarSkorTimA` ikut memiliki angka 40? Mengapa?


// TODO 2: Buktikan tebakanmu dengan mencetak kedua array tersebut menggunakan console.log.
