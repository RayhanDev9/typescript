// ============================================================
// 04 · Membaca & Mengubah Konten — Contoh
// Jalankan: npm run dom (buka materi/02-dom-events-project/04-membaca-mengubah-konten/index.html di browser)
// ============================================================

// 1. Membandingkan textContent vs innerText
const paragraf = document.querySelector<HTMLParagraphElement>("#paragraf-sampel")!;

console.log("=== 1. Perbedaan textContent & innerText ===");
console.log("textContent (Semua teks, termasuk yang tersembunyi):");
console.log(paragraf.textContent);

console.log("\ninnerText (Hanya teks yang tampak secara visual di layar):");
console.log(paragraf.innerText);

// Menampilkan hasil perbandingan ke UI
const outTextContent = document.getElementById("out-textcontent");
const outInnerText = document.getElementById("out-innertext");

if (outTextContent && outInnerText) {
  outTextContent.textContent = `[textContent]: "${paragraf.textContent?.trim()}"`;
  outInnerText.textContent = `[innerText]: "${paragraf.innerText.trim()}"`;
}

// 2. Menggunakan innerHTML untuk Menyisipkan Elemen Berulang Secara Dinamis
interface Produk {
  id: number;
  nama: string;
  harga: number;
}

const daftarProduk: Produk[] = [
  { id: 1, nama: "Keyboard Mechanical RGB", harga: 450000 },
  { id: 2, nama: "Mouse Wireless Ergonomis", harga: 220000 },
  { id: 3, nama: "Mousepad Deskmat XL", harga: 95000 },
];

const kontainerProduk = document.querySelector<HTMLDivElement>("#kontainer-produk")!;

// Membuat template HTML dari array data
let templateHTML: string = "";

for (const p of daftarProduk) {
  templateHTML += `
    <div class="item-produk">
      <h4>${p.nama}</h4>
      <p>Harga: <strong>Rp ${p.harga.toLocaleString("id-ID")}</strong></p>
    </div>
  `;
}

// Menyisipkan template ke dalam DOM menggunakan innerHTML
kontainerProduk.innerHTML = templateHTML;

export {};
