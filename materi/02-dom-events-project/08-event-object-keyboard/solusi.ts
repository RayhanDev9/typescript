// ============================================================================
// 08 · Objek Event & Keyboard Events
// SOLUSI: Shortcut Keyboard untuk Membuka & Menutup Popup
// ============================================================================

// TODO 1:
// Ambil elemen '#mini-popup'
const miniPopup =
  document.querySelector<HTMLDivElement>("#mini-popup")!;

// TODO 2 & 3:
// Pasang event listener 'keydown' pada document
document.addEventListener("keydown", (event: KeyboardEvent) => {
  // Tombol Escape untuk menutup
  if (event.key === "Escape") {
    miniPopup.classList.add("tersembunyi");
    console.log("Modal ditutup melalui tombol Escape!");
  }

  // Tombol 'm' atau 'M' untuk membuka
  if (event.key.toLowerCase() === "m") {
    miniPopup.classList.remove("tersembunyi");
    console.log("Modal dibuka kembali melalui shortcut M!");
  }
});

export {};
