// ============================================================
// 01 · Apa itu DOM & Pohon DOM — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/01-apa-itu-dom/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini dengan tepat.
// Jalankan atau periksa kode Anda menggunakan TypeScript!

// TODO 1:
// Buat variabel bertipe string bernama 'judulAwal' yang menyimpan nilai dari document.title saat ini.
// Cetak ke console.

const judulAwal = document.title;
console.info(judulAwal);

// TODO 2:
// Ubah document.title menjadi: "Latihan DOM 01 - Berhasil!"

document.title = "Latihan DOM 01 - Berhasil!";

// TODO 3:
// Ambil elemen dengan id 'output-info' menggunakan document.getElementById('output-info').
// Simpan ke dalam variabel bernama 'outputEl'.

const outputEl = document.getElementById(
  "output-info",
) as HTMLPreElement | null;
console.info(outputEl);

// TODO 4:
// Lakukan pengecekan apakah 'outputEl' tidak bernilai null (Type Guard: if (outputEl !== null)).
// Jika ada, ubah textContent dari 'outputEl' menjadi:
// "Halo dari TypeScript! Body halaman ini memiliki X elemen anak."
// (Ganti X dengan jumlah anak elemen dari document.body.children.length secara dinamis).

const x = document.body.children.length;

if (outputEl !== null) {
  outputEl.textContent =
    "Halo dari TypeScript! Body halaman ini memiliki" + x + "elemen anak.";
}

export {};
