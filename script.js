function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0) {
        window.alert('[ERRO]')
        resposta.innerHTML('Impossível contar')
    }
    else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido: Passo atualizado para 1!')
            p = 1
        }
        if (i < f) {
            //Contagem ascendente
            for(let c = i; c <= f; c +=p ) {
                resultado.innerHTML += ` ${c} ` 
            }
        } else {
            // Contagem regressiva
            for(let c =i; c > f; c -= p) {
                resultado.innerHTML += ` ${c} ` 
            }
        }
    }
    
}