# 02 · Destructuring Object

## 🎯 Tujuan Belajar
- Memahami cara membongkar properti objek menggunakan **nama properti (*key*)**.
- Mengganti nama variabel (*renaming / aliasing*) saat mendestruktur (`{ namaAsli: namaBaru }`).
- Menetapkan **nilai default** (*default values*) untuk properti yang opsional / `undefined`.
- Melakukan destructuring pada **objek bersarang (*nested object*)**.
- Mendestruktur **parameter fungsi** secara langsung dan menulis tipe TypeScript yang benar.

---

## 🧠 Analogi: Formulir Biodata

Saat mengisi formulir biodata:
- Ada kolom: `nama`, `alamat`, `noHp`.
- Berbeda dengan barisan antrean (array yang berurutan), formulir punya **label nama**.
- Kamu bisa membaca kolom `noHp` terlebih dahulu tanpa harus membaca `nama` atau `alamat` karena kamu mencari berdasarkan **label namanya**.

---

## 📘 Konsep Dasar

### 1. Destructuring Object Dasar

Berbeda dengan array yang menggunakan kurung siku `[]` dan bergantung pada urutan, destructuring object menggunakan kurung kurawal `{}` dan bergantung pada **nama properti**:

```ts
interface Restoran {
  nama: string;
  lokasi: string;
  kategori: string[];
}

const restoran: Restoran = {
  nama: "Ristorante Italiano",
  lokasi: "Jl. Sudirman No. 10",
  kategori: ["Italia", "Pizzeria", "Vegetarian"],
};

// ✅ Urutan variabel tidak masalah, yang penting nama properti cocok
const { nama, lokasi, kategori } = restoran;
console.log(nama);   // "Ristorante Italiano"
console.log(lokasi); // "Jl. Sudirman No. 10"
```

---

### 2. Mengganti Nama Variabel (Renaming / Aliasing)

Jika kita ingin nama variabel berbeda dari nama properti objek aslinya, gunakan sintaks `propertiAsli: namaVariabelBaru`:

```ts
const { nama: namaResto, kategori: menuKategori } = restoran;

console.log(namaResto);     // "Ristorante Italiano"
console.log(menuKategori);  // ["Italia", "Pizzeria", "Vegetarian"]
```

---

### 3. Nilai Default (Default Values)

Kita bisa menggabungkan renaming dan nilai default:

```ts
interface MenuResto {
  makananUtama: string;
  menuPembuka?: string; // opsional
}

const menu: MenuResto = {
  makananUtama: "Spaghetti",
};

// Jika menuPembuka tidak ada, gunakan nilai default "Roti Bawang"
const { makananUtama, menuPembuka = "Roti Bawang" } = menu;
console.log(makananUtama); // "Spaghetti"
console.log(menuPembuka);  // "Roti Bawang"

// Mengganti nama sekaligus memberi nilai default:
const { menuPenutup: dessert = "Gelato" } = menu as any;
console.log(dessert);      // "Gelato"
```

---

### 4. Nested Destructuring (Objek Bersarang)

Untuk objek di dalam objek, gunakan struktur bertingkat `{}`:

```ts
const profilRestoran = {
  nama: "Warung Rasa",
  jamBuka: {
    jumat: { buka: 10, tutup: 22 },
    sabtu: { buka: 9, tutup: 23 },
  },
};

// Mengambil jam buka dan tutup hari Jumat
const {
  jamBuka: {
    jumat: { buka: jamBukaJumat, tutup: jamTutupJumat },
  },
} = profilRestoran;

console.log(`Jumat buka jam ${jamBukaJumat} s/d ${jamTutupJumat}`);
```

---

### 5. Destructuring Parameter Fungsi

Ini adalah salah satu teknik paling sering digunakan dalam pengembangan TypeScript/JavaScript modern. Daripada mengirim 5 argumen berurutan yang mudah tertukar, kita mengirim **1 objek konfigurasi** dan langsung membongkarnya di parameter fungsi:

```ts
interface OpsiPesanAntar {
  alamat: string;
  jam?: string;
  menuIndex?: number;
}

function pesanAntar({
  alamat,
  jam = "18:00",
  menuIndex = 0,
}: OpsiPesanAntar): void {
  console.log(`Pesanan diantar ke ${alamat} pukul ${jam} (Menu #${menuIndex})`);
}

// Pemanggil fungsi tidak perlu khawatir urutan argumen terbalik!
pesanAntar({
  alamat: "Jl. Merdeka No. 45",
  jam: "19:30",
  menuIndex: 2,
});
```

---

## 🔷 TypeScript Corner: Perangkap Sintaks Type Annotation vs Destructuring

> [!WARNING]
> Ini adalah salah satu kesalahan paling umum saat pemula belajar TypeScript!

Di JavaScript biasa:
`const { nama: namaUser } = user;` berarti: *buat variabel baru bernama `namaUser` yang berisi `user.nama`*.

Oleh karena itu, **JANGAN** menulis tipe TypeScript seperti ini di dalam kurung kurawal destructuring:

```ts
// ❌ SALAH BESAR di TypeScript:
function sapaUser({ nama: string, umur: number }) {
  // JavaScript menganggap kamu me-rename 'nama' menjadi variabel 'string'
  // dan me-rename 'umur' menjadi variabel 'number'!
}

// ✅ CARA BENAR: Pisahkan destructuring dengan anotasi tipe
function sapaUser({ nama, umur }: { nama: string; umur: number }): void {
  console.log(`Halo ${nama}, umur ${umur} tahun`);
}

// ✅ LEBIH RAPI: Gunakan Interface atau Type Alias
interface UserInfo {
  nama: string;
  umur: number;
}

function sapaUserRapi({ nama, umur }: UserInfo): void {
  console.log(`Halo ${nama}, umur ${umur} tahun`);
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/02-destructuring-object/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const { a, b } = undefined;` | TypeError: Cannot destructure property of undefined | Pastikan objek ada atau gunakan fallback `const { a } = obj ?? {};` |
| `function cetak({ x: number })` | Dianggap me-rename `x` menjadi variabel baru bernama `number` | `function cetak({ x }: { x: number })` |
| Mengubah variabel yang sudah ada: `{ a, b } = obj;` | SyntaxError jika di awal baris karena `{}` dianggap blok kode | Bungkus tanda kurung: `({ a, b } = obj);` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan setiap instruksi `TODO`. Setelah itu cek jawabanmu di [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Destructuring object membongkar nilai berdasarkan **nama kuncinya (*key*)**, bukan posisi.
- Gunakan `{ properti: namaBaru }` untuk mengganti nama variabel (*alias*).
- Gunakan `{ properti = nilaiBawaan }` untuk menyediakan nilai cadangan jika properti bernilai `undefined`.
- Destructuring parameter fungsi membuat pemanggilan fungsi sangat jelas dan tahan terhadap kesalahan urutan argumen.
