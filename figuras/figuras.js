// Cuadrado

function perimetroCuadrado(lado) {
	return lado * 4;
}

function areaCuadrado(lado) {
	return lado ** 2;
}

// Triangulo

function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

function areaTriangulo(altura, base) {
	return (altura * base) / 2;
}

// Circulo
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

// ===== Funciones OnClick =====
// ===== Cuadrado =====
function calcularPerimetroCuadrado() {
	const valorPerimetro = document.querySelector('.valorPerimetro');
	const input = document.getElementById('inputCuadrado');
	const value = input.value;

	const perimetro = perimetroCuadrado(value);
	valorPerimetro.textContent = `${perimetro}`;
}

function calcularAreaCuadrado() {
	const valorArea = document.querySelector('.valorArea');
	const input = document.getElementById('inputCuadrado');
	const value = input.value;

	const area = areaCuadrado(value);
	valorArea.textContent = `${area}`;
}

// ===== Triangulo =====
function calcularPerimetroTriangulo() {
	const valorPerimetro = document.querySelector('.valorPerimetroTriangulo');
	const inputLado1 = document.getElementById('inputLado1').value;
	const inputLado2 = document.getElementById('inputLado2').value;
	const inputBase = document.getElementById('inputBase').value;

	const perimetro = perimetroTriangulo(
		parseInt(inputLado1),
		parseInt(inputLado2),
		parseInt(inputBase)
	);
	valorPerimetro.textContent = perimetro;
}

function calcularAreaTriangulo() {
	const valorArea = document.querySelector('.valorAreaTriangulo');
	const inputAltura = document.getElementById('inputAltura').value;
	const inputBase = document.getElementById('inputBase').value;

	const area = areaTriangulo(parseInt(inputAltura), parseInt(inputBase));
	valorArea.textContent = area;
}
