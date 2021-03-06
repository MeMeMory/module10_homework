/* 
1.Реализовать чат на основе эхо-сервера wss://echo.websocket.org/
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:

2.Добавить в чат механизм отправки гео-локации:
При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.
*/

const url = "wss://echo.websocket.org/";
const open_btn = document.getElementById("open_connect");
const info_out = document.getElementById("info_output");
const chat_out = document.getElementById("chat_output");
const btn_send = document.getElementById("send");
const btn_geo = document.getElementById("geo");
let websocket;

open_btn.addEventListener("click", function () {

	websocket = new WebSocket(url);
	websocket.onopen = () => {
		document.getElementById("chat_input").style.visibility = "visible";
		open_btn.style.display = "none";
		info_out.innerText = "Соединение установлено";
	}
	websocket.onmessage = (event) => {
		let isLink = "www.openstreetmap.org";
		let response = event.data
		if (!response.includes(isLink)) {
			writeToChat(response, true);
		};

	}
	websocket.onerror = () => {
		info_out.innerText = "При передаче данных произошла ошибка";
	}
})
btn_send.addEventListener("click", function () {
	let chat = document.getElementById("chat_input-field")
	if (!chat.value) {
		return;
	}
	websocket.send(chat.value);
	writeToChat(chat.value, false);
	console.log(chat.value)
	chat.value = '';
})

function writeToChat(message, isRecieved) {
	let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
	chat_out.innerHTML += messageHTML;
}

btn_geo.addEventListener("click", function () {
	if (!navigator.geolocation) {
		info_out.textContent = "Geolocation не поддерживается вашим браузером";
	} else {
		navigator.geolocation.getCurrentPosition((position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			let mapLink = document.createElement("a");
			let geo_url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
			mapLink.setAttribute("target", "_blank");
			mapLink.href = geo_url;
			mapLink.textContent = "Моя локация";
			websocket.send(geo_url);
			writeToChat(mapLink.outerHTML, false)
		});
	}
})