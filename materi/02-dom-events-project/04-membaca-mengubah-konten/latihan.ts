// ============================================================
// 04 · Membaca & Mengubah Konten — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/04-membaca-mengubah-konten/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Ambil elemen judul '#judul-halaman' menggunakan querySelector<HTMLHeadingElement>.
// Ubah textContent judul tersebut menjadi: "Katalog Siswa TypeScript"

const elJudul = document.querySelector<HTMLHeadElement>("#judul-halaman");

// TODO 2:
// Buat interface TypeScript bernama 'Siswa' yang memiliki properti:
// - nama (string)
// - nilai (number)
// - status (string)

interface Siswa {
  nama: string;
  nilai: number;
  status: string;
}

// TODO 3:
// Buat sebuah array 'daftarSiswa' bertipe Siswa[] dengan minimal 3 data siswa.

// TODO 3: Data Mock Array Siswa[] (3 Data)
const daftarSiswa: Siswa[] = [
  {
    nama: "Rayhan Pratama",
    nilai: 95,
    status: "Lulus (Sempurna)",
  },
  {
    nama: "Budi Santoso",
    nilai: 82,
    status: "Lulus",
  },
  {
    nama: "Siti Rahma",
    nilai: 65,
    status: "Remedial",
  },
];

// TODO 4:
// Ambil elemen '#kontainer-produk' menggunakan querySelector<HTMLDivElement>.
// Gunakan perulangan dan innerHTML untuk menampilkan kartu siswa dengan format:
// <div class="item-produk">
//   <h4>[Nama Siswa]</h4>
//   <p>Nilai: [Nilai] | Status: <strong>[Status]</strong></p>
// </div>

const container = document.querySelector<HTMLDivElement>("#kontainer-produk")!;
let templateHTML: string = "";
for (const element of daftarSiswa) {
  templateHTML += `<div class="item-produk">
  <h4>${element.nama}</h4>
  <p>Nilai: ${element.nilai} | Status: <strong>${element.status}</strong></p>
</div>`;
}
container.innerHTML = templateHTML;
export {};
