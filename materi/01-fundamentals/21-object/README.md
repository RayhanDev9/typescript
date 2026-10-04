# 21 · Object, Type Alias & Interface

## 🎯 Tujuan Belajar
- Memahami struktur data **Object** (pasangan Kunci-Nilai / *Key-Value Pairs*)
- Membaca dan mengubah data objek dengan **Dot Notation** (`obj.properti`) dan **Bracket Notation** (`obj["properti"]`)
- Mendefinisikan struktur objek menggunakan **`type`** dan **`interface`** di TypeScript
- Menggunakan properti opsional (**`?`**) dan properti yang tidak bisa diubah (**`readonly`**)

---

## 🧠 Analogi: Kartu Identitas (KTP)

Jika Array seperti **daftar antrean bernomor**, maka Object seperti **KTP atau Formulir Biodata**:
- Di KTP, data tidak diakses dengan angka `0`, `1`, `2`, melainkan dengan **label nama propertinya**:
  - `Nama`: "Rayhan Pratama"
  - `NIK`: 3271000000000001
  - `Alamat`: "Bandung"

```text
┌──────────────────────────────────────┐
│  KARTU IDENTITAS                     │
│  Nama   : "Rayhan"     (Key: Value)  │
│  Umur   : 25           (Key: Value)  │
│  Kota   : "Bandung"    (Key: Value)  │
└──────────────────────────────────────┘
```

---

## 💻 1. Membuat dan Mengakses Object

```ts
const siswa = {
  namaDepan: "Rayhan",
  namaBelakang: "Pratama",
  umur: 25,
  hobi: ["Membaca", "Ngoding", "Ngopi"]
};

// Cara 1: Dot Notation (Paling sering dipakai)
console.log(siswa.namaDepan); // "Rayhan"
console.log(siswa.umur);      // 25

// Cara 2: Bracket Notation (Bisa memakai ekspresi/variabel)
console.log(siswa["namaBelakang"]); // "Pratama"

const kataKunci = "namaDepan";
console.log(siswa[kataKunci]); // "Rayhan" (dinamis!)

// Mengubah & Menambah properti:
siswa.umur = 26;
```

---

## 🔷 Versi TypeScript: `type` Alias vs `interface`

Di TypeScript, kita wajib mendefinisikan bentuk objek agar kode aman dari kesalahan ketik properti:

### 1. Menggunakan `type` Alias
```ts
type Pengguna = {
  readonly id: string; // Tidak bisa diubah setelah dibuat
  nama: string;
  email: string;
  nomorHp?: string;    // Properti opsional (boleh tidak diisi)
};
```

### 2. Menggunakan `interface`
```ts
interface Siswa {
  readonly idSiswa: number;
  namaLengkap: string;
  nilaiAkhir: number;
  catatanGuru?: string;
}

const siswaA: Siswa = {
  idSiswa: 101,
  namaLengkap: "Budi Santoso",
  nilaiAkhir: 88
  // catatanGuru boleh tidak ditulis karena ada tanda ?
};
```

### 3. Proteksi TypeScript pada Object
```ts
// ❌ Error jika ada properti yang kurang:
// const siswaB: Siswa = { idSiswa: 102, namaLengkap: "Cici" }; 
// Property 'nilaiAkhir' is missing!

// ❌ Error jika ada typo nama properti:
// siswaA.namaLengkapSiswa = "Budi";
// Property 'namaLengkapSiswa' does not exist on type 'Siswa'.

// ❌ Error jika mengubah readonly:
// siswaA.idSiswa = 999;
// Cannot assign to 'idSiswa' because it is a read-only property.
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Object mengelompokkan data yang saling berhubungan menggunakan pasangan *Key-Value*.
- Akses properti menggunakan `obj.nama` (dot) atau `obj["nama"]` (bracket).
- Gunakan `type` atau `interface` di TypeScript untuk mengunci struktur objek.
- Gunakan `?` untuk properti opsional dan `readonly` untuk properti yang tidak boleh diubah.
