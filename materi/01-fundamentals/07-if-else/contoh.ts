// ============================================================
// 07 · if / else — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/07-if-else/contoh.ts
// ============================================================

// --- if / else ---
const umur: number = 15;

if (umur >= 18) {
  console.log("Boleh membuat SIM 🚗");
} else {
  const tahunLagi = 18 - umur;
  console.log(`Belum boleh. Tunggu ${tahunLagi} tahun lagi ⏳`);
}

// --- else if: banyak pilihan ---
const nilai: number = 78;

if (nilai >= 90) {
  console.log("Nilai: A");
} else if (nilai >= 80) {
  console.log("Nilai: B");
} else if (nilai >= 70) {
  console.log("Nilai: C");
} else {
  console.log("Nilai: D");
}

// --- Mengisi variabel berdasarkan kondisi ---
const tahunLahir: number = 2012;
let generasi: string;

if (tahunLahir >= 2013) {
  generasi = "Gen Alpha";
} else if (tahunLahir >= 1997) {
  generasi = "Gen Z";
} else {
  generasi = "Milenial atau sebelumnya";
}
console.log(`Lahir tahun ${tahunLahir} → ${generasi}`);

// --- Block scope ---
if (umur < 18) {
  const pesanRahasia = "Hanya terlihat di dalam blok ini";
  console.log(pesanRahasia);
}
// console.log(pesanRahasia); // ❌ Cannot find name 'pesanRahasia'.

// --- TypeScript: variabel wajib diisi di semua jalur ---
let status: string;
if (umur >= 18) {
  status = "dewasa";
} else {
  status = "anak-anak"; // coba hapus blok else ini untuk melihat error
}
console.log("Status:", status);
// Tanpa else: ❌ Variable 'status' is used before being assigned.
