// Faça um Programa que peça dois números e imprima o maior deles.

const maiorNum = (num1, num2) => console.log(`O maior número entre os parâmetros é ${num1 > num2 ? num1 : num2}`)
maiorNum(0, 76)


// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const posOrNeg = (n) => console.log(`número ${n > 0 ? 'positivo' :  'negativo'}`)
posOrNeg(34)


// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

const verifyGender = (gender) => {
   switch (gender.toUpperCase()) {
      case 'F':
         console.log("F - Feminino");
         break;
      case 'M':
         console.log("M - Masculino");
         break;
   
      default:
         console.log("Sexo inválido");
   }
}
verifyGender('a')
verifyGender('f')
verifyGender('m')


// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

const calcularAprovacao = (nota1, nota2) => {
   let media = (nota1 + nota2) / 2;
   
   media >= 7 ? 
      media == 10 ? console.log("Aprovado com Distinção") : console.log("Aprovado") 
      : 
      console.log("Reprovado")
}

calcularAprovacao(10, 10)
calcularAprovacao(8, 9)
calcularAprovacao(2, 1)

// Faça um Programa que leia três números e mostre o maior e o menor deles.

const bigOrSmall = (n1, n2, n3) => {
   let nums = [n1, n2, n3].sort()
   let biggest = nums[2]
   let smallest = nums[0]

   console.log(`O maior número dos parâmetros é ${biggest} e o menor é ${smallest}`)
}

bigOrSmall(-3,56333, 3389)

// Faça um Programa que leia três números e mostre-os em ordem decrescente.
