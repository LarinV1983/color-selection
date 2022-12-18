const columns =document.querySelectorAll('.column');

document.addEventListener('keydown', function(event) {
	event.preventDefault();
	if (event.code.toLowerCase() === 'space') {
		RandomColors();
	}
});

document.addEventListener('click', function(event) {
	const type = event.target.dataset.type;
	if (type === 'Lock') {
		const node = event.target.tagName.toLowerCase() === 'i'
		? event.target : event.target.children[0]
		node.classList.toggle('fa-lock-open')
		node.classList.toggle('fa-lock')
	}
});

function generateRandomColors() {
	const hexCode = '0123456789ABCDEF';
	let color ='';
	for (let i=0; i<6; i++) {
		color += hexCode[Math.floor(Math.random() * hexCode.length)];
	}
	return '#'+ color;
}

function copyToClick(text) {
	return navigator.clipboard.writeText(text);
}

function RandomColors() {
	columns.forEach((column) => {
		const locked = column.querySelector('i').classList.contains('fa-lock');
		const text = column.querySelector('h2');
		const button = column.querySelector('button');
		const color = generateRandomColors();

		if (locked) {
			return
		}

		text.textContent = color;
		column.style.background = color;

		TextColor(text, color);
		TextColor(button, color);
	});
};

function TextColor(text, color) {
	const luminance = chroma(color).luminance();
	text.style.color = luminance > 0.5 ? 'black' : 'white';
}

RandomColors();