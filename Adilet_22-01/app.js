// task1
// const email = document.querySelector('#email_inp');
// const password = document.querySelector('#password_inp');
// const login = document.querySelector('#login_btn');
// const result = document.querySelector('#result');

// const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const passwordRegExp = /[A-Za-z]\w{7,14}$/


// login.addEventListener('click', () => {
// 	if (emailRegExp.test(email.value)) {
// 		result.innerHTML = 'Вход разрешен';
// 		result.style.color = 'green';
// 		email.style.borderColor = 'green';
// 	} else {
// 		result.innerHTML = 'Убедитесь в корректности почты или пароля';
// 		email.style.borderColor = 'red';
// 		result.style.color = 'red';
// 	}
// })

// password.addEventListener('click', () => {
// 	if (passwordRegExp.test(password.value)) {
// 		password.style.borderColor = 'green';
// 	} else {
// 		password.style.borderColor = 'red';
// 	}
// })

// task2

const block = document.querySelector('.block');
const square = document.querySelector('.square');


const move = () => {
	square.style.left = `${340}px`
	move()
}
move()
