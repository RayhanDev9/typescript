// ============================================================
// 12 · Polimorfisme — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/12-polimorfisme/contoh.ts
// ============================================================

// 1. Interface Universal
interface PembayaranOnline {
  idTransaksi: string;
  bayar(nominal: number): boolean;
}

// 2. Tiga Class Berbeda Mengimplementasikan Pembayaran
class KartuKredit implements PembayaranOnline {
  constructor(public idTransaksi: string, public noKartu: string) {}

  public bayar(nominal: number): boolean {
    console.log(`[KARTU KREDIT] Membayar Rp${nominal.toLocaleString("id-ID")} via kartu ${this.noKartu.slice(-4).padStart(16, "*")}`);
    return true;
  }
}

class EWallet implements PembayaranOnline {
  constructor(public idTransaksi: string, public nomorHp: string, public saldo: number) {}

  public bayar(nominal: number): boolean {
    if (this.saldo >= nominal) {
      this.saldo -= nominal;
      console.log(`[E-WALLET] Membayar Rp${nominal.toLocaleString("id-ID")} dari nomor ${this.nomorHp}. Sisa saldo: Rp${this.saldo.toLocaleString("id-ID")}`);
      return true;
    }
    console.log(`[E-WALLET GAGAL] Saldo tidak mencukupi untuk bayar Rp${nominal.toLocaleString("id-ID")}`);
    return false;
  }
}

class TransferBank implements PembayaranOnline {
  constructor(public idTransaksi: string, public kodeVa: string) {}

  public bayar(nominal: number): boolean {
    console.log(`[VIRTUAL ACCOUNT] Membayar Rp${nominal.toLocaleString("id-ID")} via VA: ${this.kodeVa}`);
    return true;
  }
}

// 3. Memproses Antrean Transaksi secara Polimorfik
const antreanCheckout: PembayaranOnline[] = [
  new KartuKredit("TRX-001", "4567890123456789"),
  new EWallet("TRX-002", "081234567890", 250000),
  new TransferBank("TRX-003", "880912345678"),
];

console.log("=== EKSEKUSI PEMBAYARAN POLIMORFIK ===");
const tagihan = 150000;

for (const checkout of antreanCheckout) {
  console.log(`\nMemproses Transaksi: ${checkout.idTransaksi}`);
  checkout.bayar(tagihan);
}
