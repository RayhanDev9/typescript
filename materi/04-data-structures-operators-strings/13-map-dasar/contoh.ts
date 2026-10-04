// ============================================================
// 13 · Map: Dasar — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/13-map-dasar/contoh.ts
// ============================================================

// 1. Membuat Map dan Menggunakan Berbagai Tipe Key
const restoMap = new Map<any, any>();

// Mengisi data dengan chaining .set()
restoMap
  .set("nama", "Trattoria Bella")
  .set(1, "Cabang Bandung")
  .set(2, "Cabang Jakarta")
  .set("kategori", ["Italia", "Pizzeria", "Vegetarian"])
  .set("jamBuka", 11)
  .set("jamTutup", 23)
  .set(true, "Silakan masuk, restoran sedang BUKA!")
  .set(false, "Maaf, restoran sudah TUTUP.");

console.log("=== 1. ISI RESTOMAP ===");
console.log(restoMap);
console.log("Jumlah entri (size):", restoMap.size);

// 2. Mengambil Nilai dengan .get()
console.log("\n=== 2. MENGAMBIL NILAI (.get) ===");
console.log("Nama Resto :", restoMap.get("nama"));
console.log("Cabang 1   :", restoMap.get(1));

// Trik logika boolean key
const waktuSaatIni = 15; // Jam 3 sore
const statusBuka = waktuSaatIni >= restoMap.get("jamBuka") && waktuSaatIni < restoMap.get("jamTutup");

console.log("Waktu saat ini:", waktuSaatIni);
console.log("Status resto  :", restoMap.get(statusBuka));

// 3. Memeriksa Kunci (.has) dan Menghapus (.delete)
console.log("\n=== 3. OPERASI .has DAN .delete ===");
console.log("Apakah ada cabang 2? :", restoMap.has(2)); // true
restoMap.delete(2);
console.log("Setelah cabang 2 dihapus, apakah masih ada? :", restoMap.has(2)); // false

// 4. Perangkap Referensi Memori pada Key Berupa Array/Object
console.log("\n=== 4. KEY BERUPA ARRAY & REFERENSI MEMORI ===");

// ❌ CARA SALAH:
restoMap.set([1, 2], "Meja VIP");
console.log("Ambil [1, 2] langsung (gagal):", restoMap.get([1, 2])); // undefined (alamat memori berbeda!)

// ✅ CARA BENAR:
const nomorMejaVip = [1, 2];
restoMap.set(nomorMejaVip, "Meja VIP Terdaftar");
console.log("Ambil dengan variabel referensi yang sama:", restoMap.get(nomorMejaVip)); // "Meja VIP Terdaftar"
