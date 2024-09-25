let weightNumber = document.getElementById("number");
let error = document.getElementById("error");
let errorTime;
let resultText = document.getElementById("resultText");
let resultTime;

function updateResult() {
    let weightNumberValue = weightNumber.value;
    if (weightNumberValue == 0 || isNaN(weightNumberValue)) {
        error.innerHTML = "Please input a valid number";
        resultText.innerHTML = "";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            error.innerHTML = "";
        }, 2000);
    } else{
        resultText.innerText = (weightNumberValue / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime.setTimeout(() =>{
            result.innerHTML = "";
        }, 10000);
    }
}

weightNumber.addEventListener("input", updateResult);