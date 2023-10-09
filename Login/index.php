<?php
include("conexao.php");
if(isset($_POST['email']) || isset($_POST['senha'])){
    $email  = $mysqli->real_escape_string($_POST['email']);
    $senha  = $mysqli->real_escape_string($_POST['senha']);
    $sql_code   =   "SELECT * FROM users WHERE email='$email' AND senha='$senha'";
    $sql_query  =   $mysqli->query($sql_code) or die("Falha na execução do código SQL: ".$mysqli->error);
    $qtd = $sql_query->num_rows;
    if($qtd==1){
        $usuario = $sql_query->fetch_assoc();
        if(!isset($_SESSION)){
            session_start();
        }
        $_SESSION['id']     =   $usuario['id'];
        $_SESSION['nome']   =   $usuario['nome'];
        header("Location:http://localhost:5173");
    }else{
        $error="Falha ao loga! E-mail ou senha incorretos!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Login</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="shortcut icon" href="assets/imgs/favicon.png" type="image/x-icon">
  </head>

<body>
   <main>
    <section class="rigth-content">
    <div class="container-rigth">
        <img src="assets/imgs/favicon.png" alt="logo tipo">
        <p class="text-rigth">Academia <span style="color:#d5a353;font-weight:bolder">XHealth</span></p>
    
    </div>
    </section>

    <section class="left-content">
    <form nome="login" action="" method="POST" >
        <p class="left-title">Login</p>
        <span class="input">
        <label for="email" class="labels">E-mail:</label>
        <input type="text" name="email" id="email" class="inputs" placeholder="Arthur@gmail.com"/>
      
        </span>
  
        <span class="input">
        <label for="senha" class="labels">Senha:</label>
        <input type="text" name="senha" id="senha" class="inputs" placeholder="Amorin"/>

        </span>
        <center>
            
        <a href="cadatrar.php">Criar conta</a>
        </center>
        <button type="submit" name="entrar" class="btn" >ENTRAR</button>
    </form>

    </section>
    </main>
    
 </body>

</html>