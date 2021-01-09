//Dado um array com valores positivos e negativos, defina qual a sequencia de items desse array que resulta na maior soma dos itens

function maiorSequencia(vetorDeEntrada) {
   let max = 0;
   let seq = [];
 
   for (let tam = 1; tam <= vetorDeEntrada.length; tam++) {
     for (let i = 0; i + tam <= vetorDeEntrada.length; i++) {
       let currSeq = vetorDeEntrada.slice(i, i + tam);
       let result = currSeq.reduce((acc, curr) => acc += curr);

       if (result > max) {
         max = result;
         seq = currSeq;
       }
     }
   }
 
   return seq;
 }
 
 maiorSequencia([78, 67, 9]);



//Faça um Programa que leia um array de notas, mostre as notas e a média na tela.

let notas = [5.5, 8, 3]

function lerNotas(array){ 
   let soma = 0

   for(let i = 0; i < array.length; i++){
      console.log(array[i])
      soma += array[i]
   }

   return soma/array.length
}

let media = lerNotas(notas)
console.log('media', media)


//Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

let string = "Hoje e segunda"
let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/gi;

let count = []
for(let i = 0; i < string.length; i++){
   if(consonantRegex.test(string[i])){
      console.log(string[i])
      count.push(string[i])
   }
}

console.log('qtd', count.length)


//Faça um Programa que leia dois vetores com 5 elementos cada. Gere um terceiro vetor de 10 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.


let array1 = [1, 3, 5, 7, 9]
let array2 = [2, 4, 6, 8, 10]
let resultado = []

for(let i = 0; i < 5; i++){
   resultado = [...resultado, array1[i], array2[i]]
}
console.log(resultado)

//Foram anotadas as idades e alturas de 30 alunos. Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.
let alunos = [
   {
      idade: 14,
      altura: 150
   },
   {
      idade: 17,
      altura: 190
   },
   {
      idade: 12,
      altura: 140
   },
   {
      idade: 14,
      altura: 160
   },
   {
      idade: 11,
      altura: 130
   },

]

let somaAlturas = 0

for(let i = 0; i < alunos.length; i++){
   somaAlturas += alunos[i].altura
}

let mediaAltura = somaAlturas / alunos.length
let totalAlunos = 0

for(let i = 0; i < alunos.length; i++){
   if(alunos[i].idade > 13 && alunos[i].altura < mediaAltura){
      totalAlunos++
   }
}

console.log('total', totalAlunos)

//Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, calcule a média anual das temperaturas e mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso: 1 – Janeiro, 2 – Fevereiro, . . . ).

let tempMedMensal = [33, 29, 26, 24, 21, 18, 15, 14, 18, 21, 24, 30]
let somaAnual = 0

for(let i = 0; i < 12; i++){
   somaAnual += tempMedMensal[i]
}
let mediaAnual = somaAnual / 12

console.log('tempAnual', mediaAnual)

for(let i = 0; i < 12; i++){
   if(tempMedMensal[i] > mediaAnual){
      switch(i){
         case 0:
            console.log(tempMedMensal[i] + "ºC - Janeiro")
            break;
         case 1:
            console.log(tempMedMensal[i] + "ºC - Fevereiro")
            break;
         case 2:
            console.log(tempMedMensal[i] + "ºC - Março")
            break;
         case 3:
            console.log(tempMedMensal[i] + "ºC - Abril")
            break;
         case 4:
            console.log(tempMedMensal[i] + "ºC - Maio")
            break;
         case 5:
            console.log(tempMedMensal[i] + "ºC- Junho")
            break;
         case 6:
            console.log(tempMedMensal[i] + "ºC - Julho")
            break;
         case 7:
            console.log(tempMedMensal[i] + "ºC - Agosto")
            break;
         case 8:
            console.log(tempMedMensal[i] + "ºC - Setembro")
            break;
         case 9:
            console.log(tempMedMensal[i] + "ºC - Outubro")
            break;
         case 10:
            console.log(tempMedMensal[i] + "ºC - Novembro")
            break;
         case 11:
            console.log(tempMedMensal[i] + "ºC - Dezembro")
            break;
      }
   }
}

