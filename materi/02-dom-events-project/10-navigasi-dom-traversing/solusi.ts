// ============================================================================
// 10 · Navigasi Pohon DOM (DOM Traversing)
// SOLUSI: Navigasi Parent, Children, dan Sibling
// ============================================================================

// TODO 1:
// Ambil elemen '#daftar-langkah' dan anak pertamanya
const daftarLangkah =
  document.querySelector<HTMLOListElement>("#daftar-langkah")!;
const langkahPertama = daftarLangkah.firstElementChild as HTMLElement | null;

if (langkahPertama !== null) {
  langkahPertama.style.color = "#f43f5e";
  console.log("Anak pertama berhasil diwarnai merah muda!");
}

// TODO 2:
// Akses saudara berikutnya dari anak pertama
const langkahKedua = langkahPertama?.nextElementSibling as HTMLElement | null;

if (langkahKedua !== null && langkahKedua.textContent !== null) {
  langkahKedua.textContent += " (Sedang Berlangsung)";
  console.log("Saudara berikutnya berhasil diperbarui:", langkahKedua.textContent);
}

// TODO 3:
// Ambil elemen 'li.fokus' dan periksa parentElement
const itemFokus = document.querySelector<HTMLLIElement>("li.fokus")!;
const indukElemen = itemFokus.parentElement;

const isIndukOL: boolean = indukElemen?.tagName === "OL";
console.log("Apakah induk langsungnya adalah tag <ol>?", isIndukOL);

export {};
