    /* Função que apaga todas as luzes */
    function apagar(){

        document.getElementById("vermelho").style.background = "#333"
        document.getElementById("amarelo").style.background = "#333"
        document.getElementById("verde").style.background = "#333"
    }

    /* Função que acende a luz vermelha */
    function vermelho(){

        apagar()

        document.getElementById("vermelho").style.background = "red"
        // acende a luz vermelha

    }

    /* Função que acende a luz amarela */
    function amarelo(){

        apagar()

        document.getElementById("amarelo").style.background = "yellow"
        // acende a luz amarela
    }

    /* Função que acende a luz verde */
    function verde(){

        apagar()

        document.getElementById("verde").style.background = "green"
        // acende a luz verde

    }

    /* Função que ativa o modo automático do semáforo */
    function automatico(){
        vermelho()
        // inicia com o vermelh

        setTimeout(function(){
            verde()
        },2000)
        // após 2 segundos acende o verde

        setTimeout(function(){
            amarelo()
        },4000)
        // após 4 segundos acende o amarelo

        setTimeout(function(){
            vermelho()
        },6000)
        // após 6 segundos volta para o vermelho

    }