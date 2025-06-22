const apiKey = '108696417505529782473708OKCTA2B431DA848FFF6CBEC1457C6971D1B1'; // ← Ganti dengan API key kamu
const qrImg = document.getElementById('qrImage');

function fetchQR() {
  const timestamp = new Date().getTime(); // Supaya tidak cache
  qrImg.src = `https://okeconnect.biz/api/qr?api_key=${apiKey}&t=${timestamp}`;
}

fetchQR(); // Load pertama
setInterval(fetchQR, 30000); // Refresh tiap 30 detik
