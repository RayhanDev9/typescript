# 03 · Type Narrowing: Operator `in`

## 🎯 Tujuan Belajar
- Memahami mengapa operator `instanceof` tidak dapat digunakan pada **Interface** atau **Type Aliases** biasa (karena interface hilang saat runtime).
- Menguasai operator JavaScript bawaan **`in`** untuk memeriksa keberadaan properti pada objek.
- Memahami bagaimana TypeScript secara otomatis mempersempit tipe objek berdasarkan pengecekan `"namaField" in objek`.
- Menerapkan pola pembeda entitas objek polos (*Plain JavaScript Objects*).

---

## 🧠 Analogi Dunia Nyata: "Membedakan Ikan dan Burung Tanpa Bertanya Spesies"
Bayangkan Anda melihat hewan di dalam kotak tertutup dengan lubang kecil:
- Anda tidak tahu nama ilmiah atau silsilah hewan tersebut (**Tidak ada Class / Prototype**).
- Anda meraba dan menemukan:
  - *"Oh, hewan ini memiliki **Sayap**!"* ➔ Anda yakin 100% ini adalah kelompok unggas/burung yang bisa terbang.
  - *"Oh, hewan ini memiliki **Sirip**!"* ➔ Anda yakin 100% ini adalah kelompok ikan yang bisa berenang.
- Operator `"sayap" in hewan` memeriksa ciri fisik objek secara langsung saat program berjalan (*runtime*), dan TypeScript langsung mempersempit tipe objek tersebut!

---

## 📘 Masalah di TypeScript

Jika kita mendefinisikan tipe menggunakan `interface`:
```ts
interface Burung {
  nama: string;
  sayapCm: number;
}

interface Ikan {
  nama: string;
  siripCm: number;
}

function gerak(hewan: Burung | Ikan) {
  // if (hewan instanceof Burung) // ❌ COMPILE ERROR: 'Burung' only refers to a type, but is being used as a value here.
}
```
**Mengapa error?**
Karena `interface` dan `type` adalah murni fitur TypeScript yang **dihapus (erased)** saat di-compile ke JavaScript. Di JavaScript runtime, objek hanyalah `{ nama: "Merpati", sayapCm: 25 }` tanpa ada class bernama `Burung`.

---

## 🚀 Solusi Elegan: Operator `in`

Gunakan operator `"properti" in objek`:
```ts
function gerak(hewan: Burung | Ikan): string {
  if ("sayapCm" in hewan) {
    // Di dalam blok if: TypeScript tahu pasti hewan adalah Burung!
    return `${hewan.nama} terbang dengan bentang sayap ${hewan.sayapCm} cm.`;
  }

  // Di luar blok if: TypeScript tahu pasti hewan adalah Ikan!
  return `${hewan.nama} berenang dengan sirip sepanjang ${hewan.siripCm} cm.`;
}
```

---

## 📌 Ringkasan
- Gunakan operator `in` ketika Anda perlu membedakan objek yang didefinisikan lewat `interface` atau `type`.
- Format sintaks: `"namaProperti" in namaVariabel`.
- Properti yang dicek harus unik dan hanya ada pada salah satu tipe union tersebut.
