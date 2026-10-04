// ============================================================
// 20 · Method Array Dasar — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/20-method-array-dasar/contoh.ts
// ============================================================

const teman: string[] = ["Andi", "Budi", "Cici"];
console.log("Daftar awal:", teman);

// --- 1. Menambahkan Elemen ---
// push: Menambah di ujung akhir
const panjangBaru = teman.push("Deni");
console.log("Setelah push('Deni'):", teman, `(panjang: ${panjangBaru})`);

// unshift: Menambah di ujung awal
teman.unshift("Zahra");
console.log("Setelah unshift('Zahra'):", teman);

// --- 2. Menghapus Elemen ---
// pop: Menghapus dari ujung akhir
const yangDihapusAkhir = teman.pop();
console.log("Dihapus dari akhir (pop):", yangDihapusAkhir);
console.log("Daftar sekarang:", teman);

// shift: Menghapus dari ujung awal
const yangDihapusAwal = teman.shift();
console.log("Dihapus dari awal (shift):", yangDihapusAwal);
console.log("Daftar sekarang:", teman);

// --- 3. Mencari & Memeriksa Elemen ---
// indexOf
console.log("Posisi 'Budi':", teman.indexOf("Budi")); // 1
console.log("Posisi 'Rian':", teman.indexOf("Rian")); // -1 (tidak ada)

// includes
console.log("Apakah ada 'Cici'?", teman.includes("Cici")); // true
console.log("Apakah ada 'Zahra'?", teman.includes("Zahra")); // false

if (teman.includes("Budi")) {
  console.log("Budi ada di dalam grup belajar!");
}
