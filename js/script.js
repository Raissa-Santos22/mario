//crio uma variavel que vai guardar a imagem do mario
const mario = document.querySelector('.mario')

//guardando a imagem em uma variavel pipe
const pipe = document.querySelector('.pipe')

//armazenando as nuvens em uma variavel 
const cloud = document.querySelector('.clouds')

//crio uma funcao seta (arrow function)
const jump = () => {
    //aqui ele vai adicionar a classe jump do css na imagem do mario fazendo ele pular
    mario.classList.add('jump');
    setTimeout(() => {
        //removo a classe para poder colocar novamente ao clicar qualquer tecla
        mario.classList.remove('jump');
    }, 500);
};

//ao precionar a tecla, chamo a funcao seta jump
document.addEventListener('keydown', jump)

const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft

const cloudPosition = cloudoffsetLeft

const marioPosition = +getComputedStyle(mario).bottom.replace("px","")

  if(pipePosition <= 120  && pipePosition > 0 && marioPosition < 110){

    console.log(marioPosition)
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`
    
    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

   cloud.style.animation = 'none'
   cloud.style.bottom = `${cloudPosition}px`

    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    
    clearInterval(loop)
  }
},10);

