/*
var list = [1,2,3],
    listElement = document.querySelector('ul'),
    myButton = document.querySelector('#myButton'),
    myInput = document.querySelector('#myInput');

function insert(event){
    if(event.keyCode === 13){
        list.push(event.target.value);
        event.target.value = ''; //Apagamos os valores dentro do input
        render();
    }
}

myButton.addEventListener('click', ()=>{
    list.push(myInput.value);
    myInput.value = '';
    render();
})

function remove(index){
    list.splice(index, 1);
    render();
}

function render(){
    listElement.innerHTML = list.map((item, index)=>{
        return `<li onclick="remove(${index})">${item}</li>`;
    }).join('');
}

render();
*/

var listOfObjects = [],
    myInputOne = document.querySelector('#myInput'),
    myInputTwo = document.querySelector('#myInput2'),
    myButton = document.querySelector('#myButton'),
    myUl = document.querySelector('ul');

function Pencil(color, length){
    this.color = color;
    this.length = length;
    this.write = function(){
        console.log(this.color);
    }
}

myButton.addEventListener('click', ()=>{
    if((myInputOne.value != '') && Number(myInputTwo.value)){
        listOfObjects.push(new Pencil(myInputOne.value, myInputTwo.value));
        render();
    }
});

function useWrite(index){
    return listOfObjects[index].write();
}

function render(){
    myUl.innerHTML = listOfObjects.map((item, index)=>{
        return `<li onclick="useWrite(${index})">Pincel ${index+1} - Cor: ${item.color}, Tamanho: ${item.length}</li>`
    }).join('');
    myInputOne.value = '';
    myInputTwo.value = '';
}

