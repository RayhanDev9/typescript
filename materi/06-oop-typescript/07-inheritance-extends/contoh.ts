// ============================================================
// 07 · Pewarisan Class (extends & super) — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/07-inheritance-extends/contoh.ts
// ============================================================

// 1. Class Induk (Base / Parent Class)
class Mobil {
  constructor(
    public merk: string,
    public kecepatan: number = 0
  ) {}

  public gas(tambah: number): void {
    this.kecepatan += tambah;
    console.log(`[MOBIL ${this.merk}] Melaju: ${this.kecepatan} km/jam`);
  }

  public rem(kurang: number): void {
    this.kecepatan = Math.max(0, this.kecepatan - kurang);
    console.log(`[MOBIL ${this.merk}] Mengerem: ${this.kecepatan} km/jam`);
  }
}

// 2. Class Anak: MobilListrik (EV)
class MobilListrik extends Mobil {
  constructor(
    merk: string,
    kecepatan: number,
    public kapasitasBaterai: number, // persen (0 - 100)
    public modeHemat: boolean = false
  ) {
    super(merk, kecepatan); // Panggil constructor Mobil
  }

  // Method khusus Mobil Listrik
  public isiBaterai(tambahPersen: number): void {
    this.kapasitasBaterai = Math.min(100, this.kapasitasBaterai + tambahPersen);
    console.log(`[CHARGING ${this.merk}] Baterai sekarang: ${this.kapasitasBaterai}%`);
  }

  // Method Overriding: Gas pada mobil listrik mengurangi baterai!
  public override gas(tambah: number): void {
    if (this.kapasitasBaterai <= 0) {
      console.log(`[DITOLAK ${this.merk}] Baterai habis! Tidak bisa melaju.`);
      return;
    }

    this.kecepatan += tambah;
    this.kapasitasBaterai = Math.max(0, this.kapasitasBaterai - 2);
    console.log(
      `[EV ${this.merk}] Melaju: ${this.kecepatan} km/jam | Sisa Baterai: ${this.kapasitasBaterai}%`
    );
  }
}

console.log("=== 1. CLASS INDUK (MOBIL BIASA) ===");
const avanza = new Mobil("Toyota Avanza", 0);
avanza.gas(60);
avanza.rem(20);

console.log("\n=== 2. CLASS TURUNAN (MOBIL LISTRIK) ===");
const ioniq = new MobilListrik("Hyundai Ioniq 5", 0, 85);
ioniq.gas(80); // Menggunakan method override khusus EV
ioniq.isiBaterai(10);
ioniq.rem(30); // Mewarisi method rem() dari Mobil
