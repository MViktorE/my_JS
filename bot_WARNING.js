// создание игры

(() => {
    const app = document.getElementById('root');
    setInterval(() => {
        if(app.querySelectorAll('.lobby-item__exit').length) return;
        app.querySelector('.main-btn-create').click();
        setTimeout(() => {
            app.querySelector('.create-btn3').click().click()
        },200)
    },10000)
})()

// игра
setInterval(() => {
    // захват
    let flagZahvat = document.querySelector('.btnum17');
    if(flagZahvat) {
        flagZahvat?.click();
        let kletki = document.querySelectorAll('.custom_color0');
        let i = 0;
        while (i < kletki.length){
            kletki[i]?.click();
            i++;
        }
        kletki = document.querySelectorAll('.custom_color1');
        i = 0;
        while (i < kletki.length){
			kletki[i]?.click();
			i++;
		}
	}
	// инвестор
	let flagInvestor = document.querySelector('.btnum13');
	if(flagInvestor) {
		flagInvestor?.click();
		let kletki = document.querySelectorAll('.game-step__inner-info');
		let i = 0;
		while (i < kletki.length){
			kletki[i]?.click();
			i++;
		}
	}
	// банан, отказ и игра
	let monoChat = document.getElementsByClassName('chat__message chat__message--green');
	if (monoChat[monoChat.length-1].innerText.includes("попадает на фирму Банан")){
		document.querySelector('.btnum19')?.click(); // отказ
		document.querySelector('.btnum2')?.click(); // аук
	    document.querySelector('.btnum3')?.click(); // купить
		console.log("БАНАН не КУПИЛ!")
	}
	else {	
		let player = document.querySelector('#player' + userId);
		if(player) {
                let myInfo = player.querySelector('.player__avatar').querySelector('svg');
                if(myInfo && myInfo.textContent && (+myInfo.textContent) < 27 ) {
                    document.querySelector('.btnum19')?.click(); // отказ
                    document.querySelector('.btnum2')?.click(); // аук
                }
            else {
                document.querySelector('.btnum9')?.click(); // бросить кубик
                document.querySelector('.btnum3')?.click(); // купить
                document.querySelector('.btnum8')?.click(); // оплатить
            }
        }
    }
},3000)
