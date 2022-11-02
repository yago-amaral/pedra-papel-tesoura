const [
    textoJogador, textoComputador, textoResultado
] = document.querySelectorAll(".texto");

const botoesEscolha = document.querySelectorAll(".escolha");

let escolhaJogador, escolhaComputador, resultado;



botoesEscolha.forEach(botao => botao.addEventListener("click", () => {
    escolhaJogador = botao.textContent;
    vezDoComputador();

    textoJogador.textContent = `Jogador: ${escolhaJogador}`;
    textoComputador.textContent = `Computador: ${escolhaComputador}`;
    textoResultado.textContent = `Resultado: ${verificarVencedor(escolhaJogador, escolhaComputador)}`;
}));

function vezDoComputador() {
    const aleatorio = Math.floor(Math.random() * 3);

    escolhaComputador = botoesEscolha[aleatorio].textContent;
}

function verificarVencedor(jogador, computador) {
    if (jogador === computador)
        return "Empate!";

    if (jogador == "Pedra")
        return computador == "Papel" ? "Você perdeu!" : "Você venceu!";

    if (jogador == "Papel")
        return computador == "Tesoura" ? "Você perdeu!" : "Você venceu!";
    
    if (jogador == "Tesoura")
        return computador == "Pedra" ? "Você perdeu!" : "Você venceu!";
}