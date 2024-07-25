function aplicarEstilos(backgroundImage, iconS, iconL, btsBackground, resultColor, telaBackground, telaColor) {
    document.body.style.backgroundImage = backgroundImage;
    document.getElementById("icone-s").src = iconS;
    document.getElementById("icone-l").src = iconL;
    document.getElementById("btns").style.background = btsBackground;
    document.getElementById("resultado").style.color = resultColor;
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
