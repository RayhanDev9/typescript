// ============================================================
// 03 · Memilih Banyak Elemen — Contoh
// Jalankan: npm run dom (buka materi/02-dom-events-project/03-memilih-banyak-elemen/index.html di browser)
// ============================================================

// 1. Memilih Semua Badge Topik (NodeListOf<HTMLSpanElement>)
const semuaBadge =
  document.querySelectorAll<HTMLSpanElement>(".badge-topik");

console.log("=== 1. Memeriksa NodeList ===");
console.log("Total badge yang ditemukan:", semuaBadge.length);

// Melakukan iterasi langsung pada NodeList menggunakan .forEach()
semuaBadge.forEach((badge, index) => {
  console.log(`Badge [${index}]: ${badge.textContent}`);

  // Menambahkan aksen warna dinamis
  if (index % 2 === 0) {
    badge.style.backgroundColor = "#0284c7";
  }
});

// 2. Memilih Semua Tombol Aksi (NodeListOf<HTMLButtonElement>)
const semuaTombol =
  document.querySelectorAll<HTMLButtonElement>(".btn-aksi");

console.log("\n=== 2. Memeriksa Daftar Tombol ===");
console.log("Total tombol:", semuaTombol.length);

// 3. Mengonversi NodeList ke Array Sejati (Array.from)
// Ini memungkinkan kita menggunakan method array tingkat lanjut seperti .filter() dan .map()
const arrayTombol: HTMLButtonElement[] = Array.from(semuaTombol);

// Memfilter hanya tombol yang aktif (tidak disabled)
const tombolAktif: HTMLButtonElement[] = arrayTombol.filter(
  (tombol) => !tombol.disabled
);

// Mengambil nama-nama tombol yang aktif menggunakan .map()
const namaTombolAktif: string[] = tombolAktif.map(
  (tombol) => tombol.textContent || "Tanpa Nama"
);

console.log("Daftar tombol aktif:", namaTombolAktif);

// 4. Menampilkan Hasil ke Elemen <ul>
const logList = document.querySelector<HTMLUListElement>("#log-list");

if (logList !== null) {
  // Membersihkan teks tunggu awal
  logList.innerHTML = "";

  // Menambahkan item ringkasan ke dalam list
  logList.innerHTML += `<li>Total Topik Terdaftar: <strong>${semuaBadge.length}</strong></li>`;
  logList.innerHTML += `<li>Tombol Aktif: <strong>${namaTombolAktif.join(", ")}</strong></li>`;
  logList.innerHTML += `<li>Tombol Nonaktif: <strong>${semuaTombol.length - tombolAktif.length}</strong></li>`;
}

export {};
