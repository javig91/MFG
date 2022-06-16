

const texto_tuSitioWeb = document.getElementById('maquina-Escribir_sitioWeb');
const texto_hosting = document.getElementById('maquina-Escribir_hosting');
const texto_compatibilidad = document.getElementById('maquina-Escribir1');
const texto_elegancia = document.getElementById('maquina-Escribir2');
const texto_detalle = document.getElementById('maquina-Escribir3');

const maquinaEscribir_sitioWeb = (text = '', tiempo = 200, etiqueta = '') => {
	let arrayDeCaracteres = text.split('');
	etiqueta.innerHTML = '';
	let i = 0;
	let j = text.length;
	let escribir = setInterval(function() {
		if ( i === arrayDeCaracteres.length) {
			etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
			j--;
			if ( j === 0 ) {
				etiqueta.innerHTML = '';
				i = 0;
				j = text.length;
			}
		} else {
			etiqueta.innerHTML += arrayDeCaracteres[i];
			i++;
		}
	}, tiempo)
}

const maquinaEscribir_hosting = (text = '', tiempo = 200, etiqueta = '') => {
	let arrayDeCaracteres = text.split('');
	etiqueta.innerHTML = "";
	let i = 0;
	let j = text.length;
	let escribir = setInterval(function() {
		if ( i === arrayDeCaracteres.length) {
			etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
			j--;
			if ( j === 0 ) {
				etiqueta.innerHTML = '';
				i = 0;
				j = text.length;
			}
		} else {
			etiqueta.innerHTML += arrayDeCaracteres[i];
			i++;
		}
	}, tiempo)
}

const maquinaEscribir1 = (text = '', tiempo = 200, etiqueta = '') => {
	let arrayDeCaracteres = text.split('');
	etiqueta.innerHTML = '';
	let i = 0;
	let j = text.length;
	let escribir = setInterval(function() {
		if ( i === arrayDeCaracteres.length) {
			etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
			j--;
			if ( j === 0 ) {
				etiqueta.innerHTML = '';
				i = 0;
				j = text.length;
			}
		} else {
			etiqueta.innerHTML += arrayDeCaracteres[i];
			i++;
		}
	}, tiempo)
}

const maquinaEscribir2 = (text = '', tiempo = 200, etiqueta = '') => {
	let arrayDeCaracteres = text.split('');
	etiqueta.innerHTML = '';
	let i = 0;
	let j = text.length;
	let escribir = setInterval(function() {
		if ( i === arrayDeCaracteres.length) {
			etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
			j--;
			if ( j === 0 ) {
				etiqueta.innerHTML = '';
				i = 0;
				j = text.length;
			}
		} else {
			etiqueta.innerHTML += arrayDeCaracteres[i];
			i++;
		}
	}, tiempo)
}

const maquinaEscribir3 = (text = '', tiempo = 200, etiqueta = '') => {
	let arrayDeCaracteres = text.split('');
	etiqueta.innerHTML = '';
	let i = 0;
	let j = text.length;
	let escribir = setInterval(function() {
		if ( i === arrayDeCaracteres.length) {
			etiqueta.innerHTML = text.substring(0, j); // subtring = muestra una parte de texto, desde la posicion 0 hasta 'j'
			j--;
			if ( j === 0 ) {
				etiqueta.innerHTML = '';
				i = 0;
				j = text.length;
			}
		} else {
			etiqueta.innerHTML += arrayDeCaracteres[i];
			i++;
		}
	}, tiempo)
}

maquinaEscribir_sitioWeb("  Tu Sitio Web  ", 350, texto_tuSitioWeb);
maquinaEscribir_hosting("  Hosting  ", 350, texto_hosting);
maquinaEscribir1("  Compatibilidad  ", 350, texto_compatibilidad);
maquinaEscribir2("  Elegancia  ", 350, texto_elegancia);
maquinaEscribir3("  Detalle  ", 350, texto_detalle);