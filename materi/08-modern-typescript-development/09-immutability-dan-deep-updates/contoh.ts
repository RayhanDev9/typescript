// ============================================================================
// 09 · Immutability & Deep Updates — Contoh
// Jalankan: npx ts-node materi/08-modern-typescript-development/09-immutability-dan-deep-updates/contoh.ts
// ============================================================================

export interface Alamat {
  kota: string;
  kodePos: number;
}

export interface ProfilPengguna {
  readonly id: string;
  readonly nama: string;
  readonly alamat: Alamat;
  readonly hobi: readonly string[];
}

console.log("=== DEMO IMMUTABILITY & DEEP UPDATES ===\n");

const profilAwal: ProfilPengguna = {
  id: "USR-001",
  nama: "Rayhan",
  alamat: {
    kota: "Bandung",
    kodePos: 40115,
  },
  hobi: ["Coding", "Membaca"],
};

// ----------------------------------------------------------------------------
// 1. SHALLOW UPDATE DENGAN SPREAD OPERATOR
// ----------------------------------------------------------------------------
// Mengubah properti level pertama (nama)
const profilGantiNama: ProfilPengguna = {
  ...profilAwal,
  nama: "Rayhan Dwi",
};

// ----------------------------------------------------------------------------
// 2. DEEP NESTED UPDATE (MEMPERBARUI OBJEK BERSARANG SECARA AMAN)
// ----------------------------------------------------------------------------
// Mengubah kota di dalam alamat tanpa merusak objek alamat awal
const profilPindahKota: ProfilPengguna = {
  ...profilAwal,
  alamat: {
    ...profilAwal.alamat,
    kota: "Jakarta Selatan",
  },
};

// ----------------------------------------------------------------------------
// 3. ARRAY IMMUTABLE UPDATE (MENAMBAH & MENGURUTKAN TANPA MUTASI)
// ----------------------------------------------------------------------------
// Menambah hobi baru tanpa .push()
const profilTambahHobi: ProfilPengguna = {
  ...profilAwal,
  hobi: [...profilAwal.hobi, "Bermain Musik"],
};

// Mengurutkan array tanpa merusak array asli (menggunakan spread + sort)
const skorMentah: readonly number[] = [45, 10, 89, 72, 33];
const skorUrut: number[] = [...skorMentah].sort((a, b) => a - b);

console.log("1. Profil Awal (Tetap Utuh):");
console.log(`   Nama: ${profilAwal.nama} | Kota: ${profilAwal.alamat.kota}`);

console.log("\n2. Profil Setelah Pindah Kota (Objek Baru):");
console.log(`   Nama: ${profilPindahKota.nama} | Kota: ${profilPindahKota.alamat.kota}`);

console.log("\n3. Bukti Bahwa Alamat Awal Tidak Tertimpa:");
console.log(`   Kota di Profil Awal: ${profilAwal.alamat.kota} (Aman! Masih Bandung)`);
console.log(`   Apakah referensi alamat sama? ${profilAwal.alamat === profilPindahKota.alamat} (false = aman)`);

console.log("\n4. Pengurutan Array Immutability:");
console.log("   Skor Asli :", skorMentah);
console.log("   Skor Urut :", skorUrut);
