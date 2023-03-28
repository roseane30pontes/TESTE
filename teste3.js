/*O primeiro loop "for" é usado para calcular o total do faturamento. Em seguida, há uma função "maior" que encontra 
o maior valor de faturamento e seu respectivo dia. A função "menor" encontra o menor valor de faturamento e seu respectivo dia. 
A função "media" calcula a média do faturamento, considerando apenas os dias em que o valor do faturamento não é zero. A função 
"diaSuperior" encontra uma lista de dias em que o valor de faturamento diário foi superior à média mensal.

Por fim, o código imprime uma mensagem com o menor e o maior valor de faturamento e seus respectivos dias, 
além dos dias em que o valor de faturamento diário foi superior à média mensal.*/





/* Observação: Eu ainda não tenho muita experiência em trabalhar com JSON, por isso optei por copiar e colar o objeto 
fornecido diretamente no código. Peço desculpas por qualquer inconveniente causado.*/
const faturamento = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ];



let total = 0;
for (let i = 0; i<faturamento.length; i++){
  total += faturamento[i].valor;
}



function maior (faturamento) {
    let maiorValor=0;

    for (let i = 0; i<faturamento.length; i++){    
        if (faturamento[i].valor==0){
        
        }
        else {
            if (faturamento[i].valor>maiorValor){
                maiorValor=faturamento[i].valor;
                diaMaiorValor = i
            }
        }
    }
    return maiorValor.toFixed(2) + " - " + faturamento[diaMaiorValor].dia;
}



function menor (faturamento){
    let menorValor = faturamento[0].valor;

    for (let i = 0; i<faturamento.length; i++){
        if (faturamento[i].valor !== 0){
            if (faturamento[i].valor < menorValor) {
                menorValor = faturamento[i].valor;
                diaMenorValor=i
        }
        }
    }
    return menorValor.toFixed(2)+ " - " + faturamento[diaMenorValor].dia;
}

function media (faturamento,total) {
    let diasc=0;
    for (let i = 0; i<faturamento.length; i++){
        if (faturamento[i].valor !== 0){
            diasc++;
        }
    }
    
    let media=total/diasc;
    return media.toFixed(2);    
}

var mediA = media(faturamento, total)

function diaSuperior (media,faturamento){
    let diasup = [];

    for (let i = 0; i<faturamento.length; i++){
        if (faturamento[i].valor>media){
            diasup.push (faturamento[i].dia);
        }
    }
    return diasup;
}


console.log (`O menor valor de faturamento e o dia ocorrido foi respectivamente ${menor(faturamento)}; 
O maior valor de faturamento e o dia ocorrido foi respectivamente ${maior(faturamento)}. O Número de dias no mês em que o 
valor de faturamento diário foi superior à média mensal ocorreram no(s) dia(s): ${diaSuperior(mediA,faturamento)}`);






