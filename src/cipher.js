window.cipher = {

encode (offset,string){

let letter=[];
let result="";

  for(let i=0; i<string.length; i++){
          letter[i]=string.charCodeAt(i)+offset;

                // para saber si esta en mayusculas
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
                letter[i]=((letter[i] - 65) %26) + 65;
                result +=String.fromCharCode(letter[i]);
                // para saber si hay espacios
      }else if(string.charCodeAt(i)==32){
                  letter[i]=string.charCodeAt(i);
                  result += String.fromCharCode(letter[i]);
                  // para saber si son minusculas
         }else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122) {
                  letter[i]=((letter[i]-97) %26 ) + 97;
                  result +=String.fromCharCode(letter[i]);
                  // para caracteres especiales
         }else if(string.charCodeAt(i)<65 && string.charCodeAt(i)<90){
                  letter[i]=((letter[i] - 33) %33) + 33;
                  console.log(letter[i]);
                  result +=String.fromCharCode(letter[i]);
         }

    }

    return result;

},

decode (offset,string){

let letter=[];
let result="";

  for(let i=0; i<string.length; i++){

          letter[i]=string.charCodeAt(i);

              // para saber si esta en mayusculas
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
                letter[i]=(((letter[i]+(offset*-1))+65) %26) + 65;
                result +=String.fromCharCode(letter[i]);

         } else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
            if(offset>26){
              letter[i]=(((letter[i]+offset)+97) %26 ) + 97;
              result +=String.fromCharCode(letter[i]);
          }  else {
            letter[i]=letter[i]- offset;
              result +=String.fromCharCode(letter[i]);
          }

          }    else if(string.charCodeAt(i)==32){
              letter[i]=string.charCodeAt(i);
              result += String.fromCharCode(letter[i]);

         }else if(string.charCodeAt(i)<65 && string.charCodeAt(i)<90){
                  letter[i]=(((letter[i]-offset)+33) %33 ) + 33;
                  result +=String.fromCharCode(letter[i]);
         }
    }

    return result;

}
};
