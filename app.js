const columns =document.querySelectorAll('.column');

function generateRandomColors() {
	const hexCode = '0123456789ABCDEF';
	let color ='';
	for (let i=0; i<6; i++) {
		color += hexCode[Math.floor(Math.random() * hexCode.length)];
	}
	return '#'+ color;
}

function RandomColors() {
	columns.forEach((column) => {
		const text = column.querySelector('h2');
		const color = generateRandomColors();
		text.textContent = color;
		column.style.background = color;
	});
};



RandomColors();