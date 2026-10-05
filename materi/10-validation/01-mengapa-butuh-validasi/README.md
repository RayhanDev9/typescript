# 01 · Mengapa Butuh Validasi di TypeScript?

## 🎯 Tujuan Belajar
- Memahami batas kemampuan TypeScript: **Compile-Time Checking vs Runtime Reality**.
- Mengetahui bahwa saat aplikasi berjalan di komputer pengguna (*runtime*), seluruh tipe TypeScript telah dihapus (**Type Erasure**).
- Memahami bahaya *Type Assertion* palsu (`as Tipe`) saat membaca data dari luar (seperti `JSON.parse` atau `fetch`).
- Memahami mengapa tipe **`unknown`** adalah pintu gerbang teraman untuk menyambut data dari dunia luar.

---

## 🧠 Analogi Dunia Nyata: "Pemeriksaan Koper di Bandara"
Bayangkan Anda menjaga gerbang keamanan bandara:
- **Compile-Time (Kertas Tiket)**: Di atas kertas tiket pesawat tertulis *"Penumpang Kelas Bisnis Membawa Pakaian"*. Kertas tiketnya sangat rapi dan sah (**TypeScript Type Definition**).
- **Runtime Reality (Isi Koper Nyata)**: Penumpang meletakkan koper di atas konter. Apakah Anda percaya 100% bahwa di dalam koper hanya ada pakaian tanpa membukanya? Tentu tidak! Bisa saja di dalamnya ada cairan berbahaya atau batu (**Data Mentah dari Internet / Pengguna**).
- Jika Anda langsung menempelkan stiker: *"Pasti Pakaian"* tanpa memeriksa (**`koper as Pakaian`**), bandara bisa celaka jika isinya bukan pakaian!
- **Validasi** adalah **Mesin X-Ray**: Mesin yang memeriksa isi fisik koper saat itu juga (*runtime*). Hanya setelah diverifikasi lolos, koper baru diizinkan masuk ke kabin pesawat!

---

## 📘 Masalah Nyata di Kode

### Bahaya Menipu Diri Sendiri dengan `as` (Type Assertion)
```ts
interface Pengguna {
  id: number;
  nama: string;
}

// Simulasi data rusak yang datang dari API luar:
const responJaringanMentah = '{"id": "bukan_angka", "username": "Budi"}';

// ❌ BAHAYA BESAR: Memaksa TypeScript percaya dengan 'as'
const user = JSON.parse(responJaringanMentah) as Pengguna;

// TypeScript mengira 'user.id' adalah number, dan 'user.nama' adalah string!
console.log(user.nama.toUpperCase()); // 💥 CRASH RUNTIME: Cannot read properties of undefined (reading 'toUpperCase')!
```
TypeScript tidak berdaya mencegah error ini karena `JSON.parse` mengembalikan data di saat program **sedang berjalan**, sedangkan compiler TypeScript sudah selesai bekerja sebelum program dijalankan!

---

## 🛡️ Solusi: Selalu Sambut Data Luar sebagai `unknown`
Di TypeScript modern, jangan gunakan `any`. Gunakan **`unknown`**:
```ts
const dataLuar: unknown = JSON.parse(responJaringanMentah);

// dataLuar.nama; // ❌ Compile Error: 'dataLuar' is of type 'unknown'.
// TypeScript memaksa kita memeriksa data tersebut sebelum boleh menggunakannya!
```

---

## 📌 Ringkasan
- TypeScript menjamin keamanan kode di dalam aplikasi kita saat kompilasi (*compile-time*).
- Namun untuk data yang datang dari luar (*runtime* seperti API, LocalStorage, Formulir Web), kita **wajib melakukan validasi**.
- Tipe `unknown` memaksa kita melakukan validasi sebelum mengakses properti data.
