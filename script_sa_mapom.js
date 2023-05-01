const bodyTag = document.getElementById('container');
const inputValue = document.querySelector('input');
const optionValue = document.getElementById('region');

optionValue.addEventListener('input', () => {
	console.log(optionValue.value);
	dohvatiPodatkeRegije();
});

inputValue.addEventListener('input', () => {
	console.log(inputValue.value);

	fetch(`https://restcountries.com/v3.1/name/${inputValue.value}`)
		.then((response) => response.json())
		.then((podaci) => {
			console.log(podaci);

			bodyTag.innerHTML = `
            ${podaci
							.map((mapVrijednost) => {
								return `<div class="CountryBox">
                <img src=${mapVrijednost.flags.png} alt="" width=100% hight=auto;>
                <h1>${mapVrijednost.name.common}</h1>
                <p><b>Population:</b> ${mapVrijednost.population}</p>
                <p><b>Region:</b> ${mapVrijednost.region}</p>
                <p><b>Capital:</b> ${mapVrijednost.capital}</p>
                </div>
                `;
							})
							.join('')}
    `;
		})
		.catch((error) => console.log(error.message));
});

function dohvatiPodatke() {
	fetch('https://restcountries.com/v3.1/all')
		.then((response) => response.json())
		.then((podaci) => {
			console.log(podaci);

			bodyTag.innerHTML = `
            ${podaci
							.map((mapVrijednost) => {
								return `<div class="CountryBox">
                <img src=${mapVrijednost.flags.png} alt="" width=100% hight=auto;>
                <h1>${mapVrijednost.name.common}</h1>
                <p><b>Population:</b> ${mapVrijednost.population}</p>
                <p><b>Region:</b> ${mapVrijednost.region}</p>
                <p><b>Capital:</b> ${mapVrijednost.capital}</p>
                </div>
                `;
							})
							.join('')}
    `;

			//console.log(podaci[i]);
		})
		.catch((error) => console.log(error.message));
}
dohvatiPodatke();

function dohvatiPodatkeRegije() {
	fetch(`https://restcountries.com/v3.1/region/${optionValue.value}`)
		.then((response) => response.json())
		.then((podaci) => {
			console.log(podaci);

			bodyTag.innerHTML = `
            ${podaci
							.map((mapVrijednost) => {
								return `<div class="CountryBox">
                <img src=${mapVrijednost.flags.png} alt="" width=100% hight=auto;>
                <h1>${mapVrijednost.name.common}</h1>
                <p><b>Population:</b> ${mapVrijednost.population}</p>
                <p><b>Region:</b> ${mapVrijednost.region}</p>
                <p><b>Capital:</b> ${mapVrijednost.capital}</p>
                </div>
                `;
							})
							.join('')}
    `;

			//console.log(podaci[i]);
		})
		.catch((error) => console.log(error.message));
}
