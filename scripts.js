// Seleciona o botão de conversão no DOM
const convertButton = document.querySelector(".convert-button") 
/* querySelector seleciona o elemento no HTML com a classe "convert-button", 
   que é o botão responsável por realizar a conversão ao ser clicado. */

const currencySelect = document.querySelector(".select-currency") 
/* Seleciona o elemento dropdown (select) com a classe "select-currency", 
   onde o usuário escolhe a moeda para conversão (Peso soles ou Dólar). */

function convertValues() { /* Define a função que realiza a conversão de valores */
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    /* Obtém o valor digitado pelo usuário no campo de entrada com a classe "input-currency".
       O ".value" captura o valor numérico informado. */

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    /* Seleciona o elemento HTML onde será exibido o valor original (em reais). */

    const currencyValueConverted = document.querySelector(".currency-value") 
    /* Seleciona o elemento HTML onde será exibido o valor convertido para a moeda escolhida. */

    // Define as taxas de câmbio fixas para Dólar e Euro
    const dolarToday = 6 /* Taxa fixa de câmbio do Dólar (R$ 6,00). */
    const pesosToday = 0.0011 /* Taxa fixa de câmbio do peso Col (R$ 7,50). */
    const solesToday = 1.4 /* Taxa fixa de câmbio do Soles (R$ 7,50). */


    // Verifica qual moeda foi selecionada e realiza a conversão
   
// Formata e exibe o valor original (em reais) no padrão brasileiro (BRL)
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
    style: "currency", 
    currency: "BRL",
}).format(inputCurrencyValue)


    if (currencySelect.value == "pesos") {
        /* Se a moeda selecionada for "euro", realiza a conversão 
           e formata o valor no padrão europeu (EUR). */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-CO", { 
            style: "currency", 
            currency: "COP", 
        }).format(inputCurrencyValue / pesosToday)
    }

    if (currencySelect.value == "soles") {
        /* Se a moeda selecionada for "euro", realiza a conversão 
           e formata o valor no padrão europeu (EUR). */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-PE", { 
            style: "currency", 
            currency: "PEN", 
        }).format(inputCurrencyValue / solesToday)
    }

    if (currencySelect.value == "dolar") {
        /* Se a moeda selecionada for "dólar", realiza a conversão 
           e formata o valor no padrão americano (USD). */
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", 
            currency: "USD", 
        }).format(inputCurrencyValue / dolarToday)



    

    }
}

function changeCurrency() { /* Define a função que muda as informações de acordo com a moeda selecionada */
    const currencyName = document.getElementById("currency-name") 
    /* Seleciona o elemento com o ID "currency-name", onde será exibido o nome da moeda. */

    const currencyImage = document.querySelector(".currency-img") 
    /* Seleciona o elemento com a classe "currency-img", que exibe a imagem da moeda. */

    if (currencySelect.value == "pesos") {
        /* Se a moeda selecionada for "euro", muda o texto e a imagem correspondente. */
        currencyName.innerHTML = "Peso Colombiano" /* Atualiza o texto para "Euro". */
        currencyImage.src = "./assets/image/Colombia.png" /* Altera o caminho da imagem para a bandeira da União Europeia. */
    }

    if (currencySelect.value == "soles") {
        /* Se a moeda selecionada for "euro", muda o texto e a imagem correspondente. */
        currencyName.innerHTML = "Soles" /* Atualiza o texto para "Euro". */
        currencyImage.src = "./assets/image/Peru.png" /* Altera o caminho da imagem para a bandeira da União Europeia. */
    }
    
    if (currencySelect.value == "dolar") {
        /* Se a moeda selecionada for "dólar", muda o texto e a imagem correspondente. */
        currencyName.innerHTML = "Dólar Americano" /* Atualiza o texto para "Dólar Americano". */
        currencyImage.src = "./assets/image/EUA.png" /* Altera o caminho da imagem para a bandeira dos EUA. */
    }

   

    convertValues()  
    /* Chama a função `convertValues` para atualizar automaticamente a conversão ao mudar a moeda. */
}

// Adiciona um evento ao dropdown para ouvir mudanças na seleção de moeda
currencySelect.addEventListener("change", changeCurrency) 
/* Quando o usuário muda a moeda selecionada, a função `changeCurrency` é acionada. */

// Adiciona um evento ao botão para ouvir cliques
convertButton.addEventListener("click", convertValues) 
/* Quando o botão é clicado, a função `convertValues` é executada para realizar a conversão. */
