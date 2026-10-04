// ============================================================
// 06 · Nullish Coalescing Operator (??) — Solusi
// ============================================================

interface GameSetting {
  volumeSuara?: number;
  namaPlayer?: string;
  modeSulit?: boolean;
  fpsTarget?: number;
}

const configPlayer: GameSetting = {
  volumeSuara: 0,
  namaPlayer: "",
  modeSulit: false,
};

// TODO 1
const volume = configPlayer.volumeSuara ?? 50;
console.log("TODO 1 (Volume harus 0):", volume);

// TODO 2
const nama = configPlayer.namaPlayer ?? "Player1";
console.log("TODO 2 (Nama harus \"\"):", `"${nama}"`);

// TODO 3
const fps = configPlayer.fpsTarget ?? 60;
console.log("TODO 3 (FPS harus 60):", fps);

// TODO 4
function hitungDiskonMember(persenDiskon?: number | null): number {
  return persenDiskon ?? 5;
}

console.log("TODO 4 (Diskon 0%):", hitungDiskonMember(0), "%");
console.log("TODO 4 (Diskon undefined -> 5%):", hitungDiskonMember(undefined), "%");
console.log("TODO 4 (Diskon 20%):", hitungDiskonMember(20), "%");
