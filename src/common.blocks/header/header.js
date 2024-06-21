const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const sublist = document.querySelector('.sublist')
const sub_content = document.querySelector('.sublist__content')
const sub_btn = document.querySelector('.sublist__btn')

burger.onclick = function () {
	if (document.querySelector('.active')) {
		navbar.classList.remove('active')
		burger.classList.remove('active')
	} else {
		navbar.classList.add('active')
		burger.classList.add('active')
	}
}
sublist.onclick = function () {
	if (document.querySelector('.open')) {
		sub_content.classList.remove('open')
		sub_btn.classList.remove('open')
	} else {
		sub_content.classList.add('open')
		sub_btn.classList.add('open')
	}
}
