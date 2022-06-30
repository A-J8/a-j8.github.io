$(document).ready(function () {

    $("#nombreP").on('input',function () {
        if ($("#nombreP").val() == "") {
            $("#nombreP").addClass("error");
            $("#nombreP").removeClass("ok");
            document.getElementById("nombreProerror").textContent="El producto tiene que tener nombre!";
        }else{
            $("#nombreP").removeClass("error");
            $("#nombreP").addClass("ok");
            
            document.getElementById("nombreProerror").textContent="";
        }
    });

    $("#descuento").on('input',function () {
        if ($("#descuento").val() == "") {
            $("#descuento").addClass("error");
            $("#descuento").removeClass("ok");
            document.getElementById("descuentoError").textContent="Se debe poner el valor del producto!";
        }else{
            $("#descuento").removeClass("error");
            $("#descuento").addClass("ok")
            document.getElementById("descuentoError").textContent="";
        }
    });

    $("#fechaIni").on('input',function () {
        if ($("#fechaIni").val() == "") {
            $("#fechaIni").addClass("error");
            $("#fechaIni").removeClass("ok");
            document.getElementById("fechaIniError").textContent="Se debe poner el valor del producto!";
        }else{
            $("#fechaIni").removeClass("error");
            $("#fechaIni").addClass("ok")
            document.getElementById("fechaIniError").textContent="";
        }
    });

    $("#fechaTerm").on('input',function () {
        if ($("#fechaTerm").val() == ""  ) {
            $("#fechaTerm").addClass("error");
            $("#fechaTerm").removeClass("ok");
            document.getElementById("fechaTermError").textContent="Se debe poner el valor del producto!";

        }else if  ($("#fechaTerm").val() > $("#fechaIni").val() == ""){
            $("#fechaTerm").addClass("error");
            $("#fechaTerm").removeClass("ok");
            document.getElementById("fechaTermError").textContent="La fecha debe ser posterios a la de inicio ";
        }else{
            $("#fechaTerm").removeClass("error");
            $("#fechaTerm").addClass("ok")
            document.getElementById("fechaTermError").textContent="";
        }
    });

    $('#enviar').click(function() {
        if ($("#nombreP").val() == ""||$("#descuento").val() == ""){
            event.preventDefault();
            alert('Complete todos los campos vacios!')
        }else{
            $("#mensaje5").html("✓ ")
           
        }
    });

    $('#limpiar').click(function() {
        $("#nombreP").removeClass("ok");
        $("#nombreP").removeClass("error");
        $("#descuento").removeClass("ok");
        $("#descuento").removeClass("error");
        document.getElementById("descuentoError").textContent="";
        document.getElementById("nombrePError").textContent="";
    });

});
