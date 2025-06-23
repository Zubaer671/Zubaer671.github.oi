const produkList = [
  {
    nama: "nomor kosong Kindatie",
    tentang: "Hai! Saya memakai WhatsApp.",
    harga: "Rp5rb.000"
  }
];

const produkList = [
  {
    nama: "nomor kosong Kindatie",
    tentang: "Hai! Saya memakai WhatsApp.",
    harga: "Rp5rb.000"
  }
];

const produkList = [
  {
    nama: "nomor kosong Kindatie",
    tentang: "Hai! Saya memakai WhatsApp.",
    harga: "Rp5rb.000"
  }
];

const produkList = [
  {
    nama: "nomor kosong Kindatie",
    tentang: "Hai! Saya memakai WhatsApp.",
    harga: "Rp5rb.000"
  }
];

const produkList = [
  {
    nama: "nomor kosong Kindatie",
    tentang: "Hai! Saya memakai WhatsApp.",
    harga: "Rp5rb.000"
  }
];


const container = document.getElementById("produkList");

produkList.forEach((produk, index) => {
  const card = document.createElement("div");
  card.className = "produk-card";
  card.innerHTML = `
    <img src="https://files.catbox.moe/47fgc3.jpg"/>
    <p><strong>Nama</strong><br>${produk.nama}</p>
    <p><strong>Tentang</strong><br>${produk.tentang}</p>
    <p><strong>nomor kosong</strong><br>${produk.harga}</p>
    <button class="beli-btn" onclick="beliProduk(${index})">Beli Sekarang</button>
  `;
  container.appendChild(card);
});

function beliProduk(index) {
  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const produk = produkList[index];

  if (!nama || !wa) {
    alert("Harap isi nama dan nomor WhatsApp terlebih dahulu!");
    return;
  }

  const linkWA = `https://wa.me/6281770775840${wa}?text=Halo%20saya%20${nama},%20saya%20mau%20beli%20${produk.nama}%20(${produk.harga})`;
  window.open(linkWA, "_blank");
}