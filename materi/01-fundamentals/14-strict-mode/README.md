# 14 · Strict Mode

## 🎯 Tujuan Belajar
- Memahami apa itu **Strict Mode** (Mode Ketat) dan mengapa mode ini sangat penting
- Mengetahui perbedaan `"use strict"` di JavaScript dengan `"strict": true` di `tsconfig.json`
- Mengetahui jenis kesalahan tersembunyi (*silent errors*) yang dicegah oleh Strict Mode
- Membiasakan diri menulis kode yang aman dan disiplin sejak awal

---

## 🧠 Analogi: Standar Keamanan Bangunan

Bayangkan dua mandor bangunan:
- **Mandor Santai**: Membiarkan kabel terbuka tanpa isolasi dan baut yang longgar selama bangunannya belum roboh.
- **Mandor Ketat (Strict Mode)**: Memeriksa setiap baut dan isolasi kabel sebelum pekerjaan berlanjut. Jika ada sedikit saja yang tidak sesuai standar, pekerjaan dihentikan dan diperbaiki saat itu juga.

Strict Mode adalah standar keamanan kode yang mengubah potensi bahaya tersembunyi menjadi peringatan yang jelas dan langsung terlihat.

---

## 🔍 Sejarah Singkat: `"use strict"` di JavaScript

Di awal era JavaScript (sebelum 2009), JavaScript sangat pemaaf. Banyak kesalahan ketik yang tidak memunculkan pesan error, melainkan dibiarkan berjalan dengan perilaku aneh.

Untuk mengatasinya, diperkenalkan instruksi `"use strict";` di awal file JavaScript:

```ts
"use strict";

let punyaSIM = false;
const lulusUjian = true;

if (lulusUjian) {
  // ⚠️ Jika salah ketik nama variabel tanpa let/const:
  // Di mode santai: membuat variabel global baru diam-diam!
  // Di Strict Mode: error 'punyaSim is not defined'
  punyaSIM = true;
}
```

---

## 🔷 Versi TypeScript: `"strict": true` di `tsconfig.json`

Di TypeScript, kita tidak perlu menulis `"use strict"` manual di setiap file. Kita mengaktifkan opsi `"strict": true` di file konfigurasi [`tsconfig.json`](file:///d:/data%20rayhan/programs/techer/typescript/final/tsconfig.json).

Opsi `"strict": true` di TypeScript menyalakan sekumpulan proteksi tingkat tinggi:

| Fitur Strict TS | Apa yang Dilakukan? | Manfaat Bagi Pemula |
| :--- | :--- | :--- |
| `noImplicitAny` | Melarang variabel/parameter yang tidak diketahui tipenya menjadi `any` secara diam-diam. | Mencegah kita lupa memberi tipe pada data penting. |
| `strictNullChecks` | Melarang nilai `null` atau `undefined` masuk ke variabel biasa tanpa izin eksplisit (`string \| null`). | Mencegah error legendaris *"Cannot read properties of undefined"*. |
| `strictFunctionTypes` | Memeriksa kecocokan parameter fungsi secara presisi. | Memastikan fungsi hanya menerima argumen yang benar-benar cocok. |
| `alwaysStrict` | Otomatis menyisipkan `"use strict"` ke seluruh kode JavaScript hasil kompilasi. | Menjaga runtime JavaScript tetap berada di mode teraman. |

---

## 💡 Mengapa Pemula Harus Belajar dengan Mode Ketat?

1. **Error muncul di waktu yang tepat**: Kamu langsung tahu kesalahan saat mengetik di editor, bukan saat program sudah dirilis ke pengguna.
2. **Membentuk kebiasaan baik**: Kamu terbiasa memikirkan jenis data dan struktur logika secara matang.
3. **Autocompletion lebih akurat**: Karena editor tahu pasti tipe setiap variabel, saran kode (*IntelliSense*) menjadi sangat cepat dan tepat.

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan soal yang disediakan. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Strict Mode membuat runtime dan compiler menolak kode yang berpotensi menimbulkan bug berbahaya.
- Di TypeScript, mode ketat diaktifkan melalui `"strict": true` di `tsconfig.json`.
- Fitur kunci seperti `strictNullChecks` dan `noImplicitAny` melindungi kode dari crash di runtime.
