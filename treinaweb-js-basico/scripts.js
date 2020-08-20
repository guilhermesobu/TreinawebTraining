console.log("hello 2");

var myObject = {
    length: 15,
    name: `pencil`,
    color: `yellow`,
    write1: function(){
        console.log("Escreveu");
    },
    write2(){
        console.log("Escreveu");
    },
    write3: () => {
        console.log("Escreveu");
    }
    /*Esses dois metodos trazem a mesma coisa
    myObject.color
    myObject['color']*/
}

var myArray = [72, 2, 40, 7]; 
/*Arrays ao cont´rario de obj são delimitados por 
numeros, e nãop por nomes como "length"

Acessamos array assim:
myArray[0]
A posição ZERO retorna "72"

myArray[myArray.length - 1]
Dessa forma pegamos o ultimo valor dentro do array
*/

/*SON  - JacaScript Object Notation
Json não recebem funções, ma recebe STR, Numeros, 
outros objetos e arrays*/
var json = {
    "length": 15,
    "name": "pencil"
}

/*Para tranformar um OBJ em json fazemosassim:*/
JSON.stringify(myObject);
//E podemos jogar em uma STRING
var myString = JSON.stringify(myObject);


/* Para declarar os valores de ARRAYS e OBJ em uma 
var podemos fazer das seguintes maneiras:  */
var a = myArray[0],
    b = myArray[1];
var [a, b, c, d] = myArray; 
//A recebe de 0, B de 1, etc

var x = myObject.color,
    y = myObject.length;
var {length, color} = myObject;
/*O obj é diferente, na lista de VARs que vão receber
os valores dos objetos tem que ser igual ao nome da 
propriedade que quer receber do OBJETO*/ 

/*Função SPREAD, usado para pegar as informações de
todos os valores do array de maneira mais rápida*/
function sum(n1, n2){
    console.log(n1 + n2);
}
var myArray2 = [5, 3];
sum(...myArray2); //Essa função

/* Podemos usar o spread para unir arrays também*/
var newArray = [...myArray, ...myArray2];

/*Existem LAÇOS DE REPETIÇÃO para arrays e obj
São os "For in" e "For of"*/
for(let arrayForIn in myArray){ 
    console.log(arrayForIn); //Imprime as propriedades
    console.log(myArray[arrayForIn]); //Imprime os valores
} //Isso funciona com o OBJ também, mesmo esquema

for(let arrayForOf of myArray){
    console.log(arrayForOf); //Imprime direto os valores
}


