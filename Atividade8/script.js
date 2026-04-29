function calcularValores(a, b, c) {
    const soma = a + b + c;
    const quad1 = a * a;
    const quad2 = b * b;
    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quad1} e o quadrado do segundo é: ${quad2}`;
}

function formarPalavras(letras) {
    let palavras = [];
    while (palavras.length < 10) {
        let shuffle = [...letras].sort(() => Math.random() - 0.5).join('');
        if (!palavras.includes(shuffle)) {
            Array.prototype.push.apply(palavras, [shuffle]);
        }
    }
    return palavras;
}

function executarEx1() {
    const val1 = Number(document.getElementById('n1').value);
    const val2 = Number(document.getElementById('n2').value);
    const val3 = Number(document.getElementById('n3').value);
    
    const frase = calcularValores.apply(null, [val1, val2, val3]);
    document.getElementById('res1').innerText = frase;
}

function executarEx2() {
    const input = document.getElementById('letrasInput').value;
    const arrayLetras = input.split(',').map(l => l.trim().toUpperCase()).filter(l => l !== "");

    if (arrayLetras.length !== 5) {
        alert("Por favor, insira exatamente 5 letras separadas por vírgula.");
        return;
    }

    const lista = formarPalavras(arrayLetras);
    document.getElementById('res2').innerHTML = "<strong>Palavras geradas:</strong><br>" + lista.join(' | ');
}
