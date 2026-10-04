# 14 · Generic Class (`class Wadah<T>`)

## 🎯 Tujuan Belajar
- Memahami konsep **Generic Class** di TypeScript: membuat class yang fleksibel menampung tipe data apa saja dengan keamanan tipe 100%.
- Mengimplementasikan struktur data umum (*Stack / Antrean / Repositori Penyimpanan*).
- Menerapkan **Generic Constraint** pada Class (`class Repo<T extends { id: string }>`).

---

## 🧠 Analogi: Kotak Kontainer Kargo

- Satu model kontainer kargo yang sama bisa dipakai mengangkut **Mobil**, **Beras**, atau **Elektronik**.
- Begitu kontainer diisi mobil (`KotakKontainer<Mobil>`), sistem pelabuhan otomatis memperlakukannya sebagai muatan kendaraan, bukan karung beras.

---

## 📘 Konsep Dasar

### 1. Deklarasi Generic Class

```ts
// Class Tumpukan (Stack: LIFO)
class Tumpukan<T> {
  private elemen: T[] = [];

  public dorong(item: T): void {
    this.elemen.push(item);
  }

  public ambil(): T | undefined {
    return this.elemen.pop();
  }

  public lihatPuncak(): T | undefined {
    return this.elemen[this.elemen.length - 1];
  }

  public get jumlah(): number {
    return this.elemen.length;
  }
}

// 1. Tumpukan Angka
const tumpukanAngka = new Tumpukan<number>();
tumpukanAngka.dorong(10);
tumpukanAngka.dorong(20);
console.log(tumpukanAngka.ambil()); // 20 (bertipe number)

// 2. Tumpukan String
const tumpukanTeks = new Tumpukan<string>();
tumpukanTeks.dorong("A");
tumpukanTeks.dorong("B");
console.log(tumpukanTeks.ambil()); // "B" (bertipe string)
```

---

### 2. Generic Constraint pada Class

```ts
interface EntitasDasar {
  id: string;
  dibuatPada: Date;
}

// Hanya menerima tipe yang memiliki `id` dan `dibuatPada`
class RepositoriData<T extends EntitasDasar> {
  private koleksi: Map<string, T> = new Map();

  public simpan(item: T): void {
    this.koleksi.set(item.id, item);
    console.log(`[REPO] Data ${item.id} berhasil disimpan.`);
  }

  public cari(id: string): T | undefined {
    return this.koleksi.get(id);
  }
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/14-generic-class/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Generic Class `class NamaClass<T>` menyediakan fleksibilitas maksimal tanpa mengorbankan type safety.
- Sangat sering digunakan saat membuat Data Access Layer (DAL), antrean pesan, dan state management.
