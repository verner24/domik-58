const btn = document.querySelector('.main__guide-btn')
const body = document.querySelector('.body')
let modal = document.querySelector('.modal')

btn.onclick = function () {
	console.log('btn')
	modal.classList.add('modal-active')
	body.style.overflowY = 'hidden'
}
