$(document).ready(function(){
    initMap();
    mostrarInfo();
    mostrarbtnBuscar();
    dibujarOpcionesCiudad();
    mostrarbtnBuscar();
    precioRuta();
    validadCantidadPasajeros(); 
    mostrarCompartirVehiculo();
    mostrarPrecioUnitario();
    
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

function mostrarbtnBuscar(){
    var origenSeleccionado=parseInt($('#origen').val());
    var destinoSeleccionado=parseInt($('#destino').val());
    if((origenSeleccionado!==0)&&(destinoSeleccionado!==0)){
        $('#btn-buscar').slideToggle("slow");    
    }
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
        $('#calculator').slideToggle("slow"); 
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
function mostrarPrecioUnitario(){
    $('#mostrarPU').on('click',function(){
        console.log($('#camion').val());
        alert('df')    ;
    });
}
