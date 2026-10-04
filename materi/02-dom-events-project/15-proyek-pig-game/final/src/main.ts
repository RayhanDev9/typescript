// ============================================================
// PROYEK 3: PIG GAME (GAME DADU 2 PEMAIN) — FINAL (SOLUSI LENGKAP)
// ============================================================

// --- 1. Definisi Tipe dan State Permainan ---
type Player = 0 | 1;

let scores: [number, number];   // Skor total pemain 0 dan 1
let currentScore: number;        // Skor sementara putaran aktif
let activePlayer: Player;        // 0 untuk Pemain 1, 1 untuk Pemain 2
let playing: boolean;            // true jika game sedang aktif

const simbolDadu: string[] = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// --- 2. Elemen DOM ---
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

// --- 3. Fungsi Inisialisasi & Reset Permainan ---
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

init();

// --- 4. Fungsi Pergantian Giliran Pemain ---
const switchPlayer = (): void => {
  const currentElActive = activePlayer === 0 ? current0El : current1El;
  currentElActive.textContent = "0";
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// --- 5. Event Listener Lempar Dadu (Roll Dice) ---
btnRoll.addEventListener("click", () => {
  if (!playing) return;

  // 1. Acak angka 1 - 6
  const dadu = Math.trunc(Math.random() * 6) + 1;

  // 2. Tampilkan dadu ke layar
  diceEl.classList.remove("hidden");
  diceEl.textContent = simbolDadu[dadu - 1];

  // Efek getar/animasi kecil
  diceEl.style.transform = "translateX(-50%) scale(1.15)";
  setTimeout(() => {
    diceEl.style.transform = "translateX(-50%) scale(1)";
  }, 150);

  // 3. Periksa angka dadu
  if (dadu !== 1) {
    currentScore += dadu;
    const currentElActive = activePlayer === 0 ? current0El : current1El;
    currentElActive.textContent = String(currentScore);
  } else {
    // Keluar angka 1 -> Skor sementara hangus & ganti giliran
    switchPlayer();
  }
});

// --- 6. Event Listener Simpan Skor (Hold) ---
btnHold.addEventListener("click", () => {
  if (!playing) return;

  // 1. Tambah skor sementara ke skor total
  scores[activePlayer] += currentScore;

  const scoreElActive = activePlayer === 0 ? score0El : score1El;
  scoreElActive.textContent = String(scores[activePlayer]);

  // 2. Cek apakah skor mencapai target kemenangan (50 poin)
  if (scores[activePlayer] >= 50) {
    playing = false;
    diceEl.classList.add("hidden");

    const playerElActive = activePlayer === 0 ? player0El : player1El;
    playerElActive.classList.add("player--winner");
    playerElActive.classList.remove("player--active");
  } else {
    // 3. Jika belum menang, ganti giliran
    switchPlayer();
  }
});

// --- 7. Event Listener Reset Game Baru ---
btnNew.addEventListener("click", init);
