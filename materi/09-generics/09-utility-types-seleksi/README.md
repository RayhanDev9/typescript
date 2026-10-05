# 09 · Utility Types: Seleksi Field

## 🎯 Tujuan Belajar
- Menguasai 3 Utility Types penting untuk seleksi properti objek:
  1. **`Pick<T, Keys>`**: Memilih subset properti tertentu dari suatu tipe.
  2. **`Omit<T, Keys>`**: Membuang properti tertentu dari suatu tipe dan mempertahankan sisanya.
  3. **`Record<Keys, Type>`**: Membuat tipe objek kamus (*Dictionary / Key-Value Map*) dengan kunci tertentu dan tipe nilai seragam.
- Mengetahui use case industri: DTO (*Data Transfer Object*), penyembunyian field sensitif (seperti password), dan routing table.

---

## 🧠 Analogi Dunia Nyata: "Kartu Nama vs Formulir Lengkap"
Bayangkan sebuah berkas karyawan di HRD yang berisi:
`nama`, `jabatan`, `nomorKTP`, `gaji`, dan `riwayatPenyakit`.
- **`Pick` (Kartu Nama Bisnis)**:
  Anda hanya ingin mengambil informasi publik untuk dicetak di kartu nama: Anda **memilih** hanya `nama` dan `jabatan`. Sisanya diabaikan (**`Pick<Karyawan, "nama" | "jabatan">`**).
- **`Omit` (Data untuk Manajer Divisi)**:
  Manajer boleh melihat semua data karyawan, **kecuali** nominal `gaji` yang bersifat rahasia direksi. Anda membuang kolom gaji (**`Omit<Karyawan, "gaji">`**).
- **`Record` (Buku Kontak Telepon Berdasarkan Divisi)**:
  Setiap divisi kantor (`"IT" | "HRD" | "Sales"`) memiliki nomor ekstensi telepon masing-masing (**`Record<Divisi, string>`**).

---

## 📘 Konsep Dasar

### 1. `Pick<T, K>` (Memilih Kolom)
```ts
interface AkunPengguna {
  id: number;
  nama: string;
  email: string;
  kataSandi: string;
  peran: string;
}

// Hanya mengambil nama dan email untuk tampilan profil publik
type ProfilPublik = Pick<AkunPengguna, "nama" | "email">;
// Hasil: { nama: string; email: string; }
```

---

### 2. `Omit<T, K>` (Membuang Kolom)
Kebalikan dari `Pick`. Sangat berguna saat mengirim respon API agar field rahasia tidak bocor ke klien:
```ts
// Mengambil SEMUA field KECUALI kataSandi
type ResponUserAman = Omit<AkunPengguna, "kataSandi">;
// Hasil: { id: number; nama: string; email: string; peran: string; }
```

---

### 3. `Record<K, T>` (Membuat Objek Kamus / Map)
Mendefinisikan pasangan *Key-Value* yang ketat:
```ts
type StatusOrder = "tertunda" | "dikirim" | "selesai";

// Setiap status order wajib memiliki warna label badge (string)
const warnaBadge: Record<StatusOrder, string> = {
  tertunda: "kuning",
  dikirim: "biru",
  selesai: "hijau",
};
```

---

## 📌 Ringkasan
- Gunakan `Pick` saat properti yang ingin diambil hanya sedikit.
- Gunakan `Omit` saat properti yang ingin dibuang hanya sedikit.
- Gunakan `Record` untuk membuat kamus data atau konfigurasi berbasis kunci yang terdefinisi.
