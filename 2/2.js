/* 
Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 
*/
const btn = document.getElementById("btn")
btn.addEventListener("click", function () {
	const wh = `Ширина-${window.innerWidth}, Высота-${window.innerHeight}`
	alert(wh)
})