// ============================================================
// 12 · Event Bubbling & Delegation — Contoh
// Jalankan: npm run dom (buka materi/02-dom-events-project/12-event-bubbling-delegation/index.html di browser)
// ============================================================

// 1. Memeriksa Urutan Event Bubbling
const kotakLuar = document.querySelector<HTMLDivElement>("#kotak-luar")!;
const kotakDalam = document.querySelector<HTMLDivElement>("#kotak-dalam")!;
const btnTarget = document.querySelector<HTMLButtonElement>("#btn-klik-target")!;

btnTarget.addEventListener("click", (_e: MouseEvent) => {
  console.log("1. [TARGET] Tombol Hijau diklik!");
  // Jika ingin menghentikan gelembung event agar tidak naik ke kotak dalam & luar:
  // _e.stopPropagation();
});

kotakDalam.addEventListener("click", () => {
  console.log("2. [BUBBLING] Event naik ke Kotak Dalam (Kuning)!");
});

kotakLuar.addEventListener("click", () => {
  console.log("3. [BUBBLING] Event naik ke Kotak Luar (Merah)!");
});

// 2. Menerapkan Pola Event Delegation
const kontainerDelegasi =
  document.querySelector<HTMLUListElement>("#kontainer-delegasi")!;
const btnTambahItem =
  document.querySelector<HTMLButtonElement>("#btn-tambah-item")!;

// CUKUP PASANG 1 EVENT LISTENER DI INDUK KONTEN (ul)
kontainerDelegasi.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  // Mencari tombol aksi terdekat yang diklik
  const tombolAksi = target.closest<HTMLButtonElement>(".btn-aksi-item");

  // Jika yang diklik bukan tombol aksi, abaikan
  if (!tombolAksi) return;

  const itemLi = tombolAksi.closest<HTMLLIElement>(".item-delegasi");
  const idKursus: string = itemLi?.dataset.id || "0";

  console.log(`[Event Delegation] Berhasil membeli kursus ID: ${idKursus}!`);
  tombolAksi.textContent = "Terbeli ✅";
  tombolAksi.style.backgroundColor = "#059669";
  tombolAksi.disabled = true;
});

// 3. Menambahkan Elemen Baru Secara Dinamis
let counterItem: number = 2;

btnTambahItem.addEventListener("click", () => {
  counterItem++;

  const liBaru: HTMLLIElement = document.createElement("li");
  liBaru.classList.add("item-delegasi");
  liBaru.dataset.id = counterItem.toString();

  liBaru.innerHTML = `
    <span>Item Kursus #${counterItem} (Dibuat Dinamis)</span>
    <button class="btn-aksi-item" data-aksi="beli">Beli Kursus</button>
  `;

  kontainerDelegasi.append(liBaru);
  console.log(`Item #${counterItem} ditambahkan ke DOM. Otomatis bisa diklik tanpa listener baru!`);
});

export {};
