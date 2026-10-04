// ============================================================
// 06 · String & Template Literal — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/06-string-dan-template-literal/contoh.ts
// ============================================================

const nama = "Rayhan";
const tahunLahir = 2001;
const tahunSekarang = 2026;
const pekerjaan = "guru";

// --- Cara lama: + ---
const perkenalanLama =
  "Saya " + nama + ", umur " + (tahunSekarang - tahunLahir) + " tahun, seorang " + pekerjaan + ".";
console.log(perkenalanLama);

// --- Cara modern: template literal ---
const perkenalanBaru = `Saya ${nama}, umur ${tahunSekarang - tahunLahir} tahun, seorang ${pekerjaan}.`;
console.log(perkenalanBaru);

// --- Ekspresi apa saja di dalam ${ } ---
console.log(`5 x 4 = ${5 * 4}`);
console.log(`Tahun depan saya berumur ${tahunSekarang - tahunLahir + 1} tahun`);

// --- Template literal biasa (tanpa ${}) juga boleh ---
console.log(`Ini teks biasa dengan backtick`);

// --- Teks beberapa baris ---
console.log("Cara lama:\nBaris 1\nBaris 2");
console.log(`Cara baru:
Baris 1
Baris 2`);

// --- Tanda kutip di dalam teks ---
console.log("Hari Jum'at");
console.log('Dia berkata "halo"');
console.log(`Jum'at dia berkata "halo"`);

// --- Panjang teks ---
const bahasa = "TypeScript";
console.log(`"${bahasa}" terdiri dari ${bahasa.length} karakter`);

// ⚠️ Kesalahan umum: memakai kutip dua sehingga ${} tidak diproses
console.log("Halo ${nama}"); // tampil apa adanya: Halo ${nama}

// ❌ Hapus tanda // untuk melihat error TypeScript:
// console.log(`Halo ${namaa}`); // Cannot find name 'namaa'. Did you mean 'nama'?
