// ============================================================
// 04 · Class & Constructor — Solusi
// ============================================================

// TODO 1 & TODO 2
class ProdukDigital {
  constructor(
    public id: string,
    public nama: string,
    public harga: number,
    public rating: number = 5
  ) {}

  public tampilkanKatalog(): void {
    console.log(
      `[PRODUK ${this.id}] ${this.nama} - Rp${this.harga.toLocaleString("id-ID")} (Rating: ${this.rating}/5)`
    );
  }
}

// TODO 3
console.log("=== DAFTAR PRODUK DIGITAL ===");
const produk1 = new ProdukDigital("P-01", "Kursus TypeScript Lengkap", 199000, 5);
const produk2 = new ProdukDigital("P-02", "Ebook JavaScript Modern", 79000);

produk1.tampilkanKatalog();
produk2.tampilkanKatalog();
