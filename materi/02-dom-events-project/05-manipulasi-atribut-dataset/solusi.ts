// ============================================================================
// 05 · Manipulasi Atribut & Dataset HTML
// SOLUSI: Mengelola Data Atribut & Menghitung Diskon
// ============================================================================

// TODO 1:
// Ambil elemen '#input-voucher' dan aktifkan
const inputVoucher =
  document.querySelector<HTMLInputElement>("#input-voucher")!;
inputVoucher.disabled = false;
inputVoucher.placeholder = "Masukkan kupon diskon...";

// TODO 2:
// Ambil semua tombol produk dengan class '.btn-item'
const tombolProduk =
  document.querySelectorAll<HTMLButtonElement>(".btn-item");

// TODO 3 & 4:
// Hitung harga diskon dan simpan ke dataset.hargaDiskon
tombolProduk.forEach((tombol) => {
  const hargaAsli: number = Number(tombol.dataset.harga || "0");
  const hargaDiskon: number = hargaAsli * 0.9; // Diskon 10%

  // Simpan kembali ke dataset sebagai string
  tombol.dataset.hargaDiskon = hargaDiskon.toString();

  console.log(
    `Produk: ${tombol.dataset.namaBarang} | Diskon 10%: Rp ${hargaDiskon.toLocaleString("id-ID")}`
  );
});

export {};
