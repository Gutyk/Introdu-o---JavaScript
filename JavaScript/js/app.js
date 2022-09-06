// console - Browser
console.log('Hello World!!');
console.log('Eu sou um erro!!!!');

// variáveis
let userName = 'Gustavo';
let userEmail = 'myemail@gmail.com';
let userId = 43520;
let userLogin = true;
let userAge;
let userHeight = null;
let arr = [123, 'eu', false, 456, 'tu'];

console.log(userName, userEmail);

// tipagem
console.log(userName, typeof(userName));
console.log(userEmail, typeof(userEmail));
console.log(userId, typeof(userId));
console.log(userLogin, typeof(userLogin));
console.log(userAge, typeof(userAge));
console.log(userHeight, typeof(userHeight));
console.log(arr);

userLogin = 'está logado';
console.log(userLogin);

// concatenação (Não usar)
console.log('Usuário: ' + userName + 'Email: ' + userEmail);

// Template String juntar strings + variáveis + métodos + função
// Cráse para iniciar e terminar o template `escreve o que quer`
// placeholder para chamar variáveis + funções + etc.... ${variável}
console.log(`Usuário: ${userName} 

Login: ${userLogin}`);

let mensagem = `Olá ${userName}`
console.log(mensagem);

// constante 
const dataNascimento = '06/10/2004'
console.log(dataNascimento);
// gerar um erro pois é uma constante 
// dataNascimento = '23/05/2003'

// gerar um erro pois uma const precisa ser iniciada 
// const nomeGame 
