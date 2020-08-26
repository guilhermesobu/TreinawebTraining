//Função CONSTRUTORA (Abstração) ================================================
function Animal(name, race){ //Essa função é como se fosse a classe ABSTRATA que vai ser herdada

    //Para deixar algo PRIVADO, a gente não utiliza o "this", apenas isso
    var privateVar = 'This var is private';//Ninguém pode acessar essa variável, mas ela faz parte da função construtora

    if( !(this instanceof Animal) ){
        return new Animal(name, race);
    }

    this.name = name;
    this.race = race;
    this.sleep = function(){
        console.log('zzz');
    }

    this.getPrivateVar = function(){ //Assim acessamos o valor da "privateVar", com o método "getPrivateVar()"
        return privateVar;
    }
    this.setPrivateVar = function(value){ //E aqui setamos valor a "privateVar", método "serPrivateVar(argumentoComValor)"
        privateVar = value;
    }

}

//Função CONSTRUTORA (Consolidação) ==============================================
function Dog(){
    this.bark = function(){
        console.log('woof');
    }
}

Dog.prototype = new Animal; //Assim DOG herda o protótipo(classe) ANIMAL
//Agora podemos instanciar o DOG e ele vai receber apenas as FUNÇÕES do protótipo ANIMAL
var dog = new Dog();