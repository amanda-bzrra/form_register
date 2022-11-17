const formRegister = document.getElementById('form-register')
const fields = document.querySelectorAll('.required')
const controlInput = document.querySelectorAll('.form-control')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

/*Event */
formRegister.addEventListener('submit', (e) => {
	e.preventDefault()
	nameValidate()
	emailValidate()
	passwordValidate()
	comparePassword()

	if (controlInput[2, 3].classList.contains('error')) {
		passwordValidate()
		comparePassword()
	} else {
		toggle()
	}
})


/*functions Validate */

function nameValidate() {
	if (fields[0].value == '') {
		errorValidation(fields[0], 'Name field cannot be empty')
	} else {
		sucessValidation(fields[0])
	}
}


function emailValidate() {
	if (emailRegex.test(fields[1].value)) {
		sucessValidation(fields[1])

	} else {
		errorValidation(fields[1], 'Invalid email')
	}
}


function passwordValidate() {
	if (fields[2].value.length < 6) {
		errorValidation(fields[2], 'The password must contain at least 6 characters')
	} else {
		sucessValidation(fields[2])
	}
}


function comparePassword() {
	if (fields[2].value == fields[3].value && fields[3].value.length >= 6) {
		sucessValidation(fields[3])
	} else {
		errorValidation(fields[3], 'Incorrect password')
	}
}


function errorValidation(input, mng) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small')

	small.innerText = mng

	formControl.className = 'form-control error'
}

function sucessValidation(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control sucess'
}


/* Functions Popup*/

function toggle() {
	const blur = document.querySelector('.container-register')
	const popup = document.querySelector('.popup')

	blur.classList.toggle('active')
	popup.classList.toggle('active')
	removeBtn()

}

function removeBtn() {
	const removeBtn = document.querySelector('.btn')
	removeBtn.style.display = 'none'
}

function addBtn() {
	const addBtn = document.querySelector('.btn')
	addBtn.style.display = 'block'
}

function reloadPage() {
	document.location.reload(true);
}
