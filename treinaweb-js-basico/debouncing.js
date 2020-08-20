var myDivOne = document.querySelector('#divOne'),
    myDivTwo = document.querySelector('#divTwo'),
    myInputOne = document.querySelector('#inputOne'),
    myInputTwo = document.querySelector('#inputTwo'),
    myTimeout;

    myDivOne.textContent = myInputOne.value;

//Essa próxima função se chama DEBOUNCE, ela é COMUM para não ficar disparando o listener toda hora
myInputOne.addEventListener('keyup', function(){
    clearTimeout(myTimeout);
    myTimeout = setTimeout(()=>{
        myDivOne.textContent = this.value;  
    }, 1000);
});

function everyFiveSeconds(){
    setTimeout(()=>{
        myDivTwo.textContent = myInputTwo.value;
        everyFiveSeconds();
    }, 2000);
};

everyFiveSeconds();