# EXERCÍCIOS_SOMATIVO_FLUTTER

# Lâmpada Interativa

### Style
Primeiramente no nosso código só se descreve a estilização da lâmpada, dos botões e animações simples do código.

### alterar ()
Ao clicar na lâmpada, ele muda a 'toggle' [pode ativar e desativar-se] através da classList, que muda o CSS, alternando.

### quebrar ()
Enquanto o botão 'btn-break' for clicado, o estado da lâmpada vai mudar para 'estaQuebrada' como 'true', mantendo ela infuncional até .

### consertar ()
Enquanto o botão 'btn-break' não for clicado ou o botão 'btn-fix' for clicado, o estado da lâmpada vai alterar-se de 'estaQuebrada' para 'false', mantendo ela funcional.

***
***

# Semáforo

## button
Determina entre todos os 4 botões um nome, e torna eles interativos (ao pressionar, faz uma ação) sendo atribuídos a funções.

### apagar ()
Nessa parte, ele redefine com o "getElementById' das "luzes do semáforo" para um cinza (definido pelo 'style.background'). Assim, limpando o "estado" das luzes para "apagadas".

### vermelho ()
Executa a função 'apagar()' e redefine somente a cor do botão com [id="vermelho"] para a cor vermelha.

### amarelo ()
Executa a função 'apagar()' e redefine somente a cor do botão com [id="amarelo"] para a cor amarela.

### verde ()
Executa a função 'apagar()' e redefine somente a cor do botão com [id="verde"] para a cor verde.

### automatico ()
Executa a função 'vermelho()', depois a função 'verde()' após 2 segundos após o clique, depois a função 'amarelo()' após mais 2 segundos e a função 'vermelho()' após mais 2 segundos.

***
***

# Jogo - Pedra, Papel e Tesoura

## button
Determina um 'emoji' e um 'id' para cada um dos botões.

### opcoes
determina um 'array' que contém as 3 opções possívei do usuário

### botoes forEach(botao => {...
O 'ForEach" é uma função nativa que passa pelos três elementos de 'opcoes' e define como a 'escolhaUsuario', ela é executada a cada vez que uma opção nova é escolhida.
  - Executa a função 'gerarEscolhaComputador' e atribui ela à variável 'escolhaComputador'

  - emojiUser e emojiPC -->  Pela variável 'escolhaUsuario' e 'escolhaComputador' através das função 'retornar emoji()'.

  - statusWin --> Executa a função 'determinarVencedor()' com base nas variáveis 'escolhaUsuario' e 'escolhaComputador'.

  - exibirResultado --> Executa a função com base nas variáveis 'escolhaUsuario', 'escolhaComputador', 'statusWin', 'emojiUser' e 'emojiPC'.


### retornarEmoji(escolha)
Essa função vai pegar a escolha do usuario e retornar um emoji conforme o 'ID' da escolha do usuário.

### gerarEscolhaComputador()
Uma função que vai sortear um valor entre 1 e 3 e vai atribuir esse valora ao array 'opcoes[]' para decidir qual das opções será atribuida a 'gerarEscolhaComputador'.

### determinarVencedor()
Vai receber o valor da decisão do usuário e o valor sorteado pelo computador, e irá processar se o jogo deu:
  - "Empate! 🤝"
    Caso os valores sejam iguais;
  - "Você Venceu! 🎉"
    Caso a opção do usuário ganhou do número sorteado pela máquina;
  - "Você Perdeu! 😢"
    Caso nenhuma das opções anteriores sejam verdadeiras;

### exibirResultado()
Uma função que recebe os valores de:
- Decisão do usuário e do computador --> 'user' e 'pc';
- Emoji atribuído através da função 'retornarEmoji' --> usando como 'emojuser' e 'emojpc';
- O resultado processado pela função 'determinarVencedor' --> 'res';
- Printa o resultado substituindo as 'variáveis' pelos valores adquiridos no processamento do código.
