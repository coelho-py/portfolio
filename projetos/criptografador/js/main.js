function criptografar() {
    var texto = document.getElementById("caixa1").value;
    var texto_Criptografado = '';

    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i);
        var Criptografada = criptografarVogal(char);
        texto_Criptografado += Criptografada !== null ? Criptografada : char;
    }

    document.getElementById("caixa2").value = texto_Criptografado;
}

function criptografarVogal(vogal) {
    switch (vogal.toLowerCase()) {
        case 'a':
            return 'ai';
        case 'e':
            return 'enter'; 
        case 'i':
            return 'imes'; 
        case 'o':
            return 'ober'; 
        case 'u':
            return 'ufat'; 
        default:
            return null; 
    }
}

function descriptografar() {
    var texto_Criptografado = document.getElementById("caixa2").value;
    var texto_Descriptografado = '';

    var i = 0;
    while (i < texto_Criptografado.length) {
        var char1 = texto_Criptografado.charAt(i);
        
        if (char1 === 'a' && texto_Criptografado.charAt(i + 1) === 'i') {
            texto_Descriptografado += 'a';
            i += 2; 
        } else if (char1 === 'e' && texto_Criptografado.substr(i, 5) === 'enter') {
            texto_Descriptografado += 'e'; 
            i += 5; 
        } else if (char1 === 'i' && texto_Criptografado.substr(i, 4) === 'imes') {
            texto_Descriptografado += 'i'; 
            i += 4; 
        } else if (char1 === 'o' && texto_Criptografado.substr(i, 4) === 'ober') {
            texto_Descriptografado += 'o'; 
            i += 4; 
        } else if (char1 === 'u' && texto_Criptografado.substr(i, 4) === 'ufat') {
            texto_Descriptografado += 'u'; 
            i += 4; 
        } else {
            texto_Descriptografado += char1;
            i++;
        }
    }

    document.getElementById("caixa1").value = texto_Descriptografado;
}
function copiar1() {
    var copia = document.getElementById("caixa1");
    copia.select();
    copia.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copia.value);
    alert("seu texto foi copiado com sucesso!")
}
function copiar2() {
    var copia2 = document.getElementById("caixa2");
    copia2.select();
    copia2.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copia2.value);
    alert("seu texto foi copiado com sucesso!")
  }

