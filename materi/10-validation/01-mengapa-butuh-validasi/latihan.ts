// ============================================================
// 01 · Mengapa Butuh Validasi? — Latihan
// Jalankan: npm run materi -- materi/10-validation/01-mengapa-butuh-validasi/latihan.ts
// ============================================================

export interface ProfilSiswa {
  nis: string;
  nama: string;
  umur: number;
}

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi runtime validator: `validasiProfilSiswa(input: unknown): ProfilSiswa | null`
 *    - Langkah 1: Pastikan `input` adalah objek nyata (bukan null, dan typeof === "object").
 *    - Langkah 2: Cek `nis` harus bertipe `string` dan tidak boleh kosong (.trim().length > 0).
 *    - Langkah 3: Cek `nama` harus bertipe `string` dan tidak boleh kosong.
 *    - Langkah 4: Cek `umur` harus bertipe `number`, bukan NaN, dan bernilai > 0.
 *    - Jika semua syarat terpenuhi, kembalikan objek bertipe `ProfilSiswa`.
 *    - Jika ada satu saja syarat yang gagal, kembalikan `null`.
 *
 * 2. Uji fungsi Anda dengan 3 sampel data mentah di bawah ini!
 */

const data1: unknown = { nis: "2026-001", nama: "Ahmad", umur: 16 };
const data2: unknown = { nis: "", nama: "Budi", umur: 17 }; // NIS kosong
const data3: unknown = { nis: "2026-003", nama: "Citra", umur: "18" }; // Umur salah tipe (string)

// Tulis fungsi validator Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Data 1:", validasiProfilSiswa(data1));
// console.log("Data 2:", validasiProfilSiswa(data2));
// console.log("Data 3:", validasiProfilSiswa(data3));
