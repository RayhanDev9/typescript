// ============================================================================
// 07 · Menangani Event Pengguna (Event Handling Dasar)
// SOLUSI: Menghitung Klik & Merespons Dobel Klik
// ============================================================================

// TODO 1:
// Ambil elemen '#btn-hitung'
const btnHitung =
  document.querySelector<HTMLButtonElement>("#btn-hitung")!;

// TODO 2:
// Buat variabel 'skor' awal
let skor: number = 10;

// TODO 3:
// Pasang event listener 'click'
btnHitung.addEventListener("click", () => {
  skor--;

  if (skor > 0) {
    btnHitung.textContent = `Sisa Poin: ${skor}`;
  } else {
    btnHitung.textContent = "Game Selesai!";
    btnHitung.disabled = true;
    console.log("Poin telah habis!");
  }
});

// TODO 4:
// Pasang event listener 'dblclick' pada '#area-hover'
const areaHover =
  document.querySelector<HTMLDivElement>("#area-hover")!;

areaHover.addEventListener("dblclick", () => {
  areaHover.style.backgroundColor = "#059669";
  areaHover.textContent = "🎉 Berhasil Didobel Klik!";
});

export {};
