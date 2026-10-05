# 06 · User-Defined Type Guards (`is`)

## 🎯 Tujuan Belajar
- Memahami mengapa fungsi pemeriksa boolean biasa (`(): boolean`) gagal mempersempit tipe data di TypeScript.
- Menguasai sintaks **Type Predicate**: `param is TipeKhusus`.
- Mampu membuat fungsi **Custom Type Guard** untuk memvalidasi data kompleks bertipe `unknown`.
- Mengetahui keajaiban Type Guard saat menyaring array menggunakan `.filter(isTipeKhusus)`.

---

## 🧠 Analogi Dunia Nyata: "Surat Rekomendasi Dokter Ahli"
Bayangkan seseorang ingin masuk ke fasilitas isolasi medis steril:
- Satpam di pintu bukan dokter. Jika satpam memeriksa dan hanya bilang *"Sepertinya dia sehat"* (**Fungsi boolean biasa `(): boolean`**), protokol rumah sakit tetap menolak orang tersebut masuk ke ruang steril karena tidak ada legalitas formal.
- Namun jika seorang **Dokter Resmi** datang, memeriksa denyut nadi dan hasil tes darah, lalu menandatangani dokumen bertempel basah: *"Saya menyatakan secara resmi bahwa orang ini adalah Pasien Bersih Bebas Virus"* (**Type Predicate `orang is PasienBersih`**):
  - Sekarang sistem rumah sakit (TypeScript Compiler) 100% percaya!
  - Pintu steril langsung dibuka lebar-lebar untuk orang tersebut.

---

## 📘 Konsep Dasar

### 1. Masalah Fungsi Boolean Biasa
```ts
interface Siswa {
  nama: string;
  nis: string;
}

// ❌ Fungsi boolean biasa:
function cekApakahSiswa(data: any): boolean {
  return data && typeof data.nama === "string" && typeof data.nis === "string";
}

function proses(data: unknown) {
  if (cekApakahSiswa(data)) {
    // console.log(data.nama); // ❌ COMPILE ERROR: 'data' is of type 'unknown'!
    // Compiler tidak tahu bahwa kembalian 'true' berarti data adalah Siswa!
  }
}
```

---

### 2. Solusi: Gunakan Type Predicate (`data is Siswa`)
Cukup ubah tipe kembalian fungsi dari `boolean` menjadi `data is Siswa`:

```ts
// ✅ Custom Type Guard dengan Type Predicate:
function isSiswa(data: unknown): data is Siswa {
  if (typeof data !== "object" || data === null) {
    return false;
  }
  const obj = data as Record<string, unknown>;
  return typeof obj.nama === "string" && typeof obj.nis === "string";
}

function proses(data: unknown) {
  if (isSiswa(data)) {
    // Di dalam blok if ini:
    // TypeScript secara resmi mengetahui 'data' adalah Siswa!
    console.log(data.nama.toUpperCase()); // ✅ Autocomplete aktif tanpa error!
  }
}
```

---

### 3. Keuntungan Dahsyat: Menyaring Array (`.filter`)
Jika kita punya array berisi data campuran:
```ts
const daftarCampuran: unknown[] = [
  { nama: "Ali", nis: "01" },
  "bukan objek",
  null,
  { nama: "Budi", nis: "02" },
];

// Menggunakan Type Guard di .filter()
const hanyaSiswa = daftarCampuran.filter(isSiswa);
// Tipe otomatis: Siswa[] (bukan unknown[] lagi!)
```

---

## 📌 Ringkasan
- Custom Type Guard adalah fungsi yang mengembalikan `param is T`.
- Menjembatani kode pemeriksaan runtime logika Anda dengan sistem pengetikan compile-time TypeScript.
- Sangat ampuh membersihkan array dari elemen sampah atau null/undefined.
