// ============================================================================
// 11 · Membuat, Menambah & Menghapus Elemen
// CONTOH: createElement, append, prepend, dan remove
// ============================================================================

// 1. Mengambil Elemen Kontrol
const inputTugas = document.querySelector<HTMLInputElement>("#input-tugas")!;
const btnTambahBawah = document.querySelector<HTMLButtonElement>("#btn-tambah-bawah")!;
const btnTambahAtas = document.querySelector<HTMLButtonElement>("#btn-tambah-atas")!;
const btnKosongkan = document.querySelector<HTMLButtonElement>("#btn-kosongkan")!;
const daftarTugas = document.querySelector<HTMLUListElement>("#daftar-tugas")!;

// 2. Fungsi Pabrik Elemen (Element Factory)
function buatItemTugas(judulTugas: string): HTMLLIElement {
  // Membuat tag <li>
  const li: HTMLLIElement = document.createElement("li");
  li.classList.add("tugas-item");

  // Membuat tag <span> untuk teks
  const span: HTMLSpanElement = document.createElement("span");
  span.textContent = judulTugas;

  // Membuat tombol hapus khusus untuk item ini
  const btnHapus: HTMLButtonElement = document.createElement("button");
  btnHapus.textContent = "Hapus";
  btnHapus.classList.add("btn-del");

  // Menempelkan event hapus langsung ke elemen baru ini
  btnHapus.addEventListener("click", () => {
    console.log(`Menghapus tugas: "${judulTugas}"`);
    li.remove(); // Menghapus <li> dari DOM
  });

  // Menggabungkan span dan tombol ke dalam <li>
  li.append(span, btnHapus);

  return li;
}

// 3. Menambahkan Elemen ke Urutan Paling Akhir (.append)
btnTambahBawah.addEventListener("click", () => {
  const teks = inputTugas.value.trim();
  if (teks === "") return;

  const itemBaru = buatItemTugas(teks);
  daftarTugas.append(itemBaru);

  inputTugas.value = "";
  inputTugas.focus();
});

// 4. Menambahkan Elemen ke Urutan Paling Awal (.prepend)
btnTambahAtas.addEventListener("click", () => {
  const teks = inputTugas.value.trim();
  if (teks === "") return;

  const itemBaru = buatItemTugas(`⭐ ${teks} (Prioritas)`);
  daftarTugas.prepend(itemBaru);

  inputTugas.value = "";
  inputTugas.focus();
});

// 5. Mengosongkan Seluruh Elemen di Dalam Daftar
btnKosongkan.addEventListener("click", () => {
  daftarTugas.innerHTML = "";
  console.log("Semua tugas berhasil dibersihkan!");
});

export {};
