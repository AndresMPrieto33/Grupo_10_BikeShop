window.onload = function(){
    const form = document.querySelector('#form');
    form.name.focus();
    
    form.addEventListener("submit", (e) =>{
        const name = document.querySelector('#name');
        const description = document.querySelector('#description');
        const file = document.queryselector('#images');
        const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

        const errorName = document.querySelector('.errorName');
        const errorDescription = document.querySelector('.errorDescription');

        const errores = [];
        
        
        if(name.value = "" || name.value.length < 5){
            errores.push('debe conter mas de 5 caracteres');
            errorName.innerHTML = " mas de 5 caracters";
        }else{
            errorName.innerHTML = "";
        }
        if(description.value.length < 20 || description.value == ""){
            errores.push('debe tener al menos 8 caracteres');
            description.classList.add('error');
            errorDescription.innerHTML = 'debe tener al menos 8 caracteres';
        }else{
            description-classList.add('ok');
            description.classList.remove('error');
            errorDescription.innerHTML = "";
        }




        if(!allowedExtensions.exec(file.value)){
            errores.push('ingrese un archivo con extencion valida');
            errorFile.innerHTML = 'ingrese un archivo con extencion valida';
        }else{
            errorFile.innerHTML = "";
        }

        if(errores.length > 0){
            e.preventDefault();
        }

    })

}