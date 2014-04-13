(function(the_window){

	// Variables
	var o_caja = $("#box");
	var o_add_button = $("#add-button");
	var o_add_input = $("#add-input");
	var o_paper_roll = $("#paper-roll");
	var o_paper_roll_multiple = $("#paper-roll-multiple");
	var o_count = $("#count");
	var o_empty_box = $("#empty-box");
	var curr_state = 'box-open';
	var opciones = [];

	// Estado inicial
	o_caja.attr('class', curr_state);

	// Al hacerle click en la caja, cambiar la clase
	o_caja.on('click', function(){

		if(curr_state == 'box-open'){

			// Verifico que haya al menos 2 opciones
			if(opciones.length < 2){
				alert('Tenés que ingresar al menos 2 opciones');
				return;
			}
			
			// La caja está abierta, cerrarla
			o_caja.attr('class', 'box-closed');
			curr_state = 'box-closed';
			o_add_button.disabled = true;

		} else {

			// La caja está cerrada, abrirla y mostrar seleccion al azar
			o_caja.attr('class', 'box-open');
			curr_state = 'box-open';
			o_add_button.disabled = false;

			// Mostrar opcion al azar
			the_window.setTimeout(function(){
				alert(opciones[Math.floor(Math.random() * opciones.length)]);
			}, 100);

		}

	});

	// Al hacerle click en el boton de agregar
	o_add_button.on('click', function(){

		// Chequear si se escribio algo
		if(!o_add_input.val())
			return;

		// Agregar opcion
		opciones.push(o_add_input.val());

		// Incrementar contador
		o_count.html(opciones.length);

		// Meter el papel
		o_paper_roll.attr('class', 'drop');
		o_add_input.val('');
		
		// Subir el papel nuevamente al terminar animacion
		the_window.setTimeout(function(){
			o_paper_roll.attr('class', '');
		}, 600);

	});

	// Al hacerle click en el boton de vaciar
	o_empty_box.on('click', function(){

		// Vaciar opciones
		opciones = [];

		// Poner clase de vaciado
		o_caja.addClass('box-empty');
		o_paper_roll_multiple.addClass('drop');
		the_window.setTimeout(function(){
			o_caja.removeClass('box-empty');
			o_paper_roll_multiple.removeClass('drop');
			o_count.html(opciones.length);
		}, 1500);

	});

})(window);