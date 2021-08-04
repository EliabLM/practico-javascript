function calcularPrecioConDescuento(precio, descuento) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
	return precioConDescuento;
}

function onClickButtonPriceDiscount() {
	const inputPrice = document.getElementById("inputPrice");
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById("inputDiscount");
	const discountValue = inputDiscount.value;

	calcularPrecioConDescuento(priceValue, discountValue);
}
