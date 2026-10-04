# 07 · Menangani Event Pengguna (Event Handling Dasar)

## 🎯 Tujuan Belajar
- Memahami konsep **Event** sebagai jembatan interaksi antara pengguna dan aplikasi web.
- Menggunakan method modern **`addEventListener`** untuk mendengarkan aksi klik mouse dan aksi kursor.
- Mengetahui cara melepas event listener menggunakan **`removeEventListener`**.
- Memahami tipe data callback event di TypeScript (`(event: MouseEvent) => void`).
- Menghindari praktik buruk atribut event inline pada HTML (`onclick="..."`).

---

## 🧠 Analogi Dunia Nyata: "Bel Pintu dan Tombol Alarm"
Bayangkan Anda memasang bel pintu di rumah:
- **Elemen HTML (`<button>`)** adalah tombol bel fisik yang menempel di pagar.
- **Event (`"click"`)** adalah tindakan saat tamu menekan tombol tersebut dengan jarinya.
- **Event Listener / Handler** adalah kabel dan lonceng di dalam rumah. Ia selalu standby menunggu sinyal (*listening*). Begitu tombol ditekan, lonceng berdering dan Anda membukakan pintu.
- Jika suatu hari Anda pergi berlibur, Anda bisa mencabut kabel lonceng tersebut (**`removeEventListener`**) agar dering tidak berbunyi.

---

## 📘 Konsep Dasar

### 1. `element.addEventListener(tipe, fungsi)`
Sintaks standar untuk mendengarkan event:

```ts
const tombol = document.querySelector<HTMLButtonElement>("#btn-klik")!;

// 1. Menggunakan Arrow Function Langsung (Anonymous Function)
tombol.addEventListener("click", () => {
  console.log("Tombol berhasil diklik!");
});
```

---

### 2. Tipe-Tipe Event Mouse yang Populer:
| Nama Event | Waktu Terpicu | Contoh Kasus |
| :--- | :--- | :--- |
| `"click"` | Pengguna menekan lalu melepas tombol mouse | Tombol simpan, buka menu |
| `"dblclick"` | Pengguna klik 2x dengan cepat | Membuka folder/file |
| `"mouseenter"` | Kursor mouse masuk ke area elemen | Efek highlight / preview tooltip |
| `"mouseleave"` | Kursor mouse keluar dari area elemen | Menyembunyikan tooltip |

---

### 3. Melepas Listener dengan `removeEventListener`
Jika Anda memasang fungsi anonim (`() => {}`), Anda **tidak bisa** melepasnya nanti karena fungsinya tidak memiliki nama referensi di memori.

Gunakan fungsi bernama (*named function*) jika event tersebut perlu dilepas sewaktu-waktu:

```ts
// 1. Definisikan fungsi handler terpisah
function tanganiKlik() {
  console.log("Aksi klik diproses!");
}

// 2. Pasang listener
tombol.addEventListener("click", tanganiKlik);

// 3. Lepas listener saat sudah tidak diperlukan (misal setelah 1 kali pakai)
tombol.removeEventListener("click", tanganiKlik);
```

---

## 🔷 TypeScript Corner: Tipe Parameter `MouseEvent`

Di TypeScript, callback event menerima sebuah argumen objek event. Untuk event mouse, tipenya adalah `MouseEvent`:

```ts
tombol.addEventListener("click", (event: MouseEvent) => {
  console.log("Posisi kursor X:", event.clientX);
  console.log("Posisi kursor Y:", event.clientY);
  console.log("Tombol mouse yang ditekan:", event.button); // 0 = Klik kiri
});
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Memanggil fungsi dengan tanda kurung `()` saat memasang listener**:
   ```ts
   function salam() {
     console.log("Halo!");
   }

   // ❌ SALAH: salam() akan langsung dieksekusi saat halaman pertama dimuat, BUKAN saat diklik!
   tombol.addEventListener("click", salam());

   // ✅ BENAR: Berikan nama fungsinya saja sebagai referensi
   tombol.addEventListener("click", salam);
   ```

2. **Menggunakan atribut `onclick` di dalam tag HTML**:
   Hindari `<button onclick="proses()">`. Selalu pisahkan struktur HTML dan logika interaksi di file TypeScript menggunakan `addEventListener`.

---

## 📌 Ringkasan
- `element.addEventListener('namaEvent', handler)` adalah cara standar dan modern menangani interaksi web.
- Selalu berikan nama fungsi (bukan fungsi anonim) jika event tersebut perlu dicabut dengan `removeEventListener`.
- Jangan menulis tanda kurung `()` pada nama fungsi di `addEventListener`.
