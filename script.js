const apiKey = '108696417505529782473708OKCTA2B431DA848FFF6CBEC1457C6971D1B1'; // ← Ganti dengan API key kamu
const qrImg = document.getElementById('https://files.catbox.moe/7yn7rk.jpg');

function fetchQR() {
  const timestamp = new Date().getTime(); // Supaya tidak cache
  qrImg.src = `https://okeconnect.biz/api/qr?api_key=${apiKey}&t=${timestamp}`;
}

// Set waktu awal (20 menit = 1200 detik)
let totalSeconds = 20 * 60;

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Format: dua digit (misal 02:07)
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Tampilkan di elemen HTML
  document.getElementById("timer").textContent = formattedTime;

  // Kurangi detik jika belum habis
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "Selesai!";
  }
}

// Jalankan setiap 1 detik
const timerInterval = setInterval(updateTimer, 1000);

// Jalankan sekali agar muncul waktu awal
updateTimer();

