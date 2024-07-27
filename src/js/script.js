function aplicarEstilos(backgroundImage, iconS, iconL, btsBackground, resultColor, telaBackground, telaColor) {
    document.body.style.backgroundImage = backgroundImage;
    document.getElementById("icone-s").src = iconS;
    document.getElementById("icone-l").src = iconL;
    document.getElementById("btns").style.background = btsBackground;
    document.getElementById("result").style.color = resultColor;
    document.getElementById("visor").style.background = telaBackground;
    
}

function claro() {
    aplicarEstilos(
        "linear-gradient(var(--cor3), var(--cor4))",
        "./src/img/Sol-2.png",
        "./src/img/Lua-1.png",
        "white",
        "var(--cor2)",
        "white",
        "black"
    );
}

function escuro() {
    aplicarEstilos(
        "linear-gradient(var(--cor3), var(--cor1))",
        "./src/img/Sol-1.png",
        "./src/img/Lua-2.png",
        "none",
        "none",  
        "none",
        ""
    );
}

var r = document.getElementById("result")
function clickNumber(num) {
    if (result.innerText === "0") {
        result.innerText = num;
    } else {
        result.innerText += num;
    }
}
function clickOperator(op) {
    result.innerText += " " + op + " ";
}

function apagar() {
    result.innerText = "0";
}


function total() {
    try {
        result.innerText = eval(result.innerText.replace(/ /g, ""));
    } catch (e) {
        result.innerText = "Error";
    }
}
function pos_neg() {
    let displayValue = result.innerText.trim();
    if (displayValue !== "0" && displayValue !== "") {
        let parts = displayValue.split(" ");
        let lastPart = parts[parts.length - 1];
        if (!isNaN(lastPart)) {
            lastPart = parseFloat(lastPart);
            lastPart = -lastPart;
            parts[parts.length - 1] = lastPart;
            result.innerText = parts.join(" ");
        }
    }
}