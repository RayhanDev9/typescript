// ============================================================
// 06 · Manipulasi Style & Class — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/06-manipulasi-style-dan-class/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Ambil elemen judul '#judul-kartu' menggunakan querySelector<HTMLHeadingElement>!.
// Berikan inline style warna font (color) menjadi "#38bdf8".

const judul = document.querySelector<HTMLHeadElement>("#judul-kartu")!;
judul.style.color = "#38bdf8";

// TODO 2:
// Ambil elemen '#kotak-preview' menggunakan querySelector<HTMLDivElement>!.
// Periksa apakah elemen tersebut memiliki class 'kartu-demo' menggunakan method .contains().
// Cetak hasilnya (true/false) ke console.

console.info(
  document
    .querySelector<HTMLDivElement>("#kotak-preview")!
    ?.classList.add("highlight"),
);

// TODO 3:
// Tambahkan class 'highlight' ke '#kotak-preview' menggunakan method .add().

// TODO 4:
// Buat variabel baru bernama 'ukuranPadding' bernilai 24 (tipe number).
// Terapkan nilai tersebut sebagai padding ke '#kotak-preview' menggunakan inline style (style.padding = "...px").
document.querySelector<HTMLDivElement>("#kotak-preview")!.style.padding = "23px";
export {};
