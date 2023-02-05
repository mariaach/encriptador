var encrypt = vartext => vartext.replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');

var uncrypt = vartext => vartext.replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

var functionValidacionTextoIngresado = text => {
  var regStringValidate = /[A-Z]|[á-ú]|[Á-Ú]|[à-ù]/;
  return regStringValidate.test(text);
}


function funEncryptarTexto() {
    var texto = document.getElementById("texto_ingresado").value;
    var validarMayusculasTildes = functionValidacionTextoIngresado(texto);
    if (!validarMayusculasTildes) {
      encrypt(texto)
      document.getElementById("texto_salida").innerHTML = "El texto encriptado es: " + encrypt(texto);
    } else { 
      document.getElementById("texto_salida").innerHTML=" *No cumple condición";
      document.getElementById("texto_ingresado").value="";
    } 
  }

  function funDesencryptarTexto() {
    var texto = document.getElementById("texto_ingresado").value;
    var validarMayusculasTildes = functionValidacionTextoIngresado(texto);
    if (!validarMayusculasTildes) {
      uncrypt(texto)
      document.getElementById("texto_salida").innerHTML = "El texto desencriptado es: " + uncrypt(texto);
      document.getElementById("texto_ingresado").value="";
    } else { 
      document.getElementById("texto_salida").innerHTML=" *No cumple condicion";
      document.getElementById("texto_ingresado").value="";
    }
  }

  function copiar_pegar() { 
    var textocopiar = document.getElementById("texto_salida").value;
    var textolimpio= textocopiar.replace("El texto encriptado es: " ,"").replace("El texto desencriptado es: " ,"");
    document.getElementById("texto_ingresado").value=textolimpio;
  }