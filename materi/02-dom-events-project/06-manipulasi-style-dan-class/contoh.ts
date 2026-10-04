// ============================================================================
// 06 · Memanipulasi Gaya CSS (Styles & Classes)
// CONTOH: Menggunakan classList & Inline Styles di TypeScript
// ============================================================================

// 1. Mengambil Elemen yang Dibutuhkan
const kotakPreview = document.querySelector<HTMLDivElement>("#kotak-preview")!;
const teksKonten = document.querySelector<HTMLParagraphElement>("#teks-konten")!;

const btnToggleTema = document.querySelector<HTMLButtonElement>("#btn-toggle-tema")!;
const btnToggleHighlight = document.querySelector<HTMLButtonElement>("#btn-toggle-highlight")!;
const btnBesarkanFont = document.querySelector<HTMLButtonElement>("#btn-besarkan-font")!;

// 2. Manipulasi Class: Toggle Tema (Light / Dark Mode)
btnToggleTema.addEventListener("click", () => {
  // .toggle() menambahkan class jika belum ada, atau menghapusnya jika sudah ada
  kotakPreview.classList.toggle("tema-terang");

  const isTerang: boolean = kotakPreview.classList.contains("tema-terang");
  console.log("Status Tema Terang:", isTerang);
});

// 3. Manipulasi Class: Toggle Efek Highlight
btnToggleHighlight.addEventListener("click", () => {
  const berhasilDitambah: boolean = kotakPreview.classList.toggle("highlight");

  if (berhasilDitambah) {
    console.log("Efek highlight diaktifkan! ✨");
  } else {
    console.log("Efek highlight dinonaktifkan.");
  }
});

// 4. Manipulasi Style Langsung (Inline Style)
let ukuranFontSaatIni: number = 16;

btnBesarkanFont.addEventListener("click", () => {
  ukuranFontSaatIni += 2;

  // Nilai style di TypeScript selalu berupa string lengkap dengan satuan (px)
  teksKonten.style.fontSize = `${ukuranFontSaatIni}px`;
  teksKonten.style.fontWeight = "bold";

  console.log(`Ukuran font teks sekarang: ${teksKonten.style.fontSize}`);
});

export {};
