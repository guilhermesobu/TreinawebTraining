var buttonListener = document.querySelector('#button');
var inputAction = document.querySelector('#inputText');
var cont = 0;

var showMessageConsole = function(){
    if(cont == 0){
        cont++;
        console.log("Adicionado 1");
        inputAction.value = cont; //Essa linha é a mesma que a próxima
        //document.querySelector('#inputText).value = cont;
    } else {
        cont--;
        console.log("Removido 1");
        inputAction.value = cont; //Essa linha é a mesma que a próxima
        //document.querySelector('#inputText).value = cont;
    }
};

//Essa função acima e a abaixo são as mesmas

/*document.querySelector('#button).addEventListener('click', function(){
    if(cont == 0){
        cont++;
        console.log("Adicionado 1");
        inputAction.value = cont;
    } else {
        cont--;
        console.log("Removido 1");
        inputAction.value = cont;
    }
})*/ 

buttonListener.addEventListener('click', showMessageConsole);

/*FORMULÁRIOS
Quando queremos que o formulário não seja "Submitado", devemos criar um listener para o FORMULÁRIO INTEIRO ex*/
document.querySelector('form').addEventListener('submit', function(event){//note o parâmetro "event" na fução
    event.preventDefault(); //O prevent default faz com que a função comum de alguma tag não seja executada
});
//A função "preventDefault() pod ser utilziada em outros lugares também como:
//click do botão direito, nesse caso eu coloquei o evento no HTML inteiro
document.querySelector('html').addEventListener('contextmenu', function(event){
    event.preventDefault();
    console.log(this);
})


/*Objeto event
Esse objeto contém várias informações que podemos utilizar dentro do código e fazer validações, vamos por exemplo 
alterar a cor do backGround do input caso usemos o inputText e quando ele está vazio*/
var inputText2 = document.querySelector('#inputText2');
inputText2.addEventListener('keyup', function(event){//Com essa função abrimos o objeto EVENT no console para estudalo
    console.log(event);
})

inputText2.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        if(this.value != ''){
            this.style.backgroundColor = 'green';
        } else {
            this.style.backgroundColor = 'red';
        }
    }
})

/*TIMERS
Podemos adicionar timers no event listener, vamos usar a função de timer antes de qualquer coisa*/
var inputText3 = document.querySelector('#inputText3'),
    myA = document.querySelector('#myA'),
    timerPlus = 0,
    timerSum = 0,
    timerUpDown = true;

function incrementTimer(timer){
    if(timer > 0){
        this.timerSum += timer;
    } else {
        this.timerSum++;
    }
    return timerSum;
}

function increment() {
    inputText3.value = timerPlus;
    myA.innerHTML = timerSum;

    setTimeout(function(){

        if(timerUpDown == true){
            timerPlus++;
            if (timerPlus == 5) {timerUpDown = false}; 
        } else {
            timerPlus--;
            if (timerPlus == 0) {timerUpDown = true}; 
        } 
        incrementTimer(timerPlus);
        increment();
    }, 500);
    
}
increment();