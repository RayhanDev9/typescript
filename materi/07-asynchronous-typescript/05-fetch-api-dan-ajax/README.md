# 05 · Fetch API & AJAX Modern

## 🎯 Tujuan Belajar
- Memahami konsep **AJAX** (*Asynchronous JavaScript and XML*) dan bagaimana aplikasi web berkomunikasi dengan server internet.
- Menggunakan fungsi bawaan modern **`fetch()`** untuk melakukan permintaan HTTP (*HTTP Request*).
- Memahami siklus 2 tahap pembacaan respon: dari `Response Stream` ➡️ ke data `JSON`.
- Mendefinisikan **TypeScript Interface** untuk menjamin tipe data respon API aman dan memiliki *auto-complete*.

---

## 🧠 Analogi Dunia Nyata: "Pelayan Restoran Mengambil Makanan dari Dapur"
Bayangkan Anda duduk di restoran (Aplikasi Frontend Anda):
- **Server API Internet** adalah **Dapur Restoran**. Dapur menyimpan semua data bahan makanan.
- **Fungsi `fetch()`** adalah **Pelayan Restoran**.
- Anda meminta pelayan: *"Tolong ambilkan data menu hari ini dari dapur"* (`fetch("https://api.restoran.com/menu")`).
- Pelayan berjalan ke dapur tanpa membuat Anda pingsan kelaparan (asinkron).
- Pelayan kembali membawakan nampan bertutup (**`Response`**).
- Anda membuka tutup nampan dan menyantap makanannya dalam bentuk yang bisa dimakan (**`response.json()`**).

---

## 📘 Konsep Dasar

### 1. Apa itu AJAX & REST API?
Dahulu kala, setiap kali kita meminta data baru dari server, seluruh halaman web harus di-refresh dari awal.  
Dengan **AJAX**, aplikasi kita bisa meminta data berupa teks murni (biasanya berformat **JSON**) di latar belakang, lalu memperbarui tampilan secara dinamis tanpa me-refresh halaman!

---

### 2. Anatomi Pemanggilan `fetch()`
Fungsi `fetch()` membutuhkan 2 tahap Promise berturut-turut:
1. **Tahap 1 (`fetch(url)`)**: Menunggu koneksi server dan menerima *Header* respon HTTP (`Promise<Response>`).
2. **Tahap 2 (`response.json()`)**: Membaca isi data respon dan mengubah teks JSON menjadi objek TypeScript (`Promise<any>`).

```ts
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response: Response) => {
    // Mengubah stream data mentah menjadi objek JSON
    return response.json();
  })
  .then((data) => {
    console.log("Data diterima:", data);
  })
  .catch((error) => {
    console.error("Gagal terhubung ke internet:", error);
  });
```

---

## 🔷 TypeScript Corner: Memberikan Tipe Data pada Respon API

Secara bawaan, method `response.json()` menghasilkan tipe `Promise<any>` karena TypeScript tidak bisa menebak apa yang dikirimkan oleh server luar.

Praktik terbaik di TypeScript adalah **membuat interface** yang cocok dengan respon API, lalu melakukan *type casting* atau *typing annotation*:

```ts
// 1. Definisikan bentuk data yang diharapkan dari API
interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 2. Beri tahu TypeScript tipe data hasil parse JSON
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res: Response) => res.json())
  .then((todo: TodoItem) => {
    // Sekarang kita mendapatkan auto-complete TypeScript yang lengkap!
    console.log("Judul Tugas:", todo.title);
    console.log("Status Selesai:", todo.completed ? "Sudah" : "Belum");
  });
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Lupa memanggil `.json()`**:
   ```ts
   // ❌ SALAH: Langsung mencoba membaca data dari response
   fetch(url).then(res => console.log(res.title)); // undefined! (res adalah objek Response)

   // ✅ BENAR: Harus diurai dulu dengan res.json()
   fetch(url).then(res => res.json()).then(data => console.log(data.title));
   ```

2. **Lupa bahwa `res.json()` juga mengembalikan Promise**:
   Jangan menulis `const data = res.json()` secara langsung, melainkan harus di-`return` ke `.then()` berikutnya atau menggunakan `await`.

---

## 📌 Ringkasan
- `fetch()` adalah standar web dan Node.js modern untuk komunikasi HTTP.
- Membaca data API butuh 2 langkah: `fetch(url)` ➡️ `response.json()`.
- Selalu buat **TypeScript Interface** untuk memodelkan data yang diterima dari API agar kode Anda terhindar dari salah ketik nama properti (*typo*).
