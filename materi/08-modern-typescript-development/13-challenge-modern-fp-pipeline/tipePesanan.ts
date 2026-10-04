// ============================================================
// 13 · Challenge: Modern FP Data Pipeline — Tipe Data Pesanan
// Jalankan: npm run materi -- materi/08-modern-typescript-development/13-challenge-modern-fp-pipeline/tipePesanan.ts
// ============================================================

export interface ItemPesanan {
  readonly nama: string;
  readonly harga: number;
  readonly jumlah: number;
  readonly tersedia: boolean;
}

export interface Pesanan {
  readonly id: string;
  readonly namaPelanggan: string;
  readonly item: readonly ItemPesanan[];
  readonly wilayah: "domestik" | "internasional";
}

export interface LaporanTransaksi {
  readonly idPesanan: string;
  readonly pelanggan: string;
  readonly jumlahItemValid: number;
  readonly subtotal: number;
  readonly potonganDiskon: number;
  readonly pajak: number;
  readonly ongkosKirim: number;
  readonly totalTagihan: number;
}
