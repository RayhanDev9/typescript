# 09 · Immutability & Deep Updates

## 🎯 Tujuan Belajar
- Memahami konsep **Immutability (Kekekalan Data)**: data yang sudah dibuat tidak boleh diubah langsung.
- Mengetahui bahaya **Object Mutation** pada referensi memori (*reference equality*).
- Membedakan antara **Shallow Copy** (spread `{ ...obj }`) dan **Deep Copy** (`structuredClone`).
- Menguasai teknik **Nested Updates** (memperbarui properti bersarang tanpa merusak objek asli).
- Mengenal metode array non-mutasi modern di JavaScript/TypeScript (**`.toSorted()`**, **`.toReversed()`**, **`.toSpliced()`**).
- Memanfaatkan fitur TypeScript: **`as const`**, **`readonly`**, dan utility type **`Readonly<T>`**.

---

## 🧠 Analogi Dunia Nyata: "Surat Perjanjian Resmi vs Coret-Coret Tinta"
- Bayangkan Anda dan mitra bisnis menandatangani sebuah surat perjanjian (kontrak).
- **Mutasi (Mutation)**: Jika ada pasal yang ingin diubah, Anda mengambil pena merah dan mencoret-coret lembaran kertas asli yang sudah ditandatangani. Hasilnya: riwayat hilang, tidak ada bukti apa yang berubah, dan pihak lain akan kaget melihat kontrak mereka tiba-tiba berbeda!
- **Immutability (Kekekalan Data)**: Anda tidak pernah mencoret kontrak lama. Anda mencetak **Lembar Adendum / Amandemen Baru** yang merujuk ke kontrak lama dengan revisi pasal tertentu. Kontrak lama tetap utuh di brankas sebagai arsip sejarah!

---

## 📘 Konsep Dasar

### 1. Bahaya Shallow Copy pada Objek Bersarang (Nested Objects)
Spread operator `{ ...obj }` hanya menyalin level terluar (shallow copy):
```ts
const userLama = {
  nama: "Rian",
  alamat: { kota: "Bandung", pos: 40111 }
};

// ❌ HATI-HATI DENGAN SHALLOW SPREAD:
const userBaru = { ...userLama };
userBaru.alamat.kota = "Jakarta"; 

// 😱 userLama.alamat.kota juga ikut berubah jadi "Jakarta"
// Karena referensi memori alamat masih menunjuk ke objek yang sama!
```

### 2. Cara Immutability yang Benar untuk Objek Bersarang
```ts
// ✅ Update Bersarang yang Benar (Deep Immutable Update)
const userBenar = {
  ...userLama,
  alamat: {
    ...userLama.alamat,
    kota: "Jakarta"
  }
};
```

Atau menggunakan API modern bawaan:
```ts
// ✅ Deep Clone Sempurna
const userKloning = structuredClone(userLama);
userKloning.alamat.kota = "Surabaya"; // Aman, userLama tidak terpengaruh!
```

---

### 3. Array Non-Mutasi Modern (ES2023)
Dahulu, metode `.sort()` dan `.reverse()` langsung mengubah array aslinya (*in-place mutation*).
Kini di era modern, kita memiliki alternatif yang mengembalikan array baru:
- `.toSorted()` (pengganti non-mutating dari `.sort()`)
- `.toReversed()` (pengganti non-mutating dari `.reverse()`)
- `.toSpliced()` (pengganti non-mutating dari `.splice()`)
- `.with(indeks, nilaiBaru)` (mengganti satu elemen tanpa mutasi)

---

### 4. Perlindungan TypeScript: `as const` & `Readonly<T>`
```ts
const KONFIG_SERVER = {
  port: 8080,
  host: "localhost"
} as const;

// KONFIG_SERVER.port = 3000; // ❌ Compile Error: Cannot assign to 'port' because it is a read-only property.
```

---

## 📌 Ringkasan
- Dalam pengembangan modern (terutama React & Redux), **jangan pernah memutasi state secara langsung**.
- Gunakan spread operator secara bertingkat atau `structuredClone` untuk objek bersarang.
- Gunakan `as const` untuk mengunci nilai konstan agar tidak bisa diubah oleh siapapun.
