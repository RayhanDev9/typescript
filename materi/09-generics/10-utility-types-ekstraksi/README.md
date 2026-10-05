# 10 · Utility Types: Ekstraksi & Filter

## 🎯 Tujuan Belajar
- Menguasai Utility Types untuk operasi pada Union Types:
  1. **`Exclude<Union, AnggotaDibuang>`**: Membuang tipe tertentu dari union.
  2. **`Extract<Union, AnggotaDiambil>`**: Menyaring dan mengambil hanya anggota yang cocok.
  3. **`NonNullable<T>`**: Membuang `null` dan `undefined`.
- Menguasai Utility Types untuk fungsi:
  4. **`ReturnType<typeof fungsi>`**: Mengekstrak tipe nilai kembalian suatu fungsi secara otomatis.
  5. **`Parameters<typeof fungsi>`**: Mengekstrak tipe parameter fungsi dalam bentuk Tuple.
- Mengetahui cara mendapatkan tipe data dari pustaka pihak ketiga tanpa perlu membuat interface manual baru.

---

## 🧠 Analogi Dunia Nyata: "Penyaring Air & Ahli Lab Forensik"
- **`Exclude`**: Anda punya semangkuk salad buah (`"Apel" | "Jeruk" | "Pisang" | "Bawang"`). Anda membuang `"Bawang"` yang tidak cocok (**`Exclude<Salad, "Bawang">`**).
- **`NonNullable`**: Menyaring air minum dari kotoran; Anda membuang semua `null` dan `undefined` agar hanya tersisa air murni.
- **`ReturnType` (Ahli Lab Forensik)**:
  Ada sebuah mesin misterius buatan pabrik lain (`fungsiHitungPajak`). Anda tidak punya buku manual cetak birunya, tetapi Anda ingin tahu apa bentuk benda yang keluar dari mesin itu. Ahli lab forensik meneliti mesin tersebut dan memberi tahu Anda: *"Mesin ini selalu mengeluarkan objek kwitansi"* (**`ReturnType<typeof fungsiHitungPajak>`**).

---

## 📘 Konsep Dasar

### 1. `Exclude` vs `Extract` pada Union Type
```ts
type Peran = "admin" | "editor" | "penulis" | "pembaca";

// Membuang peran yang punya hak tulis
type PeranHanyaBaca = Exclude<Peran, "admin" | "editor" | "penulis">;
// Hasil: "pembaca"

// Mengambil hanya peran manajemen
type PeranManajemen = Extract<Peran, "admin" | "editor">;
// Hasil: "admin" | "editor"
```

---

### 2. `NonNullable<T>`
```ts
type NilaiInput = string | number | null | undefined;

// Menghilangkan kemungkinan null & undefined
type NilaiBersih = NonNullable<NilaiInput>;
// Hasil: string | number
```

---

### 3. `ReturnType<typeof fn>` dan `Parameters<typeof fn>`
Sangat berguna saat fungsi sudah ada, namun kita butuh tipe kembaliannya untuk variabel lain:

```ts
function buatSesiLogin(nama: string, durasiMenit: number) {
  return {
    idSesi: "SESSION-" + Math.random(),
    pengguna: nama,
    kadaluarsaPada: new Date(Date.now() + durasiMenit * 60000),
  };
}

// Mengekstrak tipe return objek dari fungsi di atas secara otomatis!
type SesiPengguna = ReturnType<typeof buatSesiLogin>;
// Tipe otomatis: { idSesi: string; pengguna: string; kadaluarsaPada: Date }

// Mengekstrak parameter fungsi
type ParameterSesi = Parameters<typeof buatSesiLogin>;
// Tipe otomatis tuple: [nama: string, durasiMenit: number]
```

---

## 📌 Ringkasan
- `Exclude` dan `Extract` bekerja khusus pada **Union Types**.
- `ReturnType<typeof fn>` menghemat waktu karena Anda tidak perlu menulis ulang interface untuk objek yang sudah dihasilkan oleh sebuah fungsi.
