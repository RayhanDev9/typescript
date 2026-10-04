// ============================================================================
// 03 · Memilih Banyak Elemen (Selecting Multiple Elements)
// SOLUSI: Manipulasi Koleksi Elemen & Konversi Array
// ============================================================================

// TODO 1:
// Ambil semua elemen badge dengan class '.badge-topik' menggunakan document.querySelectorAll.
const daftarBadge: NodeListOf<HTMLSpanElement> =
  document.querySelectorAll<HTMLSpanElement>(".badge-topik");

// TODO 2:
// Gunakan perulangan .forEach() pada 'daftarBadge'.
// Tambahkan awalan emoji bintang "⭐ " pada .textContent setiap badge.
daftarBadge.forEach((badge) => {
  if (badge.textContent !== null) {
    badge.textContent = `⭐ ${badge.textContent}`;
  }
});
console.log("Semua badge berhasil ditambahkan bintang!");

// TODO 3:
// Ambil semua tombol dengan class '.btn-aksi' menggunakan querySelectorAll<HTMLButtonElement>.
// Konversikan NodeList tersebut menjadi Array sejati.
const tombolNodeList =
  document.querySelectorAll<HTMLButtonElement>(".btn-aksi");
const arrTombol: HTMLButtonElement[] = Array.from(tombolNodeList);

// TODO 4:
// Lakukan perulangan pada 'arrTombol':
// Jika tombol dalam kondisi disabled (tombol.disabled === true), ubah .textContent-nya
// menjadi "🚫 Terkunci".
arrTombol.forEach((tombol) => {
  if (tombol.disabled) {
    tombol.textContent = "🚫 Terkunci";
  }
});
console.log("Pembaruan tombol selesai!");

export {};
