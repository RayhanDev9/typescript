# Proyek 3: Pig Game (Game Dadu 2 Pemain)

## 🎮 Tentang Game

**Pig Game** adalah game papan dadu strategi untuk 2 pemain (*Player 1* dan *Player 2*).

### 📜 Aturan Permainan:
1. **Lempar Dadu (Roll Dice 🎲)**:
   - Pemain yang sedang aktif melempar dadu.
   - Jika keluar angka **2 sampai 6**: Nilai dadu ditambahkan ke **Skor Sementara (Current Score)** putaran tersebut. Pemain bebas melempar lagi untuk mengumpulkan poin lebih banyak.
   - Jika keluar angka **1**: Seluruh skor sementara di putaran tersebut **HANGUS**, dan giliran otomatis berpindah ke pemain lawan!
2. **Simpan Skor (Hold 📥)**:
   - Pemain dapat memutuskan untuk menyimpan skor sementaranya ke **Skor Total**.
   - Jika Skor Total mencapai **$\ge$ 100 poin** (atau 50 untuk demo cepat), pemain tersebut dinyatakan **MENANG 🏆**!
   - Jika belum menang, giliran berpindah ke pemain lawan.
3. **Game Baru (New Game 🔄)**:
   - Mereset seluruh skor menjadi 0 dan memulai permainan dari Player 1.

---

## 📁 Struktur Folder

```text
03-pig-game/
├── starter/        # Desain visual HTML + CSS dadu, main.ts berisi instruksi TODO
└── final/          # Solusi logika TypeScript lengkap 100%
```

---

## 🧠 State Management di TypeScript

```ts
type Player = 0 | 1;

let scores: [number, number] = [0, 0]; // Skor total pemain 0 dan pemain 1
let currentScore: number = 0;          // Skor sementara putaran aktif
let activePlayer: Player = 0;          // Pemain yang sedang memegang giliran
let playing: boolean = true;           // Status permainan (true jika belum ada pemenang)
```

---

## 🚀 Cara Menjalankan

```bash
cd materi/02-dom-events-project/03-pig-game/final
npm install
npm run dev
```
