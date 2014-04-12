(function(the_window){

	// Variables
	var o_caja = document.getElementById("box");
	var o_add_button = document.getElementById("add-button");
	var o_add_input = document.getElementById("add-input");
	var o_paper_roll = document.getElementById("paper-roll");
	var o_count = document.getElementById("count");
	var o_empty_box = document.getElementById("empty-box");
	var curr_state = 'box-open';
	var opciones = [];

	// Estado inicial
	o_caja.className = curr_state;

	// Al hacerle click en la caja, cambiar la clase
	o_caja.addEventListener('click', function(){

		if(curr_state == 'box-open'){

			// Verifico que haya al menos 2 opciones
			if(opciones.length < 2){
				alert('Tenés que ingresar al menos 2 opciones');
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
				alert(opciones[Math.floor(Math.random() * opciones.length)]);
			}, 100);

		}

	});

	// Al hacerle click en el boton de agregar
	o_add_button.addEventListener('click', function(){

		// Chequear si se escribio algo
		if(!o_add_input.value)
			return;

		// Agregar opcion
		opciones.push(o_add_input.value);

		// Incrementar contador
		o_count.innerHTML = opciones.length;

		// Meter el papel
		o_paper_roll.className = 'drop';
		o_add_input.value = '';
		
		// Subir el papel nuevamente al terminar animacion
		the_window.setTimeout(function(){
			o_paper_roll.className = '';
		}, 600);

	});

	// Al hacerle click en el boton de vaciar
	o_empty_box.addEventListener('click', function(){

		// Vaciar opciones
		opciones = [];

		// Incrementar contador
		o_count.innerHTML = opciones.length;

	});

})(window);