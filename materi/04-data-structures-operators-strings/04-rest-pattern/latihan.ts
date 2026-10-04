// ============================================================
// 04 · Rest Pattern & Parameters — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/04-rest-pattern/latihan.ts
// ============================================================

// TODO 1: Bongkar array `pelari` di bawah ini. Simpan pelari pertama di variabel `emas`,
//         pelari kedua di `perak`, dan semua pelari lainnya di array `pesertaLain`
//         menggunakan rest pattern.
const pelari: string[] = ["Budi", "Citra", "Doni", "Eka", "Fani"];


// TODO 2: Bongkar objek `smartphone` di bawah ini. Ambil `merk` dan `model` ke variabel terpisah,
//         lalu masukkan semua properti sisanya (ram, storage, baterai, os) ke dalam objek `spesifikasi`.
const smartphone = {
  merk: "TechPro",
  model: "X-2026",
  ram: "12GB",
  storage: "256GB",
  baterai: "5000mAh",
  os: "Android 15",
};


// TODO 3: Buat fungsi bernama `kalikanSemua` yang menerima satu parameter utama `faktor: number`,
//         dan rest parameter `...daftarAngka: number[]`.
//         Fungsi harus mengembalikan array baru berisi setiap angka yang telah dikalikan dengan `faktor`.
//         Contoh pemanggilan: kalikanSemua(2, 10, 20, 30) => [20, 40, 60]

// Tulis fungsimu di sini:

// Panggil fungsi untuk menguji:
// const hasilKali = kalikanSemua(3, 1, 2, 3, 4, 5);
// console.log("Hasil kali:", hasilKali);
