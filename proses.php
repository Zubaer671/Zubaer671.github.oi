<?php
$data = json_decode(file_get_contents("data.json"), true) ?? [];

$username = htmlspecialchars($_POST['username']);
$jumlah = intval($_POST['jumlah']);

$baru = [
  "username" => $username,
  "jumlah" => $jumlah,
  "waktu" => date("Y-m-d H:i:s")
];

$data[] = $baru;

file_put_contents("data.json", json_encode($data, JSON_PRETTY_PRINT));

echo "Sukses! Followers akan masuk dalam 5 menit.";
?>