/*FUNÇÕES para arrays
.every - que verifica se todos os valores são verdadeiros
.some - verifica se apenas um valor é verdadeiro
.find - encontra o primeiro valor da pesquisa, ignora os demais
.findIndex - encontra o que procuramos e retorna o INDICE dessa pesquia
.reduce - retorna a execução passando por cada valor dentro do array
.sort - ordena o array, mas ele torna tudo em uma String, ele ordena de maneira bem grosseira considerando o primeiro valor da string 
.forEach - Vai pássar por cada um dos valores dentro do array e podemos trabalhar esse valor
.map - Ele modifica cada um dos valores dentro do array, de acordo com as condições
Array.of(valor1, valor2) - O mesmo que instanciar algum objeto, usar o "of" não permite gerar erros
.concat - Mescla dois arrays, o chamado e o inserido como argumento
.includes - Verifica se no array inclui algum valor
.indexOf - Retorna o indice que o valor está posicionado
.lastIndexOf - Retorna o ULTIMO indice do valor encontrado no array, caso existam mais valores iguais
.join - Mistura todos os elementos do array em uma UNICA STRING
.reverse - Ele inverte todos os elementos do array
.push - Para inserir um novo valor dentro do Array, na ULTIMA posição
.pop - Remove o ULTIMO valor dentro do array
.unshift - Para inserir um novo valor dentro do Array, na PRIMEIRA posição
.shift - Remove o PRIMEIRO valor dentro do array
.splice - Remove o elemento dentro do array. Tem dois parametros, o primeiro indica o primeiro indice que queremos remover, o segundo 
    diz quantos queremos remover. Ele também pode ser usado para inserir elementos, passando ZERO no segundo parâmetro e colcoando um terceiro
    parâmetro que diz quai vai ser o valor inserido
.slice - Ele pega uma porçao de itens dentro do array de acordo com o que informarmos


Essas funções devem conter uma função anonima dentro para funcionar*/
myArray.every( (n) => n > 20); //Retorna false, pois temos os valores [72, 2, 40, 7] no array
myArray.some( (n) => n > 20); //Retorna TRUE porque pelo menos um valor atende a condição
myArray.find( (n) => n > 20); // Retorna 40, pois é o próximo valor que atende a condição
myArray.findIndex( (n) => n > 20); //Retorna 2, pois é o índice (posição) do número 40
myArray.reduce( (acumulado, atual) => acumulado + atual); /*Nesse caso ele soma tudo e retorna a soma de toso os valores do array
Entenda: o ACUMULADO inicia em zero, então na primeira interação ele soma o valor atual do array, indice 0 que le "72", então o acumulado
se torna 72, e na segunda interação vai somar o acumulado mais o atual, indice 1, ou seja, 2, então o acumulado se torna 74, eassim vai*/
myArray.sort( (a, b) => a > b ? 1 : -1); //Isso faz a ordenação do .sort() funcionar corretamente em ordem crescente
myArray.forEach( (n) => {console.log(n);}); //Vai ser impresso o valor de N, ou cada valor do array, em cada interação
myArray.map( (n) => {n * n}); //Nesse caso ele vai multiplicar por 2 cada um dos valores do Array e retornar o array modificado
var arrayOf = Array.of(myArray); //Eu passei os valores de myArray para dentro de arrayOf
var arrayOfEmpty = Array(5); //Dessa maneira eu criei um array VAZIO com 5 posições VAZIAS, por esse motivo é importante usar o "of"
var arrayNotEmpty = Array(1,2); //Dessa forma eu criei um array com dois valores dentro 1 e 2
var arrayOfOneValue = Array.of(5); //Dessa forma eu criei um array com o valor 5 na primeira posição, diferente do metodo do "arrayOfEmpty"
arrayOf.concat(arrayOfOneValue); //Inseri o "arrayOfOneValue" dentro de "arrayOf"
arrayOf.includes(5); //Vai retornar TRUE ou FALSE dependendo se existe o valor no array
arrayOf.indexOf(5); //Retorna a primeira posição onde está o 5, ele retorna -1 se não existir esse valor dentro do array
arrayNotEmpty.join('-'); //Misturou todos os valores do array e separou eles por um hifem
myArray.reverse(); //Ele vai inverter a posição de todos os valores dentro do Array
myArray.push(4); //Inseri o numero 4 na próxima posição do array
myArray.pop(); //Removi o ultimo valor dentro dessa array
myArray.splice(1, 1); // Removi o segundo elemento do array,
myArray.splice(1, 0, 13); //Inseri o valor 13 antes do valor que existia no indice 1
myArray.slice(1, 4); //Pegamos os valores deste o indice 1 até o indice 3 do array, ele não inclui o indice de limite que demos

/*FUNÇÕES PARA OBJETOS 
Object.keys() - Retorna as chaves de dentro do objeto jogado como argumento
Object.values() - Retorna os valores dentro do objeto
Object.entries() - Retorna as entradas no objeto (chaves e valores)
Object.seal() - Sela o objeto, não permite que suas chaves (propriedades) seja alterada ou inserida, mas os valores sim
Object.freeze() - Não poderemos nem se quer alterar o valor das propriedades
Object.isSealed() - Verifica se o objeto está selado
Object.isFrozen() - Verifica se o objeto está congelado
.hasOwnProperty - Para verificar se tem uma chave especifica dentro do objeto

Veja as funções em execução:*/

Object.keys(myObject); //Retorna as chaves como Length, Name, etc.. do objeto jogado dentro da função
Object.values(myObject); //Retorna os valores como "15", "Lápis", etc... do objeto jogado dentro da função
Object.entries(myObject); //Retorna várias arrays para contemplar cada uma das entradas, em cada array vai ter a chave e o valor do objeto
Object.seal(myObject); //Permite alterar os valroes mas não inserir novas chaves ou remover as existentes
Object.freeze(myObject); //Vai bloquear qualquer modificação do Objeto
Object.isSealed(myObject); //Retorna TRUE se o objeto estiver celado
Object.isFrozen(myObject); //Retorna TRUE se o objeto estiver congelado
myObject.hasOwnProperty('name'); //Retorna "TRUE" pois temos a chave name dentro do objeto, retorna false quando não encontrar
"name" in myObject; //Faz o mnesmo que "hasOwnProperty", e retorna TRUE quando encontrar