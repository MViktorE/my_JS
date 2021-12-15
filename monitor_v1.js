let names = ['Кафе','Джем','Мёд','Бар','Яблоко','Ресторан','Груша','Кокос','Ананас','Реклама','Мода','Туризм','Радио','Телевизор','Табак','Пивко','Водочка','Клуб','Казино','Футбол','Судоверфь','Автомобиль','Авиация','Таити','Карибы']
let buisness = 1;
(() => {
	let buisness = 1;
	let flag = [];
	let flagPrev = [];
	let btnSee = 0;
	let d = new Date();
	let clans = [];
	let clansPrev = [];
	let item = 0;
	let a = 0;
	let addMin = 0;
	let zahvat = '';
	let ks = 0;
	let timezone = 0;
	setInterval(() => {
		item = document.querySelectorAll('.one-business')[buisness - 1];
		btnSee = item.querySelector('.lobby-item__view');
		a = item.getElementsByTagName('span');
		if (a[0] == undefined){
			a = item.getElementsByTagName('p')
			clans[buisness - 1] = a[0].textContent;
		}
		clans[buisness - 1] = a[0].textContent;
		if (btnSee == null){
			flag[buisness - 1] = 0;
		}
		else flag[buisness - 1] = 1;
		if (flag[buisness - 1]<flagPrev[buisness - 1]){
		if (clans[buisness - 1]==clansPrev[buisness - 1]){
			addMin = 30;
		}
		else {
			addMin = 60;
			zahvat = '(захват)';
		}
		d = new Date();
		d.setMinutes(d.getMinutes() + addMin);
		d.setHours(d.getHours() + timezone);
		console.log(d.getHours(),d.getMinutes(),d.getSeconds(), names[buisness-1],zahvat);
		(function(){})
		zahvat = '';
		}
		flagPrev[buisness - 1] = flag[buisness - 1];
		clansPrev[buisness - 1] = clans[buisness - 1];
		buisness++;
		if (buisness == 26){
			buisness = 1;
		}
		// сonsol.log(ks)
	}, 50)
})()