window.cipher = {

encode (offset,string){

let letter=[];
let result="";
  for(let i=0; i<string.length; i++){
          letter[i]=string.charCodeAt(i)+ offset;
              console.log(letter[i]);
              // para saber si esta en mayusculas
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
                letter[i]=((letter[i]-65) %26) + 65;
                result +=String.fromCharCode(letter[i]);
         }else if(string.charCodeAt(i)==32){
                  letter[i]=string.charCodeAt(i);
                  result += String.fromCharCode(letter[i]);
         }else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122) {
                  letter[i]=((letter[i]-97) %26 ) + 97;
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

         } else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122) {
                  letter[i]=(((letter[i]+offset)+97) %26 ) + 97;
                  console.log(letter[i]);
                  result +=String.fromCharCode(letter[i]);
         }else if(string.charCodeAt(i)==32){
                  letter[i]=string.charCodeAt(i);
                  result += String.fromCharCode(letter[i]);
         }
    }

    return result;

}

};
