# 03 · Generic Interfaces & Type Aliases

## 🎯 Tujuan Belajar
- Memahami cara membuat **Interface Generik** (`interface Wadah<T>`).
- Memahami cara membuat **Type Alias Generik** (`type Hasil<T>`).
- Menguasai pemodelan pola standar industri: **Standard API Response Wrapper** (`ApiResponse<T>`).
- Memahami konsep **Nested Generics** (Generik Bersarang), seperti `ApiResponse<Pengguna[]>`.

---

## 🧠 Analogi Dunia Nyata: "Amplop Standar Pengiriman Dokumen"
Bayangkan sebuah kantor pos memiliki format amplop resmi:
- Pada bagian luar amplop selalu ada informasi baku:
  1. Nomor Resi Pengiriman (`resi: string`)
  2. Status Pengiriman (`sukses: boolean`)
  3. Catatan Tambahan (`pesan?: string`)
- Namun, **isi di dalam amplop** bisa bermacam-macam:
  - Hari ini berisi Surat Izin Mengemudi (`SIM`).
  - Besok berisi Ijazah Sarjana (`Ijazah`).
  - Lusa berisi sepuluh lembar struk transfer (`Struk[]`).
- Kantor pos tidak perlu mencetak amplop khusus SIM atau amplop khusus Ijazah. Mereka cukup membuat **Amplop Standar `<Isi>`**, di mana jenis isi dokumen ditentukan saat pengiriman!

---

## 📘 Konsep Dasar

### 1. Generic Interface untuk Respon API
Di dunia nyata, backend web selalu membungkus data dalam format standar:
```ts
interface ResponApi<T> {
  status: number;
  sukses: boolean;
  data: T; // <-- Tipe dinamis sesuai endpoint yang dipanggil
  pesan?: string;
}
```

Cara memakainya untuk entitas yang berbeda:
```ts
interface Pengguna {
  id: number;
  nama: string;
}

interface Produk {
  kode: string;
  harga: number;
}

// 1. Respon untuk data satu pengguna
type ResponPengguna = ResponApi<Pengguna>;

// 2. Respon untuk daftar banyak produk (Array Generic)
type ResponBanyakProduk = ResponApi<Produk[]>;
```

---

### 2. Generic Type Aliases dengan Union (Pola Hasil Operasi)
Type alias generik sangat bagus untuk memodelkan status berhasil atau gagal:

```ts
type HasilOperasi<T> =
  | { sukses: true; data: T }
  | { sukses: false; pesanError: string };

function prosesLogin(): HasilOperasi<{ token: string }> {
  // bisa mengembalikan sukses atau gagal secara type-safe!
  return { sukses: true, data: { token: "abc-123" } };
}
```

---

## 📌 Ringkasan
- Generic Interface dan Type Aliases menghilangkan keharusan membuat ratusan tipe pembungkus yang strukturnya sama.
- Sangat krusial saat bekerja dengan HTTP Request/Fetch API di aplikasi nyata.
