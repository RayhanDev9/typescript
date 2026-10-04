// ============================================================
// 12 · Challenge: Aplikasi Polling Suara — Latihan
// Jalankan: npm run materi -- materi/05-closer-look-functions/12-challenge-aplikasi-polling/latihan.ts
// ============================================================

interface PollingAplikasi {
  pertanyaan: string;
  opsi: string[];
  suara: number[];
  catatSuara(nomorOpsi: number): void;
  tampilkanHasil(format?: "array" | "string"): void;
}

// TODO 1: Lengkapi implementasi objek `polling` di bawah ini
const polling: PollingAplikasi = {
  pertanyaan: "Bahasa pemrograman apa yang paling ingin kamu kuasai?",
  opsi: ["0: TypeScript", "1: Python", "2: Rust", "3: Go"],
  suara: [0, 0, 0, 0],

  catatSuara(nomorOpsi: number) {
    // TODO 1.a: Validasi nomorOpsi (harus >= 0 dan < this.suara.length)
    //           Tambahkan 1 pada elemen yang sesuai di this.suara
    //           Lalu panggil this.tampilkanHasil("string")
  },

  tampilkanHasil(format: "array" | "string" = "array") {
    // TODO 1.b: Jika format === "array", tampilkan this.suara
    //           Jika format === "string", tampilkan teks "Hasil polling adalah <suara1>, <suara2>, ..."
  },
};

// TODO 2: Simulasikan 4 suara masuk:
//         - User 1 memilih 0 (TypeScript)
//         - User 2 memilih 0 (TypeScript)
//         - User 3 memilih 1 (Python)
//         - User 4 memilih 3 (Go)


// TODO 3: Gunakan method `.call()` untuk menampilkan hasil dari 2 dataset eksternal berikut:
const dataSurveiA = { suara: [5, 2, 3] };
const dataSurveiB = { suara: [1, 5, 3, 9, 6, 1] };

// Panggil polling.tampilkanHasil dengan .call() pada dataSurveiA (format "array" dan "string")
// Panggil polling.tampilkanHasil dengan .call() pada dataSurveiB (format "string")

