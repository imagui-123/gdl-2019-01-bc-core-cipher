
document.getElementById("cifrado").addEventListener("click",encode);
// let pResultado=document.getElementById('pantalla_resultado');

function encode(){
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let msgCifrar=window.cipher.encode(num,string);//Mandamos llamar nuestro metodo cipher
// resultado.style.display="flex";
document.getElementById('resultado').innerHTML=msgCifrar; //Para visualizar el resultado en la pantalla
}


document.getElementById("descifrado").addEventListener("click",decode);// Mandamos llamar al boton

function decode(){
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let msgDescifrar=window.cipher.decode(num,string);//Mandamos llamar nuestro metodo cipher
// pResultado.style.display="flex";
document.getElementById('resultado').innerHTML=msgDescifrar; //Para visualizar el resultado en la pantalla
}

function limpiar(){
 document.getElementById('msj').value="";
 document.getElementById('num').value="";
 // pResultado.style.display="none";
}

// function resetForm(){
//   document.getElementById('msj').reset();
//   document.getElementById('num').reset();
// }
document.getElementById("clean").addEventListener("click",limpiar);
