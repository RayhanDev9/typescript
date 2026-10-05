// ============================================================
// 03 · Type Narrowing: Operator in — Contoh
// Jalankan: npm run materi -- materi/10-validation/03-in-operator-narrowing/contoh.ts
// ============================================================

console.log("=== DEMO TYPE NARROWING DENGAN OPERATOR 'IN' ===\n");

// Dua interface berbeda bentuk (Plain Object tanpa Class)
export interface AkunAdmin {
  id: number;
  nama: string;
  tingkatAkses: "SUPER_ADMIN" | "MODERATOR";
  bisaHapusData: boolean;
}

export interface AkunPenggunaBiasa {
  id: number;
  nama: string;
  poinMember: number;
}

export type AkunSistem = AkunAdmin | AkunPenggunaBiasa;

// Fungsi yang membedakan tipe akun menggunakan operator 'in'
export function sambutPengguna(akun: AkunSistem): string {
  // Memeriksa apakah properti khusus 'tingkatAkses' ada di dalam objek
  if ("tingkatAkses" in akun) {
    // Di sini TypeScript mempersempit tipe akun menjadi 'AkunAdmin'
    return `[ADMIN PANEL] Selamat datang ${akun.nama} (${akun.tingkatAkses}). Izin Hapus: ${akun.bisaHapusData}`;
  }

  // Di sini akun dipastikan 'AkunPenggunaBiasa'
  return `[PORTAL MEMBER] Halo ${akun.nama}! Poin belanja Anda: ${akun.poinMember} poin.`;
}

const adminSatu: AkunAdmin = {
  id: 1,
  nama: "Rayhan Dwi",
  tingkatAkses: "SUPER_ADMIN",
  bisaHapusData: true,
};

const memberSatu: AkunPenggunaBiasa = {
  id: 101,
  nama: "Budi Santoso",
  poinMember: 450,
};

console.log(sambutPengguna(adminSatu));
console.log(sambutPengguna(memberSatu));

// ----------------------------------------------------------------------------
// CONTOH KEDUA: METODE PENGIRIMAN PESAN
// ----------------------------------------------------------------------------
interface NotifikasiEmail {
  alamatEmail: string;
  subjek: string;
}

interface NotifikasiSMS {
  nomorTelepon: string;
  pesanSingkat: string;
}

export function kirimNotifikasi(tujuan: NotifikasiEmail | NotifikasiSMS): void {
  if ("alamatEmail" in tujuan) {
    console.log(`\n📧 Mengirim Email ke ${tujuan.alamatEmail} dengan subjek: "${tujuan.subjek}"`);
  } else {
    console.log(`\n📱 Mengirim SMS ke ${tujuan.nomorTelepon}: "${tujuan.pesanSingkat}"`);
  }
}

kirimNotifikasi({ alamatEmail: "user@domain.com", subjek: "Verifikasi Akun" });
kirimNotifikasi({ nomorTelepon: "08123456789", pesanSingkat: "Kode OTP Anda: 9942" });
