// ============================================================
// 14 · Generic Class — Solusi
// ============================================================

// TODO 1
class KotakPenyimpanan<T> {
  private isi: T[] = [];

  public simpan(barang: T): void {
    this.isi.push(barang);
  }

  public ambilSemua(): T[] {
    return [...this.isi];
  }

  public hitungTotal(): number {
    return this.isi.length;
  }
}

// TODO 2
console.log("=== PENGUJIAN GENERIC CLASS ===");
const kotakAngka = new KotakPenyimpanan<number>();
kotakAngka.simpan(100);
kotakAngka.simpan(200);
kotakAngka.simpan(300);

console.log("Kotak Angka:", kotakAngka.ambilSemua(), "| Total:", kotakAngka.hitungTotal());

const kotakKata = new KotakPenyimpanan<string>();
kotakKata.simpan("TypeScript");
kotakKata.simpan("OOP");

console.log("Kotak Kata :", kotakKata.ambilSemua(), "| Total:", kotakKata.hitungTotal());
