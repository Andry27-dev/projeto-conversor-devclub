const convertButton = document.querySelector(".convert-button") /* reconhecer o meu butão  */
/* const convertButton é igual ao (document é o html) (querySelector é o que será selecionado) convert-button que é a classe do botão */

function convertValues() { /* função conveerter valores */
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* valor em real */
    const currencyValueConverted = document.querySelector(".currency-value") /* valor em Dólar */

    const dolarToday = 5.0

    const convertedValue = inputCurrencyValue / dolarToday /* valor de conversão */

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValue)





   
}

convertButton.addEventListener("click", convertValues) /* tag que adicionará o evento, ou seja, o click - ao ser clicado será acionado a funcção convertvalues */