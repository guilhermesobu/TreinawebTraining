/*Sendo passado duas sequências:

1a: Onde a = 0, b = 2 e n = 3, é produzido os dados:
0 + 1 x 2 = 2
0 + 1 x 2 + 2 x 2 = 6
0 + 1 x 2 + 2 x 2 + 4 x 2 = 14

2a: Onde a = 5, b = 3 e n = 5, é produzido os dados:
5 + 1 x 3 = 8
5 + 1 x 3 + 2 x 3 = 14
5 + 1 x 3 + 2 x 3 + 4 x 3 = 26
5 + 1 x 3 + 2 x 3 + 4 x 3 + 8 x 3 = 50
5 + 1 x 3 + 2 x 3 + 4 x 3 + 8 x 3 + 16 x 3 = 98
*/

var array1 = [0, 2, 3];
var array2 = [5, 3, 5];

function factor(linhas){  

    var multi = 1;
    var count = 0;
    var myArray = [];
    for (let i = 0; i < linhas[2]; i++){
        if(i > 0){    
            multi *= 2;
        }
        count += linhas[1] * multi;
        myArray[i] = linhas[0] + count;
    }
    console.log(...myArray);

}


var n = [2, 4, 5, 9];
var m = [2, 4, 11, 12];
function diferenca(m, n)
{
    
    var colecoes = [];
    
    for (let nn of n){
        if (!m.includes(nn)){
            colecoes.push(nn);
        }
    }

    for (let mm of m){
        if (!n.includes(mm)){
            colecoes.push(mm);
        }
    }
    
    return colecoes;
}   
