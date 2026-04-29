// 1
function calcular(a, b, c) {
    let soma = a + b + c;
    let q1 = a * a;
    let q2 = b * b;
    return "A soma dos três números é:" + soma + ", o quadrado do primeiro é:" + q1 + " e o quadrado do segundo é:" + q2;
}

function fazerEx1() {
    let n1 = Number(document.getElementById('v1').value);
    let n2 = Number(document.getElementById('v2').value);
    let n3 = Number(document.getElementById('v3').value);
    
    let resultado = calcular.apply(null, [n1, n2, n3]);
    document.getElementById('txt1').innerText = resultado;
}

function gerar(letras) {
    let lista = [];
    while (lista.length < 10) {
        let palavra = [...letras].sort(() => Math.random() - 0.5).join('');
        
        if (!lista.includes(palavra)) {

            Array.prototype.push.apply(lista, [palavra]);
        }
    }
    return lista;
}

function fazerEx2() {
    let entrada = document.getElementById('letras').value;
    let arrayLetras = entrada.split(',').map(l => l.trim());

    if (arrayLetras.length !== 5) {
        alert("Digite 5 letras separadas por vírgula!");
        return;
    }

    let resultado = gerar(arrayLetras);
    document.getElementById('txt2').innerHTML = resultado.join('<br>');
}
