let form = document.querySelector(".js-form");
let input = document.querySelector(".js-input");
let selector = document.querySelector(".js-selector");
let result = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let usdValue = 3.79;
    let euroValue = 4.54;
    let gbpValue = 5.22;

    let plnValue = input.value;
    let chosenOption = selector.value;
    let resultElement;

    switch (chosenOption) {
        case "euro":
            resultElement = (plnValue / euroValue).toFixed(2);
            result.innerText = `${resultElement} EUR`;
            break;
        case "usd":
            resultElement = (plnValue / usdValue).toFixed(2);
            result.innerText = `${resultElement} USD`;
            break;
        case "gbp":
            resultElement = (plnValue / gbpValue).toFixed(2);
            result.innerText = `${resultElement} GBP`;
            break;

        default: 
        result.innerText = "Coś poszło nie tak! Spróbuj ponownie";
    }

    form.addEventListener("reset", () => {
        result.innerText = ``;
    });
});