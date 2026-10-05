# 04 · Generic Classes

## 🎯 Tujuan Belajar
- Memahami cara mendeklarasikan **Generic Class** dengan sintaks `class NamaKelas<T>`.
- Memahami bagaimana parameter tipe `T` dapat digunakan pada properti, parameter konstruktor, dan method di dalam class.
- Membangun struktur data klasik yang aman secara tipe: **Queue (Antrean)** dan **Stack (Tumpukan)**.
- Mengetahui bahwa instance yang berbeda dari kelas yang sama memiliki tipe data yang sepenuhnya terisolasi dan aman.

---

## 🧠 Analogi Dunia Nyata: "Mesin Dispenser Tabung Otomatis"
Bayangkan sebuah mesin tabung silinder (dispenser) di supermarket:
- Mekanisme fisiknya selalu sama: barang dimasukkan dari atas, dan keluar dari bawah (**Queue** / First-In First-Out).
- **Dispenser Bola Tenis (`new Dispenser<BolaTenis>()`)**:
  Hanya menerima bola tenis saat diisi. Saat dikeluarkan, Anda dijamin 100% mendapatkan bola tenis.
- **Dispenser Minuman Kaleng (`new Dispenser<KalengSoda>()`)**:
  Hanya menerima kaleng soda. Saat dikeluarkan, dijamin kaleng soda.
- Pabrik pembuat mesin dispenser hanya merancang **satu cetak biru generik**, namun setiap toko dapat menentukan jenis barang apa yang ingin dimasukkan ke dalam tabung tersebut!

---

## 📘 Konsep Dasar

### 1. Deklarasi Generic Class
```ts
class Kotak<T> {
  private isi: T;

  constructor(nilaiAwal: T) {
    this.isi = nilaiAwal;
  }

  public getIsi(): T {
    return this.isi;
  }

  public setIsi(nilaiBaru: T): void {
    this.isi = nilaiBaru;
  }
}

// Instance 1: Khusus string
const kotakSurat = new Kotak<string>("Surat Undangan");
// kotakSurat.setIsi(123); // ❌ Error! Hanya boleh string

// Instance 2: Khusus number
const celengan = new Kotak<number>(50000);
```

---

### 2. Struktur Data Antrean (Queue) Generic
```ts
class Antrean<T> {
  private item: T[] = [];

  public masuk(data: T): void {
    this.item.push(data);
  }

  public keluar(): T | undefined {
    return this.item.shift();
  }

  public get ukuran(): number {
    return this.item.length;
  }
}
```

---

## 📌 Ringkasan
- Generic Class memungkinkan kita menulis logika pengelolaan state dan data structure sekali saja, lalu menggunakannya untuk berbagai tipe data dengan keamanan tipe penuh.
- Tipe `T` berlaku untuk seluruh lingkup instance class tersebut.
