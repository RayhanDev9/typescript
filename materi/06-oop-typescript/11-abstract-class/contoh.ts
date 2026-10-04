// ============================================================
// 11 · Abstract Class & Method — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/11-abstract-class/contoh.ts
// ============================================================

// 1. Abstract Class: Sistem Notifikasi
abstract class SaluranNotifikasi {
  constructor(
    public namaSaluran: string,
    public statusAktif: boolean = true
  ) {}

  // Abstract Method: Setiap saluran punya cara kirim berbeda
  abstract kirimPesan(penerima: string, pesan: string): boolean;

  // Concrete Method: Logging seragam untuk semua saluran
  public logNotifikasi(penerima: string, pesan: string): void {
    console.log(`[LOG ${new Date().toLocaleTimeString()}] Menghubungi ${penerima} via ${this.namaSaluran}...`);
    const sukses = this.kirimPesan(penerima, pesan);
    console.log(`Status pengiriman: ${sukses ? "BERHASIL ✅" : "GAGAL ❌"}`);
  }
}

// 2. Class Turunan: Email
class NotifikasiEmail extends SaluranNotifikasi {
  constructor(public smtpServer: string) {
    super("Email");
  }

  public kirimPesan(penerima: string, pesan: string): boolean {
    console.log(`-> Mengirim email ke ${penerima} melalui server ${this.smtpServer}: "${pesan}"`);
    return penerima.includes("@");
  }
}

// 3. Class Turunan: WhatsApp
class NotifikasiWhatsApp extends SaluranNotifikasi {
  constructor(public apiKey: string) {
    super("WhatsApp");
  }

  public kirimPesan(penerima: string, pesan: string): boolean {
    console.log(`-> Mengirim WA Gateway ke nomor ${penerima}: "${pesan}"`);
    return penerima.startsWith("08") || penerima.startsWith("+62");
  }
}

console.log("=== PENGUJIAN ABSTRACT CLASS & METHOD ===");
const emailService = new NotifikasiEmail("smtp.gmail.com");
const waService = new NotifikasiWhatsApp("WA-KEY-999");

emailService.logNotifikasi("rayhan@example.com", "Kode OTP Anda: 849201");
console.log("-----------------------------------------");
waService.logNotifikasi("081234567890", "Pesanan Anda sedang dalam perjalanan!");
