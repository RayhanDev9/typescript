# 05 · Short-Circuiting (`&&` dan `||`)

## 🎯 Tujuan Belajar
- Memahami bahwa operator logika `&&` (AND) dan `||` (OR) di JavaScript/TypeScript **tidak hanya menghasilkan boolean (`true`/`false`)**, melainkan mengembalikan **nilai operand aslinya**.
- Memahami cara kerja **Short-Circuit Evaluation** pada operator `||` dan `&&`.
- Menggunakan `||` untuk menetapkan nilai fallback / bawaan.
- Menggunakan `&&` untuk mengeksekusi kode atau mengambil nilai hanya jika kondisi pertama terpenuhi.
- Mengetahui kelemahan `||` terhadap nilai falsy seperti `0` atau `""` (menuju pengenalan `??`).

---

## 🧠 Analogi: Saklar Pengaman Listrik (Short-Circuit)

- **Operator `||` (OR)**: Ibarat mencari pintu yang terbuka. Begitu menemukan pintu **pertama yang terbuka (truthy)**, kamu langsung masuk dan tidak perlu mengecek pintu-pintu di belakangnya lagi. Jika semua pintu terkunci (falsy), kamu pasrah di pintu terakhir.
- **Operator `&&` (AND)**: Ibarat pos pemeriksaan keamanan berlapis. Begitu ada **satu pos yang menolakmu (falsy)**, perjalananmu langsung dihentikan di situ juga dan tidak lanjut ke pos berikutnya. Kamu baru sampai ke pos terakhir jika semua pos sebelumnya mengizinkan (truthy).

---

## 📘 Konsep Dasar

Ingat kembali nilai **falsy** di JavaScript/TypeScript:
`false`, `0`, `""` (string kosong), `null`, `undefined`, `NaN`.
Nilai selain itu adalah **truthy**.

---

### 1. Short-Circuiting pada Operator `||` (OR)

Operator `||` akan mengevaluasi operand dari kiri ke kanan:
- Jika menemukan nilai **truthy pertama**, ia langsung mengembalikan nilai tersebut (**short-circuit**) dan mengabaikan operand selanjutnya.
- Jika semua operand bernilai **falsy**, ia akan mengembalikan nilai operand **terakhir**.

```ts
console.log(3 || "Rayhan");          // 3 (karena 3 adalah truthy pertama)
console.log("" || "Rayhan");         // "Rayhan" (karena "" falsy)
console.log(true || 0);              // true
console.log(undefined || null);      // null (semua falsy, ambil yang terakhir)
console.log(undefined || 0 || "" || "Halo" || 23); // "Halo" (truthy pertama)
```

#### Penggunaan Praktis: Nilai Bawaan (Default Value)

```ts
interface Restoran {
  nama: string;
  jumlahTamu?: number;
}

const restoA: Restoran = { nama: "Resto Enak" };

// Jika jumlahTamu belum diisi (undefined), gunakan 10 sebagai default
const tamu = restoA.jumlahTamu || 10;
console.log(tamu); // 10
```

> ⚠️ **Kelemahan `||`**: Jika `restoA.jumlahTamu = 0` (memang tamunya 0 orang), `0` dianggap falsy sehingga `tamu` justru berubah menjadi `10`! Masalah ini dipecahkan oleh operator `??` pada materi berikutnya.

---

### 2. Short-Circuiting pada Operator `&&` (AND)

Operator `&&` bekerja berlawanan dengan `||`:
- Jika menemukan nilai **falsy pertama**, ia langsung berhenti dan mengembalikan nilai falsy tersebut (**short-circuit**).
- Jika **semua operand truthy**, ia akan mengembalikan nilai operand **terakhir**.

```ts
console.log(0 && "Rayhan");          // 0 (karena 0 adalah falsy pertama)
console.log(7 && "Rayhan");          // "Rayhan" (keduanya truthy, ambil yang terakhir)
console.log("Halo" && 23 && null && "Dunia"); // null (karena null falsy)
```

#### Penggunaan Praktis: Eksekusi Kondisional Ringkas

```ts
interface RestoranLengkap {
  nama: string;
  pesanMakanan?: (menu: string) => void;
}

const restoB: RestoranLengkap = {
  nama: "Pizza Bella",
  pesanMakanan: (menu: string) => console.log(`Memasak ${menu}...`),
};

// Cara biasa dengan if:
if (restoB.pesanMakanan) {
  restoB.pesanMakanan("Pizza Keju");
}

// Cara singkat dengan &&:
// Jika pesanMakanan ada (truthy), fungsi akan dipanggil
restoB.pesanMakanan && restoB.pesanMakanan("Pizza Keju");
```

---

## 🔷 TypeScript Corner: Tipe Data Hasil Short-Circuit

TypeScript mampu menganalisis tipe union dari hasil evaluasi operator logika:

```ts
function dapatkanNamaToko(inputNama?: string): string {
  // TypeScript tahu tipe kembalian adalah string karena fallback-nya "Toko Utama"
  const namaToko = inputNama || "Toko Utama";
  return namaToko;
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/05-short-circuiting/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const skor = user.skor || 10;` | Jika `user.skor = 0`, variabel `skor` akan keliru menjadi `10` | Gunakan nullish coalescing `user.skor ?? 10` |
| `const hasil = a && b && c();` | Jika `b` falsy, fungsi `c()` tidak dipanggil dan `hasil` berisi nilai `b` | Pastikan paham nilai yang dikembalikan saat falsy |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `||` mencari nilai **truthy pertama**. Jika tidak ada, mengembalikan operand terakhir.
- `&&` mencari nilai **falsy pertama**. Jika semua truthy, mengembalikan operand terakhir.
- Keduanya mengembalikan **nilai operand**, bukan hanya boolean murni.
