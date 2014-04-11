(function(the_window){
  // Wait for Cordova to load
  //
  document.addEventListener("deviceready", onDeviceReady, false);

  // Cordova is ready
  //
  function onDeviceReady() {
      // Empty
  }

	// Variables
	var o_caja = document.getElementById("box");
	var o_add_button = document.getElementById("add-button");
	var o_add_input = document.getElementById("add-input");
	var o_paper_roll = document.getElementById("paper-roll");
	var curr_state = 'box-open';
	var opciones = [];

	// Estado inicial
	o_caja.className = curr_state;

	// Al hacerle click en la caja, cambiar la clase
	o_caja.addEventListener('click', function(){

		if(curr_state == 'box-open'){

			// Verifico que haya al menos 2 opciones
			if(opciones.length < 2){
				navigator.notification.vibrate(2000);
				navigator.notification.alert(
				    'Salame!',
				    function(){},
				    'Sólo ingresaste una opción',
				    'Aceptar'
				);
				return;
			}
			
			// La caja está abierta, cerrarla
			o_caja.className = 'box-closed';
			curr_state = 'box-closed';
			o_add_button.disabled = true;

		} else {

			// La caja está cerrada, abrirla y mostrar seleccion al azar
			o_caja.className = 'box-open';
			curr_state = 'box-open';
			o_add_button.disabled = false;

			// Mostrar opcion al azar
			the_window.setTimeout(function(){
				navigator.notification.vibrate(2000);
				navigator.notification.alert(
				    'Su elección al azar es:',
				    function(){},
				    opciones[Math.floor(Math.random() * opciones.length)],
				    'Bueno'
				);
			}, 600);

		}

	});

	// Al hacerle click en el boton
	o_add_button.addEventListener('click', function(){

		// Chequear si se escribio algo
		if(!o_add_input.value)
			return;

		// Agregar opcion
		opciones.push(o_add_input.value);

		// Meter el papel
		o_paper_roll.className = 'drop';
		o_add_input.value = '';
		
		// Subir el papel nuevamente al terminar animacion
		the_window.setTimeout(function(){
			o_paper_roll.className = '';
		}, 600);

	});

})(window);