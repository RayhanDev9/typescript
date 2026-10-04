# 12 · Challenge: Aplikasi Polling Suara (Voting App)

Selamat telah menyelesaikan seluruh materi di **Modul 05: A Closer Look at Functions**! 🎉

Tantangan akhir ini menguji pemahamanmu tentang **method objek**, **manipulasi `this` dengan `call` / `bind`**, **higher-order function**, dan **closure**.

---

## 📋 Deskripsi Proyek: Sistem Polling Pemrograman

Kita akan membangun sebuah sistem polling interaktif untuk survei bahasa pemrograman favorit siswa.

### Struktur Objek Polling:

```ts
interface PollingAplikasi {
  pertanyaan: string;
  opsi: string[];
  suara: number[]; // Menyimpan jumlah suara untuk setiap opsi [0, 0, 0, 0]
  catatSuara(nomorOpsi: number): void;
  tampilkanHasil(format?: "array" | "string"): void;
}
```

---

## 🎯 Tugas yang Harus Dikerjakan:

1. **Inisialisasi Objek `polling`**:
   - `pertanyaan`: `"Bahasa pemrograman apa yang paling ingin kamu kuasai?"`
   - `opsi`: `["0: TypeScript", "1: Python", "2: Rust", "3: Go"]`
   - `suara`: Array dengan 4 angka nol `[0, 0, 0, 0]`.

2. **Method `catatSuara(nomorOpsi: number)`**:
   - Periksa apakah `nomorOpsi` valid (berada di antara `0` sampai `this.suara.length - 1`).
   - Jika valid, tambahkan 1 ke `this.suara[nomorOpsi]`.
   - Panggil `this.tampilkanHasil()` di akhir method.

3. **Method `tampilkanHasil(format: "array" | "string" = "array")`**:
   - Jika format `"array"`: cetak `this.suara` ke console.
   - Jika format `"string"`: cetak pesan: `"Hasil polling adalah 3, 1, 0, 2."` (gunakan `.join(", ")`).

4. **Gunakan `.call()` untuk Data Eksternal (Bonus Challenge)**:
   - Bayangkan ada 2 data survei dari departemen lain:
     - Data 1: `{ suara: [5, 2, 3] }`
     - Data 2: `{ suara: [1, 5, 3, 9, 6, 1] }`
   - Panggil method `tampilkanHasil` milik objek `polling` pada kedua data tersebut menggunakan **`.call()`** untuk kedua format (`"string"` dan `"array"`).

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/12-challenge-aplikasi-polling/latihan.ts
```

Cocokkan implementasimu dengan [`solusi.ts`](./solusi.ts) setelah selesai mencoba!
