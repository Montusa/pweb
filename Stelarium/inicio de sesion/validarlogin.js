function validalogin(){
    const inputemail = document.getElementById('email');
    const formatoemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const inputpass = document.getElementById('contraseña');
    var res = true;

    if (!formatoemail.test(inputemail.value)) {
        alert('Email no aceptable, por favor inténtelo nuevamente');
        res = false;
    }

    if (inputpass.value.length < 6) {
        alert('Su contraseña es menor a 6 caracteres, por favor inténtelo nuevamente');
        res = false;
    }
    
    if (res==false){
        event.preventDefault();
    }
}
