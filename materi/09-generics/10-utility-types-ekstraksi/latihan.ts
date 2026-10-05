// ============================================================
// 10 · Utility Types: Ekstraksi & Filter — Latihan
// Jalankan: npm run materi -- materi/09-generics/10-utility-types-ekstraksi/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Diberikan union status pengiriman paket:
 *    `type StatusPaket = "menunggu_kurir" | "dalam_perjalanan" | "terkirim" | "gagal_kirim" | "retur";`
 *    - Gunakan `Exclude` untuk membuat `StatusMasihBerjalan` (buang status "terkirim", "gagal_kirim", dan "retur").
 *    - Gunakan `Extract` untuk membuat `StatusKasusMasalah` (ambil hanya "gagal_kirim" dan "retur").
 *
 * 2. Diberikan fungsi pembuat invoice di bawah: `buatKwitansi(noInvoice: string, nominal: number)`.
 *    - Tanpa membuat interface baru secara manual, gunakan `ReturnType<typeof buatKwitansi>`
 *      untuk membuat tipe data `KwitansiResmi`.
 *    - Gunakan `Parameters<typeof buatKwitansi>` untuk mengekstrak tipe argumen fungsinya.
 *
 * 3. Buat variabel menggunakan tipe-tipe di atas dan cetak hasilnya ke konsol!
 */

export type StatusPaket =
  | "menunggu_kurir"
  | "dalam_perjalanan"
  | "terkirim"
  | "gagal_kirim"
  | "retur";

export function buatKwitansi(noInvoice: string, nominal: number) {
  return {
    nomor: noInvoice,
    total: nominal,
    dicetakPada: new Date().toISOString(),
    lunas: true,
  };
}

// Tulis tipe data hasil ekstraksi dan pengujian Anda di bawah ini:




// Eksekusi untuk menguji:
// const statusKurir: StatusMasihBerjalan = "dalam_perjalanan";
// const buktiBayar: KwitansiResmi = buatKwitansi("INV-001", 350000);
// console.log("Bukti:", buktiBayar);
