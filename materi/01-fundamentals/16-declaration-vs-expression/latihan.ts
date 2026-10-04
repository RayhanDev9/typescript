// ============================================================
// 16 · Declaration vs Expression — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/16-declaration-vs-expression/latihan.ts
// ============================================================

// TODO 1: Ubah fungsi declaration di bawah ini menjadi FUNCTION EXPRESSION
//         yang disimpan di dalam variabel `const persentaseDiskon`.
function hitungDiskon(hargaAwal: number, diskonPersen: number): number {
  return hargaAwal - hargaAwal * (diskonPersen / 100);
}


// TODO 2: Buat tipe TypeScript bernama `PengubahTeks`:
//         Sebuah fungsi yang menerima 1 parameter `teks` (string)
//         dan mengembalikan string.


// TODO 3: Gunakan tipe `PengubahTeks` di atas untuk membuat 2 Function Expression:
//         - `jadikanKapital`: mengubah seluruh teks menjadi huruf besar (.toUpperCase())
//         - `jadikanSensor`: mengganti seluruh teks menjadi bintang ("***")
