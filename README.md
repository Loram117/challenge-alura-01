# Decodificador de Texto

## Descrição

O projeto "Decodificador de Texto" é uma aplicação web que permite aos usuários criptografar e descriptografar mensagens usando um conjunto simples de regras. O aplicativo é projetado para ser responsivo e acessível, funcionando bem em diferentes tamanhos de tela.

## Funcionalidades

- **Criptografar Texto**: Converte texto com base em regras predefinidas.
- **Descriptografar Texto**: Reverte o texto criptografado para sua forma original.
- **Copiar Resultado**: Permite copiar o texto criptografado ou descriptografado para a área de transferência.
- **Interface Intuitiva**: Layout limpo e responsivo para uma boa experiência do usuário.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilo e layout responsivo.
- **JavaScript**: Funcionalidade interativa, incluindo criptografia, descriptografia e cópia de texto.

## Estrutura do Projeto

### 1. `index.html`

Este arquivo contém a estrutura HTML da aplicação, incluindo a área de texto para entrada, botões para criptografar e descriptografar, e a área para exibir os resultados.

### 2. `style.css`

Este arquivo define o estilo da aplicação. Inclui:
- Variáveis de cor e fonte.
- Estilo para layout e botões.
- Regras de responsividade para diferentes tamanhos de tela.

### 3. `script.js`

Este arquivo contém a lógica JavaScript da aplicação, incluindo:
- Funções para criptografar e descriptografar texto.
- Função para copiar o texto para a área de transferência.
- Manipulação da interface com base no estado da aplicação.

## Como Usar

1. **Entrada de Texto**: Insira o texto na área de texto.
2. **Criptografar**: Clique no botão "Criptografar" para converter o texto conforme as regras predefinidas.
3. **Descriptografar**: Clique no botão "Descriptografar" para reverter o texto criptografado.
4. **Copiar**: Clique no botão "Copiar" para copiar o texto resultado para a área de transferência.

## Código

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap">
    <title>Challenge Decodificador</title>
</head>
<body>
    <header>
        <img class="logo" src="assets/Logo.png" alt="logo">
    </header>
    <main>
        <section class="section__1">
            <div class="conteudo__texto">
                <textarea placeholder="Insira o texto aqui" class="area__texto" cols="39" rows="4"></textarea>
            </div>
            <div class="alerta">
                <img src="assets/bi_exclamation-circle-fill.png" alt="alerta">
                <p>somente letras minusculas e sem acentos</p>
            </div>
            <div class="botoes__section__1">
                <input type="button" class="botao__criptografar" value="Criptografar">
                <input type="button" class="botao__descriptografar" value="Descriptografar">
            </div>
        </section>
        <section class="section__2">
            <div class="section__2__imagem">
                <img src="assets/High quality products 1 1.png" alt="crianca">
            </div>
            <div class="section__2__paragrafo">
                <h2>Nenhuma mensagem encontrada</h2>
                <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
            </div>
            <div class="section__2__resultado">
                <p class="texto__resultado"></p>
            </div>
            <div class="section__2__botao">
                <input type="button" class="botao__copiar" value="Copiar">
            </div>
        </section>
    </main>
    <footer class="rodape">Desenvolvido por Douglas L. S. Oliveira, 2024</footer>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (`style.css`)

```css
:root {
    --cor-primaria: #f4f4fc;
    --cor-secundaria: #072B61;
    --cor-terciaria: #ffffff;
    --cor-hover: #272727;
    --fonte-primaria: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

/* Estilos para header, main, e seções */
...
```

### JavaScript (`script.js`)

```javascript
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
```

## Instruções para Desenvolvimento

1. **Clone o Repositório**: Clone este repositório para sua máquina local.
2. **Abra o Projeto**: Abra o arquivo `index.html` em um navegador.
3. **Edite e Teste**: Modifique o código conforme necessário e teste as funcionalidades.

## Contribuições

Se você deseja contribuir para o projeto, por favor, envie um pull request com suas alterações e descreva as melhorias ou correções que foram feitas.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Sinta-se à vontade para ajustar o README conforme necessário!
