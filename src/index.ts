/**
 * ============================================================
 * Selamat Datang di Starter Belajar TypeScript dari Nol!
 * ============================================================
 * File ini adalah titik awal (entry point) latihan kamu.
 * Di TypeScript, kita bisa menentukan tipe data secara jelas.
 */

// 1. Variabel dengan Tipe Data Dasar
const namaPengajar: string = "Guru TypeScript";
const jumlahSiswa: number = 30;
const kelasAktif: boolean = true;

// 2. Fungsi dengan Parameter dan Nilai Kembalian Bertipe
function sapaPeserta(nama: string): string {
  return `Halo, selamat datang ${nama}! Siap belajar TypeScript dari nol.`;
}

// 3. Menjalankan Kode
console.log("==========================================");
console.log("       STARTER KIT BELAJAR TYPESCRIPT     ");
console.log("==========================================");
console.log(sapaPeserta("Teman-teman"));
console.log(`Pengajar : ${namaPengajar}`);
console.log(`Peserta  : ${jumlahSiswa} orang`);
console.log(`Status   : ${kelasAktif ? "Kelas Sedang Berjalan" : "Kelas Selesai"}`);
console.log("==========================================");
