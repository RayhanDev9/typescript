// ============================================================
// 07 · Keyword this — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/07-keyword-this/contoh.ts
// ============================================================

// --- 1. this pada Fungsi Biasa (Strict Mode) ---
function cekThisFungsiBiasa(): void {
  // @ts-ignore
  console.log("1. this pada fungsi biasa:", this); // undefined
}
cekThisFungsiBiasa();

// --- 2. this pada Method Objek ---
const profilRayhan = {
  nama: "Rayhan",
  tahunLahir: 2001,
  hitungUmur() {
    console.log("2. this pada method:", this); // { nama: 'Rayhan', ... }
    return 2026 - this.tahunLahir;
  }
};

console.log("Umur Rayhan:", profilRayhan.hitungUmur());

// --- 3. Method Borrowing (Meminjam Method) ---
// Karena `this` dinamis bergantung siapa yang memanggil:
const profilBudi = {
  nama: "Budi",
  tahunLahir: 1990,
  // Meminjam fungsi hitungUmur dari profilRayhan
  hitungUmur: profilRayhan.hitungUmur
};

// Ketika dipanggil oleh profilBudi:
console.log("Umur Budi (Pinjam method):", profilBudi.hitungUmur()); // 36 (menggunakan tahunLahir Budi!)
