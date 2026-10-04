// ============================================================
// 03 · Spread Operator — Solusi
// ============================================================

// TODO 1
const hobiUtama: string[] = ["Membaca", "Coding"];
const hobiTambahan: string[] = ["Bermain Musik", "Fotografi"];
const semuaHobi = [...hobiUtama, ...hobiTambahan];
console.log("TODO 1:", semuaHobi);

// TODO 2
const daftarNilai: number[] = [80, 85, 90];
const salinanNilai = [...daftarNilai];
salinanNilai.push(100);
console.log("TODO 2 -> Asli:", daftarNilai, "| Salinan:", salinanNilai);

// TODO 3
const userDasar = {
  id: "USR-001",
  nama: "Rayhan",
  email: "rayhan@example.com",
};

const pengaturanUser = {
  tema: "gelap",
  bahasa: "id",
  statusAktif: false,
};

const userLengkap = {
  ...userDasar,
  ...pengaturanUser,
  statusAktif: true,
};
console.log("TODO 3:", userLengkap);

// TODO 4
function hitungRataRata(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

const tigaNilai: [number, number, number] = [75, 85, 95];
const hasil = hitungRataRata(...tigaNilai);
console.log("TODO 4 (Rata-rata):", hasil);
