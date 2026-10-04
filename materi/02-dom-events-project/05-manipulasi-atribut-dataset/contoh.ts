// ============================================================================
// 05 · Manipulasi Atribut & Dataset HTML
// CONTOH: Mengakses & Memodifikasi Atribut Standar serta dataset HTML5
// ============================================================================

// 1. Membaca & Memodifikasi Atribut Standar Formulir
const inputVoucher = document.querySelector<HTMLInputElement>("#input-voucher")!;

console.log("=== 1. Atribut Standar ===");
console.log("Status disabled awal:", inputVoucher.disabled);

// Mengaktifkan kembali kolom input dengan mengubah properti langsung
inputVoucher.disabled = false;
inputVoucher.placeholder = "Ketik PROMO2026 di sini!";

// Menggunakan method setAttribute untuk menambahkan atribut HTML kustom
inputVoucher.setAttribute("maxlength", "10");
console.log("Panjang maksimal karakter:", inputVoucher.getAttribute("maxlength"));

// 2. Mengakses HTML5 Custom Data Attributes (dataset)
const semuaTombolProduk =
  document.querySelectorAll<HTMLButtonElement>(".btn-item");
const kotakDetail = document.querySelector<HTMLDivElement>("#kotak-detail")!;

console.log("\n=== 2. Membaca dataset HTML5 ===");

semuaTombolProduk.forEach((tombol) => {
  // dataset otomatis mengonversi 'data-nama-barang' menjadi 'namaBarang' (camelCase)
  const idProduk: string | undefined = tombol.dataset.id;
  const namaBarang: string | undefined = tombol.dataset.namaBarang;
  const hargaString: string | undefined = tombol.dataset.harga;

  // Mengubah harga dari string ke number
  const hargaNumber: number = hargaString ? Number(hargaString) : 0;

  console.log(`[${idProduk}] ${namaBarang} - Rp ${hargaNumber.toLocaleString("id-ID")}`);

  // Menambahkan atribut data baru secara dinamis lewat TypeScript
  tombol.dataset.statusStok = "Tersedia";

  // Menangani klik pada tombol untuk menampilkan info ke UI
  tombol.addEventListener("click", () => {
    kotakDetail.innerHTML = `
      <h3>Detail Produk Terpilih:</h3>
      <p>Kode SKU: <strong>${idProduk}</strong></p>
      <p>Nama Barang: <strong>${namaBarang}</strong></p>
      <p>Harga: <strong>Rp ${hargaNumber.toLocaleString("id-ID")}</strong></p>
      <p>Status Stok: <em>${tombol.dataset.statusStok}</em></p>
    `;
  });
});

export {};
