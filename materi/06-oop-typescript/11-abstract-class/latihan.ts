// ============================================================
// 11 · Abstract Class & Method — Latihan
// Jalankan: npm run materi -- materi/06-oop-typescript/11-abstract-class/latihan.ts
// ============================================================

// TODO 1: Buat `abstract class KaryawanKantor`:
//         - Constructor: `constructor(public nama: string, public idKaryawan: string) {}`
//         - Abstract method: `abstract hitungGajiBulanan(): number;`
//         - Concrete method: `cetakSlipGaji(): void` yang mencetak:
//           "[SLIP GAJI] <nama> (<idKaryawan>) -> Total Gaji: Rp<hitungGajiBulanan()>"


// TODO 2: Buat class `KaryawanTetap` yang mewarisi `KaryawanKantor`:
//         - Constructor menerima: `nama: string`, `idKaryawan: string`, dan `public gajiPokok: number`.
//         - Implementasikan `hitungGajiBulanan()` -> mengembalikan `this.gajiPokok`.


// TODO 3: Buat class `KaryawanKontrak` yang mewarisi `KaryawanKantor`:
//         - Constructor menerima: `nama: string`, `idKaryawan: string`, `public tarifPerJam: number`, dan `public jamKerja: number`.
//         - Implementasikan `hitungGajiBulanan()` -> mengembalikan `this.tarifPerJam * this.jamKerja`.


// TODO 4: Buat 1 instance `KaryawanTetap` ("Budi", "T-01", 7000000)
//         dan 1 instance `KaryawanKontrak` ("Siti", "K-02", 50000, 160).
//         Panggil `cetakSlipGaji()` pada kedua objek tersebut.

