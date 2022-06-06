window.addEventListener('DOMContentLoaded', function(event){
    var form_register=document.querySelector('#form-register');
    form_register.addEventListener('submit', function(event){
        event.preventDefault();
        var canSubmit=true;

        var input_name = document.querySelector('#input_name');
        console.log(input_name);
        if(input_name.value == ""){
            document.querySelector('#name_container .input-error').innerHTML = "El nombre es obligatorio";
            canSubmit=false;
        }
        else{
            document.querySelector('#name_container .input-error').innerHTML = "";
        }

        var input_last_name = document.querySelector('#input_last_name');
        console.log(input_last_name);
        if(input_last_name.value == ""){
            document.querySelector('#last_name_container .input-error').innerHTML = "El apellido es obligatorio";
            canSubmit=false;
        }
        else{
            document.querySelector('#last_name_container .input-error').innerHTML = "";
        }
// Cedula
        var input_identification_container = document.querySelector('#input_identification_container');
        console.log(input_identification_container);
        if(input_identification_container.value == ""){
            document.querySelector('#identification_container .input-error').innerHTML = "La cédula es obligatorio";
            canSubmit=false;
            
        }
        else{
            document.querySelector('#identification_container .input-error').innerHTML = "";
        }
//email
        var input_email_container = document.querySelector('#input_email_container');
        console.log(input_email_container);
        if(input_email_container.value == ""){
            document.querySelector('#email_container .input-error').innerHTML = "El Email es obligatorio";
            canSubmit=false;
        }
        else{
            var indexOne=input_email_container.value.indexOf("@");
            var indexTwo=input_email_container.value.indexOf(".");
            if(indexOne<0 || indexTwo<0){
                document.querySelector('#email_container .input-error').innerHTML = "El Email no tiene el formato";  
                canSubmit=false;
            }
            else{
                document.querySelector('#email_container .input-error').innerHTML = "";
            }

            
        }
        if(!canSubmit)
            {
                event.preventDefault();
            }

    })
})