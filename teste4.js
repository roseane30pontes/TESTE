/*Cria cinco variáveis que representam valores de vendas mensais para diferentes estados e um total desses valores. Em seguida, 
são calculados os percentuais de cada estado em relação ao total e armazenados em novas variáveis.

O console.log na última linha imprime uma mensagem formatada com as informações do total e dos percentuais de cada estado. 
A mensagem indica que o valor total mensal de vendas da distribuidora foi de ${total}. Em seguida, apresenta a porcentagem de vendas 
de cada estado em relação ao total, utilizando o método toFixed para arredondar o resultado para duas casas decimais.

Assim, o resultado impresso no console será uma mensagem que informa qual foi o valor total mensal de vendas e qual a 
porcentagem de vendas para cada estado.*/




let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let Outros = 19849.53;

total = SP+RJ+MG+ES+Outros;

psp = SP*100/total;
prj = RJ*100/total;
pmg = MG*100/total;
pes = ES*100/total;
poutros = Outros*100/total;

console.log (`O valor total mensal da distribuidora foi de ${total}, sendo desses: ${psp.toFixed(2)}% representado pelo estado de São Paulo; 
${prj.toFixed(2)}% representado pelo estado do Rio de Janeiro; ${pmg.toFixed(2)}% representado pelo estado de Minas Gerais; ${pes.toFixed(2)}% representado pelo estado 
do Espírito Santo; ${poutros.toFixed(2)}% representado pelos demais estados.`);