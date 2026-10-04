// ============================================================
// 12 · Challenge: Aplikasi Polling Suara — Solusi
// ============================================================

interface PollingAplikasi {
  pertanyaan: string;
  opsi: string[];
  suara: number[];
  catatSuara(nomorOpsi: number): void;
  tampilkanHasil(this: { suara: number[] }, format?: "array" | "string"): void;
}

const polling: PollingAplikasi = {
  pertanyaan: "Bahasa pemrograman apa yang paling ingin kamu kuasai?",
  opsi: ["0: TypeScript", "1: Python", "2: Rust", "3: Go"],
  suara: [0, 0, 0, 0],

  catatSuara(nomorOpsi: number) {
    if (typeof nomorOpsi === "number" && nomorOpsi >= 0 && nomorOpsi < this.suara.length) {
      this.suara[nomorOpsi]++;
      console.log(`[VOTE DITERIMA] Memilih: ${this.opsi[nomorOpsi]}`);
      this.tampilkanHasil("string");
    } else {
      console.log(`[INVALID] Opsi nomor ${nomorOpsi} tidak valid.`);
    }
  },

  tampilkanHasil(this: { suara: number[] }, format: "array" | "string" = "array") {
    if (format === "array") {
      console.log("Hasil Polling (Array):", this.suara);
    } else if (format === "string") {
      console.log(`Hasil polling adalah ${this.suara.join(", ")}.`);
    }
  },
};

console.log("=== SIMULASI POLLING ===");
console.log(polling.pertanyaan);
console.log(polling.opsi.join("\n"));
console.log("------------------------");

polling.catatSuara(0);
polling.catatSuara(0);
polling.catatSuara(1);
polling.catatSuara(3);

console.log("\n=== TAMPILAN AKHIR (ARRAY) ===");
polling.tampilkanHasil("array");

// BONUS: Memanggil .call() pada data eksternal
console.log("\n=== DATASET EKSTERNAL (MENGGUNAKAN .call) ===");
const dataSurveiA = { suara: [5, 2, 3] };
const dataSurveiB = { suara: [1, 5, 3, 9, 6, 1] };

polling.tampilkanHasil.call(dataSurveiA, "array");
polling.tampilkanHasil.call(dataSurveiA, "string");
polling.tampilkanHasil.call(dataSurveiB, "string");
