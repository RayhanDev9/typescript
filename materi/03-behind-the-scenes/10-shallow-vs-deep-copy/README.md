# 10 · Shallow Copy vs Deep Copy & Immutability

## 🎯 Tujuan Belajar
- Mengetahui cara menduplikasi objek/array secara mandiri (*Cloning*)
- Memahami apa itu **Shallow Copy** (Salinan Dangkal) menggunakan *Spread Operator* (`...`)
- Mengetahui batasan Shallow Copy pada objek bersarang (*Nested Object*)
- Menggunakan **`structuredClone()`** untuk melakukan **Deep Copy** (Salinan Menyeluruh)
- Memanfaatkan fitur TypeScript: **`readonly`**, **`Readonly<T>`**, dan **`as const`**

---

## 📋 1. Shallow Copy (Spread Operator `...`)

Spread operator (`...`) membuat objek baru di level pertama:

```ts
const orangAsli = { nama: "Rayhan", umur: 25 };
const salinanOrang = { ...orangAsli }; // Membuat objek baru di memori heap!

salinanOrang.umur = 30;

console.log(orangAsli.umur);    // 25 (Aman! Tidak ikut berubah)
console.log(salinanOrang.umur); // 30
```

### ⚠️ Batasan Shallow Copy pada Objek Bersarang:
Jika di dalam objek terdapat objek/array lain (*nested*), level dalam tersebut **masih berbagi referensi yang sama**!

```ts
const user1 = {
  nama: "Rayhan",
  alamat: { kota: "Bandung" } // Objek bersarang
};

const user2 = { ...user1 };
user2.alamat.kota = "Jakarta"; // ⚠️ Mengubah alamat di user1 juga!
```

---

## 🌟 2. Deep Copy Modern: `structuredClone()`

Fungsi bawaan JavaScript modern `structuredClone()` menduplikasi **seluruh lapisan objek** secara menyeluruh dan independen:

```ts
const userDeep = structuredClone(user1);
userDeep.alamat.kota = "Surabaya";

console.log(user1.alamat.kota);    // "Bandung" (Aman 100%!)
console.log(userDeep.alamat.kota); // "Surabaya"
```

---

## 🔷 Versi TypeScript: Immutability (Mencegah Mutasi Data)

### 1. `Readonly<T>` Utility Type
```ts
interface Siswa {
  nama: string;
  nilai: number;
}

const siswaTerkunci: Readonly<Siswa> = {
  nama: "Andi",
  nilai: 90
};

// ❌ TypeScript melarang modifikasi:
// siswaTerkunci.nilai = 95; // Cannot assign to 'nilai' because it is a read-only property.
```

### 2. `as const` Assertion
Mengunci seluruh nilai objek dan array menjadi *deep readonly literal*:

```ts
const konfigurasi = {
  apiUrl: "https://api.belajarts.id",
  maxRetry: 3
} as const;

// konfigurasi.maxRetry = 5; // ❌ Cannot assign to 'maxRetry' because it is a read-only property.
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) dan cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Spread operator `{ ...obj }` melakukan **Shallow Copy** (hanya level terluar).
- Gunakan **`structuredClone(obj)`** untuk **Deep Copy** data bersarang yang kompleks.
- Manfaatkan `Readonly<T>` dan `as const` di TypeScript untuk membuat data yang tidak bisa dimutasi secara sengaja maupun tidak sengaja.
