function sortear() {
  var devo = document.getElementById("teste").value;
  var resultado = Math.random() < 0.5 ? "Sim, eu devo" : "Nao, eu nao devo";
  document.getElementById("resultado").innerHTML = resultado + " " + devo;
  if (resultado === "Sim, eu devo") {
    document.getElementById("resultado").style.color = "green";
  } else {
    document.getElementById("resultado").style.color = "red";
  }
}
