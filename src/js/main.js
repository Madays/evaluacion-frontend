$(document).ready(function(){
    mostrarInfo();
    mostrarbtnBuscar();
    dibujarOpcionesCiudad();
    mostrarbtnBuscar();
});
function mostrarInfo(){
    $('#box-icon').click(function(){
        $('#info').slideToggle("slow"); 
    });
}
function dibujarOpcionesCiudad(){
    var ciudades = get_regiones();
    for(var i=0;i<=14;i++){
        $('#origen').append('<option value='+i+'>'+ciudades[i].name+'</option>');
        $('#destino').append('<option value='+i+'>'+ciudades[i].name+'</option>');
    }
}
function mostrarbtnBuscar(){
    console.log($('#origen').val()*7);
    
}