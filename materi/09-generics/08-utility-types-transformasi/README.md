# 08 · Utility Types: Transformasi Properti

## 🎯 Tujuan Belajar
- Memahami konsep **Utility Types**: tipe generik bawaan TypeScript untuk mentransformasi tipe data yang sudah ada tanpa perlu menulis interface baru dari awal.
- Menguasai 3 Utility Types pengubah sifat properti:
  1. **`Partial<T>`**: Menjadikan semua properti opsional (`?`).
  2. **`Required<T>`**: Menjadikan semua properti wajib (menghapus tanda `?`).
  3. **`Readonly<T>`**: Mengunci semua properti agar tidak dapat dimutasi (*read-only*).
- Mengetahui use case dunia nyata: fungsi update parsial (PATCH endpoint), validasi profil lengkap, dan perlindungan state aplikasi.

---

## 🧠 Analogi Dunia Nyata: "Formulir Pendaftaran Siswa"
Bayangkan sebuah formulir pendaftaran:
- **Tipe Asli (`Siswa`)**: Berisi nama, email, nomor HP, dan alamat.
- **`Partial<Siswa>` (Draf Sementara)**:
  Siswa baru boleh mengisi sebagian kolom dulu saat membuat akun (misal hanya nama dan email, nomor HP nanti). Tidak ada kolom yang wajib diisi penuh (**Semua properti menjadi opsional**).
- **`Required<Siswa>` (Verifikasi Kelulusan)**:
  Sebelum ijazah dicetak, panitia mewajibkan SEMUA kolom harus terisi lengkap, tidak boleh ada tanda bintang opsional yang kosong! (**Semua properti menjadi wajib**).
- **`Readonly<Siswa>` (Piagam Ijazah Laminating)**:
  Setelah ijazah dicetak dan dilaminating, identitas siswa terkunci selamanya dan tidak boleh dicoret pena (**Semua properti tidak bisa diubah**).

---

## 📘 Konsep Dasar

### 1. `Partial<T>` untuk Pembaruan Parsial (Update/Patch)
```ts
interface Pengguna {
  id: number;
  nama: string;
  email: string;
  kota: string;
}

// Hanya ingin mengubah kota saja? Gunakan Partial<T>!
function updatePengguna(id: number, dataBaru: Partial<Pengguna>): void {
  console.log(`Mengupdate pengguna ${id} dengan data:`, dataBaru);
}

updatePengguna(1, { kota: "Surabaya" }); // ✅ Sah! Properti lain tidak wajib dikirim.
```

---

### 2. `Required<T>` Menghilangkan Tanda Opsional
```ts
interface OpsiKonfigurasi {
  tema?: "terang" | "gelap";
  debug?: boolean;
}

// Memastikan semua opsi terisi (tidak ada lagi yang undefined)
type KonfigurasiPasti = Required<OpsiKonfigurasi>;
// Hasil: { tema: "terang" | "gelap"; debug: boolean; }
```

---

### 3. `Readonly<T>` Mencegah Mutasi Objek
```ts
interface PengaturanSistem {
  port: number;
  host: string;
}

const config: Readonly<PengaturanSistem> = {
  port: 3000,
  host: "localhost",
};

// config.port = 8080; // ❌ Compile Error: Cannot assign to 'port' because it is a read-only property.
```

---

## 📌 Ringkasan
- `Partial<T>`, `Required<T>`, dan `Readonly<T>` adalah pilar utama pemrograman TypeScript untuk menghindari duplikasi model data.
- Selalu gunakan `Partial<T>` pada parameter fungsi pembaruan (*update profile / patch*).
