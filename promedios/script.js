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

	if (esPar(lista2.length)) {
		const elemento1 = lista[mitadLista - 1];
		const elemento2 = lista[mitadLista];

		return calcularMediaAritmetica([elemento1, elemento2]);
	} else {
		return lista[mitadLista2];
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
