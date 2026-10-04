// ============================================================================
// 12 · Event Bubbling, Capturing & Event Delegation
// LATIHAN: Menghentikan Propagasi & Event Delegation untuk Hapus Item
// ============================================================================

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
