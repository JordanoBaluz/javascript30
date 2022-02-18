function playSound(e){
    // atributo selector para coletar keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //se não tiver audio, finaliza a função
    audio.curretTime = 0; //retorna para o começo e pode tocar varias vezes seguidas
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return //não executa se não for um transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);