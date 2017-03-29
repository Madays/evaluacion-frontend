$(document).ready(function(){
    initMap();
    mostrarInfo();
    dibujarOpcionesCiudad();
    mostrarbtnBuscar();
    mostrarVehiculoPrecios();
    validadCantidadPasajeros(); 
    mostrarCompartirVehiculo();
    carcularPrecioUnitario();
    
    $('#btn-buscar').hide();
    $('#calculator').hide();
    $('#compartir-carro').hide();
});

function initMap() {
    getLocation();
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    var myLatLng = {lat:position.coords.latitude,lon:position.coords.longitude};
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: myLatLng.lat, lng: myLatLng.lon},
    zoom: 8
  });
    
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: myLatLng.lat, lng: myLatLng.lon},
        title: 'Hello World!',
        /*icon:"car.png"*/
    });        
}
function mostrarInfo(){
    $('#box-icon').click(function(){
        $('#info').slideToggle("slow"); 
    });
}
function dibujarOpcionesCiudad(){
            var ciudades = get_regiones();
            for(var i=0;i<=13;i++){
                $('#origen').append('<option value='+ciudades[i].distance+'>'+ciudades[i].name+'</option>');
                $('#destino').append('<option value='+ciudades[i].distance+'>'+ciudades[i].name+'</option>');
            }
        }
function mostrarbtnBuscar(){
    var origenSeleccionado=parseInt($('#origen').val());
    var destinoSeleccionado=parseInt($('#destino').val());
    if((origenSeleccionado!==0)&&(destinoSeleccionado!==0)){
        $('#btn-buscar').show();    
    }
}

function mostrarVehiculoPrecios(){
    var consumoLkm = {
        auto: 12,
        moto: 21,
        minivan: 7,
        camion: 6
    }
    $('#btn-buscar').click(function(){
        /*$('#calculator').slideToggle("slow");*/ 
        $('#calculator').show(); 
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
function validadCantidadPasajeros(){        

        /*var regex = /([0-9]+)/;//expresion de numeros del 1 al 9
        var numPasajero=parseInt($('#cant-pasajeros').val());        
        if(isNaN(numPasajero)){
            console.log(numPasajero);
            alert('Ingrese un numero');
        }*/   
    
}

function mostrarCompartirVehiculo(){
    $("#cant-pasajeros").change(function () {
        if(parseInt($('#cant-pasajeros').val())>0){
            $('#compartir-carro').show();
    }    
    });
    
}

function carcularPrecioUnitario(){
    /*
        PU = PrecioRuta/numPasajeros
        PrecioRuta = distancia*673/consumoLitrosVehiculo
    */
    alert('56789');
    var distancia = parseInt($('#origen').val()) + parseInt($('#destino').val());
    var numPasajeros = parseInt($('#cant-pasajeros').val());
    var precioMotocicleta = distancia/21*673;
    var precioAutomovil = distancia/12*673;
    var precioMinivan = distancia/7*673;
    var precioCamion = distancia/6*673;
    
    var motocicletaPU = precioMotocicleta/numPasajeros;
    var automovilPU = precioAutomovil/numPasajeros;
     
    $('#motocicleta').click(function(){
        console.log(parseInt($('#precioMotocicleta').text()));
        parseInt($('#precioMotocicleta').text());
    });

}
$('#mostrarPU').click(function(){
    alert('tghj');
    carcularPrecioUnitario();
});
