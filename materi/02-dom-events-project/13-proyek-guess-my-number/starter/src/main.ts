// ============================================================
// 13 · Proyek 1: Guess My Number — Starter
// Jalankan: npm run dom (buka materi/02-dom-events-project/13-proyek-guess-my-number/starter/index.html di browser)
// ============================================================

// --- STEP 1: Inisialisasi State Permainan ---
// Buat angka rahasia acak antara 1 s/d 20: Math.trunc(Math.random() * 20) + 1
let angkaRahasia: number = Math.trunc(Math.random() * 20) + 1;
let skor: number = 20;
let skorTertinggi: number = 0;

// --- STEP 2: Pilih Elemen-Elemen DOM ---
// Gunakan document.querySelector dengan tipe Generic yang sesuai:
const pesanEl = document.querySelector<HTMLParagraphElement>(".message")!;
const angkaEl = document.querySelector<HTMLDivElement>(".number")!;
const skorEl = document.querySelector<HTMLSpanElement>(".score")!;
const skorTertinggiEl = document.querySelector<HTMLSpanElement>(".highscore")!;
const inputTebakanEl = document.querySelector<HTMLInputElement>(".guess")!;
const btnCekEl = document.querySelector<HTMLButtonElement>(".check")!;
const btnLagiEl = document.querySelector<HTMLButtonElement>(".again")!;

// --- STEP 3: Event Handler Tombol "Cek!" ---
btnCekEl.addEventListener("click", () => {
  const tebakan = Number(inputTebakanEl.value);
  console.log("Nilai tebakan:", tebakan);

  // TODO 1: Jika tidak ada input tebakan (!tebakan)
  //         Tampilkan pesan "⛔ Masukkan angka terlebih dahulu!"

  // TODO 2: Jika tebakan === angkaRahasia (MENANG 🎉)
  //         - Tampilkan pesan "🎉 Tebakanmu BENAR!"
  //         - Tampilkan angka rahasia pada `angkaEl.textContent`
  //         - Ubah background body menjadi hijau (#60b347)
  //         - Perbesar lebar kotak angka (`angkaEl.style.width = "30rem"`)
  //         - Jika skor saat ini > skorTertinggi, perbarui skorTertinggi

  // TODO 3: Jika tebakan !== angkaRahasia (SALAH)
  //         - Jika skor > 1:
  //           - Kurangi skor sebesar 1
  //           - Tampilkan "📈 Terlalu Tinggi!" atau "📉 Terlalu Rendah!"
  //           - Perbarui `skorEl.textContent`
  //         - Jika skor <= 1 (KALAH 💥):
  //           - Tampilkan pesan "💥 Kamu kalah! Coba lagi."
  //           - Set `skorEl.textContent = "0"`
});

// --- STEP 4: Event Handler Tombol "Main Lagi!" ---
btnLagiEl.addEventListener("click", () => {
  // TODO 4: Reset state permainan:
  //         - Kembalikan skor menjadi 20
  //         - Acak ulang angkaRahasia yang baru
  //         - Kembalikan pesan awal: "Mulai menebak..."
  //         - Kembalikan angkaEl: teks "?" dan lebar "14rem"
  //         - Kosongkan inputTebakanEl.value
  //         - Kembalikan background body menjadi "#222222"
});
