// ============================================================
// 06 · Hoisting & TDZ — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/06-hoisting-dan-tdz/contoh.ts
// ============================================================

// --- 1. Function Declaration (Bisa dipanggil duluan) ---
console.log("Panggil fungsi duluan:", hitungLuas(5, 4)); // 20

function hitungLuas(p: number, l: number): number {
  return p * l;
}

// --- 2. Variabel var (Di-hoist menjadi undefined) ---
// @ts-ignore (Mengabaikan pesan TS untuk demonstrasi perilaku JS)
console.log("Nilai var sebelum dideklarasikan:", nilaiLama); // undefined
var nilaiLama = 100;
console.log("Nilai var sesudah dideklarasikan:", nilaiLama); // 100

// --- 3. Mengapa Hoisting pada var Sangat Berbahaya? (Contoh Nyata Bug) ---
// Skenario: Hapus produk jika jumlahBarang === 0
var jumlahBarang = 10;

function periksaStok(): void {
  // ⚠️ Jika lupa dan membuat `var jumlahBarang` di bawah:
  // @ts-ignore
  if (!jumlahBarang) {
    // Di sini `jumlahBarang` bernilai undefined (falsy)!
    // Sehingga blok ini dieksekusi padahal barang aslinya ada 10!
    console.log("⚠️ BUG: Stok dianggap habis karena var di-hoist jadi undefined!");
  }
  var jumlahBarang = 5;
}

periksaStok();

// --- 4. Variabel let & const (Aman di dalam TDZ) ---
// console.log(namaModern); // ❌ Block-scoped variable 'namaModern' used before its declaration.
const namaModern = "Rayhan";
console.log("let/const aman setelah deklarasi:", namaModern);
