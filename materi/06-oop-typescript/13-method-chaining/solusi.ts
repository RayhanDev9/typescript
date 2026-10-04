// ============================================================
// 13 · Method Chaining — Solusi
// ============================================================

// TODO 1
class PembuatKalimat {
  private kataArray: string[] = [];

  public tambahKata(kata: string): this {
    this.kataArray.push(kata);
    return this;
  }

  public tambahTandaBaca(tanda: string): this {
    if (this.kataArray.length > 0) {
      this.kataArray[this.kataArray.length - 1] += tanda;
    } else {
      this.kataArray.push(tanda);
    }
    return this;
  }

  public cetak(): this {
    console.log("[KALIMAT]", this.kataArray.join(" "));
    return this;
  }
}

// TODO 2
console.log("=== PENGUJIAN METHOD CHAINING ===");
const builder = new PembuatKalimat();

builder
  .tambahKata("Saya")
  .tambahKata("sedang")
  .tambahKata("belajar")
  .tambahKata("TypeScript")
  .tambahTandaBaca("!")
  .cetak();
