$(document).ready(function () {

    $("#nombreP").on('input',function () {
        if ($("#nombreP").val() == "") {
            $("#nombreP").addClass("error");
            $("#nombreP").removeClass("ok");
            document.getElementById("nombrePError").textContent="El producto tiene que tener nombre!";
        }else{
            $("#nombreP").removeClass("error");
            $("#nombreP").addClass("ok")
            document.getElementById("nombrePError").textContent="";
        }
    });

    $("#precio").on('input',function () {
        if ($("#precio").val() == "") {
            $("#precio").addClass("error");
            $("#precio").removeClass("ok");
            document.getElementById("precioError").textContent="Se debe poner el valor del producto!";
        }else{
            $("#precio").removeClass("error");
            $("#precio").addClass("ok")
            document.getElementById("precioError").textContent="";
        }
    });

    $('#enviar').click(function() {
        if ($("#nombreP").val() == ""||$("#precio").val() == ""){
            event.preventDefault();
            alert('Complete todos los campos vacios!')
        }else{
            $("#mensaje5").html("✓ ")
        }
    });

    $('#limpiar').click(function() {
        $("#nombreP").removeClass("ok");
        $("#nombreP").removeClass("error");
        $("#precio").removeClass("ok");
        $("#precio").removeClass("error");
        document.getElementById("precioError").textContent="";
        document.getElementById("nombrePError").textContent="";
    });

});
