document.getElementById("formSuntik").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch("proses.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("status").innerText = data;
    form.reset();
    loadRiwayat();
  });
});

function loadRiwayat() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("riwayat");
      list.innerHTML = "";
      data.reverse().forEach(item => {
        const li = document.createElement("li");
        li.innerText = `@${item.username} → ${item.jumlah} followers`;
        list.appendChild(li);
      });
    });
}

loadRiwayat();
