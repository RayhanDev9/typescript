// ============================================================================
// 01 · Apa itu DOM & Pohon DOM (DOM Tree)
// CONTOH: Mengakses objek dokumen & memeriksa struktur DOM di TypeScript
// ============================================================================

// 1. Memeriksa Objek Global 'document'
// Di TypeScript, 'document' bertipe Document (disediakan oleh library DOM bawaan).
console.log("=== 1. Objek Dokumen ===");
console.log("Judul Dokumen:", document.title);
console.log("URL Halaman  :", document.URL);
console.log("Tipe Dokumen :", document.doctype?.name);

// 2. Mengakses Elemen Akar (Root Elements)
const bodyElement: HTMLBodyElement = document.body as HTMLBodyElement;
const headElement: HTMLHeadElement = document.head;

console.log("\n=== 2. Elemen Akar ===");
console.log("Nama Tag Body:", bodyElement.tagName);
console.log("Jumlah Anak di dalam Body:", bodyElement.children.length);

// 3. Memahami Perbedaan Node dan Element
// Element adalah Node khusus yang berupa tag HTML (<p>, <div>, dll.).
// Text, komentar, dan spasi kosong di HTML juga merupakan Node (Text Node).
console.log("\n=== 3. Anak-anak dari Body (Node vs Element) ===");
console.log("Total Element Nodes (Hanya tag HTML):", bodyElement.children.length);
console.log("Total Child Nodes (Termasuk spasi/enter):", bodyElement.childNodes.length);

// 4. Membaca dan Menampilkan Informasi ke Layar
const outputPre = document.getElementById("output-info");

if (outputPre !== null) {
  // Menampilkan ringkasan pohon DOM ke dalam kotak <pre>
  const infoRingkasan: string = `
Informasi Pohon DOM:
-----------------------------
• document.title       : ${document.title}
• document.contentType : ${document.contentType}
• document.body.tag    : <${bodyElement.tagName.toLowerCase()}>
• Total Anak Elemen    : ${bodyElement.children.length} elemen HTML
• Status Siap (Ready)  : ${document.readyState}
-----------------------------
Pohon DOM berhasil dihubungkan ke TypeScript!
  `.trim();

  outputPre.textContent = infoRingkasan;
}

// 5. Mengubah Judul Tab Browser Secara Dinamis
document.title = "✨ DOM Berhasil Dimuat - TypeScript";
console.log("Judul tab browser telah diperbarui menjadi:", document.title);

export {};
