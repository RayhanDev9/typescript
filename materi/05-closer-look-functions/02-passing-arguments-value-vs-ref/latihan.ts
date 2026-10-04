// ============================================================
// 02 · Passing Arguments: Value vs Reference — Latihan
// Jalankan: npm run materi -- materi/05-closer-look-functions/02-passing-arguments-value-vs-ref/latihan.ts
// ============================================================

interface AkunBank {
  nomorRekening: string;
  saldo: number;
}

const akunSaya: AkunBank = {
  nomorRekening: "123-456-789",
  saldo: 1000000,
};

let bungaPersen = 5;

// TODO 1: Buat fungsi `ubahBunga(bunga: number): void` yang mengubah nilai `bunga = 10`.
//         Panggil fungsi tersebut dengan argumen `bungaPersen`, lalu buktikan bahwa
//         variabel `bungaPersen` di luar fungsi TIDAK berubah.


// TODO 2: Buat fungsi `tambahSaldo(akun: AkunBank, nominal: number): void`
//         yang menambahkan `akun.saldo += nominal`.
//         Panggil fungsi dengan `akunSaya` dan `500000`. Buktikan bahwa saldo `akunSaya`
//         di luar fungsi ikut bertambah menjadi 1.500.000.


// TODO 3: Buat fungsi `cetakLaporanAman(akun: Readonly<AkunBank>): void`
//         yang mencetak info saldo akun.
//         Pastikan parameter akun memiliki tipe `Readonly<AkunBank>` agar aman dari modifikasi.

