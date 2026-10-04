# 05 · Fungsi Mengembalikan Fungsi

## 🎯 Tujuan Belajar
- Memahami konsep fungsi yang **menghasilkan (mengembalikan) fungsi baru** (*Function Factory*).
- Memahami konsep dasar **Currying**: memecah fungsi dengan banyak argumen menjadi rangkaian fungsi berargumen tunggal `f(a)(b)`.
- Mengubah fungsi multi-layer dari bentuk biasa (*function keyword*) ke bentuk ringkas **Arrow Function**.
- Mengetikkan fungsi yang mengembalikan fungsi di TypeScript: `(pajak: number) => (nominal: number) => number`.

---

## 🧠 Analogi: Pabrik Cetakan Kue

- Fungsi Pertama adalah **Pabrik Cetakan Kue**: Kamu memesan cetakan berbentuk *"Bintang"* (`buatCetakan("Bintang")`).
- Fungsi Pertama memberimu **Alat Cetak Bintang** (sebuah fungsi baru).
- Kapan pun kamu punya adonan, kamu tinggal menekan alat cetak itu: `cetakBintang(adonanCokelat)`.

---

## 📘 Konsep Dasar

### 1. Pola Function Factory (Bentuk Biasa)

```ts
function buatPenyapa(salam: string) {
  // Mengembalikan fungsi baru yang "mengingat" variabel `salam`
  return function (nama: string): void {
    console.log(`${salam}, ${nama}!`);
  };
}

// 1. Buat fungsi khusus penyapa pagi dan penyapa malam
const sapaPagi = buatPenyapa("Selamat Pagi");
const sapaMalam = buatPenyapa("Selamat Malam");

sapaPagi("Rayhan");  // "Selamat Pagi, Rayhan!"
sapaMalam("Budi");   // "Selamat Malam, Budi!"

// 2. Memanggil langsung secara berantai (Currying):
buatPenyapa("Halo")("Citra"); // "Halo, Citra!"
```

---

### 2. Ditulis dengan Arrow Function

Bentuk di atas dapat dipersingkat menjadi satu baris ekspresif:

```ts
const buatPenyapaArrow = (salam: string) => (nama: string): void => {
  console.log(`${salam}, ${nama}!`);
};

buatPenyapaArrow("Hai")("Dewi"); // "Hai, Dewi!"
```

---

### 3. Studi Kasus Nyata: Pembuat Kalkulator Tarif Pajak

```ts
type KalkulatorPajakFn = (nominal: number) => number;

function buatHitungPajak(persenPajak: number): KalkulatorPajakFn {
  return (nominal: number): number => {
    return nominal + (nominal * persenPajak) / 100;
  };
}

// Buat penghitung pajak Indonesia (PPN 11%) dan pajak restoran (PB1 10%)
const hitungPPN = buatHitungPajak(11);
const hitungPajakResto = buatHitungPajak(10);

console.log(`Harga + PPN 11%   : Rp${hitungPPN(100000).toLocaleString("id-ID")}`);
console.log(`Harga + Resto 10% : Rp${hitungPajakResto(100000).toLocaleString("id-ID")}`);
```

---

## 🔷 TypeScript Corner: Mengetikkan Tingkat Kembalian Fungsi

```ts
// Tipe: fungsi yang menerima tarif (number), lalu mengembalikan fungsi (nominal: number) => number
type PembuatTarif = (tarif: number) => (nominal: number) => number;

const buatTarifTiket: PembuatTarif = (tarif) => (jarakKm) => tarif * jarakKm;
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/05-fungsi-mengembalikan-fungsi/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Fungsi dapat mengembalikan fungsi lain sebagai nilai baliknya.
- Sangat berguna untuk membuat fungsi-fungsi khusus yang telah terkonfigurasi sebelumnya (*pre-configured functions*).
- Merupakan jembatan pemahaman langsung menuju konsep **Closure**.
