// ============================================================
// 14 · Strict Mode — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/14-strict-mode/contoh.ts
// ============================================================

// --- 1. Mencegah Typo yang Membuat Variabel Liar ---
let punyaSIM: boolean = false;
const lulusUjian: boolean = true;

if (lulusUjian) {
  punyaSIM = true; // ✅ Benar, mengisi ulang variabel yang sudah dideklarasikan
}

console.log("Status punya SIM:", punyaSIM);

// --- 2. Proteksi noImplicitAny (TypeScript Strict) ---
// Di bawah mode strict, setiap parameter fungsi WAJIB memiliki tipe data yang jelas
function hitungPajak(harga: number, persenPajak: number): number {
  return harga * (persenPajak / 100);
}

const pajakMakanan = hitungPajak(50000, 11);
console.log("Pajak Makanan:", pajakMakanan);

// --- 3. Proteksi strictNullChecks (TypeScript Strict) ---
// Variabel biasa tidak bisa dimasuki null secara sembarangan
let namaSiswa: string = "Budi";
// namaSiswa = null; // ❌ Type 'null' is not assignable to type 'string'.

// Jika memang boleh null, tulis secara eksplisit:
let namaWali: string | null = null;
namaWali = "Pak Joko";
console.log("Nama Wali Siswa:", namaWali);
