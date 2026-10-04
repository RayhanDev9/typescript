// ============================================================
// 08 · Konversi & Coercion — Contoh
// ============================================================

// ============================================================
// BAGIAN 1: KONVERSI TIPE (Manual & Disengaja oleh Kita)
// Kita secara sadar menyuruh komputer mengubah tipe data
// ============================================================

// 1. Teks → Angka dengan Number()
const inputFormulir = "2001";
const tahunLahir: number = Number(inputFormulir); 
console.log(tahunLahir + 18); // 2019 ✅ (dijumlahkan secara matematika)

// 2. Jika teks bukan angka, hasilnya NaN (Not a Number)
const hasilGagal = Number("Rayhan");
console.log(hasilGagal);               // NaN
console.log(typeof hasilGagal);        // number (di JS, NaN tetap tergolong tipe number)
console.log(Number.isNaN(hasilGagal)); // true

// 3. Kasus khusus konversi angka
console.log(Number(""));     // 0 (teks kosong menjadi angka 0)
console.log(Number("3.5"));  // 3.5 (desimal)

// 4. Angka → Teks dengan String()
const umurAngka = 25;
const umurTeks: string = String(umurAngka);
console.log(umurTeks, typeof umurTeks); // "25" string


// ============================================================
// BAGIAN 2: TYPE COERCION (Otomatis & Diam-diam oleh Bahasa)
// Komputer yang memaksa mengubah tipe data tanpa kita minta
// ============================================================

// 1. Coercion tanda '+' (Angka dipaksa mengalah menjadi Teks)
// Jika salah satu sisi berupa string, tanda '+' berubah peran jadi perekat kata:
console.log("Umur saya " + 25 + " tahun"); // angka 25 dipaksa jadi teks "25"
console.log("10" + 5);                     // "105" ⚠️ hati-hati, bukan 15!

// 2. Coercion di JavaScript biasa vs TypeScript:
// Di JavaScript biasa, tanda '-', '*', '/' memaksa teks jadi angka:
// "23" - "10" ──> di JS menghasilkan 13
// "5" * "2"   ──> di JS menghasilkan 10
// "10" > 5    ──> di JS menghasilkan true

// ⚠️ TETAPI di TypeScript, coercion di atas DITOLAK karena berbahaya!
// console.log("23" - "10"); // ❌ Error merah di TypeScript

// 3. Cara yang Benar di TypeScript:
// Daripada membiarkan komputer mengubah diam-diam (coercion),
// selalu gunakan Konversi Manual (Bagian 1) agar kodenya aman:
console.log(Number("23") - Number("10")); // 13 ✅
console.log(Number("5") * Number("2"));   // 10 ✅
console.log(Number("10") > 5);            // true ✅
