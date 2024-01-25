//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

R: alert("Hello World")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

R: let n1 = 4
   let n2 = 6
   let result = n1 + n2

alert(result)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se 
//for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
 //   💡 Para saber o tipo de dado você pode usar o operador `typeof`
R: let number = 2;

if (typeof number === 'number') {
    alert("É um número");
} else {
    alert("Não é um número");
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, 
//exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

R: let string = 2;

if (typeof string === 'string') {
    alert("É uma string");
} else {
    alert("Não é uma string");
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, 
//exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

R: let booleano = true;

if (typeof booleano === 'boolean') {
    alert("É um booleano");
} else {
    alert("Não é um booleano");
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

R: let n1 = 4
   let n2 = 6
   let result = n1 - n2

alert(result)

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

R: let n1 = 4
   let n2 = 6
   let result = n1 * n2

alert(result)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

R: let n1 = 4
   let n2 = 6
   let result = n1 / n2

alert(result)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
//Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

R: let numero = 5;

if (numero % 2 === 0) {
    console.log(numero + ' é um número par.');
} else {
    console.log(numero + ' é um número ímpar.');
} 

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
//Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

R: let numero = 5;

if (numero % 2 ==! 0) {
    console.log(numero + ' é um número impar.');
} else {
    console.log(numero + ' é um número par.');
} 