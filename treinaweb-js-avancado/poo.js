var appDiv = document.querySelector('#app');

appDiv.innerHTML = '<b>teste</b>';

console.log("teste");



function Animal(name, race){

    

    this.name = name;
    this.race = race;
    this.sleep = function(){
        console.log('zzz');
    }
}