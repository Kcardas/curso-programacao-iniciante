let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirTitulo();

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

document.getElementsByid('reiniciar').addEventListener('click', novoJogo());

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTitulo(){
    exibirTexto('h1', 'Calculadora de IMC');
    exibirTexto('p', 'Digite seu peso: ');
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirTitulo();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    document.getElementById('enter').removeAttribute('disabled');
    limparCampo();
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let textoTentativas = `Você acertou em ${tentativas} ${palavraTentativa}!`;
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Parabéns!');
        exibirTexto('p', textoTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', 'O número secreto é menor!');
        limparCampo();
        tentativas++;
    }else if(chute < numeroSecreto){
        exibirTexto('h1', 'Errou!');
        exibirTexto('p', 'O número secreto é maior!');
        limparCampo();
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function calcularFatorial(){
    let numero = document.querySelector('input').value;
    let numeroMenosUm = numero;
    while(numeroMenosUm > 1){
        numeroMenosUm--;
        numero *= numeroMenosUm;
    }
    exibirTexto('h1', 'Resultado!');
    exibirTexto('p', 'O fatorial é: ' + numero);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enter').setAttribute('disabled', 'disabled');
    limparCampo();
}

function converterMoeda(){
    let valor = document.querySelector('input').value;
    let cotacao = 4.80;
    let resultado = valor * cotacao;
    exibirTexto('h1', 'Resultado!');
    exibirTexto('p', 'O valor convertido é: R$' + resultado);
    limparCampo();
}

function getPeso(){
    let peso = document.querySelector('input').value;
    document.getElementById('enter').setAttribute('onclick', 'getAltura(' + peso + ')');
    exibirTexto('p', 'Digita sua altura: ');
    limparCampo();
    //console.log('Fui clicado!');
}

function getAltura(peso){
    console.log('Fui clicado!');
    let altura = document.querySelector('input').value;
    let imc = peso / (altura * altura);
    imc = parseFloat(imc.toFixed(2));
    exibirTexto('h1', 'Resultado!');
    exibirTexto('p', 'Seu IMC é: ' + imc);
    limparCampo();
    //novoJogo();
}
