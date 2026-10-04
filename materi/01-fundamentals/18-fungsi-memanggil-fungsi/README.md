# 18 · Fungsi Memanggil Fungsi (Komposisi Fungsi)

## 🎯 Tujuan Belajar
- Memahami bagaimana sebuah fungsi dapat memanggil fungsi lainnya
- Menerapkan prinsip **Single Responsibility** (satu fungsi fokus menyelesaikan satu tugas kecil dengan baik)
- Membangun alur pemrosesan data bertingkat (*data pipeline*)
- Menjaga kode tetap bersih, mudah diuji, dan tidak berulang

---

## 🧠 Analogi: Lini Perakitan Pabrik Mobil

Di pabrik perakitan mobil:
- Ada mesin khusus pembuat roda.
- Ada mesin khusus perakit mesin.
- Ada mesin utama yang menggabungkan seluruh komponen menjadi mobil utuh.

Mesin utama tidak membuat baut dari nol; mesin utama **memanggil mesin-mesin kecil** pembantu.

```text
potongBuah(apel)  ──────┐
                        ├──►  buatJusBuah(apel, jeruk)  ──►  Segelas Jus Segar
potongBuah(jeruk) ──────┘
```

---

## 💻 Contoh: Mesin Pembuat Jus dengan Pemotong Buah

```ts
// 1. Fungsi kecil: hanya bertugas memotong 1 buah menjadi 4 bagian
function potongPotong(buah: number): number {
  return buah * 4;
}

// 2. Fungsi utama: meracik jus dengan memanggil fungsi potongPotong
function prosesJus(apel: number, jeruk: number): string {
  const potonganApel = potongPotong(apel);
  const potonganJeruk = potongPotong(jeruk);

  return `Jus segar diracik dari ${potonganApel} potong apel dan ${potonganJeruk} potong jeruk! 🥤`;
}

console.log(prosesJus(2, 3));
// "Jus segar diracik dari 8 potong apel dan 12 potong jeruk! 🥤"
```

---

## 💡 Keuntungan Memecah Fungsi Menjadi Bagian Kecil

1. **Mudah Diperbaiki (Maintainability)**: Jika aturan pemotongan buah berubah (misal 1 buah jadi 6 potong), kamu cukup mengubah **satu fungsi `potongPotong`**, tanpa menyentuh fungsi `prosesJus`.
2. **Dapat Digunakan di Tempat Lain (Reusability)**: Fungsi `potongPotong` bisa dipakai juga oleh fungsi lain, misalnya `buatSaladBuah`.
3. **Mudah Dibaca**: Kode utama menjadi sangat singkat dan ekspresif.

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Fungsi besar dapat memanggil fungsi-fungsi kecil pembantu (*helper functions*).
- Setiap fungsi sebaiknya memiliki **satu tanggung jawab utama**.
- Pendekatan ini membuat kode lebih fleksibel dan mudah diuji.
