function submitForm(){ //Essa função está sendo acessada pelo "onsubmit='return submitForm()'"
    var myForm = document.forms.myForm;
    if(myForm.message.value === ''){
        alert('A mensagem é obrigatória!');
        return false;
    }
}