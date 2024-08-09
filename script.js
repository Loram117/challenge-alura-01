var botaoCriptografar = document.querySelector(".botao__criptografar");
var botaoDescriptografar = document.querySelector(".botao__descriptografar");
var imagemSection2 = document.querySelector(".section__2__imagem");
var paragrafoSection2 = document.querySelector(".section__2__paragrafo");
var resultado = document.querySelector(".texto__resultado");
var caixaTexto = document.querySelector(".area__texto");
var botaoCopiar = document.querySelector(".botao__copiar");


botaoCopiar.classList.add("ocultar");


botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
    ocultarArea();
    var areaTexto = recuperarTexto();
    resultado.textContent = criptografarTexto(areaTexto);
    caixaTexto.value = "";
}

function descriptografar() {
    ocultarArea();
    var areaTexto = recuperarTexto();
    resultado.textContent = descriptografarTexto(areaTexto);
    caixaTexto.value = "";
}

function recuperarTexto() {
    var areaTexto = document.querySelector(".area__texto");
    return removerAcentos(areaTexto.value.toLowerCase());
}

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ocultarArea() {
    imagemSection2.classList.add("ocultar");
    paragrafoSection2.classList.add("ocultar");    
}

function criptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal +="ai"
        }
        else if(texto[i] == "e") {
            textoFinal +="enter"
        }
        else if(texto[i] == "i") {
            textoFinal +="imes"
        }
        else if(texto[i] == "o") {
            textoFinal +="ober"
        }
        else if(texto[i] == "u") {
            textoFinal +="ufat"
        }
        else{
            textoFinal += texto[i]
        }
    }
    return textoFinal;
}

function descriptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal += "a"
            i++;
        }
        else if(texto[i] == "e") {
            textoFinal += "e"
            i += 4;
        }
        else if(texto[i] == "i") {
            textoFinal += "i"
            i += 3;
        }
        else if(texto[i] == "o") {
            textoFinal += "o"
            i += 3;
        }
        
        else if(texto[i] == "u") {
            textoFinal += "u"
            i += 3;
        }
        else{
            textoFinal += texto[i];
        }
        
    }

    return textoFinal;
}


botaoCopiar.addEventListener("click", () => {
    var conteudo = document.querySelector(".texto__resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    alert("Texto copiado com Sucesso!");
});


const observer = new MutationObserver(() => {
    if (resultado.textContent.trim() !== "") {
        botaoCopiar.classList.remove('ocultar');
    }
});

observer.observe(resultado, { childList: true });
