// ============================================================
// 02 · Dari TypeScript ke JavaScript — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/02-dari-typescript-ke-javascript/latihan.ts
// ============================================================
var Aldi = {
    nim: "123445",
    nama: "Rendy",
    ipk: 3.7,
    isLulus: "Belom di evaluasi",
};
// TODO 2: Buat fungsi `evaluasiAkademik`:
//         - Menerima parameter `mhs: Mahasiswa`
//         - Mengembalikan string: "Pujian / Cumlaude" jika ipk >= 3.5, dan "Sangat Memuaskan" jika di bawah 3.5.
function evaluasiAkademik(mhs) {
    mhs.ipk >= 3.5 ? (mhs.isLulus = "Lulus") : (mhs.isLulus = "Tidak");
    return mhs;
}
var mhs1 = evaluasiAkademik(Aldi);
console.info(mhs1);
// TODO 3: Jalankan perintah `npm run build` di terminal untuk mengompilasi file ini ke folder `dist/`.
//         Buka file hasil kompilasinya di `dist/materi/03-behind-the-scenes/02-dari-typescript-ke-javascript/latihan.js`.
//         Amati apakah `interface Mahasiswa` masih ada atau sudah dihapus (Type Erasure).
