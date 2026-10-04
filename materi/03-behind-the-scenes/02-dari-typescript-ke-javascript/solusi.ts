// ============================================================
// 02 · Dari TypeScript ke JavaScript — Solusi
// ============================================================

// TODO 1
interface Mahasiswa {
  nim: string;
  nama: string;
  ipk: number;
}

// TODO 2
function evaluasiAkademik(mhs: Mahasiswa): string {
  if (mhs.ipk >= 3.5) {
    return `${mhs.nama} (NIM: ${mhs.nim}) - Lulus dengan Predikat Cumlaude 🎓`;
  }
  return `${mhs.nama} (NIM: ${mhs.nim}) - Lulus Sangat Memuaskan 📜`;
}

// TODO 3
const mhs1: Mahasiswa = {
  nim: "2026001",
  nama: "Rayhan",
  ipk: 3.85
};

console.log(evaluasiAkademik(mhs1));
