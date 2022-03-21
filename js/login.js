const loginIcon = document.querySelector('.login-icon')
const loginScreen = document.querySelector('.login-screen')

const username = document.querySelector('.username')
const password = document.querySelector('.password')
const usernameErr = document.querySelector('.username-error')
const passwordErr = document.querySelector('.password-error')

const backBtn = document.querySelector('.btn-back')
const loginBtn = document.querySelector('.btn-login')

const usernameLength = 5
const passwordLength = 8

const clearForm = () => {
	username.value = ''
	password.value = ''
	usernameErr.textContent = ''
	passwordErr.textContent = ''
}

const handleLoginScreen = () => {
	loginScreen.classList.toggle('active')
	setTimeout(clearForm, 1000)
}

const checkForm = () => {
	if (username.value === '') {
		usernameErr.textContent = 'Username cannot be empty'
	} else if (username.value.length < usernameLength) {
		usernameErr.textContent = `Username must be at least ${usernameLength} charachters long`
	} else {
		usernameErr.textContent = ''
	}

	if (password.value === '') {
		passwordErr.textContent = 'Password cannot be empty'
	} else if (password.value.length < passwordLength) {
		passwordErr.textContent = `Password must be at least ${passwordLength} charachters long`
	} else {
		passwordErr.textContent = ''
	}
}

loginIcon.addEventListener('click', handleLoginScreen)
backBtn.addEventListener('click', handleLoginScreen)
loginBtn.addEventListener('click', checkForm)
