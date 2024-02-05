function Operar() {
    var inputText = document.getElementById("inputText").value;
    var option = document.getElementById("option").value;
    var outputText = "";

    if (option === "encriptarTexto") {
        outputText = encriptarTexto(inputText);
    } else if (option === "desencriptarTexto") {
        outputText = desencriptarTexto(inputText);
    }

    document.getElementById("salidaTexto").value = outputText;
}

function encriptarTexto(texto) {
    return texto.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function CopiarTexto() {
    var outputText = document.getElementById("salidaTexto");
    outputText.select();
    document.execCommand("copy");
    alert("¡Texto copiado! " + outputText.value);
}
