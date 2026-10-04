// ============================================================================
// 10 · Navigasi Pohon DOM (DOM Traversing)
// CONTOH: closest, parentElement, children, dan nextElementSibling
// ============================================================================

// 1. Navigasi ke Atas dengan .closest()
// Mengambil semua tombol sorot
const semuaBtnSorot =
  document.querySelectorAll<HTMLButtonElement>(".btn-sorot");

semuaBtnSorot.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    // Mencari kartu pembungkus terdekat ke atas dari tombol yang diklik
    const kartuInduk = tombol.closest<HTMLDivElement>(".kartu-tugas");

    if (kartuInduk !== null) {
      kartuInduk.classList.toggle("sorot");
      console.log(`Kartu dengan ID ${kartuInduk.dataset.id} disorot!`);
    }
  });
});

// Tombol Hapus: Menggunakan .closest() lalu memanggil .remove()
const semuaBtnHapus =
  document.querySelectorAll<HTMLButtonElement>(".btn-hapus");

semuaBtnHapus.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const kartu = tombol.closest<HTMLDivElement>(".kartu-tugas");
    if (kartu !== null) {
      console.log(`Menghapus kartu ID: ${kartu.dataset.id}`);
      kartu.remove(); // Menghapus elemen dari pohon DOM
    }
  });
});

// 2. Navigasi ke Bawah & ke Samping (Children & Siblings)
const daftarLangkah = document.querySelector<HTMLOListElement>("#daftar-langkah")!;
const itemFokus = document.querySelector<HTMLLIElement>("li.fokus")!;

console.log("=== 2. Informasi Anak & Saudara ===");
console.log("Total langkah:", daftarLangkah.children.length);
console.log("Langkah Pertama:", daftarLangkah.firstElementChild?.textContent);
console.log("Langkah Terakhir:", daftarLangkah.lastElementChild?.textContent);

// Mengakses saudara setelahnya (Next Sibling)
const langkahBerikutnya = itemFokus.nextElementSibling as HTMLElement | null;
if (langkahBerikutnya !== null) {
  langkahBerikutnya.style.color = "#a7f3d0";
  console.log("Langkah selanjutnya:", langkahBerikutnya.textContent);
}

// Mengakses saudara sebelumnya (Previous Sibling)
const langkahSebelumnya = itemFokus.previousElementSibling as HTMLElement | null;
if (langkahSebelumnya !== null) {
  console.log("Langkah sebelumnya:", langkahSebelumnya.textContent);
}

export {};
