<?php
$usuario            = "root";
$senha              = "usbw";
$database           = "login";
$host               = "localhost";  // Remova a porta daqui

$mysqli = new mysqli($host, $usuario, $senha, $database);

if ($mysqli->connect_error) {
    die("Falha ao conectar o banco de dados: " . $mysqli->connect_error);
}

?>
