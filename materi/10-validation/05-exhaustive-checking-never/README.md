# 05 · Exhaustive Checking dengan Tipe `never`

## 🎯 Tujuan Belajar
- Memahami konsep **Exhaustive Checking** (Pemeriksaan Menyeluruh Tanpa Celah) di TypeScript.
- Memahami makna tipe **`never`**: tipe data yang menandakan suatu kondisi yang seharusnya **tidak akan pernah terjadi** dalam program.
- Menguasai pola keamanan industri: `const _pemeriksa: never = nilai;` pada blok `default` di dalam `switch`.
- Mengetahui bagaimana pola ini secara otomatis mendeteksi jika di masa depan ada programmer lain yang menambahkan varian baru ke union tetapi lupa menanganinya di fungsi-fungsi yang ada.

---

## 🧠 Analogi Dunia Nyata: "Semua Pintu Darurat Wajib Punya Kunci"
Bayangkan sebuah denah gedung bioskop:
- Ada 3 pintu darurat: Pintu A, Pintu B, Pintu C.
- Petugas keamanan bioskop memiliki daftar SOP tertulis untuk mengunci Pintu A, B, dan C saat kebakaran (**Penanganan Semua Kasus Switch**).
- Jika tahun depan manajemen bioskop membangun **Pintu D**, namun mandor lupa menambahkan SOP untuk Pintu D:
  - Tanpa Exhaustive Checking: Gedung bioskop lolos inspeksi, tapi saat kebakaran Pintu D lupa dibuka (**Bug Runtime yang Fatal**).
  - Dengan Exhaustive Checking: Alarm inspeksi gedung berbunyi kencang: *"Ada Pintu D yang belum punya SOP!"* (**TypeScript Compile Error**). Gedung tidak boleh beroperasi sampai Pintu D memiliki SOP penanganan!

---

## 📘 Konsep Dasar

### Pola Standar `never` pada Blok `default`

```ts
type UkuranBaju = "S" | "M" | "L";

function hitungTambahanKain(ukuran: UkuranBaju): number {
  switch (ukuran) {
    case "S":
      return 1.0;
    case "M":
      return 1.2;
    case "L":
      return 1.5;
    default:
      // Di sini, semua kemungkinan (S, M, L) sudah habis di atas!
      // Jadi variabel 'ukuran' di titik ini bertipe 'never'.
      const _pengecekanMenyeluruh: never = ukuran;
      throw new Error(`Ukuran tidak tertangani: ${_pengecekanMenyeluruh}`);
  }
}
```

---

### 🔥 Apa yang Terjadi Jika Union Ditambahkan?
Jika suatu hari kita menambahkan varian baru:
```ts
type UkuranBaju = "S" | "M" | "L" | "XL"; // <-- Baru ditambahkan!
```
Maka pada fungsi `hitungTambahanKain`, baris ini langsung **merah menyala (Compile Error)**:
```ts
const _pengecekanMenyeluruh: never = ukuran;
// ❌ Error: Type 'string' is not assignable to type 'never'.
// (Secara spesifik: Type '"XL"' is not assignable to type 'never')
```
TypeScript secara ajaib memberi tahu Anda: *"Hei! Anda baru saja menambahkan 'XL', tapi Anda belum menulis `case "XL"` di fungsi ini!"*.

---

## 📌 Ringkasan
- Tipe `never` adalah jaring pengaman terakhir untuk memastikan 100% kasus union tertangani.
- Selalu tambahkan `const _exhaustive: never = x;` pada blok `default` ketika menangani Discriminated Union.
