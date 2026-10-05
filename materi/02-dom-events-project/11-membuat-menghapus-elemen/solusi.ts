// ============================================================
// 11 · Membuat & Menghapus Elemen — Solusi
// Jalankan: npm run dom (buka materi/02-dom-events-project/11-membuat-menghapus-elemen/index.html di browser)
// ============================================================

// TODO 1:
// Ambil elemen '#daftar-tugas'
const daftarTugas =
  document.querySelector<HTMLUListElement>("#daftar-tugas")!;

// TODO 2:
// Buat elemen baru tag <li>
const liBaru: HTMLLIElement = document.createElement("li");
liBaru.classList.add("tugas-item");

// TODO 3:
// Buat span dan button
const spanTeks: HTMLSpanElement = document.createElement("span");
spanTeks.textContent = "Tugas Tambahan dari Latihan";

const btnSelesai: HTMLButtonElement = document.createElement("button");
btnSelesai.textContent = "Tandai Selesai";
btnSelesai.style.backgroundColor = "#10b981";
btnSelesai.style.color = "white";
btnSelesai.style.borderRadius = "4px";
btnSelesai.style.padding = "0.3rem 0.6rem";
btnSelesai.style.border = "none";
btnSelesai.style.cursor = "pointer";

// TODO 4:
// Pasang event listener 'click'
btnSelesai.addEventListener("click", () => {
  spanTeks.style.textDecoration = "line-through";
  spanTeks.style.color = "#64748b";
  btnSelesai.disabled = true;
  btnSelesai.textContent = "Selesai ✅";
  console.log("Tugas ditandai selesai!");
});

// TODO 5:
// Gabungkan dan tempelkan ke DOM
liBaru.append(spanTeks, btnSelesai);
daftarTugas.append(liBaru);
console.log("Item tugas baru berhasil ditambahkan ke DOM!");

export {};
