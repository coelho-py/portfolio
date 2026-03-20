function que() {
    let total1 = document.getElementById("total").value;
    let total2 = document.getElementById("total2").value;
    let coisado1 = document.getElementById("coisado").value;
    let coisado2 = document.getElementById("coisado2").value;
    let coisado = coisado1 + coisado2;
    let total = total1 + total2;
    resultado = coisado * 100 / total;
    document.getElementById("resultado").innerHTML = resultado + "%";
}
