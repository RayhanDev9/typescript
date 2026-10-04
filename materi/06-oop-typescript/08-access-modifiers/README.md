# 08 · Access Modifiers: `public`, `private`, & `protected`

## 🎯 Tujuan Belajar
- Memahami konsep **Enkapsulasi** menggunakan Access Modifiers di TypeScript:
  - **`public`**: Bisa diakses dari mana saja (luar, dalam, turunan).
  - **`protected`**: Hanya bisa diakses dari dalam class ini dan class turunannya (*subclass*).
  - **`private`**: Hanya bisa diakses dari dalam class ini saja.
- Mengetahui perbedaan mendasar antara **`private` TypeScript** vs **`#private` JavaScript ES2022**.
- Menghubungkan konsep ini dengan **Type Erasure** yang telah dipelajari di Modul 03.

---

## 📊 Tabel Perbandingan Hak Akses

| Hak Akses | Di Dalam Class Ini | Di Dalam Subclass (`extends`) | Dari Luar Class (`instansi.x`) |
| :--- | :---: | :---: | :---: |
| **`public`** (default) | ✅ Ya | ✅ Ya | ✅ Ya |
| **`protected`** | ✅ Ya | ✅ Ya | ❌ Tidak |
| **`private`** (TS) | ✅ Ya | ❌ Tidak | ❌ Tidak |
| **`#private`** (JS ASLI) | ✅ Ya | ❌ Tidak | ❌ Tidak (Error di runtime) |

---

## 📘 Konsep Dasar

```ts
class RekeningBank {
  public namaNasabah: string;
  protected nomorRekening: string;
  private saldo: number; // Privat TypeScript
  #pinRahasia: string;   // Privat Asli JavaScript (#)

  constructor(nama: string, noRek: string, saldoAwal: number, pin: string) {
    this.namaNasabah = nama;
    this.nomorRekening = noRek;
    this.saldo = saldoAwal;
    this.#pinRahasia = pin;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

class RekeningTabungan extends RekeningBank {
  public cetakNomor(): void {
    // ✅ BISA mengakses nomorRekening karena bertipe `protected`
    console.log("No Rekening:", this.nomorRekening);

    // ❌ TIDAK BISA mengakses this.saldo karena bertipe `private` di class induk!
    // console.log(this.saldo);
  }
}
```

---

## 🔷 TypeScript Corner: `private` TS vs `#private` JS Asli

Ingat kembali materi **Modul 03 (Type Erasure)**:
- Kata kunci `private` dan `protected` adalah fitur bawaan TypeScript yang **dihapus saat kompilasi ke JavaScript**.
- Simbol tagar `#properti` (ES2022) adalah fitur asli mesin JavaScript (V8/Node.js/Browser). Jika diakses dari luar saat program berjalan, JavaScript akan melempar runtime error!

```ts
class ContohPrivat {
  private kunciTS = "rahasia 1";
  #kunciJS = "rahasia 2";
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/08-access-modifiers/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `public`: bebas diakses.
- `protected`: aman untuk diwariskan ke class anak.
- `private`: terkunci rapat di class pembuatnya.
- Gunakan `protected` jika properti ingin bisa dibaca oleh subclass.
