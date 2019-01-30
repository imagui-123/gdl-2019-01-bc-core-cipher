// funciones para la pantalla de navegacion
const openNav=()=> {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
};

function encode(){
  console.log("hola");
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let Cifrar=window.cipher.encode(num,string);//Mandamos llamar nuestro metodo cipher
document.getElementById('resultado').innerHTML=Cifrar; //Para visualizar el resultado en la pantalla
}

document.getElementById('cifrar').addEventListener("click",encode);//mandamos llamar la funcion encode
