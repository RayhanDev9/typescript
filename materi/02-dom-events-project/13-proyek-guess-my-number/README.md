# Proyek 1: Guess My Number (Game Tebak Angka 1-20)

## 🎮 Tentang Game

**Guess My Number** adalah game tebak angka klasik di mana komputer memilih satu angka rahasia acak antara 1 sampai 20. Pemain harus menebak angka tersebut dengan petunjuk:
- *"Terlalu Tinggi! 📈"* jika tebakan lebih besar dari angka rahasia.
- *"Terlalu Rendah! 📉"* jika tebakan lebih kecil dari angka rahasia.
- *"Tebakan Benar! 🎉"* jika berhasil menebak. Layar akan berubah menjadi hijau dan skor tertinggi (*Highscore*) diperbarui.

Setiap kali tebakan salah, **Skor berkurang 1** dari nilai awal 20. Jika skor mencapai 0, pemain kalah!
Tombol **"Main Lagi! (Again)"** mereset permainan tanpa menghapus Highscore.

---

## 📁 Struktur Folder

```text
01-guess-my-number/
├── starter/        # Kerangka HTML + CSS yang siap digunakan, main.ts berisi TODO
└── final/          # Solusi lengkap yang sudah berfungsi 100%
```

---

## 🕹️ Alur Logika State Game

```mermaid
flowchart TD
    Start["Pemain Klik Tombol 'Cek!'"] --> BacaInput["Baca nilai input .guess"]
    BacaInput --> CekKosong{"Ada input?"}
    CekKosong -->|Tidak| MsgKosong["Pesan: '⛔ Masukkan angka!'"]
    CekKosong -->|Ya| CekBenar{"Tebakan === Angka Rahasia?"}
    
    CekBenar -->|Ya (MENANG)| Win["Pesan: '🎉 Tebakan Benar!'<br/>Background: Hijau (#60b347)<br/>Tampilkan angka rahasia<br/>Update Highscore jika skor > highscore"]
    
    CekBenar -->|Tidak| CekSkor{"Skor > 1?"}
    CekSkor -->|Ya| KurangiSkor["Skor - 1<br/>Tampilkan 'Terlalu Tinggi' / 'Terlalu Rendah'"]
    CekSkor -->|Tidak (KALAH)| GameOver["Skor = 0<br/>Pesan: '💥 Kamu Kalah! Coba lagi.'"]
```

---

## 🚀 Cara Menjalankan

Masuk ke folder `starter/` (untuk latihan) atau `final/` (untuk melihat hasil jadi):

```bash
cd materi/02-dom-events-project/01-guess-my-number/final
npm install
npm run dev
```

Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`) di browser.
