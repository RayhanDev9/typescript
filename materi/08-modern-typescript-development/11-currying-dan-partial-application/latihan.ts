// ============================================================================
// 11 · Currying & Partial Application — Latihan
// Jalankan: npx ts-node materi/08-modern-typescript-development/11-currying-dan-partial-application/latihan.ts
// ============================================================================

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi currying `hitungPromoBelanja`:
 *    - Parameter 1: `potonganKupon: number` (nominal rupiah potongan, misal 20000)
 *    - Parameter 2: `persenDiskon: number` (desimal diskon, misal 0.1 untuk 10%)
 *    - Parameter 3: `hargaAwal: number` (harga barang asli)
 *    - Rumus: (hargaAwal - potonganKupon) * (1 - persenDiskon)
 *    - Catatan: Jika hasil negatif, kembalikan 0 (gunakan Math.max(0, hasil)).
 *
 * 2. Lakukan Partial Application:
 *    - Buat fungsi khusus `promoMemberSpesial` yang mengunci:
 *      potonganKupon = 50000 dan persenDiskon = 0.2 (20%).
 *
 * 3. Uji fungsi `promoMemberSpesial` dengan barang seharga:
 *    - Rp 500.000
 *    - Rp 40.000 (harus menghasilkan Rp 0 karena potongan kupon melebihi harga barang).
 */

// Tulis kode currying dan partial application Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Promo 500k:", promoMemberSpesial(500000));
// console.log("Promo 40k :", promoMemberSpesial(40000));
