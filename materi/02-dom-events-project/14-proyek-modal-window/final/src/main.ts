// ============================================================
// 14 · Proyek 2: Modal Window — Final
// Jalankan: npm run dom (buka materi/02-dom-events-project/14-proyek-modal-window/final/index.html di browser)
// ============================================================

// --- 1. Pilih Elemen DOM ---
const modalEl = document.querySelector<HTMLDivElement>(".modal")!;
const overlayEl = document.querySelector<HTMLDivElement>(".overlay")!;
const btnTutupModalEl = document.querySelector<HTMLButtonElement>(".close-modal")!;
const btnsBukaModal = document.querySelectorAll<HTMLButtonElement>(".show-modal");

// --- 2. Helper Function Buka & Tutup Modal ---
const bukaModal = (): void => {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

const tutupModal = (): void => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

// --- 3. Pasang Event Listener ke Semua Tombol Buka Modal ---
for (let i = 0; i < btnsBukaModal.length; i++) {
  btnsBukaModal[i].addEventListener("click", bukaModal);
}

// --- 4. Event Listener Klik Tutup (Tombol ✕ dan Area Overlay) ---
btnTutupModalEl.addEventListener("click", tutupModal);
overlayEl.addEventListener("click", tutupModal);

// --- 5. Event Listener Tombol Keyboard (Escape) ---
document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    tutupModal();
  }
});
