const convertButton = document.querySelector(".convert-button") /* reconhecer o meu butão  */
/* const convertButton é igual ao (document é o html) (querySelector é o que será selecionado) convert-button que é a classe do botão */
const currencySelect = document.querySelector(".currency-select")

function convertValues() { /* função conveerter valores */
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /* valor em real */
    const currencyValueConverted = document.querySelector(".currency-value") /* valor em Dólar */

    

    const dolarToday = 6
    const euroToday = 7.5

    

    if (currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency", 
            currency: "USD", }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency", 
            currency: "EUR", }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
        style: "currency", 
        currency: "BRL" }).format(inputCurrencyValue)
    
    }

function changeCurrency() { 
     const currencyName = document.getElementById("currency-name")
     const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/image/EUA.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/image/Euro.png"
    }
   
    convertValues()  
    
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) /* tag que adicionará o evento, ou seja, o click - ao ser clicado será acionado a funcção convertvalues */