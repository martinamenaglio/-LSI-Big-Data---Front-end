//	Espero que se cargue la pagina
addEventListener(
	'load'
,	function(event)
	{
		
		//	Obtengo el boton Crear
		var botonCrear = document.querySelector('button.crear');

		//	Espero que se haga click sobre el boton crear
		botonCrear.addEventListener(
			'click'
		,	function()
			{

				//	Obtengo los campos del formulario
				var misCampos = document.querySelectorAll('input');

				//	Creo una fila
				var tr = document.createElement('tr');

				/*	Le agrego el atributo investigacion a esa fila y le asigno como valor
				 *	la cantidad de filas presentes en la tabla.
				
				 */
				tr.setAttribute('investigacion',document.querySelectorAll('tr').length);

				//	Inserto la fila creada dentro del cuerpo de la tabla
				document.querySelector('table tbody').appendChild(tr);				

				//	Recorro los campos obtenidos
				for (var indice = 0; indice < misCampos.length; indice++) {

					//	Creo una celda
					var td = document.createElement('td');

					//	Inserto el valor del campo dentro de la celda
					td.innerText = misCampos[indice].value;

					//	Tomo nombre del campo y se lo pongo como clase de la celda
					td.setAttribute('class',misCampos[indice].name);

					//	Inserto la celda dentro de la fila
					tr.appendChild(td);

					//	Vacio el valor del campo
					misCampos[indice].value = "";

				}

				//	Creo una celda
				var td = document.createElement('td');

				/*	Inserto como contenido de la celda dos botones.
				 *	El primero de ellos tiene la clase remover y sera utilizado para remover la fila
				 *	El segundo de ellos tiene la clase editar y sera utilizado para editar la fila
				 */
				td.innerHTML = "<button class='btn btn-default btn-primary boton-accion remover'><i class='fa fa-trash' aria-hidden='true'></i></button><button class='btn btn-default btn-primary boton-accion editar'><i class='fa fa-pencil' aria-hidden='true'></i></button>";

				//	Inserto la celda dentro de la fila
				tr.appendChild(td);

				//	Espero que se haga click sobre el boton remover
				td.querySelector('button.remover').addEventListener(
					'click'
				,	function(event)
					{
						//	Elimino el tr
						document.querySelector('table tbody').removeChild(tr);

					}
				)

				//	Espero que se haga click sobre el boton editar
				td.querySelector('button.editar').addEventListener(
					'click'
				,	function(event)
					{
						//	Recorro los campos del formulario
						for (var indice = 0; indice < misCampos.length; indice++) {

							//	Pongo como valor del campo el contenido de la celda correspondiente
							misCampos[indice].value = tr.querySelector('td.'+misCampos[indice].name).innerText;

						}

						//	Hago visible el boton modificar quitandole la clase hidden 
						document.querySelector('button.modificar').setAttribute('class','btn btn-default btn-primary modificar');

						//	Oculto el boton crear agregando la clase hidden
						document.querySelector('button.crear').setAttribute('class','hidden crear');

						/*	Al boton modificar le agrego el atributo investigacion y le pongo como valor el valor
						 *	del atributo investigacion del tr. Es decir, si estoy editando una fila como la siguiente:
						 *
						 *	<tr investigacion="2">........</tr>
						 *
						 *	El boton modificar tendra el mismo atributo y valor
						 *
						 *	<button investigacion="2" class="modificar">........</button>
						 */
						document.querySelector('button.modificar').setAttribute('investigacion',tr.getAttribute('investigacion'))
					}
				)

		
			}
		)

		//	Obtengo el boton editar
		var botonEditar = document.querySelector('button.modificar');

		//	Espero que se haga click sobre el boton editar
		botonEditar.addEventListener(
			'click'
		,	function()
			{
				//	Obtengo los campos del formulario
				var misCampos = document.querySelectorAll('input');

				//	Recorro los campos
				for (var indice = 0; indice < misCampos.length; indice++) {

					/*	Obtengo la celda
					 *	Por ejemplo, si queremos editar el nombre la segunda investigacion agregada
					 *	el sector usado tendra la forma tr[investigacion="2"] td.name" 
					 */
					var td = document.querySelector('tr[investigacion="'+botonEditar.getAttribute('investigacion')+'"] td.'+misCampos[indice].name);

					//	Cambio el valor de la celda por el valor del campo
					td.innerText = misCampos[indice].value;

					//	Vacio el valor del campo
					misCampos[indice].value = "";

				}

				//	Oculto el boton modificar agregandole la clase hidden 
				document.querySelector('button.modificar').setAttribute('class','hidden modificar');

				//	Hago visible el boton crear quitandole la clase hidden 
				document.querySelector('button.crear').setAttribute('class','btn btn-default btn-primary crear');

				//	Le vacio el atributo investigacion al boton modificar 
				document.querySelector('button.modificar').setAttribute('investigacion','')

				
			}
		)

	}
)
	