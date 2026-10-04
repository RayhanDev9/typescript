// ============================================================
// 10 · Interface & implements — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/10-interface-dan-implements/contoh.ts
// ============================================================

// 1. Mendefinisikan 2 Interface Kontrak
interface LaporanKeuangan {
  idLaporan: string;
  cetakLaporan(): void;
}

interface DapatDiAudit {
  statusKepatuhan: "PATUH" | "PERLU_TINJAUAN";
  audit(auditor: string): boolean;
}

// 2. Class Mengimplementasikan Kedua Interface
class RekeningPerusahaan implements LaporanKeuangan, DapatDiAudit {
  public statusKepatuhan: "PATUH" | "PERLU_TINJAUAN" = "PATUH";

  constructor(
    public idLaporan: string,
    public namaPT: string,
    public totalAset: number
  ) {}

  // Implementasi dari LaporanKeuangan
  public cetakLaporan(): void {
    console.log(`[LAPORAN ${this.idLaporan}] ${this.namaPT} | Total Aset: Rp${this.totalAset.toLocaleString("id-ID")}`);
  }

  // Implementasi dari DapatDiAudit
  public audit(auditor: string): boolean {
    console.log(`[AUDIT] PT ${this.namaPT} sedang diaudit oleh kantor akuntan: ${auditor}`);
    return this.statusKepatuhan === "PATUH";
  }
}

console.log("=== PENGUJIAN MULTIPLE INTERFACE IMPLEMENTATION ===");
const ptMaju = new RekeningPerusahaan("LAP-2026-Q1", "PT Maju Bersama", 5000000000);

ptMaju.cetakLaporan();
const hasilAudit = ptMaju.audit("PricewaterhouseCoopers");
console.log("Status Hasil Audit:", hasilAudit ? "Lolos Audit (Sesuai Standar)" : "Gagal Audit");
