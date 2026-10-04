// ============================================================
// 08 · Konversi & Coercion — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/08-konversi-dan-coercion/contoh.ts
// ============================================================

// --- Konversi teks → angka ---
const inputTahun = "2001"; // anggap ini data dari form (selalu teks)

console.log(inputTahun + 18);         // "200118" ← disambung
console.log(Number(inputTahun) + 18); // 2019     ← dijumlah ✅
console.log(typeof inputTahun, typeof Number(inputTahun));

// --- NaN ---
const hasilGagal = Number("Rayhan");
console.log(hasilGagal);               // NaN
console.log(typeof hasilGagal);        // number
console.log(Number.isNaN(hasilGagal)); // true

// --- Kasus khusus ---
console.log(Number(""));     // 0 ← teks kosong menjadi 0, bukan NaN!
console.log(Number("3.5"));  // 3.5

// --- Konversi angka → teks ---
const kodeKelas = String(12);
console.log(kodeKelas, typeof kodeKelas); // "12" string

// --- Coercion yang masih diizinkan TypeScript ---
console.log("Umur saya " + 25 + " tahun"); // angka → teks
console.log("10" + 5);                     // "105" ⚠️ hati-hati!

// --- Coercion yang DITOLAK TypeScript (di JavaScript biasa ini jalan) ---
// console.log("23" - "10"); // ❌ JS: 13
// console.log("5" * "2");   // ❌ JS: 10
// console.log("10" > 5);    // ❌ JS: true

// --- Cara yang benar: konversi secara eksplisit ---
console.log(Number("23") - Number("10")); // 13
console.log(Number("5") * Number("2"));   // 10
console.log(Number("10") > 5);            // true
