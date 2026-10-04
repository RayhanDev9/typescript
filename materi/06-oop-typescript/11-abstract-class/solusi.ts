// ============================================================
// 11 · Abstract Class & Method — Solusi
// ============================================================

// TODO 1
abstract class KaryawanKantor {
  constructor(
    public nama: string,
    public idKaryawan: string
  ) {}

  abstract hitungGajiBulanan(): number;

  public cetakSlipGaji(): void {
    const totalGaji = this.hitungGajiBulanan();
    console.log(
      `[SLIP GAJI] ${this.nama} (${this.idKaryawan}) -> Total Gaji: Rp${totalGaji.toLocaleString("id-ID")}`
    );
  }
}

// TODO 2
class KaryawanTetap extends KaryawanKantor {
  constructor(
    nama: string,
    idKaryawan: string,
    public gajiPokok: number
  ) {
    super(nama, idKaryawan);
  }

  public override hitungGajiBulanan(): number {
    return this.gajiPokok;
  }
}

// TODO 3
class KaryawanKontrak extends KaryawanKantor {
  constructor(
    nama: string,
    idKaryawan: string,
    public tarifPerJam: number,
    public jamKerja: number
  ) {
    super(nama, idKaryawan);
  }

  public override hitungGajiBulanan(): number {
    return this.tarifPerJam * this.jamKerja;
  }
}

// TODO 4
console.log("=== PENGGAJIAN KARYAWAN ===");
const stafTetap = new KaryawanTetap("Budi", "T-01", 7000000);
const stafKontrak = new KaryawanKontrak("Siti", "K-02", 50000, 160);

stafTetap.cetakSlipGaji();
stafKontrak.cetakSlipGaji();
