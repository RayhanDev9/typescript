// ============================================================
// PROYEK 2: MODAL WINDOW — STARTER
// ============================================================

// --- STEP 1: Pilih Elemen-Elemen DOM ---
const modalEl = document.querySelector<HTMLDivElement>(".modal")!;
const overlayEl = document.querySelector<HTMLDivElement>(".overlay")!;
const btnTutupModalEl = document.querySelector<HTMLButtonElement>(".close-modal")!;
const btnsBukaModal = document.querySelectorAll<HTMLButtonElement>(".show-modal");

// --- STEP 2: Fungsi Helper Buka & Tutup Modal ---
// TODO 1: Buat fungsi `bukaModal`:
//         - Hapus class "hidden" dari `modalEl.classList`
//         - Hapus class "hidden" dari `overlayEl.classList`

// TODO 2: Buat fungsi `tutupModal`:
//         - Tambahkan kembali class "hidden" ke `modalEl.classList`
//         - Tambahkan kembali class "hidden" ke `overlayEl.classList`


// --- STEP 3: Pasang Event Listener Klik pada Tombol-Tombol Buka Modal ---
// TODO 3: Gunakan loop `for` untuk memasang event listener "click" pada setiap
//         tombol di dalam `btnsBukaModal` (panggil fungsi `bukaModal`).


// --- STEP 4: Pasang Event Listener Klik untuk Menutup Modal ---
// TODO 4: Pasang event listener "click" pada `btnTutupModalEl` dan `overlayEl`
//         agar memanggil fungsi `tutupModal`.


// --- STEP 5: Pasang Event Listener Keyboard ESC ---
// TODO 5: Pasang event listener "keydown" pada objek `document`:
//         - Periksa tipe parameter event `(e: KeyboardEvent)`
//         - Jika `e.key === "Escape"` DAN modal sedang TIDAK memiliki class "hidden" (!modalEl.classList.contains("hidden"))
//           Panggil fungsi `tutupModal()`.
