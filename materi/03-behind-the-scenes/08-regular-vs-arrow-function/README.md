# 08 · Regular Function vs Arrow Function di Balik Layar

## 🎯 Tujuan Belajar
- Memahami perbedaan mendalam antara **Regular Function** dan **Arrow Function**
- Mengetahui mengapa Arrow Function **tidak memiliki kata kunci `this` sendiri** (*Lexical `this`*)
- Memahami bahaya fatal menggunakan Arrow Function sebagai method objek
- Mengetahui kekuatan Arrow Function saat digunakan sebagai *callback* di dalam method

---

## ⚔️ Perbandingan Utama di Balik Layar

| Fitur | Regular Function (`function`) | Arrow Function (`=>`) |
| :--- | :--- | :--- |
| **Kata Kunci `this`** | Memiliki `this` sendiri (ditentukan oleh pemanggil) | **Tidak punya `this`** (mewarisi dari scope luar / *lexical*) |
| **Objek `arguments`** | Memiliki objek `arguments` | **Tidak punya** (gunakan Rest Parameter `...args`) |
| **Bisa Jadi Method Objek?**| ✅ Sangat disarankan | ❌ **Hindari** (akan merusak referensi `this`) |
| **Bisa Jadi Callback?** | Butuh kehati-hatian | ✅ **Sangat ideal** (tidak merusak `this` luar) |

---

## ⚠️ Jebakan Fatal: Arrow Function Sebagai Method Objek

```ts
const profil = {
  namaDepan: "Rayhan",
  sapa: () => {
    // ⚠️ Arrow function tidak membuat this sendiri!
    // this di sini mencari ke luar (Global Scope / undefined)!
    console.log(`Halo, saya ${this.namaDepan}`); // "Halo, saya undefined"
  }
};

profil.sapa();
```

---

## 🌟 Kekuatan Terbaik Arrow Function: Callback di Dalam Method

Sebelum ES6, saat memanggil fungsi di dalam fungsi (seperti `setTimeout` atau `.forEach`), programmer harus repot membuat trik `const self = this;`.
Dengan Arrow Function, masalah ini selesai secara elegan:

```ts
const peserta = {
  nama: "Rayhan",
  hobi: ["Ngoding", "Bulu Tangkis"],
  cetakHobi() {
    // Di dalam regular method ini, this = peserta
    this.hobi.forEach((h) => {
      // Arrow function mewarisi this milik cetakHobi!
      console.log(`${this.nama} menyukai ${h}`);
    });
  }
};

peserta.cetakHobi();
// Output:
// "Rayhan menyukai Ngoding"
// "Rayhan menyukai Bulu Tangkis"
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) dan cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Jangan pernah gunakan Arrow Function sebagai **method utama** sebuah objek.
- Selalu gunakan Arrow Function untuk **fungsi pembantu / callback di dalam method** agar `this` tetap terjaga.
