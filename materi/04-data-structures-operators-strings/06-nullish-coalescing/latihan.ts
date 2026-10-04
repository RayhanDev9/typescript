// ============================================================
// 06 · Nullish Coalescing Operator (??) — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/06-nullish-coalescing/latihan.ts
// ============================================================

interface GameSetting {
  volumeSuara?: number;   // 0 (mute) s/d 100
  namaPlayer?: string;    // "" jika anonim
  modeSulit?: boolean;    // false jika mode mudah
  fpsTarget?: number;     // undefined jika belum diset
}

const configPlayer: GameSetting = {
  volumeSuara: 0,
  namaPlayer: "",
  modeSulit: false,
};

// TODO 1: Ambil nilai `volume` dari `configPlayer.volumeSuara`.
//         Gunakan operator `??` dengan nilai default 50.
//         Pastikan hasilnya tetap 0 (bukan 50).


// TODO 2: Ambil `nama` dari `configPlayer.namaPlayer`.
//         Gunakan operator `??` dengan nilai default "Player1".
//         Pastikan hasilnya tetap string kosong "" (bukan "Player1").


// TODO 3: Ambil `fps` dari `configPlayer.fpsTarget`.
//         Gunakan operator `??` dengan nilai default 60.
//         Karena fpsTarget undefined, hasilnya harus 60.


// TODO 4: Buat fungsi `hitungDiskonMember` yang menerima parameter `persenDiskon?: number | null`.
//         Jika nilainya null atau undefined, kembalikan default 5%.
//         Jika dikirim 0 (tidak dapat diskon), harus tetap mengembalikan 0%.

