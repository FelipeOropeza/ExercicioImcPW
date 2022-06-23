let $calcular = document.getElementById("calcular");

//alert($nome);
//alert($calcular);
//alert($resultado);
//$nome.value = "Felipe Carvalho";

function imc(){
    let $nome = document.getElementById("nome").value;
    let $altura = document.getElementById("altura").value;
    let $peso = document.getElementById("peso").value;
    let $resultado = document.getElementById("valor");

    if($nome != '' || $altura != '' || $peso != ''){
        $altura = $altura.replace(",",".");
        $peso = $peso.replace(",",".");

        $altura = parseFloat($altura);
        $peso = parseFloat($peso);

        let calcIMC = ($peso / ($altura * $altura)).toFixed(1);

        let $classificacao = "";

        if(calcIMC < 18.5){
            $classificacao = "Abaixo do peso";
        }
        else if(calcIMC < 25){
            $classificacao = "Peso ideal, parabéns !!!";
        }
        else if(calcIMC < 30){
            $classificacao = "Acima do peso";
        }
        else if(calcIMC < 35){
            $classificacao = "Obesidade grau 1";
        }
        else if(calcIMC < 40){
            $classificacao = "Obesidade grau 2";
        }
        else{
            $classificacao = "Obesidade grau 3";
        }

        $resultado.textContent = `${$nome} o seu imc é ${calcIMC}, você está ${$classificacao}`;
    }
    else{
        $resultado.textContent = "Obrigatório preencher todos os campos !!";
    }
}

// Preste atenção, quando o botão calcular for clicado será chamado uma função
$calcular.addEventListener("click", imc);
