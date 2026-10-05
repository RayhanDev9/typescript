// ============================================================
// 11 · Validasi Objek Bersarang & Array — Latihan
// Jalankan: npm run materi -- materi/10-validation/11-validasi-nested-dan-arrays/latihan.ts
// ============================================================

import { z } from "zod";

/**
 * 🎯 TUGAS:
 * 1. Buat Sub-skema `SkemaNilaiMapel`:
 *    - `mataPelajaran`: string
 *    - `skor`: number, minimal 0, maksimal 100 (pesan: "Skor harus antara 0 s/d 100")
 *
 * 2. Buat Sub-skema `SkemaBiodataSiswa`:
 *    - `nis`: string
 *    - `nama`: string
 *    - `daftarNilai`: array dari `SkemaNilaiMapel`, tidak boleh kosong (.nonempty())
 *
 * 3. Buat Skema Induk `SkemaRombelKelas`:
 *    - `namaKelas`: string (contoh: "10-IPA-1")
 *    - `waliKelas`: string
 *    - `anggotaSiswa`: array dari `SkemaBiodataSiswa`, minimal 2 siswa (.min(2))
 *
 * 4. Uji skema dengan objek `dataRombelUji` di bawah ini.
 *    Cetak lokasi error dan pesan kesalahan jika terjadi penolakan data!
 */

export const dataRombelUji: unknown = {
  namaKelas: "TS-101",
  waliKelas: "Pak Hendra",
  anggotaSiswa: [
    {
      nis: "NIS-01",
      nama: "Ahmad",
      daftarNilai: [
        { mataPelajaran: "Matematika", skor: 85 },
        { mataPelajaran: "Fisika", skor: 150 }, // Error: skor > 100!
      ],
    },
    // Error: Hanya ada 1 siswa, padahal syarat minimal 2 siswa!
  ],
};

// Tulis skema Zod dan kode pengujian Anda di bawah ini:




// Eksekusi untuk menguji:
// const hasil = SkemaRombelKelas.safeParse(dataRombelUji);
// console.log("Hasil Validasi:", hasil);
