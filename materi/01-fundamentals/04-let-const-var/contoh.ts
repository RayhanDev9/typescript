// ============================================================
// 04 · let, const, var — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/04-let-const-var/contoh.ts
// ============================================================

// --- let: boleh diisi ulang ---
let skor = 0;
console.log("Skor awal:", skor);
skor = 10;
skor = 25;
console.log("Skor akhir:", skor);

// --- const: tidak bisa diisi ulang ---
const tahunLahir = 1995;
console.log("Tahun lahir:", tahunLahir);
// tahunLahir = 1996; // ❌ Cannot assign to 'tahunLahir' because it is a constant.
// const kodePos;     // ❌ 'const' declarations must be initialized.

// --- var: cara lama (hindari) ---
var pekerjaan = "guru";
pekerjaan = "programmer";
console.log("Pekerjaan:", pekerjaan);

// --- Tipe literal ---
// Arahkan mouse ke kedua variabel ini dan bandingkan tipenya
let hargaLet = 5000;     // number
const hargaConst = 5000; // 5000
console.log(hargaLet, hargaConst);

let sapaanLet = "halo";     // string
const sapaanConst = "halo"; // "halo"
console.log(sapaanLet, sapaanConst);

// --- Membatasi pilihan nilai dengan tipe literal ---
let ukuranKaos: "S" | "M" | "L" = "M";
console.log("Ukuran kaos:", ukuranKaos);
ukuranKaos = "L"; // ✅ termasuk pilihan
console.log("Ukuran kaos baru:", ukuranKaos);
// ukuranKaos = "XL"; // ❌ Type '"XL"' is not assignable to type '"S" | "M" | "L"'.

// --- Lupa kata kunci ---
// namaSaya = "Rayhan"; // ❌ Cannot find name 'namaSaya'.
