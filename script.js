//Carne= 400g por pessoa e em 6 horas dá 650
//Cerveja= 1200 ml por pessoa e em 6 horas dá 2000ml
//Refri/água - 1000ml por pessoa em 6 horas 1500ml
// Crianças valem por 0,5 

 let chamei1 = document.getElementById ("adultos")
 let chamei2 = document.getElementById ("criancas")
 let chamei3 = document.getElementById ("duracao")
 let resultado = document.getElementById ("resultado")

 function calcular(){console.log("testando")

let adultos=chamei1.value 
let criancas = chamei2.value
let duracao = chamei3.value

 let totalcarne = carnepp(duracao) * adultos + (carnepp(duracao)/2 *criancas);
 let totalcerveja = cervejapp(duracao) * adultos 
 let totalbebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao)/2 *criancas);
 
 resultado.innerHTML  =`<p> ${totalcarne/1000}kg de Carne </p>`
 resultado.innerHTML +=`<p> ${Math.ceil(totalcerveja/355)} Latas de Cerveja </p>`
 resultado.innerHTML +=`<p> ${Math.ceil(totalbebidas/2000)} Garrafas de Refrigerante</p>`
}

 function carnepp(duracao){
    if (duracao >=6) {return 650}
    else {return 400} }

function cervejapp(duracao){
        if (duracao >=6) {return 2000}
        else {return 1200} }

function bebidaspp(duracao){
 if (duracao >=6) {return 1500}
else {return 1000} }


 // Primeiro eu chamei o valor do html que possui suas ações próprias com uma variável para ficar mais simples a questão do "document" (na verdade tem que chamar primeiro) para dá funcionalidade
 // Depois eu criei uma função para o botão calcular 
 // Depois Peguei os valores que vão ser inseridos no input para fazer o cálculo em seguida. (não é necessário) (.value)
 // Depois eu criei funções para cada objetivo que eu queria e (duracao) ficou dentro pois ele que mudava de acordo com a regra que eu coloquei
 // Depois eu peguei as variáveis de valor que fiz na terceira parte para dar sustento ao cálculo junto com a função em que fiz para cada objeto (VALOR CALCULANDO COM FUNÇÕES)
 // No final eu coloquei o innerhtml em um div vazia ,para gerar o resultado em que eu queria. Essa div tb é chamada
 // OBS: Para gerar um inner.html em um calculado é preciso colocar uma variável de total para gerar o valor desejado ex: ${...}
// A função calcular vai me retornar tudo isso menos as funções por fora
//inner.html é que vai imprimir 
