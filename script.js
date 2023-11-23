function somatorioMultiplos() {
    var inputNumero = document.getElementById("numero").value;
    var resultadoElement = document.getElementById("resultado");
    var numerosDivisiveisElement = document.getElementById("numerosDivisiveis");
    var mensagemErroElement = document.getElementById("mensagemErro");

    // Função verifica se o número inserido é positivo
    if (inputNumero <= 0 || isNaN(inputNumero)) {
        resultadoElement.innerHTML = "";  
        // Limpa o resultado anterior, se houver
        numerosDivisiveisElement.innerHTML = "";  
        // Limpa os números divisíveis anteriores, se houver
        mensagemErroElement.innerHTML = "Por favor, selecione um número positivo.";
        return;
    } else {
        mensagemErroElement.innerHTML = ""; 
        // Limpa a mensagem de erro se o número for válido
    }

    // Se o número for positivo, continue com o cálculo
    var soma = 0;
    var numerosDivisiveis = [];

    for (var i = 1; i <= inputNumero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
            numerosDivisiveis.push(i);
        }
    }

    // Exibe o resultado e os números divisíveis
    resultadoElement.innerHTML = "Somatório: " + soma;
    numerosDivisiveisElement.innerHTML = "Números Divisíveis: " + numerosDivisiveis.join(", ");
}