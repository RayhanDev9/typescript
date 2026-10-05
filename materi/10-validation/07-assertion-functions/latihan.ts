// ============================================================
// 07 · Assertion Functions — Latihan
// Jalankan: npm run materi -- materi/10-validation/07-assertion-functions/latihan.ts
// ============================================================

export interface KonfigurasiDatabase {
  host: string;
  port: number;
  namaDb: string;
}

/**
 * 🎯 TUGAS:
 * 1. Buat Assertion Function:
 *    `assertKonfigurasiDb(config: unknown): asserts config is KonfigurasiDatabase`
 *    - Cek apakah `config` adalah objek dan bukan null (jika gagal: throw error).
 *    - Cek apakah `host` adalah string dan tidak kosong.
 *    - Cek apakah `port` adalah number (rentang 1 s/d 65535).
 *    - Cek apakah `namaDb` adalah string dan tidak kosong.
 *
 * 2. Buat fungsi `koneksikanKeDatabase(configMentah: unknown): string`:
 *    - Panggil `assertKonfigurasiDb(configMentah)`.
 *    - Kembalikan string: `Sukses terhubung ke database '${configMentah.namaDb}' di ${configMentah.host}:${configMentah.port}`.
 *
 * 3. Uji fungsi dengan konfigurasi valid dan tangkap konfigurasi tidak valid menggunakan blok `try...catch`.
 */

// Tulis fungsi asersi dan implementasi koneksi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log(koneksikanKeDatabase({ host: "localhost", port: 5432, namaDb: "belajar_ts" }));
// try {
//   koneksikanKeDatabase({ host: "localhost", port: -1, namaDb: "" });
// } catch (e) {
//   console.log("Error tertangkap:", (e as Error).message);
// }
