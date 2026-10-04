// ============================================================
// 13 · Method Chaining — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/13-method-chaining/contoh.ts
// ============================================================

class KalkulatorKueri {
  private nilai: number;

  constructor(nilaiAwal: number = 0) {
    this.nilai = nilaiAwal;
  }

  public tambah(n: number): this {
    this.nilai += n;
    return this;
  }

  public kurang(n: number): this {
    this.nilai -= n;
    return this;
  }

  public kali(n: number): this {
    this.nilai *= n;
    return this;
  }

  public bagi(n: number): this {
    if (n !== 0) {
      this.nilai /= n;
    }
    return this;
  }

  public cetakHasil(): this {
    console.log(`[HASIL KALKULASI] Nilai saat ini: ${this.nilai}`);
    return this;
  }

  public getHasil(): number {
    return this.nilai;
  }
}

console.log("=== EKSEKUSI METHOD CHAINING KALKULATOR ===");
const hitung = new KalkulatorKueri(10);

// Operasi: ((10 + 5) * 2 - 6) / 3 = 8
hitung
  .tambah(5)
  .kali(2)
  .kurang(6)
  .bagi(3)
  .cetakHasil();

console.log("Hasil akhir numerik:", hitung.getHasil());
