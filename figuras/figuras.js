// Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
	return lado * 4;
}

function areaCuadrado(lado) {
	return lado ** 2;
}

console.groupEnd();

// Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

function areaTriangulo(altura, base) {
	return (altura * base) / 2;
}

console.groupEnd();

// Circulo
console.group("Circulo");
const PI = Math.PI;

function diametroCirculo(radio) {
	return radio * 2;
}

function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}

function areaCirculo(radio) {
	return radio ** 2 * PI;
}

console.groupEnd();

// Funciones OnClick
function calcularPerimetroCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;

	const perimetro = perimetroCuadrado(value);
	alert(perimetro);
}

function calcularAreaCuadrado() {
	const input = document.getElementById("inputCuadrado");
	const value = input.value;

	const area = areaCuadrado(value);
	alert(area);
}
