// ============================================================
// 01 · Destructuring Array — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/01-destructuring-array/contoh.ts
// ============================================================

// Data simulasi restoran
const menuPembuka: string[] = ["Roti Bawang", "Bruschetta", "Sup Jamur"];
const menuUtama: string[] = ["Pizza Margherita", "Pasta Carbonara", "Risotto Seafood"];

// 1. Destructuring Dasar
const [makanan1, makanan2] = menuPembuka;
console.log("--- 1. Destructuring Dasar ---");
console.log("Pembuka 1:", makanan1); // Roti Bawang
console.log("Pembuka 2:", makanan2); // Bruschetta

// 2. Melompati Elemen (Skipping)
// Mengambil elemen indeks 0 dan indeks 2 (lewati indeks 1)
const [menuPertama, , menuKetiga] = menuUtama;
console.log("\n--- 2. Melompati Elemen ---");
console.log("Pilihan:", menuPertama, "dan", menuKetiga);

// 3. Menukar Nilai (Swapping)
let kokiSiang = "Chef Budi";
let kokiMalam = "Chef Siti";
console.log("\n--- 3. Menukar Nilai (Swap) ---");
console.log("Sebelum:", { kokiSiang, kokiMalam });

[kokiSiang, kokiMalam] = [kokiMalam, kokiSiang];
console.log("Sesudah:", { kokiSiang, kokiMalam });

// 4. Menerima Return Nilai dari Fungsi
function buatPaketMakan(idxPembuka: number, idxUtama: number): [string, string] {
  return [menuPembuka[idxPembuka], menuUtama[idxUtama]];
}

const [pembukaPilihan, utamaPilihan] = buatPaketMakan(2, 0);
console.log("\n--- 4. Destructuring Return Fungsi ---");
console.log(`Paket: ${pembukaPilihan} + ${utamaPilihan}`);

// 5. Nested Destructuring (Array Bersarang)
const antrianMeja: [string, string, [string, string]] = ["Meja 1", "Meja 2", ["VIP A", "VIP B"]];
const [mejaBiasa1, , [vip1, vip2]] = antrianMeja;
console.log("\n--- 5. Nested Destructuring ---");
console.log("Meja biasa:", mejaBiasa1);
console.log("Meja VIP:", vip1, "dan", vip2);

// 6. Default Values (Nilai Cadangan)
const ratingPelanggan: number[] = [5, 4];
const [r1 = 0, r2 = 0, r3 = 0] = ratingPelanggan;
console.log("\n--- 6. Default Values ---");
console.log("Rating 1:", r1); // 5
console.log("Rating 2:", r2); // 4
console.log("Rating 3:", r3); // 0 (karena tidak ada di array)

// 7. Tuple Destructuring di TypeScript
type InfoMenu = [nama: string, harga: number, halal: boolean];
const itemKopi: InfoMenu = ["Espresso Single", 25000, true];

const [namaKopi, hargaKopi, statusHalal] = itemKopi;
console.log("\n--- 7. Tuple TypeScript ---");
console.log(`Item: ${namaKopi}, Harga: Rp${hargaKopi.toLocaleString("id-ID")}, Halal: ${statusHalal}`);
