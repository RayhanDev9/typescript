// ============================================================
// PROYEK 1: GUESS MY NUMBER — FINAL (SOLUSI REFAKTOR LENGKAP)
// ============================================================

// --- 1. State Permainan ---
let angkaRahasia: number = Math.trunc(Math.random() * 20) + 1;
let skor: number = 20;
let skorTertinggi: number = 0;

// --- 2. Elemen DOM ---
const pesanEl = document.querySelector<HTMLParagraphElement>(".message")!;
const angkaEl = document.querySelector<HTMLDivElement>(".number")!;
const skorEl = document.querySelector<HTMLSpanElement>(".score")!;
const skorTertinggiEl = document.querySelector<HTMLSpanElement>(".highscore")!;
const inputTebakanEl = document.querySelector<HTMLInputElement>(".guess")!;
const btnCekEl = document.querySelector<HTMLButtonElement>(".check")!;
const btnLagiEl = document.querySelector<HTMLButtonElement>(".again")!;

// --- 3. Helper Functions (Prinsip DRY) ---
const tampilkanPesan = (pesan: string): void => {
  pesanEl.textContent = pesan;
};

const aturWarnaBackground = (warna: string): void => {
  document.body.style.backgroundColor = warna;
};

// --- 4. Logika Pengecekan Tebakan ---
btnCekEl.addEventListener("click", () => {
  const tebakan = Number(inputTebakanEl.value);

  // Skenario 1: Tidak ada angka input
  if (!tebakan) {
    tampilkanPesan("⛔ Masukkan angka terlebih dahulu!");
    return;
  }

  // Skenario 2: Tebakan Tepat (MENANG)
  if (tebakan === angkaRahasia) {
    tampilkanPesan("🎉 Tebakanmu BENAR!");
    angkaEl.textContent = String(angkaRahasia);
    angkaEl.style.width = "28rem";
    aturWarnaBackground("#60b347"); // Hijau cerah

    if (skor > skorTertinggi) {
      skorTertinggi = skor;
      skorTertinggiEl.textContent = String(skorTertinggi);
    }
    return;
  }

  // Skenario 3: Tebakan Salah (Terlalu Tinggi / Rendah)
  if (skor > 1) {
    skor--;
    skorEl.textContent = String(skor);
    tampilkanPesan(tebakan > angkaRahasia ? "📈 Terlalu Tinggi!" : "📉 Terlalu Rendah!");
  } else {
    // Skenario 4: Skor Habis (KALAH)
    skorEl.textContent = "0";
    tampilkanPesan("💥 Kamu kalah! Tekan 'Main Lagi'.");
    aturWarnaBackground("#b34747"); // Merah redup
  }
});

// --- 5. Logika Reset Permainan ---
btnLagiEl.addEventListener("click", () => {
  skor = 20;
  angkaRahasia = Math.trunc(Math.random() * 20) + 1;

  tampilkanPesan("Mulai menebak...");
  skorEl.textContent = String(skor);
  angkaEl.textContent = "?";
  angkaEl.style.width = "14rem";
  inputTebakanEl.value = "";
  aturWarnaBackground("#222222");
});
