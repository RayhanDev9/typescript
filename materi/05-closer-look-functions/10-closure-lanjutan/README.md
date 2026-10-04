# 10 · Contoh Closure Lanjutan

## 🎯 Tujuan Belajar
- Memahami bagaimana **Closure bekerja pada proses asynchronous** (seperti `setTimeout`).
- Menggunakan Closure untuk membuat **Private State (Data Tersembunyi)** pada sebuah objek tanpa menggunakan keyword class.
- Memahami hubungan antara enkapsulasi berbasis Closure dengan access modifier `private` yang akan kita pelajari di **Modul 06 (OOP)**.

---

## 🧠 Analogi: Brankas Rahasia dengan Lubang Setoran

- Variabel `saldo` berada di dalam brankas tertutup (lingkungan lokal fungsi induk).
- Dari luar, tidak ada orang yang bisa menyentuh uang di dalam brankas secara langsung.
- Fungsi induk hanya memberikan dua tombol keluar: Tombol **Cek Saldo** dan Tombol **Setor Uang** (kedua method ini memiliki Closure ke brankas tersebut).

---

## 📘 Konsep Dasar

### 1. Closure pada Timer / Asynchronous

Closure memastikan fungsi callback timer tetap mengingat variabel lokal meskipun fungsi induknya sudah selesai berabad-abad lalu:

```ts
function pesanPenerbangan(jumlahPenumpang: number, tungguDetik: number): void {
  const perGrup = jumlahPenumpang / 3;

  // Callback timer ini akan dijalankan di masa depan
  setTimeout(() => {
    console.log(`Pemberitahuan: Kami menerbangkan ${jumlahPenumpang} penumpang.`);
    console.log(`Terdapat 3 grup, masing-masing ${perGrup} orang.`);
  }, tungguDetik * 1000);

  console.log(`Pemesanan sedang diproses... Tunggu ${tungguDetik} detik.`);
}

pesanPenerbangan(180, 2);
```

---

### 2. Enkapsulasi Data Privat (Module Pattern / Factory)

Sebelum ada class dengan `#private`, developer menggunakan closure untuk membuat properti yang benar-benar privat dan tidak bisa diubah sembarangan dari luar:

```ts
function buatDompet(saldoAwal: number) {
  let saldo = saldoAwal; // Privat, tidak bisa diakses langsung via dompet.saldo!

  return {
    getSaldo(): number {
      return saldo;
    },
    setor(nominal: number): void {
      if (nominal > 0) {
        saldo += nominal;
        console.log(`Setor Rp${nominal.toLocaleString("id-ID")}. Saldo: Rp${saldo.toLocaleString("id-ID")}`);
      }
    },
    tarik(nominal: number): boolean {
      if (nominal <= saldo) {
        saldo -= nominal;
        console.log(`Tarik Rp${nominal.toLocaleString("id-ID")}. Sisa: Rp${saldo.toLocaleString("id-ID")}`);
        return true;
      }
      console.log("Saldo tidak mencukupi!");
      return false;
    },
  };
}

const dompet = buatDompet(500000);
dompet.setor(200000);
dompet.tarik(100000);
console.log("Saldo akhir:", dompet.getSaldo()); // 600000
// dompet.saldo // undefined! Data aman dari manipulasi luar.
```

---

## 🔷 Jembatan ke Modul 06 (OOP)

Pola penyimpanan state privat lewat Closure ini adalah fondasi konseptual yang sama yang diterapkan di dalam sistem **Class & Object-Oriented Programming (OOP)**. Di Modul 06, kita akan melihat bagaimana TypeScript dan JavaScript modern menyediakan keyword `private` dan `#private` untuk mencapai hasil yang sama dengan sintaks class yang lebih terstruktur.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/10-closure-lanjutan/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Callback `setTimeout` dan event listener mempertahankan akses variabel via Closure.
- Objek yang dikembalikan dari fungsi dapat membungkus state privat yang terlindungi.
