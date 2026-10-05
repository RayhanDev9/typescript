// ============================================================
// 07 · Default Generic Type — Contoh
// Jalankan: npm run materi -- materi/09-generics/07-default-generic-type/contoh.ts
// ============================================================

console.log("=== DEMO DEFAULT GENERIC TYPE ===\n");

// ----------------------------------------------------------------------------
// 1. GENERIC INTERFACE DENGAN NILAI DEFAULT
// ----------------------------------------------------------------------------
// Jika T tidak dideklarasikan, maka secara otomatis dianggap 'string'
export interface NotifikasiSistem<T = string> {
  id: string;
  waktu: string;
  pesan: T;
}

// Penggunaan 1: Mengandalkan default (T = string)
const notifSederhana: NotifikasiSistem = {
  id: "NOTIF-01",
  waktu: "10:00:00",
  pesan: "Server backup telah selesai dilakukan.", // Wajib string!
};

// Penggunaan 2: Menggunakan tipe kustom (T = Objek Detail)
interface DetailErrorServer {
  kodeError: number;
  modul: string;
  rekomendasi: string;
}

const notifBahaya: NotifikasiSistem<DetailErrorServer> = {
  id: "NOTIF-02",
  waktu: "10:15:30",
  pesan: {
    kodeError: 500,
    modul: "Database Cluster",
    rekomendasi: "Restart instance database utama segera.",
  },
};

console.log("1. Notifikasi Default (Teks String):");
console.log(`   [${notifSederhana.waktu}] ${notifSederhana.pesan}`);

console.log("\n2. Notifikasi Khusus (Objek Detail):");
console.log(`   [${notifBahaya.waktu}] Error ${notifBahaya.pesan.kodeError} pada ${notifBahaya.pesan.modul}`);
console.log(`   Aksi: ${notifBahaya.pesan.rekomendasi}`);

// ----------------------------------------------------------------------------
// 2. GENERIC FUNCTION DENGAN DEFAULT TYPE
// ----------------------------------------------------------------------------
function buatPengaturan<T extends object = { tema: "terang" | "gelap" }>(
  opsi?: T
): T {
  // Nilai default jika opsi tidak dioper
  return (opsi ?? { tema: "terang" }) as T;
}

const temaDefault = buatPengaturan();
console.log("\n3. Pengaturan dengan Generic Default:", temaDefault);
