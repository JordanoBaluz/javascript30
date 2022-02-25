const panels = document.querySelectorAll('.panel');
//quando clicado, abre o elemento
function toggleOpen() {
    //classList permite lista de classes do elemento da DOM e usar os metodos
    this.classList.toggle('open');
    //metodo toggle adiciona ou remove
}

//quando elemento abre, traz o restante dos elementos p
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        //adiciona a classe open-active para disparar o css que trás o restante dos elementos p
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));