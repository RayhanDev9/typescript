// ============================================================
// 22 · Method Object & this — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/22-method-object-dan-this/contoh.ts
// ============================================================

// --- 1. Definisi Interface dengan Method ---
interface RekeningBank {
  nomorRekening: string;
  namaPemilik: string;
  saldo: number;
  // Method signatures
  setor(jumlah: number): void;
  tarik(jumlah: number): boolean;
  cekSaldo(): string;
}

// --- 2. Implementasi Objek ---
const rekeningRayhan: RekeningBank = {
  nomorRekening: "123-456-789",
  namaPemilik: "Rayhan Pratama",
  saldo: 1000000,

  setor(jumlah) {
    this.saldo += jumlah;
    console.log(`[SETOR] Berhasil setor Rp ${jumlah.toLocaleString("id-ID")}`);
  },

  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log("[TARIK] Gagal! Saldo tidak mencukupi.");
      return false;
    }
    this.saldo -= jumlah;
    console.log(`[TARIK] Berhasil tarik Rp ${jumlah.toLocaleString("id-ID")}`);
    return true;
  },

  cekSaldo() {
    return `Rekening ${this.nomorRekening} atas nama ${this.namaPemilik} memiliki saldo Rp ${this.saldo.toLocaleString("id-ID")}`;
  }
};

// --- 3. Memanggil Method ---
console.log(rekeningRayhan.cekSaldo());
rekeningRayhan.setor(500000);
rekeningRayhan.tarik(200000);
rekeningRayhan.tarik(2000000); // Saldo kurang
console.log(rekeningRayhan.cekSaldo());
