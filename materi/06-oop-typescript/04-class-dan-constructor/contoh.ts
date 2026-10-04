// ============================================================
// 04 · Class & Constructor — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/04-class-dan-constructor/contoh.ts
// ============================================================

// 1. Deklarasi Class Standar
class TiketPesawat {
  public kodePenerbangan: string;
  public namaPenumpang: string;
  public harga: number;

  constructor(kode: string, nama: string, harga: number) {
    this.kodePenerbangan = kode;
    this.namaPenumpang = nama;
    this.harga = harga;
  }

  public cetakTiket(): void {
    console.log(
      `[TIKET] ${this.namaPenumpang} | Penerbangan: ${this.kodePenerbangan} | Harga: Rp${this.harga.toLocaleString("id-ID")}`
    );
  }
}

console.log("=== 1. CLASS STANDAR ===");
const tiket1 = new TiketPesawat("GA-812", "Ahmad Rayhan", 1500000);
tiket1.cetakTiket();

// 2. TypeScript Shorthand: Parameter Properties
class MobilModern {
  // Properti default
  public mesinMenyala: boolean = false;

  // Shorthand parameter properties langsung membuat `this.merk` dan `this.kecepatanMaks`
  constructor(
    public merk: string,
    public kecepatanMaks: number,
    public warna: string = "Hitam"
  ) {}

  public starter(): void {
    this.mesinMenyala = true;
    console.log(`[MESIN] ${this.merk} (${this.warna}) dinyalakan. Siap melaju hingga ${this.kecepatanMaks} km/jam.`);
  }
}

console.log("\n=== 2. TS PARAMETER PROPERTIES SHORTHAND ===");
const mobil1 = new MobilModern("Tesla Model 3", 250, "Putih");
const mobil2 = new MobilModern("Toyota Avanza", 180);

mobil1.starter();
mobil2.starter();
