// ============================================================
// 03 · Generic Interfaces & Type Aliases — Contoh
// Jalankan: npm run materi -- materi/09-generics/03-generic-interfaces-types/contoh.ts
// ============================================================

console.log("=== DEMO GENERIC INTERFACES & TYPE ALIASES ===\n");

// ----------------------------------------------------------------------------
// 1. GENERIC INTERFACE: PEMBUNGKUS RESPON API STANDAR
// ----------------------------------------------------------------------------
export interface ResponApi<T> {
  statusCode: number;
  sukses: boolean;
  data: T;
  waktu: string;
}

// Entitas Data
export interface Siswa {
  nis: string;
  nama: string;
  kelas: string;
}

export interface MataPelajaran {
  id: string;
  namaPelajaran: string;
  kkm: number;
}

// Penggunaan Interface Generic untuk satu objek
const responSiswa: ResponApi<Siswa> = {
  statusCode: 200,
  sukses: true,
  waktu: "2026-10-05T08:00:00Z",
  data: {
    nis: "2026001",
    nama: "Ahmad Rayhan",
    kelas: "TS-A",
  },
};

// Penggunaan Interface Generic untuk Array (Nested Generic)
const responMapel: ResponApi<MataPelajaran[]> = {
  statusCode: 200,
  sukses: true,
  waktu: "2026-10-05T08:00:00Z",
  data: [
    { id: "MP-1", namaPelajaran: "Algoritma & Pemrograman", kkm: 75 },
    { id: "MP-2", namaPelajaran: "Basis Data", kkm: 80 },
  ],
};

console.log("1. Respon Satu Siswa:");
console.log(`   Nama Siswa : ${responSiswa.data.nama} (Kelas: ${responSiswa.data.kelas})`);

console.log("\n2. Respon Daftar Pelajaran (Array):");
responMapel.data.forEach((mp, idx) => {
  console.log(`   ${idx + 1}. [${mp.id}] ${mp.namaPelajaran} (KKM: ${mp.kkm})`);
});

// ----------------------------------------------------------------------------
// 2. GENERIC TYPE ALIAS: POLA HASIL OPERASI (DISCRIMINATED RESULT)
// ----------------------------------------------------------------------------
export type HasilKomputasi<T> =
  | { berhasil: true; nilai: T }
  | { berhasil: false; pesanKesalahan: string };

function bagiAngka(a: number, b: number): HasilKomputasi<number> {
  if (b === 0) {
    return { berhasil: false, pesanKesalahan: "Tidak dapat membagi angka dengan nol!" };
  }
  return { berhasil: true, nilai: a / b };
}

console.log("\n3. Generic Type Alias Result Pattern:");
const hitung1 = bagiAngka(10, 2);
if (hitung1.berhasil) {
  console.log("   Hasil 10 / 2 =", hitung1.nilai);
}

const hitung2 = bagiAngka(10, 0);
if (!hitung2.berhasil) {
  console.log("   Hasil 10 / 0 Gagal:", hitung2.pesanKesalahan);
}
