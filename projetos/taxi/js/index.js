function que(){
    let total1 = parseInt(document.getElementById("total").value),
        total2 = parseInt(document.getElementById("total2").value),
        coisado1 = parseFloat(document.getElementById("coisado").value),
        coisado2 = parseFloat(document.getElementById("coisado2").value);
    let combustivel = 6.50;

    let metros = total2 - total1;
    let gastosL =  metros / coisado1;
    let preju = gastosL * combustivel;
    let lucro = coisado2 - preju;
    
    km = metros / 1000;

    let texto = ("carro andou por: " + km + "km \n" +
    "<br> <br> gastou de combustivel em: " + gastosL + " Litros. \n" + 
    "<br> <br> o valor do combustivel hoje é R$ " + combustivel +  
    "<br> <br> lucro de: R$" + lucro);

    document.getElementById("resultado").innerHTML = texto;
}
