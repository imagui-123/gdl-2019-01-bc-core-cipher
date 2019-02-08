window.cipher = {

  encode (offset,string){

  let letter=[];
  let result="";
  let codigo="";

    for(let i=0; i<string.length; i++){
           codigo=string.charCodeAt(i);
          console.log(codigo);
          if(codigo>=97 && codigo<=122){
            result=(((codigo - 97 )+ offset) %26 ) + 97;
          } else if(codigo==32){
            result=codigo;
          }else if(codigo<65 && codigo<90){
            result=(((codigo + offset)-33) %33 ) +33;
          }
          else {
            result=((codigo-65+offset)%26+65);
          }
            letter.push(String.fromCharCode(result));
      }
      let resultado=letter.join("");
      return resultado;
  },

  
  decode (offset,string){

  let letter=[];
  let result="";
  let codigo="";

    for(let i=0; i<string.length; i++){

            codigo=string.charCodeAt(i);
            console.log(codigo);
            if(codigo>=97 && codigo<=122){
              result=(((codigo - 122)+ ( - offset))%26) +122;
            }else if(codigo==32){
              result=codigo;
            }else if(codigo<65 && codigo <90){
              result=(((codigo - offset) +33) %33) +33;
              console.log(result);
            }else{
              result=((codigo + 65 + (offset* -1)) % 26) + 65;
            }
              letter.push(String.fromCharCode(result));
          }
          let resultado=letter.join("");
          return resultado;
        }

};
