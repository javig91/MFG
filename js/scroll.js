const p_nosotros = document.getElementById('p_nosotros');
const p_hosting = document.getElementById('p_hosting');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
const circle5 = document.getElementById('circle5');
const circle6 = document.getElementById('circle6');
const circle7 = document.getElementById('circle7');
const circle8 = document.getElementById('circle8');
const circle9 = document.getElementById('circle9');
const circle10 = document.getElementById('circle10');
const circle11 = document.getElementById('circle11');
const circle12 = document.getElementById('circle12');
const img_incluir_ID = document.getElementById('img_incluir_ID');
const img_excluir_ID = document.getElementById('img_excluir_ID');
const icono_excluir_ID = document.getElementById('icono_excluir_ID');
const list_servidor1_ID = document.getElementById('list_servidor1_ID');
const list_servidor2_ID = document.getElementById('list_servidor2_ID');
const list_servidor3_ID = document.getElementById('list_servidor3_ID');
const list_servidor4_ID = document.getElementById('list_servidor4_ID');
const list_servidor5_ID = document.getElementById('list_servidor5_ID');
const list_servidor6_ID = document.getElementById('list_servidor6_ID');

const observador = new IntersectionObserver(entradas => {
	entradas.forEach(entrada => {

	  // Clase para cuando se 'cruce' en el viewport
		if (entrada.intersectionRatio > 0) {
			entrada.target.classList.add('visible');
			
			// CODIGO PARA LOS PROYECTOS	
			if (entrada.target.classList.contains('div-proyectos')) {
				if ( window.innerWidth > 650) {
					entrada.target.classList.remove('girar');
					entrada.target.classList.add('girar_mediaQuery');
				} else {
					entrada.target.classList.remove('girar_mediaQuery');
					entrada.target.classList.add('girar');
				}
			}

			// CODIGO PARA QUE GIRE EL MUNDO		
			// if (entrada.target.classList.contains('mundo')) {
			// 	entrada.target.classList.add('girar_mundo');
			// }

			// AGREGAMOS CLASES A LOS CIRCULOS
			// if (entrada.target.classList.contains('circle')) {
			// }

			if (entrada.target.classList.contains('list_servidor1') || entrada.target.classList.contains('list_servidor2') || entrada.target.classList.contains('list_servidor3') || entrada.target.classList.contains('list_servidor4') || entrada.target.classList.contains('list_servidor5') || entrada.target.classList.contains('list_servidor6')) {
				entrada.target.classList.add('visible');
			}
			
			// AGREGAMOS CLASES A LAS BASES
			if (entrada.target.classList.contains('span_base')) {
				entrada.target.classList.remove('visible');
				entrada.target.classList.add('rellenar_interior');
			}
			
		}
		// Removemos clases
		else {

			entrada.target.classList.remove('visible');
			entrada.target.classList.remove('girar');
			// entrada.target.classList.remove('girar_mediaQuery');
			entrada.target.classList.remove('rellenar_interior');
			entrada.target.classList.remove('girar_mundo');
		}
	})
})
  
const proyectos = document.querySelectorAll('.div-proyectos');
	proyectos.forEach((elemento) => {
	observador.observe(elemento);
})

const bases = document.querySelectorAll('.span_base');
	bases.forEach((elemento) => {
	observador.observe(elemento);
})
  

observador.observe(p_nosotros);
observador.observe(p_hosting);
// observador.observe(mundo);
observador.observe(circle1);
observador.observe(circle2);
observador.observe(circle3);
observador.observe(circle4);
observador.observe(circle5);
observador.observe(circle6);
observador.observe(circle7);
observador.observe(circle8);
observador.observe(circle9);
observador.observe(circle10);
observador.observe(circle11);
observador.observe(circle12);
observador.observe(img_incluir_ID);
observador.observe(img_excluir_ID);
observador.observe(icono_excluir_ID);
observador.observe(list_servidor1_ID);
observador.observe(list_servidor2_ID);
observador.observe(list_servidor3_ID);
observador.observe(list_servidor4_ID);
observador.observe(list_servidor5_ID);
observador.observe(list_servidor6_ID);
// observador.observe(proyectos);