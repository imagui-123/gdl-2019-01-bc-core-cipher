
document.getElementById("cifrado").addEventListener("click",intro); // Mandamos llamar al boton
document.getElementById("descifrado").addEventListener("click", intro1);// Mandamos llamar al boton

let descifra=document.getElementById("descifrado"); //boton descifrar
let cifra=document.getElementById("cifrado");       //boton cifrar
let pagResult=document.getElementById('pagResult'); // resultado del mensaje
let pagWrite=document.getElementById('pagWriteMsj');  // escribir mensaje
let pagButton=document.getElementById('pagButton');  // botones cifrado y descifrado

function intro(){
  pagWrite.style.display="block"; //muestra
  pagButton.style.display="none"; // oculta
  descifra.style.display="none";
  cifra.style.display="block";
  pagWrite.style.display="none";
  who();
}

function intro1(){
  pagWrite.style.display="block";
  pagButton.style.display="none";
  descifra.style.display="block";
  cifra.style.display="none";
  pagWrite.style.display="none";
  who();
}

function who(){
  let string=document.getElementById('msj').value;
  let num=document.getElementById('num').value;
  if(string == "" || num==""){
      alert("Necesitas llenar los campos");
  }
  else if (num <= 0 || num >= 100) {
      alert("El número debe ser entre 1 y 99");
  }
  if (cifra.style.display=='block') {
    encode();
  } else {
    decode();
  }
}

//------------------------------------------cifrado-----------------------------------------
function encode(){
let string=document.getElementById('msj').value;
let num=parseInt(document.getElementById('num').value);
let msgCifrar=window.cipher.encode(num,string);//Mandamos llamar nuestro metodo cipher
pagResult.style.display="block";
document.getElementById('resultaM').innerHTML=msgCifrar; //Para visualizar el resultado en la pantalla
}

//------------------------------------------descifrado-----------------------------------------
function decode(){
let string=document.getElementById('msj').value;
let num=document.getElementById('num').value;
let msgDescifrar=window.cipher.decode(num,string);//Mandamos llamar nuestro metodo cipher
pagResult.style.display="block";
document.getElementById('resultaM').innerHTML=msgDescifrar; //Para visualizar el resultado en la pantalla
}

// ------------------------ para borrar datos en toda la pantalla -------------------------------
document.getElementById("bNew").addEventListener("click",limpiar);
function limpiar(){
  location.reload(true);
  text.reset();
}

// ------------------------- para copiar el resultado de cifrado o descifrado -------------------
document.getElementById('copy').addEventListener("click",copiar);
function copiar(){
  let copyText=document.getElementById('resultaM');
  copyText.select();
  document.execCommand("copy");
}


// --------------- verifica que el usuario utiliza las mayusculas -----------------------------
  let input=document.getElementById('msj');
  let text=document.getElementById('text');
  input.addEventListener("keyup",function(event){
    if(event.getModifierState("CapsLock")){
      text.style.display="block";
    }else{
      text.style.display="none";
    }
  });


// --------------------- abrir correo----------------------------------------
  document.getElementById('mail').addEventListener("click",correo);
  function correo() {
    window.location.href="mailto:address@outlook.com";
  }


//  --------------------- para abrir el acerca de----------------------------
document.getElementById('acerca').addEventListener("click",ab);

function ab() {
  document.getElementById('id01').style.display='block';
  pagWrite.style.display="none"; //esconde

}

//  ---------------- para cerrar la ventana de acerca de fuera de la pantalla-----

let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick=function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
        pagWrite.style.display="block"; //muestra

    }
};
