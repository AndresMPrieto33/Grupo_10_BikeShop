window.onload = function(){
    const form = document.querySelector('#form')
    form.email.focus();

    form.addEventListener("submit", (e) => {
        // e.preventDefault();
        const esEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        const errorEmail = document.querySelector('.errorEmail');
        const errorPassword = document.querySelector('.errorPassword')

        const errores = [];

        if(email.value.match(esEmail)){
            email.classList.add('ok');
            email.classList.remove('error');
            errorEmail.innerHTML = ""
        }else{
            errores.push('Debes ingresar un tipo de email valido');
            errorEmail.innerHTML = 'Debes ingresar un tipo de email valido';
            email.classList.add('error');
            console.log(errores);
        }
        if(password.value == "" || password.value.length < 8){
            errores.push('La contraseña debe tener al menos 8 caracteres');
            password.classList.add('error');
            errorPassword.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
        }else{
            password.classList.add('ok');
            password.classList.remove('error');
            errorPassword.innerHTML = "";
        }

        console.log(errores)
        if(errores.length > 0){
            e.preventDefault();
        }
    })

}