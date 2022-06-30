$(document).ready(function () {

    $("#Email1").on('input',function () {
        if ($("#Email1").val() == "") {
            $("#Email1").addClass("error");
            $("#Email1").removeClass("ok");
            document.getElementById("correoError").textContent="El correo debe ser valido!";
        }else{
            $("#Email1").removeClass("error");
            $("#Email1").addClass("ok")
            document.getElementById("correoError").textContent="";
        }
    });

    $("#password1").on('input',function () {
        if ($("#password1").val().length < 8) {
            $("#password1").addClass("error");
            $("#password1").removeClass("ok");
            document.getElementById("passwordError").textContent="La contraseña debe tener mas de 8 caracteres!";
        }else{
            $("#password1").removeClass("error");
            $("#password1").addClass("ok")
            document.getElementById("passwordError").textContent="";
        }
    });

    $("#password2").on('input',function () {
        var contra1 = document.getElementById("password1").value
        var contra2 = document.getElementById("password2").value
        if (contra1 != contra2) {
            $("#password2").addClass("error");
            $("#password2").removeClass("ok");
            document.getElementById("passwordError2").textContent="Las contraseñas deben ser iguales!";
        }else{
            $("#password2").removeClass("error");
            $("#password2").addClass("ok")
            document.getElementById("passwordError2").textContent="";
        }
    });

    $('#enviar').click(function() {
        var contra1 = document.getElementById("password1").value
        var contra2 = document.getElementById("password2").value
        if ($("#Email1").val() == ""  ||$("#password1").val().length < 8){
            event.preventDefault();
            alert('Complete todos los campos vacios.')
        }if(contra1 != contra2){
            event.preventDefault();
            alert('Las contraseñas deben ser iguales')
        }else{
            $("#mensaje5").html("✓ ")
        }

    });

    $('#limpiar').click(function() {
        $("#Email1").removeClass("ok");
        $("#Email1").removeClass("error");
        document.getElementById("correoError").textContent="";
        $("#password1").removeClass("ok");
        $("#password1").removeClass("error");
        document.getElementById("passwordError").textContent="";
        $("#password2").removeClass("ok");
        $("#password2").removeClass("error");
        document.getElementById("passwordError2").textContent="";

    });

});
