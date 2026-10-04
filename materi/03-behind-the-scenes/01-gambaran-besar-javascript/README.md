# 01 · Gambaran Besar JavaScript & TypeScript

## 🎯 Tujuan Belajar
- Memahami 9 karakteristik inti bahasa **JavaScript**
- Mengetahui apa itu **High-Level Language**, **Garbage Collection**, dan **JIT Compilation**
- Memahami konsep **Single-Threaded** dan **Non-Blocking I/O**
- Memahami posisi **TypeScript** sebagai *superset* dari JavaScript

---

## 🌐 9 Karakteristik Inti JavaScript

```mermaid
mindmap
  root((JavaScript))
    High-Level
      (Manajemen memori otomatis via Garbage Collector)
    Garbage-Collected
      (Membersihkan data tak terpakai dari RAM)
    JIT Compiled
      (Just-In-Time: kompilasi cepat ke kode mesin saat berjalan)
    Multi-Paradigma
      (Prosedural, OOP, Fungsional)
    Prototype-Based OOP
      (Pewarisan sifat berbasis prototype)
    First-Class Functions
      (Fungsi diperlakukan sebagai nilai biasa)
    Dynamic Typing
      (Tipe dicek saat runtime)
    Single-Threaded
      (Hanya 1 tugas dalam satu waktu di Call Stack)
    Non-Blocking Event Loop
      (Menjalankan tugas berat di background)
```

---

## 🔷 Di Mana Posisi TypeScript?

JavaScript dirancang dengan tipe dinamis (*dynamic typing*), artinya tipe data baru diperiksa saat program sedang berjalan di hadapan pengguna.

**TypeScript hadir sebagai lapisan pelindung (*Superset*)**:

```mermaid
flowchart LR
    subgraph TypeScript ["TypeScript (Waktu Mengetik / Kompilasi)"]
        A["Static Type Checking"]
        B["Autocompletion & Refactoring"]
        C["Deteksi Bug Lebih Awal"]
    end

    subgraph JavaScript ["JavaScript (Waktu Runtime di Browser / Node)"]
        D["JavaScript Engine (V8)"]
        E["Call Stack & Heap"]
    end

    TypeScript -->|"Kompilasi (tsc)"| JavaScript
```

TypeScript **tidak berjalan langsung** di mesin JavaScript. TypeScript diubah (*transpile*) menjadi JavaScript murni yang bersih.

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) dan cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- JavaScript adalah bahasa *high-level*, *single-threaded*, dan *multi-paradigma* dengan manajemen memori otomatis.
- TypeScript menambahkan *static typing* dan pemeriksaan kode di waktu penulisan, yang kemudian dikompilasi menjadi JavaScript standar.
