# 13 · Challenge: Generic In-Memory Repository & Cache

## 🎯 Misi Utama
Membangun sebuah sistem penyimpanan data generik dalam memori (**Generic In-Memory Repository & Cache**) yang dapat digunakan untuk entitas apapun (pengguna, produk, pesanan) dengan **100% Type-Safety**.

Sistem ini merefleksikan pola desain nyata di industri (*Repository Pattern*), yang biasa digunakan pada framework backend modern seperti NestJS, Prisma, dan TypeORM.

---

## 📋 Spesifikasi Kebutuhan Teknis

### 1. Batasan Identitas (`PunyaId`)
Setiap data yang dimasukkan ke repository wajib memiliki ID:
```ts
interface PunyaId {
  id: string | number;
}
```

### 2. Method yang Wajib Dimiliki oleh `Repository<T extends PunyaId>`:
1. **`tambah(item: T): void`**:
   Menyimpan item baru ke dalam memori. Melempar error jika ID sudah terdaftar.
2. **`ambilById(id: T["id"]): T | undefined`**:
   Mencari satu item berdasarkan ID-nya secara type-safe.
3. **`ambilSemua(): readonly T[]`**:
   Mengembalikan seluruh data dalam kondisi `readonly` agar tidak bisa dimutasi dari luar.
4. **`perbarui(id: T["id"], dataBaru: Partial<T>): T | undefined`**:
   Memperbarui sebagian properti data menggunakan utility type **`Partial<T>`**.
5. **`hapus(id: T["id"]): boolean`**:
   Menghapus item berdasarkan ID. Mengembalikan `true` jika berhasil, `false` jika tidak ditemukan.
6. **`cari(kriteria: Partial<T>): T[]`**:
   Mencari daftar item yang cocok dengan kriteria filter parsial.

---

## 🏆 Kriteria Kelulusan
- [ ] Menggunakan Generic Class dengan constraint `<T extends PunyaId>`.
- [ ] Menggunakan `Partial<T>` untuk method `perbarui()` dan `cari()`.
- [ ] Menggunakan Lookup Type `T["id"]` untuk parameter ID.
- [ ] Menggunakan `readonly T[]` untuk method `ambilSemua()`.
- [ ] Mampu menguji repository tersebut dengan 2 entitas berbeda (misal: entitas `Buku` dan entitas `Karyawan`).
- [ ] Zero compile errors dan lolos `npm run typecheck`.
