// ============================================================
// 04 · Generic Classes — Latihan
// Jalankan: npm run materi -- materi/09-generics/04-generic-classes/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat generic class bernama `Tumpukan<T>` (Stack - Last In, First Out / LIFO).
 *    Method yang harus dimiliki:
 *    - `dorong(item: T): void` -> Menaruh elemen baru di posisi paling atas tumpukan.
 *    - `tarik(): T | undefined` -> Mengambil dan menghapus elemen dari posisi paling atas (.pop()).
 *    - `intipAtas(): T | undefined` -> Melihat elemen paling atas tanpa menghapusnya.
 *    - `get ukuran(): number` -> Mengembalikan jumlah elemen saat ini.
 *    - `apakahKosong(): boolean` -> Mengembalikan true jika tumpukan tidak berisi item.
 *
 * 2. Simulasikan fitur "Undo / Batal Perubahan" pada aplikasi teks:
 *    - Buat instance `riwayatUndo = new Tumpukan<string>()`.
 *    - Masukkan 3 aksi: "Ketik Judul", "Beri Warna Merah", "Hapus Paragraf 2".
 *    - Lakukan "Undo" sebanyak 1 kali (panggil method `tarik()`).
 *    - Periksa elemen teratas sekarang dan sisa ukuran tumpukan.
 */

// Tulis Generic Class Tumpukan<T> Anda di bawah ini:




// Eksekusi untuk menguji:
// const riwayatUndo = new Tumpukan<string>();
// riwayatUndo.dorong("Ketik Judul");
// riwayatUndo.dorong("Beri Warna Merah");
// riwayatUndo.dorong("Hapus Paragraf 2");

// console.log("Aksi Teratas:", riwayatUndo.intipAtas());
// console.log("Lakukan Undo:", riwayatUndo.tarik());
// console.log("Sisa Ukuran :", riwayatUndo.ukuran);
