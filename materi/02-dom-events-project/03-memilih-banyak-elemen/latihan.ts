// ============================================================
// 03 · Memilih Banyak Elemen — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/03-memilih-banyak-elemen/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini dengan tepat.
// Perhatikan penulisan tipe data TypeScript pada NodeList dan Array!

// TODO 1:
// Ambil semua elemen badge dengan class '.badge-topik' menggunakan document.querySelectorAll.
// Berikan generic type <HTMLSpanElement>.
// Simpan ke variabel bernama 'daftarBadge'.
const daftarBadge = document.querySelectorAll<HTMLSpanElement>(".badge-topik");

// TODO 2:
// Gunakan perulangan .forEach() pada 'daftarBadge'.
// Tambahkan awalan emoji bintang "⭐ " pada .textContent setiap badge.
// Contoh: "TypeScript" menjadi "⭐ TypeScript".
daftarBadge.forEach((element) => {
  const intialText = element.textContent;

  element.textContent = `⭐ ${intialText}`;
});

// TODO 3:
// Ambil semua tombol dengan class '.btn-aksi' menggunakan querySelectorAll<HTMLButtonElement>.
// Konversikan NodeList tersebut menjadi Array sejati menggunakan Array.from() atau spread [...].
// Simpan ke variabel bertipe HTMLButtonElement[] bernama 'arrTombol'.

const HTMLButtonElement = Array.from(
  document.querySelectorAll<HTMLButtonElement>(".btn-aksi"),
);

console.info(HTMLButtonElement);

// TODO 4:
// Lakukan perulangan pada 'arrTombol':
// Jika tombol dalam kondisi disabled (tombol.disabled === true), ubah .textContent-nya
// menjadi "🚫 Terkunci".

HTMLButtonElement.forEach((btn) =>
  btn.disabled === true ? (btn.textContent = "🚫 Terkunci") : "",
);
export {};
