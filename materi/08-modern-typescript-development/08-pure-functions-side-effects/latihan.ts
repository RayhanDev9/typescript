// ============================================================================
// 08 · Pure Functions & Side Effects — Latihan
// Jalankan: npx ts-node materi/08-modern-typescript-development/08-pure-functions-side-effects/latihan.ts
// ============================================================================

/**
 * 🎯 TUGAS:
 * Ubah dua fungsi TIDAK MURNI (Impure) di bawah ini menjadi PURE FUNCTION!
 */

// ❌ KASUS 1: Fungsi ini memodifikasi array input aslinya!
export function tambahTugasImpure(daftar: string[], tugasBaru: string): string[] {
  daftar.push(tugasBaru);
  return daftar;
}

// ❌ KASUS 2: Fungsi ini bergantung dan mengubah counter global di luar fungsi!
let nomorAntreanGlobal = 100;
export function ambilNomorAntreanImpure(): number {
  nomorAntreanGlobal++;
  return nomorAntreanGlobal;
}

// ----------------------------------------------------------------------------
// TULIS FUNGSI PURE VERSI ANDA DI BAWAH INI:
// ----------------------------------------------------------------------------

// 1. Buat `tambahTugasPure(daftar: readonly string[], tugasBaru: string): string[]`
//    Fungsi TIDAK BOLEH memutasi array daftar asli! Kembalikan array baru.


// 2. Buat `ambilNomorAntreanPure(antreanTerakhir: number): number`
//    Fungsi harus deterministik menerima nomor terakhir dan mengembalikan nomor berikutnya.




// Eksekusi untuk menguji:
// const antreanAwal: readonly string[] = ["Beli Kertas", "Cetak Buku"];
// const antreanBaru = tambahTugasPure(antreanAwal, "Kirim Paket");
// console.log("Array Asli:", antreanAwal); // Harus tetap 2 item
// console.log("Array Baru:", antreanBaru); // Harus berisi 3 item
