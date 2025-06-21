function generateQR() {
  const input = document.getElementById("qr-input").value;
  const result = document.getElementById("qr-result");
  result.innerHTML = "";

  if (!input) {
    alert("Tolong masukkan teks atau URL terlebih dahulu.");
    return;
  }

  QRCode.toCanvas(document.createElement("canvas"), input, function (error, canvas) {
    if (error) console.error(error);
    else result.appendChild(canvas);
  });
}
