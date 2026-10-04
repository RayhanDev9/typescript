// ============================================================================
// 09 · Form Handling & Input Pengguna
// SOLUSI: Validasi Form & Konversi Angka
// ============================================================================

// TODO 1:
// Ambil elemen
const inputUsia =
  document.querySelector<HTMLInputElement>("#input-usia")!;
const boxHasil =
  document.querySelector<HTMLDivElement>("#box-hasil")!;

// TODO 2:
// Buat fungsi helper 'hitungKategoriUsia'
function hitungKategoriUsia(usia: number): string {
  if (usia < 13) {
    return "Anak-anak";
  } else if (usia >= 13 && usia < 18) {
    return "Remaja";
  } else {
    return "Dewasa";
  }
}

// TODO 3:
// Pasang event listener 'change' pada '#input-usia'
inputUsia.addEventListener("change", () => {
  const angkaUsia: number = Number(inputUsia.value);

  if (!isNaN(angkaUsia) && angkaUsia > 0) {
    const kategori: string = hitungKategoriUsia(angkaUsia);
    boxHasil.textContent = `Hasil Analisis: Usia ${angkaUsia} tahun tergolong kategori "${kategori}".`;
    console.log(`Usia diubah: ${angkaUsia}, Kategori: ${kategori}`);
  } else {
    boxHasil.textContent = "Silakan masukkan angka usia yang valid!";
  }
});

export {};
