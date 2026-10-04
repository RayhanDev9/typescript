# 07 · Logical Assignment (`||=`, `&&=`, `??=`)

## 🎯 Tujuan Belajar
- Memahami operator penugasan logika ES2021: `||=`, `&&=`, dan `??=`.
- Menyederhanakan penulisan inisialisasi properti objek bawaan menjadi jauh lebih ringkas.
- Membedakan kapan harus menggunakan `||=` vs `??=`.
- Memahami penggunaan `&&=` untuk mengubah/memformat nilai hanya jika nilai tersebut sudah ada.

---

## 🧠 Analogi: Mengisi Kotak Kosong

- **`||=` (OR Assignment)**: *"Isi kotak ini dengan barang baru jika kotaknya kosong atau berisi barang rusak (falsy)."*
- **`??=` (Nullish Assignment)**: *"Isi kotak ini dengan barang baru HANYA jika kotaknya benar-benar belum pernah ditaruh apa pun (`null`/`undefined`). Jika kotaknya berisi angka 0 atau kertas kosong, jangan disentuh!"*
- **`&&=` (AND Assignment)**: *"Jika kotak ini sudah terisi barang bagus (truthy), ganti barangnya dengan versi yang lebih bagus (modifikasi nilai)."*

---

## 📘 Konsep Dasar

Mirip seperti `x += 5` yang merupakan singkatan dari `x = x + 5`, operator penugasan logika menggabungkan operasi logika dengan assignment:

| Operator | Singkatan Dari | Deskripsi |
| :--- | :--- | :--- |
| `a \|\|= b` | `a \|\| (a = b)` | Menugaskan `b` ke `a` **hanya jika `a` bernilai falsy** |
| `a ??= b` | `a ?? (a = b)` | Menugaskan `b` ke `a` **hanya jika `a` bernilai nullish (`null`/`undefined`)** |
| `a &&= b` | `a && (a = b)` | Menugaskan `b` ke `a` **hanya jika `a` bernilai truthy** |

---

### 1. Perbedaan `||=` vs `??=`

Perhatikan contoh restoran berikut:

```ts
interface InfoRestoran {
  nama: string;
  jumlahTamu?: number;
}

const restoA: InfoRestoran = { nama: "Resto A", jumlahTamu: 0 };
const restoB: InfoRestoran = { nama: "Resto B" }; // undefined

// Menggunakan ||= (Awas perangkap angka 0!)
restoA.jumlahTamu ||= 10;
console.log(restoA.jumlahTamu); // 10 ❌ (0 tertimpa karena falsy)

// Menggunakan ??= (Aman untuk angka 0!)
restoA.jumlahTamu = 0; // reset ke 0
restoA.jumlahTamu ??= 10;
console.log(restoA.jumlahTamu); // 0 ✅ (0 dipertahankan)

restoB.jumlahTamu ??= 10;
console.log(restoB.jumlahTamu); // 10 ✅ (undefined diganti 10)
```

---

### 2. Operator `&&=` (Logical AND Assignment)

`&&=` digunakan untuk mengubah nilai variabel yang sudah ada (truthy). Jika variabel masih falsy atau undefined, operasi dilewati:

```ts
interface AkunUser {
  nama: string;
  token?: string;
}

const user1: AkunUser = { nama: "Budi", token: "rahasia-123" };
const user2: AkunUser = { nama: "Anonim" };

// Samarkan token jika ada:
user1.token &&= "<TERSEMBUNYI>";
user2.token &&= "<TERSEMBUNYI>";

console.log(user1.token); // "<TERSEMBUNYI>" (karena sebelumnya truthy)
console.log(user2.token); // undefined (karena sebelumnya falsy/undefined)
```

---

## 🔷 TypeScript Corner: Properti Opsional `?:`

Logical assignment sangat sering digunakan bersama objek yang memiliki properti opsional di TypeScript:

```ts
interface PengaturanAplikasi {
  tema?: "terang" | "gelap";
  fontSize?: number;
}

function validasiPengaturan(opsi: PengaturanAplikasi) {
  opsi.tema ??= "terang";
  opsi.fontSize ??= 14;
  return opsi;
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/07-logical-assignment/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| Memakai `||=` untuk data angka | Angka `0` akan terhapus dan digantikan nilai fallback | Gunakan `??=` untuk angka dan boolean |
| Mengira `a &&= b` berjalan saat `a` kosong | `&&=` hanya berjalan jika `a` sudah ada (truthy) | Gunakan `??=` jika tujuannya mengisi nilai yang kosong |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `??=` adalah operator terbaik untuk mengisi nilai default pada properti opsional.
- `||=` mengisi nilai jika sebelumnya falsy.
- `&&=` memodifikasi nilai hanya jika variabel saat ini truthy.
