const body = document.querySelector('body')
const header = document.querySelector('header')
const logInBtn = document.querySelector('.login-icon')
const modeBtn = document.querySelector('.mode-icon')

const handleMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')
		modeBtn.src = 'images/icon-sun.svg'
		header.classList.toggle('dark')
	} else {
		body.setAttribute('data-mode', 'light')
		modeBtn.src = 'images/icon-moon.svg'
		header.classList.toggle('dark')
	}
}

modeBtn.addEventListener('click', handleMode)
