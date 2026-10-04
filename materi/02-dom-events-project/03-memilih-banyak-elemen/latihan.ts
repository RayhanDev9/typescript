// ============================================================================
// 03 · Memilih Banyak Elemen (Selecting Multiple Elements)
// LATIHAN: Manipulasi Koleksi Elemen & Konversi Array
// ============================================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini dengan tepat.
// Perhatikan penulisan tipe data TypeScript pada NodeList dan Array!

// TODO 1:
// Ambil semua elemen badge dengan class '.badge-topik' menggunakan document.querySelectorAll.
// Berikan generic type <HTMLSpanElement>.
// Simpan ke variabel bernama 'daftarBadge'.


// TODO 2:
// Gunakan perulangan .forEach() pada 'daftarBadge'.
// Tambahkan awalan emoji bintang "⭐ " pada .textContent setiap badge.
// Contoh: "TypeScript" menjadi "⭐ TypeScript".


// TODO 3:
// Ambil semua tombol dengan class '.btn-aksi' menggunakan querySelectorAll<HTMLButtonElement>.
// Konversikan NodeList tersebut menjadi Array sejati menggunakan Array.from() atau spread [...].
// Simpan ke variabel bertipe HTMLButtonElement[] bernama 'arrTombol'.


// TODO 4:
// Lakukan perulangan pada 'arrTombol':
// Jika tombol dalam kondisi disabled (tombol.disabled === true), ubah .textContent-nya
// menjadi "🚫 Terkunci".


export {};
