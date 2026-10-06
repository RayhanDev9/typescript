// ============================================================
// 08 · Event Object & Keyboard — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/08-event-object-keyboard/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Ambil elemen '#mini-popup' menggunakan querySelector<HTMLDivElement>!.

const elMiniPop = document.querySelector<HTMLDivElement>("#mini-popup");

// TODO 2:
// Tambahkan event listener 'keydown' pada 'document'.
// Berikan tipe parameter '(event: KeyboardEvent) => void'.

document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Escape") console.info("benar");
  else console.info("Salah");
});

// TODO 3:
// Di dalam listener:
// a. Jika event.key === "Escape", tambahkan class 'tersembunyi' pada '#mini-popup'.
// b. Jika event.key === "m" atau event.key === "M", hapus class 'tersembunyi' dari '#mini-popup'
//    (sehingga tombol M berfungsi sebagai shortcut membuka modal).

export {};
