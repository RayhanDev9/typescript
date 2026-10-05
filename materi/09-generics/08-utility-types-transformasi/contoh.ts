// ============================================================
// 08 · Utility Types: Transformasi Properti — Contoh
// Jalankan: npm run materi -- materi/09-generics/08-utility-types-transformasi/contoh.ts
// ============================================================

console.log("=== DEMO UTILITY TYPES: PARTIAL, REQUIRED, READONLY ===\n");

export interface ProfilPengguna {
  id: number;
  nama: string;
  email: string;
  nomorHp?: string; // Properti opsional
}

// ----------------------------------------------------------------------------
// 1. PARTIAL<T>: SEMUA PROPERTI MENJADI OPSIONAL
// ----------------------------------------------------------------------------
export function perbaruiProfil(
  profilLama: ProfilPengguna,
  perubahan: Partial<ProfilPengguna>
): ProfilPengguna {
  return {
    ...profilLama,
    ...perubahan,
  };
}

const akunAsli: ProfilPengguna = {
  id: 101,
  nama: "Rayhan",
  email: "rayhan@dev.id",
};

console.log("1. Profil Awal:", akunAsli);

// Hanya mengubah email, tanpa perlu mengetik ulang id dan nama
const akunUpdate = perbaruiProfil(akunAsli, {
  email: "rayhan.dwi@dev.id",
  nomorHp: "08123456789",
});

console.log("2. Hasil Update (Partial):", akunUpdate);

// ----------------------------------------------------------------------------
// 2. REQUIRED<T>: SEMUA PROPERTI WAJIB DIISI (MENGHAPUS TANDA ?)
// ----------------------------------------------------------------------------
// nomorHp yang tadinya opsional, sekarang menjadi WAJIB ADA!
type ProfilLengkap = Required<ProfilPengguna>;

const akunLengkap: ProfilLengkap = {
  id: 102,
  nama: "Budi Santoso",
  email: "budi@dev.id",
  nomorHp: "08987654321", // Wajib diisi, jika dihapus akan error kompilasi!
};

console.log("\n3. Profil Lengkap Terverifikasi (Required):", akunLengkap);

// ----------------------------------------------------------------------------
// 3. READONLY<T>: SEMUA PROPERTI TERKUNCI DARI MUTASI
// ----------------------------------------------------------------------------
const akunTerkunci: Readonly<ProfilPengguna> = {
  id: 103,
  nama: "Siti Rahma",
  email: "siti@dev.id",
};

// akunTerkunci.nama = "Siti Baru"; // ❌ Compile Error: Cannot assign to 'nama' because it is a read-only property!
console.log("\n4. Profil Terkunci (Readonly):", akunTerkunci);
console.log("   (Properti aman dari modifikasi yang tidak disengaja)");
