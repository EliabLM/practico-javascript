// Mobile
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	links.classList.toggle('show-links');
});

// ========== Media aritmetica ==========
function calcularMediaAritmetica(lista) {
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++) {
	// 	sumaLista += lista[i];
	// }

	const sumaLista = lista.reduce(function (acc = 0, element) {
		return (acc += element);
	});

	return sumaLista / lista.length;
}

// ========== Mediana ==========
function calcularMediana(lista) {
	lista.sort(function (a, b) {
		return a - b;
	});

	const mitadLista = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		const elemento1 = lista[mitadLista - 1];
		const elemento2 = lista[mitadLista];

		return calcularMediaAritmetica([elemento1, elemento2]);
	} else {
		return lista[mitadLista];
	}
}

function esPar(numero) {
	if (numero % 2) {
		return false;
	} else {
		return true;
	}
}

// ========== Moda ==========

function calcularModa(lista) {
	const listaCount = {};

	lista.map(function (elemento) {
		if (listaCount[elemento]) {
			listaCount[elemento] += 1;
		} else {
			listaCount[elemento] = 1;
		}
	});

	const listaArray = Object.entries(listaCount).sort(function (a, b) {
		return a[1] - b[1];
	});

	return listaArray[listaArray.length - 1];
}

function limpiarDatos(input) {
	return (arrayInput = input.value
		.split(',')
		.map((num) => {
			return parseInt(num);
		})
		.filter(Boolean));
}

// Funciones OnClick
const inputLista = document.querySelector('.input');
const media = document.querySelector('.result-media');
const mediana = document.querySelector('.result-mediana');
const moda = document.querySelector('.result-moda');

function calcularMediaOnClick() {
	const arrayInputLista = limpiarDatos(inputLista);
	const resultMedia = calcularMediaAritmetica(arrayInputLista);
	media.textContent = `${resultMedia.toFixed(2)}`;
}

function calcularMedianaOnClick() {
	const arrayInputLista = limpiarDatos(inputLista);
	const resultMediana = calcularMediana(arrayInputLista);
	mediana.textContent = resultMediana.toFixed(2);
}
function calcularModaOnClick() {
	const arrayInputLista = limpiarDatos(inputLista);
	const resultModa = calcularModa(arrayInputLista);
	moda.textContent = resultModa[0];
}
