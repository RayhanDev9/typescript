// ============================================================
// 14 · Strict Mode — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/14-strict-mode/latihan.ts
// ============================================================

// TODO 1: Kode di bawah memiliki parameter tanpa tipe data.
//         Tambahkan anotasi tipe yang sesuai:
//         - `nominal` bertipe number
//         - `kodeMataUang` bertipe string
//         - fungsi mengembalikan string (misal: "Rp 50.000 (IDR)")
function formatUang(nominal: number, kodeMataUang: string): string {
  return `Rp ${nominal.toLocaleString("id-ID")} (${kodeMataUang})`;
}

console.log(formatUang(75000, "IDR"));


// TODO 2: Buat variabel `nomorTelepon` yang bertipe string atau undefined.
//         Berikan nilai awal string nomor HP (misal: "08123456789").
//         Kemudian periksa menggunakan `if (nomorTelepon)` sebelum menampilkannya
//         dengan format huruf besar (.toUpperCase()) agar terhindar dari crash runtime.
let nomorTelepon: string | undefined = "08123456789";


// TODO 3: Hapus tanda komentar pada baris di bawah, lalu perbaiki kesalahannya
//         sesuai kaidah Strict Mode TypeScript.
// const antreanAktif: number = null;
