// ============================================================
// 15 · Memilih Struktur Data yang Tepat — Solusi
// ============================================================

// TODO 1: NIK unik tanpa duplikat -> SET
const nikSudahAmbil = new Set<string>();
nikSudahAmbil.add("3201012345670001");
nikSudahAmbil.add("3201012345670002");
nikSudahAmbil.add("3201012345670001"); // Duplikat otomatis ditolak
console.log("TODO 1 (Set NIK Unik):", nikSudahAmbil);

// TODO 2: Key berupa angka integer -> MAP
const statusSensor = new Map<number, string>([
  [101, "Suhu Tinggi - Bahaya!"],
  [102, "Tekanan Rendah"],
  [103, "Normal"],
]);
console.log("TODO 2 (Map Sensor):", statusSensor.get(101));

// TODO 3: Entitas dengan properti pasti dan method -> OBJECT
interface KartuSiswa {
  nis: string;
  namaLengkap: string;
  kelas: string;
  tampilkanInfo(): string;
}

const siswa: KartuSiswa = {
  nis: "2026-001",
  namaLengkap: "Ahmad Rayhan",
  kelas: "12-IPA-1",
  tampilkanInfo() {
    return `${this.namaLengkap} (${this.nis}) - Kelas ${this.kelas}`;
  },
};
console.log("TODO 3 (Object Siswa):", siswa.tampilkanInfo());

// TODO 4: Urutan berindeks penting (FIFO antrean) -> ARRAY
const antreanTiket: string[] = ["Budi", "Citra", "Doni"];
console.log("TODO 4 (Array Antrean):", antreanTiket);
