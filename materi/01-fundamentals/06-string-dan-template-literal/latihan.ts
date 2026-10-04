// ============================================================
// 06 · String & Template Literal — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/06-string-dan-template-literal/latihan.ts
// ============================================================

const namaProduk: string = "Kopi Susu";
const hargaSatuan: number = 18000;
const jumlahBeli: number = 3;

// TODO 1: Ubah kalimat di bawah (yang memakai +) menjadi template literal.
const struk = "Anda membeli " + jumlahBeli + " " + namaProduk + " seharga " + hargaSatuan + " per gelas.";
console.log(struk);


// TODO 2: Tampilkan kalimat: "Total yang harus dibayar: Rp 54000"
//         Hitung totalnya LANGSUNG di dalam ${ }.


// TODO 3: Buat struk beberapa baris dengan SATU template literal:
//         ===== KEDAI NUSANTARA =====
//         Produk : Kopi Susu
//         Jumlah : 3
//         Total  : Rp 54000
//         ===========================


// TODO 4: Tampilkan kalimat: "Nama produk Kopi Susu terdiri dari 9 karakter"
//         (gunakan .length, jangan menulis angka 9 secara manual)
