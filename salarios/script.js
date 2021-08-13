// Mobile
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	links.classList.toggle('show-links');
});

const salariosCol = colombia.map(function (persona) {
	return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (a, b) {
	return a - b;
});

// Mediana general
const medianaGeneralCol = calcularMediana(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = calcularMediana(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);

// Funciones medidas de tendencia central
function calcularMediaAritmetica(lista) {
	let suma = 0;
	for (let i = 0; i < lista.length; i++) {
		suma += lista[i];
	}

	return suma / lista.length;
}

function calcularMediana(lista) {
	const mitad = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		return calcularMediaAritmetica([lista[mitad - 1], lista[mitad]]);
	} else {
		return lista[mitad];
	}
}

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

function esPar(numero) {
	return numero % 2 === 0;
}
