/*
Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
*/

const btn = document.querySelector(".j-btn");
let isActive = false;
const btn1 = `<div class="btn-text" style="margin-right: 5px; line-height: 26px; font-size: 16px;">Иконки в кнопках</div>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 15 15"> 
<path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
</svg>`

const btn2 = `<div class="btn-text" style="margin-right: 5px; line-height: 26px; font-size: 16px;">Иконки в кнопках</div>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 15 15">
<path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z" />
</svg>`
btn.addEventListener("click", function () {
	if (!isActive) {
		btn.innerHTML = btn1
		isActive = true
	} else {
		btn.innerHTML = btn2
		isActive = false
	}
})