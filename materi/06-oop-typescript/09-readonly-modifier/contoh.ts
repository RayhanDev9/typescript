// ============================================================
// 09 · readonly Modifier — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/09-readonly-modifier/contoh.ts
// ============================================================

class RekamMedis {
  // Properti readonly hanya bisa ditentukan sekali saat pembuatan objek
  public readonly idPasien: string;
  public readonly golonganDarah: "A" | "B" | "AB" | "O";
  public keluhan: string;

  constructor(
    id: string,
    golDarah: "A" | "B" | "AB" | "O",
    keluhanAwal: string
  ) {
    this.idPasien = id;
    this.golonganDarah = golDarah;
    this.keluhan = keluhanAwal;
  }

  public perbaruiKeluhan(keluhanBaru: string): void {
    this.keluhan = keluhanBaru;
    console.log(`[UPDATE] Keluhan pasien ${this.idPasien} diubah menjadi: "${this.keluhan}"`);
  }
}

console.log("=== PENGUJIAN READONLY PADA CLASS ===");
const pasien1 = new RekamMedis("PS-001", "O", "Demam dan sakit kepala");

console.log(`Pasien: ${pasien1.idPasien} | Gol. Darah: ${pasien1.golonganDarah}`);
console.log("Keluhan Awal:", pasien1.keluhan);

// ✅ Properti biasa boleh diubah:
pasien1.perbaruiKeluhan("Sudah membaik, tinggal batuk ringan");

// ❌ Properti readonly tidak boleh diubah:
// pasien1.golonganDarah = "A"; // Error TypeScript: Cannot assign to 'golonganDarah' because it is a read-only property.
// pasien1.idPasien = "PS-999";  // Error TypeScript: Cannot assign to 'idPasien' because it is a read-only property.
