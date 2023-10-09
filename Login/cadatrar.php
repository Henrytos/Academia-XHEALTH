<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Verifique se o e-mail já existe no banco de dados
    $email_exists_query = "SELECT id FROM users WHERE email = '$email'";
    $email_exists_result = $mysqli->query($email_exists_query);

    if ($email_exists_result->num_rows > 0) {
        echo "<script>alert('email existente')</script>";
    } else {
        // Se o e-mail não existe, insira o novo registro
        $sql = "INSERT INTO users (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

        if ($mysqli->query($sql) === TRUE) {
            header("Location:index.php");
        } else {
            echo "Erro: " . $sql . "<br>" . $mysqli->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="assets/css/cadastro.css">
    <link rel="shortcut icon" href="assets/imgs/favicon.png" type="image/x-icon">
  </head>

<body>
<main>

    <section class="left-content">
    <form nome="login" action="" method="POST" >
        <p class="left-title">cadastro</p>
        <span class="input">
        <label for="nome" class="labels">Nome:</label>
        <input type="text" name="nome" id="nome" class="inputs" placeholder="Arthur" required/>
        </span>
        <span class="input">
        <label for="email" class="labels">E-mail:</label>
        <input type="email" name="email" id="email" class="inputs" placeholder="Arthur@gmail.com" required/>
        </span>
        <span class="input">
        <label for="senha" class="labels">Senha:</label>
        <input type="password" name="senha" id="senha" class="inputs" placeholder="Amorin" min-length="4" required/>
        </span>
        
        <button type="submit" name="cadastrar" class="btn" >CADASTRAR</button>
    </form>

    </section>
    <section class="rigth-content">
    <div class="container-rigth">
        <img src="assets/imgs/favicon.png" alt="logo tipo">
        <p class="text-rigth">Academia <span style="color:#d5a353;font-weight:bolder">XHealth</span></p>
    
    </div>
    </section>
    </main>
</body>

</html>