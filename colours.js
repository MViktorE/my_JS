let myStr = "ЧБ" // сюда вводим точное название цвета
let counter = 0
let myInterval = setInterval(() => {
	let myWindow = document.querySelectorAll('.inside_content')
	while (counter<myWindow.length){
		if (myWindow[counter].innerText.includes(myStr)) {
			console.log("Всё хорошо, ждём")
			myWindow[counter].querySelector('.small-btn')?.click()
			let myClick = document.getElementById('react-confirm-alert')?.querySelector('.green')
			document.getElementById('react-confirm-alert')?.querySelector('.green').click()
			if (myClick) {
				clearInterval(myInterval)
				console.log("Сделано!")
			}
		}
		counter++;
	}
	counter = 0;
}, 2)
