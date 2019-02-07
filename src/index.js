
document.getElementById("cifrado").addEventListener("click",comprobar);
let Mensaje=document.getElementById('resultado');


// let pResultado=document.getElementById('pantalla_resultado');

function encode(){
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let msgCifrar=window.cipher.encode(num,string);//Mandamos llamar nuestro metodo cipher
Mensaje.style.display="flex";
document.getElementById("input").reset();
document.getElementById('resultaM').innerHTML=msgCifrar; //Para visualizar el resultado en la pantalla
}


document.getElementById("descifrado").addEventListener("click", comprobarD);// Mandamos llamar al boton

function decode(){
  console.log("entra");
let string=document.getElementById('msj').value;
let num=document.getElementById('num').value;
let msgDescifrar=window.cipher.decode(num,string);//Mandamos llamar nuestro metodo cipher
Mensaje.style.display="flex";
document.getElementById("input").reset();
document.getElementById('resultaM').innerHTML=msgDescifrar; //Para visualizar el resultado en la pantalla
}

document.getElementById("clean").addEventListener("click",limpiar);
function limpiar(){
  location.reload(true);
  text.reset();
  // document.getElementById("input").reset();
}

document.getElementById('copy').addEventListener("click",copiar);
function copiar(){
  let copyText=document.getElementById('resultaM');
  copyText.select();
  document.execCommand("copy");
}

function comprobar() {
let string=document.getElementById('msj').value;
let num=document.getElementById('num').value;
  if(string == "" || num==""){
      alert("Necesitas llenar los campos");
  }
  else if (num <= 0 || num >= 100) {
      alert("El número debe ser entre 1 y 99");
  } else {
    encode();
  }
}

  function comprobarD() {
  let string=document.getElementById('msj').value;
  let num=parseInt(document.getElementById('num').value);
    if(string == "" || num==""){
        alert("Necesitas llenar los campos");
    } else if (num <= 0 || num >= 100) {
        alert("El número debe ser entre 1 y 99");
    }  else {
      decode();
    }
  }

  let input=document.getElementById('msj');
  let text=document.getElementById('text');
  input.addEventListener("keyup",function(event){
    if(event.getModifierState("CapsLock")){
      text.style.display="block";
    }else{
      text.style.display="none";
    }
  });

  document.getElementById('mail').addEventListener("click",correo);
  function correo() {
    window.location.href="mailto:address@outlook.com";
  }

document.getElementById('acerca').addEventListener("click",ab);

function ab() {
  document.getElementById('id01').style.display='block';
}


let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event) {

    if (event.target == modal) {
        modal.style.display = "none";

    }
};
