const mario = document.querySelector('.mario');

const pulo = () => {
    mario.classList.add('pulo');
}



document.addEventListener("keydown" ,pulo);