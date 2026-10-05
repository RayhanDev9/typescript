# 06 · Operator `keyof` & Property Lookup

## 🎯 Tujuan Belajar
- Memahami fungsi operator **`keyof`** di TypeScript: mengekstrak seluruh nama properti dari suatu tipe menjadi bentuk union literal.
- Memahami konsep **Indexed Access Types (Lookup Types)**: `TipeObjek["namaProperti"]`.
- Menguasai pola populer: Generic Constraint antar dua parameter tipe: `<T, K extends keyof T>`.
- Mengetahui bagaimana pola ini mencegah bug salah ketik (*typo*) pada nama properti objek di waktu kompilasi.

---

## 🧠 Analogi Dunia Nyata: "Daftar Tombol di Remote TV"
Bayangkan sebuah remote control televisi:
- Tipe `TV` memiliki 3 tombol resmi: `"power"`, `"volume"`, dan `"channel"`.
- Operator `keyof TV` adalah **Daftar Seluruh Tombol Resmi yang Ada**:
  `"power" | "volume" | "channel"`
- Jika Anda membuat fungsi `pencetTombol(namaTombol)`, Anda ingin memastikan pengguna hanya boleh menyebut tombol yang benar-benar ada di remote tersebut!
- Jika pengguna mencoba memencet tombol `"terbangkan_pesawat"`, TypeScript langsung menolak sebelum tombol itu ditekan!

---

## 📘 Konsep Dasar

### 1. Apa itu `keyof`?
```ts
interface Pengguna {
  id: number;
  nama: string;
  email: string;
}

// keyof Pengguna menghasilkan: "id" | "nama" | "email"
type KunciPengguna = keyof Pengguna;
```

---

### 2. Indexed Access Type (`T[K]`)
Sama seperti mengambil nilai objek `obj[key]`, kita bisa mengambil **tipe** dari properti tertentu:
```ts
type TipeId = Pengguna["id"];     // number
type TipeNama = Pengguna["nama"]; // string
```

---

### 3. Menggabungkan `keyof` dengan Generic: Fungsi `ambilProperti`
Ini adalah salah satu fungsi utilitas paling terkenal di ekosistem TypeScript:

```ts
function ambilProperti<T, K extends keyof T>(obj: T, kunci: K): T[K] {
  return obj[kunci];
}

const siswa = { nama: "Rayhan", usia: 20, lulus: true };

const namaSiswa = ambilProperti(siswa, "nama"); // Tipe otomatis: string
const usiaSiswa = ambilProperti(siswa, "usia"); // Tipe otomatis: number

// ❌ COMPILE ERROR: Typo terdeteksi secara instan!
// ambilProperti(siswa, "alamatt"); // Argument of type '"alamatt"' is not assignable to parameter of type '"nama" | "usia" | "lulus"'.
```

---

## 📌 Ringkasan
- `keyof T` menghasilkan union dari nama-nama properti objek `T`.
- `<T, K extends keyof T>` mengikat parameter kedua (`K`) agar wajib merupakan kunci yang sah dari objek pertama (`T`).
- Tipe kembalian `T[K]` menjamin nilai yang dikembalikan memiliki tipe data yang tepat sesuai properti yang dipanggil.
