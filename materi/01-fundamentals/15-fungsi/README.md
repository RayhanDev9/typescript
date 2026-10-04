# 15 · Fungsi (Functions)

## 🎯 Tujuan Belajar
- Memahami konsep **Fungsi** sebagai blok kode yang dapat digunakan kembali (*reusable*)
- Membedakan antara **Parameter** (wadah input fungsi) dan **Argumen** (nilai nyata yang dikirim)
- Mengembalikan nilai menggunakan kata kunci **`return`**
- Memberikan anotasi tipe pada parameter dan nilai kembalian (*return type*)
- Menggunakan tipe **`void`** untuk fungsi yang tidak mengembalikan nilai

---

## 🧠 Analogi: Mesin Pembuat Jus (Juicer)

Bayangkan sebuah mesin blender jus:
- **Input (Bahan)**: Kamu memasukkan 2 buah apel dan 1 buah jeruk. Ini adalah **Argumen** yang masuk ke wadah **Parameter**.
- **Proses (Instruksi Mesin)**: Mesin memotong dan memeras buah.
- **Output (Hasil)**: Mesin mengeluarkan segelas jus segar. Ini adalah **Return Value**.

```text
Buah Apel + Jeruk (Argumen)
       │
       ▼
┌──────────────────┐
│   Mesin Juicer   │  ← Fungsi (Memproses)
└──────────────────┘
       │
       ▼
  Segelas Jus Segar (Return Value)
```

---

## 💻 Membuat dan Memanggil Fungsi

### 1. Fungsi dengan Parameter dan Return Value:

```ts
function buatJus(apel: number, jeruk: number): string {
  const totalBuah = apel + jeruk;
  const jus = `Jus segar dari ${apel} apel dan ${jeruk} jeruk (total ${totalBuah} buah).`;
  return jus; // Mengembalikan hasil olahan
}

// Memanggil fungsi dan menyimpan hasilnya:
const jusPagi = buatJus(2, 3);
console.log(jusPagi);
```

### 2. Fungsi Tanpa Return Value (`void`):

Jika fungsi hanya bertugas melakukan sesuatu (seperti `console.log` atau menampilkan teks) tanpa mengembalikan data apa pun, gunakan tipe kembalian **`void`**:

```ts
function tampilkanHeader(judul: string): void {
  console.log("==============================");
  console.log(`       ${judul.toUpperCase()} `);
  console.log("==============================");
  // Tidak ada instruksi return di sini
}

tampilkanHeader("Dashboard Siswa");
```

---

## 🔷 Versi TypeScript: Proteksi Parameter & Return Type

TypeScript melindungi kita dari dua kesalahan fatal yang sering terjadi di JavaScript:

### 1. Jumlah Argumen Wajib Cocok
```ts
buatJus(2);
// ❌ Expected 2 arguments, but got 1. (Kurang argumen jeruk)

buatJus(2, 3, 5);
// ❌ Expected 2 arguments, but got 3. (Kelebihan argumen)
```

### 2. Tipe Data Argumen Wajib Sesuai
```ts
buatJus("dua", 3);
// ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
```

---

## 💡 Prinsip DRY: Don't Repeat Yourself

Fungsi adalah pilar utama agar kita tidak mengulang-ulang kode yang sama. Daripada menulis 10 baris perhitungan yang sama di 5 tempat berbeda, buatlah 1 fungsi dan panggil 5 kali!

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Fungsi adalah blok kode mandiri yang dapat dipanggil berulang kali.
- **Parameter** adalah variabel penampung input; **Argumen** adalah nilai konkret saat fungsi dipanggil.
- Kata kunci `return` mengakhiri fungsi dan mengembalikan hasil ke pemanggil.
- Tipe `void` digunakan jika fungsi tidak mengembalikan nilai.
- TypeScript memvalidasi jumlah dan tipe argumen secara presisi.
