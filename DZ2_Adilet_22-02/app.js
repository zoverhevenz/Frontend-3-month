const block = document.querySelector('.block');
const square = document.querySelector('.square');

let posX = 0;
let posY = 0;

const move = () => {
	if (posX <= 320 && posY === 0) {
		posX += 20;
		square.style.left = `${posX}px`;
		setTimeout(move, 60);
	} else if (posX >= 320 && posY <= 320) {
		posY += 20;
		square.style.top = `${posY}px`;
		setTimeout(move, 60);
	} else if (posX >= 0 && posY >= 320) {
		posX -= 20;
		square.style.left = `${posX}px`;
		setTimeout(move, 60);
	} else if (posX <= 320 && posY >= 0) {
		posY -= 20;
		square.style.top = `${posY}px`;
		setTimeout(move, 60);
	}
};
move();

let timer = setInterval(() => { console.log('seconds left'); }, 1000)
setTimeout(() => clearInterval(timer), 60000)


