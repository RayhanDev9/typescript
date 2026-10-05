// ============================================================
// 07 · Event Handling Dasar — Contoh
// Jalankan: npm run dom (buka materi/02-dom-events-project/07-event-handling-dasar/index.html di browser)
// ============================================================

// 1. Mengambil Elemen
const btnHitung = document.querySelector<HTMLButtonElement>("#btn-hitung")!;
const btnLepas = document.querySelector<HTMLButtonElement>("#btn-lepas")!;
const areaHover = document.querySelector<HTMLDivElement>("#area-hover")!;

// 2. Event Handler Bernama untuk Tombol Hitung
let jumlahKlik: number = 0;

function tanganiKlikPenghitung(event: MouseEvent): void {
  jumlahKlik++;
  btnHitung.textContent = `Klik Saya: ${jumlahKlik} kali`;
  console.log(`Tombol diklik! Koordinat klik: (${event.clientX}, ${event.clientY})`);
}

// Memasang Event Listener
btnHitung.addEventListener("click", tanganiKlikPenghitung);

// 3. Melepas Listener (removeEventListener)
btnLepas.addEventListener("click", () => {
  // Melepas fungsi handler bernama
  btnHitung.removeEventListener("click", tanganiKlikPenghitung);

  btnHitung.style.opacity = "0.5";
  btnHitung.style.cursor = "not-allowed";
  btnLepas.textContent = "✅ Event Telah Dilepas!";
  btnLepas.disabled = true;

  console.log("Event klik pada tombol counter berhasil dicabut!");
});

// 4. Menangani Event Mouse Masuk & Keluar (Hover)
areaHover.addEventListener("mouseenter", () => {
  areaHover.classList.add("aktif");
  areaHover.textContent = "Kursor Sedang di Dalam Kotak! 🎯";
});

areaHover.addEventListener("mouseleave", () => {
  areaHover.classList.remove("aktif");
  areaHover.textContent = "Arahkan Kursor Mouse ke Area Ini (Hover)";
});

export {};
