let placar = [0, 0, 0]; // [jogador, computador, empate]
const opcoes = ['Pedra', 'Papel', 'Tesoura'];

function jogar(j) {
    const n = Math.floor(Math.random() * 3);
    const c = opcoes[n];
    const ganha = (j === 'Pedra' && c === 'Tesoura') ||
                  (j === 'Papel' && c === 'Pedra')   ||
                  (j === 'Tesoura' && c === 'Papel');

    if (j === c) placar[2]++;
    else if (ganha) placar[0]++;
    else placar[1]++;

    document.getElementById('escolha-jogador').textContent   = j;
    document.getElementById('escolha-computador').textContent = c;
    document.getElementById('mensagem').textContent = j === c ? 'Empate!' : ganha ? 'Você venceu!' : 'Computador venceu!';
    document.getElementById('placar-jogador').textContent    = placar[0];
    document.getElementById('placar-computador').textContent = placar[1];
    document.getElementById('placar-empate').textContent     = placar[2];
}

function resetar() {
    placar = [0, 0, 0];
    ['placar-jogador','placar-computador','placar-empate'].forEach(id => document.getElementById(id).textContent = 0);
    document.getElementById('mensagem').textContent = 'Faça sua escolha:';
    document.getElementById('escolha-jogador').textContent = document.getElementById('escolha-computador').textContent = '-';
}
