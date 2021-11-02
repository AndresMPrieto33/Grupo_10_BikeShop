window.onload = function(){
    const form = document.querySelector('#form')
    form.email.focus();

    form.addEventListener("submit", (e) => {
        const esEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        const errors = [];

        if(email.value.match(esEmail)){
            email.classList.add('ok');
            email.classList.remove('error');
            errorEmail.innerHTML = ""
        }else{
            errors.push('debes ingresar un tipo de email valido');
            errorEmail.innerHTML = 'debes ingresar un tipo de email valido';
            email.classList.add('error');
            console.log(errors);
        }
        if(password.value.length < 8){
            errores.push('debe tener al menos 8 caracteres');
            password.classList.add('error');
            errorPassword.innerHTML = 'debe tener al menos 8 caracteres';
        }else{
            password.classList.add('ok');
            password.classList.remove('error');
            errorPassword.innerHTML = "";
        }


        if(errors.length > 0){
            e.preventDefault();
        }
    })

}