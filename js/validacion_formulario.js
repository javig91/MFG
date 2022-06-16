let formulario = document.getElementById('formulario-contacto');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');

const exp_reg_nombre = /^[a-zA-Z0-9À-ÿ\s]{1,20}$/; // Letras y espacios, pueden llevar acentos.
const exp_reg_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/;
const exp_reg_textarea = /^[\W\w\s]{1,600}$/;
// const exp_reg_textarea2 = /^[a-zA-Z0-9_.+-\s]{1,600}$/;

const expresiones = {
	nombre: exp_reg_nombre, 
	correo: exp_reg_correo,
	textarea: exp_reg_textarea,
};

const campos = {
	usuario: false,
    correo: false,
    asunto: false,
    textarea: false,
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre') // accedemos a la expresion regular, al evento del input y por ultimo al nombre del campo
		break;

		case "mail":
			validarCampo(expresiones.correo, e.target, 'correo') // accedemos a la expresion regular, al evento del input y por ultimo al nombre del campo
        break;
        
        case "asunto":
			validarAsunto(expresiones.asunto, e.target, 'asunto') // accedemos a la expresion regular, al evento del input y por ultimo al nombre del campo
		break;

		case "mensaje":
			validarCampoTextarea(expresiones.textarea, e.target, 'mensaje') // accedemos a la expresion regular, al evento del input y por ultimo al nombre del campo
		break;
	}
}

const validarCampo = (expresion, input, campo) => { // tenemos que pasarle 3 parametros. El primero 'expresion' busca la expresion regular correspondiente. La segunda le pasamos el input al cual nosotros queremos corroborar y se busca el valor del input y por ultimo el "campo": para modificar el usuario, que sea nombre, contrasenia, mail, telefono, etc, tiene que ser dinamico
	if (expresion.test(input.value)) { //accedemos al valor del input y le decimos que lo compruebe con la expresion regular que corresponda
		document.getElementById(`div_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`div_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#div_${campo} i`).classList.add('fa-check-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_${campo} i`).classList.remove('fa-times-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`div_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`div_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#div_${campo} i`).classList.add('fa-times-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_${campo} i`).classList.remove('fa-check-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarCampoTextarea = (expresion, textarea, campo) => { // tenemos que pasarle 3 parametros. El primero 'expresion' busca la expresion regular correspondiente. La segunda le pasamos el input al cual nosotros queremos corroborar y se busca el valor del input y por ultimo el "campo": para modificar el usuario, que sea nombre, contrasenia, mail, telefono, etc, tiene que ser dinamico
	if (expresion.test(textarea.value)) { //accedemos al valor del input y le decimos que lo compruebe con la expresion regular que corresponda
		document.getElementById(`div_textarea`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`div_textarea`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#div_textarea i`).classList.add('fa-check-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_textarea i`).classList.remove('fa-times-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_textarea .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`div_textarea`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`div_textarea`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#div_textarea i`).classList.add('fa-times-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_textarea i`).classList.remove('fa-check-circle') ; //accedemos al icono con la letra 'i'
		document.querySelector(`#div_textarea .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => { // se le pasa el parametro input para poder identificarlo
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

textarea.forEach((textarea) => { // se le pasa el parametro textarea para poder identificarlo
	textarea.addEventListener('keyup', validarFormulario);
	textarea.addEventListener('blur', validarFormulario);
});
