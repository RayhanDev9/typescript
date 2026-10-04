// ============================================================================
// 07 · Asynchronous TypeScript
// 03 · Konsep Dasar Promise (Contoh)
// ============================================================================

// 1. Interface Tipe Data Masa Depan
interface ProdukDigital {
  sku: string;
  nama: string;
  harga: number;
}

// 2. Fungsi yang Mengembalikan Promise<ProdukDigital>
function ambilProduk(id: string): Promise<ProdukDigital> {
  console.log(`[Pending] Sedang mencari produk ${id} di server...`);

  return new Promise<ProdukDigital>((resolve, reject) => {
    setTimeout(() => {
      if (id === "TS-01") {
        // Jika sukses, panggil resolve dengan data yang sesuai tipe
        resolve({
          sku: "TS-01",
          nama: "Kursus TypeScript Komprehensif",
          harga: 150000,
        });
      } else {
        // Jika gagal, panggil reject dengan objek Error
        reject(new Error(`Produk dengan ID "${id}" tidak ditemukan!`));
      }
    }, 500);
  });
}

// 3. Memeriksa Objek Promise yang Dihasilkan
const promiseSukses = ambilProduk("TS-01");

// Jika kita mencetak objek Promise secara langsung di awal, statusnya masih <pending>!
console.log("Objek Promise yang masih pending:", promiseSukses);

// 4. Contoh Promise yang Ditolak (Rejected)
const promiseGagal = ambilProduk("XYZ-99");
console.log("Objek Promise kedua:", promiseGagal);

// Mencegah unhandled rejection warning saat menjalankan contoh ini
promiseSukses.catch(() => {});
promiseGagal.catch(() => {});

export {};
