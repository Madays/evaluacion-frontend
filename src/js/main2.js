/*dibujarOpcionesCiudad();*/
        function dibujarOpcionesCiudad(){
            var ciudades = get_regiones();
            for(var i=0;i<=13;i++){
                $('#origen').append('<option value='+ciudades[i].distance+'>'+ciudades[i].name+'</option>');
                $('#destino').append('<option value='+ciudades[i].distance+'>'+ciudades[i].name+'</option>');
            }
        }