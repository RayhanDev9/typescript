# 04 · Membaca & Mengubah Konten Teks serta HTML

## 🎯 Tujuan Belajar
- Memahami perbedaan antara **`.textContent`**, **`.innerText`**, dan **`.innerHTML`**.
- Mengetahui kapan harus menggunakan `.textContent` vs `.innerHTML`.
- Memahami bahaya celah keamanan **XSS (Cross-Site Scripting)** saat menyisipkan input pengguna ke `.innerHTML`.
- Menggunakan properti ini secara aman dengan TypeScript.

---

## 🧠 Analogi Dunia Nyata: "Surat Biasa vs Surat dengan Format Khusus"
Bayangkan Anda ingin mengirim pesan kepada teman:
- **`.textContent`** adalah seperti menulis teks di atas secarik kertas polos. Apapun yang Anda tulis, termasuk simbol `<`, `>`, atau kata `<h1>`, akan dianggap sebagai **tulisan teks biasa**, bukan kode komputer.
- **`.innerHTML`** adalah seperti menyerahkan sebuah piringan hitam atau kaset instruksi teater. Jika Anda menulis `<strong>Penting!</strong>`, browser tidak akan menampilkan tulisan `<strong>`, melainkan akan **merender kata tersebut menjadi tebal**!

---

## 📘 Konsep Dasar

### 1. `.textContent` (Teks Murni - Sangat Disarankan)
Mengambil atau mengganti seluruh konten teks dari sebuah elemen dan anak-anaknya.

```ts
const judul = document.querySelector<HTMLHeadingElement>("h1")!;

// Membaca teks
console.log(judul.textContent);

// Mengubah teks
judul.textContent = "Belajar TypeScript DOM itu Menyenangkan!";
```

> 🔒 **Keamanan**: `.textContent` 100% aman dari injeksi kode karena browser otomatis memperlakukan input sebagai karakter string murni.

---

### 2. `.innerText` (Teks yang Tampak di Layar)
Mirip dengan `.textContent`, namun `.innerText` **memperhitungkan gaya tampilan CSS**:
- Jika ada teks yang disembunyikan menggunakan CSS (`display: none`), `.innerText` **tidak akan membacanya**, sedangkan `.textContent` tetap membacanya.
- Namun, `.innerText` lebih lambat karena memaksa browser menghitung ulang tampilan (*layout reflow*).

---

### 3. `.innerHTML` (Konten Berisi Tag HTML)
Digunakan jika Anda ingin menyisipkan elemen HTML baru secara instan:

```ts
const kontainer = document.querySelector<HTMLDivElement>("#daftar")!;

// Menyisipkan tag HTML
kontainer.innerHTML = `
  <div class="kartu">
    <h3>Produk Unggulan</h3>
    <p>Harga: <strong>Rp 50.000</strong></p>
  </div>
`;
```

---

## ⚠️ Peringatan Keamanan: Bahaya XSS (*Cross-Site Scripting*)

Jangan pernah memasukkan input pengguna langsung ke `.innerHTML`!

```ts
// ❌ BAHAYA BESAR: Serangan XSS
const inputPengguna = "<img src='x' onerror='alert(\"Akun Anda dibobol!\")'>";
kotakPesan.innerHTML = inputPengguna; // Script jahat akan dieksekusi browser!

// ✅ AMAN: Gunakan textContent untuk teks dari pengguna
kotakPesan.textContent = inputPengguna; // Muncul sebagai teks biasa tanpa dieksekusi
```

---

## 📌 Ringkasan
- Gunakan **`.textContent`** sebagai pilihan utama untuk membaca dan mengubah teks biasa.
- Gunakan **`.innerHTML`** hanya jika Anda perlu membuat tag/elemen HTML dari string template yang Anda kontrol sendiri (bukan dari ketikan bebas pengguna).
- Waspadai serangan **XSS** jika menyisipkan data dinamis ke `.innerHTML`.
