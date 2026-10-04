// ============================================================================
// 04 · Membaca & Mengubah Konten Teks serta HTML
// SOLUSI: Mengubah Teks & Render Data Mahasiswa dengan innerHTML
// ============================================================================

// TODO 1:
// Ambil elemen judul '#judul-halaman' menggunakan querySelector<HTMLHeadingElement>.
const judulHalaman =
  document.querySelector<HTMLHeadingElement>("#judul-halaman")!;
judulHalaman.textContent = "Katalog Siswa TypeScript";

// TODO 2:
// Buat interface TypeScript bernama 'Siswa'
interface Siswa {
  nama: string;
  nilai: number;
  status: string;
}

// TODO 3:
// Buat sebuah array 'daftarSiswa' bertipe Siswa[]
const daftarSiswa: Siswa[] = [
  { nama: "Aliyah", nilai: 95, status: "Lulus Memuaskan" },
  { nama: "Bima", nilai: 88, status: "Lulus" },
  { nama: "Citra", nilai: 92, status: "Lulus Memuaskan" },
];

// TODO 4:
// Ambil elemen '#kontainer-produk' dan render datanya
const kontainerSiswa =
  document.querySelector<HTMLDivElement>("#kontainer-produk")!;

let markup: string = "";
for (const siswa of daftarSiswa) {
  markup += `
    <div class="item-produk">
      <h4>${siswa.nama}</h4>
      <p>Nilai: ${siswa.nilai} | Status: <strong>${siswa.status}</strong></p>
    </div>
  `;
}

kontainerSiswa.innerHTML = markup;
console.log("Data siswa berhasil dirender ke DOM!");

export {};
