// ============================================================
// 04 · Rest Pattern & Parameters — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/04-rest-pattern/contoh.ts
// ============================================================

// 1. Rest Pattern pada Array Destructuring
const daftarMenu = [
  "Pizza Margherita",
  "Spaghetti Carbonara",
  "Risotto Jamur",
  "Tiramisu",
  "Panna Cotta",
];

// Ambil 2 menu pertama, sisa menu dimasukkan ke array `menuLainnya`
const [menuFav1, menuFav2, ...menuLainnya] = daftarMenu;

console.log("--- 1. Rest Pattern pada Array ---");
console.log("Favorit 1 :", menuFav1);
console.log("Favorit 2 :", menuFav2);
console.log("Sisa Menu :", menuLainnya);

// 2. Rest Pattern pada Object Destructuring
interface ProfilResto {
  nama: string;
  kota: string;
  rating: number;
  mejaTersedia: number;
  fasilitasWifi: boolean;
}

const warungKopi: ProfilResto = {
  nama: "Kopi Senja",
  kota: "Yogyakarta",
  rating: 4.7,
  mejaTersedia: 15,
  fasilitasWifi: true,
};

// Ambil nama dan kota, sisa properti dikumpulkan ke dalam object `spesifikasi`
const { nama, kota, ...spesifikasi } = warungKopi;

console.log("\n--- 2. Rest Pattern pada Object ---");
console.log(`Resto: ${nama} (${kota})`);
console.log("Spesifikasi tambahan:", spesifikasi);

// 3. Rest Parameters pada Fungsi
function hitungTotalBelanja(...hargaItem: number[]): number {
  let total = 0;
  for (const harga of hargaItem) {
    total += harga;
  }
  return total;
}

console.log("\n--- 3. Rest Parameter Penjumlahan ---");
console.log("Total 1 item : Rp", hitungTotalBelanja(25000));
console.log("Total 3 item : Rp", hitungTotalBelanja(25000, 15000, 45000));
console.log("Total 0 item : Rp", hitungTotalBelanja());

// 4. Kombinasi Parameter Biasa + Rest Parameter
function buatPesananCustom(
  namaPemesan: string,
  ukuran: "Regular" | "Large",
  ...tambahanTopping: string[]
): void {
  console.log(`\n--- Pesanan: ${namaPemesan} (${ukuran}) ---`);
  if (tambahanTopping.length === 0) {
    console.log("Topping: Standar tanpa tambahan.");
  } else {
    console.log(`Topping Tambahan (${tambahanTopping.length}): ${tambahanTopping.join(", ")}`);
  }
}

console.log("\n--- 4. Kombinasi Parameter + Rest ---");
buatPesananCustom("Rayhan", "Large", "Keju Mozzarella", "Daging Sapi", "Saus BBQ");
buatPesananCustom("Budi", "Regular");
