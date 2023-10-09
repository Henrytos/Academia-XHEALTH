<?php
session_start(); // Inicie a sessão antes de usar $_SESSION

// Verifique se o usuário está autenticado antes de exibir o conteúdo protegido
if (!isset($_SESSION['id']) || !isset($_SESSION['nome'])) {
    header("Location: index.php"); // Redirecione se o usuário não estiver autenticado
    exit(); // Certifique-se de que o script pare de ser executado após o redirecionamento
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel do Usuário</title>
     <link rel="stylesheet" href="assets/css/index.css">
</head>

<body>
   
    <main>
        <img src="./assets/imgs/capivara.jfif" alt="caprivara">
        <h1>Bem-vindo ao Painel, <?php echo $_SESSION['nome']; ?>!</h1>

        <p>Aqui está o conteúdo protegido do seu painel.</p>
       
        <a href="index.php" class="btn btn-outline-danger">Sair</a>
    
    </main>
</body>

</html>
