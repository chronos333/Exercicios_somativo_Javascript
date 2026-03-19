 // cria uma variável de controle para saber
// se a lâmpada está quebrada ou não
 const lamp = document.getElementById('lampada');
        let estaQuebrada = false;

// Essa função alterna o estado da lâmpada (ligada/desligada)
// Só funciona se a lâmpada NÃO estiver quebrada
        function alternar() {
            if (estaQuebrada) return;
            lamp.classList.toggle('acesa');
        }

// Essa função coloca a lâmpada no estado "quebrada"
// Impede que ela seja ligada novamente
        function quebrar() {
            estaQuebrada = true;
            lamp.classList.remove('acesa');
            lamp.classList.add('quebrada');
        }

// Essa função restaura a lâmpada para o estado normal
// Permite que ela volte a funcionar
        function consertar() {
            estaQuebrada = false;
            lamp.classList.remove('quebrada');
            lamp.classList.remove('acesa');
        }