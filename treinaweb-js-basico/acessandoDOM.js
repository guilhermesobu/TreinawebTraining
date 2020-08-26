document; //É o comando para acessar o conteúdo do HTML, só funciona quando estamos lidando com o HTML direto, se formos usar o nodeamon ai tem que ver outro metodo

//COMO ACESSAR OS ELEMENTOS
document.querySelector('');//Dentro das aspas a gente coloca a classe, tag ou ID que queremos acessar (só para o primeiro item encontrado)
document.querySelector('').textContent; //Com esse comando acessamos o conteudo entre as tags, ex: <div>Texto acessado</div>
document.querySelector('').textContent = "novo texto"; //Mudamos o texto dentro da tag, ficando: <div>novo texto</div>
document.querySelector('').innerHTML = "<b>texto negrito</b>"; //alteramos o conteudo dentro da tag, inserindo um codigo HTML dentro das tags que buscamos e alteramos o conteudo anterioe na TAG
document.querySelector('').outerHTML = "<a>novo texto</a>"; //Com esse comando alteramos a TAG do html, com isso podemos alterar o conteudo dentro da TAG também

//COMO ALTERAR OS ELEMENTOS
//Para remover o elemento
document.querySelector('').remove(); 

//Criando elementos
var myLi = document.createElement('li'); //Criamos uma tag LI (dentro da VAR) dentro da MEMÓRIA e não no elemento
myLi.innerText = 'teste'; //Inserimos o texto dentro do LI

//Trabalhando os elementos
document.querySelector('').appendChild(myLi); //Inserimos o elemento LI que criamos DENTRO e no final de algum elemento buscado pelo querySelector
document.querySelector('').appendChild().innerHTML = '<b>Texto negrito direto no appendChild</b>'; //Inserimos direto, sem criar VAR
document.querySelector('').insertBefore(myLi, document.querySelector('').firstChild); /* Inserimos o elemento DENTRO e no fnal do elemento que buscamos
Nesse caso preciamos ter buscado onde iremos inserir tanto no primeiro querySelector quanto no segundo*/

document.querySelector('').insertAdjacentHTML('beforebegin', myLi.outerHTML); /* Inserimos o pedaço de HTML que criamos ANTES do html que buscamos
com o querySelector, dessa forma, fazemos com que a TAG buscada seja apresentada logo em seguida desa que inserimos.
A parte que trás o .outerHTML quer dizer que isso irá retornar uma string, e é justamente o que o inserAdjacentHTML precisa para funcionar*/
document.querySelector('').insertAdjacentHTML('afterend', myLi.outerHTML); //Faz o mesmo que o anterior, mas insere depois da TAG buscada

document.querySelector('').cloneNode(true); //Com isso podemos clonar o elemento,para não ter que ficar digitando todo o comando novamente toda vez



//OBJETOS PARA TRABALHAR COM O NAVEGADOR - Algumas funções

/*objeto "window", ele referencia a propria página em que estamos, podemos utilziar uma função chamada 
    window.close()
    com essa função nós fechamos a página em que estamos no momento.
    Podemos trabalhar assim

    var myWin = window.open('treinaweb.com.br');        Isso vai abrir a página do treinaweb
    mywin.close();                                      isso vai fechar a página que acabamos de abrir do treinaweb 

    Essas funções só funciona caso o usuário esteja clicandm em um botão, ela não pode ser evocada diretamente pela linha de código, caso
    tente fazer isso, o navegador irá bloquear esse comando e o pop-up
    */

/*objeto "location", ele referencia a página que estamos
    Se abrirmos o location diretamente no console log, ele irá abrir todas as inforamções que contém na página e podemos usar
    esses atributos da página, como por exemplo 
    
    location.href
    Ele vai retornar o link (url) da página
    
    location.search
    Aqui ele retorna aqueles valores que ficam depois da interrogação "...br/?osargumentosaqui"
    */

/*objeto "history", ele trabalha com os históricos de acesso de cada página
    Esse objeto só funciona quando o SERVIDOR estiver ativo, podemos ativar o servidor acessando pelo terminal a pasta do index.html que 
    estamos trabalhando e digitar "http-server", ai acessamos no navegador via a porta que aparecerá
 
    history.forward() e history.go(1) são a mesma coisa, eles vão na página seguinte (quando não estamos na ultima página acessada)
    history.back() e history.go(-1) são a mesma coisa, eles fazem voltar à página anteriormente acessada
    history.length() mostra quantos acessos fizemos, seja pra frente ou para trás
    */