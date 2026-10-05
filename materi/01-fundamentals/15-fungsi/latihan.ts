// ============================================================
// 15 · Fungsi — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/15-fungsi/latihan.ts
// ============================================================

// TODO 1: Buat fungsi `hitungLuasPersegiPanjang`:
//         - Menerima 2 parameter: `panjang` (number) dan `lebar` (number)
//         - Mengembalikan hasil kali panjang x lebar (number)
//         - Panggil fungsi tersebut dengan panjang 12 dan lebar 8, lalu tampilkan hasilnya.

function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
  return panjang * lebar;
}

console.info(hitungLuasPersegiPanjang(8, 12));

// TODO 2: Buat fungsi `cekKelulusan`:
//         - Menerima parameter `nilaiUjian` (number) dan `namaSiswa` (string)
//         - Jika nilaiUjian >= 75 kembalikan string: "Siswa [namaSiswa] dinyatakan LULUS 🎉"
//         - Jika kurang dari 75 kembalikan: "Siswa [namaSiswa] harus REMEDIAL 📚"
//         - Panggil fungsi ini untuk siswa "Andi" (nilai 82) dan "Budi" (nilai 68).

function cekKelulusan(nilaiUjian: number, namaSiswa: string): string {
  return nilaiUjian >= 75
    ? `Siswa ${namaSiswa} dinyatakan lulus`
    : `Siswa ${namaSiswa} harus REMEDIAL`;
}

console.info(cekKelulusan(80, "Rayhan"));

// TODO 3: Buat fungsi `sapaPengguna` dengan tipe return `void`:
//         - Menerima parameter `nama` (string)
//         - Menampilkan kalimat "Halo [nama], selamat belajar TypeScript!" langsung dengan console.log.



