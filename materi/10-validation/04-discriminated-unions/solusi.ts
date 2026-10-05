// ============================================================
// 04 · Discriminated Unions — Solusi
// Jalankan: npm run materi -- materi/10-validation/04-discriminated-unions/solusi.ts
// ============================================================

export interface PembayaranTunai {
  tipe: "tunai";
  jumlahUangDiterima: number;
}

export interface PembayaranKartu {
  tipe: "kartu";
  nomorKartu: string;
  namaBank: string;
}

export interface PembayaranQRIS {
  tipe: "qris";
  idTransaksiQris: string;
  waktuKadaluarsa: string;
}

export type MetodePembayaran = PembayaranTunai | PembayaranKartu | PembayaranQRIS;

export function prosesKwitansi(totalBelanja: number, bayar: MetodePembayaran): string {
  switch (bayar.tipe) {
    case "tunai": {
      const kembalian = bayar.jumlahUangDiterima - totalBelanja;
      return `[TUNAI] Uang Diterima: Rp ${bayar.jumlahUangDiterima.toLocaleString("id-ID")}, Kembalian: Rp ${kembalian.toLocaleString("id-ID")}`;
    }

    case "kartu": {
      const empatDigitTerakhir = bayar.nomorKartu.slice(-4);
      return `[KARTU] Sukses debet ${bayar.namaBank} (Kartu: ****-****-****-${empatDigitTerakhir})`;
    }

    case "qris": {
      return `[QRIS] Pembayaran instan terverifikasi (ID: ${bayar.idTransaksiQris})`;
    }
  }
}

console.log("=== PENGUJIAN SOLUSI DISCRIMINATED UNIONS ===");

const total = 50000;

console.log("1. Kwitansi Tunai :");
console.log("  ", prosesKwitansi(total, { tipe: "tunai", jumlahUangDiterima: 100000 }));

console.log("\n2. Kwitansi Kartu :");
console.log(
  "  ",
  prosesKwitansi(150000, {
    tipe: "kartu",
    nomorKartu: "4532112233445566",
    namaBank: "Bank Mandiri",
  })
);

console.log("\n3. Kwitansi QRIS  :");
console.log(
  "  ",
  prosesKwitansi(75000, {
    tipe: "qris",
    idTransaksiQris: "QRIS-ID-998811",
    waktuKadaluarsa: "15 menit",
  })
);
