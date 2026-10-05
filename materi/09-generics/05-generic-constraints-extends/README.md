# 05 · Generic Constraints (`extends`)

## 🎯 Tujuan Belajar
- Memahami mengapa Generic polos terkadang memunculkan error: *"Property does not exist on type T"*.
- Memahami konsep **Generic Constraints** (Batasan Generik) menggunakan kata kunci **`extends`**.
- Mampu membatasi tipe generik agar wajib memiliki properti tertentu (misalnya `length`, `id`).
- Mampu membatasi generik ke tipe objek: `<T extends object>`.

---

## 🧠 Analogi Dunia Nyata: "Lomba Balap Apapun yang Punya Roda"
Bayangkan Anda mengadakan perlombaan balap:
- Jika Anda berkata: *"Siapapun boleh ikut lomba!"* (**Generic Polos `<T>`**), maka ada orang yang datang membawa kulkas atau pohon pisang. Tentu mereka tidak bisa menggelinding karena tidak punya roda!
- Anda perlu memberi aturan syarat minimal (**Generic Constraint `<T extends PunyaRoda>`**):
  *"Peserta boleh membawa kendaraan APAPUN (sepeda, motor, mobil, sepatu roda), ASALKAN kendaraan tersebut MEMILIKI MINIMAL 2 RODA!"*
- Dengan aturan ini, jenis kendaraannya tetap fleksibel dan bebas, namun Anda dijamin bisa menyuruh kendaraan tersebut berjalan menggelinding di lintasan!

---

## 📘 Masalah di TypeScript

### Mengapa Kode Ini Error?
```ts
function cetakPanjang<T>(data: T): void {
  console.log(data.length); // ❌ Error: Property 'length' does not exist on type 'T'.
}
```
**Penyebab:**
TypeScript menjaga kode kita 100% aman. Jika pemanggil fungsi mengirimkan angka `cetakPanjang(123)` atau boolean `cetakPanjang(true)`, mereka tidak punya properti `.length`!

---

## 🚀 Solusi: Memberikan Constraint dengan `extends`

Kita beri tahu compiler bahwa `T` bukan sembarang tipe, melainkan tipe apapun yang **minimal memiliki properti `length: number`**:

```ts
interface MemilikiPanjang {
  length: number;
}

function cetakPanjang<T extends MemilikiPanjang>(data: T): number {
  return data.length; // ✅ Aman! Dijamin memiliki .length
}

// Bekerja untuk:
cetakPanjang("Halo Dunia");  // string punya .length (10)
cetakPanjang([1, 2, 3, 4]);   // array punya .length (4)
cetakPanjang({ length: 50 }); // objek dengan .length

// ❌ Ditolak saat kompilasi:
// cetakPanjang(100); // Argument of type 'number' is not assignable...
```

---

## 📌 Ringkasan
- Gunakan `<T extends Syarat>` jika fungsi generik Anda perlu mengakses properti tertentu di dalam nilai `T`.
- `extends` di sini bukan pewarisan class biasa, melainkan bermakna: *"T harus kompatibel dan memenuhi bentuk interface/syarat ini"*.
