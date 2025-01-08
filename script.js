//establish display
const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    }
    catch(error){
        display.value = "Error";
    }
}
//Event listener so user can use keyboard as well as buttons.
document.addEventListener("keydown", (event) => {
    const key = event.key; 
    if (!isNaN(key) || key == "+" || key == "-" || key == "*" || key == "/" || key == "." || key == ")" || key == "(") {
        appendToDisplay(key);
    } else if (key == "Enter" || key == "=") {
        calculate();
    } else if (key == "Backspace") {
        const display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    } else if (key == "C" || key == "c") {
        clearDisplay();
    }
});
