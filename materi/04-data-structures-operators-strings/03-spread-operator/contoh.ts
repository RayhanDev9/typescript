// ============================================================
// 03 · Spread Operator — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/03-spread-operator/contoh.ts
// ============================================================

// Data awal restoran
const menuMakanan = ["Pizza", "Pasta", "Risotto"];
const menuMinuman = ["Ice Lemon Tea", "Cappuccino", "Mineral Water"];

// 1. Memperluas Array dengan Elemen Baru
const menuMakananBaru = [...menuMakanan, "Gnocchi", "Bruschetta"];
console.log("--- 1. Memperluas Array ---");
console.log("Menu Makanan Lama:", menuMakanan);
console.log("Menu Makanan Baru:", menuMakananBaru);

// 2. Menggabungkan 2 Array
const bukuMenuLengkap = [...menuMakanan, ...menuMinuman];
console.log("\n--- 2. Menggabungkan Array ---");
console.log("Semua Menu:", bukuMenuLengkap);

// 3. Shallow Copy (Menghindari mutasi referensi bersama)
const pesananMeja1 = ["Pizza", "Cola"];
const pesananMeja2 = [...pesananMeja1]; // Salinan mandiri

pesananMeja2.push("Tiramisu");

console.log("\n--- 3. Shallow Copy Array ---");
console.log("Meja 1 (asli tetap aman):", pesananMeja1);
console.log("Meja 2 (ditambah Tiramisu):", pesananMeja2);

// 4. Spread Operator pada Objek
interface ProfilResto {
  nama: string;
  alamat: string;
  rating: number;
  buka: boolean;
}

const restoPusat: ProfilResto = {
  nama: "Pizza Bella",
  alamat: "Jl. Riau No. 10, Bandung",
  rating: 4.8,
  buka: true,
};

// Buat cabang baru dengan menimpa alamat
const restoCabang: ProfilResto = {
  ...restoPusat,
  alamat: "Jl. Sudirman No. 25, Jakarta", // Timpa alamat
  rating: 4.5,                          // Timpa rating
};

console.log("\n--- 4. Object Spread ---");
console.log("Resto Pusat :", restoPusat);
console.log("Resto Cabang:", restoCabang);

// 5. Menyebarkan Array ke Argumen Fungsi
function buatPasta(bahan1: string, bahan2: string, bahan3: string): void {
  console.log(`Pasta lezat dimasak dengan: ${bahan1}, ${bahan2}, dan ${bahan3}.`);
}

const bahanPasta: [string, string, string] = ["Fettuccine", "Saus Krim", "Keju Parmesan"];

console.log("\n--- 5. Spread ke Argumen Fungsi ---");
buatPasta(...bahanPasta);

// Contoh fungsi bawaan Math.max & Math.min
const tagihanList: number[] = [120000, 450000, 85000, 230000];
const tagihanTertinggi = Math.max(...tagihanList);
const tagihanTerendah = Math.min(...tagihanList);

console.log(`Tagihan tertinggi: Rp${tagihanTertinggi.toLocaleString("id-ID")}`);
console.log(`Tagihan terendah : Rp${tagihanTerendah.toLocaleString("id-ID")}`);
