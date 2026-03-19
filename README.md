# Exercícios Somativos JavaScript

Este repositório contém três desafios desenvolvidos em JavaScript com interfaces simples em HTML/CSS.

## 1. Lâmpada Interativa

Neste projeto, o foco é manipular o estado de uma lâmpada virtual por meio de botões.

### Comportamentos implementados

- `alterar()`: alterna o estado da lâmpada entre ligado e desligado usando `classList`.
- `quebrar()`: marca a lâmpada como quebrada (`estaQuebrada = true`) enquanto o botão `btn-break` estiver ativo; nesse estado, a lâmpada fica inoperante.
- `consertar()`: quando o botão `btn-fix` é clicado, redefine `estaQuebrada` para `false`, tornando a lâmpada funcional novamente.

## 2. Semáforo

Simula um semáforo com 4 botões para controlar as luzes.

### Funções

- `apagar()`: define todas as luzes como cinza, apagando o estado atual.
- `vermelho()`: chama `apagar()` e acende a luz vermelha.
- `amarelo()`: chama `apagar()` e acende a luz amarela.
- `verde()`: chama `apagar()` e acende a luz verde.
- `automatico()`: sequência automatizada com delay: vermelho → verde (2s) → amarelo (2s) → vermelho (2s).

## 3. Jogo Pedra, Papel e Tesoura

Jogo interativo para enfrentar o computador usando emojis e lógica de vitória.

### Componentes principais

- `opcoes`: array com as três escolhas possíveis do jogador.
- `botoes.forEach(...)`: vínculo dos botões para capturar a escolha do usuário e acionar a sequência do jogo.
- `gerarEscolhaComputador()`: escolhe aleatoriamente uma opção para o computador.
- `retornarEmoji(escolha)`: converte a escolha (pedra, papel, tesoura) em emoji.
- `determinarVencedor()`: analisa usuário vs. computador e retorna:
  - `Empate! 🤝`
  - `Você venceu! 🎉`
  - `Você perdeu! 😢`
- `exibirResultado()`: atualiza a interface com as escolhas e o resultado do jogo.

---

## Como executar

1. Abra o arquivo HTML correspondente ao desafio no navegador.
2. Interaja com os botões para testar cada cenário.

## Estrutura de pastas

- `Desafio01_Facil/` - Lâmpada Interativa
- `Desafio02_Medio/` - Semáforo
- `Desafio03_Dificil/` - Pedra, Papel e Tesoura