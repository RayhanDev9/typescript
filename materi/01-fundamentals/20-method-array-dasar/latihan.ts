// ============================================================
// 20 · Method Array Dasar — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/20-method-array-dasar/latihan.ts
// ============================================================

// Kasus: Kelola Keranjang Belanja Online
const keranjang: string[] = ["Buku TS", "Mouse", "Keyboard"];

// TODO 1: Tambahkan "Monitor" ke bagian AKHIR keranjang belanja.
keranjang.push("Komputer");
console.info(keranjang);

// TODO 2: Tambahkan "Meja Kerja" ke bagian AWAL keranjang belanja.
keranjang.unshift("Meja kerja");

// TODO 3: Batalkan barang terakhir (hapus barang paling akhir) dan simpan ke variabel `barangBatal`.
//         Tampilkan nama barang yang dibatalkan tersebut.
keranjang.pop();

// TODO 4: Periksa apakah "Headphone" ada di dalam keranjang menggunakan `.includes()`:
//         - Jika ada: tampilkan "Headphone sudah masuk pesanan"
//         - Jika belum: tampilkan "Headphone belum ada di keranjang, ayo beli!"
console.info(
  keranjang.includes("Headphone")
    ? "Headphone sudah masuk keranjang"
    : "Headphone belom ada di keranjang, ayo beli",
);
// TODO 5: Cari posisi indeks dari "Keyboard" di dalam keranjang, lalu tampilkan nomor antreannya
//         (Ingat: nomor antrean manusia dimulai dari 1, sedangkan indeks array dimulai dari 0).
console.info(keranjang);
console.info(keranjang.indexOf("Komputer"));
