// ============================================================
// 15 · Proyek Akhir: Sistem Bank (Bankist OOP) — Solusi
// ============================================================

// 1. Interface Kontrak Laporan
interface DapatDilaporkan {
  cetakRekeningKoran(): void;
}

// 2. Abstract Class AkunBank
abstract class AkunBank {
  public readonly nomorRekening: string;
  public namaPemilik: string;
  private _saldo: number = 0;
  protected riwayatMutasi: number[] = [];

  constructor(noRek: string, nama: string, saldoAwal: number = 0) {
    this.nomorRekening = noRek;
    this.namaPemilik = nama;
    if (saldoAwal > 0) {
      this._saldo = saldoAwal;
      this.riwayatMutasi.push(saldoAwal);
    }
  }

  // Getter Saldo
  get saldo(): number {
    return this._saldo;
  }

  // Method Setor (Chaining)
  public setor(nominal: number): this {
    if (nominal <= 0) {
      console.log(`[SETOR DITOLAK] Nominal harus lebih dari 0.`);
      return this;
    }
    this._saldo += nominal;
    this.riwayatMutasi.push(nominal);
    console.log(`[SETOR SUKSES] Rp${nominal.toLocaleString("id-ID")} masuk ke ${this.nomorRekening}`);
    return this;
  }

  // Method Tarik (Chaining)
  public tarik(nominal: number): this {
    if (nominal <= 0) {
      console.log(`[TARIK DITOLAK] Nominal harus lebih dari 0.`);
      return this;
    }
    if (nominal > this._saldo) {
      console.log(`[TARIK GAGAL] Saldo tidak mencukupi untuk tarik Rp${nominal.toLocaleString("id-ID")}`);
      return this;
    }
    this._saldo -= nominal;
    this.riwayatMutasi.push(-nominal);
    console.log(`[TARIK SUKSES] Rp${nominal.toLocaleString("id-ID")} keluar dari ${this.nomorRekening}`);
    return this;
  }

  // Method Ajukan Pinjaman (Chaining)
  public ajukanPinjaman(nominal: number): this {
    // Syarat: Pernah ada setoran minimal 10% dari pinjaman
    const syaratDeposit = nominal * 0.1;
    const memenuhiSyarat = this.riwayatMutasi.some((mutasi) => mutasi >= syaratDeposit);

    if (memenuhiSyarat) {
      this._saldo += nominal;
      this.riwayatMutasi.push(nominal);
      console.log(`[PINJAMAN DISETUJUI] Pinjaman Rp${nominal.toLocaleString("id-ID")} telah cair!`);
    } else {
      console.log(`[PINJAMAN DITOLAK] Belum memenuhi syarat deposit minimal Rp${syaratDeposit.toLocaleString("id-ID")}`);
    }
    return this;
  }

  // Abstract Method
  abstract prosesBunga(): this;
}

// 3. Concrete Class AkunTabungan
class AkunTabungan extends AkunBank implements DapatDilaporkan {
  constructor(
    noRek: string,
    nama: string,
    saldoAwal: number,
    public bungaPersen: number = 2
  ) {
    super(noRek, nama, saldoAwal);
  }

  public override prosesBunga(): this {
    const nominalBunga = (this.saldo * this.bungaPersen) / 100;
    if (nominalBunga > 0) {
      // Panggil method setor internal
      this.setor(nominalBunga);
      console.log(`[BUNGA BULANAN] Tambah bunga ${this.bungaPersen}%: Rp${nominalBunga.toLocaleString("id-ID")}`);
    }
    return this;
  }

  public cetakRekeningKoran(): void {
    console.log("\n" + "=".repeat(45));
    console.log(`🏛️ REKENING KORAN - BANKIST`);
    console.log(`No. Rekening : ${this.nomorRekening}`);
    console.log(`Nasabah      : ${this.namaPemilik}`);
    console.log("-".repeat(45));
    console.log("NO".padEnd(5) + "TIPE".padEnd(12) + "NOMINAL".padStart(25));
    console.log("-".repeat(45));

    for (const [index, mutasi] of this.riwayatMutasi.entries()) {
      const tipe = mutasi > 0 ? "KREDIT (+)" : "DEBIT (-)";
      const formatted = `Rp${Math.abs(mutasi).toLocaleString("id-ID")}`;
      console.log(
        String(index + 1).padEnd(5) + tipe.padEnd(12) + formatted.padStart(25)
      );
    }

    console.log("-".repeat(45));
    console.log(`SALDO AKHIR : Rp${this.saldo.toLocaleString("id-ID")}`);
    console.log("=".repeat(45) + "\n");
  }
}

// 4. Simulasi Penggunaan Sistem Bank
console.log("=== SIMULASI BANKIST OOP (METHOD CHAINING) ===");

const akunRayhan = new AkunTabungan("BANK-001", "Ahmad Rayhan", 2000000, 2.5);

// Method Chaining beruntun:
akunRayhan
  .setor(1000000)
  .tarik(500000)
  .ajukanPinjaman(3000000)
  .prosesBunga()
  .cetakRekeningKoran();
