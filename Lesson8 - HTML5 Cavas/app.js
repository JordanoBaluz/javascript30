const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; //irá colocar a area desenho em toda a tela disponível

ctx.strokeStyle = '#BADA55'; //cor usada no desenho
ctx.lineJoin = 'round'; //determina o formatado das linhas quando se encontram
ctx.lineCap = 'round'; //determina o formato do ponto final da linha
ctx.lineWidth = 100; // tamanho da linha desenhada

let isDrawing = false; //irá testar se está segurando o mouse para desenhar
let lastX = 0;
let lastY = 0; //irá pegar o ponto  inicial da linha desenhada
let hue = 0; //define a cor da linha durante o desenho
let direction = true;

function draw(e) {
    if (!isDrawing) return //função não irá funcionar se não estiver precionado o botão do mouse

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //modifica a cor da linha durante o desenho

    ctx.beginPath();
    //ponto inicial
    ctx.moveTo(lastX, lastY);
    //ponto para onde se moveu
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    //incrementa as cores e reseta quando chegar no maximo que é 360
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    //quando a largura da linha atingir a largura maxima, reseta para começar a diminuir o tamanho da linha
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    //incrementa ou decrementa a largura da linha
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

//irá fazer a leitura do mouse na tela de desenho e determinar se está com o botão clicado ou não para desenhar
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    //atualiza o ponto inicial da linha, para começar de onde está sendo clicado
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);