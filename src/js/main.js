$(document).ready(function(){
    mostrarInfo();
    mostrarbtnBuscar();
    dibujarOpcionesCiudad();
    mostrarbtnBuscar();
    precioRuta()
});
function mostrarInfo(){
    $('#box-icon').click(function(){
        $('#info').slideToggle("slow"); 
    });
}

function mostrarbtnBuscar(){  
}

function precioRuta(){
    var ciudades = get_regiones();
    var consumoLkm = {
        auto: 12,
        moto: 21,
        minivan: 7,
        camion: 6
    }
    $('#btn-buscar').click(function(){
        var distancia = parseInt($('#origen').val()) + parseInt($('#destino').val());
        var precioMotocicleta = distancia/21*673;
        var precioAutomovil = distancia/12*673;
        var precioMinivan = distancia/7*673;
        var precioCamion = distancia/6*673;
        $('#precioMotocicleta').text(precioMotocicleta);
        $('#precioAutomovil').text(precioAutomovil);
        $('#precioMinivan').text(precioMinivan);
        $('#precioCamion').text(precioCamion);
    });
    
    
}
