// ============================================================
// 20 · Method Array Dasar — Solusi
// ============================================================

const keranjang: string[] = ["Buku TS", "Mouse", "Keyboard"];

// TODO 1
keranjang.push("Monitor");
console.log("Setelah tambah monitor:", keranjang);

// TODO 2
keranjang.unshift("Meja Kerja");
console.log("Setelah tambah meja:", keranjang);

// TODO 3
const barangBatal = keranjang.pop();
console.log(`Barang yang dibatalkan: ${barangBatal}`);
console.log("Isi keranjang terkini:", keranjang);

// TODO 4
if (keranjang.includes("Headphone")) {
  console.log("Headphone sudah masuk pesanan");
} else {
  console.log("Headphone belum ada di keranjang, ayo beli!");
}

// TODO 5
const indeksKeyboard = keranjang.indexOf("Keyboard");
if (indeksKeyboard !== -1) {
  console.log(`Keyboard berada di urutan ke-${indeksKeyboard + 1} di keranjang.`);
}
