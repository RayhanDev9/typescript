// ============================================================
// 02 · Nilai & Variabel — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/02-nilai-dan-variabel/contoh.ts
// ============================================================

// --- Nilai langsung ---
console.log("Rayhan");
console.log(25);

// --- Menyimpan nilai di variabel ---
let namaDepan = "Rayhan";
console.log(namaDepan);
console.log(namaDepan); // bisa dipakai berkali-kali

// --- Nama yang deskriptif (camelCase) ---
let jumlahSiswaAktif = 30;
let hargaProduk = 15000;
console.log("Siswa aktif:", jumlahSiswaAktif);
console.log("Harga:", hargaProduk);

// --- Anotasi tipe (ditulis manual) ---
let namaKota: string = "Bandung";
let jumlahKelas: number = 4;
let sudahLulus: boolean = false;
console.log(namaKota, jumlahKelas, sudahLulus);

// --- Inferensi tipe (ditebak otomatis) ---
// Arahkan mouse ke `namaSekolah`: TypeScript menebak tipenya `string`
let namaSekolah = "SMK Nusantara";
console.log(namaSekolah);

// --- Variabel tanpa nilai awal: di sini anotasi berguna ---
let nilaiUjian: number;
nilaiUjian = 90;
console.log("Nilai ujian:", nilaiUjian);

// --- Mengganti isi variabel (tipenya harus tetap sama) ---
jumlahSiswaAktif = 32;
console.log("Siswa aktif sekarang:", jumlahSiswaAktif);

// ❌ Hapus tanda // untuk melihat error:
// jumlahSiswaAktif = "tiga puluh dua"; // Type 'string' is not assignable to type 'number'
// let 2umur = 20;                      // nama tidak boleh diawali angka
// let nama depan = "Rayhan";           // nama tidak boleh ada spasi
// console.log(namaDepn);               // Cannot find name 'namaDepn' (salah ketik)
