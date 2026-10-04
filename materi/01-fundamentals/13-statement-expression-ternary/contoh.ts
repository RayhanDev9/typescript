// ============================================================
// 13 · Statement, Expression & Ternary — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/13-statement-expression-ternary/contoh.ts
// ============================================================

// --- 1. Expression vs Statement ---
// Expression: Potongan kode yang menghasilkan nilai
3 + 4;
true && false;
const teks = `Halo ${2000 + 26}`; // 2000 + 26 adalah expression

// Statement: Kalimat tindakan penuh (tidak menghasilkan nilai langsung)
let nilaiUjian: number = 85;
if (nilaiUjian >= 75) {
  console.log("Selamat, kamu lulus!");
}

// --- 2. Operator Ternary ---
const umur: number = 20;

// Format: kondisi ? nilaiJikaTrue : nilaiJikaFalse
const statusDewasa: string = umur >= 18 ? "Dewasa" : "Anak-anak";
console.log(`Status umur ${umur}: ${statusDewasa}`);

// --- 3. Ternary di dalam Template Literal ---
const sedangLogin: boolean = true;
console.log(`Pengguna saat ini: ${sedangLogin ? "🟢 Online" : "🔴 Offline"}`);

const skor: number = 100;
console.log(`Hasil tes: Anda ${skor >= 70 ? "LULUS 🎉" : "REMEDIAL 📚"}`);

// --- 4. Inferensi Tipe TypeScript pada Ternary ---
const dapatVoucher: boolean = false;
// Arahkan mouse ke `hadiah`: TypeScript menebak tipenya `string | number`
const hadiah = dapatVoucher ? "VOUCHER100K" : 0;
console.log("Hadiah yang diperoleh:", hadiah);
