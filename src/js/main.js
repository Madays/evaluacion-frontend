$(document).ready(function(){
    initMap();
    mostrarInfo();
    mostrarbtnBuscar();
    dibujarOpcionesCiudad();
    mostrarbtnBuscar();
    precioRuta();
    validadCantidadPasajeros(); 
    elegirVehiculo();
    
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
    
    var myLatLng1 = [
      {lat: -12.1511485, lng: -70.531948},{lat: -15.4521485, lng: -73.532948},{lat: -15.4521485, lng: -71.532948}];
    //{lat: -15.4521485, lng: -71.532948},{lat: -16.4531485, lng: -74.533948},{lat: -15.4541485, lng: -73.534948},{lat: -16.4571485, lng: -71.532948}
    for(var i=0;i<=myLatLng1.length;i++){
        var marker1 = new google.maps.Marker({
          map: map,
          position: myLatLng1[i],            
          title: 'Hello World!',
          /*icon:"../img/car.png"*/
        });    
    }    
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
var vehiculo=false;
function elegirVehiculo(){
    $('input[type=radio]').change(function() {             return vehiculo=true;
        console.log(vehiculo);                                      
    });
    
}

