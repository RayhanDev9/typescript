# 02 · Callback & Callback Hell (Pyramid of Doom)

## 🎯 Tujuan Belajar
- Memahami peran **Callback Function** dalam menangani hasil operasi asinkron.
- Memahami pola standar **Error-First Callback** yang populer di ekosistem Node.js.
- Mengetahui mengapa callback bertingkat menghasilkan masalah besar bernama **Callback Hell** (*Pyramid of Doom*).
- Mengetahui kelemahan callback bertingkat dalam hal keterbacaan kode (*readability*) dan penanganan error (*error handling*).

---

## 🧠 Analogi Dunia Nyata: "Boneka Matryoshka / Kotak di Dalam Kotak"
Bayangkan Anda memesan paket belanja:
- Anda baru bisa membuka kardus 2 setelah kurir mengantar kardus 1.
- Di dalam kardus 2 ada gembok yang kuncinya ada di kardus 3.
- Di dalam kardus 3 ada amplop yang isinya ada di kardus 4.
- Jika ada satu saja kardus yang hilang di jalan, Anda harus mengecek error di setiap lapis kardus satu per satu!
- Struktur kode yang bersarang lapis-demi-lapis ke dalam ini sangat melelahkan dan membingungkan untuk dibaca.

---

## 📘 Konsep Dasar

### 1. Apa itu Asynchronous Callback?
Callback adalah fungsi yang kita titipkan ke fungsi lain untuk dipanggil kembali (*called back*) ketika tugas asinkron selesai:

```ts
function ambilDataPengguna(id: number, callback: (nama: string) => void): void {
  setTimeout(() => {
    callback("Rayhan Pratama");
  }, 1000);
}

ambilDataPengguna(1, (namaPengguna) => {
  console.log(`Halo, selamat datang ${namaPengguna}!`);
});
```

---

### 2. Bahaya Nyata: Callback Hell (*Pyramid of Doom*)
Bayangkan sebuah skenario nyata di mana kita harus menjalankan 3 tugas berurutan:
1. Ambil data pengguna dari database.
2. Berdasarkan ID pengguna, ambil daftar pesanan belanjaannya.
3. Berdasarkan ID pesanan, proses pembayarannya.

Jika menggunakan callback, kodenya akan berbentuk segitiga menjorok ke kanan (*Pyramid of Doom*):

```ts
// ❌ CONTOH CALLBACK HELL (Sulit dibaca dan dirawat!)
ambilPengguna(1, (errUser, user) => {
  if (errUser) return console.error(errUser);

  ambilPesanan(user.id, (errPesanan, pesanan) => {
    if (errPesanan) return console.error(errPesanan);

    prosesPembayaran(pesanan[0].id, (errBayar, buktiBayar) => {
      if (errBayar) return console.error(errBayar);

      kirimNotifikasiWhatsApp(buktiBayar, (errWa, status) => {
        if (errWa) return console.error(errWa);
        console.log("Semua proses selesai!");
      });
    });
  });
});
```

### Mengapa Callback Hell Sangat Buruk?
1. **Sulit Dibaca**: Arah alur kode tidak lagi dari atas ke bawah, melainkan berbelok miring ke kanan dalam.
2. **Penanganan Error Repetitif**: Kita terpaksa menulis `if (err)` di setiap tingkatan sarang.
3. **Sulit Di-refactor**: Memindahkan satu langkah atau menambah langkah baru sangat rawan merusak kurung kurawal penutup.

---

## 🔷 TypeScript Corner: Tipe Data Error-First Callback

Di TypeScript, kita bisa mendefinisikan tipe fungsi callback secara ketat menggunakan type alias:

```ts
type CallbackHasil<T> = (error: Error | null, data?: T) => void;

function bacaFileSimulasi(namaFile: string, selesai: CallbackHasil<string>): void {
  setTimeout(() => {
    if (namaFile === "") {
      selesai(new Error("Nama file tidak boleh kosong!"));
    } else {
      selesai(null, "Isi dokumen rahasia...");
    }
  }, 500);
}
```

---

## 📌 Ringkasan
- Callback adalah cara tradisional tertua menangani proses asinkron.
- Pola *Error-First Callback* menempatkan parameter error di posisi pertama: `(error, data) => void`.
- Ketergantungan antar operasi asinkron dengan callback menyebabkan **Callback Hell** yang tidak efisien dan rawan bug.
- Di materi berikutnya, kita akan mempelajari penyelamat dari masalah ini: **Promise**!
