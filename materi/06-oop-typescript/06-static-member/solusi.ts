// ============================================================
// 06 · Static Member — Solusi
// ============================================================

// TODO 1
class Geometri {
  public static readonly PI: number = 3.14159;

  public static luasLingkaran(radius: number): number {
    return this.PI * radius * radius;
  }

  public static kelilingLingkaran(radius: number): number {
    return 2 * this.PI * radius;
  }
}

// TODO 2
console.log("TODO 2.a (Luas r=7)    :", Geometri.luasLingkaran(7));
console.log("TODO 2.b (Keliling r=10):", Geometri.kelilingLingkaran(10));

// TODO 3
class PesananBarang {
  public static totalPesanan: number = 0;

  constructor(
    public namaBarang: string,
    public harga: number
  ) {
    PesananBarang.totalPesanan++;
  }
}

const p1 = new PesananBarang("Laptop", 12000000);
const p2 = new PesananBarang("Mouse", 250000);
const p3 = new PesananBarang("Keyboard", 800000);

console.log("\nTODO 3 -> Total Pesanan Dibuat:", PesananBarang.totalPesanan); // 3
