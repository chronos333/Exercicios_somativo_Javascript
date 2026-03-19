// Seleciona botões em uma lista e o elemento de texto onde o resultado será mostrado
const botoes = document.querySelectorAll('button');
const displayResultado = document.querySelector('h4');

// Definição das opções do jogo.
const opcoes = ['pedra', 'papel', 'tesoura'];

// Fluxo principal do jogo, escuta o clique e ativa as funções com o parametro da escolha do usuário.
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const escolhaUsuario = botao.id;
        const escolhaComputador = gerarEscolhaComputador();

        const emojiUser = retornarEmoji(escolhaUsuario);
        const emojiPC = retornarEmoji(escolhaComputador);

        const statusWin = determinarVencedor(escolhaUsuario, escolhaComputador);

        exibirResultado(escolhaUsuario, escolhaComputador, statusWin, emojiUser, emojiPC);
    });
});

// conversão de emojis
function retornarEmoji(escolha) {
    if (escolha === 'pedra') return "🪨";
    if (escolha === 'papel') return "📄";
    if (escolha === 'tesoura') return "✂️";
}

// Escolhe aleatoriamente pedra/papel/tesoura para o computador
function gerarEscolhaComputador() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opcoes[indiceAleatorio];
}

// Determina vencedor segundo as regras do jogo
function determinarVencedor(usuario, computador) {
    if (usuario === computador) return "Empate! 🤝";

    if (
        (usuario === 'pedra' && computador === 'tesoura') ||
        (usuario === 'papel' && computador === 'pedra') ||
        (usuario === 'tesoura' && computador === 'papel')
    ) {
        return "Você Venceu! 🎉";
    } else {
        return "Você Perdeu! 😢";
    }
}

// Função que exibe os resultados
function exibirResultado(user, pc, res, emojuser, emojpc) {
    displayResultado.innerHTML = `
        Sua escolha: ${user.toUpperCase()} ${emojuser} | 
        Computador: ${pc.toUpperCase()} ${emojpc} |
        ${res}
    `;
}