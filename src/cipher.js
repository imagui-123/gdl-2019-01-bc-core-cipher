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
  let result=[];
  let code;
  // code;
 // alert(txt);
 // alert(num);
  // para saber si escribio número

    for(let i=0; i<txt.length; i++){
        result[i]=txt.charCodeAt(i);
        // alert(result[i]);
            // para saber si esta en mayusculas
      if(txt.charCodeAt(i)>=65 && txt.charCodeAt(i)<=90){
        result[i]=(((result[i]-65) + num) % 26) + 65;
          alert(result[i]);
      }   // para saber si son minusculas
      // else if (txt.charCodeAt(i)>=97 && txt.charCodeAt(i)<=122) {
      //   code=(((txt.fromCharCode[i]-97) + num) %26) + 97;
      // }
      // else if(txt.charCodeAt(i)===32){
      //   code=32;
      // }
        // result +=txt.fromCharCode(code);
        alert("final");
         document.write(String.fromCharCode.apply(null,result));
          // return code;
    }

        // alert("final");
        //  document.write(String.fromCharCode.apply(null,code));
        // document.write("Tu gancia neta $" + code);
}
