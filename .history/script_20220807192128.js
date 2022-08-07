function Converter() {
  let input = parseFloat(document.getElementById("valor_inicial").value);
  let output = document.getElementById("resultado");
  let de = document.getElementById("moedasde");
  let para = document.getElementById("moedaspara");

  if (isNaN(input)) {
    output.innerHTML =
      "Por favor, adicione um valor para converter e selecione as moedas!";
  } else {
    if (de.value == "BRL" && para.value != "para") {
      console.log("real");
      let valorEmReais = input;
      let valor;
      if (para.value == "BRL") {
        valor = "O valor em reais é: R$" + valorEmReais.toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmReais * 0.1885).toFixed(2);
      } else if (para.value == "USD") {
        valor = "O valor em dólar é: $" + (valorEmReais * 0.1917).toFixed(2);
      }
      output.innerHTML = valor;
    } else if (de.value == "EUR" && para.value != "Moeda 2") {
      let valorEmEuros = input;
      let valor;

      if (para.value == "EUR") {
        valor = "O valor em euros é: €" + valorEmEuros.toFixed(2);
      } else if (para.value == "USD") {
        valor = "O valor em dólar é: $" + (valorEmEuros * 1.0167).toFixed(2);
      } else if (para.value == "BRL") {
        valor = "O valor em reais é: R$" + (valorEmEuros * 5.303).toFixed(2);
      }
      output.innerHTML = valor;
    } else if (de.value == "USD" && para.value != "Moeda 2") {
      
      let valorEmDolar = input;
      let valor;

      if (para.value == "USD") {
        valor = "O valor em dólar é: $" + valorEmDolar.toFixed(2);
      } else if (para.value == "BRL") {
        valor = "O valor em dólar é: R$" + (valorEmDolar * 5.16).toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em dólar é: €" + (valorEmDolar * 0.9832).toFixed(2);
      }
      output.innerHTML = valor;
    } else {
      output.innerHTML = "";
    }
  }
}
