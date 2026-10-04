# 20 · Method-Method Dasar Array

## 🎯 Tujuan Belajar
- Menambah elemen ke array dengan **`push`** (di akhir) dan **`unshift`** (di awal)
- Menghapus elemen dari array dengan **`pop`** (di akhir) dan **`shift`** (di awal)
- Mencari posisi elemen dengan **`indexOf`**
- Memeriksa keberadaan elemen dengan **`includes`**
- Memahami bagaimana TypeScript memvalidasi tipe argumen pada method array

---

## 🧠 Analogi: Antrean Kasir Supermarket

```text
              unshift() ──►  [ Antrean Depan ]
                             [ Antrean Tengah ]
                push()  ──►  [ Antrean Belakang ]

              shift()   ◄──  [ Keluar dari Depan ]
              pop()     ◄──  [ Keluar dari Belakang ]
```

---

## 💻 1. Menambah & Menghapus Elemen

| Method | Posisi | Aksi | Nilai Kembalian |
| :--- | :--- | :--- | :--- |
| **`push(item)`** | Akhir | Menambahkan item baru ke ujung belakang | Panjang (*length*) array yang baru |
| **`unshift(item)`**| Awal | Menambahkan item baru ke posisi paling depan | Panjang (*length*) array yang baru |
| **`pop()`** | Akhir | Menghapus 1 item dari ujung belakang | Item yang baru saja dihapus |
| **`shift()`** | Awal | Menghapus 1 item dari posisi paling depan | Item yang baru saja dihapus |

```ts
const daftarTugas: string[] = ["Beli Kopi", "Belajar TypeScript"];

daftarTugas.push("Bikin PR");      // Ditambah di akhir
daftarTugas.unshift("Olahraga");   // Ditambah di awal
console.log(daftarTugas);          // ["Olahraga", "Beli Kopi", "Belajar TypeScript", "Bikin PR"]

const tugasSelesai = daftarTugas.pop(); // Menghapus "Bikin PR"
console.log("Tugas yang selesai:", tugasSelesai);
```

---

## 🔍 2. Mencari & Memeriksa Elemen

### `indexOf(item)`
Mencari indeks posisi pertama sebuah item. Jika item **tidak ditemukan**, mengembalikan angka **`-1`**:

```ts
const buah: string[] = ["Apel", "Jeruk", "Mangga"];

console.log(buah.indexOf("Jeruk"));  // 1
console.log(buah.indexOf("Durian")); // -1 (tidak ada di daftar)
```

### `includes(item)`
Memeriksa apakah suatu item ada di dalam array. Mengembalikan **`true`** atau **`false`**:

```ts
if (buah.includes("Mangga")) {
  console.log("Stok mangga tersedia! 🥭");
}
```

> 💡 `includes` menggunakan perbandingan ketat (*strict equality* `===`).

---

## 🔷 Versi TypeScript: Validasi Tipe pada Method

TypeScript memeriksa method array agar kamu tidak sengaja memasukkan data yang salah:

```ts
const angka: number[] = [10, 20, 30];

// ❌ Error saat push tipe yang salah:
// angka.push("empat puluh"); // Argument of type 'string' is not assignable to parameter of type 'number'.

// ❌ Error saat mencari nilai dari tipe yang mustahil:
// angka.includes("sepuluh"); // Argument of type 'string' is not assignable to parameter of type 'number'.
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `push` dan `pop` bekerja di **ujung akhir** array.
- `unshift` dan `shift` bekerja di **ujung awal** array.
- `indexOf` mencari letak indeks item (menghasilkan `-1` jika tidak ada).
- `includes` menghasilkan boolean `true` atau `false`.
- TypeScript menjaga agar operasi array selalu konsisten dengan tipe data yang dideklarasikan.
