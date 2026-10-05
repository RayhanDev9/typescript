// ============================================================
// 09 · Form Handling & Input Pengguna — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/09-form-dan-input/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Ambil elemen '#input-usia' menggunakan querySelector<HTMLInputElement>!.
// Ambil elemen '#box-hasil' menggunakan querySelector<HTMLDivElement>!.


// TODO 2:
// Buat fungsi helper 'hitungKategoriUsia(usia: number): string' yang mengembalikan:
// - "Anak-anak" jika usia < 13
// - "Remaja" jika usia >= 13 dan usia < 18
// - "Dewasa" jika usia >= 18


// TODO 3:
// Pasang event listener 'change' pada '#input-usia'.
// Di dalamnya:
// - Ambil nilai input dan ubah menjadi number menggunakan Number().
// - Jika nilainya valid (> 0), panggil 'hitungKategoriUsia' dan tampilkan hasilnya
//   ke dalam '#box-hasil' (contoh: "Kategori: Dewasa").


export {};
