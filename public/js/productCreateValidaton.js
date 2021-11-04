window.onload = function(){
    const form = document.querySelector('#form');
    form.name.focus();
    
    form.addEventListener("submit", (e) =>{
        // e.preventDefault();
        const name = document.querySelector('#name');
        const description = document.querySelector('#description');
        
        const errorName = document.querySelector('.errorName');
        const errorDescription = document.querySelector('.errorDescription');
        const errorFile = document.querySelector('.errorFile');

        const errores = [];
        
        
        if(name.value = "" || name.value.length < 5){
            errores.push('debe conter mas de 5 caracteres');
            name.classList.add('error')
            errorName.innerHTML = " mas de 5 caracters";
        }else{
            name.classList.add('ok')
            name.classList.remove('error')
            errorName.innerHTML = "";
        }
        if(description.value.length < 20 || description.value == ""){
            errores.push('debe tener al menos 20 caracteres');
            description.classList.add('error');
            errorDescription.innerHTML = 'debe tener al menos 20 caracteres';
        }else{
            description.classList.add('ok');
            description.classList.remove('error');
            errorDescription.innerHTML = "";
        }


        let fileCheck = () => {
            const file = document.queryselector('#images');
            let filePath = file.value;
            const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            if(!allowedExtensions.exec(filePath)){
                errores.push('ingrese un archivo con extencion valida');
                file.classList.add('error');
                errorFile.innerHTML = 'ingrese un archivo con extencion valida';
            }else{
                file.classList.add('ok');
                file.classList.remove('error');
                errorFile.innerHTML = "";
            }
        }




        if(errores.length > 0){
            e.preventDefault();
        }

    })

}