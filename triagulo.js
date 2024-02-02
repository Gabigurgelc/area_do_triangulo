import triangulo from 'readline-sync';

console.log("Vamos calcular o triangulo \n");

let base = triangulo.question("Digite a Base: ");
let altura = triangulo.question("Digite a altura: ");


let soma = (base * altura ) / 2;

console.log("O resultado é: ",soma);