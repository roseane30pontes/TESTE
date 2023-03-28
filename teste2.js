/*Define uma função fibo que recebe um número como parâmetro e verifica se o número pertence à sequência de Fibonacci, 
retornando true caso pertença e false caso contrário.

Na função fibo, são definidas três variáveis: a, b e fibo. 
A variável a é iniciada com 0, a variável b é iniciada com 1 e a variável fibo é iniciada com 0.

Em seguida, é definido um loop while que irá continuar enquanto o valor de fibo for menor que o valor do parâmetro numero 
passado para a função. Dentro do loop, é verificado se o valor de numero é diferente do valor de fibo. Se for diferente, os valores de fibo,
 a e b são atualizados para a próxima sequência de Fibonacci. Se forem iguais, a função retorna true, indicando que o número pertence 
 à sequência de Fibonacci. Se o loop terminar e a função não tiver retornado true, significa que o número não pertence à sequência de 
 Fibonacci, e a função retorna false.

Depois, a função fibo é chamada com o parâmetro 24, e o resultado é armazenado na variável fibonacci. 
Em seguida, a função resposta é definida, que verifica o valor da variável fibonacci e imprime uma mensagem na tela 
indicando se o número 24 pertence ou não à sequência de Fibonacci.*/


function fibo (numero){
    let a = 0;
    let b = 1;
    let fibo = 0;

    while (numero >= fibo){
        if (numero !== fibo){
            fibo=a;
            a=b;
            b+=fibo;
        }
        else{
            return true;
        }
    }
    return false;  
};

let fibonacci = fibo(1);

function resposta (fibonacci){
    if (fibonacci){
       return console.log("O numero PERTENCE a sequencia Fibonacci");
    }
    else{
        return console.log("O numero NÃO pertence a sequencia Fibonacci");
    }
};

console.log(resposta(fibonacci));