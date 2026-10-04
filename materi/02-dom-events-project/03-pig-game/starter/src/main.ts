// ============================================================
// PROYEK 3: PIG GAME (GAME DADU 2 PEMAIN) — STARTER
// ============================================================

// --- STEP 1: Definisi Tipe dan State Management ---
type Player = 0 | 1;

let scores: [number, number];   // Skor total pemain 0 dan 1
let currentScore: number;        // Skor sementara putaran aktif
let activePlayer: Player;        // 0 untuk Pemain 1, 1 untuk Pemain 2
let playing: boolean;            // true jika game sedang berlangsung

// Array simbol dadu unicode 1 sampai 6:
const simbolDadu: string[] = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// --- STEP 2: Pilih Elemen DOM ---
const player0El = document.querySelector<HTMLElement>(".player--0")!;
const player1El = document.querySelector<HTMLElement>(".player--1")!;
const score0El = document.querySelector<HTMLParagraphElement>("#score--0")!;
const score1El = document.querySelector<HTMLParagraphElement>("#score--1")!;
const current0El = document.querySelector<HTMLParagraphElement>("#current--0")!;
const current1El = document.querySelector<HTMLParagraphElement>("#current--1")!;
const diceEl = document.querySelector<HTMLDivElement>("#dice")!;

const btnNew = document.querySelector<HTMLButtonElement>(".btn--new")!;
const btnRoll = document.querySelector<HTMLButtonElement>(".btn--roll")!;
const btnHold = document.querySelector<HTMLButtonElement>(".btn--hold")!;

// --- STEP 3: Fungsi Inisialisasi Game (Reset) ---
const init = (): void => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = "0";
  score1El.textContent = "0";
  current0El.textContent = "0";
  current1El.textContent = "0";

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// Jalankan init pertama kali saat game dibuka:
init();

// --- STEP 4: Fungsi Ganti Giliran Pemain ---
const switchPlayer = (): void => {
  // TODO 1:
  // - Set teks skor sementara pemain yang aktif saat ini menjadi "0"
  // - Reset `currentScore = 0`
  // - Ganti `activePlayer` (jika 0 ganti ke 1, jika 1 ganti ke 0)
  // - Toggle class "player--active" pada `player0El` dan `player1El`
};

// --- STEP 5: Event Handler Lempar Dadu (Roll Dice) ---
btnRoll.addEventListener("click", () => {
  if (!playing) return;

  // TODO 2:
  // 1. Buat angka acak dadu 1 s/d 6: Math.trunc(Math.random() * 6) + 1
  // 2. Tampilkan dadu (hapus class "hidden" dari diceEl)
  // 3. Tampilkan simbol dadu: diceEl.textContent = simbolDadu[dadu - 1]
  // 4. Periksa nilai dadu:
  //    - Jika dadu !== 1:
  //      - Tambahkan nilai dadu ke `currentScore`
  //      - Perbarui elemen skor sementara pemain yang aktif (#current--0 atau #current--1)
  //    - Jika dadu === 1:
  //      - Panggil `switchPlayer()` (skor sementara hangus dan giliran berganti)
});

// --- STEP 6: Event Handler Simpan Skor (Hold) ---
btnHold.addEventListener("click", () => {
  if (!playing) return;

  // TODO 3:
  // 1. Tambahkan `currentScore` ke `scores[activePlayer]`
  // 2. Perbarui skor total pada layar (#score--0 atau #score--1)
  // 3. Periksa apakah `scores[activePlayer] >= 100` (atau 50 untuk demo cepat):
  //    - Jika MENANG:
  //      - Set `playing = false`
  //      - Sembunyikan dadu
  //      - Tambahkan class "player--winner" dan hapus "player--active" pada pemain aktif
  //    - Jika BELUM MENANG:
  //      - Panggil `switchPlayer()`
});

// --- STEP 7: Event Handler Game Baru (New Game) ---
btnNew.addEventListener("click", init);
