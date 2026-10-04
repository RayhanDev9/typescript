// ============================================================
// 10 · Interface & implements — Solusi
// ============================================================

// TODO 1
interface BisaDimainkan {
  mainkan(): void;
  jeda(): void;
}

// TODO 2
interface MemilikiDurasi {
  durasiDetik: number;
}

// TODO 3
class PemutarLagu implements BisaDimainkan, MemilikiDurasi {
  constructor(
    public judul: string,
    public penyanyi: string,
    public durasiDetik: number
  ) {}

  public mainkan(): void {
    console.log(`[PLAY] Memutar "${this.judul}" oleh ${this.penyanyi} (${this.durasiDetik} detik)`);
  }

  public jeda(): void {
    console.log("[PAUSE] Lagu dijeda.");
  }
}

// TODO 4
console.log("=== PEMUTAR MUSIK ===");
const lagu = new PemutarLagu("Bohemian Rhapsody", "Queen", 354);
lagu.mainkan();
lagu.jeda();
