// ============================================================
// 13 · Challenge: Generic In-Memory Repository & Cache — Latihan
// Jalankan: npm run materi -- materi/09-generics/13-challenge-generic-repository/latihan.ts
// ============================================================

import { type PunyaId } from "./contoh";

/**
 * 🎯 TANTANGAN BESAR:
 * Bangun kelas `Repository<T extends PunyaId>` dengan fitur CRUD dan Filter lengkap!
 *
 * 📌 METODE YANG WAJIB DIIMPLEMENTASIKAN:
 * 1. `tambah(item: T): void`
 *    - Masukkan item ke dalam penyimpanan (misal: Map atau Array internal).
 *    - Lempar error jika ID sudah terdaftar.
 *
 * 2. `ambilById(id: T["id"]): T | undefined`
 *    - Kembalikan item berdasarkan ID.
 *
 * 3. `ambilSemua(): readonly T[]`
 *    - Kembalikan array semua item dalam bentuk readonly.
 *
 * 4. `perbarui(id: T["id"], revisi: Partial<T>): T | undefined`
 *    - Cari item berdasarkan ID.
 *    - Jika ditemukan, perbarui propertinya dengan objek `revisi` (gunakan spread operator).
 *    - Kembalikan item yang sudah diperbarui.
 *
 * 5. `hapus(id: T["id"]): boolean`
 *    - Hapus item dari koleksi. Kembalikan true jika sukses, false jika ID tidak ditemukan.
 *
 * 6. `cari(kriteria: Partial<T>): T[]`
 *    - Filter item di mana setiap pasangan key-value pada `kriteria` cocok dengan properti item.
 */

// Model Uji Coba: Buku Perpustakaan
export interface BukuPerpustakaan extends PunyaId {
  id: string;
  judul: string;
  penulis: string;
  tahun: number;
  dipinjam: boolean;
}

// TULIS IMPLEMENTASI REPOSITORY LENGKAP ANDA DI BAWAH INI:




// Eksekusi untuk menguji:
// const repoBuku = new Repository<BukuPerpustakaan>();
// repoBuku.tambah({ id: "B1", judul: "TypeScript Pro", penulis: "Rayhan", tahun: 2026, dipinjam: false });
// repoBuku.tambah({ id: "B2", judul: "Clean Code TS", penulis: "Hendra", tahun: 2025, dipinjam: true });
// console.log("Semua Buku:", repoBuku.ambilSemua());
