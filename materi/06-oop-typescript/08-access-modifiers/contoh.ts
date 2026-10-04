// ============================================================
// 08 · Access Modifiers — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/08-access-modifiers/contoh.ts
// ============================================================

class AkunBankist {
  public namaNasabah: string;
  protected nomorAkun: string;
  private saldo: number;
  #pinTransaksi: string; // Private field asli JavaScript

  constructor(nama: string, noAkun: string, saldoAwal: number, pin: string) {
    this.namaNasabah = nama;
    this.nomorAkun = noAkun;
    this.saldo = saldoAwal;
    this.#pinTransaksi = pin;
  }

  // Method publik untuk interaksi luar
  public cekSaldo(): void {
    console.log(`[SALDO] ${this.namaNasabah} -> Rp${this.saldo.toLocaleString("id-ID")}`);
  }

  public setor(nominal: number): void {
    if (nominal > 0) {
      this.saldo += nominal;
      console.log(`[SETOR SUKSES] Rp${nominal.toLocaleString("id-ID")} masuk ke ${this.nomorAkun}`);
    }
  }

  public tarik(nominal: number, pinInput: string): boolean {
    if (pinInput !== this.#pinTransaksi) {
      console.log("[DITOLAK] PIN transaksi salah!");
      return false;
    }
    if (nominal > this.saldo) {
      console.log("[DITOLAK] Saldo tidak mencukupi!");
      return false;
    }
    this.saldo -= nominal;
    console.log(`[TARIK SUKSES] Rp${nominal.toLocaleString("id-ID")} berhasil ditarik.`);
    return true;
  }
}

// Subclass turunan
class AkunBisnis extends AkunBankist {
  constructor(nama: string, noAkun: string, saldoAwal: number, pin: string) {
    super(nama, noAkun, saldoAwal, pin);
  }

  public tampilkanInfoBisnis(): void {
    // Bisa membaca properti protected:
    console.log(`[AKUN BISNIS] No Rekening: ${this.nomorAkun}`);

    // Baris berikut ditolak oleh TypeScript:
    // console.log(this.saldo); // ❌ Property 'saldo' is private and only accessible within class 'AkunBankist'.
  }
}

console.log("=== PENGUJIAN ACCESS MODIFIERS ===");
const akunRayhan = new AkunBisnis("Rayhan Corp", "ID-9001", 10000000, "7788");

akunRayhan.cekSaldo();
akunRayhan.tampilkanInfoBisnis();
akunRayhan.setor(2500000);

// Coba tarik uang dengan PIN salah dan benar
akunRayhan.tarik(1000000, "0000"); // PIN salah
akunRayhan.tarik(1000000, "7788"); // PIN benar
akunRayhan.cekSaldo();
