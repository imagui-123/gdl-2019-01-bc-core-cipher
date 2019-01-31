
document.getElementById("cifrado").addEventListener("click",encode);

function encode(){
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let msgCifrar=window.cipher.encode(num,string);//Mandamos llamar nuestro metodo cipher
document.getElementById('resultado').innerHTML=msgCifrar; //Para visualizar el resultado en la pantalla
}


document.getElementById("descifrado").addEventListener("click",decode);

function decode(){
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let msgDescifrar=window.cipher.decode(num,string);//Mandamos llamar nuestro metodo cipher
document.getElementById('resultado').innerHTML=msgDescifrar; //Para visualizar el resultado en la pantalla
}

function limpiar(){
 document.getElementById('msj').value="";
 document.getElementById('num').value="";
}
document.getElementById("clean").addEventListener("click",limpiar);
