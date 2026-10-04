// ============================================================
// 09 · Truthy & Falsy — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/09-truthy-dan-falsy/contoh.ts
// ============================================================

// --- 5 nilai falsy ---
console.log("=== Falsy ===");
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean(NaN));       // false

// --- Selain itu truthy ---
console.log("=== Truthy ===");
console.log(Boolean("Rayhan"));  // true
console.log(Boolean("0"));       // true ← teks "0" tidak kosong
console.log(Boolean(" "));       // true ← spasi juga isi
console.log(Boolean(-5));        // true
console.log(Boolean("false"));   // true ← ini teks, bukan boolean

// --- Dalam if ---
const uangJajan: number = 0;
if (uangJajan) {
  console.log("Jangan boros ya!");
} else {
  console.log("Uang jajan habis 😢");
}

const namaPanggilan: string = "";
if (namaPanggilan) {
  console.log(`Halo, ${namaPanggilan}`);
} else {
  console.log("Nama panggilan belum diisi");
}

// --- ⚠️ Jebakan angka 0 ---
const skorPemain: number = 0;

if (skorPemain) {
  console.log(`Skor: ${skorPemain}`);
} else {
  console.log("Belum ada skor"); // ❌ salah logika: skor 0 itu sah
}

if (skorPemain >= 0) {
  console.log(`Skor: ${skorPemain}`); // ✅ perbandingan eksplisit
}

// --- TypeScript: truthiness narrowing ---
// process.env berisi pengaturan dari sistem. Nilainya bisa ADA, bisa TIDAK.
// Tidak perlu memahami process.env sekarang, cukup perhatikan tipenya: string | undefined
const namaPengguna = process.env.NAMA_PENGGUNA;

if (namaPengguna) {
  // Arahkan mouse ke namaPengguna di sini → tipenya: string
  console.log(`Selamat datang, ${namaPengguna.toUpperCase()}`);
} else {
  console.log("Nama pengguna tidak ditemukan");
}

// ❌ Hapus tanda // untuk melihat error:
// console.log(namaPengguna.toUpperCase()); // 'namaPengguna' is possibly 'undefined'.
