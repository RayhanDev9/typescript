# 12 · Set (`Set<T>`)

## 🎯 Tujuan Belajar
- Memahami struktur data **Set** sebagai koleksi nilai yang **unik** (tanpa duplikat).
- Menggunakan method dasar Set: `.add()`, `.has()`, `.delete()`, `.clear()`, dan properti `.size`.
- Mengetahui bahwa Set tidak memiliki indeks (`set[0]` tidak bisa dilakukan).
- Menghapus duplikat dari Array menggunakan kombinasi `Set` dan **Spread Operator** `[...new Set(arr)]`.
- Menuliskan tipe generic `Set<string>` / `Set<number>` di TypeScript.

---

## 🧠 Analogi: Kotak Kartu Anggota Unik

Bayangkan kamu memiliki kotak daftar anggota:
- Jika seseorang mendaftar dua kali dengan nama yang sama, kotak tersebut **menolak duplikatnya** dan hanya menyimpan 1 kartu.
- Kotak ini tidak memedulikan siapa yang mendaftar urutan pertama atau kedua (tidak ada nomor indeks), tapi sangat cepat saat ditanya: *"Apakah Budi sudah terdaftar?"* (`set.has("Budi")`).

---

## 📘 Konsep Dasar

`Set` diperkenalkan di ES6 sebagai kumpulan nilai unik. Duplikat apa pun yang dimasukkan akan diabaikan secara otomatis:

```ts
const pesananMeja = new Set<string>([
  "Pizza",
  "Pasta",
  "Pizza",    // duplikat (diabaikan)
  "Risotto",
  "Pasta",    // duplikat (diabaikan)
]);

console.log(pesananMeja); // Set(3) { 'Pizza', 'Pasta', 'Risotto' }
```

---

### 1. Operasi Utama pada Set

```ts
const daftarKoki = new Set<string>(["Andi", "Budi", "Citra"]);

// 1. Ukuran Set (mirip array.length)
console.log(daftarKoki.size); // 3

// 2. Memeriksa keberadaan elemen (.has) -> Sangat cepat!
console.log(daftarKoki.has("Budi"));  // true
console.log(daftarKoki.has("Doni"));  // false

// 3. Menambahkan elemen (.add)
daftarKoki.add("Doni");
daftarKoki.add("Andi"); // Diabaikan karena sudah ada

// 4. Menghapus elemen (.delete)
daftarKoki.delete("Citra");

// 5. Mengosongkan seluruh Set (.clear)
// daftarKoki.clear();
```

---

### 2. Iterasi pada Set dengan `for...of`

Set adalah iterable, sehingga kita bisa mengitrasinya secara langsung:

```ts
for (const koki of daftarKoki) {
  console.log(`Koki bertugas: ${koki}`);
}
```

---

### 3. Kasus Nyata Terpopuler: Menghapus Duplikat dari Array

Teknik paling populer di dunia kerja untuk membuang duplikat dari array dalam satu baris:

```ts
const staffRestoran = ["Pelayan", "Koki", "Pelayan", "Kasir", "Koki", "Manajer"];

// 1. Array -> Set (duplikat hilang) -> Spread kembali ke Array
const posisiUnik: string[] = [...new Set(staffRestoran)];

console.log(posisiUnik);
// ["Pelayan", "Koki", "Kasir", "Manajer"]
```

---

## 🔷 TypeScript Corner: Generic `Set<T>`

Di TypeScript, kita bisa menentukan tipe data yang diizinkan masuk ke dalam Set:

```ts
const setAngka = new Set<number>();
setAngka.add(100);
// setAngka.add("dua ratus"); // ❌ Error TypeScript: Argument of type 'string' is not assignable to parameter of type 'number'.
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/12-set/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `set[0]` | Set tidak memiliki indeks, hasilnya `undefined` | Gunakan Array jika membutuhkan akses berdasarkan indeks urutan |
| `set.length` | Properti panjang Set adalah `.size`, bukan `.length` | `set.size` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `Set` hanya menyimpan **nilai-nilai unik**.
- Method utama: `.add()`, `.has()`, `.delete()`, `.clear()`, dan `.size`.
- Hapus duplikat array: `[...new Set(array)]`.
