// ============================================================
// 05 · Getter & Setter — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/05-getter-dan-setter/contoh.ts
// ============================================================

class RekeningBankist {
  public namaPemilik: string;
  private _saldo: number = 0;
  private _riwayatTransaksi: number[] = [];

  constructor(nama: string, saldoAwal: number) {
    this.namaPemilik = nama;
    this.saldo = saldoAwal; // Memanggil setter
  }

  // 1. Getter untuk Saldo
  get saldo(): number {
    return this._saldo;
  }

  // 2. Setter untuk Saldo dengan Validasi Anti-Negatif
  set saldo(nominalBaru: number) {
    if (nominalBaru < 0) {
      console.log(`[DITOLAK] Saldo tidak boleh negatif: Rp${nominalBaru}`);
      return;
    }
    const selisih = nominalBaru - this._saldo;
    if (selisih !== 0) {
      this._riwayatTransaksi.push(selisih);
    }
    this._saldo = nominalBaru;
  }

  // 3. Getter Terhitung: Total Transaksi Terakhir
  get transaksiTerakhir(): number {
    return this._riwayatTransaksi[this._riwayatTransaksi.length - 1] ?? 0;
  }

  get ringkasanAkun(): string {
    return `Nasabah: ${this.namaPemilik} | Saldo: Rp${this._saldo.toLocaleString("id-ID")} | Total Mutasi: ${this._riwayatTransaksi.length}x`;
  }
}

console.log("=== PENGGUNAAN GETTER & SETTER ===");
const akunRayhan = new RekeningBankist("Ahmad Rayhan", 1000000);

console.log("Saldo Awal (via getter)      :", akunRayhan.saldo);
console.log("Ringkasan Akun (via getter)  :", akunRayhan.ringkasanAkun);

// Mengubah saldo via setter
akunRayhan.saldo = 2500000;
console.log("\nSetelah setor saldo baru     :", akunRayhan.saldo);
console.log("Transaksi Terakhir (getter)  : Rp", akunRayhan.transaksiTerakhir);

// Mencoba mengisi nilai tidak valid
console.log("\nMencoba mengisi saldo negatif:");
akunRayhan.saldo = -50000; // Ditolak oleh setter!
console.log("Saldo tetap aman             :", akunRayhan.saldo);
