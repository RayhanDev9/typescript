// ============================================================
// 15 · Fungsi — Solusi
// ============================================================

// TODO 1
function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
  return panjang * lebar;
}

const luas = hitungLuasPersegiPanjang(12, 8);
console.log(`Luas Persegi Panjang: ${luas} cm²`);

// TODO 2
function cekKelulusan(nilaiUjian: number, namaSiswa: string): string {
  if (nilaiUjian >= 75) {
    return `Siswa ${namaSiswa} dinyatakan LULUS 🎉`;
  } else {
    return `Siswa ${namaSiswa} harus REMEDIAL 📚`;
  }
}

console.log(cekKelulusan(82, "Andi"));
console.log(cekKelulusan(68, "Budi"));

// TODO 3
function sapaPengguna(nama: string): void {
  console.log(`Halo ${nama}, selamat belajar TypeScript!`);
}

sapaPengguna("Rayhan");
