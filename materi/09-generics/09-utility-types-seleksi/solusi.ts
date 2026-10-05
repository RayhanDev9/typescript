// ============================================================
// 09 · Utility Types: Seleksi Field — Solusi
// Jalankan: npm run materi -- materi/09-generics/09-utility-types-seleksi/solusi.ts
// ============================================================

export interface ArtikelBlog {
  id: string;
  judul: string;
  konten: string;
  penulis: string;
  status: "draf" | "terbit" | "arsip";
  jumlahDilihat: number;
}

// 1. Menggunakan Pick
export type CuplikanArtikel = Pick<ArtikelBlog, "id" | "judul" | "penulis">;

const cuplikan: CuplikanArtikel = {
  id: "ART-101",
  judul: "Panduan Lengkap TypeScript Generics",
  penulis: "Rayhan Dwi",
};

// 2. Menggunakan Omit
export type FormArtikelBaru = Omit<ArtikelBlog, "id" | "jumlahDilihat">;

const formBaru: FormArtikelBaru = {
  judul: "10 Trik Mahir TypeScript",
  konten: "Pembahasan mendalam tentang mapped types dan conditional types...",
  penulis: "Rayhan Dwi",
  status: "draf",
};

// 3. Menggunakan Record
export type StatusArtikel = ArtikelBlog["status"];

const jumlahPerStatus: Record<StatusArtikel, number> = {
  draf: 5,
  terbit: 24,
  arsip: 12,
};

console.log("=== PENGUJIAN SOLUSI UTILITY TYPES SELEKSI ===");
console.log("1. Cuplikan Artikel (Pick):", cuplikan);
console.log("\n2. Form Artikel Baru (Omit):", formBaru);
console.log("\n3. Statistik Artikel per Status (Record):");
console.log(`   - Draf   : ${jumlahPerStatus.draf} artikel`);
console.log(`   - Terbit : ${jumlahPerStatus.terbit} artikel`);
console.log(`   - Arsip  : ${jumlahPerStatus.arsip} artikel`);
