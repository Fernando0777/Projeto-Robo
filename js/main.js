const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode, evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle, eventoPeca){
    const peca = controle.querySelector('[data-contador]')

    if(operacao === '-'){
        if(peca.value > 0){
           peca.value = parseInt(peca.value) - 1
           atualizaEstatisticas(eventoPeca, operacao)
        }
        
    }else{
        peca.value = parseInt(peca.value) + 1
        atualizaEstatisticas(eventoPeca, operacao)
    }
}

function atualizaEstatisticas(peca, operacao){
    estatisticas.forEach( (elemento) => {
        if(operacao === '-'){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica] 
        }else{
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } 
    })
}

const botoes = document.querySelectorAll('.botoes button');

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const corSelecionada = botao.getAttribute('data-cor')
        const imagemSelecionada = document.querySelector('.show')
        imagemSelecionada.classList.remove('show')
        document.getElementById(`robotron-${corSelecionada}`).classList.add('show')

    })
})