//Para computar cada voto, a telefonista digitará um número, entre 1 e 23, correspondente ao número da camisa do jogador. Um número de jogador igual zero, indica que a votação foi encerrada. Se um número inválido for digitado, o programa deve ignorá-lo, mostrando uma breve mensagem de aviso, e voltando a pedir outro número. Após o final da votação, o programa deverá exibir:
//O total de votos computados;
//Os númeos e respectivos votos de todos os jogadores que receberam votos;
//O percentual de votos de cada um destes jogadores;
//O número do jogador escolhido como o melhor jogador da partida, juntamente com o número de votos e o percentual de votos dados a ele.

console.log("==================== EX 18 ====================")

function randomNum(){
   return Math.floor(Math.random()*30)
} 

let totalVotos = []
for(let i = 1; i <= 23; i++){
   totalVotos.push(0)
}

let voto = randomNum()

while(voto > 0){
   if(voto > 23){
      console.log("Número inválido")
   } else {
      totalVotos[voto-1]++
   }
   voto = randomNum()
}

let somaTotal = totalVotos.reduce((acc, curr) => acc += curr)

totalVotos.map((item, index) => item != 0 && console.log(`O jogador ${index + 1} recebeu ${item} votos`))

let porcentagem = totalVotos.map(jogador => ((jogador / somaTotal)*100).toFixed(2))

let maisVotado = totalVotos[0]
let posMaisVotado

for(let index = 1; index < totalVotos.length; index++){
   if(totalVotos[index] > maisVotado){
      maisVotado = totalVotos[index]
      posMaisVotado = index
   }
}

console.log(`O jogador camisa ${posMaisVotado + 1} foi o mais votado com ${maisVotado} votos, ou seja, ${porcentagem[posMaisVotado]}% do total de votos.`)

console.log(totalVotos)
console.log('somaTotal',somaTotal)
console.log(porcentagem)




//Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O programa deverá ler os //valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). Os valores referentes a cada uma das opções devem ser armazenados num vetor. Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada um dos concorrentes e informar o vencedor da enquete. O formato da saída foi dado pela empresa, e é o seguinte:
console.log('=== EX19 ===')

let sistemasOperacionais = ["Windows Server", "Unix", "Linux", "Netware", "Mac OS", "Outros", "Nenhum"]
let contagemDeVotos = [0, 0, 0, 0, 0, 0]
const geradorDeVoto = () => Math.floor(Math.random()*7)
let votoValido = geradorDeVoto()

while(votoValido > 0){
   contagemDeVotos[votoValido - 1]++;
   votoValido = geradorDeVoto()
}

let totalSum = contagemDeVotos.reduce((acc, curr) => acc += curr )
let porcPorItem = contagemDeVotos.map(item => ((item/totalSum) * 100).toFixed(2))
let maisVotos = 0
let posMaisVotos = 6
contagemDeVotos.map((item, index) => {
   if(item > maisVotos){
      maisVotos = item
      posMaisVotos = index
   } 
})

console.log(contagemDeVotos)
console.log(`O Sistema Operacional mais votado foi o ${sistemasOperacionais[posMaisVotos]}, com ${maisVotos} votos, correspondendo a ${porcPorItem[posMaisVotos]} do total de votos.`)

//Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido. Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios, simulando os lançamentos dos dados.

console.log("===== EX24 =====")

const jogaDado = () =>  Math.floor(Math.random()*6 + 1)
const chances = [0, 0, 0, 0, 0, 0]
let jogadas = 100

while(jogadas > 0){
   let resJogada = jogaDado()
   chances[resJogada - 1]++
   jogadas--
}

chances.map((item, index) => {
   console.log(`O número ${index+1} saiu ${item} vezes na jogada do dado.`)
})