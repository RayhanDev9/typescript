// ============================================================
// 06 · Keyof & Lookup Types — Latihan
// Jalankan: npm run materi -- materi/09-generics/06-keyof-dan-lookup-types/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi generic `petikProperti<T, K extends keyof T>(daftar: T[], kunci: K): T[K][]`:
 *    - Fungsi ini menerima array objek `daftar: T[]` dan sebuah `kunci: K`.
 *    - Fungsi mengekstrak nilai dari properti `kunci` untuk setiap elemen objek dalam array.
 *    - Mengembalikan array baru bertipe `T[K][]` (contoh: jika kunci "nama", menghasilkan string[]).
 *
 * 2. Diberikan data siswa di bawah ini.
 * 3. Ekstrak array seluruh nama siswa (`petikProperti(daftarSiswa, "nama")`).
 * 4. Ekstrak array seluruh nilai ujian (`petikProperti(daftarSiswa, "skor")`).
 * 5. Cetak hasilnya ke konsol!
 */

interface SiswaUjian {
  id: number;
  nama: string;
  skor: number;
  grade: "A" | "B" | "C";
}

const dataKelas: SiswaUjian[] = [
  { id: 1, nama: "Budi Santoso", skor: 85, grade: "A" },
  { id: 2, nama: "Dewi Lestari", skor: 92, grade: "A" },
  { id: 3, nama: "Citra Amelia", skor: 74, grade: "B" },
];

// Tulis fungsi generic Anda di bawah ini:




// Eksekusi untuk menguji:
// const semuaNama = petikProperti(dataKelas, "nama");
// const semuaSkor = petikProperti(dataKelas, "skor");
// console.log("Daftar Nama:", semuaNama);
// console.log("Daftar Skor:", semuaSkor);
