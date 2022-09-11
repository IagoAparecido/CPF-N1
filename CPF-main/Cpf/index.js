let botao = document.getElementById("botao");
let cpf = document.getElementById("cpf");

function ativaDesativaBotao(cpf) {
  if (cpf.value != "") {
    botao.disabled = false;
  }
  if (cpf.value.length == 11) {
  } else {
    botao.disabled = true;
  }
}
ativaDesativaBotao(cpf);

function calculoCpf(cpf) {
  let Soma;
  let Resto;
  Soma = 0;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

$("#botao").click(function a() {
  let cpf = document.getElementById("cpf").value;
  if (calculoCpf(cpf)) {
    setTimeout(function () {
      document.getElementById("acerto").style.display = "block";
      document.getElementById("teste").innerHTML = "";
    }, 1000);
    document.getElementById("acerto").style.display = "none";
    document.getElementById("erro").style.display = "none";
    document.getElementById("teste").innerHTML = "<p>. . .</p>";
  } else {
    setTimeout(function () {
      document.getElementById("erro").style.display = "block";
      document.getElementById("teste").innerHTML = "";
    }, 1000);
    document.getElementById("acerto").style.display = "none";
    document.getElementById("erro").style.display = "none";
    document.getElementById("teste").innerHTML = "<p>. . .</p>";
  }
});
