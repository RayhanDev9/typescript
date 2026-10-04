# 11 · Logika Boolean: `&&`, `||`, `!`

## 🎯 Tujuan Belajar
- Menggabungkan beberapa kondisi dengan **DAN** (`&&`) serta **ATAU** (`||`)
- Membalik kondisi dengan **BUKAN** (`!`)
- Membaca **tabel kebenaran**
- Memakai `||` dan `??` untuk **nilai bawaan** (default)

---

## 🧠 Analogi: Syarat Masuk Wahana

- **DAN (`&&`)**: *"Boleh naik roller coaster jika tinggi ≥ 140 cm **DAN** tidak sedang sakit."* Semua syarat **harus** terpenuhi.
- **ATAU (`||`)**: *"Gratis masuk jika ulang tahun hari ini **ATAU** membawa kupon."* Cukup **salah satu** terpenuhi.
- **BUKAN (`!`)**: *"Boleh masuk jika **BUKAN** sedang sakit."* Kondisinya dibalik.

---

## 📊 Tabel Kebenaran

| A | B | `A && B` | `A \|\| B` |
| :---: | :---: | :---: | :---: |
| true | true | **true** | **true** |
| true | false | false | **true** |
| false | true | false | **true** |
| false | false | false | false |

| A | `!A` |
| :---: | :---: |
| true | false |
| false | true |

Cara mudah mengingat:
- `&&` → `true` hanya jika **semua** `true`
- `||` → `false` hanya jika **semua** `false`

---

## 💻 Contoh: Boleh Menyetir?

```ts
const punyaSIM: boolean = true;
const penglihatanBaik: boolean = true;
const sedangLelah: boolean = false;

if (punyaSIM && penglihatanBaik && !sedangLelah) {
  console.log("Boleh menyetir 🚗");
} else {
  console.log("Sebaiknya orang lain yang menyetir");
}
```

### Prioritas

`!` dihitung paling duluan, lalu `&&`, lalu `||`. **Gunakan tanda kurung** agar jelas:

```ts
const akhirPekan: boolean = true;
const hariLibur: boolean = false;
const cuacaCerah: boolean = true;

// Piknik jika (akhir pekan ATAU hari libur) DAN cuaca cerah
if ((akhirPekan || hariLibur) && cuacaCerah) {
  console.log("Ayo piknik! 🧺");
}
```

---

## 💡 `||` untuk Nilai Bawaan

`||` mengembalikan nilai **truthy pertama** yang ditemukan:

```ts
const inputNama: string = "";
const namaTampil = inputNama || "Tamu";
console.log(namaTampil); // "Tamu"
```

### Bonus: `??` (Nullish Coalescing)

Ingat jebakan angka `0` di pelajaran 09? `||` juga terkena jebakan itu:

```ts
const jumlahTamu: number = 0;
console.log(jumlahTamu || 10); // 10 ❌ padahal tamunya memang 0
console.log(jumlahTamu ?? 10); // 0  ✅
```

`??` hanya memakai nilai bawaan jika nilainya **`null` atau `undefined`**. Nilai `0` dan `""` tetap dipakai.

---

## 🔷 Versi TypeScript

1. Hasil `&&`, `||`, dan `!` pada boolean bertipe **`boolean`**.
2. Narrowing ikut bekerja dengan `&&`:

```ts
const namaKota = process.env.KOTA; // string | undefined

if (namaKota && namaKota.length > 3) {
  // namaKota.length aman dipakai, karena bagian kiri && sudah memastikan namaKota ada
}
```

Bagian kanan `&&` **hanya dijalankan** jika bagian kiri truthy. Konsep ini disebut **short-circuit**.

---

## ⚠️ Kesalahan Umum
- Menulis `&` atau `|` (satu karakter). Itu operator yang berbeda (bitwise)
- Lupa tanda kurung saat mencampur `&&` dan `||`
- Memakai `||` untuk nilai bawaan angka. Gunakan `??`

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `&&` = DAN (semua harus true), `||` = ATAU (cukup satu true), `!` = BUKAN
- Gunakan tanda kurung untuk memperjelas prioritas
- `||` untuk nilai bawaan jika falsy, `??` jika `null`/`undefined`
