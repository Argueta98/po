function contarSaltos() {
    const planetaInicial = document.getElementById("inputNumero").value;
    if (planetaInicial < 10000) {
      document.getElementById("resultado").innerHTML = "El número debe ser mayor o igual a 10000.";
    } else {
      let saltos = 0;
      let n = planetaInicial;
      let resultado = "";
  
      while (n > 1) {
        resultado += `Planeta actual: ${n}<br>`;
        if (n % 2 === 0) {
          n /= 2;
        } else {
          n = n * 3 + 1;
        }
        saltos++;
      }
      
      resultado += `Planeta final: ${n}<br>`;
      resultado += `El número total de saltos desde el planeta ${planetaInicial} hasta la Tierra es ${saltos}.`;
      document.getElementById("resultado").innerHTML = resultado;
    }
  }
  