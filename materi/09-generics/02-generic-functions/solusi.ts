// ============================================================
// 02 · Generic Functions — Solusi
// Jalankan: npm run materi -- materi/09-generics/02-generic-functions/solusi.ts
// ============================================================

export function gabungkanObjek<T, U>(objA: T, objB: U): T & U {
  return {
    ...objA,
    ...objB,
  };
}

console.log("=== PENGUJIAN SOLUSI GABUNG OBJEK GENERIC ===");

const dataPribadi = {
  nama: "Siti Rahma",
  usia: 22,
};

const dataAkademik = {
  nim: "10122001",
  jurusan: "Teknik Informatika",
};

const profilMahasiswa = gabungkanObjek(dataPribadi, dataAkademik);

console.log("Objek Hasil Penggabungan:", profilMahasiswa);

// Pembuktian Autocomplete & Type Safety untuk Intersection T & U
console.log("\nAkses Properti Terpadu:");
console.log(`Nama    : ${profilMahasiswa.nama}`);
console.log(`Usia    : ${profilMahasiswa.usia} tahun`);
console.log(`NIM     : ${profilMahasiswa.nim}`);
console.log(`Jurusan : ${profilMahasiswa.jurusan}`);
