// ============================================================
// 08 · Event Object & Keyboard — Contoh
// Jalankan: npm run dom (buka materi/02-dom-events-project/08-event-object-keyboard/index.html di browser)
// ============================================================

// 1. Mengambil Elemen UI
const displayKey = document.querySelector<HTMLDivElement>("#display-key")!;
const infoKey = document.querySelector<HTMLTableCellElement>("#info-key")!;
const infoCode = document.querySelector<HTMLTableCellElement>("#info-code")!;
const infoShift = document.querySelector<HTMLTableCellElement>("#info-shift")!;

const linkBatal = document.querySelector<HTMLAnchorElement>("#link-batal")!;
const miniPopup = document.querySelector<HTMLDivElement>("#mini-popup")!;

// 2. Mencegah Tindakan Default Browser (e.preventDefault)
linkBatal.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault(); // Menghentikan navigasi link
  console.log("Navigasi tautan dibatalkan melalui event.preventDefault()!");
  alert("Tautan dicegah membuka halaman baru!");
});

// 3. Menangani Keyboard Event di Seluruh Dokumen (KeyboardEvent)
document.addEventListener("keydown", (event: KeyboardEvent) => {
  console.log("Keyboard ditekan:", event.key);

  // Menampilkan tombol ke layar
  displayKey.textContent = event.key === " " ? "Space (Spasi)" : event.key;
  infoKey.textContent = event.key;
  infoCode.textContent = event.code;
  infoShift.textContent = event.shiftKey ? "✅ Ya" : "❌ Tidak";

  // Menutup Popup jika tombol Escape ditekan
  if (event.key === "Escape") {
    if (!miniPopup.classList.contains("tersembunyi")) {
      miniPopup.classList.add("tersembunyi");
      console.log("Popup berhasil ditutup dengan tombol Escape!");
    }
  }
});

export {};
