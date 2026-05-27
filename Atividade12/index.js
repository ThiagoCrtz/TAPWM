<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Usando eventos no Javascript</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        img {
            cursor: pointer;
        }
    </style>
</head>
<body>
    
    <img src="janelafechada.png" id="janela" 
         onmouseout="fechar(this)" 
         onmouseover="abrir(this)" 
         onclick="quebrar(this)" 
         alt="Janela">

    <script>
        let janelaQuebrada = false;

        function abrir(obj) {
            if (!janelaQuebrada) {
                obj.src = "janelaberta.png";
            }
        }

        function fechar(obj) {
            if (!janelaQuebrada) {
                obj.src = "janelafechada.png";
            }
        }

        function quebrar(obj) {
            obj.src = "janelaquebrada.jpg";
            janelaQuebrada = true; 
        }
    </script>
</body>
</html>
