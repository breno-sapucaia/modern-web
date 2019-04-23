//função criarElemento é usada para criar um novo elemento usando callback
function criarElemento(tagElemen, className) {
    const elem = document.createElement(tagElemen)
    elem.className = className
    return elem
}

//função construtora Barreira é suada para instanciar um objeto barreira cujo tem caracterista
//set altura e criação e organização do cano

function Barreira(reversa = false) {
    this.elemento = criarElemento('div', 'barreira')
 
    const borda = criarElemento('div', 'borda')
    const corpo = criarElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
 
    this.setAltura = altura => corpo.style.height = `${altura}px`
}
 
// nessa função ciramos um elmento par de barreiras q concite em 2 funções constutoras de Barreiras
// e na hora da criação do par sorteamos a altura onde a abertura vai estar
// também usamos funções para reotranr o valor da posição do par no elemento x
// como também usamos para setar o x novamente quando ele sair do campo de visão da div wp-flappy
function ParDeBarreiras(altura, abertura, x) {
    this.elemento = criarElemento('div', 'par-de-barreiras')
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)
 
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
 
    this.sortearAltura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
 
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getWidth = () => this.elemento.clientWidth
 
    this.sortearAltura()
 
    this.setX(x)
}
 
// aqui é onde a magia acontece: cria-se uma rray de barreiras usando o this.pares e ParDeBarreiras
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    // constante de movimentação da animação
    const deslocador = 9
    //função da animação
    this.animar = () => {
        //percorre todos os elementos do array acima
        this.pares.forEach(par => {

            // como é um forEach dentro de um setInterval esses codigos vão executar sempre dentro do tempo de 20 milésimos
            // sendo par um parametro da unidade parbarreira criada acima
            // setamos a posicao do par pegando a atual e diminuindo pela constante deslocador
            par.setX(par.getX() - deslocador)
            //verifica se o par saiu da tela
            //se for o caso manda o mesmo para o começo do jogo
            if (par.getX() < -par.getWidth()) {
                par.setX(par.getX() + (espaco * this.pares.length))
                par.sortearAltura()
            }
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocador >= meio && par.getX() < meio
            cruzouOMeio && notificarPonto()
        })
    }
}

function Passaro(alturaJogo){
    let voando = false

    this.elemento = criarElemento('img','passaro');
    this.elemento.src = './imgs/passaro.png';

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando =true
    window.onkeyup = e => voando =false

    this.animar = () => {
        const novoY = this.getY()  + (voando ? 15 : -10);
        const alturaMaxima = alturaJogo - this.elemento.clientHeight;
        
        if(novoY <= 0){
            this.setY(0)
        }else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo/2)
}

function Progresso(){
    this.elemento = criarElemento('span','progresso');
    this.atualizarPontos = ponto => {
        this.elemento.innerHTML = ponto
    }
    
    this.atualizarPontos(0);
}

function estaoSobrepostos(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top

    return horizontal && vertical
}


function colidiu(passaro, barreiras){
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}


function FlappyBird(){
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]');

    const altura = areaDoJogo.clientHeight;
    const largura = areaDoJogo.clientWidth;
    const progresso = new Progresso();
    const barreiras = new Barreiras(altura,largura,250,452,() => progresso.atualizarPontos(++pontos));
    const passaro = new Passaro(altura);

    areaDoJogo.appendChild(progresso.elemento);
    areaDoJogo.appendChild(passaro.elemento);
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        const temporizador = setInterval(() =>{
            barreiras.animar()
            passaro.animar()
            if(colidiu(passaro, barreiras)){
                clearInterval(temporizador)
                areaDoJogo.appendChield
            }
        },20)
    }
}

new FlappyBird().start();