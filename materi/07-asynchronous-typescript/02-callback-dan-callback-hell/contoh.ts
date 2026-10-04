// ============================================================
// 02 · Callback & Callback Hell — Contoh
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/02-callback-dan-callback-hell/contoh.ts
// ============================================================

// 1. Tipe Callback Error-First di TypeScript
type CallbackBank<T> = (error: Error | null, data?: T) => void;

// 2. Fungsi-fungsi Asinkron Bersimulasi
function loginPengguna(username: string, callback: CallbackBank<{ userId: number }>): void {
  setTimeout(() => {
    if (username === "admin") {
      callback(null, { userId: 101 });
    } else {
      callback(new Error("Username tidak terdaftar!"));
    }
  }, 300);
}

function cekSaldo(userId: number, callback: CallbackBank<number>): void {
  setTimeout(() => {
    console.log(`Mengambil saldo untuk User ID: ${userId}...`);
    callback(null, 5000000); // Saldo Rp 5.000.000
  }, 300);
}

function lakukanTransfer(jumlah: number, callback: CallbackBank<string>): void {
  setTimeout(() => {
    if (jumlah <= 5000000) {
      callback(null, `Transfer Rp ${jumlah.toLocaleString("id-ID")} BERHASIL!`);
    } else {
      callback(new Error("Saldo tidak mencukupi!"));
    }
  }, 300);
}

// 3. Demonstrasi Callback Hell (Sarang Berlapis)
console.log("=== Memulai Transaksi Bank (Pola Callback) ===");

loginPengguna("admin", (errLogin, dataUser) => {
  if (errLogin) {
    console.error("Gagal Login:", errLogin.message);
    return;
  }

  // Lapisan 2 di dalam Lapisan 1
  cekSaldo(dataUser!.userId, (errSaldo, saldo) => {
    if (errSaldo) {
      console.error("Gagal Cek Saldo:", errSaldo.message);
      return;
    }

    console.log("Saldo Anda saat ini: Rp", saldo?.toLocaleString("id-ID"));

    // Lapisan 3 di dalam Lapisan 2
    lakukanTransfer(1500000, (errTransfer, bukti) => {
      if (errTransfer) {
        console.error("Gagal Transfer:", errTransfer.message);
        return;
      }

      console.log("Hasil Akhir:", bukti);
    });
  });
});

export {};
