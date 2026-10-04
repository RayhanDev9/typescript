// ============================================================
// 01 · Apa itu OOP — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/01-apa-itu-oop/contoh.ts
// ============================================================

// Gambaran Singkat 4 Pilar OOP dalam Kode TypeScript

// 1. Abstraksi & Class Induk (Pewarisan)
class RekeningDasar {
  public namaPemilik: string;
  protected nomorRekening: string;
  private saldo: number; // 2. Enkapsulasi: saldo privat!

  constructor(nama: string, noRek: string, saldoAwal: number) {
    this.namaPemilik = nama;
    this.nomorRekening = noRek;
    this.saldo = saldoAwal;
  }

  // Method publik sebagai pintu interaksi aman
  public getSaldo(): number {
    return this.saldo;
  }

  public setor(nominal: number): void {
    if (nominal > 0) {
      this.saldo += nominal;
      console.log(`[SETOR] Rp${nominal.toLocaleString("id-ID")} berhasil masuk.`);
    }
  }

  // Method yang akan di-override oleh class turunan (4. Polimorfisme)
  public cetakBiayaAdmin(): void {
    console.log("Biaya admin bulanan standar: Rp5.000");
  }
}

// 3. Pewarisan: RekeningPrioritas mewarisi RekeningDasar
class RekeningPrioritas extends RekeningDasar {
  // 4. Polimorfisme: Override method biaya admin khusus nasabah prioritas
  public override cetakBiayaAdmin(): void {
    console.log("Biaya admin bulanan Nasabah Prioritas: GRATIS (Rp 0)");
  }
}

console.log("=== MEMBUAT INSTANCE DARI CLASS ===");
const nasabah1 = new RekeningDasar("Budi Santoso", "101-001", 1000000);
nasabah1.setor(500000);
console.log(`Saldo Budi: Rp${nasabah1.getSaldo().toLocaleString("id-ID")}`);
nasabah1.cetakBiayaAdmin();

console.log("\n=== CLASS TURUNAN (INHERITANCE & POLIMORFISME) ===");
const nasabahVip = new RekeningPrioritas("Ahmad Rayhan", "999-VIP", 50000000);
console.log(`Pemilik VIP: ${nasabahVip.namaPemilik}`);
nasabahVip.cetakBiayaAdmin(); // Menggunakan perilaku khusus Prioritas!
