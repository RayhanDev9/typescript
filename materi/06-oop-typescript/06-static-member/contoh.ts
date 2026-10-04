// ============================================================
// 06 · Static Member — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/06-static-member/contoh.ts
// ============================================================

class RekeningNasabah {
  // 1. Static Property: Melacak total seluruh akun yang pernah dibuat
  public static totalAkunTerdaftar: number = 0;
  public static readonly KODE_BANK: string = "BANK-2026";

  public idRekening: string;

  constructor(public nama: string, public saldo: number) {
    RekeningNasabah.totalAkunTerdaftar++;
    this.idRekening = `${RekeningNasabah.KODE_BANK}-${String(RekeningNasabah.totalAkunTerdaftar).padStart(4, "0")}`;
  }

  // Instance Method (dimiliki oleh setiap nasabah)
  public info(): void {
    console.log(`[${this.idRekening}] Nasabah: ${this.nama} (Saldo: Rp${this.saldo.toLocaleString("id-ID")})`);
  }

  // 2. Static Method: Fungsi bantuan konversi mata uang
  public static konversiUsdKeIdr(usd: number, kurs: number = 16000): number {
    return usd * kurs;
  }

  // 3. Static Factory Method: Membuat akun demo dengan saldo Rp 100.000
  public static buatAkunDemo(namaTester: string): RekeningNasabah {
    return new RekeningNasabah(`[DEMO] ${namaTester}`, 100000);
  }
}

console.log("=== 1. MEMBUAT INSTANCE & MENGAKSES STATIC COUNTER ===");
console.log("Total Akun Awal :", RekeningNasabah.totalAkunTerdaftar); // 0

const akun1 = new RekeningNasabah("Rayhan", 5000000);
const akun2 = new RekeningNasabah("Budi", 2500000);
const akunDemo = RekeningNasabah.buatAkunDemo("Siti");

akun1.info();
akun2.info();
akunDemo.info();

console.log("Total Akun Akhir:", RekeningNasabah.totalAkunTerdaftar); // 3

console.log("\n=== 2. MEMANGGIL STATIC METHOD ===");
const nilaiIdr = RekeningNasabah.konversiUsdKeIdr(150);
console.log(`150 USD dalam Rupiah: Rp${nilaiIdr.toLocaleString("id-ID")}`);
