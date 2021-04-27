//Event Listeners + Arrow Functions
const tlacitka = document.querySelectorAll('.tlacitko-pozdravu');

tlacitka.forEach((tlacitko) => {
	tlacitko.addEventListener('click', (udalost) => {
		console.log('Ahoj ' + udalost.target.innerText);
	});
});
