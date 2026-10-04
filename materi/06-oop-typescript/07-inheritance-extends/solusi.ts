// ============================================================
// 07 · Pewarisan Class (extends & super) — Solusi
// ============================================================

class Pegawai {
  constructor(
    public nama: string,
    public gajiPokok: number
  ) {}

  public cetakGaji(): void {
    console.log(`[PEGAWAI] ${this.nama} -> Gaji: Rp${this.gajiPokok.toLocaleString("id-ID")}`);
  }
}

// TODO 2
class Manager extends Pegawai {
  constructor(
    nama: string,
    gajiPokok: number,
    public bonusTunjangan: number
  ) {
    super(nama, gajiPokok);
  }

  public override cetakGaji(): void {
    const totalGaji = this.gajiPokok + this.bonusTunjangan;
    console.log(
      `[MANAGER] ${this.nama} -> Total Gaji (+Bonus): Rp${totalGaji.toLocaleString("id-ID")}`
    );
  }
}

// TODO 3
console.log("=== DAFTAR PENGGAJIAN ===");
const staf = new Pegawai("Budi", 5000000);
const pimpinan = new Manager("Siti", 12000000, 4000000);

staf.cetakGaji();
pimpinan.cetakGaji();
