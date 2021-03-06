// Mobile
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	links.classList.toggle('show-links');
});

// Funciones OnClick
function calcularPrecioConDescuento(precio, descuento) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
	return precioConDescuento;
}

function onClickButtonPriceDiscount() {
	const inputPrice = document.getElementById('inputPrice');
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById('inputDiscount');
	const discountValue = inputDiscount.value;

	const precioConDescuento = calcularPrecioConDescuento(
		priceValue,
		discountValue
	);

	const resultP = document.getElementById('resultP');
	resultP.innerHTML = `Valor a pagar:<br> $${precioConDescuento}`;
}
