# 12 · Mapped Types Dasar

## 🎯 Tujuan Belajar
- Memahami konsep **Mapped Types**: cara membuat tipe baru dengan melakukan perulangan (*looping*) pada properti tipe yang sudah ada.
- Menguasai sintaks dasar: **`{ [K in keyof T]: T[K] }`**.
- Mengetahui rahasia dapur bagaimana TypeScript membuat `Partial<T>` dan `Readonly<T>`.
- Menguasai penambahan dan pengurangan modifier: `+readonly`, `-readonly`, `+?`, `-?`.
- Mampu membuat tipe utilitas kustom sendiri (seperti `Nullable<T>` atau `FlagValidasi<T>`).

---

## 🧠 Analogi Dunia Nyata: "Mesin Fotokopi Berfilter Khusus"
Bayangkan Anda memiliki formulir pendaftaran:
- Anda memasukkan dokumen asli ke mesin fotokopi.
- **Filter "Wajib Pensil" (`[K in keyof T]?: ...`)**: Mesin mencetak ulang seluruh baris yang sama, tetapi menambahkan tanda pensil tipis di sebelah kanan setiap pertanyaan (**Setiap baris menjadi opsional**).
- **Filter "Laminating" (`readonly [K in keyof T]: ...`)**: Mesin mencetak ulang seluruh baris yang sama, tetapi menyegel setiap kotak dengan lapisan kaca (**Setiap baris menjadi tidak bisa diubah**).
- Anda tidak perlu mengetik ulang daftar pertanyaan satu per satu!

---

## 📘 Konsep Dasar

### 1. Sintaks Mapped Type
Sama seperti method array `.map()`, Mapped Type memetakan setiap kunci `K` dari `keyof T`:

```ts
type GandakanSebagaiBoolean<T> = {
  [K in keyof T]: boolean;
};

interface FiturApp {
  modeGelap: string;
  notifikasiEmail: string;
  suaraEfek: string;
}

// Menghasilkan: { modeGelap: boolean; notifikasiEmail: boolean; suaraEfek: boolean; }
type ToggleFitur = GandakanSebagaiBoolean<FiturApp>;
```

---

### 2. Membuka Rahasia `Partial` dan `Readonly` Bawaan
Sekarang Anda tahu bagaimana pembuat TypeScript menciptakan `Partial` dan `Readonly`:

```ts
// 1. Partial: Menambahkan tanda tanya (?) pada setiap Kunci
type PartialSaya<T> = {
  [K in keyof T]?: T[K];
};

// 2. Readonly: Menambahkan kata kunci readonly pada setiap Kunci
type ReadonlySaya<T> = {
  readonly [K in keyof T]: T[K];
};
```

---

### 3. Mengurangi Modifier dengan Tanda Minus (`-`)
Tanda minus (`-`) digunakan untuk **mencabut** sifat opsional atau readonly:
```ts
// Required: Mencabut tanda tanya (?) dari semua properti!
type RequiredSaya<T> = {
  [K in keyof T]-?: T[K];
};
```

---

## 📌 Ringkasan
- Mapped Types adalah teknik paling kuat di TypeScript untuk mentransformasi bentuk objek secara dinamis.
- Gunakan `[K in keyof T]` untuk mengiterasi seluruh kunci properti.
- Gunakan `+` atau `-` untuk menambah atau menghapus modifier `?` dan `readonly`.
