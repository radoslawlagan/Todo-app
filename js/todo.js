const input = document.querySelector('.input')
const ulList = document.querySelector('.ul-list')
const allLi = document.getElementsByTagName('li')
let liNumber = document.querySelector('span')

const btnLi = document.querySelectorAll('.btn-li')
const textLi = document.querySelectorAll('.li-text')
const checkIcon = document.querySelectorAll('.check-icon')
const deleteIcon = document.querySelectorAll('.delete-icon')

const filterBtns = document.querySelectorAll('.btn')
const btnAll = document.querySelectorAll('.btn-all')
const btnActive = document.querySelectorAll('.btn-active')
const btnCompleted = document.querySelectorAll('.btn-completed')
const btnClear = document.querySelector('.btn-clear')

let liArr

const getAllLi = () => {
	liArr = Array.from(ulList.children)
}

const countLi = () => {
	liNumber.textContent = ulList.children.length
}

const checkInputKey = (e) => {
	if (e.key === 'Enter') {
		addToDo()
	}
}

const addToDo = () => {
	let newLi = document.createElement('li')
	newLi.classList.add('active')

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
			e.target.closest('li').classList.toggle('active')
			e.target.closest('li').classList.toggle('checked')
		} else {
			e.target.closest('li').classList.toggle('active')
			e.target.closest('li').classList.toggle('checked')
		}
	}
}

// filtering //

const btnFilter = (e) => {
	filterBtns.forEach((btn) => btn.classList.remove('btn-filter'))
	e.target.classList.toggle('btn-filter')
}

const displayAll = () => {
	getAllLi()

	liArr.forEach((item) => (item.style.display = 'flex'))
}

const displayActive = () => {
	getAllLi()

	liArr.forEach((item) => {
		if (item.classList.contains('checked')) {
			item.style.display = 'none'
		} else {
			item.style.display = 'flex'
		}
	})
}

const displayCompleted = () => {
	getAllLi()

	liArr.forEach((item) => {
		if (item.classList.contains('active')) {
			item.style.display = 'none'
		} else {
			item.style.display = 'flex'
		}
	})
}

const clearCompleted = () => {
	getAllLi()

	liArr.forEach((item) => {
		if (item.classList.contains('checked')) {
			ulList.removeChild(item)
		}
	})

	countLi()
}

countLi()

input.addEventListener('keydown', checkInputKey)
ulList.addEventListener('click', deleteToDo)
ulList.addEventListener('click', toggleState)

filterBtns.forEach((btn) => btn.addEventListener('click', btnFilter))
btnAll.forEach((btn) => btn.addEventListener('click', displayAll))
btnActive.forEach((btn) => btn.addEventListener('click', displayActive))
btnCompleted.forEach((btn) => btn.addEventListener('click', displayCompleted))
btnClear.addEventListener('click', clearCompleted)
