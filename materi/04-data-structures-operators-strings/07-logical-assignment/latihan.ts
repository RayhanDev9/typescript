// ============================================================
// 07 · Logical Assignment (||=, &&=, ??=) — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/07-logical-assignment/latihan.ts
// ============================================================

interface AkunGame {
  nickname: string;
  skorTertinggi?: number;
  level?: number;
  email?: string;
}

const pemain1: AkunGame = {
  nickname: "DragonSlayer",
  skorTertinggi: 0,
};

const pemain2: AkunGame = {
  nickname: "ShadowNinja",
  email: "ninja@example.com",
};

// TODO 1: Gunakan operator `??=` untuk mengisi `skorTertinggi` pemain1 dan pemain2
//         dengan nilai default 100 jika undefined.
//         Pastikan `skorTertinggi` pemain1 tetap 0!


// TODO 2: Gunakan operator `??=` untuk mengisi `level` pemain1 dan pemain2
//         dengan nilai default 1.


// TODO 3: Gunakan operator `&&=` untuk menyamarkan `email` pemain1 dan pemain2
//         menjadi `"***@tersembunyi.com"` HANYA jika email tersebut ada.

