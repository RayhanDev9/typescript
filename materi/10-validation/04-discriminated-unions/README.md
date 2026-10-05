# 04 · Discriminated Unions (Tagged Unions)

## 🎯 Tujuan Belajar
- Memahami pola desain paling populer dan elegan di TypeScript: **Discriminated Unions** (sering disebut *Tagged Unions*).
- Mengetahui 3 syarat pembentuk Discriminated Union:
  1. Tipe-tipe yang memiliki properti pembeda literal dengan nama field yang sama (misal: `status` atau `tipe`).
  2. Tipe gabungan Union (`type A = B | C | D`).
  3. Narrowing menggunakan `switch...case` atau `if...else`.
- Memahami mengapa pola ini jauh lebih rapi, terstruktur, dan mudah dirawat dibanding operator `in`.

---

## 🧠 Analogi Dunia Nyata: "Kartu ID Pengenal Berwarna di Pabrik"
Bayangkan di sebuah pabrik besar ada ratusan orang:
- **Tanpa Label Khusus**: Satpam harus memeriksa satu per satu barang bawaan orang tersebut untuk menebak profesinya (*seperti operator `in`*). Melelahkan dan rawan salah!
- **Dengan Discriminated Unions (Kartu ID Berwarna)**:
  - Satpam mewajibkan semua orang memakai tali ID Card dengan warna literal di lehernya (**Properti Pembeda / Tag**):
    - `warnaTali: "merah"` ➔ Pasti Tim Pemadam Bahaya.
    - `warnaTali: "kuning"` ➔ Pasti Pekerja Konstruksi.
    - `warnaTali: "putih"` ➔ Pasti Tamu Pengunjung.
  - Satpam cukup melihat warna tali (*switch case*), dan langsung tahu hak akses masing-masing orang dengan 100% kepastian!

---

## 📘 Konsep Dasar

### 1. Struktur Discriminated Union
```ts
interface StatusMemuat {
  status: "memuat"; // <-- Properti pembeda literal
}

interface StatusSukses {
  status: "sukses"; // <-- Properti pembeda literal
  data: string[];
}

interface StatusGagal {
  status: "gagal"; // <-- Properti pembeda literal
  pesanError: string;
}

// Union Type
type StatusPermintaan = StatusMemuat | StatusSukses | StatusGagal;
```

---

### 2. Mempersempit dengan `switch (obj.status)`
```ts
function renderTampilan(state: StatusPermintaan): string {
  switch (state.status) {
    case "memuat":
      return "Sedang memuat data dari server...";

    case "sukses":
      // Di sini state.data dijamin ada!
      return `Berhasil! Ditemukan ${state.data.length} item.`;

    case "gagal":
      // Di sini state.pesanError dijamin ada!
      return `Gagal: ${state.pesanError}`;
  }
}
```

---

## 📌 Ringkasan
- Discriminated Union adalah standar emas industri untuk mengelola state aplikasi (seperti Redux actions, form states, dan event handling).
- Nama properti pembeda yang umum dipakai: `status`, `type`, `kind`, atau `tag`.
- Menggunakan nilai literal string yang unik untuk setiap varian.
