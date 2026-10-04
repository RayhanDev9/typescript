# 11 · Bonus TS: Generics Dasar pada Fungsi

## 🎯 Tujuan Belajar
- Memahami konsep **Generics (`<T>`)** sebagai "variabel tipe" yang membuat fungsi bisa bekerja dengan berbagai tipe data namun tetap **100% Type-Safe**.
- Mengetahui mengapa menggunakan `any` adalah solusi buruk (menghilangkan autocomplete dan type safety).
- Menulis **Generic Functions**: `function ambilPertama<T>(arr: T[]): T | undefined`.
- Menggunakan multiple type parameters `<T, U>`.
- Mengenal Generic Constraint sederhana: `<T extends { length: number }>`.

---

## 🧠 Analogi: Kotak Kado Berlabel Transparan

- **Tipe `any`**: Kantong plastik hitam pekat. Kamu bisa memasukkan apa saja, tapi begitu dikeluarkan, komputer tidak tahu benda apa di dalamnya dan kehilangan semua petunjuk.
- **Generic `<T>`**: Kotak kado kaca transparan. Kotak ini bisa menampung barang apa pun (buku, sepatu, jam tangan), tetapi begitu barang dimasukkan, kotaknya langsung berlabel nama barang tersebut sehingga saat dikeluarkan jenis barangnya tetap diketahui dengan pasti!

---

## 📘 Konsep Dasar

### 1. Masalah dengan `any`

```ts
// ❌ Menggunakan `any` (Tidak Aman)
function ambilPertamaAny(arr: any[]): any {
  return arr[0];
}

const angka = ambilPertamaAny([10, 20, 30]);
// TypeScript menganggap tipe `angka` adalah `any` (bukan number!), kita kehilangan bantuan editor!
```

---

### 2. Solusi Elegan: Generic `<T>`

Simbol `<T>` adalah singkatan dari *Type Parameter*:

```ts
// ✅ Menggunakan Generic `<T>`
function ambilPertama<T>(arr: T[]): T | undefined {
  return arr[0];
}

const n = ambilPertama([10, 20, 30]);      // TypeScript otomatis tahu `n` bertipe: number | undefined
const s = ambilPertama(["A", "B", "C"]);  // TypeScript otomatis tahu `s` bertipe: string | undefined
```

---

### 3. Generic dengan Dua Tipe Parameter (`<T, U>`)

```ts
function gabungPasangan<T, U>(kunci: T, nilai: U): [T, U] {
  return [kunci, nilai];
}

const pasangan1 = gabungPasangan("ID", 101);     // [string, number]
const pasangan2 = gabungPasangan(true, "Aktif"); // [boolean, string]
```

---

### 4. Generic Constraint (`extends`)

Membatasi tipe yang boleh masuk ke generic function:

```ts
interface MemilikiPanjang {
  length: number;
}

function hitungDanJelaskan<T extends MemilikiPanjang>(elemen: T): string {
  return `Elemen ini memiliki panjang ${elemen.length} item.`;
}

console.log(hitungDanJelaskan("Halo Dunia")); // 10 karakter (string punya length)
console.log(hitungDanJelaskan([1, 2, 3, 4]));  // 4 elemen (array punya length)
// hitungDanJelaskan(12345); // ❌ Error TypeScript: number tidak memiliki properti length!
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/11-bonus-generics-dasar/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Generic `<T>` mempertahankan type safety tanpa perlu mengulang kode untuk setiap tipe.
- Digunakan secara luas dalam pembuatan library, API service, dan struktur data di TypeScript modern.
- Menjadi bekal penting untuk materi **Generic Class** di Modul 06.
