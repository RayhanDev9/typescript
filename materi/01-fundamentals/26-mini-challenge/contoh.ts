// ============================================================
// 26 · Mini Challenge — Contoh Konsep Gabungan
// Jalankan: npm run materi -- materi/01-fundamentals/26-mini-challenge/contoh.ts
// ============================================================

// Contoh integrasi konsep: Mengolah daftar nilai siswa
interface HasilUjian {
  id: number;
  nama: string;
  nilai: number;
  grade: string;
  lulus: boolean;
}

const daftarNamaSiswa: string[] = ["Andi", "Budi", "Cici", "Deni", "Eka"];
const skorMentah: number[] = [85, 62, 95, 74, 58];

// Helper: Penentuan grade
function tentukanGrade(nilai: number): string {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 65) return "C";
  return "D";
}

// Pengolahan data dengan loop
const rekapSiswa: HasilUjian[] = [];

for (let i = 0; i < daftarNamaSiswa.length; i++) {
  const nilai = skorMentah[i];
  const grade = tentukanGrade(nilai);

  rekapSiswa.push({
    id: i + 1,
    nama: daftarNamaSiswa[i],
    nilai: nilai,
    grade: grade,
    lulus: nilai >= 65
  });
}

console.log("=== Rekap Hasil Ujian Siswa ===");
console.table(rekapSiswa);
