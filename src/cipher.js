window.cipher = {
  // ...
};

// funciones para la pantalla de navegacion
const openNav=()=> {
  document.getElementById("mySidenav").style.width = "250px";
}

const closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
}

const encode=()=>{

  let txt=document.getElementById('msj').value;
  let num=parseInt(document.getElementById('num').value);
  let result="";
  let letter=[];
  // para saber si escribio número

    for( i=0; i<txt.length; i++){
        letter[i]=txt.charCodeAt(i)+num;

            // para saber si esta en mayusculas
      if(txt.charCodeAt(i)>=65 && txt.charCodeAt(i)<=90){
        // if(letter[i]>=65 && letter[i]<=90){
          letter[i]=((letter[i]-65) %26) + 65;
          result +=String.fromCharCode(letter[i]);

          // para saber si son minúsculas
      } else if(txt.charCodeAt(i)>=97 && txt.charCodeAt(i)<=122){
          letter[i]=((letter[i]-97)%26) + 97;
          result +=String.fromCharCode(letter[i]);
      }else if (txt.charCodeAt(i)==32) {
              letter[i]=txt.charCodeAt(i);
              result += String.fromCharCode(letter[i]);
      }

          // document.write(result);
         // alert(result);
         // console.log(result);
         document.getElementById("resultado").innerHTML=result;

         // document.write(result);
          // return code;
    }
  }
