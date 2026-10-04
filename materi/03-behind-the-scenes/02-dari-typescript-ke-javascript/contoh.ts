// ============================================================
// 02 · Dari TypeScript ke JavaScript — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/02-dari-typescript-ke-javascript/contoh.ts
// ============================================================

// 1. Tipe dan Interface (Hanya ada di waktu penulisan/kompilasi)
type StatusKoneksi = "terhubung" | "putus" | "menunggu";

interface ServerConfig {
  host: string;
  port: number;
  status: StatusKoneksi;
}

// 2. Kode yang menghasilkan logika JavaScript nyata
const serverUtama: ServerConfig = {
  host: "api.belajarts.id",
  port: 8080,
  status: "terhubung"
};

function cetakStatusServer(config: ServerConfig): void {
  console.log(`Server ${config.host}:${config.port} saat ini [${config.status.toUpperCase()}]`);
}

cetakStatusServer(serverUtama);

// 💡 Bukti Type Erasure:
// Jika kamu mencari kata "interface ServerConfig" di file hasil build JavaScript (di dist/),
// kata tersebut tidak akan pernah ditemukan karena sudah dihapus total oleh compiler!
