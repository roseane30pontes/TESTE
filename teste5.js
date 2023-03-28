/*A função inversao recebe uma string palavra, cria uma nova string vazia novaPalavra, e depois itera sobre 
a string original de trás para frente, concatenando os caracteres à novaPalavra.

Por fim, a função retorna a string novaPalavra, que contém a palavra invertida. 
O console.log no final imprimirá a palavra invertida "OÇARGAMORP", que é a palavra original "PROGRAMAÇÃO" invertida corretamente. 
O loop começa do índice palavra.length - 1 (o último caractere) e vai até o índice zero (o primeiro caractere), 
concatenando cada caractere em novaPalavra. O retorno da função é a string invertida.*/



let palavra = "PROGRAMAÇÃO";

function inversao (palavra){
    
    let novaPalavra = "";
    for (let i = palavra.length-1; i>=0; i--){
       var caracter = palavra[i];
       novaPalavra += caracter;
    }
    return novaPalavra;
}

console.log(inversao(palavra));

