// ============================================================================
// 12 · Event Bubbling, Capturing & Event Delegation
// SOLUSI: Menghentikan Propagasi & Event Delegation untuk Hapus Item
// ============================================================================

// TODO 1:
// Menghentikan propagasi event bubbling
const btnKlikTarget =
  document.querySelector<HTMLButtonElement>("#btn-klik-target")!;

btnKlikTarget.addEventListener("click", (event: MouseEvent) => {
  event.stopPropagation(); // Mencegah gelembung naik ke elemen luar!
  console.log("Klik tombol target diproses tanpa bubbling!");
});

// TODO 2 & 3:
// Pasang event delegation pada '#kontainer-delegasi'
const kontainerDelegasi =
  document.querySelector<HTMLUListElement>("#kontainer-delegasi")!;

kontainerDelegasi.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  // Mencari tombol dengan atribut data-aksi="beli" atau tombol umum
  const tombolAksi = target.closest<HTMLButtonElement>(".btn-aksi-item");
  if (!tombolAksi) return;

  const itemLi = tombolAksi.closest<HTMLLIElement>(".item-delegasi");
  if (itemLi) {
    console.log(`Menghapus item kursus dengan ID: ${itemLi.dataset.id}`);
    itemLi.remove(); // Hapus item secara instan dari DOM
  }
});

export {};
