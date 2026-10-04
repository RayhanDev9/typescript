// ============================================================================
// 06 · Memanipulasi Gaya CSS (Styles & Classes)
// SOLUSI: Mengubah Tampilan Visual & Status Class
// ============================================================================

// TODO 1:
// Ambil elemen judul '#judul-kartu' dan ubah warna font menjadi "#38bdf8"
const judulKartu =
  document.querySelector<HTMLHeadingElement>("#judul-kartu")!;
judulKartu.style.color = "#38bdf8";

// TODO 2:
// Ambil '#kotak-preview' dan periksa apakah memiliki class 'kartu-demo'
const kotakPreview =
  document.querySelector<HTMLDivElement>("#kotak-preview")!;
const adaClassDemo: boolean = kotakPreview.classList.contains("kartu-demo");
console.log("Memiliki class kartu-demo:", adaClassDemo);

// TODO 3:
// Tambahkan class 'highlight' ke '#kotak-preview'
kotakPreview.classList.add("highlight");
console.log("Class highlight berhasil ditambahkan!");

// TODO 4:
// Terapkan padding dinamis
const ukuranPadding: number = 24;
kotakPreview.style.padding = `${ukuranPadding}px`;
console.log(`Padding diatur menjadi: ${kotakPreview.style.padding}`);

export {};
