# 07 · Default Generic Type

## 🎯 Tujuan Belajar
- Memahami konsep **Default Type Parameter** pada Generic: `<T = NilaiDefault>`.
- Memahami kesamaan konsep antara default argument pada fungsi biasa (`function(a = 10)`) dengan default type pada generic.
- Mengetahui kapan dan mengapa default generic type digunakan untuk menyederhanakan penulisan kode konsumen.
- Menggabungkan generic constraints dengan default type: `<T extends object = Record<string, unknown>>`.

---

## 🧠 Analogi Dunia Nyata: "Menu Paket Restoran dengan Pilihan Default"
Bayangkan sebuah paket makanan di restoran cepat saji:
- Paket hemat mencakup: Makanan Utama + Minuman.
- Jika Anda tidak menyebutkan jenis minuman yang Anda inginkan (**Tanpa Type Argument**), kasir otomatis memberi Anda es teh manis (**Minuman Default**).
- Namun, jika Anda ingin menggantinya (**Custom Type Argument**), Anda bebas meminta jus jeruk atau kopi susu!
- Default Generic Type membuat konsumen tidak wajib selalu mengetik `<Tipe>` jika sebagian besar kasus menggunakan tipe data yang sama.

---

## 📘 Konsep Dasar

### 1. Sintaks Default Type Parameter
```ts
// Tipe default adalah string jika tidak ditentukan pemanggil
interface ResponKomentar<T = string> {
  id: number;
  konten: T;
}

// 1. Tanpa menyebutkan tipe -> Otomatis menggunakan T = string
const komentarTeks: ResponKomentar = {
  id: 1,
  konten: "Artikel yang sangat bermanfaat!",
};

// 2. Menyebutkan tipe kustom -> Mengesampingkan default
interface GambarKomentar {
  url: string;
  lebar: number;
  tinggi: number;
}

const komentarGambar: ResponKomentar<GambarKomentar> = {
  id: 2,
  konten: {
    url: "https://example.com/foto.jpg",
    lebar: 800,
    tinggi: 600,
  },
};
```

---

### 2. Menggabungkan Constraint dan Default
Kita bisa membatasi tipe sekaligus memberi nilai default:
```ts
interface WadahData<T extends object = { status: string }> {
  payload: T;
}
```

---

## 📌 Ringkasan
- Default Generic Type ditulis dengan tanda sama dengan: `<T = TipeDefault>`.
- Memberikan kenyamanan (ergonomi kode) bagi programmer lain yang menggunakan pustaka atau komponen kita.
