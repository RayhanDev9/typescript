// ============================================================
// 07 · Keyword this — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/07-keyword-this/latihan.ts
// ============================================================

// Kasus: Sistem Profil Kendaraan & Method Borrowing

interface Kendaraan {
  merek: string;
  kecepatanMaks: number;
  info(): void;
}

// TODO 1: Buat objek `mobilSport: Kendaraan`:
//         - merek: "Ferrari"
//         - kecepatanMaks: 320
//         - info(): menampilkan "Mobil [merek] melaju hingga kecepatan maksimal [kecepatanMaks] km/jam"
//           MENGGUNAKAN `this.merek` dan `this.kecepatanMaks`.


// TODO 2: Buat objek `trukKargo: Kendaraan`:
//         - merek: "Volvo Truck"
//         - kecepatanMaks: 110
//         - info: pinjam method info dari `mobilSport.info` (method borrowing)!


// TODO 3: Panggil `mobilSport.info()` dan `trukKargo.info()`.
//         Amati apakah trukKargo berhasil menampilkan data miliknya sendiri.
