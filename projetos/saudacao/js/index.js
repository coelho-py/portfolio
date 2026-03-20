function que() {
    let total1 = document.getElementById("total").value;
    let total2 = document.getElementById("total2").value;
    let coisado1 = document.getElementById("coisado").value;

    document.getElementById("resultado").innerHTML = "seja bem vindo " + total1 + "\n sua idade é " + total2 + "\n você nasceu na cidade " + coisado1;
}