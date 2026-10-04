// ============================================================
// 05 · Scope & Scope Chain — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/05-scope-dan-scope-chain/contoh.ts
// ============================================================

// 1. Variabel Global (Bisa diakses siapa saja)
const namaPengajar: string = "Rayhan";

function levelSatu(): void {
  // 2. Variabel Function Scope
  const topik: string = "TypeScript Scope";

  if (true) {
    // 3. Variabel Block Scope
    const pesanRahasia: string = "Hanya ada di dalam IF block";
    console.log("[Di dalam IF]");
    console.log("-> Baca Block:", pesanRahasia);
    console.log("-> Lookup ke Parent Function:", topik);
    console.log("-> Lookup ke Global:", namaPengajar);
  }

  // console.log(pesanRahasia); // ❌ Error: pesanRahasia terkunci di dalam Block Scope!
}

levelSatu();
