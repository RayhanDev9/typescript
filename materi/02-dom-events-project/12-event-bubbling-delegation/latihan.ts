// ============================================================
// 12 · Event Bubbling & Delegation — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/12-event-bubbling-delegation/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Ambil elemen '#btn-klik-target' menggunakan querySelector<HTMLButtonElement>!.
// Pasang event listener 'click' dan panggil event.stopPropagation().
// Periksa di console bahwa pesan dari '#kotak-dalam' dan '#kotak-luar' tidak lagi muncul!


// TODO 2:
// Ambil elemen '#kontainer-delegasi' menggunakan querySelector<HTMLUListElement>!.


// TODO 3:
// Pasang event listener 'click' pada '#kontainer-delegasi' untuk menangani aksi HAPUS:
// - Periksa apakah yang diklik memiliki atribut dataset.aksi === "hapus" atau class tertentu.
// - Jika cocok, hapus elemen <li> induknya dari pohon DOM menggunakan .remove().


export {};
