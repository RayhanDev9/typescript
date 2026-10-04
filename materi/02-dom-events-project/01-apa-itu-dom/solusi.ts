// ============================================================================
// 01 · Apa itu DOM & Pohon DOM (DOM Tree)
// SOLUSI: Mengakses Dokumen & Menampilkan Info Sederhana
// ============================================================================

// TODO 1:
// Buat variabel bertipe string bernama 'judulAwal' yang menyimpan nilai dari document.title saat ini.
const judulAwal: string = document.title;
console.log("Judul awal dokumen:", judulAwal);

// TODO 2:
// Ubah document.title menjadi: "Latihan DOM 01 - Berhasil!"
document.title = "Latihan DOM 01 - Berhasil!";
console.log("Judul baru dokumen:", document.title);

// TODO 3:
// Ambil elemen dengan id 'output-info' menggunakan document.getElementById('output-info').
const outputEl: HTMLElement | null = document.getElementById("output-info");

// TODO 4:
// Lakukan pengecekan apakah 'outputEl' tidak bernilai null (Type Guard: if (outputEl !== null)).
// Jika ada, ubah textContent dari 'outputEl' menjadi:
// "Halo dari TypeScript! Body halaman ini memiliki X elemen anak."
if (outputEl !== null) {
  const jumlahAnak: number = document.body.children.length;
  outputEl.textContent = `Halo dari TypeScript! Body halaman ini memiliki ${jumlahAnak} elemen anak.`;
  console.log("Pesan berhasil ditampilkan ke elemen #output-info!");
} else {
  console.warn("Elemen #output-info tidak ditemukan di DOM.");
}

export {};
