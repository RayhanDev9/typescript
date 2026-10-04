# 02 · Passing Arguments: Value vs Reference

## 🎯 Tujuan Belajar
- Memahami bagaimana JavaScript mengirimkan nilai ke argumen fungsi:
  - **Primitif** (*Number, String, Boolean*): Dikirim sebagai **Nilai Salinan (*Pass by Value*)**.
  - **Objek / Array**: Dikirim sebagai **Salinan Alamat Referensi (*Pass by Reference*)**.
- Menyadari efek samping (*side effects*) ketika sebuah fungsi mengubah isi properti objek yang dikirimkan.
- Menggunakan fitur TypeScript `Readonly<T>` dan `readonly T[]` untuk mencegah mutasi objek yang tidak disengaja.

---

## 🧠 Analogi: Fotokopi Kertas vs Kunci Lemari Bersama

- **Primitif**: Kamu memberikan selembar **kertas fotokopi** tugasmu ke teman. Jika teman mencoret-coret kertas fotokopinya, lembaran aslimu di rumah **tetap bersih**.
- **Objek**: Kamu memberikan **anak kunci** ke lemari lokermu. Jika temanmu membuka lemari tersebut dan mengambil isinya, lemari aslimu **ikut kosong**!

---

## 📘 Konsep Dasar

### 1. Primitif: Tidak Berubah di Luar Fungsi

```ts
const nomorPenerbangan = "GA-101";

function gantiNomor(nomor: string) {
  nomor = "GA-999"; // Hanya mengubah variabel lokal di dalam fungsi
}

gantiNomor(nomorPenerbangan);
console.log(nomorPenerbangan); // "GA-101" (Tetap aman!)
```

---

### 2. Objek: Mengubah Objek Asli (*Side Effect*)

```ts
interface Penumpang {
  nama: string;
  nomorPaspor: string;
}

const penumpang1: Penumpang = {
  nama: "Rayhan",
  nomorPaspor: "B1234567",
};

function prosesCheckIn(penerbangan: string, p: Penumpang) {
  penerbangan = "GA-999";
  // ⚠️ Mengubah objek asli karena p menunjuk ke alamat memori yang sama!
  p.nama = "Mr. " + p.nama;
}

prosesCheckIn(nomorPenerbangan, penumpang1);

console.log(penumpang1.nama); // "Mr. Rayhan" (Objek luar ikut termutasi!)
```

---

## 🔷 TypeScript Corner: Mencegah Mutasi dengan `Readonly<T>`

TypeScript menyediakan utility type `Readonly<T>` yang akan mengunci properti agar tidak bisa diubah oleh fungsi:

```ts
// Parameter 'p' ditandai sebagai Readonly
function prosesCheckInAman(p: Readonly<Penumpang>) {
  // p.nama = "Mr. " + p.nama; // ❌ Error TypeScript: Cannot assign to 'nama' because it is a read-only property.
  
  console.log(`Selamat datang, ${p.nama}!`);
}

// Untuk array yang tidak boleh diubah (tidak boleh .push / .pop):
function cetakDaftarMenu(menu: readonly string[]) {
  // menu.push("Es Teh"); // ❌ Error TypeScript: Property 'push' does not exist on type 'readonly string[]'.
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/02-passing-arguments-value-vs-ref/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| Memodifikasi objek parameter secara langsung | Menyebabkan bug tak terduga (*side effects*) di bagian kode lain | Buat salinan objek dengan `{ ...obj }` jika ingin modifikasi |
| Mengira `const obj = {}` tidak bisa diubah propertinya | `const` hanya mengunci variabel, bukan isi properti di dalam objek | Gunakan `Readonly<T>` atau `Object.freeze()` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Tipe data primitif disalin nilainya saat dikirim ke parameter fungsi.
- Objek dan Array membagikan referensi memori yang sama.
- Gunakan `Readonly<T>` di TypeScript untuk menjamin fungsi murni (*pure function*) yang tidak mengubah data input.
