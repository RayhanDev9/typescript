# 13 · Method Chaining (`return this`)

## 🎯 Tujuan Belajar
- Memahami pola desain **Method Chaining** (*Fluent Interface*): menyambungkan pemanggilan beberapa method sekaligus dalam satu baris (`akun.setor(100).setor(50).tarik(20)`).
- Mengembalikan objek instansi saat ini menggunakan **`return this;`** di akhir setiap method.
- Memahami keuntungan return type **`this`** di TypeScript agar chaining tetap bekerja dengan lancar pada subclass turunan.

---

## 🧠 Analogi: Gerbong Kereta Api yang Menyambung

- Tanpa Method Chaining: Kamu harus menyebutkan nama objek berulang-ulang di setiap baris:
  `akun.setor(100); akun.tarik(20); akun.info();`
- Dengan Method Chaining: Setiap gerbong method otomatis mengoper kemudi kembali ke kereta (`return this`), sehingga gerbong berikutnya bisa langsung tersambung:
  `akun.setor(100).tarik(20).info();`

---

## 📘 Konsep Dasar

### 1. Implementasi `return this;`

```ts
class RekeningChaining {
  private saldo: number = 0;

  constructor(public nama: string) {}

  // Kembalikan `this` agar method bisa disambung!
  public setor(nominal: number): this {
    this.saldo += nominal;
    console.log(`[SETOR] Rp${nominal.toLocaleString("id-ID")}`);
    return this;
  }

  public tarik(nominal: number): this {
    this.saldo -= nominal;
    console.log(`[TARIK] Rp${nominal.toLocaleString("id-ID")}`);
    return this;
  }

  public cetakSaldo(): this {
    console.log(`[SALDO AKHIR ${this.nama}] Rp${this.saldo.toLocaleString("id-ID")}`);
    return this;
  }
}

const akun = new RekeningChaining("Rayhan");

// ✅ Rantai pemanggilan beruntun yang elegan:
akun
  .setor(1000000)
  .setor(500000)
  .tarik(200000)
  .cetakSaldo();
```

---

## 🔷 TypeScript Corner: Tipe Kembalian `this`

Di TypeScript, menggunakan tipe return `this` jauh lebih unggul daripada menuliskan nama class itu sendiri (`: RekeningChaining`). Kenapa?
Karena jika ada class turunan (`class AkunBisnis extends RekeningChaining`), method yang diwarisi akan otomatis mengembalikan tipe `AkunBisnis` sehingga method khusus milik anak tetap bisa dipanggil di ujung rantai chaining!

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/13-method-chaining/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Method Chaining dicapai dengan menambahkan `return this;` di akhir method.
- Membuat kode deklaratif, ringkas, dan sangat menyenangkan dibaca.
