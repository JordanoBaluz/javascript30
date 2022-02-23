const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    console.log(this.value);
    //dataset objeto que contem todos os atributos do elemento que no caso e px no data-sizing
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

/*forEach recebe uma função callback, nesse caso é passado uma arrow function que irá pegar o elemento e adicionar um eventListener e toda vez que houver uma mudança vai atribuir a função handle ao evento change*/
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));