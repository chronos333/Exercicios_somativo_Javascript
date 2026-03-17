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

