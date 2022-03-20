const input = document.querySelector('.input')
const ulList = document.querySelector('.ul-list')
const allLi = document.getElementsByTagName('li')
let liNumber = document.querySelector('span')

const btnLi = document.querySelectorAll('.btn-li')
const textLi = document.querySelectorAll('.li-text')
const checkIcon = document.querySelectorAll('.check-icon')
const deleteIcon = document.querySelectorAll('.delete-icon')

const btnAll = document.querySelectorAll('.btn-all')
const btnActive = document.querySelectorAll('.btn-active')
const btnCompleted = document.querySelectorAll('.btn-completed')
const btnClear = document.querySelector('.btn-clear')

const countLi = () => {
	liNumber.textContent = allLi.length
}

const checkKey = (e) => {
	if (e.key === 'Enter') {
		addToDo()
	}
	return
}

const addToDo = () => {
	let newLi = document.createElement('li')
	newLi.setAttribute('marked', 'active')

	newLi.innerHTML = `
    <img alt="delete task icon" class="delete-icon">
    <p class="li-text">${input.value}</p>
    <button class="btn-li"><img class="check-icon"></button>
    `

	if (input.value === '' || input.value.startsWith(' ')) {
		return
	} else {
		ulList.appendChild(newLi)
		input.value = ''
		countLi()
	}
}

const deleteToDo = (e) => {
	if (e.target.classList.contains('delete-icon')) {
		ulList.removeChild(e.target.closest('li'))
	}
	countLi()
}

const toggleState = (e) => {
	if (
		e.target.classList.contains('li-text') ||
		e.target.classList.contains('btn-li') ||
		e.target.classList.contains('check-icon')
	) {
		if (e.target.closest('li').classList.contains('checked')) {
			e.target.closest('li').classList.toggle('checked')
			e.target.closest('li').setAttribute('marked', 'active')
		} else {
			e.target.closest('li').classList.toggle('checked')
			e.target.closest('li').setAttribute('marked', 'completed')
		}
	}
}

countLi()

input.addEventListener('keydown', checkKey)
ulList.addEventListener('click', deleteToDo)
ulList.addEventListener('click', toggleState)
